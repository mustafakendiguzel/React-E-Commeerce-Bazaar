import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function MenuPopupState({ categories }) {
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
