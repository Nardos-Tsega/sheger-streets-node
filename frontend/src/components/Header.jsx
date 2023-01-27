import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" py-4 flex justify-between">
      <div>
        <h1>sets</h1>
      </div>
      <div className="flex gap-4">
        <Link to="/login" className="border rounded-full px-8 py-2">
          Login
        </Link>
        <Link to="/register" className="border rounded-full px-8 py-2">
          Register
        </Link>
      </div>
    </div>
  );
}
