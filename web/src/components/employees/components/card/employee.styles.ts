import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#73a3c9',
    color: '#fff',
    width: 250,
    height: 150,
    margin: 40, 
  },
  cardTypo: {
    fontFamily: "'Montserrat', sans-serif",
  },
  cardAction: {
    fontFamily: "'Montserrat', sans-serif",
    color: '#4f9cdb',
    background: '#fff',
    fontWeight: 600
  }
}))

export default useStyles;
