// in src/MyDoorStatus.js
import { useRecordContext } from 'react-admin';

const MyDoorStatus = ({ source }) => {
    const record = useRecordContext();
    if (record[source] !== 5) { return "В сети"; } else { return "Не в сети"}

    
}

export default MyDoorStatus;