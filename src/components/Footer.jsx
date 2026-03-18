
import Logo from "../assets/Logo.svg";
import Logokak from "../assets/kaktus.svg";
import Logokak2 from "../assets/idish.svg";

export default function Footer() {
  return (
    <footer className="bg-[#FBFBFB] border-t border-[#EAEAEA] mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
       
          <div className="flex flex-col gap-4 md:col-span-3 md:flex-row md:gap-0 md:justify-between">
            <div className="flex-1 flex items-start gap-4">
              <img src="https://img.icons8.com/ios/64/4caf50/cactus.png" alt="Garden Care" className="h-12 w-12" />
              <div>
                <div className="font-bold">Garden Care</div>
                <div className="text-gray-500 text-sm">We are an online plant shop offering a wide range of cheap and trendy plants.</div>
              </div>
            </div>
            <div className="flex-1 flex items-start gap-4">
              <img src={Logokak} alt="Plant Renovation" className="h-12 w-12" />
              <div>
                <div className="font-bold">Plant Renovation</div>
                <div className="text-gray-500 text-sm">We are an online plant shop offering a wide range of cheap and trendy plants.</div>
              </div>
            </div>
            <div className="flex-1 flex items-start gap-4">
              <img src={Logokak2}  alt="Watering Garden" className="h-12 w-12" />
              <div>
                <div className="font-bold">Watering Graden</div>
                <div className="text-gray-500 text-sm">We are an online plant shop offering a wide range of cheap and trendy plants.</div>
              </div>
            </div>
          </div>
          {/* Newsletter */}
          <div className="md:col-span-1 flex flex-col gap-2">
            <div className="font-bold mb-2">Would you like to join newsletters?</div>
            <div className="flex mb-2">
              <input type="email" placeholder="enter your email address..." className="flex-1 rounded-l-lg border border-gray-200 px-4 py-2 focus:outline-none" />
              <button className="bg-[#46A358] text-white px-6 py-2 rounded-r-lg font-semibold">Join</button>
            </div>
            <div className="text-gray-500 text-sm">We usually post offers and challenges in newsletter. We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!</div>
          </div>
        </div>
        {/* Contact Row */}
        <div className="bg-[#EDF6EE] rounded-lg flex flex-col md:flex-row items-center justify-between px-6 py-4 mb-10">
          <div className="flex items-center gap-3 mb-2 md:mb-0">
            <img src={Logo} alt="Greenshop Logo" className="h-8 w-8" />
            <span className="text-lg font-bold text-[#46A358]">GREENSHOP</span>
          </div>
          <div className="flex items-center gap-6 text-gray-700 text-sm">
            <span className="flex items-center gap-2"><svg width="18" height="18" fill="none" stroke="#46A358" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.5"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>70 West Buckingham Ave. Farmingdale, NY 11735</span>
            <span className="flex items-center gap-2"><svg width="18" height="18" fill="none" stroke="#46A358" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.5"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>contact@greenshop.com</span>
            <span className="flex items-center gap-2"><svg width="18" height="18" fill="none" stroke="#46A358" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.5"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>+88 01911 717 490</span>
          </div>
        </div>
        {/* Links Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          <div>
            <div className="font-bold mb-2">My Account</div>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>My Account</li>
              <li>Our stores</li>
              <li>Contact us</li>
              <li>Career</li>
              <li>Specials</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Help & Guide</div>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Shipping & Delivery</li>
              <li>Product Policy</li>
              <li>How to Return</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Categories</div>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>House Plants</li>
              <li>Potter Plants</li>
              <li>Seeds</li>
              <li>Small Plants</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Social Media</div>
            <div className="flex gap-2 mb-2">
              <a href="#" className="bg-[#EDF6EE] p-2 rounded"><img src="https://img.icons8.com/ios-filled/24/4caf50/facebook-new.png" alt="fb" /></a>
              <a href="#" className="bg-[#EDF6EE] p-2 rounded"><img src="https://img.icons8.com/ios-filled/24/4caf50/instagram-new.png" alt="ig" /></a>
              <a href="#" className="bg-[#EDF6EE] p-2 rounded"><img src="https://img.icons8.com/ios-filled/24/4caf50/twitter.png" alt="tw" /></a>
              <a href="#" className="bg-[#EDF6EE] p-2 rounded"><img src="https://img.icons8.com/ios-filled/24/4caf50/linkedin.png" alt="li" /></a>
              <a href="#" className="bg-[#EDF6EE] p-2 rounded"><img src="https://img.icons8.com/ios-filled/24/4caf50/youtube-play.png" alt="yt" /></a>
            </div>
            <div className="font-bold mb-1">We accept</div>
            <div className="flex gap-2">
              <img src="https://img.icons8.com/color/36/000000/paypal.png" alt="paypal" />
              <img src="https://img.icons8.com/color/36/000000/mastercard-logo.png" alt="mc" />
              <img src="https://img.icons8.com/color/36/000000/visa.png" alt="visa" />
              <img src="https://img.icons8.com/color/36/000000/amex.png" alt="amex" />
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm border-t pt-4">© 2021 GreenShop. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
 