import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import ProductModal from '@/components/products/productModel';

interface Product {
    id: number;
    nombre: string;
    precio: string;
    inventario: number;
}

const starProducts: Product[] = [
    { id: 1, nombre: "Play Station 5", precio: "S/.2000", inventario: 5 },
    { id: 2, nombre: "Nintendo Switch Oled", precio: "S/.1200", inventario: 15 },
];

function ProductTable() {
    const [products, setProduct] = useState<Product[]>(starProducts);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productSelect, setProductSelect] = useState<Product | null>(null);

    const handleAddProduct = () => {
        setProductSelect(null);
        setIsModalOpen(true);
    };

    const handleEditProduct = (product: Product) => {
        setProductSelect(product);
        setIsModalOpen(true);
    };

    return (
        <div className="overflow-x-auto bg-background">
            <Button onClick={handleAddProduct} className="mb-4">Agregar Producto</Button>
            <table className="min-w-full table-auto bg-white rounded-lg shadow-md border border-muted">
                <thead className="bg-muted">
                    <tr>
                        <th className="px-4 py-2 text-left font-medium text-sm text-muted-foreground">ID</th>
                        <th className="px-4 py-2 text-left font-medium text-sm text-muted-foreground">Nombre</th>
                        <th className="px-4 py-2 text-left font-medium text-sm text-muted-foreground">Precio</th>
                        <th className="px-4 py-2 text-left font-medium text-sm text-muted-foreground">Inventario</th>
                        <th className="px-4 py-2 text-left font-medium text-sm text-muted-foreground">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="hover:bg-muted-light">
                            <td className="px-4 py-2 text-sm">{product.id}</td>
                            <td className="px-4 py-2 text-sm">{product.nombre}</td>
                            <td className="px-4 py-2 text-sm">{product.precio}</td>
                            <td className="px-4 py-2 text-sm">{product.inventario}</td>
                            <td className="px-4 py-2 text-sm">
                                <Button variant="link" onClick={() => handleEditProduct(product)}>Editar</Button>
                                <Button variant="link" className="text-red-600">Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={productSelect} />
        </div>
    );
}

export default ProductTable;