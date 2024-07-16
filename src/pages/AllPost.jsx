import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appWriteService from "../appwrite/config";

function AllPosts() {
  const [post, setPost] = useState();

  useEffect(() => {
    appWriteService.getPostList().then((res) => {
      if (res) {
        setPost(res.documents);
      }
    });
  }, []);


  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {post?.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
