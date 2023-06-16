import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import {
  decrementQantity,
  deleteFromCart,
  incrementQuantity,
  resetCart,
} from "../redux/bazaarSlice";

export const AddCategories = () => {
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.bazar.productData);
  console.log(productData);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="text-2xl">
        <h1>KATEOGORİ EKLE</h1>
      </div>
      <div className="flex flex-col space-y-12">
        <div className="flex flex-row justify-between">
          <div className=" mr-6">
            <h2>Kategori ismi: </h2>
          </div>
          <div>
            <input
              className="border-[1px] border-black cursor-pointer"
              type="text"
              id="username"
              name="username"
            />
          </div>
        </div>
        <button
          className="bg-black text-white text-base py-3 px-10 tracking-wide 
        rounded-md hover:bg-gray-800 duration-300"
        >
          Ekle
        </button>
      </div>
    </div>
  );
};
