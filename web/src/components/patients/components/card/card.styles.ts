import { makeStyles, Theme } from '@material-ui/core/styles';

// background: '#4f9cdb'

const useStyles = makeStyles((theme: Theme) => ({
  patientCard: {

  },
  root: {
    //background: fade(theme.palette.common.white, 0.15),
    background: '#73a3c9',
    color: '#fff',
    minHeight: 200
  },
  cardTypo: {
    fontFamily: "'Montserrat', sans-serif",
  },
  cardAction: {
    fontFamily: "'Montserrat', sans-serif",
    color: '#73a3c9',
    background: '#fff',
    fontWeight: 600,
    marginTop: 25
  }
}))

export default useStyles;