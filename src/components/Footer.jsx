import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold">YourBrand</h2>
            <p className="mt-3 text-sm text-gray-400">
              High-quality fashion for men. Stay stylish and comfortable with our latest collection.
            </p>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Shop</a></li>
              <li><a href="#" className="hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white">Order Tracking</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-3">Join Our Newsletter</h3>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to receive exclusive deals and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full text-black rounded-l-md"
              />
              <button className="bg-red-500 px-4 py-2 rounded-r-md hover:bg-red-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

       
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaPinterest size={24} /></a>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaCcVisa size={36} className="text-gray-400 hover:text-white" />
            <FaCcMastercard size={36} className="text-gray-400 hover:text-white" />
            <FaCcPaypal size={36} className="text-gray-400 hover:text-white" />
            <FaCcApplePay size={36} className="text-gray-400 hover:text-white" />
          </div>
        </div>

       
        <p className="text-center text-sm text-gray-500 mt-6">
          © 2025 YourBrand. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

