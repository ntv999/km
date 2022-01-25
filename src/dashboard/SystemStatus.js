import * as React from 'react';
import CloudIcon from '@mui/icons-material/Cloud';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import CardWithIcon from './CardWithIcon';



const SystemStatus = (props) => {
    const { value } = props;

    if(value === true){
        return (<CardWithIcon
            to=""
            icon={CloudIcon}
            title="Состояние"
            subtitle="Online"
        />)
      } else {
        return (<CardWithIcon
            to=""
            icon={CloudOffIcon}
            title="Состояние"
            subtitle="Offline"
        />)
      }

   
    
};

export default SystemStatus;