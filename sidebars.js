module.exports = {
  docs: [
    'introduction/getting-started',
    'prd/overview',
    {
      type: 'category',
      label: '概念介绍',
      link: {
        type: 'generated-index',
      },
      items: [{
        type: 'autogenerated',
        dirName: 'prd/concepts',
      }],
    },
    {
      type: 'category',
      label: '用户',
      link: {
        type: 'generated-index',
      },
      items: [{
        type: 'autogenerated',
        dirName: 'prd/user',
      }],
    },
    {
      type: 'category',
      label: '蜂巢',
      link: {
        type: 'generated-index',
      },
      items: [{
        type: 'autogenerated',
        dirName: 'prd/hive',
      }],
    },
    'prd/containers',
    'prd/pass',
    'prd/frontpage',
  ], 
};
