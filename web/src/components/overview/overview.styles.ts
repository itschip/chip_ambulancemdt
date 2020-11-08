import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  boxWrapper: {
    margin: 25
  },
  boxTitle: {
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 28,
    marginLeft: 10,
    fontWeight: 600
  },
  firstGrid: {
    display: 'flex'
  }
}))

export default useStyles;