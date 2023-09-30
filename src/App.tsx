import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Shop from "./pages/Shop";
import Footer from "./pages/Footer";
import AllProducts from "./shop/AllProducts";
import Cart from "./pages/Cart";
import ProductDetails from "./details/ProductDetails";
import "./sass/style.css";
import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Dashboard from "./pages/admin/Dashboard";
import Auth from "./pages/admin/Auth";
import CreateBlog from "./pages/admin/update/CreateBlog";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import NotFoundPage from "./pages/NotFoundPage";
import WishList from "./pages/WishList";
import { LangContext, LangProvider } from "./context/LangContext";

const Main = () => {
  const [mode] = useContext(ThemeContext);
  return (
    <div className={mode}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop/:url" element={<ProductDetails />}></Route>
        <Route path="/allproducts" element={<AllProducts />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin" element={<Auth />}></Route>
        <Route path="/admin/dashboard/add" element={<CreateBlog />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

const store = configureStore();
const App = () => {
  return (
    <>
      <BrowserRouter>
        <LangProvider>
          <ThemeProvider>
            <Provider store={store}>
              <Main />
            </Provider>
          </ThemeProvider>
        </LangProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
