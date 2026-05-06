import { useState } from "react";

enum Operador {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "/",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [prevNumber, setPrevNumber] = useState<number>(0);
  // const lastOperation = useRef<Operador | null>(null);

  const builNumber = (numberString: string) => {
    console.log({ numberString });
  };

  return {
    // porps
    formula,
    number,
    prevNumber,

    //methods
    builNumber,
  };
};
