import React from 'react';
import billingData13 from '../../data/BillingData13';
import DashboardCardGeneric from './DashboardCardGeneric';

function DashboardCard13() {
  return (
    <DashboardCardGeneric cardClassName="col-span-6" title="Income/Expenses">
      <div className="p-3">

        {/* Card content */}
        {/* "Today" group */}
        {billingData13.map((timeGroup) => (
          <div>
            <header className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2 flex justify-between">
              <span>{timeGroup.timestamp}</span>
              <span>Amount</span>
            </header>
            <ul className="my-1">
              {timeGroup.bills.map((item) => (
                <li className="flex px-2">
                  {item.type === 'expense' && (
                    <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
                      <svg className="w-9 h-9 fill-current text-rose-50" viewBox="0 0 36 36">
                        <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
                      </svg>
                    </div>
                  )}
                  {item.type === 'income' && (
                    <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
                      <svg className="w-9 h-9 fill-current text-green-50" viewBox="0 0 36 36">
                        <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                      </svg>
                    </div>
                  )}
                  {item.type === 'cancelled' && (
                    <div className="w-9 h-9 rounded-full shrink-0 bg-slate-200 my-2 mr-3">
                      <svg className="w-9 h-9 fill-current text-slate-400" viewBox="0 0 36 36">
                        <path d="M21.477 22.89l-8.368-8.367a6 6 0 008.367 8.367zm1.414-1.413a6 6 0 00-8.367-8.367l8.367 8.367zM18 26a8 8 0 110-16 8 8 0 010 16z" />
                      </svg>
                    </div>
                  )}
                  <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                    <div className="grow flex justify-between">
                      <div className="self-center"><a className="font-medium text-slate-800" href="#0">{item.name}</a> {item.description}</div>
                      <div className="shrink-0 self-start ml-2">
                        <span className={`font-medium ${item.type === 'income' ? 'text-green-500' : 'text-slate-800'} ${item.type === 'cancelled' && 'line-through'}`}>{item.amount}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              </ul>
          </div>
        ))}
      </div>
    </DashboardCardGeneric>
  );
}

export default DashboardCard13;
