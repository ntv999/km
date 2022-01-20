// in src/MyUrlField.js
import * as React from "react";
import { useRecordContext } from 'react-admin';

const MyUrlField = ({ source }) => {
    const record = useRecordContext();
    switch (record[source]) {
        case 1:
            return record ? ("Администратор") : null;
        case 2:
            return record ? ("Суперпользователь") : null; 
        case 3:
            return record ? ("Пользователь") : null;
        case 4:
            return record ? ("Гость") : null;    
    


    }
    
}

export default MyUrlField;