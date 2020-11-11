import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    margin: 20,
    width: '100%'
  },
  modalTitle: {
    fontFamily: "'Montserrat', sans-serif",
    color: '#fff',
    fontWeight: 600,
    margin: 30,
  },
  avatar: {
    height: 200,
    width: 200
  },
  patientHeaderInfo: {
    borderLeft: '2px solid #fff',
    paddingLeft: 20,
    margin: 10,
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
  },
  editPatientBtn: {
    color: '#fff',
    background: '#4f9cdb',
    margin: 30
  },
  overviewContent: {

  },
  backgroundModal: {
    background: "black",
    opacity: "0.6",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 5,
  },
  credsInput: {
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500
  },
  credsInputBlood: {
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    textAlign: 'center'
  },
  inputCreds: {
    margin: 10,
  },
  closeCredModal: {
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
  },
  saveButton: {
    background: '#4f9cdb',
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    height: 40
  },
  credsModalContainer: {
    marginBottom: 20, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
}))

export default useStyles;