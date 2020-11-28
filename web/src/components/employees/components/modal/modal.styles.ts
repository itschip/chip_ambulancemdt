import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
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
  employeeName: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: 30,
    color: '#fff',
    marginLeft: 20
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  licenseChip: {
    marginLeft: 10,
    marginTop: 5,
    background: '#4f9cdb',
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
  },
  jobGrade: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    fontSize: 20,
    color: '#fff',
  }
}))

export default useStyles;