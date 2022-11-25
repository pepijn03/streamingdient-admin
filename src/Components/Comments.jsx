
import * as React from 'react';
import {Container, Button} from "@mui/material";
import {useState, memo } from "react";

const CommentView = (props) =>{


    return(
        <Container>
            <ul>
                {props.comments?.map((comment)=>(
                    <li key={comment.id}>
                        {comment.text}
                        {comment.likes}
                    </li>
                ))}
                <div >

                </div>
            </ul>

        </Container>
    );

}

export default memo(CommentView) ;