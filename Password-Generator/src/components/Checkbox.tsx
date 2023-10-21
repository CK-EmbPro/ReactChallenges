import React, { ChangeEvent, useEffect, useRef } from 'react'

interface CheckBoxProps {
  rangeValue: number;
  setRangeValue: React.Dispatch<React.SetStateAction<number>>;
  isLowercase: boolean;
  setisLowercase: React.Dispatch<React.SetStateAction<boolean>>;
  isUppercase: boolean;
  setisUppercase: React.Dispatch<React.SetStateAction<boolean>>;
  isNumbers: boolean;
  setisNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  isSpecialChars: boolean;
  setisSpecialChars: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox = ({
  rangeValue,
  setRangeValue,
  isLowercase,
  setisLowercase,
  isUppercase,
  setisUppercase,
  isNumbers,
  setisNumbers,
  isSpecialChars,
  setisSpecialChars,
}: CheckBoxProps) => {

  const lowercaseCheckBox = useRef<HTMLInputElement>(null)

  const handleRangeValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    let parsedValue = parseInt(e.target.value, 10);
    setRangeValue(parsedValue);
  };

  const handleLowercaseChange = () => {
    setisLowercase(!isLowercase);
  };

  const handleUppercaseChange = () => {
    setisUppercase(!isUppercase);
  };

  const handleNumberChange = () => {
    setisNumbers(!isNumbers);
  };

  const handleSpecialCharsChange = () => {
    setisSpecialChars(!isSpecialChars);
  };

  const fillStyle = {
    width: `${((rangeValue - 5) / 25) * 100}%`,
  };

  useEffect(() => {
    // Initialize other states as desired
    setisUppercase(true);
    setisNumbers(true);
    setRangeValue(10);
  }, []);

  useEffect(() => {
    // Check if all other states are false, and then set isLowercase to true
    if (!isUppercase && !isNumbers && !isSpecialChars) {
     setisLowercase(true)
    }
  }, [isLowercase]);

  return (
    <div className="w-[80%] mx-auto flex flex-col gap-6">
      <p>
        Password Length:
        <span>{rangeValue}</span>
      </p>

      <div className="w-full">
        <div className="relative">
          <span className="absolute rounded-[5px]  z-[1] left-[1px] top-[7.5px] w-[100%] h-[8px] roudned-[5px] bg-[#fff]  border-[1px] border-black overflow-hidden">
            <span className="block w-full h-[500px]  bg-[#33cccc]" style={fillStyle}></span>
          </span>
          <input
            className="relative z-[2] appearance-none w-[100%] h-[10px] rounded-[5px] bg-transparent outline-none sliderThumbTailProps sliderThumbTailPropsActive"
            type="range"
            min="5"
            max="30"
            value={rangeValue}
            onChange={handleRangeValueChange}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className={`flex justify-between `}>
          <label htmlFor="uppercase" className="flex justify-between w-[100%]">
            Uppercase
          </label>
          <input
            checked={isUppercase}
            type="checkbox"
            id="uppercase"
            className={`appearance-none  checkBoxInput ${isUppercase ? "checkedBoxInput" : ""} `}
            onChange={handleUppercaseChange}
          />
        </div>

        <div className="flex justify-between">
          <label htmlFor="lowercase" className="flex justify-between w-[100%]">
            Lowercase
          </label>
          <input
            checked={isLowercase}
            type="checkbox"
            id="lowercase"
            className={`appearance-none  checkBoxInput ${isLowercase ? "checkedBoxInput" : ""} `}
            onChange={handleLowercaseChange}
          />
        </div>

        <div className="flex justify-between">
          <label htmlFor="numbers" className="flex justify-between w-[100%]">
            Numbers
          </label>
          <input
            checked={isNumbers}
            type="checkbox"
            id="numbers"
            className={`appearance-none  checkBoxInput ${isNumbers ? "checkedBoxInput" : ""} `}
            onChange={handleNumberChange}
          />
        </div>

        <div className="flex justify-between">
          <label htmlFor="specialChars" className="flex justify-between  w-[100%]">
            SpecialCharacters
          </label>
          <input
            checked={isSpecialChars}
            type="checkbox"
            id="specialChars"
            className={`appearance-none  checkBoxInput ${isSpecialChars ? "checkedBoxInput" : ""} `}
            onChange={handleSpecialCharsChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
