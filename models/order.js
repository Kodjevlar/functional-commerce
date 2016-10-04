function Order() {
  this.items = [];
  this.coupons = [];
  this.subtotal = 0;
  this.total = 0;
}

Order.prototype.getTotal = function () {
  this.subtotal = this.getSubTotal();

  for (const coupon of this.coupons) {
    coupon.applyToOrder(this);
  }

  return this.total;
};

Order.prototype.getSubTotal = function () {
  return this.items.reduce(function (prev, curr) {
    return prev + curr.getPrice();
  }, 0);
};

Order.prototype.addCoupon = function (coupon) {
  this.coupons.push(coupon);
};

Order.prototype.addItem = function (item) {
  this.items.push(item);
};

module.exports = Order;
