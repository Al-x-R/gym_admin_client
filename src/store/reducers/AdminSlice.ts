import { IAdmin } from '../../interfaces/admin.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


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
  reducers: {
    adminsFetching(state) {
      state.isLoading = true
    },
    adminsFetchingSuccess(state, action: PayloadAction<IAdmin[]>) {
      state.isLoading = false
      state.error = ''
      state.admins = action.payload
    },
    adminsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    adminCreate(state) {
      state.isLoading = true
    },
    adminCreateSuccess(state, action: PayloadAction<IAdmin>) {
      state.isLoading = false
      state.error = ''
      state.admins.push(action.payload)
    },
    adminCreateError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    adminDelete(state) {
      state.isLoading = true
      state.error = ''
    },
    adminDeleteSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = ''
      state.admins = state.admins.filter(admin => admin.id !== Number(action.payload))
    },
    adminDeleteError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    adminUpdate(state) {
      state.isLoading = true
      state.error = ''
    },
    adminUpdateSuccess(state, action: PayloadAction<IAdmin>) {
      state.isLoading = false
      state.error = ''
      state.admins = state.admins.map(item => item.id === action.payload.id ? action.payload : item)
    },
    adminUpdateError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
  extraReducers: {}
})

export default adminSlice.reducer;