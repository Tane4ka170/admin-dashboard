import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createProduct,
  createSupplier,
  fetchCustomers,
  fetchDashboard,
  fetchOrders,
  fetchProducts,
  fetchSuppliers,
  modifyProduct,
  modifySupplier,
  removeProduct,
} from './pharmacyOperations';

const pending = state => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

export const pharmacySlice = createSlice({
  name: 'pharmacy',
  initialState: {
    dashboard: [],
    orders: [],
    suppliers: [],
    products: [],
    customers: [],
    page: 1,
    limit: 5,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDashboard.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.dashboard = payload;
      })

      .addCase(fetchOrders.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.orders = payload;
      })

      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload;
      })

      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products.total = state.products.total + 1;
        state.products.result = [...state.products.result, payload];
      })

      .addCase(modifyProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        const index = state.products.result.findIndex(
          item => item._id === payload._id
        );
        if (index !== -1) {
          state.products.result[index] = payload;
        }
      })

      .addCase(removeProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = state.products.result.filter(
          item => item.id !== payload
        );
      })

      .addCase(fetchSuppliers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.suppliers = payload;
      })

      .addCase(createSupplier.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.suppliers.result = [...state.suppliers.result, payload];
      })

      .addCase(modifySupplier.fulfilled, (state, { payload }) => {
        state.loading = false;
        const index = state.suppliers.result.findIndex(
          person => person._id === payload._id
        );
        if (index !== -1) {
          state.suppliers.result[index] = payload;
        }
      })

      .addCase(fetchCustomers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.customers = payload;
      })

      .addMatcher(
        isAnyOf(
          fetchDashboard.pending,
          fetchOrders.pending,
          fetchProducts.pending,
          createProduct.pending,
          modifyProduct.pending,
          removeProduct.pending,
          fetchSuppliers.pending,
          createSupplier.pending,
          modifySupplier.pending,
          fetchCustomers.pending
        ),
        pending
      )
      .addMatcher(
        isAnyOf(
          fetchDashboard.rejected,
          fetchOrders.rejected,
          fetchProducts.rejected,
          createProduct.rejected,
          modifyProduct.rejected,
          removeProduct.rejected,
          fetchSuppliers.rejected,
          createSupplier.rejected,
          modifySupplier.rejected,
          fetchCustomers.rejected
        ),
        rejected
      );
  },
});

export const pharmacyReducer = pharmacySlice.reducer;
