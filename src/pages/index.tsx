import { Container, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Form } from "../components/Form";
import { List } from "../components/List";
import styles from "../styles/Home.module.css";
import { Note } from "../types/note";

const Home: NextPage = () => {
  const [note, setNote] = useState<Note[]>([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Mi aplicacion</title>
      </Head>
      <Container
        sx={{
          marginTop: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Form setNotes={setNote} />
          </Grid>
          <Grid item xs={12} md={8}>
            <List notes={note} setNotes={setNote} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
