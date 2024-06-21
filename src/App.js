import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPostForm from "./Components/AddPostForm";
import "./App.css";
import Posts from "./Components/Posts";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route index element={<Posts />} />
            <Route path="/add" element={<AddPostForm />} />
            <Route path="/add/:id" element={<AddPostForm />} />
          </Routes>
        </main>
        <footer>Footer Content</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
