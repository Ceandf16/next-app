import React, { Dispatch, SetStateAction } from "react";
import {
  Avatar,
  IconButton,
  ListItem as MaterialListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { AccountCircle, Delete } from "@mui/icons-material";
import { Note } from "../types/note";

export const ListItem = (
  props: Note & { setNotes: Dispatch<SetStateAction<Note[]>> }
) => {
  const removeNote = () => {
    console.log("props.id", props.id);
    props.setNotes((prevState) =>
      prevState.filter((note) => note.id !== props.id)
    );
  };
  return (
    <MaterialListItem
      secondaryAction={
        <IconButton edge="end" onClick={removeNote}>
          <Delete />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <AccountCircle />
        </Avatar>
      </ListItemAvatar>

      <ListItemText primary={props.title} secondary={props.description} />
    </MaterialListItem>
  );
};
