import {
    Box,
    TextField,
    Modal,
    Typography,
  } from "@mui/material";
  import React from 'react';
  
  const Model2 = ({openModal, setOpenModal}) => {
  // const [cat, setCat] = useState(openCat);
  const closeProduct= () => setOpenModal(false);
    return (
      <Modal
        open={openModal}
        onClose={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h2">
            Add Product
          </Typography>
          <Typography
            id="modal-modal-description"
            style={{
              marginTop: "10%",
              marginBottom: "12rem",
              fontSize: "1.5rem",
            }}
          >
            <TextField
              id="filled-name-input"
              label="Product Name"
              type="name"
              variant="filled"
            />
            <TextField
              id="filled-name-input"
              label="Product Id"
              type="name"
              variant="filled"
            />
            <TextField
              id="filled-name-input"
              label="Quentity"
              type="number"
              variant="filled"
            />
            <TextField
              id="filled-name-input"
              label="Price"
              type="name"
              variant="filled"
            />
            <TextField
              id="filled-name-input"
              label="Catagory"
              type="name"
              variant="filled"
            />
            
          </Typography>
          <Typography id="modal-modal-submit">
            <button
              className="btn btn-primary"
              style={{
                fontSize: "1.7rem",
                padding: " 1rem 15rem",
                backgroundColor: "#3C3D47",
                color: "white",
                borderRadius: "1rem",
              }}
              onClick={closeProduct}
            >
              Add Product
            </button>
          </Typography>
        </Box>
      </Modal>
    );
  };
  export default Model2;
  