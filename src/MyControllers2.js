// example
import { useGetList } from 'react-admin';
export const LatestNews = () => {
    const { data, ids, loading, error } = useGetList(
        'controllers',
        { page: 1, perPage: 2 },
        { field: 'id', order: 'DESC' }
    );
    if (loading) { return <p>LOAD</p>; }
    if (error) { return <p>ERROR</p>; }
    return (
        <ul>
            {ids.map(id =>
                <li key={id}>{data[id].name}</li>
            )}
        </ul>
    );
};

