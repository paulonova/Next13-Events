import Image from "next/image";
import styles from "./EventLogistics.module.css";
import LogisticsItem from "./LogisticsItem";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";

function EventLogistics({ event }) {
  console.log("EVENT: ", event);
  const humanReadableDate = new Date(event?.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = (event?.location).replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image
          width={160}
          height={160}
          src={`${event?.image}`}
          alt={event?.title}
        />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
