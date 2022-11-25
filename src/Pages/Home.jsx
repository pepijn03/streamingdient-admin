import * as React from 'react';
import {Container, Paper} from "@mui/material";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import EditFilm from "../Components/EditFilm";


const FilmOverview= () => {
    const[Films,setFilms]=useState([])

    useEffect (()=>{
        console.log(Films)
        fetch("http://localhost:8080/films/")
            .then(res=>res.json())
            .then((result)=>{
                setFilms(result);
            })
    },[])

    const Delete=(id)=> {
        fetch("http://localhost:8080/films/" + id + "/delete", {
            method: "DELETE",
          }).then(()=>{
            console.log("film deleted")
        })
    }


    return (

        <Container >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
                {Films.map((film)=>(
                        <Grid item xs={3}>
                            <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:";left"}} key={film.id}>

                                    <div>{film.name} </div> <br/>
                                    <Button style={{ margin:'5px'}} variant="contained"><Link to={`../film/${film.id}`}> view comments </Link></Button><br/>
                                    <EditFilm filmData={film}/><br/>
                                    <Button onClick={Delete(film.id)} style={{ margin:'5px'}} variant="contained" color="error"> delete film </Button><br/>
                            </Paper>
                        </Grid>
                    )
                )}
            </Grid>
        </Container>

    );

}

export default FilmOverview;