import { useState } from 'react';
import { EventForm } from '@/types/interfaces';

const useEvents = (initialEvents: EventForm[]) => {
  const [events, setEvents] = useState<EventForm[]>(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState<EventForm | null>(null);

  const handleViewEvent = (id: number) => {
    const event = events.find((evt) => evt.id === id);
    if (event) {
      setSelectedEvent(event);
    }
  };

  const handleCloseEvent = () => {
    setSelectedEvent(null);
  };

  return {
    events,
    selectedEvent,
    handleViewEvent,
    handleCloseEvent,
  };
};

export default useEvents;