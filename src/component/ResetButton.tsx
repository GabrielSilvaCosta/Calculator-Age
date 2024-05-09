export function ResetButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="reset"
      onClick={onClick}
    >
      Reset
    </button>
  );
}
