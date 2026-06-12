# AGENTS.md — Vue 3 + TypeScript Code Style

This file defines the code generation rules for this codebase. All agents and contributors
must follow these conventions. Rules are derived from Anthony Fu / VueUse patterns and
Matt Pocock's Total TypeScript guidance.

---

## Vue 3 Rules

### Component authoring

- Always use `<script setup lang="ts">`. Never write new code with Options API.
- Always type `defineProps` and `defineEmits` using the generic/type-argument syntax,
  not the runtime object syntax.
- Never mutate props. Emit events to signal changes to the parent.
- Do not access `.value` inside `<template>` — the template unwraps refs automatically.

```vue
<script setup lang="ts">
const props = defineProps<{
  title: string;
  count?: number;
}>();

const emit = defineEmits<{
  update: [value: string];
  close: [];
}>();
</script>
```

### Reactivity primitives

- Use `ref` for primitive values (string, number, boolean).
- Use `shallowRef` for objects or arrays that are replaced wholesale, not mutated in place.
- Use `reactive` only when deep mutation semantics are genuinely required.
- Use `computed` for all derived state. Never manually sync derived state with a watcher.
- Use `markRaw` for non-reactive third-party objects (map instances, canvas contexts, etc.).
- Never destructure a `reactive` object without `toRefs` — it silently breaks reactivity.

```ts
// Wrong — breaks reactivity
const { count } = state;

// Right
const { count } = toRefs(state);
```

### Composables

- Prefix every composable with `use`. Place composable files in `src/composables/`.
- Put business logic in composables, not in views or directly in components.
- Return refs directly (not `.value`) so callers can destructure while retaining reactivity.
- Return state as `readonly` to prevent callers from mutating it directly.
- Accept `MaybeRefOrGetter<T>` as input when the composable could usefully accept either
  a plain value, a ref, or a getter. Use `toValue()` internally to normalize.
- Register cleanup for every side effect (`onUnmounted`). Event listeners, timers, and
  observers registered inside a composable must be removed when the component unmounts.

```ts
export function useCounter(initial = 0) {
  const count = ref(initial);
  const increment = () => count.value++;
  const reset = () => {
    count.value = initial;
  };
  return { count: readonly(count), increment, reset };
}
```

### State management

- Component-local state: `ref` / `reactive` inside `<script setup>`. No store needed.
- Shared state across a feature: a composable with module-level refs (shared singleton).
- App-wide state: Pinia only. Never use Vuex in this codebase.
- Use the Pinia setup store syntax (Composition API style), not the options store.
- Split stores by domain — one bounded context per store (`useCartStore`, `useAuthStore`).
  Do not create one monolithic store.

```ts
// stores/useCartStore.ts
export const useCartStore = defineStore("cart", () => {
  const items = ref<Product[]>([]);
  const total = computed(() => items.value.reduce((sum, item) => sum + item.price, 0));
  function add(product: Product) {
    items.value.push(product);
  }
  return { items: readonly(items), total, add };
});
```

### Project structure

```
src/
  components/     # Reusable, presentational components
  composables/    # Stateful logic extracted from components (use prefix)
  stores/         # Pinia stores
  views/          # Route-level components — wire things together, stay thin
  types/          # Shared TypeScript types and interfaces
  utils/          # Pure functions with no reactivity (formatDate, debounce, etc.)
  api/            # API client functions
```

- `composables/` — reactive logic, `use` prefix required.
- `utils/` — pure functions, no reactivity.
- `views/` — entry points only; full feature logic belongs in composables/components.
- Organize within directories by feature/domain, not by file type.

### Testing

- Unit test composables with Vitest — they are plain functions, no DOM required.
- Test components with Vue Test Utils + Vitest: assert on emitted events and rendered
  output, not on internal state.
- E2E test critical user paths with Playwright.
- Co-locate test files next to the unit being tested (`useCounter.spec.ts` next to `useCounter.ts`).

---

## TypeScript Rules

### Strictness

- `strict: true` in `tsconfig.json`. Non-negotiable, no exceptions.
- `moduleResolution: "Bundler"` for Vite projects (not `Node`).
- Run `vue-tsc` in CI. Editor warnings alone are not sufficient — templates need
  compile-time checking in the build pipeline.

### Annotations

- Annotate function parameters. Let TypeScript infer return types unless the function
  is a public API, in which case annotate the return type explicitly.
- Do not write redundant annotations on variable declarations where inference is obvious
  (`const name: string = 'foo'` is noise).

### `any` is banned

- Never use `any`. It disables the type system and propagates.
- Use `unknown` at system boundaries (API responses, `JSON.parse`, `catch` errors).
  Narrow before use.
- Use generics when a function can work with multiple types and the type relationship matters.
- Use `zod` (or equivalent) for runtime validation at external boundaries.

```ts
// Wrong
function process(input: any) { ... }

// Right
function process(input: unknown): string {
  if (typeof input !== "string") throw new TypeError("Expected string");
  return input.toUpperCase();
}
```

### Modeling types

- Use `interface` for object shapes that may be extended or implemented.
- Use `type` for unions, intersections, mapped types, and utility types.
- Be consistent within a module — do not mix `interface` and `type` for the same
  category of thing.
- Use discriminated unions for types with multiple valid states. Do not use bags of
  optional fields where which combinations are valid is implicit.

```ts
// Wrong
interface ApiResponse {
  data?: User;
  error?: string;
  loading?: boolean;
}

// Right
type ApiResponse =
  | { status: "loading" }
  | { status: "success"; data: User }
  | { status: "error"; message: string };
```

### Utility types

Use built-in utility types. Do not rewrite them.

| Utility          | Purpose                               |
| ---------------- | ------------------------------------- |
| `Partial<T>`     | All fields optional                   |
| `Required<T>`    | All fields required                   |
| `Readonly<T>`    | All fields readonly                   |
| `Pick<T, K>`     | Subset of fields                      |
| `Omit<T, K>`     | All fields except K                   |
| `Record<K, V>`   | Map from key type to value type       |
| `ReturnType<T>`  | Extract the return type of a function |
| `Parameters<T>`  | Extract parameter types as a tuple    |
| `NonNullable<T>` | Remove null and undefined             |

### Generics

Write generics when the return type depends on the input type. Do not add them
preemptively. If inference already handles it, a generic adds noise, not safety.

### Narrowing over casting

- Use type narrowing (`typeof`, `instanceof`, `in`, discriminant fields) to move
  through union types safely.
- Avoid `as SomeType` casting. It bypasses the type system and can hide bugs.
- Use `@ts-expect-error` (with a comment) if suppression is genuinely unavoidable.
  Never use `@ts-ignore`.

---

## Anti-patterns

### Vue

- Options API in new code
- Mutating props directly
- Accessing `.value` in `<template>`
- One monolithic Pinia store
- Business logic in views
- Side effects in composables without `onUnmounted` cleanup
- Destructuring `reactive` objects without `toRefs`

### TypeScript

- `any` — use `unknown` or a generic
- Non-null assertion (`!`) scattered throughout — signals a wrong type model
- `as X` casting on values you are not certain about
- Type gymnastics for its own sake — if the type is hard to read, the design is likely wrong
- `@ts-ignore` — use `@ts-expect-error` with a comment, or fix the root cause
- Skipping `vue-tsc` in CI

---

## References

- Anthony Fu — antfu.me, "Composable Vue" (VueDay 2021), VueUse (github.com/vueuse/vueuse)
- Matt Pocock — totaltypescript.com, _Total TypeScript_ (No Starch Press, 2024)
- Vue 3 official docs — vuejs.org
- Volar / Vue-Official VS Code extension — required for template type checking
