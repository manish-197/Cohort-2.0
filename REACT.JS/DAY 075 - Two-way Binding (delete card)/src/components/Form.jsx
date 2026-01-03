import React from "react";

const Form = () => {
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");

  const [allUser, setAllUser] = React.useState([]);

  function submitHandler(reload) {
    reload.preventDefault();

    setAllUser([...allUser, { name, number }]);

    setName("");
    setNumber("");
  }

  function deleteHandler(i){
    const copyUser = [...allUser];
    copyUser.splice(i,1);
    setAllUser(copyUser);
  }

  return (
    <div className="mobile">
      <div className="form-container">
        <form
          className="form"
          onSubmit={(reload) => {
            submitHandler(reload);
          }}
        >
          <div className="form-input-container">
            <input
              className="form-inputs"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(val) => {
                setName(val.target.value);
              }}
            />
            <input
              className="form-inputs"
              type="text"
              placeholder="Enter No."
              value={number}
              onChange={(val) => {
                setNumber(val.target.value);
              }}
            />
          </div>
          <button className="form-btn">Submit</button>
        </form>
      </div>
      <div className="contact">
        {allUser.map((elem, i) => {
          return (
            <div className="list">
              <div className="profile"></div>
              <div className="details">
                <h3>{elem.name}</h3>
                <p>{elem.number}</p>
              </div>
              <div className="delete">
                <button onClick={(idx) => {
                  deleteHandler(i);
                }}>+</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
