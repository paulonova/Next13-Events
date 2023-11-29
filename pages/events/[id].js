import ErrorAlert from "@/components/event-details/ErrorAlert";
import EventContent from "@/components/event-details/EventContent";
import EventLogistics from "@/components/event-details/EventLogistics";
import EventSummary from "@/components/event-details/EventSummary";
import Button from "@/components/ui/Button";
import { getEventById } from "@/data/dummy-data";
import { useRouter } from "next/router";
import React from "react";

function SingleEvent() {
  const router = useRouter();
  const event = getEventById(router.query.id);

  if (!event) {
    return <ErrorAlert>No event found!</ErrorAlert>;
  }
  return (
    <>
      <EventSummary title={event.title} />

      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <div className="center">
        <Button link="/">Front Page</Button>
      </div>
    </>
  );
}

export default SingleEvent;
