import * as React from "react";

import { List, Datagrid, TextField, BooleanField} from 'react-admin';

export const GateList = props => (
    

    <List {...props} bulkActionButtons={false}    >
        <Datagrid>

            <TextField source="id" label="ID"/>
            <TextField source="name" label="Название"/>
            <TextField source="state" label="Состояние"/>
            <BooleanField source="isOnline" label="Активировано"/>

          
            
        </Datagrid>
    </List>
);