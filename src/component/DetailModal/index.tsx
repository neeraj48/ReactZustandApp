import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

const DetailModal = ({getDetail, isOpen}) => {
//   console.log(getDetail);
  function handleClose() {
  }

  return (
    <div className="bg-blue-300 max-w-2xl">
      <Modal open={isOpen}>
        <Box sx={{ height: 300, width: 300 }}>
          <img src={getDetail?.image} alt={getDetail?.name} className="" />
          <Typography>{getDetail?.name}</Typography>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default DetailModal;
