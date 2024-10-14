"use client";
import eventsData from "../mocks/events.json";
import messagesData from "../mocks/message.json";
import React from "react";
import { validate } from "@/lib/util";
import MessageList from "@/components/ui/MessageList";
import EventList from "@/components/ui/EventList";
import MessageModal from "@/components/ui/MessageModal";
import EventModal from "@/components/ui/EventModal";
import ProfileForm from "@/components/ui/ProfileForm";
import ProfileDetails from "@/components/ui/ProfileDetails";
import useProfile from "@/hooks/useProfile";
import useMessages from "@/hooks/useMessages";
import useEvents from "@/hooks/useEvents";

export default function Home() {
  const {
    user,
    isEditing,
    errors,
    setErrors,
    handleEdit,
    handleChange,
    handleCancel,
    setUser,
  } = useProfile();
  const { events, selectedEvent, handleViewEvent, handleCloseEvent } =
    useEvents(
      eventsData.map((event) => ({
        id: event.id,
        name: event.name,
        date: event.date,
        description: event.summary,
        content: event.content,
      }))
    );

  const { messages, selectedMessage, handleViewMessage, handleCloseMessage } =
    useMessages(
      messagesData.map((message) => ({
        id: message.id,
        sender: message.sender_name,
        content: message.content,
        time: message.time_received,
        viewed: message.is_read,
      }))
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validateErrors = validate(user);
    if (Object.keys(validateErrors).length === 0) {
      setErrors({});
      handleEdit(false);
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor
    } else {
      setErrors(validateErrors);
    }
  };

  return (
    <div className="fixed flex flex-row h-full bg-gray-100">
      <div className="flex justify-between p-6  w-full">
        {isEditing ? (
          <ProfileForm
            user={user}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleCancel={() => handleCancel(user)}
          />
        ) : (
          <ProfileDetails user={user} handleEdit={handleEdit} />
        )}
      </div>
      <div className="flex flex-col w-2/3 p-6 space-y-6">
        <MessageList
          messages={messages}
          handleViewMessage={handleViewMessage}
        />
        <EventList events={events} handleViewEvent={handleViewEvent} />
      </div>
      {selectedMessage && (
        <MessageModal
          message={selectedMessage}
          handleClose={handleCloseMessage}
        />
      )}
      {selectedEvent && (
        <EventModal event={selectedEvent} handleClose={handleCloseEvent} />
      )}
    </div>
  );
}
