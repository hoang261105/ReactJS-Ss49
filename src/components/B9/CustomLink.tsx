import { useNavigate } from "react-router-dom";

export default function CustomLink() {
  const navigate = useNavigate();
  const customLink = () => {
    if (window.location.href === "http://localhost:5173/home-page") {
      navigate("/home-page");
    } else {
      navigate("/notfound");
    }
  };
  return (
    <div>
      <button onClick={customLink}>Go to Home</button>
    </div>
  );
}
