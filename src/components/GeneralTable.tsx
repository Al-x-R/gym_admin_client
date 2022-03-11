import React, { FC } from 'react';
import { TableType } from '../types';
import Clients from './Clients';
import Memberships from './Memberships';
import AdminsTable from './Admins';
import Table from '../components/Table/Table'

interface ITable {
  value: TableType;
}

const GeneralTable: FC<ITable> = ({value})  => {
  switch (value) {
    case 'Clients':
      return <Clients />
    case 'Memberships':
      return <Memberships />
    case 'Admins':
      return <AdminsTable />
    case 'Trainers':
      return <Table />
    default:
      return <Clients />
  }
}

export default GeneralTable;