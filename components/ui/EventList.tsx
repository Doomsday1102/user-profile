import { EventForm } from "@/types/interfaces";
import React from "react";
import EventItem from "./EventItem";

interface EventListProps {
  events: EventForm[];
  handleViewEvent: (id: number) => void;
}

const EventList: React.FC<EventListProps> = ({ events, handleViewEvent }) => {
  return (
    <div className="h-1/2 overflow-y-scroll border border-gray-300 rounded-lg shadow-md bg-white">
      <div className="sticky top-0 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold p-4">Events</h1>
      </div>
      <div className="divide-y divide-gray-200">
        {events.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            handleViewEvent={handleViewEvent}
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
