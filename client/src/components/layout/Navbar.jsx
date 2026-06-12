import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SearchBar from "../ui/SearchBar";
import "./layout.css";
import { Search, ShoppingCart, CircleUser } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchBtnRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300
      ${
        isScrolled
          ? "bg-white shadow-md py-2 md:py-4"
          : "bg-transparent py-4 md:py-6 text-gray-50"
      }`}
    >
      <div className="max-w-350 mx-auto flex items-center justify-between px-4">
        <Link
          to="/"
          onClick={scrollToTop}
          className="text-2xl font-bold uppercase nav-icons"
        >
          Animart
        </Link>

        <div className="hidden md:flex items-center gap-12 nav-icons">
          <Link to="/shop">Shop</Link>
          <Link to="/category">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <button ref={searchBtnRef} onClick={toggleSearch}>
            <Search size={24} className="nav-icons" />
          </button>
          <button>
            <ShoppingCart size={24} className="nav-icons" />
          </button>
          <button>
            <CircleUser size={24} className="nav-icons" />
          </button>
        </div>

        <SearchBar
          isOpen={isSearchOpen}
          setIsOpen={setIsSearchOpen}
          searchBtnRef={searchBtnRef}
        />
      </div>
    </nav>
  );
};

export default Navbar;
