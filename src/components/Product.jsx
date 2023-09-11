import { useDispatch } from "react-redux";
import { increment, decrement, remove } from "../redux/features/basketSlice";
import DeletIcon from '../../public/img/delete.png'

const Product = ({ name, price, image, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row  items-center gap-8  border border-gray-200 rounded-lg bg-green-100">
      <img src={image} alt={name + "glasses"} className="w-auto h-[148px] rounded-l-lg object-cover"/>
      <div className="w-1/2 px-10 py-6">
        <p className="text-2xl  font-medium mb-1">{name}</p>
        <p className="text-lg tracking-wide mb-2">$ {price.toFixed(2)}</p>
        
        <div className="flex flex-row items-center gap-4 text-gray-600 font-medium">
          <button
            className="text-xl"
            onClick={() => {
              if (amount === 1) {
                dispatch(remove({ name }));
                return;
              }
              dispatch(decrement({ name }));
            }}
          >
            -
          </button>
          <p className="border border-gray-300 bg-white px-4 ">{amount}</p>
          <button
            className="text-xl"
            onClick={() => {
              dispatch(increment({ name }));
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
      <button
          className="text-red-500 tracking-wide pt-1 pb-3"
          onClick={() => {
            dispatch(remove({ name }));
          }}
        >
          <img src={DeletIcon} alt="" width={35} height={35} className="hover:scale-110 duration-100"/>
        </button>
      </div>
    </div>
  );
};

export default Product;
