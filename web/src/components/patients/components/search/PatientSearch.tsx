import React from 'react'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useFilteredPatients } from '../../hooks/useFilteredPatients';

import useStyles from './search.styles';
import Nui from "../../../../nui-events/utils/Nui";

const PatientSearch = () => {
  const classes = useStyles();
  const { filterPatient, setFilterPatient } = useFilteredPatients();

  const handlePatientSearch = (event) => {
    if (event.key === "Enter") {
      Nui.send('ambu:searchPatients', {
        filterPatient
      })
    }
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase

        placeholder="Søk etter pasient"
        value={filterPatient}
        onChange={e => setFilterPatient(e.target.value)}
        onKeyPress={handlePatientSearch}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}

export default PatientSearch;
