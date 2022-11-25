import * as React from 'react';
import {Container} from "@mui/material";
import { useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CommentView from "../Components/Comments";


export default function Film() {
    const { id } = useParams();
    const[film,setFilm]=useState( '')
    const[Comments, setComments]=useState([])


    useEffect(()=>{
        console.log(film)
        fetch("http://localhost:8080/films/" + id)
            .then(res=>res.json())
            .then((result)=>{
                setFilm(result);
                setComments(result.comments)
            })
    },[])


    return (

        <Container>

            <CommentView  comments={Comments}/>

        </Container>

    );
}
