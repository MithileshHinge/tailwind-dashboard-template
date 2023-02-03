import React from 'react';
import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

function DashboardCard10() {
  return (
    <div className="w-6/12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Customers</h2>
      </header>
      <div className="px-3 pt-3 pb-2">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Spent</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Country</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 mr-3">
                      <img className="rounded-full" src={Image01} width="36" height="36"/>
                    </div>
                    <div className="font-medium text-slate-800">Alex Shatov</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">alexshatov@gmail.com</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-green-500">$2,890.66</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">🇺🇸</div>
                </td>
              </tr>
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 mr-3">
                      <img className="rounded-full" src={Image02} width="36" height="36"/>
                    </div>
                    <div className="font-medium text-slate-800">Philip Harbach</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">philip.h@gmail.com</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-green-500">$2,767.04</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">🇩🇪</div>
                </td>
              </tr>
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 mr-3">
                      <img className="rounded-full" src={Image03} width="36" height="36"/>
                    </div>
                    <div className="font-medium text-slate-800">Mirko Fisuk</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">mirkofisuk@gmail.com</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-green-500">$2,996.00</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">🇫🇷</div>
                </td>
              </tr>
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 mr-3">
                      <img className="rounded-full" src={Image04} width="36" height="36"/>
                    </div>
                    <div className="font-medium text-slate-800">Olga Semklo</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">olga.s@cool.design</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-green-500">$2,890.66</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">🇮🇹</div>
                </td>
              </tr>
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 mr-3">
                      <img className="rounded-full" src={Image05} width="36" height="36"/>
                    </div>
                    <div className="font-medium text-slate-800">Burak Long</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">longburak@gmail.com</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-green-500">$1,890.66</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">🇬🇧</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard10;
