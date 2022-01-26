// in src/MyLayout.js

import * as React from 'react';
import { AppBar, UserMenu, MenuItemLink, Layout } from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@mui/material/Divider';
import MyControllers from './MyControllers';

   

const MyUserMenu = props => (
    <UserMenu {...props}>
        
        <MyControllers />
        <Divider variant='middle'/>
    </UserMenu>
    
);

const MyAppBar = props => <AppBar {...props} userMenu={<MyUserMenu />} />;

const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;

export default MyLayout;