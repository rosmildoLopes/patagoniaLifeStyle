export const BottomOutlineButton = ({ children, className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={`group relative py-1 px-3 border-none border-text transition-colors duration-[400ms] ${className}`}
    >
      <span>{children}</span>

      {/* BOTTOM */}
      <span className="absolute bottom-0 left-0 h-[2px] w-0  bg-text font-black transition-all duration-100 group-hover:w-full" />
    </button>
  );
};
