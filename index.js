var Order = require('./models/order');
var PercentCoupon = require('./models/percentcoupon');
var Coupon = require('./models/coupon');
var Item = require('./models/item');

var order = new Order();

var percentcoupon = new PercentCoupon('10% off!', 10);
var fixedcoupon = new Coupon('100$ off', 100);

var shirt = new Item();
shirt.name = 'A cool t-shirt';
shirt.price = 39.90;

order.addItem(shirt);
order.addItem(shirt);
order.addItem(shirt);
order.addItem(shirt);

order.addCoupon(percentcoupon);
order.addCoupon(fixedcoupon);

console.log('Grand total is ', order.getTotal());
console.log('Subtotal is ', order.getSubTotal());
