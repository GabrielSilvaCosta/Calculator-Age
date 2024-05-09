import { useState } from "react";
import { FaViacoin } from "react-icons/fa";
import { InputField } from "./InputField";
import { SubmitButton } from "./SubmitButton";
import { ResetButton } from "./ResetButton";
import { ErrorMessage } from "./ErrorMessage";

export default function Calculator() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [dayError, setDayError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);

  const [result, setResult] = useState(null);
  const [resultError, setResultError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setDayError(false);
    setMonthError(false);
    setYearError(false);
    setResultError(false);

    if (!day || !month || !year) {
      setDayError(!day);
      setMonthError(!month);
      setYearError(!year);
      setResult(null);
      setResultError(true);
      return;
    }

    const currentDate = new Date();
    const inputDate = new Date(`${year}-${month}-${day}`);

    if (currentDate < inputDate) {
      setResult(null);
      setResultError(true);
      return;
    }

    const diff = currentDate.getTime() - inputDate.getTime();
    const ageDate = new Date(diff);
    const years = ageDate.getUTCFullYear() - 1970;

    setResult(years);
  };

  const handleReset = () => {
    setDay("");
    setMonth("");
    setYear("");
    setDayError(false);
    setMonthError(false);
    setYearError(false);
    setResult(null);
    setResultError(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-700">
      <div className="max-w-md w-full">
        <div className="bg-white shadow-md rounded-lg p-8 mb-8 text-center text-gray-800 font-bold text-3xl ">
          <div className="flex items-center justify-between mb-6 text-center mt-4 text-lg font-bold text-gray-800">
            <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
              Age Calculator
            </h2>
            <FaViacoin className="text-3xl text-gray-800 mr-2" />
          </div>
          <div className="flex items-center mb-4 text-center mt-4 text-lg font-bold text-gray-800">
            <InputField
              id="day"
              placeholder="DD"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              error={dayError}
            />
            <InputField
              id="month"
              placeholder="MM"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              error={monthError}
            />
            <InputField
              id="year"
              placeholder="YYYY"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              error={yearError}
            />
          </div>
          <div className="border-b border-gray-300 mb-6"></div>
          <div className="flex items-center justify-center space-x-4 mb-6 text-center mt-4 text-lg font-bold text-gray-800 ">
            <SubmitButton onClick={handleSubmit} />
            <ResetButton onClick={handleReset} />
          </div>
          <ErrorMessage error={resultError} />
          {result !== null && (
            <div className="text-center mt-4">
              <p className="text-gray-700 text-lg font-bold text-center mt-4">
                Your age is{" "}
                <span className="text-purple-700 font-bold">{result}</span>{" "}
                years old.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
