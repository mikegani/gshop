Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
});

Router.route('/', {name: "home"});
Router.route('checkout', {name: "checkout"});