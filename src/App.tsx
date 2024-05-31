import { Route, Routes } from "react-router-dom";
import Home from "./components/B1/Home";
import Contact from "./components/B2/Contact";
import Login from "./components/B3/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/B4/Register";
import NotFound from "./components/B5/NotFound";
import Home1 from "./components/B6/Home1";
import Main from "./components/B6/Main";
import About from "./components/B6/About";
import Home2 from "./components/B7/Home2";
import Product from "./components/B7/Product";
import Detail from "./components/B7/Detail";
import Main1 from "./components/B7/Main1";
import B8 from "./components/B8/B8";
import Admin from "./components/B8/Admin";
import Account from "./components/B8/Account";
import Products from "./components/B8/Products";
import CustomLink from "./components/B9/CustomLink";
import HomePage from "./components/B9/HomePage";
import NotFound1 from "./components/B9/NotFound";
import ListUser from "./components/B10/ListUser";
import UserDetail from "./components/B10/UserDetail";

export default function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="" element={<Main />}>
          <Route path="/home1" element={<Home1 />} />
          <Route path="/about" element={<About />} />
        </Route> */}
        {/* <Route path="" element={<Main1 />}>
          <Route path="/home2" element={<Home2 />} />
          <Route path="/product" element={<Product />} />
          <Route path="/detail" element={<Detail />} />
        </Route> */}
        {/* <Route path="" element={<B8 />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product" element={<Products />} />
        </Route> */}
        {/* <Route path="" element={<CustomLink />}></Route>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/notfound" element={<NotFound1 />} /> */}
        <Route path="" element={<ListUser />}></Route>
        <Route path="/user-detail/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}
