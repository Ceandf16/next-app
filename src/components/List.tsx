import {
  Card,
  CardContent,
  CardHeader,
  List as MaterialList,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Note } from "../types/note";
import { ListItem } from "./ListItem";

interface ListProps {
  notes: Note[];
  setNotes: Dispatch<SetStateAction<Note[]>>;
}
export const List = (props: ListProps) => {
  return (
    <Card>
      <CardHeader title="Lista de Notas" subheader="ln" />
      <CardContent>
        <MaterialList>
          {props.notes.map((note) => (
            <ListItem
              key={note.id}
              description={note.description}
              title={note.title}
              id={note.id}
              setNotes={props.setNotes}
            />
          ))}
        </MaterialList>
      </CardContent>
    </Card>
  );
};
