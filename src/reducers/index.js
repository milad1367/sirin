import { combineReducers } from 'redux'
import steps from './steps'
import StepsPast from './StepsPast';
import Gyroscope from './Gyroscope';
import Gps from './Gps';
import Error from './Error';
import StartPos from './StartPos';
import EndPos from './EndPos';
import Session from './Session';
import StepsChecker from './StepsChecker';
import DatePicker from './DatePicker';
import FinalSteps from './FinalSteps';
const todoApp = combineReducers({
  steps,
  StepsPast,
  Gyroscope,
  Gps,
  Error,
  StartPos,
  EndPos,
  Session,
  StepsChecker,
  DatePicker,
  FinalSteps,
})

export default todoApp