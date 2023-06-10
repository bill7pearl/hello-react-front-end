import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGreetings } from '../redux/greetingsReducer';

function Greeting() {
  const greeting = useSelector((state) => state.greeting);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <section>
      <h1>Random Greeting</h1>
      <h2>{greeting}</h2>
      <Link to="/">
        <button type="button">Back to Home</button>
      </Link>
    </section>
  );
}

export default Greeting;
