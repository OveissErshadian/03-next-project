import { getEvents } from "@/core/api/events";


const EventsPage = async () => {
  const events = await getEvents();

  return (
    <div>
      <h1>Upcoming Events</h1>
      <div className="flex flex-wrap gap-1">
        {events.map((value) => (
          <div className="min-w-32 h-20 p-2 text-center bg-blue-600" key={value.title}>
            <h5 className="">title:{value.title}</h5>
            <p className="">Category:{value.category}</p>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default EventsPage;
