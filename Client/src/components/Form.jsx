import React, { useState } from "react";
import { validate } from "./validacion"; // Importa la función validate desde el archivo externo
import style from "./Form.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
    validate({ ...userData, [event.target.name]: event.target.value }, errors, setErrors); // Llama a la función validate
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }

  return (
    <>
    <div className={style.div}>
    <div className={style.loginContainer}>
      <h2 className={style.h2}>Login</h2>
      <form action="">
        <label htmlFor="email" className={style.label}>Email: </label>
        <input
          type="text"
          name="email"
          placeholder="Ingresa tu email"
          value={userData.email}
          onChange={handleChange}
          className={errors.email && style.warning}
        />
          <span className={style.danger} >{errors.email}</span>
        <br />
        <br />
        <label htmlFor="password" className={style.label}>Password: </label>
        <input
          type="text"
          name="password"
          placeholder="Ingresa tu password"
          value={userData.password}
          onChange={handleChange}
          className={errors.password && style.warning}
        />
        <span className={style.danger}>{errors.password}</span>
        <br />
        <br />
        <button onClick={handleSubmit} className={style.button}>Submit</button>
      </form> 
      </div>
      </div>
    </>
   
  );
};

export default Form;