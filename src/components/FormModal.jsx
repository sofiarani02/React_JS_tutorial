import * as React from 'react';
import { Backdrop, Box, Button, Fade, FormControl, InputLabel, Input, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const FormModal = ({ open, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access form values via state or useRef
    onClose(); // Close the modal after submission
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" gutterBottom>
            Registration Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input id="name" type="text" required />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" type="email" required />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="phone">Phone</InputLabel>
              <Input id="phone" type="tel" required />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="collegeName">College Name</InputLabel>
              <Input id="collegeName" type="text" required />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="degree">Degree</InputLabel>
              <Input id="degree" type="text" required />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="specialization">Specialization</InputLabel>
              <Input id="specialization" type="text" required />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="passedOutYear">Passed Out Year</InputLabel>
              <Input id="passedOutYear" type="number" required />
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default FormModal;
