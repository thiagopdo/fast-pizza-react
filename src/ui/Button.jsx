/* eslint-disable react/prop-types */
function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className='"inline-block disabled:cursor-not-allowed" rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2'
    >
      {children}
    </button>
  );
}

export default Button;
