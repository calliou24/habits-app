export function generateUniqueId(): number {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000);

  const uniqueId = parseInt(`${timestamp}${random}`);

  return uniqueId;
}
