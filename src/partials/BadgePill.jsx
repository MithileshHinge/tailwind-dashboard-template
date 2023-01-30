function BadgePill({ children, badgeClass }) {
  return (
    <div className={`text-sm font-semibold text-white px-1.5 rounded-full ${badgeClass}`}>{children}</div>
  );
}

export default BadgePill;
