
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {
 
  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },

  getProducts:function(){
      return productInventory.getProducts()
  },

  vendProduct: function(productId){
    var product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.id)
    return product;
  },

  releaseChange: function(){
    var currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return changeHandler.convertToChange(currentBalance);
  }

};
