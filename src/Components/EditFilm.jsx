import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const EditFilm = (props) => {
    const [open, setOpen] = React.useState(false);


    const [id] = React.useState(props.filmData.id)
    const [name, setName] = React.useState(props.filmData.name)
    const [description, setDesc] = React.useState(props.filmData.description)
    const [length, setLength] = React.useState(props.filmData.length)
    const [date, setDate] = React.useState(dayjs(props.filmData.releaseDate));
    const [ageRestriction, setAgeRestriction] = React.useState(props.filmData.ageRestriction)


    const handleClick=(e)=> {
        e.preventDefault()
        const film = {id, name, description, length, ageRestriction}
        console.log(film)
        fetch("http://localhost:8080/films/update",{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(film)}
        ).then(()=>{
            console.log("film edited")
            handleClose()
        })
    }



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                edit film
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>edit film</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="name"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={props.filmData.name}
                        onChange={(e)=>setName(e.target.value)}
                    />


                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="description"
                        type="text"
                        defaultValue={props.filmData.description}
                        fullWidth
                        multiline
                        maxRows={4}
                        variant="standard"
                        onChange={(e)=>setDesc(e.target.value)}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="length"
                        label="length"
                        type="number"
                        fullWidth
                        variant="standard"
                        defaultValue={props.filmData.length}
                        onChange={(e)=>setLength(e.target.value)}
                    />


                    {/*<DesktopDatePicker
                        label="For desktop"
                        value={date}

                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />*/}

                    <TextField
                        autoFocus
                        margin="dense"
                        id="ageRestriction"
                        label="ageRestriction"
                        type="number"
                        fullWidth
                        variant="standard"
                        defaultValue={props.filmData.ageRestriction}
                        onChange={(e)=>setAgeRestriction(e.target.value)}
                    />


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClick}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditFilm;