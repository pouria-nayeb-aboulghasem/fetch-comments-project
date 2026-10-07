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

## components folder

CommentItem.tsx

```ts
import type { CommentType } from "@/types";

type CommentItemProps = {
  comment: CommentType;
};

function CommentItem({ comment }: CommentItemProps) {
  return (
    <li className="space-y-2 bg-white border border-gray-200 rounded-xl p-4">
      <header>
        <h4 className="text-xl font-bold text-gray-900">{comment.name}</h4>
        <h6 className="text-sm text-gray-400">{comment.email}</h6>
      </header>

      <p className="text-gray-600">{comment.body}</p>
    </li>
  );
}

export default CommentItem;
```

CommentList.tsx

```ts
import type { CommentType } from "@/types";
import CommentItem from "./CommentItem";

type CommentListProps = {
  comments: CommentType[];
};

function CommentList({ comments }: CommentListProps) {
  return (
    <section>
      <header className="mb-4 space-y-2 text-gray-900">
        <h1 className="text-4xl font-bold">Comments</h1>
        <p>List of users comments</p>
      </header>

      <ul className="flex flex-col gap-4">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ul>
    </section>
  );
}

export default CommentList;

```

Error.tsx

```ts
type ErrorProps = {
  error: string | null;
};

function Error({ error }: ErrorProps) {
  return <div>{error}</div>;
}

export default Error;

```

Loading.tsx

```ts
import { RiLoader4Line } from "@remixicon/react";

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center my-4 text-2xl">
      <RiLoader4Line className="animate-spin" />
      <p>Processing…</p>
    </div>
  );
}

export default Loading;

```

## Copyright

MIT copyright
