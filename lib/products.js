
if (Meteor.isClient) {

  Template.Products.helpers({
    products: function(){
      return ProdDB.find({});
    }
  });

  Template.Products.events({
    'click .additem': function () {
      var carts = Session.get('carts');
      var prod, new_qt;
      // TODO: differentiate between wrong array or new items
      var id = findId(carts, "_id", this._id);
      if(id >= 0) {
        // item already in cart, update qt in cart session
        prod = carts[id];
        if(prod.hasOwnProperty("qt")){
          // TODO: int - string conversion on cart ?? Is there a better way???
          new_qt = parseInt(prod.qt) + 1;
          prod.qt = new_qt.toString();
        } 
        // TODO: couldn't be! this is a hack
        else {
          prod["qt"] = 1;
        }
       } else {
        // push new item in cart.
        prod = {
          "_id": this._id,
          "name": this.name,
          "price": this.price,
          "qt": 1
        };

        carts.push(prod);
      }
      Session.set('carts', carts);
    }
  });
}