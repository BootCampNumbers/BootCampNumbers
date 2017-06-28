import Promise from 'bluebird';
import axios from 'axios-es6';
import qs from 'query-string';
import fakeData from './fakeData.json';
import OutcomeObj from '../src/dataTypes/OutcomeObj';

const api = {};
const APP_URL = 'http:127.0.0.1:1337';

api.getOutcomes = () => Promise.resolve(fakeData.outcomes.map(outcome => new OutcomeObj(outcome)));


api.getActualOutcomes = (bootCamp) => {
  let qsString = '';
  if (bootCamp.name) {
    const qsOptions = { bootcamp: bootCamp.name };
    if (bootCamp.campus) { (qsOptions.campus = bootCamp.campus); }
    qsString = `?${qs.stringify(qsOptions)}`;
  }
  return axios.get(`${APP_URL}/api/outcomes${qsString}`)
  /* eslint-disable no-console */
    .catch(err => console.log('ERROR getting outcomes: ', err));
  /* eslint-enable no-console */
};

export default api;
