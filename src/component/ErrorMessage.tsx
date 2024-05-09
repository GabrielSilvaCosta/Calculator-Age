export function ErrorMessage({ error }: { error: boolean }) {
  return error ? (
    <p className="text-red-500 text-xs italic text-center mt-2">
      Please fill out all fields.
    </p>
  ) : null;
}
