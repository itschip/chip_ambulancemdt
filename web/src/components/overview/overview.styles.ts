import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
  },
  treatmentTitle: {
    color: '#73a3c9',
    fontFamily: "'Montserrat', sans-serif",
    margin: 10,
    marginTop: 15,
    fontSize: 30,
  }
}))

export default useStyles;