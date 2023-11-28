import { useRouter } from "next/router";
import React from "react";

function SingleEvent() {
  const router = useRouter();
  return (
    <div>
      <h1>Event Detail Page</h1>
      <p>Router: {router.query.id}</p>
    </div>
  );
}

export default SingleEvent;
