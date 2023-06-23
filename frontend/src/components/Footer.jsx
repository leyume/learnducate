import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-12 bg-dark-800">
      <div className="central flex justify-between">
        <Link to="/" className="text-3xl text-white tracking-tight font-bold">
          Learn<span className="opacity-60">ducate</span>
        </Link>
        <div className="text-white text-lg tracking-tight font-bold">
          <span className="opacity-60">20</span>
          23
        </div>
      </div>
    </footer>
  );
}
