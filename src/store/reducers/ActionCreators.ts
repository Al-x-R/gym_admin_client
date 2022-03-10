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

export const createAdmin = (values: { [x: string]: any; }) => async (dispatch: AppDispatch) => {
  try {
    dispatch(adminSlice.actions.adminsCreate());
    const {data} = await axios.post('http://localhost:5000/api/admins', {admin: values}, {
      headers: {
        'Authorization': `Basic ${localStorage.getItem('token')}`
      }
    });
    dispatch(adminSlice.actions.adminsCreateSuccess(data));
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const err = error.response?.data.message
      dispatch(adminSlice.actions.adminsCreateError(err));
    } else if (error instanceof Error) {
      dispatch(adminSlice.actions.adminsCreateError(error.message));
    }
  }
};

export const updateAdmin = () => async (dispatch: AppDispatch) => {
  try {

  } catch (error: unknown) {

  }
};

export const deleteAdmin = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(adminSlice.actions.adminsDelete());
    const {data} = await axios.delete('http://localhost:5000/api/admins', {
      headers: {
        'Authorization': `Basic ${localStorage.getItem('token')}`
      }, data: {id}
    });
    dispatch(adminSlice.actions.adminsDeleteSuccess(data.id))
  } catch (error: unknown) {
    if (error instanceof Error)
      dispatch(adminSlice.actions.adminsDeleteError(error.message));
  }
};