import { Navbar } from "../components/Navbar.jsx";
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [rateLimited, setRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        console.log(res.data);
      } catch (error) {
        console.log(`Error fetching notes: ${error}`);
      }
    };
    fetchNotes();
  });
  return (
    <div className="min-h-screen">
      <Navbar />
      {rateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;
