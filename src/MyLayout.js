// in src/MyLayout.js

import * as React from 'react';
import { AppBar, UserMenu, MenuItemLink, Layout } from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@mui/material/Divider';

    const ConfigurationMenu = (props) => {
        const { value } = props;
        return (
    <MenuItemLink
        
        to={value}
        primaryText={value}
        leftIcon={<SettingsIcon />}
        // close the menu on click
    />
    )
};

const MyUserMenu = props => (
    <UserMenu {...props}>
        <ConfigurationMenu value={'123'}/>
        <ConfigurationMenu value={'124'}/>
        <Divider variant='middle'/>
    </UserMenu>
    
);

const MyAppBar = props => <AppBar {...props} userMenu={<MyUserMenu />} />;

const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;

export default MyLayout;