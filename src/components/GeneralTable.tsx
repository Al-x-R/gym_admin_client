import React, { FC } from 'react';
import { TableType } from '../types';
import Clients from './Clients';
import Memberships from './Memberships';
import AdminsTable from './Admins';
import Table from '../components/Table/Table'
import ClientCard from '../components/Clients/ClientCard';

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
    case 'Statistics':
      return <ClientCard />
    default:
      return <Clients />
  }
}

export default GeneralTable;