addSubDomain({
  description: 'Restaurant Website', // describe your project in this field
  domain: '1bt.uk', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'yummeg', // desired subdomain name
  owner: {
    repo: '<https://github.com/MazenMostafaGohar/yummeg',
    email: '<mizoiology@gmail.com>',
  },
  record: {
    NS: ['yummeg.onrender.com']
  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
