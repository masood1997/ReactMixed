import { useState } from 'react';

function Button(props) {
  const { colour = '#E6E6FA' } = props;
  const [active, setIsActive] = useState(false);
  const handleOnClick = () => {
    setIsActive(!active);
  };
  return (
    <>
      <button
        onClick={handleOnClick}
        type="button"
        style={{ backgroundColor: active ? colour : 'transparent' }}
        id="myButton"
        name="myButton"
        value="Click Me"
      >
        {colour}
      </button>
    </>
  );
}

export default Button;
