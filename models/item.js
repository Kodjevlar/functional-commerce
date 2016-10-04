function Item() {
  this.name = null;
  this.price = 0;
}

Item.prototype.getPrice = function () {
  return this.price;
};

module.exports = Item;
