
export const validate = (userData, errors, setErrors) => {
  const newErrors = { ...errors };

  if (!userData.email) {
    newErrors.email = "Email vacío";
  } else if (userData.email.length > 35) {
    newErrors.email = "Email no puede contener más de 35 caracteres";
  } else {
    newErrors.email = "";
  }

  if (!userData.password) {
    newErrors.password = "Contraseña vacía";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    newErrors.password = "Contraseña debe tener entre 6 y 10 caracteres";
  } else if (!/\d/.test(userData.password)) {
    newErrors.password = "Contraseña debe contener al menos un dígito";
  } else {
    newErrors.password = "";
  }

  setErrors(newErrors);
};


