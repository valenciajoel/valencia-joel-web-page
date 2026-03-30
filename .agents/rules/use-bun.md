---
trigger: model_decision
description: Always use Bun as the default package manager and JavaScript runtime
---

# Package Manager Rule: Bun First

You are strictly required to use **Bun** (`bun`) as the primary package manager and runtime environment for this project.

## Rules to follow:
1. **Never** use `npm`, `yarn`, or `pnpm` unless explicitly requested by the user or if a specific script strictly requires it and fails with bun.
2. For installing dependencies, always use:
   - `bun add <package>` (instead of `npm install <package>`)
   - `bun add -D <package>` / `bun add -d <package>` (instead of `npm install -D <package>`)
   - `bun install` (instead of `npm install`)
3. For executing scripts defined in `package.json`, always use:
   - `bun run <script>` (e.g., `bun run dev`, `bun run build`)
4. For running one-off commands (equivalent to `npx`), use:
   - `bunx <command>` (e.g., `bunx prisma generate`, `bunx create-next-app`)
5. If creating a new project or initializing an app from a framework, specify bun if there is an option or command equivalent.

By following this rule, you ensure faster installation times and consistent workflow execution across the project.
