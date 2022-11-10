import * as React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography
} from "@mui/material";
import "./layoutStyle.css";
export default function ChatList() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const chatListDt = [
    {
      avatar: "./assets/img/avatar (5).png",
      name: "NandanlyTrades",
      content: "This is just an UI design, this is how the chat would look."
    }
  ];

  return (
    <Box
      sx={{ width: "100%" }}
      className="custom-black "
      style={{ color: "white", position: "relative" }}
    >
      <div className="logo flex justify-center items-center">
        <img
          src="./assets/img/logo.png"
          width={130}
          height={70}
          className="mt-8"
          alt="logo"
        />
      </div>
      <div style={{ paddingTop: "160px" }}>
        <List
          component="nav"
          aria-label="main mailbox folders"
          style={{ height: "500px", overflow: "auto" }}
        >
          {[...new Array(15)].map((item, key) => (
            <ListItemButton
              selected={selectedIndex === key}
              onClick={(event) => handleListItemClick(event, key)}
            >
              <ListItemAvatar>
                <Avatar
                  alt={chatListDt[0].name}
                  src={chatListDt[0].avatar}
                  sx={{
                    width: 55,
                    height: 55,
                    marginRight: "10px",
                    border: "2px solid #9123FF"
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        fontFamily: "Poppins",
                        color: "white"
                      }}
                      className="font16"
                      component="span"
                      color="text.primary"
                    >
                      {chatListDt[0].name}
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        fontFamily: "Poppins",
                        color: "grey"
                      }}
                      className="font10"
                      component="span"
                      color="text.primary"
                    >
                      {chatListDt[0].content}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </div>
    </Box>
  );
}
