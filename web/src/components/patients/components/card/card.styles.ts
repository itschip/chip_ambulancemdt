import { fade, makeStyles, Theme } from '@material-ui/core/styles';

// background: '#4f9cdb'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    //background: fade(theme.palette.common.white, 0.15),
    background: '#4f9cdb',
    color: '#fff',
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