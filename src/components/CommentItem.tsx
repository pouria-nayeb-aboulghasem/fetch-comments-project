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
