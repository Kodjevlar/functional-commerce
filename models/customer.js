function Customer() {
  this.firstname = null;
  this.lastname = null;
  this.email = null;
  this.birth = Date.now();
}

Customer.prototype.present = function () {
  return `Hello my name is ${this.firstname} ${this.lastname}`;
}

module.exports = Customer;
