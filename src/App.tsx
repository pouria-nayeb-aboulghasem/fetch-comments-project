import { useEffect, useState } from "react";
import { getComments } from "@/services/commentsService";
import type { CommentType } from "@/types";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import CommentList from "@/components/CommentList";

function App() {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setComments(await getComments());
      } catch (error) {
        setError(`${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <>
      <div className="container mx-auto px-4 my-4">
        <CommentList comments={comments} />
      </div>
    </>
  );
}

export default App;
