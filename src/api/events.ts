import { IEvent } from "@/types";
import { eventsData } from "@/data/events";

async function getEvents(): Promise<IEvent[]> {
  return eventsData;
}

export { getEvents };
