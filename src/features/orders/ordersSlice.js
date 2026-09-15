import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder(state, action) {
      state.orders.push(action.payload);
    },
    // Status update karne ke liye reducer
    updateOrderStatus(state, action) {
      const { id, newStatus } = action.payload;
      const existingOrder = state.orders.find((order) => order.id === id);
      if (existingOrder) {
        existingOrder.status = newStatus;
      }
    },
  },
});

export const { addOrder, updateOrderStatus } = ordersSlice.actions;
export default ordersSlice.reducer;