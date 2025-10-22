import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
        <button onClick={() => toast.success("Congrats!")}>Click me</button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/note/:id" element={<NoteDetailPage />} />
        </Routes>
    </>
  );
};

export default App;
