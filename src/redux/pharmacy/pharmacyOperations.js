import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://admin-dashboard-back.onrender.com/api';

export const fetchDashboard = createAsyncThunk(
  'pharmacy/dashboard',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/dashboard');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchOrders = createAsyncThunk(
  'pharmacy/allOrders',
  async ({ page = 1, limit = 5, name = '' }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/orders?page=${page}&limit=${limit}&name=${name}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  'pharmacy/allProducts',
  async ({ page = 1, limit = 5, name = '' }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/products?page=${page}&limit=${limit}&name=${name}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  'pharmacy/newProduct',
  async (productData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/products', productData);
      toast.success('Product added successfully');
      return data;
    } catch (error) {
      toast.error('The product was not added');
      return rejectWithValue(error.message);
    }
  }
);

export const modifyProduct = createAsyncThunk(
  'pharmacy/updateProduct',
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/products/${id}`, productData);
      toast.success('The product has been updated successfully');
      return data;
    } catch (error) {
      toast.error('The product update was unsuccessful');
      return rejectWithValue(error.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  'pharmacy/removeProduct',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/products/${id}`);
      toast.success('The product has been successfully deleted');
      return data;
    } catch (error) {
      toast.error('The product removal was unsuccessful');
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSuppliers = createAsyncThunk(
  'pharmacy/allSuppliers',
  async ({ page = 1, limit = 5, name = '' }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/suppliers?page=${page}&limit=${limit}&name=${name}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createSupplier = createAsyncThunk(
  'pharmacy/newSupplier',
  async (supplierData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/suppliers', supplierData);
      toast.success('The supplier has been added successfully');
      return data;
    } catch (error) {
      toast.error('The addition of the supplier was unsuccessful');
      return rejectWithValue(error.message);
    }
  }
);

export const modifySupplier = createAsyncThunk(
  'pharmacy/updateSupplier',
  async ({ id, supplierData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/suppliers/${id}`, supplierData);
      toast.success('The supplier update was completed successfully');
      return data;
    } catch (error) {
      toast.error('The supplier update was unsuccessful');
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCustomers = createAsyncThunk(
  'pharmacy/allCustomers',
  async ({ page = 1, limit = 5, name = '' }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/customers?page=${page}&limit=${limit}&name=${name}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
