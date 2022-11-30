
import * as React from 'react';
import {Container, Button} from "@mui/material";
import {useState, memo } from "react";

const CommentView = (props) =>{

    const Delete=(id)=> {
        fetch("http://localhost:8080/comments/" + id + "/delete", {
            method: "DELETE",
        }).then(()=>{
            console.log("comment deleted")
        })
    }

    if(props.comments.length === 0){
        return(
            <Container>

                <h1>There are no comments on this film</h1>

            </Container>
        );
    }

    return(
        <Container>
            <ul>

                {props.comments?.map((comment)=>(
                    <li key={comment.id}>
                        {comment.text}
                        <Button onClick={() => Delete(comment.id)} style={{ margin:'5px'}} variant="contained" color="error"> delete comment </Button><br/>
                    </li>
                ))}
                <div >

                </div>
            </ul>

        </Container>
    );

}

export default memo(CommentView) ;