import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50 px-6 py-3 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with subtle animation */}
        <NavLink
          to="/"
          className="flex items-center group"
          aria-label="NASA Explorer Home"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <h1 className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            NASA Explorer
          </h1>
        </NavLink>

        {/* Navigation with modern indicators */}
        <ul className="flex space-x-1 bg-gray-800/50 p-1 rounded-full border border-gray-700/50">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600/90 text-white shadow-lg shadow-blue-500/20"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`
              }
            >
              APOD
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/neows"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-purple-600/90 text-white shadow-lg shadow-purple-500/20"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`
              }
            >
              NeoWs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
