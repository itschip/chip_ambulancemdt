import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    background: '#4f9cdb',
    color: '#fff',
    margin: 10,
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
  },
  rootGrid: {
    display: 'flex',
    marginTop: 20
  }
});

export default useStyles;

