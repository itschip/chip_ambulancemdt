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
  overviewContent: {

  }
}))

export default useStyles;