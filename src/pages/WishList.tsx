import { Button, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const WishList = () => {
  const { isWishlistEmpty, items, removeWishlistItem } = useWishlist();
  const { addItem } = useCart();

  const notify = () =>
    toast.success("Added products", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notif = () => {
    toast.error("Product was deleted..", {
      position: "bottom-right",
      autoClose: 4949,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const myArray: any[] = [
    ...new Map(items.map((item) => [item.id, item])).values(),
  ];

  return (
    <div className="wishlist">
      {isWishlistEmpty ? (
        <div className="d-flex justify-content-center align-items-center">
          <img src="https://media4.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=790b7611912ad2ba2721459fb7cf39ade5cea1e8414760ac&rid=giphy.gif&ct=s" />
        </div>
      ) : (
        <>
          <h1 className="text-center ">Products</h1>
          <Table className="container  mt-5" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Title</th>
                <th>Price</th>
                <th>Add To Cart</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "black" }}>
              {myArray.map((item, c) => {
                return (
                  <tr key={item.id}>
                    <td>{c + 1}</td>
                    <td>
                      <img width={50} src={item.img} alt={item.title} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}$</td>
                    <td>
                      <Button
                        onClick={() => {
                          addItem(item);
                          notify();
                        }}
                      >
                        Add To Cart
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          removeWishlistItem(item.id);
                          notif();
                        }}
                      >
                        X
                      </Button>
                      <ToastContainer />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default WishList;
