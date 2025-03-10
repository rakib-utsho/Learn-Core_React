import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  let handelInputChange = () => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handelSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        placeholder="enter your full name"
        value={formData.fullName}
        onChange={handelInputChange}
        id="fullName"
        name="fullName"
      />
      <br />
      <br />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="enter your username"
        value={formData.username}
        onChange={handelInputChange}
        id="username"
        name="username"
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="enter password"
        value={formData.password}
        onChange={handelInputChange}
        id="password"
        name="password"
      />
      <button>Submit</button>
    </form>
  );
}
