import "./App.css";
import { useState } from "react";

function Hooks() {
  // updates and propogates the changes in the DOM/ UI.
  // Arr[0] = value and Arr[1] = function
  const [counter, setCounter] = useState(15);

  // let counter = 10 ;

  // NOTE: Major problem of React is UI Update.
  //  React's major power lies here, React will decide ki UI main kab kaha change karega,  it will react on variable updation
  //  ek jagh, change krne par har jgh change honeka
  //  if 1 added using classic JS, multiple references will gather up like getElementByID("abc"),
  //  getElementByID("pqr") and so on. That's where React steps in.

  // IN SHORT: UI Updation is controlled by React.

  // UI ka update main hi krunga ~REACT
  // So the data will be updated only via HOOKS
  // every HOOK has a seperate task ( Seperation of Concerns )

  const addValue = () => {
    console.log("Add Button Clicked : ", counter); // in UI it won't update
    // counter += 1;
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}> Add + {counter} </button>
      <br />
      <button> Sub - {counter}</button>
    </>
  );
}

export default Hooks;
