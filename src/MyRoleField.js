// in src/MyRoleField.js
import { useRecordContext } from 'react-admin';

const MyRoleField = ({ source }) => {
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

export default MyRoleField;