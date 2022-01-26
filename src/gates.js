import * as React from "react";

import { List, Datagrid, TextField, BooleanField} from 'react-admin';
import MyDoorStatus from "./MyDoorStatus";

export const GateList = props => (
    
    

    <List {...props} bulkActionButtons={false}    >
        <Datagrid>

            <TextField source="id" label="ID"/>
            <TextField source="name" label="Название"/>
            <MyDoorStatus source="state" label="Состояние"/>
            <BooleanField source="isOnline" label="Активировано"/>

          
            
        </Datagrid>
    </List>
    
);