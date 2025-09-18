'use client'
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const {pending} = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="bg-red-500 p-4 rounded-2xl cursor-pointer disabled:bg-amber-300 disabled:opacity-60">
      {pending ? "booking..." : "book event"}
    </button>
  );
};

export default SubmitButton;
