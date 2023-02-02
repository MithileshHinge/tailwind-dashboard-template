import React from 'react';
import { Link } from 'react-router-dom';
import EditMenu from '../EditMenu';
import Icon from '../../images/icon-02.svg';
import chart from '../../images/charts/chart02.svg';

function DashboardCard02() {
  return (
    <div className="flex flex-col col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32"/>
          {/* Menu button */}
          <EditMenu className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 1</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 2</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">Remove</Link>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Acme Advanced</h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">$17,489</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">-14%</div>
        </div>
      </div>
      <div className="grow">
        <img src={chart} className="p-5"/>
      </div>
    </div>
  );
}

export default DashboardCard02;
