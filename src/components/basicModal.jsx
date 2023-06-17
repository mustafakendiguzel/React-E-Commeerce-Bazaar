import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Edit } from "../assets";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const initialValues = {
    stock: 0,
  };
  const [values, setValues] = React.useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div>
      <Button
        onClick={() => {
          handleOpen();
        }}
      >
        <img className=" h-7 w-7" src={Edit} alt="" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-row justify-between">
            <div className=" mr-6">
              <h2>Stok: </h2>
            </div>
            <div>
              {item && item.stock && <h1>{item.stock}</h1>}
              {item && values.stock !== "0" && (
                <input
                  className="border-[1px] border-black cursor-pointer"
                  type="number"
                  id="stock"
                  name="stock"
                  value={values.stock}
                  onChange={handleInputChange}
                />
              )}
            </div>
          </div>
          {item && values.stock !== "0" && (
            <div className="flex justify-center pt-10">
              <button
                onClick={() => {
                  toast.success("Stok başarıyla güncellendi");
                  handleClose();
                }}
                className="bg-black text-white text-base py-3 px-10 tracking-wide 
        rounded-md hover:bg-gray-800 duration-300"
              >
                Güncelle
              </button>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
