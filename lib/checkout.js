//TODO: duplicate with helper on cart template.

function genOrderID()
{
	var order_id;
	if(Meteor.user()){
		var user_id = (Meteor.user()._id).substr(1,5);
		var random_id = (Math.floor(Math.random() * 1000)).toString();
		order_id =  user_id.concat(random_id);
	} else {
		// user not login. can't proceed checkout.
		order_id = "";
	}
	return order_id;
}

if (Meteor.isClient) {

 Template.checkout.helpers({
    orders: function(){
      return Session.get('carts');
    },
    orderId: function(event){
      return genOrderID();
    }
  });

 Template.checkout.events({

  });

}