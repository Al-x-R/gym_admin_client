import { IAdmin } from '../../components/Admins';
import { createSlice } from '@reduxjs/toolkit';


interface AdminState {
  admins: IAdmin[];
  isLoading: boolean;
  error: string;
}

const initialState: AdminState = {
  admins: [],
  isLoading: false,
  error: '',
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: {}
})

export default adminSlice.reducer;