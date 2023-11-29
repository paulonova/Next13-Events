import EventsSearch from "@/components/event-details/EventsSearch";
import EventList from "@/components/event/EventList";
import { getAllEvents } from "@/data/dummy-data";
import { useRouter } from "next/router";
import React from "react";

function Events() {
  const router = useRouter();
  const allEvents = getAllEvents();

  function findEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </div>
  );
}

export default Events;
