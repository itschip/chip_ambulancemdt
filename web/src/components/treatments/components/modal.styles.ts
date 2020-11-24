import { makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
  modalCloseButton: {
    position: 'absolute',
    right: 0,
    color: '#fff'
  },
  inputRootLeft: {
    marginBottom: 20
  },
  inputInput: {
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    fontSize: 20
  },
  inputDoctor: {  
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    fontSize: 20
  },
  inputArea: {
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    width: 400
  },
  inputRootRight: {

  },
  modalHeader: {
    marginTop: 20,
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    textAlign: 'center'
  },
  modalAction: {
    background: '#fff',
    color: '#4f9cdb',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    marginTop: 20,
    margin: 4
  },
  modalActionDelete: {
    background: '#ef5350',
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    marginTop: 20,
    margin: 4
  }
}))

export default useStyles;