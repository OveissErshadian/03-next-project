import { IEvent } from "../types/IEvent";

export const getEvents = async (): Promise<IEvent[]> => {
  const res = await fetch(
    "https://66e697a717055714e589f9b8.mockapi.io/persons/2/events"
  );
  if (!res) {
    throw new Error("failed to fetch events");
  }
  return res.json();
};