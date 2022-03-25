import Moment from "react-moment";

export default function UserInfo({ data }) {
  const { status, last_updated, user_name, user_phone } = data;
  return (
    <div className="content-info user-info">
      <h3>{status}</h3>
      <p>
        Updated: <Moment>{last_updated}</Moment>
      </p>
      <p>Name: {user_name}</p>
      <p>Contact: {user_phone}</p>
    </div>
  );
}
