export type ProductoType = {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
};

export const ProductoDB: ProductoType[] = [
  { id: 0, nombre: "Teclado", categoria: "Perifericos", precio: 27.30 },
  { id: 1, nombre: "Raton", categoria: "Perifericos", precio: 15.99 },
  { id: 2, nombre: "Pantalla", categoria: "Perifericos", precio: 124.99 },
  { id: 3, nombre: "Grafica TForce 1060", categoria: "Graficas", precio: 240.00 },
  { id: 4, nombre: "Grafica TForece 1080", categoria: "Graficas", precio: 490.00 },
  { id: 5, nombre: "Grafica RForece 3060", categoria: "Graficas", precio: 550.00 }
]
