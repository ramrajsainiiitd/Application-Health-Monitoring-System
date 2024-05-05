import { createSlice } from '@reduxjs/toolkit';
// Slice
const applicationSlice = createSlice({
  name: 'application',
  initialState: {
    applications: [],
    selectedApplicationId: '',
    memoryUtilizations: [],
    cpuUtilizations: [],
    eventHistory: [],
  },
  reducers: {
    getAllApplications: (state, action) => {
      state.applications = action.payload;
    },
    getAllMemoryUtilization: (state, action) => {
      state.memoryUtilizations = action.payload;
    },
    getAllCpuUtilization: (state, action) => {
      state.cpuUtilizations = action.payload;
    },
    getAllEventHistory: (state, action) => {
      state.eventHistory = action.payload;
    },
    setSelectedApplication: (state, action) => {
      state.selectedApplicationId = action.payload;
    },
  },
});

export const applicatioActions = applicationSlice.actions;

export default applicationSlice.reducer;
