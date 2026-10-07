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
