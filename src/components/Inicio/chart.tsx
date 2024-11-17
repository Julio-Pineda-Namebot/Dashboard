import { useState } from "react";

export default function BarChartInteractive() {
  const [style, setStyle] = useState("Default");
  const dataDesktop = 12460;
  const dataMobile = 5800;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Resumen Anual de Ventas</h1>
        <div className="relative">
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2">
        Ventas totales del ultimo año
      </p>

      {/* Metrics */}
      <div className="flex mt-6 space-x-6">
        <div className="p-4 rounded w-1/2 text-center">
          <h2 className="text-2xl font-bold">S/. {dataDesktop.toLocaleString()}</h2>
          <p className="text-gray-400">Ingresos</p>
        </div>
        <div className="p-4 rounded w-1/2 text-center">
          <h2 className="text-2xl font-bold text-red-500"> S/. {dataMobile.toLocaleString()}</h2>
          <p className="text-gray-400">Gastos</p>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6">
        <div className="flex items-end space-x-1 h-48">
          {Array.from({ length: 100 }).map((_, index) => (
            <div
              key={index}
              className="bg-blue-500 rounded w-1 flex-grow"
              style={{
                height: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>Enero</span>
          <span>Febrero</span>
          <span>Marzo</span>
          <span>Abril</span>
          <span>Mayo</span>
          <span>Junio</span>
          <span>Julio</span>
          <span>Agosto</span>
          <span>Septiembre</span>
          <span>Octubre</span>
          <span>Noviembre</span>
          <span>Diciembre</span>
        </div>
      </div>
    </div>
  );
}
