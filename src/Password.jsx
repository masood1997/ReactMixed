import { useState, useCallback, useEffect, useRef } from 'react';

function Password() {
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState('');
  const refElement = useRef("");
  const handlePasswordGenerator = () => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number) str += '1234567890';
    if (character) str += '!@#$%^&*[]-_+=?';
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
    refElement.current.focus();
  };
  useEffect(() => {
    handlePasswordGenerator();
  }, [length, number, character]);

  const copyToClipboard = ()=>{
    window.navigator.clipboard.writeText(password);
    refElement.current?.select();
  }
  // handlePasswordGenerator();
  return (
    <>
      <div>Password</div>
      <br></br>
      <input type="text" value={password} readOnly ref={refElement} placeholder="Password" id="password" />
      <button onClick={copyToClipboard}>Copy</button>
      <br></br>
      <input type="range" min={6} max={16} value={length} onChange={(e) => setLength(e.target.value)} id="length" />
      <label>Length :{length}</label>
      <br></br>
      <input type="checkbox" defaultChecked={number} onChange={(e) => setNumber((prev) => !prev)} id="number" />
      <label>Number</label>
      <br></br>
      <input
        type="checkbox"
        defaultChecked={character}
        onChange={(e) => setCharacter((prev) => !prev)}
        id="character"
      />
      <label>Character</label>
    </>
  );
}

export default Password;
