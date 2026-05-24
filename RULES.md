# Frontend Engineering Rules (Pure Front-End & Content-Driven Edition)

## Core Principle
- **Separation of Concerns:** UI is exclusively for rendering and layout. Data is exclusively for content.
- **Data-Driven UI:** Components must adapt to data dynamically. Never hardcode copy, descriptions, or specs inside JSX.
- **Think in Design Systems:** High consistency, absolute modularity, zero layout duplication.

---

## Architecture: Pure Frontend Layers

Since there is no external database or API mutations, the codebase must be strictly decoupled into the following layers:

- **`/data` (The Source of Truth):** Pure `.ts` or `.json` files. Contains all watch specifications, editorial copys, image URLs, and versus configurations.
- **`/components` (Pure UI / Atomic):** Tiny, presentation-only components. They do not know *which* watch they are rendering; they only receive data via props.
- **`/hooks` (UI State & Persistence):** Custom hooks to handle interactions, layout tabs, active versus switching, or saving community votes in `localStorage`.

---

## Component & JSX Rules
- **Size Limit:** Keep components small (<150 lines). If a file exceeds this limit, it must be split immediately.
- **Declarative Layout:** The main view file (`VersusPage.tsx`) must read like a high-level layout map, not a script.
- **No Inline Content:** Writing long paragraphs, text blocks, or watch technical specifications directly inside HTML/JSX tags is strictly forbidden.
- **Clean Iteration:** Avoid heavy inline `.map()` functions with complex UI inside JSX. Extract repetitive rows (e.g., specific technical attributes) into independent, specialized sub-components.

---

## State Management & Interaction
- **Encapsulated Interaction:** Every UI interactive feature (e.g., switching between "Rolex vs Pagani" and "AP vs VC") must be handled by a custom hook (e.g., `useVersusSelection`).
- **No Effect Pollution:** Do not sync state with `useEffect` if it can be derived from props or local state. Keep layout effects documented and minimal.
- **Simulated Persistence:** Use `localStorage` within hooks to persist interactive features like community votes, keeping components clear of business logic.

---

## UI/UX & Styling
- **Theme First:** Use predefined design system variables (Tailwind config or CSS variables). Hardcoded hex codes or arbitrary values (e.g., `w-[432px]`) are forbidden.
- **Semantic Atoms:** Highly repetitive visual elements (e.g., status tags like `EL MITO`, `EL HOMENAJE`) must be abstracted into a single reusable utility component (e.g., `WatchTag.tsx`).
- **Layout Integrity:** Rely heavily on Flexbox/Grid for responsiveness. Ensure tables scale cleanly on mobile devices via horizontal scrolling wrapper components.

---

## Anti-Patterns (DO NOT DO)
- ❌ **The Monolith File:** Mixing the Header, Technical Matrix, Editorial Copy, and Voting Module in a single file.
- ❌ **Hardcoded Hardcore:** Writing watch features, reviews, or titles directly into a `<p>` or `<h1>` tag. If you need to fix a typo, you should never touch UI code.
- ❌ **Ternary Chains:** Complex, nested ternary operations or heavy conditional logic inside the JSX layout.
- ❌ **State Duplication:** Storing the same data in multiple local states instead of passing down a single reference prop.

---

## Refactoring Trigger (The 750-Line Rule)
If any component meets one of these criteria, **stop feature development and refactor immediately**:
1. Contains hardcoded editorial text or long descriptions inside the JSX.
2. The file length exceeds 150 lines of code.
3. It mixes the core structure layout with data iteration or filtering logic.

**Required Action:** Extract data to `src/data/`, split the layout into pure atomic blocks (`VersusHeader`, `SpecsTable`, `CommunityVote`), and reduce the root file to a clean orchestrator (<60 lines).