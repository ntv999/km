// in src/MyLayout.js

import * as React from 'react';
import { AppBar, UserMenu, MenuItemLink, Layout, useGetList, Loading } from 'react-admin';
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';

const ConfigurationMenu = (props) => {
    const {id, value} = props;
    return (
        <MenuItemLink
        to={id}
        primaryText={value}
        leftIcon={<HomeIcon />}
        />
    )
};


 const MyControllers = () => {
    const { data, ids, loading, error } = useGetList(
        'controllers',
        { page: 1, perPage: 2 },
        { field: 'id', order: 'DESC' }
    );
    if (loading) { return <p>Loading</p>; }
    if (error) { return <p>ERROR</p>; }
    return (
        
            ids.map(id =>
                <ConfigurationMenu key={id} id={data[id].id} value={data[id].name} />
            )
        
    );
};

const MyUserMenu = props => (
    
    <UserMenu {...props}>
    <MyControllers />
            <Divider variant='middle'/>
    </UserMenu>
    
);

const MyAppBar = props => <AppBar {...props} userMenu={<MyUserMenu />} />;

const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;

export default MyLayout;