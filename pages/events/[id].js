import EventContent from "@/components/event-details/EventContent";
import EventLogistics from "@/components/event-details/EventLogistics";
import EventSummary from "@/components/event-details/EventSummary";
import { getEventById } from "@/data/dummy-data";
import { useRouter } from "next/router";
import React from "react";

function SingleEvent() {
  const router = useRouter();
  const event = getEventById(router.query.id);

  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default SingleEvent;
