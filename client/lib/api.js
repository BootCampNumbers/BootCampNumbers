import Promise from 'bluebird';
import axios from 'axios-es6';
import qs from 'query-string';
import fakeData from './fakeData.json';
import OutcomeObj from '../src/dataTypes/OutcomeObj';

const api = {};

api.getOutcomes = (bootCamp) => {
  let qString = '';
  if (bootCamp.name) {
    const qsOptions = { bootcamp: bootCamp.name };
    if (bootCamp.campus) { (qsOptions.campus = bootCamp.campus); }
    qString = `?${qs.stringify(qsOptions)}`;
  }

  return axios.get(`/api/outcomes${qString}`)
  /* eslint-disable no-console */
    .catch(err => console.log('ERROR getting outcomes: ', err));
  /* eslint-enable no-console */
};

export default api;
