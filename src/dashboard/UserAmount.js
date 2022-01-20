import * as React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CardWithIcon from './CardWithIcon';



const UserAmount = (props) => {
    const { value } = props;
    return (
        <CardWithIcon
            to="/profiles"
            icon={PersonIcon}
            title="Количество пользователей"
            subtitle={value}
        />
    );
};

export default UserAmount;