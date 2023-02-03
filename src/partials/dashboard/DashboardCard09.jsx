import { Popover } from '@headlessui/react';
import React from 'react';
import chart from '../../images/charts/chart09.svg';

function DashboardCard09() {
  return (
    <div className="w-6/12 flex flex-col bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Sales VS Refunds</h2>
        <Popover className="relative ml-2 flex items-center">
          <Popover.Button>
            <div>
              <svg className="w-4 h-4 fill-current text-slate-400" viewBox="0 0 16 16">
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
              </svg>
            </div>
          </Popover.Button>
          <Popover.Panel className="bg-white border border-slate-200 p-3 rounded shadow-lg mb-2 min-w-80 z-10 absolute bottom-full left-1/2 transform -translate-x-1/2">
            <div className="text-sm">Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
          </Popover.Panel>
        </Popover>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">+$6,796</div>
          <div className="text-sm font-semibold text-white px-1.5 rounded-full bg-yellow-500">-34%</div>
        </div>
      </div>
      <img src={chart} className="px-5 pb-4"/>
    </div>
  );
}

export default DashboardCard09;
