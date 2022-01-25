import * as React from 'react';

import SystemStatus from './dashboard/SystemStatus';
import UserAmount from './dashboard/UserAmount';
import DoorAmount from './dashboard/DoorAmount';
import ControlleNickname from './dashboard/ControllerNickname';
import { useQuery, Loading, Error } from 'react-admin';



const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;

  const Dashboard2 = ( userId ) => {
    const { data, loading, error } = useQuery({ 
        type: 'getOne',
        resource: 'controllers',
        payload: { id: '123' }
    });

    if (loading) return <Loading />;
    if (error) return <Error />;
    if (!data) return null;

    console.log(userId);

    return (
        <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                        <SystemStatus value={'Online'} />
                        <Spacer />
                        <UserAmount value={data.numOfGates} />
                        <Spacer />
                        <DoorAmount value={data.id} />
                        <Spacer />
                        <ControlleNickname value={"Мстиславца 15"} />
                    </div>
                    <div style={styles.singleCol}>
                        Lorem ipsum
                    </div>
                </div> 
    </div>  
    )
};

export default Dashboard2;
