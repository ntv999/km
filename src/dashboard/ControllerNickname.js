import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CardWithIcon from './CardWithIcon';
import Home from '@mui/icons-material/Home';



const ControllerNickname = (props) => {
    const { value } = props;
    return (
        <CardWithIcon
            to="/settings"
            icon={HomeIcon}
            title="Название контроллера"
            subtitle={value}
        />
    );
};

export default ControllerNickname;