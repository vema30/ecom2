import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="grid grid-cols-3 items-center h-20 max-w-6xl mx-auto px-4">
        <NavLink to="/">
          <div className="justify-self-start">
            <img
              className="w-[200px] h-[100px]" 
              src="https://ecomzy-shopping-cart.vercel.app/logo.png"
              alt="Logo" 
            />
          </div>
        </NavLink>

        {/* Empty div to center-align grid */}
        <div></div>

        {/* Home and Cart items aligned to the right */}
        <div className="flex justify-self-end items-center font-medium text-slate-100 space-x-6">
          <NavLink to="/" className="hover:text-green-300">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <BsFillCartFill className="text-2xl" color="green" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
