// in src/App.js
import * as React from "react";
import { Admin, Resource, ListGuesser, Error, Loading } from 'react-admin';
import { UserEdit, UserList, UserCreate, UserShow } from './users';

import { GateList } from './gates';

import UserIcon from '@material-ui/icons/Group';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';

import Dashboard from './Dashboard';
import MyLayout from "./MyLayout";

import jsonServerProvider from 'ra-data-json-server';

import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/ntv999/km');


localStorage.setItem('controllerId', '48edd5d0-4343d');



const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');
const App = () => (
    <Admin 
    layout={MyLayout}
    i18nProvider={i18nProvider}
    dataProvider={dataProvider} 
    dashboard={Dashboard}

    >
        <Resource name="profiles" options={{ label: 'Пользователи' }}  list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
        <Resource name="gates" options={{ label: 'Двери' }} list={GateList} icon={SensorDoorIcon}/>
        <Resource name="controllers" />
  </Admin>
);

export default App;


