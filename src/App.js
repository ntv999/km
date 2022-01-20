// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserEdit, UserList, UserCreate, UserShow } from './users';

import { GateList } from './gates';

import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';

import jsonServerProvider from 'ra-data-json-server';

import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/ntv999/km');

const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

const App = () => (
    <Admin 
    i18nProvider={i18nProvider}
    dataProvider={dataProvider} 
    dashboard={Dashboard}

    >
        <Resource name="profiles" options={{ label: 'Пользователи' }} show={UserShow} list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
        <Resource name="gates" options={{ label: 'Двери' }} list={GateList} />
  </Admin>
);

export default App;