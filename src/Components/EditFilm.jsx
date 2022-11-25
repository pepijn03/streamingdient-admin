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
    const [date, setDate] = React.useState(dayjs(props.filmData.releaseDate));



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
                    />






                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditFilm;