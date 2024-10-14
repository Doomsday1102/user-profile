import React from "react";
import { EventForm } from "@/types/interfaces";

interface EventItemProps {
  event: EventForm;
  handleViewEvent: (id: number) => void;
}

const EventItem: React.FC<EventItemProps> = ({ event, handleViewEvent }) => {
  return (
    <div
      key={event.id}
      className="cursor-pointer  transition duration-300 ease-in-out transform hover:scale-105 bg-white hover:bg-gray-100 border border-gray-300 p-4 shadow-sm "
      onClick={() => handleViewEvent(event.id)}
    >
      <h2 className="text-lg font-semibold text-gray-800">{event.name}</h2>
      <p className="text-sm text-gray-500">{event.date}</p>
      <p className="text-gray-700">{event.description}</p>
    </div>
  );
};

export default EventItem;
