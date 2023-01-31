function DashboardCardGeneric({title, cardClassName, children}) {
  return (
    <div className={`${cardClassName} bg-white shadow-lg rounded-sm border border-slate-200`}>
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">{title}</h2>
      </header>
      {children}
    </div>
  );
}

export default DashboardCardGeneric;
