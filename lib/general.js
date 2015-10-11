ProdDB = new Mongo.Collection('products');
//prod = prod_id, name, price, qt
// user = user_id, fn,ln, email, phone, address

OrderDB = new Mongo.Collection('orders');
// order = order_id, user_id, [orders], address, [payment]
//cart session = [orders] @ {prod}, amount
// src = array = [{json Object}, {a:b,c:d}, {a:b,c:d}]


if (Meteor.isClient) {

  numeral.language('id', {
      delimiters: {
          thousands: ',',
          decimal: '.'
      },
      abbreviations: {
          thousand: 'ribu',
          million: 'juta',
          billion: 'milyar',
          trillion: 'trilliun'
      },
      currency: {
          symbol: 'Rp. '
      }
  });

  numeral.language('id');

  Handlebars.registerHelper('rp', function(n) {
    return numeral(n).format('$ 0,0[.]00');
  });
  Handlebars.registerHelper('calc', function(a,b) {
    return a*b;
  });

  Session.setDefault('carts', []);

  //TODO: duplicate with helper on cart template.
  Template.checkout.helpers({
    orders: function(){
      return Session.get('carts');
    },
    orderId: function(){
      return "TGS" + (Math.floor(Math.random() * 1000)).toString();
    }
  });

  Template.layout.events({
    'click .home': function(event){
      return Session.set('carts', []);
    }
  });
}