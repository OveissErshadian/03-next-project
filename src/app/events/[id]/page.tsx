import { FC } from "react";

interface IProps {
  params: {
    id: string;
  };
}
const bookEvent = async (formData: FormData) => {
  "use server";
  const eventId = formData.get("eventId");
  const userId = "2";
  const res = await fetch(
    `https://66e697a717055714e589f9b8.mockapi.io/events/${eventId}`,
    {
      method: "PUT",
      body: JSON.stringify({
        participants: [userId],
      }),
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const jsonResult = await res.json();
  console.log("jsonResult", jsonResult);
  return jsonResult;
};

const EventPage: FC<IProps> = ({ params }) => {
  return (
    <form action={bookEvent}>
      <input type="hidden" name="eventId" value={params.id} />
      <button type="submit" className="bg-red-600 p-4 rounded-2xl">
        book event
      </button>
    </form>
  );
};

export default EventPage;
