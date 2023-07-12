import React from 'react';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingsSlice';
const Greetings = () => {
    const {greetings, error, loading} = useSelector(state => state.greetings);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGreetings())
    }, [dispatch]);

    return (
        <div>
            {greetings && <h1>{greetings.greetings}</h1>}
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
        </div>
    )
;}

export default Greetings;