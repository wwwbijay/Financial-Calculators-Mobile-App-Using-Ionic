"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2528:
/*!*********************************************!*\
  !*** ./src/app/home/cagr/cagr.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CagrComponent": () => (/* binding */ CagrComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cagr_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cagr.component.html?ngResource */ 817);
/* harmony import */ var _cagr_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cagr.component.scss?ngResource */ 7957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);





let CagrComponent = class CagrComponent {
    constructor() {
        this.cagrCalcForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            totalInvestment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            finalValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
        });
    }
    ngOnInit() { }
    cagrCalc() {
        let ti = parseInt(this.cagrCalcForm.value.totalInvestment);
        let fv = parseInt(this.cagrCalcForm.value.finalValue);
        let d = parseInt(this.cagrCalcForm.value.duration);
        this.cagr = ((Math.pow((fv / ti), 1 / d) - 1) * 100).toFixed(2);
        this.investedAmount = ti;
        this.maturityAmount = fv;
    }
};
CagrComponent.ctorParameters = () => [];
CagrComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cagr',
        template: _cagr_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cagr_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CagrComponent);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cagr_cagr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cagr/cagr.component */ 2528);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _lc_lc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lc/lc.component */ 505);
/* harmony import */ var _sip_sip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sip/sip.component */ 8404);
/* harmony import */ var _spl_spl_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spl/spl.component */ 4642);








const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,
    },
    {
        path: 'sip',
        component: _sip_sip_component__WEBPACK_IMPORTED_MODULE_3__.SipComponent,
    },
    {
        path: 'spl',
        component: _spl_spl_component__WEBPACK_IMPORTED_MODULE_4__.SplComponent,
    },
    {
        path: 'lc',
        component: _lc_lc_component__WEBPACK_IMPORTED_MODULE_2__.LcComponent,
    },
    {
        path: 'cagr',
        component: _cagr_cagr_component__WEBPACK_IMPORTED_MODULE_0__.CagrComponent,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _sip_sip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sip/sip.component */ 8404);
/* harmony import */ var _spl_spl_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spl/spl.component */ 4642);
/* harmony import */ var _lc_lc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lc/lc.component */ 505);
/* harmony import */ var _cagr_cagr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cagr/cagr.component */ 2528);











let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
            _sip_sip_component__WEBPACK_IMPORTED_MODULE_2__.SipComponent,
            _spl_spl_component__WEBPACK_IMPORTED_MODULE_3__.SplComponent,
            _lc_lc_component__WEBPACK_IMPORTED_MODULE_4__.LcComponent,
            _cagr_cagr_component__WEBPACK_IMPORTED_MODULE_5__.CagrComponent
        ]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 505:
/*!*****************************************!*\
  !*** ./src/app/home/lc/lc.component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LcComponent": () => (/* binding */ LcComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _lc_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lc.component.html?ngResource */ 8833);
/* harmony import */ var _lc_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lc.component.scss?ngResource */ 3747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);





let LcComponent = class LcComponent {
    constructor() {
        this.lcCalcForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            tenure: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
        });
    }
    ngOnInit() { }
    lcCalc() {
        let p = parseInt(this.lcCalcForm.value.amount);
        let r = parseInt(this.lcCalcForm.value.rate);
        let t = parseInt(this.lcCalcForm.value.tenure);
        this.matureAmount = (p * Math.pow((1 + r / 100), t)).toFixed(0);
        this.investedAmount = p;
        this.wealthGained = this.matureAmount - p;
        this.absReturn = (this.wealthGained * 100 / this.investedAmount).toFixed(0);
    }
};
LcComponent.ctorParameters = () => [];
LcComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-lc',
        template: _lc_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_lc_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LcComponent);



/***/ }),

/***/ 8404:
/*!*******************************************!*\
  !*** ./src/app/home/sip/sip.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SipComponent": () => (/* binding */ SipComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sip_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sip.component.html?ngResource */ 2893);
/* harmony import */ var _sip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sip.component.scss?ngResource */ 9194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);





let SipComponent = class SipComponent {
    constructor() {
        this.sipCalcForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            period: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('Monthly'),
            investment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            annualReturn: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            years: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
        });
    }
    ngOnInit() { }
    sipCalc() {
        let period = this.sipCalcForm.value.period;
        //period in months
        let period_in_year;
        switch (period) {
            case "Annually":
                period_in_year = 1;
                break;
            case "Semi-Annually":
                period_in_year = 2;
                break;
            case "Quarterly":
                period_in_year = 4;
                break;
            case "Monthly":
                period_in_year = 12;
                break;
        }
        //Amount invested through SIP.
        let p = parseInt(this.sipCalcForm.value.investment);
        let annualReturn = this.sipCalcForm.value.annualReturn;
        //Compounded rate of return.
        let i = parseInt(annualReturn) / (100 * period_in_year);
        let years = this.sipCalcForm.value.years;
        //Investment duration in months.
        let n = parseInt(years) * 12;
        console.log("p=" + p);
        console.log("i=" + i);
        console.log("n=" + n);
        let finalAmount = p * (Math.pow((1 + i), n) - 1) * ((1 + i) / i);
        this.investedAmount = (p * period_in_year * parseInt(years)).toFixed(0);
        this.finalAmount = finalAmount.toFixed(0);
        this.wealthGained = (this.finalAmount - this.investedAmount).toFixed(0);
    }
};
SipComponent.ctorParameters = () => [];
SipComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sip',
        template: _sip_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SipComponent);



/***/ }),

/***/ 4642:
/*!*******************************************!*\
  !*** ./src/app/home/spl/spl.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplComponent": () => (/* binding */ SplComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _spl_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spl.component.html?ngResource */ 8340);
/* harmony import */ var _spl_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spl.component.scss?ngResource */ 9351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);





let SplComponent = class SplComponent {
    constructor() {
        this.splCalcForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            purchaePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            sellPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
        });
    }
    ngOnInit() { }
    splCalc() {
        let pp = parseInt(this.splCalcForm.value.purchaePrice);
        let q = parseInt(this.splCalcForm.value.quantity);
        let sp = parseInt(this.splCalcForm.value.sellPrice);
        this.matureAmount = sp * q;
        this.investedAmount = pp * q;
        this.wealthGained = this.matureAmount - this.investedAmount;
        this.absReturn = this.wealthGained * 100 / this.investedAmount;
    }
};
SplComponent.ctorParameters = () => [];
SplComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-spl',
        template: _spl_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_spl_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SplComponent);



/***/ }),

/***/ 7957:
/*!**********************************************************!*\
  !*** ./src/app/home/cagr/cagr.component.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWdyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\n#dashboard-menus ion-icon {\n  display: block;\n}\nion-title {\n  position: relative;\n}\nion-title img {\n  max-width: 220px;\n}\n.card {\n  border: 1px solid #eee;\n  padding: 20px;\n  box-shadow: 0 0 22px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 0 22px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 0 22px 0px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  border-radius: 50%;\n  margin: 10px;\n  width: 170px;\n  height: 170px;\n  margin: 10px auto;\n}\n.card-item {\n  padding: 3px 22%;\n}\n.card-content {\n  padding: 5px 0;\n}\n.card-content p {\n  font-size: 0.9em;\n  color: #777;\n  margin: 0;\n}\n.card-content-title {\n  margin: 0 0 5px;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7QUFDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNKO0FBQ0U7RUFDRSxxQkFBQTtBQUNKO0FBRUE7RUFDRSxjQUFBO0FBQ0Y7QUFDQTtFQUNFLGtCQUFBO0FBRUY7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7QUFEQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0EsbURBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUlGO0FBRkE7RUFDRSxnQkFBQTtBQUtGO0FBSEE7RUFDRSxjQUFBO0FBTUY7QUFMRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFPSjtBQUpBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFPRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuI2Rhc2hib2FyZC1tZW51cyBpb24taWNvbntcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5pb24tdGl0bGV7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmlvbi10aXRsZSBpbWd7XHJcbiAgbWF4LXdpZHRoOiAyMjBweDtcclxufVxyXG4uY2FyZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIycHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAyMnB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMjJweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICBoZWlnaHQ6IDE3MHB4O1xyXG4gIG1hcmdpbjogIDEwcHggYXV0bztcclxufVxyXG4uY2FyZC1pdGVte1xyXG4gIHBhZGRpbmc6IDNweCAyMiU7XHJcbn1cclxuLmNhcmQtY29udGVudHtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICBwe1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG4uY2FyZC1jb250ZW50LXRpdGxle1xyXG4gIG1hcmdpbjogMCAwIDVweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn0iXX0= */";

/***/ }),

/***/ 3747:
/*!******************************************************!*\
  !*** ./src/app/home/lc/lc.component.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 9194:
/*!********************************************************!*\
  !*** ./src/app/home/sip/sip.component.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaXAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 9351:
/*!********************************************************!*\
  !*** ./src/app/home/spl/spl.component.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 817:
/*!**********************************************************!*\
  !*** ./src/app/home/cagr/cagr.component.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      CAGR\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-text class=\"intro\">\r\n    <p>\r\n      Compound annual growth rate, or CAGR, is the mean annual growth rate of an investment over a specified period of time longer than one year. It represents one of the most accurate ways to calculate and determine returns for individual assets, investment portfolios, and anything that can rise or fall in value over time.\r\n    </p>\r\n  </ion-text>\r\n  <div *ngIf=\"cagr > 0\" class=\"result\">\r\n    <ion-list-header>\r\n      <ion-label>Result</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>CAGR</ion-label> \r\n      <span class=\"result_entry\">{{cagr}} % </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Invested Amount</ion-label> \r\n      <span class=\"result_entry\">Rs. {{ investedAmount }} </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Sell Value</ion-label> \r\n      <span class=\"result_entry\">Rs. {{maturityAmount}} </span>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-label>Profit</ion-label> \r\n    <span class=\"result_entry\"> Rs. {{ maturityAmount - investedAmount }} </span>\r\n    </ion-item>\r\n  \r\n  </div>\r\n  <form (ngSubmit)=\"cagrCalc()\" [formGroup]=\"cagrCalcForm\">\r\n    <ion-item>\r\n      <ion-input placeholder=\"Total Investment\" type=\"number\" formControlName=\"totalInvestment\" name=\"totalInvestment\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input placeholder=\"Final Value\" type=\"number\" formControlName=\"finalValue\" name=\"finalValue\r\n      \"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"number\" placeholder=\"Duration of Investment\" formControlName=\"duration\" name=\"duration\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"cta-item\">\r\n      <ion-button type=\"submit\" expand=\"full\">Calculate</ion-button>\r\n    </div>\r\n  </form>\r\n \r\n</ion-content>";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <img src=\"./assets/logo.png\" >\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid id=\"dashboard-menus\" class=\"page\">\r\n    <ion-row>\r\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" >\r\n        <div class=\"card\" routerLink=\"/home/sip\">\r\n          <div class=\"card-item\">\r\n             <img src=\"./assets/calculator/1.png\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h3 class=\"card-content-title\">\r\n              SIP\r\n              </h3>\r\n            <!-- <p>Systematic Investment Plan</p> -->\r\n          </div>\r\n        </div><!--.card ends-->\r\n      </ion-col>\r\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\">\r\n        <div>\r\n          <div class=\"card\" routerLink=\"/home/spl\">\r\n            <div class=\"card-item\">\r\n              <img src=\"./assets/calculator/2.png\">\r\n             \r\n            </div>\r\n            <div class=\"card-content\">\r\n              <h3 class=\"card-content-title\">SPL</h3>\r\n              <!-- <p>Stock Profit & Loss</p> -->\r\n            </div>\r\n          </div><!--.card ends-->\r\n        </div>\r\n      </ion-col>\r\n    \r\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" >\r\n        <div class=\"card\">\r\n          <div class=\"card-item\" routerLink=\"/home/lc\">\r\n            <img src=\"./assets/calculator/3.png\">           \r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h3 class=\"card-content-title\">LC</h3>\r\n            <!-- <p>Lumpsum Calculator</p> -->\r\n          </div>\r\n        </div><!--.card ends-->\r\n      </ion-col>\r\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\">\r\n        <div>\r\n          <div class=\"card\" routerLink=\"/home/cagr\">\r\n            <div class=\"card-item\">\r\n              <img src=\"./assets/calculator/4.png\">\r\n             \r\n            </div>\r\n            <div class=\"card-content\">\r\n              <h3 class=\"card-content-title\">CAGR</h3>\r\n              <!-- <p>Compounded Annual Growth Rate</p> -->\r\n            </div>\r\n          </div><!--.card ends-->\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";

/***/ }),

/***/ 8833:
/*!******************************************************!*\
  !*** ./src/app/home/lc/lc.component.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Lumpsum Calculator\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-text class=\"intro\">\r\n    <p>\r\n      A lumpsum investment calculator helps estimate the returns* made by an investor on a lumpsum investment. Simply fill in the necessary details and the calculator will compute an approximation of the maturity value based on the data provided.\r\n    </p>\r\n  </ion-text>\r\n  <div *ngIf=\"matureAmount > 0\" class=\"result\">\r\n    <ion-list-header>\r\n      <ion-label>Result</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Mature Amount</ion-label> <span class=\"result_entry\">Rs. {{matureAmount}}</span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Invested Amount</ion-label> <span class=\"result_entry\">Rs. {{ investedAmount }}</span>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-label>Profit</ion-label> <span class=\"result_entry\">Rs. {{wealthGained}}</span>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label>Absulute Return</ion-label> <span class=\"result_entry\"> {{absReturn}}%</span>\r\n    </ion-item>\r\n  </div>\r\n  <form (ngSubmit)=\"lcCalc()\" [formGroup]=\"lcCalcForm\">\r\n    <ion-item>\r\n      <ion-input placeholder=\"Investment Amount *\" type=\"text\" formControlName=\"amount\" name=\"amount\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input placeholder=\"Expected rate of return (P.A) *\" type=\"text\" formControlName=\"rate\" name=\"rate\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Tenure (in years) *(Up to 50 years)\" formControlName=\"tenure\" name=\"tenure\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"cta-item\">\r\n      <ion-button type=\"submit\" expand=\"full\">Plan My Future Value</ion-button>\r\n    </div>\r\n  </form>\r\n \r\n</ion-content>";

/***/ }),

/***/ 2893:
/*!********************************************************!*\
  !*** ./src/app/home/sip/sip.component.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      SIP\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-text class=\"intro\">\r\n    <p>\r\n      SIP stands for a systematic investment plan. This is a system that allows investors to invest regularly in a scheme automatically or by themselves. \r\n    </p>\r\n  </ion-text>\r\n  <div *ngIf=\"finalAmount > 0\" class=\"result\">\r\n    <ion-list-header>\r\n      <ion-label>Result</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Maturity Amount</ion-label> <span class=\"result_entry\">Rs. {{finalAmount}}</span>\r\n      </ion-item>\r\n    <ion-item>\r\n      <ion-label>Invested Amount</ion-label> <span class=\"result_entry\">Rs. {{ investedAmount }}</span>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-label>Est. Return</ion-label> <span class=\"result_entry\">Rs. {{wealthGained}}</span>\r\n    </ion-item>\r\n    \r\n    \r\n  </div>\r\n\r\n  <form (ngSubmit)=\"sipCalc()\" [formGroup]=\"sipCalcForm\">\r\n    <ion-item>\r\n      <ion-select placeholder=\"Investment Period\"  formControlName=\"period\" #investmentPeriod >\r\n        <ion-select-option value=\"Annually\">Annually</ion-select-option>\r\n        <ion-select-option value=\"Semi-Annually\">Semi-Annually</ion-select-option>\r\n        <ion-select-option value=\"Quarterly\">Quarterly</ion-select-option>\r\n        <ion-select-option value=\"Monthly\">Monthly</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input placeholder=\"{{investmentPeriod.value}} Investment\" type=\"text\" formControlName=\"investment\" name=\"investment\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input placeholder=\"Expected Annual Returns (%)\" type=\"text\" formControlName=\"annualReturn\" name=\"annualReturn\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Years\" formControlName=\"years\" name=\"years\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"cta-item\">\r\n      <ion-button type=\"submit\" expand=\"full\">Calculate</ion-button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  \r\n\r\n \r\n</ion-content>\r\n\r\n\r\n";

/***/ }),

/***/ 8340:
/*!********************************************************!*\
  !*** ./src/app/home/spl/spl.component.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      SPL\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-text class=\"intro\">\r\n    <p>\r\n      SIP stands for a systematic investment plan. This is a system that allows investors to invest regularly in a scheme automatically or by themselves. \r\n    </p>\r\n  </ion-text>\r\n  <div *ngIf=\"matureAmount > 0\" class=\"result\">\r\n    <ion-list-header>\r\n      <ion-label>Result</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Mature Amount</ion-label> <span class=\"result_entry\">Rs. {{matureAmount}}</span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Invested Amount</ion-label> <span class=\"result_entry\">Rs. {{ investedAmount }}</span>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-label>Profit</ion-label> <span class=\"result_entry\">Rs. {{wealthGained}}</span>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label>Absulute Return</ion-label> <span class=\"result_entry\"> {{absReturn}}%</span>\r\n    </ion-item>\r\n  </div>\r\n  <form (ngSubmit)=\"splCalc()\" [formGroup]=\"splCalcForm\">\r\n    <ion-item>\r\n      <ion-input placeholder=\"Purchase Price\" type=\"text\" formControlName=\"purchaePrice\" name=\"purchaePrice\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input placeholder=\"Quantity\" type=\"text\" formControlName=\"quantity\" name=\"quantity\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Sell Price\" formControlName=\"sellPrice\" name=\"sellPrice\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"cta-item\">\r\n      <ion-button type=\"submit\" expand=\"full\">Calculate</ion-button>\r\n    </div>\r\n  </form>\r\n \r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map