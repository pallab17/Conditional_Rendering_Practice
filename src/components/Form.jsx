import React from "react";

function Form(prop) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!prop.register && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">{prop.register ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
