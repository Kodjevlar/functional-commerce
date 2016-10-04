function Coupon(name, value = 0) {
  this.name = name;
  this.value = value;
}

Coupon.prototype.applyToOrder = function (order) {
  order.total = order.getSubTotal() - this.getValue();
};

Coupon.prototype.getValue = function () {
  return this.value;
};

module.exports = Coupon;
