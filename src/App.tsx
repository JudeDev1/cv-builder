import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralInfo from "./components/GeneralInfo";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GeneralInfo />} />
          <Route path="/general" element={<GeneralInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;












































/*
function Item({name, isPacked}) {
  if (isPacked) {
    return <li className='item'>{name}✅</li>
    //return <li className='item'>{name} {is packed && '✅'}</li>---logical AND operator(&&) 
  }
    return <li className='item'>{name}</li>
}

export default function PackList() {
  return(
    <section>
      <h1>Bueze packing list</h1>
      <ul>
        <Item 
          isPacked={true}
          name="Spaced suit"
        />
        <Item 
          isPacked={true}
          name="spaced wedding gown"
        />
        <Item 
          isPacked={false}
          name="photo of Tam"/>
      </ul>
    </section>
  )
}
/* 
if (isLoggedIn) {
  console.log ("welcome")
} else {
  console.log("please log in")
}

isLoggedIn ? "welcome" : "Please log in"
*/
/*
function MonthList() {
  const months = ["January", "February", "March" ,"April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return (
  <div>
    {months.map((month, index) => (<li key={index}>{months}</li>))}
  </div>
  )
}



/*
function List(props) {
  return (
    <>
      {!props.animal ? (<div>loading..</div>) : props.animal.length > 0 ? (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>
          })}
        </ul>
        ) : (
        <div>There is no animals in this list</div>
      )}
    </>
  );
}

function App() {
  const animals = [];
  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

export default App;

/* Props Destructuring */
/*
function Button ({text = "Click Me!", color="blue", font-size="12" }) {
  const buttonStyle = {
    color: color;
    fontSize: fontSize + "px"
  };

  return <button style={buttonStyle}>{text}</button>;
}

export default function App () {
  return(
    <div>
      <Button />
      <Button text="Don't click Me" color="red" />
      <Button fontSize={20} />
    </div>
  );
}
*/