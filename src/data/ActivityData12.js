const activityData12 = [{
  timestamp: 'Today',
  activity: [{
    type: 'post-mentioned',
    data: {
      by: 'Nick Mark',
      to: 'Sara Smith', 
    },
  }, {
    type: 'post-removed',
    data: {
      by: 'Nick Mark',
      postName: 'Post Name',
    },
  }, {
    type: 'post-published',
    data: {
      by: 'Patrick Sullivan',
    },
  }],
}, {
  timestamp: 'Yesterday',
  activity: [{
    type: 'newsletter-subs',
    data: {
      newsletterName: 'Newsletter #1',
      subscribers: '240+',
    },
  }, {
    type: 'post-suspended',
    data: {
      by: 'Nick Mark',
      postName: 'Post Name',
    },
  }],
}];

export default activityData12;
