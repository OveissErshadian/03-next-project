import { getEvents } from "@/core/api/events";
import EventCard from "../../components/EventCard/EventCard";

const EventsPage = async () => {
  const events = await getEvents();

  return (
    <div>
      <h1>Upcoming Events</h1>
      <div className="flex flex-wrap gap-1">
        {events.map((value) => (
          <EventCard value={value} key={value.title} />
        ))}{" "}
      </div>
    </div>
  );
};

export default EventsPage;
