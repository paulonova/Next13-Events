import EventList from "@/components/event/EventList";
import { getFeaturedEvents } from "@/data/dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Front Page</h1>
      <p>Show featured event</p>
      <EventList items={featuredEvents} />
    </div>
  );
}
