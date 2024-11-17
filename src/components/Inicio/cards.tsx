import React from 'react';

interface Product {
  id: number;
  category: string;
  title: string;
  views: string;
  avatar: string;
  statusColor: string;
}

const products: Product[] = [
  {
    id: 1,
    category: 'Play Station',
    title: 'Consola Play Station 5 FC 25 Edition',
    views: '854 vistas · En la última semana',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    statusColor: 'bg-green-500',
  },
  {
    id: 2,
    category: 'Accesorios',
    title: 'Mouse Logitech G-305 White',
    views: '547 vistas · En la última semana',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    statusColor: 'bg-red-500',
  },
  {
    id: 3,
    category: 'Play Station',
    title: 'Dragon Ball Sparking Zero',
    views: '265 vistas · En la última semana',
    avatar: 'https://randomuser.me/api/portraits/men/57.jpg',
    statusColor: 'bg-red-500',
  },
  {
    id: 4,
    category: 'Accesorios',
    title: 'Sony Audífonos Bluetooth 5.2 Wireless',
    views: '120 vistas · En la última semana',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    statusColor: 'bg-green-500',
  },
];

const ProductCard: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8">Productos Destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm">{product.category}</span>
              <span className={`w-3 h-3 rounded-full ${product.statusColor}`}></span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">{product.title}</h3>
            <div className="flex items-center">
              <img
                src={product.avatar}
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-blue-500"
              />
              <p className="text-gray-400 text-sm ml-3">{product.views}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
