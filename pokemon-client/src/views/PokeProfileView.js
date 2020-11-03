import React from "react";

const PokeProfileView = ({ match }) => {
  return (
    <div>
      <h1>{`Hello from the Pokefile view ${match.params.id}`}</h1>
    </div>
  );
};

export default PokeProfileView;
