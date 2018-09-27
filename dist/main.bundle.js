webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    \n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Crypto Manager</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['coins']\">Crypto <span class=\"sr-only\">(current)</span></a></li>\n      </ul>\n      <form class=\"navbar-form navbar-right\">\n        <div class=\"form-group\" *ngIf=\"currencies\">\n          <select [(ngModel)]=\"selectedCurrency\" name=\"selectedCurrency\" (change)=\"currencyChange()\" class=\"form-control\">\n              <option *ngFor=\"let currency of currencies\" [value]=\"currency\">{{currency}}</option>\n          </select>\n      </div>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Log in <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n\n  <router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_currency_service__ = __webpack_require__("../../../../../src/app/shared/services/currency.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(currencyService) {
        this.currencyService = currencyService;
        this.title = 'Crypto Manager';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currencyService.getCurrencies().subscribe(function (res) { return _this.currencies = res; });
    };
    AppComponent.prototype.currencyChange = function () {
        this.currencyService.setCurrency(this.selectedCurrency);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_currency_service__["a" /* CurrencyService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_auto_complete__ = __webpack_require__("../../../../ng2-auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appRoutes__ = __webpack_require__("../../../../../src/app/appRoutes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_coinmarketcap_service__ = __webpack_require__("../../../../../src/app/shared/services/coinmarketcap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_currency_service__ = __webpack_require__("../../../../../src/app/shared/services/currency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// router

// services



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__appRoutes__["b" /* routedComponents */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__appRoutes__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_auto_complete__["Ng2AutoCompleteModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__shared_services_coinmarketcap_service__["a" /* CoinMarketCapService */], __WEBPACK_IMPORTED_MODULE_8__shared_services_currency_service__["a" /* CurrencyService */], { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["HashLocationStrategy"] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/appRoutes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coins_coins_component__ = __webpack_require__("../../../../../src/app/coins/coins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coins_coin_component__ = __webpack_require__("../../../../../src/app/coins/coin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/coins', pathMatch: 'full' },
    { path: 'coins', component: __WEBPACK_IMPORTED_MODULE_2__coins_coins_component__["a" /* CoinsComponent */] },
    { path: 'coin/:id', component: __WEBPACK_IMPORTED_MODULE_3__coins_coin_component__["a" /* CoinComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__coins_coins_component__["a" /* CoinsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__coins_coin_component__["a" /* CoinComponent */]
];
//# sourceMappingURL=appRoutes.js.map

/***/ }),

/***/ "../../../../../src/app/coins/coin.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"search\">\n    {{search.name }} <span class=\"text-muted\">{{ search.symbol }}</span> \n    <br />\n    {{ search.price_converted | currency: currency :true:'1.2-2' }}\n    <span [class]=\"arrow(search.percent_change_24h)\"> </span>{{ search.percent_change_24h }}\n</div>\n\n<div *ngIf=\"coin\">\n        {{coin.name }} <span class=\"text-muted\">{{ coin.symbol }}</span> \n        <br />\n        {{ coin.price_converted | currency: currency :true:'1.2-2' }}\n        <span [class]=\"arrow(coin.percent_change_24h)\"> </span>{{ coin.percent_change_24h }}\n        <button (click)=\"goBack()\" class=\"btn btn-default\">Back</button>\n    </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/coins/coin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_coin__ = __webpack_require__("../../../../../src/app/shared/model/coin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_coinmarketcap_service__ = __webpack_require__("../../../../../src/app/shared/services/coinmarketcap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_currency_service__ = __webpack_require__("../../../../../src/app/shared/services/currency.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoinComponent = (function () {
    function CoinComponent(coinMarketService, currencyService, location, activatedRoute) {
        this.coinMarketService = coinMarketService;
        this.currencyService = currencyService;
        this.location = location;
        this.activatedRoute = activatedRoute;
    }
    CoinComponent.prototype.arrow = function (value) {
        if (value > 0) {
            return 'glyphicon glyphicon-arrow-up text-success';
        }
        return 'glyphicon glyphicon-arrow-down text-danger';
    };
    CoinComponent.prototype.goBack = function () {
        this.location.back();
    };
    CoinComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.search) {
            this.currencyService.currency.subscribe(function (curr) {
                _this.currency = curr.toLowerCase();
                _this.activatedRoute.params.subscribe(function (params) {
                    _this.coinMarketService.getCoin(params['id'], _this.currency)
                        .subscribe(function (res) {
                        var price = 'price_' + _this.currency;
                        _this.coin = res[0];
                        _this.coin.price_converted = res[0][price];
                    });
                });
            });
        }
    };
    return CoinComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_model_coin__["a" /* Coin */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_model_coin__["a" /* Coin */]) === "function" && _a || Object)
], CoinComponent.prototype, "search", void 0);
CoinComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-coin',
        template: __webpack_require__("../../../../../src/app/coins/coin.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_coinmarketcap_service__["a" /* CoinMarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_coinmarketcap_service__["a" /* CoinMarketCapService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_currency_service__["a" /* CurrencyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], CoinComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=coin.component.js.map

/***/ }),

/***/ "../../../../../src/app/coins/coins.component.html":
/***/ (function(module, exports) {

module.exports = "   \n    \n      \n        <div class=\"loading\" *ngIf=\"!loaded\">\n        </div>\n       \n       <div class=\"panel panel-default\">\n           <div class=\"panel-heading\">\n            <div *ngIf=\"coins\">\n                <span class=\"panel-title\"  title=\"Click to Search\"><i class=\" glyphicon glyphicon-search\"></i> Search</span>\n                <input ng2-auto-complete \n                [source]=\"coins\"\n                value-property-name=\"id\"\n                (ngModelChange)=\"valueChanged($event)\"\n                display-property-name=\"name\" [max-num-list]=\"10\"\n                [list-formatter]=\"autoCompleteFormatter\"\n                placeholder=\"enter text\" class=\"form-control\">\n                </div>\n                </div>\n\n                <div *ngIf=\"coinSearch\" class=\"panel-body\">\n                <app-coin [search]=\"coinSearch\"></app-coin>\n                \n           </div>\n       </div>\n    \n     \n    <div *ngIf=\"globalMarketCap\" class=\"row\">\n        <div class=\"col-sm-4\">\n               \n                     <label>Total Market Cap</label>  <span class=\"label label-default\">{{ globalMarketCap  | currency: selectedCurrency :true:'1.2-2' }}</span> \n       \n        </div>\n    </div>\n\n        <div  class=\"table-responsive\">\n            <table class=\"table table-condensed table-hover\">\n                <tr>\n                    <th class=\"visible-xs\">Name</th>\n                    <th class=\"hidden-xs\">Name </th>\n                    <th>Price <div class=\"pull-right\">\n                            <button class=\"btn btn-primary btn-sm\" (click)=\"refreshPrice()\">\n                                    <span class=\"glyphicon glyphicon-refresh\"></span></button>\n                    </div></th>\n                    <th>Conversion</th>\n                    <th class=\"hidden-xs\">1hr%</th>\n                    <th class=\"hidden-xs\">24hr%</th>\n                    <th class=\"hidden-xs\">Week%</th>\n                    <th class=\"hidden-xs\">Market Cap</th>\n                    <th>24h volume</th>\n                </tr>\n                <tr *ngFor=\"let coin of coins\">\n\n                    <td class=\"visible-xs\">\n                        <span class=\"badge\">{{ coin.rank}}</span>\n                        <a [routerLink]=\"['/coin',coin.id]\">{{ coin.symbol }}</a>\n                    </td>\n                    <td class=\"hidden-xs\">\n                        <span class=\"badge\">{{ coin.rank}}</span>\n                        <img src=\"https://files.coinmarketcap.com/static/widget/coins_legacy/16x16/{{ coin.id }}.png\">\n                        <a [routerLink]=\"['/coin',coin.id]\">{{ coin.name }}</a>\n                        \n                    </td>\n                    <td>{{ coin.price_converted | currency: selectedCurrency :true:'1.2-2'}} \n                        <br />=>\n                            <span *ngIf=\"coin.input\">{{ coin.input * coin.price_converted | currency: selectedCurrency:true:'1.2-2' }}</span>\n                            <span *ngIf=\"!coin.input\">{{ '0.00' | currency: selectedCurrency :true:'1.2-2' }} </span>\n                    </td>\n                    <td>\n                        <input style=\"max-width:150px;\" class=\"form-control\" [placeholder]=\"coin.symbol+ ' price'\" [(ngModel)]=\"coin.input\" />\n                        \n                    </td>\n                    <td class=\"hidden-xs\"><span [class]=\"movement(coin.percent_change_1h)\"></span> {{ coin.percent_change_1h }} </td>\n                    <td><span [class]=\"movement(coin.percent_change_24h)\"></span> {{ coin.percent_change_24h }} </td>\n                    <td class=\"hidden-xs\"><span [class]=\"movement(coin.percent_change_7d)\"></span> {{ coin.percent_change_7d }} </td>\n                    <td class=\"hidden-xs\">{{ coin.market_cap_converted | currency: selectedCurrency :true:'1.2-2'}} </td>\n                    <td>{{ coin['24h_volume_usd'] | currency: selectedCurrency :true:'1.2-2' }}</td>\n                    <!-- <td>\n                        <img class=\"sparkline\" alt=\"sparkline\" src=\"https://s2.coinmarketcap.com/generated/sparklines/{{coin.id}}.png\">\n                    </td> -->\n                </tr>\n            </table>\n        </div>\n    \n"

/***/ }),

/***/ "../../../../../src/app/coins/coins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_coinmarketcap_service__ = __webpack_require__("../../../../../src/app/shared/services/coinmarketcap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_currency_service__ = __webpack_require__("../../../../../src/app/shared/services/currency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoinsComponent = (function () {
    function CoinsComponent(coinMarketCapService, route, currencyService) {
        this.coinMarketCapService = coinMarketCapService;
        this.route = route;
        this.currencyService = currencyService;
    }
    CoinsComponent.prototype.getCrypto = function (val) {
        console.log('selected' + val);
    };
    CoinsComponent.prototype.autoCompleteFormatter = function (data) {
        return "" + data.name;
    };
    CoinsComponent.prototype.refreshPrice = function () {
        this.loaded = false;
        this.ngOnInit();
    };
    CoinsComponent.prototype.currencyChange = function () {
        this.coins = null;
        this.globalMarketCap = null;
        this.loaded = false;
        this.coinSearch = null;
        this.ngOnInit();
    };
    CoinsComponent.prototype.valueChanged = function (newVal) {
        this.coinSearch = newVal;
    };
    CoinsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaded = false;
        this.currencyService.currency.subscribe(function (val) {
            _this.selectedCurrency = val;
            _this.currencyService.loaded.subscribe(function (loaded) {
                _this.loaded = loaded;
            });
            _this.coinMarketCapService.getCoins(_this.selectedCurrency)
                .subscribe(function (res) {
                _this.coins = res;
                _this.coins.forEach(function (element) {
                    var index = res.indexOf(element);
                    element.price_converted = res[index]['price_' + _this.selectedCurrency.toLowerCase()];
                    element.market_cap_converted = res[index]['market_cap_' + _this.selectedCurrency.toLowerCase()];
                });
                _this.coinMarketCapService.getGlobalData(_this.selectedCurrency)
                    .subscribe(function (result) {
                    _this.globalMarketCap = result['total_market_cap_' + _this.selectedCurrency.toLocaleLowerCase()];
                });
                _this.loaded = true;
            });
        });
    };
    CoinsComponent.prototype.movement = function (value) {
        if (value > 0) {
            return 'glyphicon glyphicon-arrow-up text-success';
        }
        return 'glyphicon glyphicon-arrow-down text-danger';
    };
    return CoinsComponent;
}());
CoinsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-coins',
        template: __webpack_require__("../../../../../src/app/coins/coins.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_coinmarketcap_service__["a" /* CoinMarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_coinmarketcap_service__["a" /* CoinMarketCapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_currency_service__["a" /* CurrencyService */]) === "function" && _c || Object])
], CoinsComponent);

var _a, _b, _c;
//# sourceMappingURL=coins.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/model/coin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coin; });
var Coin = (function () {
    function Coin() {
    }
    return Coin;
}());

//# sourceMappingURL=coin.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/coinmarketcap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinMarketCapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoinMarketCapService = (function () {
    function CoinMarketCapService(http) {
        this.http = http;
        this.url = 'https://api.coinmarketcap.com/v1/';
    }
    CoinMarketCapService.prototype.getGlobalData = function (currency) {
        var urlExtension = 'global/?convert=' + currency;
        return this.http.get(this.url + urlExtension)
            .map(function (result) { return result.json(); });
    };
    CoinMarketCapService.prototype.getCoins = function (currency) {
        var urlExtension = 'ticker/?convert=' + currency + '&limit=100';
        return this.http.get(this.url + urlExtension)
            .map(function (result) { return result.json(); });
    };
    CoinMarketCapService.prototype.getCoin = function (id, currency) {
        var urlExtension = 'https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v1/ticker/' + id + '?convert=' + currency;
        return this.http.get(urlExtension)
            .map(function (result) { return result.json(); });
    };
    return CoinMarketCapService;
}());
CoinMarketCapService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CoinMarketCapService);

var _a;
//# sourceMappingURL=coinmarketcap.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/currency.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CurrencyService = (function () {
    function CurrencyService(http) {
        this.http = http;
        this.currencies = ['USD', 'GBP', 'EUR'];
        this.currency = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"]('usd');
        this.loaded = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    CurrencyService.prototype.getCurrencies = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.currencies);
    };
    CurrencyService.prototype.setCurrency = function (currency) {
        this.currency.next(currency);
    };
    CurrencyService.prototype.setLoaded = function () {
        this.loaded.next(true);
    };
    return CurrencyService;
}());
CurrencyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CurrencyService);

var _a;
//# sourceMappingURL=currency.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map