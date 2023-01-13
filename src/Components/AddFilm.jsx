import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs from 'dayjs';
import DialogContentText from '@mui/material/DialogContentText';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const AddFilm = (props) => {
    const [open, setOpen] = React.useState(false);


    const [name, setName] = React.useState('')
    const [description, setDesc] = React.useState('')
    const [length, setLength] = React.useState('')
    const [date, setDate] = React.useState(dayjs(''));
    const [ageRestriction, setAgeRestriction] = React.useState('')


    const handleClick=(e)=> {
        e.preventDefault()
        const film = {name, description, length, ageRestriction}
        console.log(film)
        fetch("http://localhost:8080/films/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(film)}
        ).then(()=>{
            console.log("film added")
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
                add film
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
                        defaultValue={''}
                        onChange={(e)=>setName(e.target.value)}
                    />


                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="description"
                        type="text"
                        defaultValue={''}
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
                        defaultValue={''}
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
                        defaultValue={''}
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

export default AddFilm;