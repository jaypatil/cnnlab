"use strict";
var router_1 = require('@angular/router');
var menubar_component_1 = require('./menubar.component');
var dashboard_component_1 = require('./dashboard.component');
var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'menubar',
        component: menubar_component_1.MenubarComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map