import { useLocation } from "react-router-dom";
interface Users {
  id: number;
  userName: string;
  email: string;
  address: string;
}

export default function UserDetail() {
  const location = useLocation();
  const user = location.state as Users;
  return (
    <div>
      <h2>Thông tin chi tiết</h2>
      {user ? (
        <div>
          <p>Id: {user.id}</p>
          <p>Name: {user.userName}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
        </div>
      ) : (
        <p>Không có thông tin người dùng</p>
      )}
    </div>
  );
}
