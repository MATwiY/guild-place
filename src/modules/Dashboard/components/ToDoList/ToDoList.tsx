import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./ToDoList.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { useGetTodos } from "../../hooks/useGetTodos";

export const ToDoList: React.FC = () => {
  const [messages, setMessages] = useState([
    "element1",
    "element2",
    "element3",
    "element4",
  ]);

  const [message, setMessage] = useState<string>("");
  const todosQuery = useGetTodos();

  return (
    <div className={styles.todoWrapper}>
      <div className={styles.addTodo}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Add Todo Item..."
            inputProps={{ "aria-label": "add todo item" }}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={(event) => {
              if (event.code === "Enter") {
                setMessages((prev) => [...prev, message]);
                setMessage("");
                event.preventDefault();
              }
            }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            size="large"
            color="primary"
            sx={{ p: "10px" }}
            aria-label="add todo"
            onClick={() => {
              setMessages((prev) => [...prev, message]);
              setMessage("");
            }}
          >
            <AddIcon fontSize="inherit" />
          </IconButton>
        </Paper>
      </div>
      <List className={styles.toDoList}>
        {todosQuery.data?.map((todoItem, i) => (
          <ListItem
            className={styles.listElement}
            key={`${todoItem.title}-${i}`}
            divider
          >
            <ListItemButton>
              <ListItemText
                primary={todoItem.title}
                sx={{ wordBreak: "break-word" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
