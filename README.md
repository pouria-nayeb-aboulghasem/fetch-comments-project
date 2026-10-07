# Fetch comments project

Create a react project with tailwindcss and ViteJS.

## Installation

- ViteJS
- TailwindCss
- RemixIcon

## Setup

vite.config.ts

```ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
```

tsconfig.json

```ts
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```

tsconfig.app.json

```ts
  "extends": "./tsconfig.json",
```

## Folder structures

- components
  - CommentList.tsx
  - CommentItem.tsx
  - Error.tsx
  - Loading.tsx
- constants
  - apiEndpoints.ts
  - index.ts
- services
  - commentsService.ts
- types
  - comment.d.ts
  - index.ts

## Copyright

MIT copyright
