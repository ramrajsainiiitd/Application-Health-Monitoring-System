// Axios instance
import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(
  (request) => {
    // we can global var to start loader
    window.loading = true;
    // we can use redux state
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // loader hide
    // we can global var to start loader
    window.loading = false;
    // we can use redux state to set loading state

    return response;
  },
  (error) => {
    // loader hide
    window.loading = false;
    // we can redirect user to error page
    // by using global state
    window.showerror = true;
    // we use redux state or router to display error page
    return Promise.reject(error);
  }
);

export default axios;
