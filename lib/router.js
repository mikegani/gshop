Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
});

Router.route('/', {name: "home"});
Router.route('checkout', {name: "checkout"});
Router.route('/user/:_id', function(){
	var info = Meteor.users.findOne({_id: this.params._id});
	this.render('user', {data: info});
	},{
		name: 'user'
	});

Router.route('/orderhistory', {name: "orderhistory"});

Router.route('/order/:_id', function(){
	var info = OrderDB.findOne({_id: this.params._id});
	this.render('order', {data: info});
	},{
		name: 'order'
	});