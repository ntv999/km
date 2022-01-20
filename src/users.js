// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EditButton, Edit, Create, SimpleForm, Labeled, TextInput, Show, ShowButton, SimpleShowLayout } from 'react-admin';
import SendButton from './SendButton';
import Grid from '@mui/material/Grid';
import MyRoleField from "./MyRoleField";


import {
    required,
    minLength,
    maxLength,
    number,
    regex,
    
} from 'react-admin';

const validateFirstName = [required(), minLength(2), maxLength(15)];
const validateLastName = [required(), minLength(2), maxLength(15)];
const validateRoomNumber = [number(), maxLength(4)];
const validatePhone = [required(), regex(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ , 'Must be a valid Phone Number')];

const UserTitle = ({ record }) => {
    return <span>Пользователь: {record ? `${record.lastname}` : ''}</span>;
};

export const UserList = props => (
    

    <List {...props}>
        <Datagrid>

            <TextField source="id" label="ID"/>
            <TextField source="firstname" label="Имя"/>
            <TextField source="lastname" label="Фамилия"/>
            <TextField source="phone" label="Телефон"/>
            <TextField source="roomNumber" label="Помещение" />
            <TextField source="lastActivity.date" label="Активность" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
        <Grid container spacing={2}>
            <Grid item xs={4}>   
            <Labeled source="id" label="ID">
            <TextField source="id" label="ID"/>
            </Labeled>
            </Grid>
            <Grid item xs={4}>
            <Labeled source="firstname" label="Имя">    
            <TextField source="firstname" label="Имя"/>
            </Labeled>
            </Grid>
            <Grid item xs={4}>
                <Labeled label="Фамилия">
            <TextField source="lastname" label="Фамилия"/>
                </Labeled>
            </Grid>
            <Grid item xs={4}>
                <Labeled label="Телефон">
            <TextField source="phone" label="Телефон"/>
                </Labeled>
            </Grid>
            <Grid item xs={4}>
                <Labeled label="Помещение">
            <TextField source="roomNumber" label="Помещение" />
            </Labeled>
            </Grid>
            <Grid item xs={4}>
                <Labeled label="Роль">
            <MyRoleField source="roleId" label="Роль" />
                </Labeled>
            
            </Grid>

        
         </Grid>  
         <SendButton />
        </SimpleShowLayout>
    </Show>
);

export const UserEdit = props => (


    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
             <TextInput disabled source="id" label="ID"/>
            <TextInput source="firstname" label="Имя"/>
            <TextInput source="lastname" label="Фамилия"/>
            <TextInput source="phone" label="Телефон"/>
            <TextInput source="roomNumber" label="Помещение" />


        </SimpleForm>
    
    </Edit>
);

export const UserCreate = props => (


    <Create {...props}>
        <SimpleForm>
            <TextInput source="firstname" label="Имя" validate={validateFirstName}/>
            <TextInput source="lastname" label="Фамилия" validate={validateLastName}/>
            <TextInput source="phone" label="Телефон" validate={validatePhone}/>
            <TextInput source="roomNumber" label="Помещение" validate={validateRoomNumber}/>

        </SimpleForm>
    
    </Create>
);