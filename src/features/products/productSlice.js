import { createSlice } from '@reduxjs/toolkit';
import { customProducts } from '../../data/productsData'; // Local custom data import

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: customProducts, // Fake API ki jagah local data array
    selectedCategory: 'All',
  },
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = productSlice.actions;
export default productSlice.reducer;