import axios from '../../axios';
import { applicatioActions } from './MainPageSlice';

export function getAllApplications(dispatch) {
  return axios({
    url: `https://retoolapi.dev/71NNjB/applications`,
    method: 'get',
  }).then((res) => {
    // //  console.log(res);
    if (res.status >= 200 && res.status < 300) {
      dispatch(applicatioActions.getAllApplications(res.data));
      dispatch(applicatioActions.setSelectedApplication(res.data[0].id));
    }
    return res;
  });
}

export function getAllMemoryUtilization(dispatch) {
  return axios({
    url: `https://retoolapi.dev/ybFVVH/memoryutilization`,
    method: 'get',
  }).then((res) => {
    //  console.log(res);
    if (res.status >= 200 && res.status < 300) {
      dispatch(applicatioActions.getAllMemoryUtilization(res.data));
    }
    return res;
  });
}

export function getAllCpuUtilization(dispatch) {
  return axios({
    url: `https://retoolapi.dev/Ymxfa2/cpuutilization`,
    method: 'get',
  }).then((res) => {
    //  console.log(res);
    if (res.status >= 200 && res.status < 300) {
      dispatch(applicatioActions.getAllCpuUtilization(res.data));
    }
    return res;
  });
}

export function getAllEventHistory(dispatch) {
  return axios({
    url: `https://retoolapi.dev/TYjDIe/eventhistory`,
    method: 'get',
  }).then((res) => {
    //  console.log(res);
    if (res.status >= 200 && res.status < 300) {
      dispatch(applicatioActions.getAllEventHistory(res.data));
    }
    return res;
  });
}
