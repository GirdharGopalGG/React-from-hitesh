import "./App.css";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { Github, githubLoader } from "./components/Github";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/github" element={<Github />} loader={githubLoader} />
    </Route>
  )
);

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/github" element={<Github />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      <RouterProvider router={router} />
    </>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
