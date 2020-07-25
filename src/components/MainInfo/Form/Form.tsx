import React, { FC } from "react";

const Form: FC<any> = () => {
  return (
    <form action="">
      <input type="text" placeholder="city" />
      <p>error message</p>
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
