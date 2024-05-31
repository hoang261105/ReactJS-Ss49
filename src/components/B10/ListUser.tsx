import { useNavigate } from "react-router-dom";

interface Users {
  id: number;
  userName: string;
  email: string;
  address: string;
}

export default function ListUser() {
  const navigate = useNavigate();
  const users: Users[] = [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      email: "nva@gmail.com",
      address: "Hà Nội",
    },
    {
      id: 2,
      userName: "Nguyễn Văn B",
      email: "nvb@gmail.com",
      address: "Hà Nam",
    },
    {
      id: 3,
      userName: "Nguyễn Văn C",
      email: "nvc@gmail.com",
      address: "Ninh Bình",
    },
  ];

  const handleDetail = (user: Users) => {
    navigate(`/user-detail/${user.id}`, { state: user });
  };
  return (
    <div>
      {users.map((user: Users) => (
        <div key={user.id}>
          <p>Id: {user.id}</p>
          <p>Name: {user.userName}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <button style={{ width: 200 }} onClick={() => handleDetail(user)}>
            Xem chi tiết
          </button>
        </div>
      ))}
    </div>
  );
}
