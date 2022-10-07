import React from 'react'
import Sidebar from '../Slidebar/sidebar'
import './staffM.css'
// import { DataGrid } from '@mui/x-data-grid';
import data from './dataFile'

import { Box, InputLabel, MenuItem, FormControlLabel, Select, TextField, Modal, Typography, Checkbox, FormControl } from '@mui/material';

const StaffManagement = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Sidebar />
            <div className="staff-container">
                <div className="user" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}> 

                    <h1 className="title" style={{display:'inline-block'}}>User Details</h1>
                    <h5 className="" style={{
                        fontSize: '1.7rem',
                        padding: ' 1.5rem 3.5rem',
                        cursor: 'pointer',
                        margin: '4rem',
                        backgroundColor: '#3C3D47',
                        color: 'white',
                        borderRadius: '1rem',
                    }}
                        onClick={handleOpen}>
                        Add
                    </h5>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 500,
                            bgcolor: 'background.paper',
                            // border: '2px solid #000',
                            // boxShadow: 24,
                            p: 4,
                        }}>
                            {/* <h2 id="modal-modal-title">Add User</h2> */}
                            <Typography id="modal-modal-title"
                                variant="h2">
                                Add User
                            </Typography>
                            <Typography id="modal-modal-description"
                                style={{
                                    marginTop: '10%', marginBottom: '12rem',
                                    fontSize: '1.5rem'
                                }}>
                                <TextField
                                    id="filled-name-input"
                                    label="Staff Id"
                                    type="name"
                                    variant="filled"
                                />
                                <TextField
                                    id="filled-name-input"
                                    label="Name"
                                    type="name"
                                    variant="filled"
                                />
                                <TextField
                                    id="filled-name-input"
                                    label="Email"
                                    type="email"
                                    variant="filled"
                                />
                                <TextField
                                    id="filled-name-input"
                                    label="Contact"
                                    type="number"
                                    variant="filled"
                                />
                            </Typography>
                            <Typography id="modal-modal-description2">
                                <FormControlLabel control={<Checkbox defaultChecked />} label="KOT Subscription" />
                            </Typography>
                            <Typography id="modal-modal-submit">
                                <button className="btn btn-primary" style={{
                                    fontSize: '1.7rem',
                                    padding: ' 1rem 15rem',
                                    backgroundColor: '#3C3D47',
                                    color: 'white',
                                    borderRadius: '1rem',
                                }}
                                    onClick={handleClose}>
                                    Add User</button>
                            </Typography>
                        </Box>
                    </Modal>
                </div>

                <div style={{display:'flex',flexDirection:'row',marginLeft:'4rem',padding:'0'}}>
                    <TextField id="outlined-basic" label="Search" variant="outlined" style={{
                        width: '30rem',
                        height: '4rem',
                        margin: '0.5rem 1.5rem ' ,
                        // padding: '0.5rem 1.5rem',
                    }} /> 
                    <FormControl style={{width: "20rem"}}>
                        <InputLabel id="demo-simple-select-label">Department</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Department....."
                            
                        >
                            <MenuItem value={data.department[0]}>All</MenuItem>
                            <MenuItem value={data.department[1]}>Kitchen</MenuItem>
                            <MenuItem value={data.department[2]}>Bar</MenuItem>
                            <MenuItem value={data.department[3]}>Waiter</MenuItem>
                            <MenuItem value={data.department[4]}>Manager</MenuItem>
                            <MenuItem value={data.department[5]}>Cashier</MenuItem>
                            <MenuItem value={data.department[6]}>Others</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </>
    )
}

export default StaffManagement;