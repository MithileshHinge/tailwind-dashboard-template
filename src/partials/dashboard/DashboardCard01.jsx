import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../images/icon-01.svg';
import chart from '../../images/charts/chart01.svg';
import { Menu } from '@headlessui/react';

function DashboardCard01() {
  return (
    <div className="w-4/12 flex flex-col bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32"/>
          {/* Menu button */}
          <div className="relative inline-flex">
            <Menu>
              <Menu.Button className="text-slate-400 hover:text-slate-500">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="2" />
                <circle cx="10" cy="16" r="2" />
                <circle cx="22" cy="16" r="2" />
              </svg>
              </Menu.Button>
              <Menu.Items className="origin-top-right z-10 absolute top-full right-0 min-w-36 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1">
                <Menu.Item>
                  <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 1</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 2</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">Remove</Link>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Acme Plus</h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">$24,780</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div>
        </div>
      </div>
      <div className="grow">
        <img src={chart} className="p-5"/>
      </div>
    </div>
  );
}

export default DashboardCard01;
