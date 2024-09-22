import "./App.scss";
import Home from "./pages/Home";
import { AppProvider } from "./context";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import About from "./pages/About";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
