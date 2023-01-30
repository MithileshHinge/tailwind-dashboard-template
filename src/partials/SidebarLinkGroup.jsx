import React, { useState } from 'react';

function SidebarLinkGroup({
  children,
  active,
  collapsible,
  badge,
}) {
  return (
    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${active && 'bg-slate-900'}`}>
      <a href="#0" className="block text-slate-200 truncate">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {children}
          </div>
          {/* Icon */
          collapsible && <div className="flex shrink-0 ml-2">
            <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </div>}
          {/* Badge */
          badge && <div className="flex flex-shrink-0 ml-2">
            <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">{badge}</span>
          </div>}
        </div>
      </a>
    </li>
  );
}

export default SidebarLinkGroup;