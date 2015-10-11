
if (Meteor.isClient) {

  Template.Cart.helpers({
    count: function(){
      var total = 0;
      var carts = Session.get('carts');
      var js;
      for(var index=0; index<carts.length; index++){
        js = carts[index];
        total += parseInt(js.qt);
      }
      return parseInt(total);
    },
    // TODO: check price. is there any price update??
    amount: function(){
      var total = 0;
      var carts = Session.get('carts');
      var js;
      for(var index=0; index<carts.length; index++){
        js = carts[index];
        total += parseInt(js.price) * parseInt(js.qt);
      }
      return numeral(total).format('$ 0,0[.]00'); 
    }
  });

  Template.Cart.events({
    'click .cart': function(event){
      event.preventDefault();
      $(".orders").toggle();
    }
  });

  Template.orders.helpers({
    orders: function(){
      return Session.get('carts');
    }
  });

  Template.orders.events({
    'change .qt': function(event){
      var carts = Session.get('carts');
      var id = findId(carts, "_id", this._id);
      if(id >= 0){
        var prod = carts[id];
        if(prod.hasOwnProperty("qt")){
          prod.qt = event.target.value;
        } 
        // TODO: couldn't be! this is a hack
        else {
          prod["qt"] = 1;
        }
      }else{
        //shouldn't be here
      }
      Session.set('carts', carts);
    },
    'click .remove': function(){
      var carts = Session.get('carts');
      var id = findId(carts, "_id", this._id);
      if(id >= 0){
        // TODO: notify item has been removed
        var removeditem = carts.splice(id,1);
        return Session.set('carts', carts); 
      }else{
        //shouldn't be here
      }
    }
  });
}