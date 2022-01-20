import * as React from "react";

import { List, Datagrid, TextField} from 'react-admin';

export const GateList = props => (
    

    <List {...props} isRowSelectable={ record => record.id > 333 }>
        <Datagrid isRowSelectable={ record => record.id > 333 }>

            <TextField source="id" label="ID"/>
            <TextField source="name" label="Название"/>
            <TextField source="isOnline" label="Статус"/>
          
            
        </Datagrid>
    </List>
);