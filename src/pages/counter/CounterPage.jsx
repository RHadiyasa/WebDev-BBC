import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const CounterPage = () => {
  // state management
  const [number, setNumber] = useState(0);
  // setNumber menerima parameter untuk set Value si Number

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl text-center">Counter Page</h1>
        <div className="flex items-center gap-3">
          <Button color="danger" onClick={handleDecrement}>
            -
          </Button>
          <p className="text-xl font-bold">{number}</p>
          <Button color="success" onClick={handleIncrement}>
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
