import React,{useState} from 'react'
import Sidebar from '../Slidebar/sidebar'
import department from './catData.js'
import { useNavigate } from 'react-router-dom';

import './product.css'

import { InputLabel, MenuItem,  Select, TextField, FormControl } from '@mui/material';
import Model1 from './models';
import Model2 from './model2';

const Product = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);



    const navigate = useNavigate();
    function handleClick() {
        navigate("/history");
      }

    return (
        <>
            <Sidebar />
            <div className="product-container">
                <div className="user" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}> 

                    <h1 className="title" style={{display:'inline-block'}}>Stock Management</h1>
                    <div className="btns" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <h5 className="" style={{
                            fontSize: '1.7rem',
                            padding: ' 1.5rem 3.5rem',
                            cursor: 'pointer',
                            margin: '4rem',
                            backgroundColor: '#3C3D47',
                            color: 'white',
                            borderRadius: '1rem',
                        }}
                            onClick={()=>{handleClick()}}>
                            View Catagory
                            
                        </h5>
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
                            Add Catagory
                            
                        </h5>
                        <h5 className="" style={{
                            fontSize: '1.7rem',
                            padding: ' 1.5rem 3.5rem',
                            cursor: 'pointer',
                            margin: '4rem',
                            backgroundColor: '#3C3D47',
                            color: 'white',
                            borderRadius: '1rem',
                        }}
                            onClick={handleOpen2}>
                            Add product
                        </h5>
                    </div>
                </div>
                <Model1 openModal={open} setOpenModal={setOpen} />
                <Model2 openModal={open2} setOpenModal={setOpen2}/>
                <div style={{display:'flex',flexDirection:'row',marginLeft:'4rem',padding:'0'}}>
                    <TextField id="outlined-basic" label="Search" variant="outlined" style={{
                        width: '30rem',
                        height: '4rem',
                        margin: '0.5rem 1.5rem',
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
                            <MenuItem value={department[0]}>All</MenuItem>
                            <MenuItem value={department[1]}>Kitchen</MenuItem>
                            <MenuItem value={department[2]}>Bar</MenuItem>
                            <MenuItem value={department[3]}>Waiter</MenuItem>
                            <MenuItem value={department[4]}>Manager</MenuItem>
                            <MenuItem value={department[5]}>Cashier</MenuItem>
                            <MenuItem value={department[6]}>Others</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </>
    )
}

export default Product;