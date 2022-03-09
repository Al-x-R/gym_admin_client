import { AppDispatch } from '../store';
import axios from 'axios';
import { IAdmin } from '../../interfaces/admin.interface';
import { adminSlice } from './AdminSlice';

export const fetchAdmins = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(adminSlice.actions.adminsFetching());
    const {data} = await axios.get<IAdmin[]>('http://localhost:5000/api/admins');
    dispatch(adminSlice.actions.adminsFetchingSuccess(data));
  } catch (error: unknown) {
    if (error instanceof Error)
      dispatch(adminSlice.actions.adminsFetchingError(error.message));
  }
};