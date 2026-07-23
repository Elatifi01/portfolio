type ArrowUpRightIconProps = {
  className?: string;
};

export default function ArrowUpRightIcon({
  className = "",
}: ArrowUpRightIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
