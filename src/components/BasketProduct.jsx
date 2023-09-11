import Product from "./Product";
import { useSelector } from "react-redux";

function BasketProduct() {
  const { products, total, amount } = useSelector((store) => store.basket);
  return (
    <div className="max-w-4xl mx-auto py-4">
      {amount > 1 ? (
        <>
          <div className="flex flex-col gap-6">
            {products.map((item, i) => (
              <Product
                key={new Date().getTime * Math.random}
                name={item.name}
                price={item.price}
                image={item.image}
                amount={item.amount}
              />
            ))}
          </div>

          <div className="flex flex-row items-center  justify-evenly py-8 bg-green-300 mt-5 rounded-full">
            <p className="text-2xl font-medium">Total:</p>
            <p className="text-2xl font-medium">${total.toFixed(2)}</p>
          </div>
        </>
      ) : (
        <>
          <p className="text-2xl text-gray-700 font-medium text-center">Your basket is empty</p>
        </>
      )}
    </div>
  );
}

export default BasketProduct;
