import { useRouter } from "next/router";
import React from "react";

function FilteredEvents() {
  const router = useRouter();
  return (
    <div>
      <h1>Filtered Events Page</h1>
      <p>Router: {router.query.slug}</p>
    </div>
  );
}

export default FilteredEvents;
