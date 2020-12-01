import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  modalParent: {
    marginBottom: '5em'
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    margin: 20,
    width: '100%'
  },
  modalCloseButton: {
    color: '#fff', 
    fontWeight: 600, 
    fontSize: 20, 
    fontFamily: "'Montserrat', sans-serif",
    position: 'absolute',
    right: 0,
  },
  modalTitle: {
    fontFamily: "'Montserrat', sans-serif",
    color: '#fff',
    fontWeight: 600,
    margin: 30,
  },
  avatar: {
    height: 300,
    width: 300
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
    maxHeight: 100
  },
  overviewTitle: {
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 28,
    fontWeight: 600,
    margin: 10
  },
  overviewCards: {
    maxHeight: 330,
    height: 330,
    marginBottom: 15,
    overflow: 'auto',
    overflowX: 'hidden'
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
  },
  root: {
    maxWidth: 345,
    maxHeight: 250,
    background: '#4f9cdb',
    color: '#fff',
    margin: 10
  },
  cardChip: {
    display: 'flex',
    width: 'auto',
    margin: 10,
    marginBottom: -15
  },
  cardHeader: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: 20,
    borderBottom: '2px solid #fff',
    marginBottom: 15,
    paddingBottom: 5
  },
  cardActions: {
    fontFamily: "'Montserrat', sans-serif",
    color: '#fff'
  },
  cardFooter: {
    marginTop: 20,
    marginBottom: -20
  }
}))

export default useStyles;