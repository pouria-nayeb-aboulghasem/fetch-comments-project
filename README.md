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

## .env file

```ts
  VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
```

## constants folder

apiEndpoints.ts

```ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API_ENDPOINTS = {
  comments: "/comments",
} as const;

export { API_BASE_URL, API_ENDPOINTS };
```

index.ts

```ts
import { API_BASE_URL, API_ENDPOINTS } from "./apiEndpoints";

export { API_BASE_URL, API_ENDPOINTS };
```

## services folder

commentsService.ts

```ts
import { API_BASE_URL, API_ENDPOINTS } from "@/constants";
import type { CommentType } from "@/types";

export const getComments = async (): Promise<CommentType[]> => {
  const response = await fetch(`${API_BASE_URL}/${API_ENDPOINTS.comments}`);

  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }

  return response.json();
};
```

## types folder

comment.d.ts

```ts
type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type { CommentType };
```

index.ts

```ts
import type { CommentType } from "./comment";

export type { CommentType };
```

## Copyright

MIT copyright
