import * as React from 'react';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CardWithIcon from './CardWithIcon';



const SystemStatus = (props) => {
    const { value } = props;
    return (
        <CardWithIcon
            to=""
            icon={CloudQueueIcon}
            title="Состояние"
            subtitle={value}
        />
    );
};

export default SystemStatus;