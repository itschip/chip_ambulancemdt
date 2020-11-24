import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
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