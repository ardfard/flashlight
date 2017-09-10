exports.FB_URL   = process.env.FB_URL || 'https://<YOUR APP>.firebaseio.com';
exports.FB_REQ   = process.env.FB_REQ || 'search/request';
exports.FB_RES   = process.env.FB_RES || 'search/response';
exports.FB_SERVICEACCOUNT = process.env.FB_ACC || 'service-account.json';
exports.ES_HOST  = process.env.ES_HOST || 'localhost';
exports.ES_PORT  = process.env.ES_PORT || '9200';
exports.ES_USER  = process.env.ES_USER || null;
exports.ES_PASS  = process.env.ES_PASS || null;
exports.FB_PATHS = process.env.FB_PATHS
exports.CLEANUP_INTERVAL =
  process.env.NODE_ENV === 'production' ?
    3600 * 1000 /* once an hour */ :
    60 * 1000 /* once a minute */;
