import { Divider, Grid, IconButton, InputBase, List, ListItem, ListItemText, makeStyles, Paper, TextField } from "@mui/material";
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
      <Grid alignSelf={"center"} maxWidth={"500px"}>
        <div className={styles.addTodo}>
          <Paper
            className={styles.inputBox}
            component="form"
            sx={{ p: '4px 4px', display: 'flex', alignItems: 'center', width: 500 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Notes"
              inputProps={{ 'aria-label': 'Notes' }}
              value={message} onChange={(event) => setMessage(event.target.value)}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton sx={{ p: '10px' }} size="large"
              className={styles.addTodoButton}
              onClick={() => {
                if (message != " " && message.trim().length > 0) {
                  setMessages((prev) => [...prev, message]); setMessage("")
                } else {
                  setMessage("");
                }
              }}>
              <AddIcon fontSize="inherit" />
            </IconButton>
          </Paper>
        </div>

        <List className={styles.toDoList}>
          {messages.map((message) => (
            <ListItem className={styles.listElement}>
              <ListItemText primary={message}
                sx={{ wordBreak: "break-word" }} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </>
  );
};
