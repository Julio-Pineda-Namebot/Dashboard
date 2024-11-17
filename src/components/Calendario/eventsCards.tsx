import React from "react";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface EventCardsProps {
  events: Event[];
}

export default function EventCards({ events }: EventCardsProps) {
  return (
    <div className="rounded-lg p-6 mt-8 w-full">
      <h3 className="text-xl font-bold mb-4">Próximos Eventos</h3>
      <div className="flex justify-around">
      {events.length > 0 ? (
        events.map((event) => (
          <div
            key={event.id}
            className="border border-gray-300 rounded-lg p-4 mb-4 hover:shadow-lg"
          >
            <h4 className="text-lg font-semibold">{event.title}</h4>
            <p className="text-sm ">{event.description}</p>
            <p className="text-sm text-blue-500 mt-2">{event.date}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No hay eventos programados.</p>
      )}
      </div>
      
    </div>
  );
}
