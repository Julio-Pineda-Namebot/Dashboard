import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 
import React, { useEffect, useState } from 'react';

interface Product {
    id?: number;
    nombre: string;
    precio: string;
    inventario: number;
}

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product?: Product | null;
}

function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [inventario, setInventario] = useState(0);

    useEffect(() => {
        if (product) {
            setNombre(product.nombre);
            setPrecio(product.precio);
            setInventario(product.inventario);
        } else {
            setNombre('');
            setPrecio('');
            setInventario(0);
        }
    }, [product]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (product) {
            console.log('Producto actualizado:', { nombre, precio, inventario });
        } else {
            console.log('Producto agregado:', { nombre, precio, inventario });
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg font-bold mb-4">{product ? 'Editar Producto' : 'Agregar Producto'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre</label>
                        <Input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Precio</label>
                        <Input
                            type="text"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Inventario</label>
                        <Input
                            type="number"
                            value={inventario}
                            onChange={(e) => {
                                const value = e.target.value;
                                setInventario(value ? parseInt(value) : 0); // Handle empty value
                            }}
                            className="w-full"
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button variant="secondary" onClick={onClose} className="mr-2">Cancelar</Button>
                        <Button type="submit" variant="default">{product ? 'Guardar Cambios' : 'Agregar Producto'}</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductModal;