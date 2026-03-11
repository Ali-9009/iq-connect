export default function ScheduleButton({ onClick, children, className = "" }) {
  return (
    <button
      className={`py-2 px-6 border-2 border-(--primary-color) text-(--primary-color) rounded-4xl hover:bg-(--primary-color) hover:text-white transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}