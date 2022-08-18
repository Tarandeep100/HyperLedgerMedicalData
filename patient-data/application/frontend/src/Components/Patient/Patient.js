import React, { useState } from 'react';
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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { DataGrid } from '@mui/x-data-grid';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { fetchReadDoctor, fetchReadPatient } from '../../api/Common';

// import { DataGrid } from '@mui/x-data-grid';
const columns = [
    { field: 'ID', headerName: 'ID', width: 90 },
    {
        field: 'Name',
        headerName: 'Doctor name',
        width: 150,
        editable: false,
    },
    {
        field: 'Speciality',
        headerName: 'Speciality',
        width: 110,
        editable: false,
    },
    {
        field: 'Dob',
        headerName: 'DOB',
        width: 110,
        editable: false,
    },
    {
        field: 'docType',
        headerName: 'Type',
        width: 110,
        editable: false,
    },
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
    var [selectDoc, setSelectDoc] = useState('');
    // var [patientPass, setPatientPass] = useState('');
    const [open, setOpen] = React.useState(false);

    const DoctorName = ['this', 'example', 'isnt', 'funny'];


    // useEffect(() => {
    //     var res;
    //     async function fetchData() {
    //         res = await fetchReadDoctor("D1");

    //         console.log(res);

    //         var result = [];

    //         for (var i in res)
    //             result.push([i, res[i]]);
    //         setDocList(result);
    //     }
    //     fetchData();
    // },[docList]);

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

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
      };

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
            const docJson = [{
                ID: "D1",
                Speciality: "Skin",
                Name: "Dave",
                Dob: "15/10/1980",
                docType: "Doctor"
            }]
            var result = [];

            for (var i in docJson) {
                // console.log(i, docJson[i]);
                result.push([i, docJson[i]]);
            }
            console.log(JSON.parse(JSON.stringify(docJson)));
            // console.log(result);
            // console.log(result['ID']);
            setDocList(JSON.parse(JSON.stringify(docJson)));
            console.log(docList[0].ID);
            await setTimeout(2000);

            // await setTimeout(2000);
            // setDocList(JSON.parse(res));
            // setPatientData(await fetchReadPatient(1));
            // await setTimeout(2000);
            // console.log(docList);
            // // console.log(patientData);
            // console.log(JSON.parse(docList));
            // console.log(patientData);
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

    const handlePurge = () => {
        // console.log("purge");
        // console.log(this.state.deletedRows);
        //TO-DO delete data from backend
        // var newEventData= this.state.EventData.filter(
        //     (r) => this.state.deletedRows.filter((sr) => sr == r._id).length < 1
        //   );
        // console.log(newEventData);
        setOpen(false);
        alert(`Doctor ${selectDoc} can now view your data`);
    }

    const handleRowSelection = (e) => {
        // console.log("selection");
        // console.log(this.state.EventData);
        console.log("e=>", e);
        // console.log(this.state.EventData.filter((r) => r._id == e));
        setSelectDoc(e);
    };

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
                    {/* <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID </TableCell>
                                    <TableCell align="right">Speciality</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">DOB</TableCell>
                                    <TableCell align="right">DocType</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {docList.map((row) => (
                                    <TableRow
                                        key={row.ID}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.ID}
                                        </TableCell>
                                        <TableCell align="right">{row.Speciality}</TableCell>
                                        <TableCell align="right">{row.Name}</TableCell>
                                        <TableCell align="right">{row.Dob}</TableCell>
                                        <TableCell align="right">{row.docType}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer> */}
                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            getRowId={(row) => row.ID}
                            rows={docList}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick


                            onSelectionModelChange={handleRowSelection}
                        />
                        <Button variant="outlined" onClick={handleClickOpen}>
                            Allow Access
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