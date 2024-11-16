import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import ProductModal from '@/components/products/productModel';
import { Card } from '@/components/ui/card';

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
        <Card className="w-full p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-foreground">Gestión de Productos</h1>
                <Button onClick={handleAddProduct}>Agregar Producto</Button>
            </div>
            <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">ID</th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Nombre</th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Precio</th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Inventario</th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                        {products.map((product) => (
                            <tr
                                key={product.id}
                                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                            >
                                <td className="p-4 align-middle text-foreground">{product.id}</td>
                                <td className="p-4 align-middle text-foreground">{product.nombre}</td>
                                <td className="p-4 align-middle text-foreground">{product.precio}</td>
                                <td className="p-4 align-middle text-foreground">{product.inventario}</td>
                                <td className="p-4 align-middle">
                                    <div className="flex gap-2">
                                        <Button 
                                            variant="ghost" 
                                            onClick={() => handleEditProduct(product)}
                                            className="hover:text-primary"
                                        >
                                            Editar
                                        </Button>
                                        <Button 
                                            variant="ghost" 
                                            className="hover:text-destructive"
                                        >
                                            Eliminar
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={productSelect} />
        </Card>
    );
}

export default ProductTable;