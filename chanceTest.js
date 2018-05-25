
/// chance可以模拟生成md5、ip、email、url、time、卡号、hash等各种随机数
const Chance = require('chance');
var chance = new Chance();

console.log(chance.string());
console.log(chance.string());

console.log(chance.phone());
console.log(chance.phone());

console.log(chance.md5('1'));
console.log(chance.md5('1'));
console.log(chance.md5());
console.log(chance.md5());
console.log(chance.md5());
console.log(chance.md5());

console.log(chance.hash());
console.log(chance.hash({length: 24}));// 可以模拟mongo的id
console.log(chance.hash({length: 24}));
console.log(chance.hash({length: 24}));
console.log(chance.hash({casing: 'upper'}));

console.log(chance.email());
console.log(chance.email());

console.log('character:', chance.character(), chance.character(), chance.character(), chance.character());
console.log('character:', chance.character(), chance.character(), chance.character(), chance.character());
console.log('character:', chance.character(), chance.character(), chance.character(), chance.character());
console.log('character:', chance.character(), chance.character(), chance.character(), chance.character());
console.log('pool:', chance.character({ pool: 'abcde' }), chance.character({ pool: 'abcde' }), chance.character({ pool: 'abcde' }), chance.character({ pool: 'abcde' }));
console.log('pool:', chance.character({ pool: 'abcde' }), chance.character({ pool: 'abcde' }), chance.character({ pool: 'abcde' }), chance.character({ pool: 'abcde' }));
console.log('pool:', chance.character({ pool: 'abcde' }), chance.character({ pool: 'abcde' }), chance.character({ pool: 'abcde' }), chance.character({ pool: 'abcde' }));
console.log('alpha:', chance.character({ alpha: true }), chance.character({ alpha: true }), chance.character({ alpha: true }), chance.character({ alpha: true }));
console.log('alpha:', chance.character({ alpha: true }), chance.character({ alpha: true }), chance.character({ alpha: true }), chance.character({ alpha: true }));
console.log('alpha:', chance.character({ alpha: true }), chance.character({ alpha: true }), chance.character({ alpha: true }), chance.character({ alpha: true }));
console.log('casing:', chance.character({ casing: 'lower' }), chance.character({ casing: 'lower' }), chance.character({ casing: 'lower' }));
console.log('casing:', chance.character({ casing: 'lower' }), chance.character({ casing: 'lower' }), chance.character({ casing: 'lower' }));
console.log('symbols:', chance.character({ symbols: true }), chance.character({ symbols: true }), chance.character({ symbols: true }));
console.log('symbols:', chance.character({ symbols: true }), chance.character({ symbols: true }), chance.character({ symbols: true }));

