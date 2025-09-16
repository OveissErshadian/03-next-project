interface IUser {
  name: string;
  avatar: string;
  email: string;
  hashedPassword: string;
  role: string;
  id: string;
}

interface IEvents {
    createdAt: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    category: string;
    capacity: number;
    organizerId: string;
    id: string;
    personId: string;
}


const getEvents = async (): Promise<IEvents[]> => {
  const res = await fetch(
    "https://66e697a717055714e589f9b8.mockapi.io/persons/2/events"
  );
  if (!res) {
    throw new Error("failed to fetch events");
  }
  return res.json();
};

const EventsPage = async () => {
  const events = await getEvents();
  console.log("22", events);
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
