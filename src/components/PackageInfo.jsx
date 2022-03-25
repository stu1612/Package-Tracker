export default function PackageInfo({ data }) {
  const { parcel_id, sender, verification_required, notes } = data;
  return (
    <div className="content-info package-info">
      <h3>#{parcel_id}</h3>
      <p>Sender: {sender}</p>
      <p>
        ID Required:{" "}
        {verification_required ? "ID verification is required" : "No"}
      </p>
      <p>Notes: {notes}</p>
    </div>
  );
}
