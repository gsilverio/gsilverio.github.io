import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceList from "./pages/ServicesList";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import ServiceDetails from "./pages/ServiceDetails";
import Navbar from "./components/Navbar";
import UserDetails from "./pages/UserDetails";
const Rotas = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kindofservice" element={<ServiceList />} />
      <Route path="/kindofservice/:serviceId" element={<ServiceDetails />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:userId" element={<UserDetails />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
