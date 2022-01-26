import { useGetList } from 'react-admin';

const ConfigurationMenu = (props) => {
    const { value, id } = props;
    return (
<MenuItemLink
    
    to={id}
    primaryText={value}
    leftIcon={<SettingsIcon />}
    // close the menu on click
/>
)
};

const MyControllers = () => {
    const { data, ids, loading, error } = useGetList(
        'controllers'
        
    );
    if (loading) { return <Loading />; }
    if (error) { return <p>ERROR</p>; }
    return (

            ids.map(id =>
                <ConfigurationMenu id={id} value={data[id].name} />
            )
        
    );
};

export default MyControllers;
