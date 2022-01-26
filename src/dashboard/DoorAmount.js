import * as React from 'react';
import CardWithIcon from './CardWithIcon';
import SensorDoor from '@mui/icons-material/SensorDoor';



const DoorAmount = (props) => {
    const { value } = props;
    return (
        <CardWithIcon
            to="/gates"
            icon={SensorDoor}
            title="Точки входа"
            subtitle={value}
        />
    );
};

export default DoorAmount;