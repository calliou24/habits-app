export function generateUniqueId(): number {
  // Generar un ID único utilizando un timestamp y un número aleatorio
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000); // Puedes ajustar el rango según tus necesidades

  // Combinar el timestamp y el número aleatorio para obtener un ID único
  const uniqueId = parseInt(`${timestamp}${random}`);

  return uniqueId;
}
