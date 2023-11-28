import React from "react";
import EventItem from "./EventItem";
import styles from "./EventList.module.css";

function EventList({ items }) {
  return (
    <div>
      <ul className={styles.list}>
        {items.map((item) => {
          return <EventItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default EventList;
