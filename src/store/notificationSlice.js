import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: null,
};

const notificationSlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    sendCartData: (state, actions) => {
      const notifyActions = actions.payload;
      state.notifications = {
        message: notifyActions.message,
        sign: notifyActions.sign,
        open: notifyActions.open,
      };
    },
  },
});

export const { sendCartData } = notificationSlice.actions;

export default notificationSlice.reducer;
