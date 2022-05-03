import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import { Note } from "../types/note";
import { v4 as uuid } from "uuid";

interface FormProps {
  setNotes: Dispatch<SetStateAction<Note[]>>;
}

export const Form = (props: FormProps) => {
  const methods = useForm<Note>();
  const { handleSubmit, control } = methods;

  const onSubmit = (values: Note) => {
    //guardar nueva nota
    console.log("values", values);
    const id = uuid();
    values.id = id;
    props.setNotes((prevState) => [...prevState, values]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader title="Formulario" subheader="ss" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="title"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Titulo"
                    fullWidth
                    helperText="Introduce un titulo"
                    placeholder="titulo1"
                    {...field}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                    }}
                  />
                )}
              ></Controller>
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="description"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Descripción"
                    fullWidth
                    helperText="Introduce una descripción"
                    placeholder="Decripcion1"
                    {...field}
                    //multiline={true}
                    multiline
                    minRows={3}
                    maxRows={5}
                  />
                )}
              ></Controller>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button fullWidth color="primary" variant="contained" type="submit">
            Guardar
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
