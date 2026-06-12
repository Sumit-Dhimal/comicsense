import { useEffect, useRef } from "react";

const SearchBar = ({ isOpen, setIsOpen, searchBtnRef }) => {
  const searchFocusRef = useRef();
  const searchCloseRef = useRef();

  // auto focus input when search opens
  useEffect(() => {
    if (isOpen) {
      searchFocusRef.current.focus();
    }
  }, [isOpen]);

  // close search on click outside

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      /*
          IF:
          - the search component exists
          AND
          - the clicked element is NOT inside it
          AND
          - the search button exists
          AND
          - the clicked element is NOT the search button
            
          THEN:
          close the search
      */
      if (
        searchCloseRef.current &&
        !searchCloseRef.current.contains(e.target) &&
        searchBtnRef.current &&
        !searchBtnRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      ref={searchCloseRef}
      className={`
        absolute top-10 md:top-16 right-4 md:right-20 transition-all duration-300 bg-white
        ${isOpen ? "opacity:100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
    `}
    >
      <div>
        <input
          ref={searchFocusRef}
          type="search"
          name="search"
          placeholder="Search..."
          className="text-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md w-96"
        />
      </div>
    </div>
  );
};

export default SearchBar;
