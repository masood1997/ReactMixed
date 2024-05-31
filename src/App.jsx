import { useState, useEffect } from 'react';
import Button from './Button';
import Password from './Password';
import Currency from './Currency';
import Groceries from './Groceries';

function App() {
  // useEffect(() => {
  //   setCount(prevCount=>prevCount+1);

  //   return () => {
  //   }
  // }, [count])
  const handleOnClick = () => {
    //setCount((prevCount) => prevCount + 1);
    // setCount(count+1);
    // setCount(count+3);
    // setCount(count+4);
    // setCount(count+2);
  };
  return (
    <>
      {/* <h1>Counter {count}</h1>
      <button onClick={handleOnClick}>Increase Count</button> */}
      {/* <Button colour="red" />
      <Button colour="green" />
      <Button />
      <Button colour="pink" /> */}
      {/* <Password/> */}
      <Currency/>
      {/* <Groceries/> */}
      
    </>
  );
}

export default App;
