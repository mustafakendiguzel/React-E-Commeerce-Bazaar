import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useDispatch } from "react-redux";
import { selectCategory } from "../redux/bazaarSlice";

export default function MenuPopupState({ categories }) {
  const dispatch = useDispatch();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Kategoriler
          </Button>
          <Menu {...bindMenu(popupState)}>
            {categories &&
              categories.map((item, key) => {
                return (
                  <MenuItem
                    key={key}
                    onClick={() => {
                      popupState.close();
                      dispatch(selectCategory({ name: item.name }));
                    }}
                  >
                    {item.name}
                  </MenuItem>
                );
              })}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
