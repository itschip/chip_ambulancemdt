import React, { useEffect, useState} from 'react'
import { createStyles, makeStyles, Theme, } from '@material-ui/core/styles';
import { Snackbar } from '@material-ui/core';
import { useNotificaton } from './hooks/useNotification';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    close: {
      padding: theme.spacing(0.5)
    },
    title: {
      color: '#fff',
      fontFamily: "'Montserrat', sans-serif",
    },
  })
)

export const Notification = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [title, setTitle] = useState(null);
  const [ severity, setSeverity ] = useState<any>("");
  const { notification, setNotificaton } = useNotificaton();
  
  const handleClose = () => {
    setOpen(false)
    setNotificaton(null)
  }

  useEffect(() => {
    if (notification === 'treatmentAddedSuccessful') {
      setOpen(true);
      setMessage('Behandling ble lagret!')
      setTitle('Behandling')
      setSeverity('success')
      console.log(message)
    } else if (notification === 'treatmentAddedFailed') {
      setOpen(true);
      setMessage('Behandlingen ble ikke lagret!')
      setTitle('Behandling')
      setSeverity('error')
    } else if (notification === 'treatmentUpdatedSuccessful') {
      setOpen(true);
      setMessage('Behandling ble oppdatert!')
      setTitle('Behandling')
      setSeverity('success')
    } else if (notification === 'treatmentUpdatedFailed') {
      setOpen(true);
      setMessage('Behandlingen ble ikke oppdatert!')
      setTitle('Behandling')
      setSeverity('error')
    } else if (notification === 'treatmentDeletedSuccessful') {
      setOpen(true);
      setMessage('Behandling ble slettet!')
      setTitle('Behandling')
      setSeverity('success')
    } else if (notification === 'treatmentDeletedFailed') {
      setOpen(true);
      setMessage('Behandlingen ble ikke slettet!')
      setTitle('Behandling')
      setSeverity('error')
    }
  }, [notification])

  return (
    <div style={{ zIndex: 10}}>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        style={{ position: 'relative', bottom: 0 }}
      >
        <Alert onClose={handleClose} severity={severity} variant='filled'>
          <AlertTitle className={classes.title}>{title}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}
