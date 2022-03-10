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
    adminsCreate(state) {
      state.isLoading = true
    },
    adminsCreateSuccess(state, action: PayloadAction<IAdmin>) {
      state.isLoading = false
      state.error = ''
      state.admins.push(action.payload)
    },
    adminsCreateError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    adminsDelete(state) {
      state.isLoading = true
      state.error = ''
    },
    adminsDeleteSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = ''
      state.admins = state.admins.filter(admin => admin.id !== Number(action.payload))
    },
    adminsDeleteError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
  extraReducers: {}
})

export default adminSlice.reducer;