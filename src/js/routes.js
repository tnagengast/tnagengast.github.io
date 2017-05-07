import VueRouter from 'vue-router';

let routes =[
	{ path: '/', component: require('./views/Home') },
	{ path: '/about', component: require('./views/About') },
	{ path: '/projects/winewindow', component: require('./portfolio/WineWindow') },
	{ path: '/projects/bajka', component: require('./portfolio/Bajka') },
	{ path: '/projects/viporbit', component: require('./portfolio/VIPOrbit') },
	{ path: '/projects/couchsurfing', component: require('./portfolio/Couchsurfing') },
	{ path: '/projects/murph', component: require('./portfolio/Murph') }
];

export default new VueRouter({
	routes,
	saveScrollPosition: true,
	linkActiveClass: 'active'
});
