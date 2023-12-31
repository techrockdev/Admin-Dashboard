import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { ref, remove } from "firebase/database";
import { db } from "../../../config/firebase";
import { Button } from "../Button/Button";
import { Bet } from "../types/Bet";
type PropType = {
  data: Bet;
  onOpen: boolean;
  handleClose: () => void;
};

export const DeleteDialog = ({ onOpen, handleClose, data }: PropType) => {
  const handleDelete = (id: string) => {
    remove(ref(db, `/predictbet/${id}`));
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={onOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"DELETE"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button
            className="bg-red-400"
            onClick={() => {
              const id = data.id;
              handleDelete(id as string);
            }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
