// SubmitButton.tsx
import React from "react";

interface SubmitButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      onClick={onClick}
    >
      Submit
    </button>
  );
};
