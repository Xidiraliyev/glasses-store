import { useDispatch, useSelector } from "react-redux";
import BasketProduct from "./components/BasketProduct";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { updateTotal } from "./redux/features/basketSlice";

function App() {
  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [products, dispatch]);

  return (
    <>
      <Navbar />
      <BasketProduct />
    </>
  );
}

export default App;
