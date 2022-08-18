import React, { useEffect, useState } from 'react';
import { generateRSAKey, publicKeyString } from 'cryptico';
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
import { fetchReadDoctor, fetchReadPatient } from '../../api/Common';

import { DataGrid } from '@mui/x-data-grid';
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Doctor name',
        width: 150,
        editable: false,
    },
    {
        field: 'speciality',
        headerName: 'Speciality',
        width: 110,
        editable: false,
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


function Patient() {


    var [pid, setPid] = useState('');
    var [pName, setPname] = useState('');
    var [password, setPassword] = useState('');
    var [pDob, setDOB] = useState('');
    var [pDoctor, setDoctor] = useState('');
    var [pAppointmentDate, setAppointmentdate] = useState('');
    // var [pAppointment, setAppointment] = useState('');
    // var [dName, setDname]  = useState('');
    var [docList, setDocList] = useState('');
    var [patientData, setPatientData] = useState('');
    var [currentUser, setCurrentUser] = useState('');

    const DoctorName = ['this', 'example', 'isnt', 'funny'];


    useEffect(() => {
        console.log(await fetchReadDoctor("D1"));
        console.log(await fetchReadPatient(1));
      }, []);

    // var generateKeys = function () {
    //     // return (Date.now().toString(36) + Math.random().toString(36).substring(2));    
    //     // RSA.generateKeys(4096).then(keys => {

    //     // })
    //     // return pubkey;
    //     // RSAKeychain.generate(password).then(keys => {
    //     //     console.log(keys);
    //     // })
    //     //return PublicKeyString;

    // }

    const handleFirstTimeSubmit = async (event) => {
        event.preventDefault();
        const Bits = 1024;
        if (password.length >= 0) {
            const RSAkey = generateRSAKey(password, Bits);

            const PublicKeyString = publicKeyString(RSAkey);

            alert('Patient id submitted ' + pid +
                ' DOB : ' + pDob + ' Name: ' + pName +
                ' keys generated: ' + PublicKeyString);
            console.log(PublicKeyString);
            console.log(await fetchReadPatient(1));
            console.log(await fetchReadDoctor("D1"));
        }

    };

    const handleIDChange = (event) => {
        setPid(event.target.value);
    }

    const handlePnameChange = (event) => {
        setPname(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleDOBChange = (event) => {
        setDOB(event.target.value);
    }
    const handleAppointmentSubmit = (event) => {
        // setAppointment(event.target.value);
        event.preventDefault();
        alert('appointment submitted');
        // console.log(fetchReadDoctor(1));
    }

    const handleDoctorChange = (event) => {
        setDoctor(event.target.value);
    }

    const getCurrentUser = (event) => {
        setCurrentUser(event.target.value);
    }
    const handleAppointmentDate = (event) => {
        setAppointmentdate(event.target.value);
    }

    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>First Time Login</Typography>
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
                        onSubmit={handleFirstTimeSubmit}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                required
                                id="pid"
                                label="UserID"
                                variant="standard"
                                value={pid}
                                onChange={handleIDChange}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="pName"
                                label="Name"
                                variant="standard"
                                value={pName}
                                onChange={handlePnameChange}
                            />
                        </div>
                        <div>
                            <label>
                                DOB:
                                <input type="date" value={pDob} onChange={handleDOBChange} />
                            </label>
                        </div>
                        <div>
                            <TextField
                                id="standard-password-input"
                                label="Create Password"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                                value={password}
                                onChange={handlePasswordChange}
                            />
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
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Allow Access</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                            experimentalFeatures={{ newEditingApi: true }}
                        />
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Revoke Access</Typography>
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
                    <Typography>Appointment Create</Typography>
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
                        onSubmit={handleAppointmentSubmit}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                required
                                id="currentUser"
                                label="UserID"
                                variant="standard"
                                value={currentUser}
                                onChange={getCurrentUser}
                            />
                        </div>
                        <InputLabel variant="standard" htmlFor="doctor-list">
                            Doctor:
                            <Select
                                labelId="doctors list"
                                id="pDoctor"
                                value={pDoctor}
                                label="doctor list"
                                onChange={handleDoctorChange}

                            >
                                {DoctorName.map(((name) =>
                                    <MenuItem key={name} value={name}>{name}</MenuItem>
                                ))}
                            </Select>

                        </InputLabel>
                        {/* <select id="doctor-list" name="doctorlist" value={pDoctor} onChange={handleDoctorChange} /> */}

                        <div>
                            <label>
                                Preferred Date and Time:
                                <input type="datetime-local" value={pAppointmentDate} onChange={handleAppointmentDate}></input>
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
        </>);
}

export default Patient;