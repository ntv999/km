import * as React from 'react';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CardWithIcon from './CardWithIcon';



const DoorAmount = (props) => {
    const { value } = props;
    return (
        <CardWithIcon
            to="/gates"
            icon={MeetingRoomIcon}
            title="Точки входа"
            subtitle={value}
        />
    );
};

export default DoorAmount;