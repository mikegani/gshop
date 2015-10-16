if (Meteor.isClient) {

  Template.orderhistory.helpers({
 		orderlist: function(){
 			return OrderDB.find();
 		}
  });
}