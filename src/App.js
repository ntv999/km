// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserEdit, UserList, UserCreate, UserShow } from './users';

import { GateList } from './gates';

import UserIcon from '@material-ui/icons/Group';
import Dashboard2 from './Dashboard2';
import MyLayout from "./MyLayout";

import jsonServerProvider from 'ra-data-json-server';

import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/ntv999/km');


localStorage.setItem('controllerId', 'cdf5-ssgg-aaa');

const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');
const App = () => (
    <Admin 
    layout={MyLayout}
    i18nProvider={i18nProvider}
    dataProvider={dataProvider} 
    dashboard={Dashboard2}

    >
        <Resource name="profiles" options={{ label: 'Пользователи' }}  list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
        <Resource name="gates" options={{ label: 'Двери' }} list={GateList} />
  </Admin>
);

export default App;


