import { useRecoilState } from 'recoil';
import { IPatients } from '../../../interfaces/patients';
import { patientState } from './state';

interface IPatientHook {
  patientCreds: IPatients | null;
  setPatientCreds: any;
}

export const usePatientCreds = (): IPatientHook => {
  const [ patientCreds, setPatientCreds ] = useRecoilState(patientState.patientCredentials);
  return { patientCreds, setPatientCreds };
}