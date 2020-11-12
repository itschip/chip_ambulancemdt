import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 345,
    maxHeight: 250,
    background: '#4f9cdb',
    color: '#fff',
    margin: 10
  },
  cardChip: {
    display: 'flex',
    width: 'auto',
    margin: 10,
    marginBottom: -15
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
  }
}))

export default useStyles;