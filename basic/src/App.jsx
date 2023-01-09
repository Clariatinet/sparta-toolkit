import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber } from './redux/modules/counterSlice';
import { minusNumber } from './redux/modules/counterSlice';

const App = () => {
  const counter = useSelector((state) => state.counter.number);
  console.log(counter);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const onChangeHandler = (event) => {
    setNumber(event.target.value);
  };
  const onClickAddNumberHandler = () => {
    return dispatch(addNumber(number));
  };
  const onClickMinusNumberHandler = () => {
    return dispatch(minusNumber(number));
  };
  console.log(number);
  return (
    <div>
      {counter}
      <input value={number} onChange={onChangeHandler} type='text' />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default App;
