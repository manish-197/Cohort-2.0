import React from "react";
import Contact from "./Contact.jsx";


const Form = () => {

    const [name, setName] = React.useState('');
    const [number, setNumber] = React.useState('');

    const [allUser, setAllUser] = React.useState([]);

    function submitHandler(reload) {
        console.log(oldUser.name);
        reload.preventDefault();

        setAllUser([...allUser, {name, number}])

        setName('');
        setNumber('');
    }


  return (
    <div className="mobile">
      <div className="form-container">
        <form className="form" onSubmit={(reload) =>{
            submitHandler(reload)
        }}>
          <div className="form-input-container">
            <input
              className="form-inputs"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(val) =>  {
                setName(val.target.value)
              }}
            />
            <input
              className="form-inputs"
              type="text"
              placeholder="Enter No."
              value={number}
              onChange={(val) => {
                setNumber(val.target.value)
              }}
            />
          </div>
          <button className="form-btn">Submit</button>
        </form>
      </div>
              <Form allUser={allUser}/>
    </div>
  );
};

export default Form;
