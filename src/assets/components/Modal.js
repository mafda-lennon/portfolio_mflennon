import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import './Modal.css';

export default function Modal(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="modal-container">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{props.projectName}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.info}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <a href={props.btnCode} target="_blank" rel="noopener noreferrer"><button className="dialog-btn1" >Ver Código</button></a>
          <a href={props.btnDemo} target="_blank" rel="noopener noreferrer"><button className="dialog-btn2" >Ver Demo</button></a>
        </DialogActions>
      </Dialog>
    </div>
  );
}
