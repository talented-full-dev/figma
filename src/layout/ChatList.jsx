import * as React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  ListItem
} from "@mui/material";

export default function ChatList() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{ width: "100%" }}
      className="custom-black "
      style={{ color: "white", position: "relative" }}
    >
      <div className="logo flex justify-center items-center">
        <img src="./assets/img/logo.png" className="mt-8" alt="logo" />
      </div>
      <div>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemText primary="Inbox" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </List>
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText primary="Trash" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemText primary="Spam" />
          </ListItemButton>
        </List>
      </div>
    </Box>
  );
}
