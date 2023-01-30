import { NavLink } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';

function Sidebar() {
  return (
    <div>
      {/* Sidebar */}
      <div
        id="sidebar"
        className="flex flex-col z-40 static left-auto top-auto translate-x-0 h-screen overflow-y-auto no-scrollbar w-64 shrink-0 bg-slate-800 p-4"
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 px-2">
          {/* Logo */}
          <NavLink end to="/" className="block">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                  <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                  <stop stopColor="#A5B4FC" offset="100%" />
                </linearGradient>
                <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                  <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                  <stop stopColor="#38BDF8" offset="100%" />
                </linearGradient>
              </defs>
              <rect fill="#6366F1" width="32" height="32" rx="16" />
              <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
              <path
                d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                fill="url(#logo-a)"
              />
              <path
                d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                fill="url(#logo-b)"
              />
            </svg>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">Pages</h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup active collapsible>
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className="fill-current text-indigo-500"
                    d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                  />
                  <path
                    className="fill-current text-indigo-600"
                    d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                  />
                  <path
                    className="fill-current text-indigo-200"
                    d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3">
                  Dashboard
                </span>
              </SidebarLinkGroup>
              {/* E-Commerce */}
              <SidebarLinkGroup collapsible>
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className="fill-current text-slate-400"
                    d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                  />
                  <path
                    className="fill-current text-slate-700"
                    d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                  />
                  <path
                    className="fill-current text-slate-600"
                    d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3">
                  E-Commerce
                </span>
              </SidebarLinkGroup>
              {/* Community */}
              <SidebarLinkGroup collapsible>
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className="fill-current text-slate-600"
                    d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                  />
                  <path
                    className="fill-current text-slate-400"
                    d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3">
                  Community
                </span>
              </SidebarLinkGroup>
              {/* Finance */}
              <SidebarLinkGroup collapsible>
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className="fill-current text-slate-400"
                    d="M13 6.068a6.035 6.035 0 0 1 4.932 4.933H24c-.486-5.846-5.154-10.515-11-11v6.067Z"
                  />
                  <path
                    className="fill-current text-slate-700"
                    d="M18.007 13c-.474 2.833-2.919 5-5.864 5a5.888 5.888 0 0 1-3.694-1.304L4 20.731C6.131 22.752 8.992 24 12.143 24c6.232 0 11.35-4.851 11.857-11h-5.993Z"
                  />
                  <path
                    className="fill-current text-slate-600"
                    d="M6.939 15.007A5.861 5.861 0 0 1 6 11.829c0-2.937 2.167-5.376 5-5.85V0C4.85.507 0 5.614 0 11.83c0 2.695.922 5.174 2.456 7.17l4.483-3.993Z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3">
                  Finance
                </span>
              </SidebarLinkGroup>
              {/* Job Board */}
              <SidebarLinkGroup collapsible>
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className="fill-current text-slate-700"
                    d="M4.418 19.612A9.092 9.092 0 0 1 2.59 17.03L.475 19.14c-.848.85-.536 2.395.743 3.673a4.413 4.413 0 0 0 1.677 1.082c.253.086.519.131.787.135.45.011.886-.16 1.208-.474L7 21.44a8.962 8.962 0 0 1-2.582-1.828Z"
                  />
                  <path
                    className="fill-current text-slate-600"
                    d="M10.034 13.997a11.011 11.011 0 0 1-2.551-3.862L4.595 13.02a2.513 2.513 0 0 0-.4 2.645 6.668 6.668 0 0 0 1.64 2.532 5.525 5.525 0 0 0 3.643 1.824 2.1 2.1 0 0 0 1.534-.587l2.883-2.882a11.156 11.156 0 0 1-3.861-2.556Z"
                  />
                  <path
                    className="fill-current text-slate-400"
                    d="M21.554 2.471A8.958 8.958 0 0 0 18.167.276a3.105 3.105 0 0 0-3.295.467L9.715 5.888c-1.41 1.408-.665 4.275 1.733 6.668a8.958 8.958 0 0 0 3.387 2.196c.459.157.94.24 1.425.246a2.559 2.559 0 0 0 1.87-.715l5.156-5.146c1.415-1.406.666-4.273-1.732-6.666Zm.318 5.257c-.148.147-.594.2-1.256-.018A7.037 7.037 0 0 1 18.016 6c-1.73-1.728-2.104-3.475-1.73-3.845a.671.671 0 0 1 .465-.129c.27.008.536.057.79.146a7.07 7.07 0 0 1 2.6 1.711c1.73 1.73 2.105 3.472 1.73 3.846Z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3">
                  Job Board
                </span>
              </SidebarLinkGroup>
              {/* Tasks */}
              <SidebarLinkGroup collapsible>
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className="fill-current text-slate-600"
                    d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
                  />
                  <path className="fill-current text-slate-600" d="M1 1h22v23H1z" />
                  <path
                    className="fill-current text-slate-400"
                    d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3">
                  Tasks
                </span>
              </SidebarLinkGroup>
              {/* Messages */}
              <SidebarLinkGroup badge="4">
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className="fill-current text-slate-600"
                    d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
                  />
                  <path
                    className="fill-current text-slate-400"
                    d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3">
                  Messages
                </span>
              </SidebarLinkGroup>
              {/* Inbox */}
              <SidebarLinkGroup>
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className="fill-current text-slate-600"
                    d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z"
                  />
                  <path
                    className="fill-current text-slate-400"
                    d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3">
                  Inbox
                </span>
              </SidebarLinkGroup>
              {/* Calendar */}
              <SidebarLinkGroup>
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path className="fill-current text-slate-600" d="M1 3h22v20H1z" />
                  <path
                    className="fill-current text-slate-400"
                    d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3">
                  Calendar
                </span>
              </SidebarLinkGroup>
              {/* Campaigns */}
              <SidebarLinkGroup>
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className="fill-current text-slate-600"
                    d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
                  />
                  <path
                    className="fill-current text-slate-400"
                    d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3">
                  Campaigns
                </span>
              </SidebarLinkGroup>
              {/* Settings */}
              <SidebarLinkGroup collapsible>
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className="fill-current text-slate-600"
                    d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
                  />
                  <path
                    className="fill-current text-slate-400"
                    d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
                  />
                  <path
                    className="fill-current text-slate-600"
                    d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
                  />
                  <path
                    className="fill-current text-slate-400"
                    d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3">
                  Settings
                </span>
              </SidebarLinkGroup>
              {/* Utility */}
              <SidebarLinkGroup collapsible>
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <circle
                    className="fill-current text-slate-400"
                    cx="18.5"
                    cy="5.5"
                    r="4.5"
                  />
                  <circle
                    className="fill-current text-slate-600"
                    cx="5.5"
                    cy="5.5"
                    r="4.5"
                  />
                  <circle
                    className="fill-current text-slate-600"
                    cx="18.5"
                    cy="18.5"
                    r="4.5"
                  />
                  <circle
                    className="fill-current text-slate-400"
                    cx="5.5"
                    cy="18.5"
                    r="4.5"
                  />
                </svg>
                <span className="text-sm font-medium ml-3">
                  Utility
                </span>
              </SidebarLinkGroup>
            </ul>
          </div>
          {/* More group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">More</h3>
            <ul className="mt-3">
              {/* Authentication */}
              <SidebarLinkGroup collapsible>
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path className="fill-current text-slate-600" d="M8.07 16H10V8H8.07a8 8 0 110 8z" />
                  <path className="fill-current text-slate-400" d="M15 12L8 6v5H0v2h8v5z" />
                </svg>
                <span className="text-sm font-medium ml-3">
                  Authentication
                </span>
              </SidebarLinkGroup>
              {/* Onboarding */}
              <SidebarLinkGroup collapsible>
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className="fill-current text-slate-600"
                    d="M19 5h1v14h-2V7.414L5.707 19.707 5 19H4V5h2v11.586L18.293 4.293 19 5Z"
                  />
                  <path
                    className="fill-current text-slate-400"
                    d="M5 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM5 23a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3">
                  Onboarding
                </span>
              </SidebarLinkGroup>
              {/* Components */}
              <SidebarLinkGroup collapsible>
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <circle
                    className="fill-current text-slate-600"
                    cx="16"
                    cy="8"
                    r="8"
                  />
                  <circle
                    className="fill-current text-slate-400"
                    cx="8"
                    cy="16"
                    r="8"
                  />
                </svg>
                <span className="text-sm font-medium ml-3">
                  Components
                </span>
              </SidebarLinkGroup>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 inline-flex justify-end mt-auto">
          <div className="px-3 py-2">
            <button>
              <svg className="w-6 h-6 fill-current rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;