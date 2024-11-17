import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
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
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{product ? 'Editar Producto' : 'Agregar Producto'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input
                            id="nombre"
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="precio">Precio</Label>
                        <Input
                            id="precio"
                            type="text"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="inventario">Inventario</Label>
                        <Input
                            id="inventario"
                            type="number"
                            value={inventario}
                            onChange={(e) => {
                                const value = e.target.value;
                                setInventario(value ? parseInt(value) : 0);
                            }}
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button type="submit">
                            {product ? 'Guardar Cambios' : 'Agregar Producto'}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default ProductModal;