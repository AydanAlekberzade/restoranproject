import { useCallback, useContext, useEffect } from "react";
import { Button, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { ThemeContext } from "../context/ThemeContext";
import LoginBtn from "../components/LoginBtn";
import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";
import { LangContext } from "../context/LangContext";

const Header = () => {
  const [mode, setMode] = useContext(ThemeContext);
  const { totalWishlistItems } = useWishlist();
  const { totalItems } = useCart();
  const [lang, setLang] = useContext(LangContext);
  const { isWishlistEmpty, items, removeWishlistItem } = useWishlist();

  useEffect(() => {
    if (localStorage.getItem("mode") === null) {
      localStorage.setItem("mode", "dark");
    }
    if (localStorage.getItem("lang") === null) {
      localStorage.setItem("lang", "en");
    }
  }, []);

  
  const myArray: any[] = [
    ...new Map(items.map((item) => [item.id, item])).values(),
  ];
  return (
    <>
      <div className="header">
        <Navbar collapseOnSelect expand="lg" className="nav-dark  navbar-dark">
          <Container>
            <Navbar.Brand>
              <img
                width="180"
                src="https://soulkitchen.bg/wp-content/uploads/2019/10/SK_logo_light_full.png"
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav style={{ alignItems: "center" }} className="me-auto mt-2">
                <LinkContainer to="/">
                  <Nav.Link> {lang === "az" ? "Ana Səhifə" : "Home"} </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/admin">
                  <Nav.Link className="loginbtnm">
                    <LoginBtn />
                  </Nav.Link>
                  {/* <LoginBtn/> */}
                </LinkContainer>
                <LinkContainer to="/allproducts">
                  <Nav.Link>
                    <i
                      style={{ fontSize: "17px" }}
                      className="fa-brands fa-product-hunt"
                    ></i>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav style={{ alignItems: "center" }}>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    {" "}
                    <i className="fa-sharp fa-solid fa-cart-shopping"></i>(
                    {totalItems})
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/wishlist">
                  <Nav.Link>
                    {lang === "az" ? "Seçilmiş" : "WISHLIST"}(
                    {myArray.length})
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/shop">
                  <Nav.Link> {lang === "az" ? "Məhsullar" : "SHOP"}</Nav.Link>
                </LinkContainer>
                <Button
                  variant=""
                  onClick={() => {
                    mode === "light" ? setMode("dark") : setMode("light");
                    mode === "light"
                      ? localStorage.setItem("mode", "dark")
                      : localStorage.setItem("mode", "light");
                  }}
                >
                  {mode === "light" ? (
                    <i className="fa-solid fa-sun"></i>
                  ) : (
                    <i className="fa-solid fa-moon"></i>
                  )}
                </Button>
                <LinkContainer to="/contact">
                  <Nav.Link> {lang === "az" ? "Əlaqə" : "CONTACT"}</Nav.Link>
                </LinkContainer>

                <Button
                  variant=""
                  onClick={() => {
                    lang === "az" ? setLang("en") : setLang("az");
                    lang === "az"
                      ? localStorage.setItem("lang", "en")
                      : localStorage.setItem("lang", "az");
                  }}
                >
                  {lang === "az" ? "EN" : "AZ"}
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
