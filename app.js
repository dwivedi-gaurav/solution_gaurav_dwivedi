const clicks = require('./clicks');
const utils = require('./utils/utils');

let ipCount = utils.countIPs(clicks);

let output = utils.generateOutput(clicks,ipCount);

console.log(output);


