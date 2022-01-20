import * as React from "react";
import { useQuery, Loading, Error } from 'react-admin';

const ControllerProfile = ({ userId }) => {
    const { data, loading, error } = useQuery({ 
        type: 'getOne',
        resource: 'controllers',
        payload: { id: userId }
    });

    if (loading) return <Loading />;
    if (error) return <Error />;
    if (!data) return null;

    return (
        data.numOfGates
    )
};