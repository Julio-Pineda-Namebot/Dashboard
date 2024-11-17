import { useState } from "react";
import EventCards from "@/components/Calendario/eventsCards";
import EventModal from "@/components/Calendario/eventModal";

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Reunión de equipo",
      description: "Discusión sobre el mes en curso",
      date: "20 de noviembre de 2024",
    },
    {
      id: 2,
      title: "Llegada de nuevos productos",
      description: "Actualización del inventario del mes",
      date: "25 de noviembre de 2024",
    },
  ]);

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfWeek = getFirstDayOfWeek(currentMonth, currentYear);

  const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDayClick = (day: number) => {
    const selected = new Date(currentYear, currentMonth, day);
    setSelectedDate(selected);
    setIsModalOpen(true);
  };

  const handleAddEvent = (newEvent: Event) => {
    setUpcomingEvents([...upcomingEvents, newEvent]);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Calendario */}
      <div className="p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300" onClick={handlePrevMonth}>
            Prev
          </button>
          <div className="text-center">
            <h2 className="text-xl font-bold">
              {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })} {currentYear}
            </h2>
          </div>
          <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300" onClick={handleNextMonth}>
            Next
          </button>
        </div>

        <div className="grid grid-cols-7 text-center text-gray-400 mb-2">
          {dayNames.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: firstDayOfWeek }).map((_, index) => (
            <div key={`empty-${index}`} className="h-10"></div>
          ))}

          {Array.from({ length: daysInMonth }).map((_, index) => (
            <div
              key={index}
              className={`h-10 flex items-center justify-center rounded cursor-pointer ${
                index + 1 === today.getDate() &&
                currentMonth === today.getMonth() &&
                currentYear === today.getFullYear()
                  ? "bg-blue-500 text-white font-bold"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => handleDayClick(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Tarjetas de eventos */}
      <EventCards events={upcomingEvents} />

      {/* Modal para agregar evento */}
      {isModalOpen && selectedDate && (
        <EventModal
          date={selectedDate}
          onClose={() => setIsModalOpen(false)}
          onAddEvent={handleAddEvent}
        />
      )}
    </div>
  );
}

// Helpers
function getDaysInMonth(month: number, year: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(month: number, year: number): number {
  return new Date(year, month, 1).getDay();
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
}
