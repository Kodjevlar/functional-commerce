var Coupon = require('./coupon');

function PercentCoupon() {
  Coupon.apply(this, arguments);
}

PercentCoupon.prototype = Object.create(Coupon.prototype);
PercentCoupon.prototype.applyToOrder = function (order) {
  order.total = order.getSubTotal() * ((100 - this.getValue()) * 0.01);
};

module.exports = PercentCoupon;
