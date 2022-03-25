import Moment from "react-moment";

export default function UserInfo({ data }) {
  const { status, last_updated, user_name, user_phone } = data;
  return (
    <div className="user-info">
      <p>{status}</p>
      <p>
        Updated: <Moment>{last_updated}</Moment>
      </p>
      <p>Name: {user_name}</p>
      <p>Mobile: {user_phone}</p>
    </div>
  );
}
