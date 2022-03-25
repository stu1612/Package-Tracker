// npm
import { useNavigate } from "react-router-dom";
// components
import UserInfo from "./UserInfo";
import PackageInfo from "./PackageInfo";
import DeliveryInformation from "./DeliveryInformation";

export default function PackageItemDetail({ data }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className={`bg-image ${data.status}`} />
      <div className="content">
        <UserInfo data={data} />
        <PackageInfo data={data} />
      </div>
      <DeliveryInformation data={data} />
      <button onClick={() => navigate(-1)} className="btn btn-primary btn-pink">
        Go Back
      </button>
    </div>
  );
}
