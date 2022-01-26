import { useList, ListContextProvider, Datagrid, TextField } from "react-admin";

const data = [
    { id: 1, name: 'Arnold' },
    { id: 2, name: 'Sylvester' },
    { id: 3, name: 'Jean-Claude' },
]
const ids = [1, 2, 3];

 const ContList = () => {
    const listContext = useList({
        data,
        ids
        
    });
    return (
        <ListContextProvider value={listContext}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
            </Datagrid>
        </ListContextProvider>
    );
};

export default ContList;