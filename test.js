import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDataProvider, Loading, Error } from 'react-admin';

const { data, loading, loaded, error, refetch } = useGetOne(resource, id, options);

// example
import { useGetOne } from 'react-admin';
const UserProfile = ({ record }) => {
    const { data, loading, error } = useGetOne('users', record.id);
    if (loading) { return <Loading />; }
    if (error) { return <p>ERROR</p>; }
    return <div>User {data.username}</div>;
};

