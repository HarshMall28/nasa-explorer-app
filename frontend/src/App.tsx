import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ApodPage from "./pages/ApodPage";
import NeowsPage from "./pages/NeoPage";
import Header from "./components/Header";
import "./styles/globals.css";

/**
 * App
 * Root component that sets up routing, global layout, and shared header.
 */
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        {/* Shared header across all pages */}
        <Header />

        {/* Main content area with routing */}
        <main className="w-full px-2 sm:px-4 py-6">
          <Routes>
            <Route path="/" element={<ApodPage />} />
            <Route path="/neows" element={<NeowsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
