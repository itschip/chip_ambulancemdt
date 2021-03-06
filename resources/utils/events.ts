export default {
  // patients
  PATIENTS_FETCH_ALL_PATIENTS: 'ambu:fetchAllPatients',
  PATIENTS_SEND_ALL_PATIENTS: 'ambu:sendAllPatients',
  PATIENTS_UPDATE_CREDENTIALS: 'ambu:updatePatientCredentials',
  PATIENTS_UPDATE_CREDENTIALS_SUCCESS: 'ambu:updatePatientCredentialsSuccess',
  PATIENTS_SEARCH_PATIENTS: 'ambu:searchPatients',

  // treatements
  TREATMENTS_ADD_TREATMENT: 'ambu:newTreatmeant',
  TREATMENTS_FETCH_ALL_TREATMENTS: 'ambu:fetchAllTreatments',
  TREATMETNS_FETCH_SCOPED_TREATMENTS: 'ambu:fetchScopedTreatments',
  TREATMENTS_SEND_TREATMENTS: 'ambu:sendTreatments',
  TREATMENTS_SEND_SCOPED_TREATMENTS: 'ambu:sendScopedTreatments',
  TREATMENTS_FETCH_EMPLOYEE_TREATMENTS: 'ambu:fetchEmployeeTreatments',
  TREATMENTS_SEND_EMPLOYEE_TREATMENTS: 'ambu:sendEmployeeTreatments',
  TREATMENTS_UPDATE_TREATMENTS: 'ambu:updateTreatment',
  TREATMENTS_UPDATE_TREATMENTS_RESULT: 'ambu:updateTreatmentResult',
  TREATMENTS_ADD_TREATMENT_SUCCESS: 'ambu:newTreatmentSuccess',
  TREATMENTS_ADD_TREATMENT_FAILED: 'ambu:newTreatmentFailed',
  TREATMENTS_DELETE_TREATMENT: 'ambu:deleteTreatment',
  TREATMENTS_DELETE_TREATMENT_SUCCESS: 'ambu:deleteTreatmentSuccess',
  TREATMENTS_DELETE_TREATMENT_RESULT: 'ambu:deleteTreatmentResult',

  // source
  FETCH_CREDENTIALS: 'ambu:fetchCredentials',
  SEND_CREDENTIALS: 'ambu:sendCredentials',

  // job checking 
  FETCH_AMBULANCEPLAYERS: 'ambu:fetchAmbulancePlayers',
  SEND_AMBULANCEPLAYERS: 'ambu:sendAmbulancePlayers',
  EMPLOYEES_FETCH_EMPLOYEES: 'ambu:fetchAmbulanceEmployees',
  EMPLOYEES_SEND_EMPLOYEES: 'ambu:sendAmbulanceEmployees',
  EMPLOYEES_FETCH_JOBLABEL: 'ambu:fetchJobLabel',
  EMPLOYEES_SEND_JOBLABEL: 'ambu:sendJobLabel',
}