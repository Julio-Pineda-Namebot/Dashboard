import React, { useState } from "react";

interface EventModalProps {
  date: Date;
  onClose: () => void;
  onAddEvent: (newEvent: Event) => void;
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
}

export default function EventModal({ date, onClose, onAddEvent }: EventModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const formattedDate = date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const newEvent = {
      id: Date.now(),
      title,
      description,
      date: formattedDate,
    };

    if (title.trim() && description.trim()) {
      onAddEvent(newEvent);
      setTitle("");
      setDescription("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      {/* Contenedor del Modal */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-md transform transition-transform scale-100">
        {/* Header del Modal */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Agendar Evento
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            &times;
          </button>
        </div>

        {/* Formulario */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Título"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descripción"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Botones */}
          <div className="flex justify-end space-x-4 mt-4">
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Agregar Evento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
