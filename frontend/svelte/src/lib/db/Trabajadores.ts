export type trabajadoresType = {
  id: number;
  nombre: string;
  apellido: string;
  pass: string;
}

export const trabajadoresDB: trabajadoresType[] = [
  { id: 0, nombre: "Helen", apellido: "Chufe", pass: "HC1234" },
  { id: 1, nombre: "Benito", apellido: "Camela", pass: "BC1234" }, 
  { id: 2, nombre: "Aiko", apellido: "Mida", pass: "AM1234" }, 
  { id: 3, nombre: "Elton", apellido: "Tito", pass: "ET1234" }
]
