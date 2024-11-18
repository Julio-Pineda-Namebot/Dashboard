import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>¿Qué tipo de videojuegos se pueden encontrar en este dashboard?</AccordionTrigger>
          <AccordionContent>
          Este dashboard incluye videojuegos de diferentes géneros, como acción, aventura, RPG, estrategia y más. Puedes usar los filtros para explorar los títulos disponibles.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger> ¿Hay costos asociados con el uso del dashboard?</AccordionTrigger>
          <AccordionContent>
          No, el acceso al dashboard es completamente gratuito. Sin embargo, algunos enlaces pueden redirigir a plataformas externas donde los juegos podrían tener costo.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>¿Cómo puedo reportar un error o sugerir mejoras?</AccordionTrigger>
          <AccordionContent>
          Puedes usar el formulario de contacto en el dashboard para reportar errores o enviarnos tus sugerencias. ¡Valoramos mucho tu opinión!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>¿Es necesario registrarse para usar el dashboard?</AccordionTrigger>
          <AccordionContent>
          No es obligatorio registrarse para explorar el contenido. Sin embargo, algunas funciones, como guardar favoritos o dejar reseñas, requieren una cuenta.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>¿Puedo personalizar la apariencia del dashboard?</AccordionTrigger>
          <AccordionContent>
          Sí, puedes activar el modo claro o oscuro y elegir entre varios temas de colores en la configuración de tu perfil.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  