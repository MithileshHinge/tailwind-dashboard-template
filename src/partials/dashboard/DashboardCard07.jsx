import React from 'react';
import tableData07 from '../../data/TableData07';
import DashboardCardGeneric from './DashboardCardGeneric';

function DashboardCard07() {
  return (
    <DashboardCardGeneric cardClassName="col-span-8" title="Top Channels">
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Source</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Visitors</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Revenues</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Sales</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Conversion</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {tableData07.body.map((row) => (
                <tr key={row.id}>
                  <td className="p-2">
                    <div className="flex items-center">
                      <img className="shrink-0 mr-3" src={row.source.logo} />
                      <div className="text-slate-800">{row.source.name}</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{row.visitors}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-green-500">{row.revenues}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{row.sales}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-sky-500">{row.conversion}</div>
                  </td>
                </tr>)
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardCardGeneric>
  );
}

export default DashboardCard07;
