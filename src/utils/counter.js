export default function Counter(data, status) {
  let counter = "";
  for (const obj of data) {
    if (obj.status === status) counter++;
  }
  return counter;
}
