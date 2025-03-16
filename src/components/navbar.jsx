    import { Link, useNavigate } from "react-router-dom";
    import { FiMenu, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
    import { useContext, useState } from "react";
    import { Cartcontexe } from "./cartprovider.jsx";

    import { X } from "lucide-react";

    export function Navbar() {
      const { cart } = useContext(Cartcontexe);
      const Totalarticle = cart.reduce((acc, item) => acc + item.quantite, 0);
      const navigate = useNavigate();
      const [searchOpen, setSearchOpen] = useState(false);
      const [searchQuery, setSearchQuery] = useState("");
      const [login,setlogin]=useState(false);
      const [shopOpen, setShopOpen] = useState(false);
      const [isSignUp, setIsSignUp] = useState(false);
      const [rotated,setroted]=useState(false);

      return (
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
            <Link to="/" className="text-2xl font-bold text-gray-900">
              🛍️ ViteShop
            </Link>
            
          
            <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
              <Link to="/" className="hover:text-orange-500">Home</Link>
              <div className="relative">
                <button onClick={() =>{
    setShopOpen(!shopOpen);
    setroted(!rotated);
                } } className="hover:text-orange-500 flex "> Shop <div className={`arrow mx-1 ${rotated ? 'rotated' : ''}`}> ▼ </div> </button>
                {shopOpen && (
                  <div className="absolute bg-white shadow-md rounded-md mt-2 py-2 w-40">
                    <Link to="/men" className="block px-4 py-2 hover:bg-gray-100">Men</Link>
                    <Link to="/women" className="block px-4 py-2 hover:bg-gray-100">Women</Link>
                    <Link to="/kids" className="block px-4 py-2 hover:bg-gray-100">Kids</Link>
                  </div>
                )}
              </div>
              <Link to="/new-arrivals" className="hover:text-orange-500">New Arrivals</Link>
              <Link to="/sale" className="text-red-500 font-semibold">Sale</Link>
            </nav>
            
            {/* Icons Section */}
            <div className="flex items-center gap-5">
              {/* Search Section */}
              <div className="relative">
                <button onClick={() => setSearchOpen(!searchOpen)} className="text-gray-700 hover:text-orange-500">
                  <FiSearch size={22} />
                </button>
                {searchOpen && (
                  <div className="absolute top-full right-0 bg-white border border-gray-300 px-4 py-2 rounded-md shadow-md w-64">
                    <input
                      type="search"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-2 py-1 border-b border-gray-300 focus:outline-none"
                    />
                    <ul className="mt-2 max-h-40 overflow-y-auto">
                      <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Example Item 1</li>
                      <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Example Item 2</li>
                      <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Example Item 3</li>
                      <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Example Item 3</li>
                      <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Example Item 3</li>
                      <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Example Item 3</li>
                      <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Example Item 3</li>
                      <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Example Item 3</li>
                      <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Example Item 3</li>
                      <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Example Item 3</li>
                      <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Example Item 3</li>
                    </ul>
                  </div>
                )}
              </div>
            
              <button onClick={()=>setlogin(!login)} className="text-gray-700 hover:text-orange-500">
                <FiUser size={22} />
              </button>
              {login && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white shadow-xl rounded-lg p-8 w-96">
        
          <button
            onClick={() => setlogin(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
          >
            <X size={20} />
          </button>

        
          <div className="flex justify-between mb-6">
            <button
              onClick={() => setIsSignUp(false)}
              className={`w-1/2 py-3 text-center font-semibold ${!isSignUp ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
            >
              Login
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`w-1/2 py-3 text-center font-semibold ${isSignUp ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
            >
              Sign Up
            </button>
          </div>

        
          {!isSignUp ? (
            <>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                Login
              </h2>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Login
              </button>
            </>
          ) : (
            // Signup Form
            <>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                Sign Up
              </h2>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Sign Up
              </button>
            </>
          )}

          {/* Forgot password link */}
          <p className="text-center text-gray-500 mt-4">
            <a href="#" className="hover:text-blue-600">
              Forgot password?
            </a>
          </p>
        </div>
      </div>
    )}

              

            
            
              <button onClick={() => navigate('/cart')} className="relative text-gray-700 hover:text-orange-500">
                <FiShoppingCart size={22} />
                {Totalarticle > 0 && (
                  <span className="absolute -top-4 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {Totalarticle}
                  </span>
                )}
              </button>
              
              
              <button  className="md:hidden text-gray-700">
                <FiMenu size={24} />
              </button>
            
            </div>
          </div>
        </header>
      );
    }
