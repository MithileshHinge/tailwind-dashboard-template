import React from 'react';
import activityData12 from '../../data/ActivityData12';
import DashboardCardGeneric from './DashboardCardGeneric';

function getActivityIcon(activity) {
  switch (activity.type) {
    case 'post-mentioned':
      return (
        <div className="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
          <svg className="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36">
            <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
          </svg>
        </div>
      );
    case 'post-removed':
      return (
        <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
          <svg className="w-9 h-9 fill-current text-rose-50" viewBox="0 0 36 36">
            <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
          </svg>    
        </div>
      );
    case 'post-published':
      return (
        <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
          <svg className="w-9 h-9 fill-current text-green-50" viewBox="0 0 36 36">
            <path d="M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z" />
          </svg>
        </div>
      );
    case 'newsletter-subs':
      return (
        <div className="w-9 h-9 rounded-full shrink-0 bg-sky-500 my-2 mr-3">
          <svg className="w-9 h-9 fill-current text-sky-50" viewBox="0 0 36 36">
            <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z" />
          </svg>  
        </div>
      );
    case 'post-suspended':
      return (
        <div className="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
          <svg className="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36">
            <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
          </svg>
        </div>
      );
    default:
      return;
  }
}

function getActivityText(activity) {
  switch (activity.type) {
    case 'post-mentioned':
      return (
        <span><a className="font-medium text-slate-800 hover:text-slate-900" href="#0">{activity.data.by}</a> mentioned <a className="font-medium text-slate-800" href="#0">{activity.data.to}</a> in a new post</span>
      );
    case 'post-removed':
      return (
        <span>The post <a className="font-medium text-slate-800" href="#0">{activity.data.postName}</a> was removed by <a className="font-medium text-slate-800 hover:text-slate-900" href="#0">{activity.data.by}</a></span>
      );
    case 'post-published':
      return (
        <span><a className="font-medium text-slate-800 hover:text-slate-900" href="#0">{activity.data.by}</a> published a new <a className="font-medium text-slate-800" href="#0">post</a></span>
      );
    case 'newsletter-subs':
      return (
        <span><a className="font-medium text-slate-800 hover:text-slate-900" href="#0">{activity.data.subscribers}</a> users have subscribed to <a className="font-medium text-slate-800" href="#0">{activity.data.newsletterName}</a></span>
      );
    case 'post-suspended':
      return (
        <span>The post <a className="font-medium text-slate-800" href="#0">{activity.data.postName}</a> was suspended by <a className="font-medium text-slate-800 hover:text-slate-900" href="#0">{activity.data.by}</a></span>
      );
    default:
      return;
  }
}

function DashboardCard12() {
  return (
    <DashboardCardGeneric cardClassName="col-span-6" title="Recent Activity">
      <div className="p-3">

        {/* Card content */}
        {activityData12.map((timeGroup) => (
          <div>
            <header className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2">{timeGroup.timestamp}</header>
            <ul className="my-1">
              {timeGroup.activity.map((activity) => (
                <li className="flex px-2">
                  {getActivityIcon(activity)}
                  <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                    <div className="grow flex justify-between">
                      <div className="self-center">{getActivityText(activity)}</div>
                      <div className="shrink-0 self-end ml-2">
                        <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a>
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

export default DashboardCard12;
