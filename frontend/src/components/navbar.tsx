import { IconShoppingCart } from "@tabler/icons-react";
import { Link } from "react-router";
import { useCartStore } from "../store/useCartStore";

export const Navbar = () => {
  const items = useCartStore((state) => state.items);

  return (
    <nav className="navbar bg-base-100/40 fixed z-100 shadow-sm backdrop-blur-xl">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          <img
            src={"img/logo.png"}
            className="h-full"
            style={{
              transform: "scaleX(-1)",
            }}
          />
        </Link>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        <button className="btn btn-secondary">
          <IconShoppingCart size={22} />
          {items.length > 0 && <span className="badge">{items.length}</span>}
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="public/img/kian.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
