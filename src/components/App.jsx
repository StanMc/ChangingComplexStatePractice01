import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function onChangeHandler(event) {
    console.log("onChangeHanlder()...");
    const newValue = event.target.value;
    const inputName = event.target.name;
    console.log(inputName + "=" + newValue);
    const {
      value,
      name
    } = event.target; /* value is the same as newName , name is the same as inputName*/
    console.log(name + "=" + value);

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  function onClickHandler(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={onChangeHandler}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={onChangeHandler}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={onChangeHandler}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button onClick={onClickHandler}>Submit</button>
      </form>
    </div>
  );
}

export default App;
