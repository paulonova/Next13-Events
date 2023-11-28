import EventList from "@/components/event/EventList";
import { getFeaturedEvents } from "@/data/dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
