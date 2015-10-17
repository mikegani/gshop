Schemas = {};
Collections = {};

ProdDB = Collections.ProdDB = new Mongo.Collection('products');
if(ProdDB.find().count() == 0)
{ 
    ProdDB.insert({sku:"ip5", name:"iphone5",price:1000,qt:10});
    ProdDB.insert({sku:"ip5c", name:"iphone5c",price:1000,qt:10});
    ProdDB.insert({sku:"ip5s", name:"iphone5s",price:1000,qt:10});
    ProdDB.insert({sku:"ip6", name:"iphone6",price:1000,qt:10});
    ProdDB.insert({sku:"ip6p", name:"iphone6+",price:1000,qt:10});
}

//prod = prod_id, name, price, qt
// user = user_id, fn,ln, email, phone, address

OrderDB = Collections.OrderDB = new Mongo.Collection('orders');
TestDB = Collections.TestDB = new Mongo.Collection('test');
// order = order_id, user_id, [orders], address, [payment]
//cart session = [orders] @ {prod}, amount
// src = array = [{json Object}, {a:b,c:d}, {a:b,c:d}]


if (Meteor.isClient) {

Template.registerHelper("Collections", Collections);
Template.registerHelper("Schemas", Schemas);

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

  Template.layout.events({
    'click .home': function(event){
      return Session.set('carts', []);
    }
  });

  Accounts.ui.config({
    passwordSignupFields: "EMAIL_ONLY"
  });
}