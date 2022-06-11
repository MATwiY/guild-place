import {
  Divider,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  makeStyles,
  Paper,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./ToDoList.module.scss";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from '@mui/icons-material/Search';
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
  const [searchValue, setSearch] = useState("");

  return (
    <>
      <div className={styles.addTodo}>
        <Paper
          className={styles.inputBox}
          component="form"
          sx={{
            p: "4px 4px",
            display: "flex",
            alignItems: "center",
            width: 500,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Notes"
            inputProps={{ "aria-label": "Notes" }}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            sx={{ p: "10px" }}
            size="large"
            className={styles.searchButton}
            onClick={() => {
              setSearch(message);
            }}
          >
            <SearchIcon fontSize="inherit" />
          </IconButton>

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            sx={{ p: "10px" }}
            size="large"
            className={styles.addTodoButton}
            onClick={() => {
              if (message.trim().length > 0) {
                setMessages((prev) => [...prev, message]);
                setMessage("");
              } else {
                setMessage("");
              }
            }}
          >
            <AddIcon fontSize="inherit" />
          </IconButton>
        </Paper>
      </div>

      <List className={styles.toDoList}>
        {todosQuery.data?.filter(val => val.title.toLowerCase().includes(searchValue.toLowerCase())).map((todoItem, i) => (
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
    </>
  );
};
