import { List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter: React.FC = () => {
  const [messages, setMessages] = useState([
    "element1",
    "element2",
    "element3",
    "element4",
  ]);

  return (
    <>
      <div className={styles.addTodo}>
        <input />
        <button>+</button>
      </div>
      <List>
        {messages.map((message) => (
          <ListItem>
            <ListItemText primary={message} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
