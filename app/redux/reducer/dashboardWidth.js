import { createSlice } from '@reduxjs/toolkit';

export const dashboardWidthSlice = createSlice({
    name: 'dashboardWidth',
    initialState: {
        dashboardWidth: "260px",
        collapse: false,
    },
    reducers: {
        setDashboardWidth(state, action) {
            const width = action.payload;
            return { ...state, dashboardWidth: width, collapse: true };
        },
        resetDashboardWidth(state, action) {
            return { ...state, dashboardWidth: "260px", collapse: false };
        },
    },
});



export const { setDashboardWidth, resetDashboardWidth } = dashboardWidthSlice.actions;

export default dashboardWidthSlice.reducer;
