import React, { Fragment, useContext, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import DataContext from "../../context/contextDialog";
import { FormControlLabel, Switch } from "@mui/material";

const CustomDialog = () => {
    const { open, openHandler: handleClose, healthStatus, healthStatusHandler } = useContext(DataContext);

    useEffect(() => {
        console.log('Health status: ', healthStatus);
    }, [healthStatus])
    return <Fragment>
        <Dialog open={open} onClose={handleClose}>
            <FormControlLabel
                sx={{ mt: 1 }}
                control={
                    <Switch checked={healthStatus} onChange={(e) => {
                        healthStatusHandler(e.target.checked)
                    }} />
                }
                label="Health Status"
            />
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog></Fragment>;
};

export default CustomDialog;
