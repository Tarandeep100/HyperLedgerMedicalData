import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { DataGrid } from '@mui/x-data-grid';

function Doctor() {

    var [dAppointmentlist, setAppointmentlist] = useState('');
    var [dPreferredappointment, setPreferredAppointment] = useState('');
    var [dAcceptAppointment, setAppointmentTime1] = useState('');
    var [dRejectAppointment, setAppointmentTime2] = useState('');

    const PatienName = ['Tarandeep'];

    var [docList, setDocList] = useState('');
    var [patientData, setPatientData] = useState('');
    var [currentUser, setCurrentUser] = useState('');
    var [selectDoc, setSelectDoc] = useState('');
    // var [patientPass, setPatientPass] = useState('');
    const [open, setOpen] = React.useState(false);

    // var generateKeys = function(){
    //     return (Date.now().toString(36) + Math.random().toString(36).substring(2));    
    // }

    /**
     * 
     * {
  "BloodGroup": "b+",
  "EyeColor": "brown",
  "ID": "1",
  "Name": "Tarandeep",
  "docType": "patient"
}
     */
    var patientData =
        JSON.stringify({
            "BloodGroup": "b+",
            "EyeColor": "brown",
            "ID": "1",
            "Name": "Tarandeep",
            "docType": "patient"
        });

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handlePurge = () => {
        // console.log("purge");
        // console.log(this.state.deletedRows);
        //TO-DO delete data from backend
        // var newEventData= this.state.EventData.filter(
        //     (r) => this.state.deletedRows.filter((sr) => sr == r._id).length < 1
        //   );
        // console.log(newEventData);
        setOpen(false);
        alert(`Patient Data: \n ${patientData}`);
    }


    const handleAppointmentConfirmationSubmit = (event) => {
        //setAppointment(event.target.value);
        event.preventDefault();
    }

    const handleAppointmentList = (event) => {
        setAppointmentlist(event.target.value);
    }
    const handlePreferredAppointment = (event) => {
        setPreferredAppointment(event.target.value);
    }

    const handleAppointmentTime1 = (event) => {
        setAppointmentTime1(event.target.value);
    }

    const handleAppointmentTime2 = (event) => {
        setAppointmentTime2(event.target.value);
    }
    //     //TO-DO verify if the id matches name and dob and get public key from backend.
    //     alert('Patient id submitted ' + pid + ' keys generated: ' + generateKeys());
    // };

    // const handleIDChange = (event) =>{
    //     setPid(event.target.value);
    // }

    // const handlePnameChange = (event) =>{
    //     setPname(event.target.value);
    // }

    // const handlePasswordChange = (event) =>{
    //     setPassword(event.target.value);
    // }

    // var [pid, setPid]  = useState('');
    // var [pName, setPname]  = useState('');
    // var [password, setPassword]  = useState('');
    // // var [dName, setDname]  = useState('');

    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Get Patient</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <InputLabel variant="standard" htmlFor="patient-list">
                        Patient:
                        <Select
                            label="patient list"
                        // onChange={handleDoctorChange}

                        >
                            {PatienName.map(((name) =>
                                <MenuItem key={name} value={name}>{name}</MenuItem>
                            ))}
                        </Select>


                    </InputLabel>
                    <Button variant="outlined" onClick={handleClickOpen}>
                        View Data
                    </Button>

                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Submission Form</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please enter your password
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="password"
                                label="Password"
                                type="password"
                                fullWidth
                                variant="standard"
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handlePurge}>Submit</Button>
                        </DialogActions>
                    </Dialog>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Search Patient</Typography>
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Update Data</Typography>
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Appointment Creation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        component="form"
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                        onSubmit={handleAppointmentConfirmationSubmit}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <label>
                                Appointments:
                                <select id="appointment-list" name="appointmentlist" value={dAppointmentlist} onChange={handleAppointmentList} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Preferred Date and Time:
                                <input type="datetime-local" value={dPreferredappointment} onChange={handlePreferredAppointment}></input>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="appointmentConfirmation" name="btnaccept" value={dAcceptAppointment} onChange={handleAppointmentTime1} />
                                <label for="appointmentConfirmation">Accept</label>
                                <input type="radio" id="appointmentConfirmation2" name="btnaccept2" value={dRejectAppointment} onChange={handleAppointmentTime2} />
                                <label for="appointmentConfirmation2">Reject</label>
                            </label>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>
            {/* <form onSubmit={handleAppointmentConfirmationSubmit}>
                <div>
                    <label>
                        Appointments:
                        <select id="appointment-list" name="appointmentlist" value={dAppointmentlist} onChange={handleAppointmentList} />
                    </label>
                </div>
                <div>
                    <label>
                        Preferred Date and Time:
                        <input type="datetime-local" value={dPreferredappointment} onChange={handlePreferredAppointment}></input>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" id="appointmentConfirmation" name="btnaccept" value={dAcceptAppointment} onChange={handleAppointmentTime1} />
                        <label for="appointmentConfirmation">Accept</label>
                        <input type="radio" id="appointmentConfirmation2" name="btnaccept2" value={dRejectAppointment} onChange={handleAppointmentTime2} />
                        <label for="appointmentConfirmation2">Reject</label>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="submit" value="Appointment Confirmation" />
                    </label>
                </div>



            </form> */}
            {/* <p>First Time Login</p>
            <form onSubmit={handleFirstTimeSubmit}>
                <div>
                <label>
                    Id:
                    <input type="text" value={pid} onChange={handleIDChange} />
                </label>
                </div>
                <div>
                <label>
                    Name:
                    <input type="text" value={pName} onChange={handlePnameChange} />
                </label>
                </div>
                <div>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                </div>
                <div>
                <input type="submit" value="Submit" />
                </div>
            </form> */}
        </>);
};


export default Doctor;