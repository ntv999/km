import * as React from 'react';

import SystemStatus from './dashboard/SystemStatus';
import UserAmount from './dashboard/UserAmount';
import DoorAmount from './dashboard/DoorAmount';
import ControlleNickname from './dashboard/ControllerNickname';



const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;

export default () => (
    <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                        <SystemStatus value={1} />
                        <Spacer />
                        <UserAmount value={'7'} />
                        <Spacer />
                        <DoorAmount value={2} />
                        <Spacer />
                        <ControlleNickname value={"Мстиславца 15"} />
                    </div>
                    <div style={styles.singleCol}>
                        Lorem ipsum
                    </div>
                </div> 
    </div>  
);
