import React, { useEffect, useRef, useState } from "react";
import Card from "@/components/Card";

import { getPost } from "@/services/posts-api";

export default function LoadingApp() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ref for effect cleanup
  const isMountedRef = useRef(true);

  useEffect(() => {
    getPost()
      .then((data) => {
        setTimeout(() => {
          // Check effect cleanup
          if (isMountedRef.current) {
            setPosts([...data]);
            setLoading(false);
          }
        }, 1500);
      })
      .catch((err) => console.error(err));

    // Effects cleanup
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <>
      <h2>Loading App</h2>
      {loading ? (
        <h5 className="text-center">Loading posts...</h5>
      ) : (
        posts.map((post) => {
          const { id, title, body } = post;
          return (
            <Card
              key={post.id}
              header={id}
              title={title}
              body={body}
              footer="Footer"
            />
          );
        })
      )}
    </>
  );
}
