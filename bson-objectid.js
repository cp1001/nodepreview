// 生成mongodb的id
var ObjectID = require("bson-objectid");
 
console.log(ObjectID());
console.log(ObjectID("54495ad94c934721ede76d90"));
console.log(ObjectID(1414093117));//time
console.log(ObjectID([ 84, 73, 90, 217, 76, 147, 71, 33, 237, 231, 109, 144 ]));
console.log(ObjectID(new Buffer([ 84, 73, 90, 217, 76, 147, 71, 33, 237, 231, 109, 144 ])));

console.log(`ObjectID.isValid:`);
console.log(ObjectID.isValid('a6c8354052e64f5e3ded82ba'));

console.log(`toHexString:`);
console.log(ObjectID().toHexString());
console.log(ObjectID().toHexString());
console.log(ObjectID().toHexString());
console.log(ObjectID().toHexString());
console.log(ObjectID(1527066407766));
console.log(ObjectID(1527066407766));
console.log(ObjectID(1527066407766).toHexString());

console.log(`generate：`);
console.log(ObjectID.generate());
console.log(ObjectID.generate());
console.log(ObjectID.generate(1527066407166));
console.log(ObjectID.generate(1527066407766));