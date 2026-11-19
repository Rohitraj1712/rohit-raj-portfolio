# Projects section expansion

Add ProductLens AI and RecoverAI to the existing Projects section while preserving the current Reel Counter and SolveBot content and visual style.

## Changes
- Add each new project with its supplied title, description, achievement badge, feature list, technology tags, GitHub URL, and live demo URL.
- Use category-appropriate Lucide icons and the existing card styling, hover motion, teal gradient accent, and link-button patterns.
- Keep cards aligned at equal heights in the existing two-column desktop grid and single-column mobile layout.
- Ensure external repository and demo links open in a new tab.

## Technical details
- Update only `src/components/ProjectsSection.tsx`.
- Reuse the section's existing Tailwind theme tokens, Framer Motion interactions, and responsive grid; extend the project data/rendering for badges and additional feature rows without changing existing project details.
