export default function onChangeHandler(event, state) {
  event.preventDefault();
  state(event.target.value);
}
