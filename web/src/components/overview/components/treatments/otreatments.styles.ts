import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: 345,
    background: '#73a3c9',
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
  cardChip: {
    display: 'flex',
    width: 'auto',
    margin: 10,
    marginBottom: -15
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

