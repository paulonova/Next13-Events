import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./EventItem.module.css";
import Button from "../ui/Button";

function EventItem({ item }) {
  const readableDate = new Date(item.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = item.location.replace(", ", "\n");

  return (
    <li className={styles.item}>
      <Image src={item.image} alt={item.title} width={300} height={200} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{item.title}</h2>
          <div className={styles.date}>
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={item.id}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
