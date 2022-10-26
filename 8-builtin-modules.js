//**********OS MODULE************* */

const os = require("os");
const { off } = require("process");

//info about current user

const user = os.userInfo();
console.log(user);

//method returns the system uptime in second
console.log(`the system up time is ${os.uptime} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
//**********OS MODULE************* */

//********* path *************** */
const path = require("path");

console.log(path.sep);
// console.log(path.join);

// console.log(path.basename(path.join()));

const absolute = path.resolve(__dirname);
console.log(absolute);

//********* path *************** */
