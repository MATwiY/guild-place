import { Button, IconButton, List, ListItem, ListItemText, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./ToDoList.module.scss";
import AddIcon from '@mui/icons-material/Add';

export const ToDoList: React.FC = () => {
  const [messages, setMessages] = useState([
    "element1",
    "element2",
    "element3",
    "element4",
  ]);

  const [message, setMessage] = useState<string>("");

  return (
    <>
      <div className={styles.addTodo}>
        <TextField label="To do note" type="search" value={message} onChange={(event) => setMessage(event.target.value)} />

        <IconButton size="large" className={styles.addTodoButton} onClick={() => { setMessages((prev) => [...prev, message]); setMessage("") }}>
          <AddIcon fontSize="inherit" />
        </IconButton>
      </div>
      <List className={styles.toDoList}>
        {messages.map((message) => (
          <ListItem className={styles.listElement}>
            <ListItemText primary={message} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
