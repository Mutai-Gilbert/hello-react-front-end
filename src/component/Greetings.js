import React from 'react';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingsSlice';
const Greetings = () => {
    const {greeting, error, loading} = useSelector(state => state.greetings);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGreetings())
    }, [dispatch]);

    return (
        <div>
            {greeting && <h1>{greeting.greeting}</h1>}
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
        </div>
    )
;}

export default Greetings;