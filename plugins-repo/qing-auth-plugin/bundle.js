System.register(['qing-workbench', '@angular/common', '@angular/core', '@angular/forms', '@ngxs/store', 'primeng/checkbox', 'primeng/progressbar', 'primeng/carousel'], function (exports) {
    'use strict';
    var USER_STORAGE_KEY, ContextService, WORKBENCH_PUZZLE_BLOCK, CommonModule, Injectable, Inject, Component, NgModule, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, Action, Selector, State, Select, Store, NgxsModule, CheckboxModule, ProgressBarModule, CarouselModule;
    return {
        setters: [function (module) {
            USER_STORAGE_KEY = module.USER_STORAGE_KEY;
            ContextService = module.ContextService;
            WORKBENCH_PUZZLE_BLOCK = module.WORKBENCH_PUZZLE_BLOCK;
        }, function (module) {
            CommonModule = module.CommonModule;
        }, function (module) {
            Injectable = module.Injectable;
            Inject = module.Inject;
            Component = module.Component;
            NgModule = module.NgModule;
        }, function (module) {
            FormGroup = module.FormGroup;
            FormControl = module.FormControl;
            Validators = module.Validators;
            FormsModule = module.FormsModule;
            ReactiveFormsModule = module.ReactiveFormsModule;
        }, function (module) {
            Action = module.Action;
            Selector = module.Selector;
            State = module.State;
            Select = module.Select;
            Store = module.Store;
            NgxsModule = module.NgxsModule;
        }, function (module) {
            CheckboxModule = module.CheckboxModule;
        }, function (module) {
            ProgressBarModule = module.ProgressBarModule;
        }, function (module) {
            CarouselModule = module.CarouselModule;
        }],
        execute: function () {

            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */

            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }

            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); }
            }

            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
            }

            function __awaiter(thisArg, _arguments, P, generator) {
                function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
                    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
                    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }

            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [op[0] & 2, t.value];
                        switch (op[0]) {
                            case 0: case 1: t = op; break;
                            case 4: _.label++; return { value: op[1], done: false };
                            case 5: _.label++; y = op[1]; op = [0]; continue;
                            case 7: op = _.ops.pop(); _.trys.pop(); continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                                if (t[2]) _.ops.pop();
                                _.trys.pop(); continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
                    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
                }
            }

            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            /* global Reflect, Promise */

            var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                return extendStatics(d, b);
            };

            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            function isFunction(x) {
                return typeof x === 'function';
            }

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            var _enable_super_gross_mode_that_will_cause_bad_things = false;
            var config = {
                Promise: undefined,
                set useDeprecatedSynchronousErrorHandling(value) {
                    if (value) {
                        var error = /*@__PURE__*/ new Error();
                        /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
                    }
                    _enable_super_gross_mode_that_will_cause_bad_things = value;
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return _enable_super_gross_mode_that_will_cause_bad_things;
                },
            };

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            function hostReportError(err) {
                setTimeout(function () { throw err; }, 0);
            }

            /** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
            var empty = {
                closed: true,
                next: function (value) { },
                error: function (err) {
                    if (config.useDeprecatedSynchronousErrorHandling) {
                        throw err;
                    }
                    else {
                        hostReportError(err);
                    }
                },
                complete: function () { }
            };

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            var isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            function isObject(x) {
                return x !== null && typeof x === 'object';
            }

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
                function UnsubscriptionErrorImpl(errors) {
                    Error.call(this);
                    this.message = errors ?
                        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
                    this.name = 'UnsubscriptionError';
                    this.errors = errors;
                    return this;
                }
                UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
                return UnsubscriptionErrorImpl;
            })();
            var UnsubscriptionError = UnsubscriptionErrorImpl;

            /** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
            var Subscription = /*@__PURE__*/ (function () {
                function Subscription(unsubscribe) {
                    this.closed = false;
                    this._parentOrParents = null;
                    this._subscriptions = null;
                    if (unsubscribe) {
                        this._ctorUnsubscribe = true;
                        this._unsubscribe = unsubscribe;
                    }
                }
                Subscription.prototype.unsubscribe = function () {
                    var errors;
                    if (this.closed) {
                        return;
                    }
                    var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
                    this.closed = true;
                    this._parentOrParents = null;
                    this._subscriptions = null;
                    if (_parentOrParents instanceof Subscription) {
                        _parentOrParents.remove(this);
                    }
                    else if (_parentOrParents !== null) {
                        for (var index = 0; index < _parentOrParents.length; ++index) {
                            var parent_1 = _parentOrParents[index];
                            parent_1.remove(this);
                        }
                    }
                    if (isFunction(_unsubscribe)) {
                        if (_ctorUnsubscribe) {
                            this._unsubscribe = undefined;
                        }
                        try {
                            _unsubscribe.call(this);
                        }
                        catch (e) {
                            errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
                        }
                    }
                    if (isArray(_subscriptions)) {
                        var index = -1;
                        var len = _subscriptions.length;
                        while (++index < len) {
                            var sub = _subscriptions[index];
                            if (isObject(sub)) {
                                try {
                                    sub.unsubscribe();
                                }
                                catch (e) {
                                    errors = errors || [];
                                    if (e instanceof UnsubscriptionError) {
                                        errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                                    }
                                    else {
                                        errors.push(e);
                                    }
                                }
                            }
                        }
                    }
                    if (errors) {
                        throw new UnsubscriptionError(errors);
                    }
                };
                Subscription.prototype.add = function (teardown) {
                    var subscription = teardown;
                    if (!teardown) {
                        return Subscription.EMPTY;
                    }
                    switch (typeof teardown) {
                        case 'function':
                            subscription = new Subscription(teardown);
                        case 'object':
                            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                                return subscription;
                            }
                            else if (this.closed) {
                                subscription.unsubscribe();
                                return subscription;
                            }
                            else if (!(subscription instanceof Subscription)) {
                                var tmp = subscription;
                                subscription = new Subscription();
                                subscription._subscriptions = [tmp];
                            }
                            break;
                        default: {
                            throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
                        }
                    }
                    var _parentOrParents = subscription._parentOrParents;
                    if (_parentOrParents === null) {
                        subscription._parentOrParents = this;
                    }
                    else if (_parentOrParents instanceof Subscription) {
                        if (_parentOrParents === this) {
                            return subscription;
                        }
                        subscription._parentOrParents = [_parentOrParents, this];
                    }
                    else if (_parentOrParents.indexOf(this) === -1) {
                        _parentOrParents.push(this);
                    }
                    else {
                        return subscription;
                    }
                    var subscriptions = this._subscriptions;
                    if (subscriptions === null) {
                        this._subscriptions = [subscription];
                    }
                    else {
                        subscriptions.push(subscription);
                    }
                    return subscription;
                };
                Subscription.prototype.remove = function (subscription) {
                    var subscriptions = this._subscriptions;
                    if (subscriptions) {
                        var subscriptionIndex = subscriptions.indexOf(subscription);
                        if (subscriptionIndex !== -1) {
                            subscriptions.splice(subscriptionIndex, 1);
                        }
                    }
                };
                Subscription.EMPTY = (function (empty) {
                    empty.closed = true;
                    return empty;
                }(new Subscription()));
                return Subscription;
            }());
            function flattenUnsubscriptionErrors(errors) {
                return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
            }

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            var rxSubscriber = /*@__PURE__*/ (function () {
                return typeof Symbol === 'function'
                    ? /*@__PURE__*/ Symbol('rxSubscriber')
                    : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
            })();

            /** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
            var Subscriber = /*@__PURE__*/ (function (_super) {
                __extends(Subscriber, _super);
                function Subscriber(destinationOrNext, error, complete) {
                    var _this = _super.call(this) || this;
                    _this.syncErrorValue = null;
                    _this.syncErrorThrown = false;
                    _this.syncErrorThrowable = false;
                    _this.isStopped = false;
                    switch (arguments.length) {
                        case 0:
                            _this.destination = empty;
                            break;
                        case 1:
                            if (!destinationOrNext) {
                                _this.destination = empty;
                                break;
                            }
                            if (typeof destinationOrNext === 'object') {
                                if (destinationOrNext instanceof Subscriber) {
                                    _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                                    _this.destination = destinationOrNext;
                                    destinationOrNext.add(_this);
                                }
                                else {
                                    _this.syncErrorThrowable = true;
                                    _this.destination = new SafeSubscriber(_this, destinationOrNext);
                                }
                                break;
                            }
                        default:
                            _this.syncErrorThrowable = true;
                            _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                            break;
                    }
                    return _this;
                }
                Subscriber.prototype[rxSubscriber] = function () { return this; };
                Subscriber.create = function (next, error, complete) {
                    var subscriber = new Subscriber(next, error, complete);
                    subscriber.syncErrorThrowable = false;
                    return subscriber;
                };
                Subscriber.prototype.next = function (value) {
                    if (!this.isStopped) {
                        this._next(value);
                    }
                };
                Subscriber.prototype.error = function (err) {
                    if (!this.isStopped) {
                        this.isStopped = true;
                        this._error(err);
                    }
                };
                Subscriber.prototype.complete = function () {
                    if (!this.isStopped) {
                        this.isStopped = true;
                        this._complete();
                    }
                };
                Subscriber.prototype.unsubscribe = function () {
                    if (this.closed) {
                        return;
                    }
                    this.isStopped = true;
                    _super.prototype.unsubscribe.call(this);
                };
                Subscriber.prototype._next = function (value) {
                    this.destination.next(value);
                };
                Subscriber.prototype._error = function (err) {
                    this.destination.error(err);
                    this.unsubscribe();
                };
                Subscriber.prototype._complete = function () {
                    this.destination.complete();
                    this.unsubscribe();
                };
                Subscriber.prototype._unsubscribeAndRecycle = function () {
                    var _parentOrParents = this._parentOrParents;
                    this._parentOrParents = null;
                    this.unsubscribe();
                    this.closed = false;
                    this.isStopped = false;
                    this._parentOrParents = _parentOrParents;
                    return this;
                };
                return Subscriber;
            }(Subscription));
            var SafeSubscriber = /*@__PURE__*/ (function (_super) {
                __extends(SafeSubscriber, _super);
                function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
                    var _this = _super.call(this) || this;
                    _this._parentSubscriber = _parentSubscriber;
                    var next;
                    var context = _this;
                    if (isFunction(observerOrNext)) {
                        next = observerOrNext;
                    }
                    else if (observerOrNext) {
                        next = observerOrNext.next;
                        error = observerOrNext.error;
                        complete = observerOrNext.complete;
                        if (observerOrNext !== empty) {
                            context = Object.create(observerOrNext);
                            if (isFunction(context.unsubscribe)) {
                                _this.add(context.unsubscribe.bind(context));
                            }
                            context.unsubscribe = _this.unsubscribe.bind(_this);
                        }
                    }
                    _this._context = context;
                    _this._next = next;
                    _this._error = error;
                    _this._complete = complete;
                    return _this;
                }
                SafeSubscriber.prototype.next = function (value) {
                    if (!this.isStopped && this._next) {
                        var _parentSubscriber = this._parentSubscriber;
                        if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                            this.__tryOrUnsub(this._next, value);
                        }
                        else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                            this.unsubscribe();
                        }
                    }
                };
                SafeSubscriber.prototype.error = function (err) {
                    if (!this.isStopped) {
                        var _parentSubscriber = this._parentSubscriber;
                        var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
                        if (this._error) {
                            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                                this.__tryOrUnsub(this._error, err);
                                this.unsubscribe();
                            }
                            else {
                                this.__tryOrSetError(_parentSubscriber, this._error, err);
                                this.unsubscribe();
                            }
                        }
                        else if (!_parentSubscriber.syncErrorThrowable) {
                            this.unsubscribe();
                            if (useDeprecatedSynchronousErrorHandling) {
                                throw err;
                            }
                            hostReportError(err);
                        }
                        else {
                            if (useDeprecatedSynchronousErrorHandling) {
                                _parentSubscriber.syncErrorValue = err;
                                _parentSubscriber.syncErrorThrown = true;
                            }
                            else {
                                hostReportError(err);
                            }
                            this.unsubscribe();
                        }
                    }
                };
                SafeSubscriber.prototype.complete = function () {
                    var _this = this;
                    if (!this.isStopped) {
                        var _parentSubscriber = this._parentSubscriber;
                        if (this._complete) {
                            var wrappedComplete = function () { return _this._complete.call(_this._context); };
                            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                                this.__tryOrUnsub(wrappedComplete);
                                this.unsubscribe();
                            }
                            else {
                                this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                                this.unsubscribe();
                            }
                        }
                        else {
                            this.unsubscribe();
                        }
                    }
                };
                SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
                    try {
                        fn.call(this._context, value);
                    }
                    catch (err) {
                        this.unsubscribe();
                        if (config.useDeprecatedSynchronousErrorHandling) {
                            throw err;
                        }
                        else {
                            hostReportError(err);
                        }
                    }
                };
                SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
                    if (!config.useDeprecatedSynchronousErrorHandling) {
                        throw new Error('bad call');
                    }
                    try {
                        fn.call(this._context, value);
                    }
                    catch (err) {
                        if (config.useDeprecatedSynchronousErrorHandling) {
                            parent.syncErrorValue = err;
                            parent.syncErrorThrown = true;
                            return true;
                        }
                        else {
                            hostReportError(err);
                            return true;
                        }
                    }
                    return false;
                };
                SafeSubscriber.prototype._unsubscribe = function () {
                    var _parentSubscriber = this._parentSubscriber;
                    this._context = null;
                    this._parentSubscriber = null;
                    _parentSubscriber.unsubscribe();
                };
                return SafeSubscriber;
            }(Subscriber));

            /** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
            function canReportError(observer) {
                while (observer) {
                    var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
                    if (closed_1 || isStopped) {
                        return false;
                    }
                    else if (destination && destination instanceof Subscriber) {
                        observer = destination;
                    }
                    else {
                        observer = null;
                    }
                }
                return true;
            }

            /** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
            function toSubscriber(nextOrObserver, error, complete) {
                if (nextOrObserver) {
                    if (nextOrObserver instanceof Subscriber) {
                        return nextOrObserver;
                    }
                    if (nextOrObserver[rxSubscriber]) {
                        return nextOrObserver[rxSubscriber]();
                    }
                }
                if (!nextOrObserver && !error && !complete) {
                    return new Subscriber(empty);
                }
                return new Subscriber(nextOrObserver, error, complete);
            }

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            function identity(x) {
                return x;
            }

            /** PURE_IMPORTS_START _identity PURE_IMPORTS_END */
            function pipeFromArray(fns) {
                if (fns.length === 0) {
                    return identity;
                }
                if (fns.length === 1) {
                    return fns[0];
                }
                return function piped(input) {
                    return fns.reduce(function (prev, fn) { return fn(prev); }, input);
                };
            }

            /** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
            var Observable = /*@__PURE__*/ (function () {
                function Observable(subscribe) {
                    this._isScalar = false;
                    if (subscribe) {
                        this._subscribe = subscribe;
                    }
                }
                Observable.prototype.lift = function (operator) {
                    var observable = new Observable();
                    observable.source = this;
                    observable.operator = operator;
                    return observable;
                };
                Observable.prototype.subscribe = function (observerOrNext, error, complete) {
                    var operator = this.operator;
                    var sink = toSubscriber(observerOrNext, error, complete);
                    if (operator) {
                        sink.add(operator.call(sink, this.source));
                    }
                    else {
                        sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                            this._subscribe(sink) :
                            this._trySubscribe(sink));
                    }
                    if (config.useDeprecatedSynchronousErrorHandling) {
                        if (sink.syncErrorThrowable) {
                            sink.syncErrorThrowable = false;
                            if (sink.syncErrorThrown) {
                                throw sink.syncErrorValue;
                            }
                        }
                    }
                    return sink;
                };
                Observable.prototype._trySubscribe = function (sink) {
                    try {
                        return this._subscribe(sink);
                    }
                    catch (err) {
                        if (config.useDeprecatedSynchronousErrorHandling) {
                            sink.syncErrorThrown = true;
                            sink.syncErrorValue = err;
                        }
                        if (canReportError(sink)) {
                            sink.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                };
                Observable.prototype.forEach = function (next, promiseCtor) {
                    var _this = this;
                    promiseCtor = getPromiseCtor(promiseCtor);
                    return new promiseCtor(function (resolve, reject) {
                        var subscription;
                        subscription = _this.subscribe(function (value) {
                            try {
                                next(value);
                            }
                            catch (err) {
                                reject(err);
                                if (subscription) {
                                    subscription.unsubscribe();
                                }
                            }
                        }, reject, resolve);
                    });
                };
                Observable.prototype._subscribe = function (subscriber) {
                    var source = this.source;
                    return source && source.subscribe(subscriber);
                };
                Observable.prototype[observable] = function () {
                    return this;
                };
                Observable.prototype.pipe = function () {
                    var operations = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        operations[_i] = arguments[_i];
                    }
                    if (operations.length === 0) {
                        return this;
                    }
                    return pipeFromArray(operations)(this);
                };
                Observable.prototype.toPromise = function (promiseCtor) {
                    var _this = this;
                    promiseCtor = getPromiseCtor(promiseCtor);
                    return new promiseCtor(function (resolve, reject) {
                        var value;
                        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
                    });
                };
                Observable.create = function (subscribe) {
                    return new Observable(subscribe);
                };
                return Observable;
            }());
            function getPromiseCtor(promiseCtor) {
                if (!promiseCtor) {
                    promiseCtor =  Promise;
                }
                if (!promiseCtor) {
                    throw new Error('no Promise impl found');
                }
                return promiseCtor;
            }

            var AuthActionsType;
            (function (AuthActionsType) {
                AuthActionsType["INIT_USER"] = "[AUTH] InitUser";
                AuthActionsType["EDITOR_SIGNIN"] = "[AUTH] EditorSignin";
                AuthActionsType["EDITOR_SIGNOUT"] = "[AUTH] EditorSignout";
            })(AuthActionsType || (AuthActionsType = {}));
            var AuthActions;
            (function (AuthActions) {
                var InitUser = /** @class */ (function () {
                    function InitUser() {
                    }
                    InitUser.type = AuthActionsType.INIT_USER;
                    return InitUser;
                }());
                AuthActions.InitUser = InitUser;
                var EditorSignin = /** @class */ (function () {
                    function EditorSignin(payload) {
                        this.payload = payload;
                    }
                    EditorSignin.type = AuthActionsType.EDITOR_SIGNIN;
                    return EditorSignin;
                }());
                AuthActions.EditorSignin = EditorSignin;
                var EditorSignout = /** @class */ (function () {
                    function EditorSignout() {
                    }
                    EditorSignout.type = AuthActionsType.EDITOR_SIGNOUT;
                    return EditorSignout;
                }());
                AuthActions.EditorSignout = EditorSignout;
            })(AuthActions || (AuthActions = {}));

            var AuthState = /** @class */ (function () {
                function AuthState(context) {
                    this.context = context;
                }
                AuthState.user = function (state) {
                    return state.user;
                };
                AuthState.prototype.ngxsOnInit = function (ctx) {
                    ctx.dispatch(new AuthActions.InitUser());
                };
                AuthState.prototype.InitUser = function (_a) {
                    var patchState = _a.patchState;
                    return __awaiter(this, void 0, void 0, function () {
                        var user;
                        return __generator(this, function (_b) {
                            user = this.context.getUser();
                            patchState({
                                user: user,
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                AuthState.prototype.editorSignin = function (_a, _b) {
                    var patchState = _a.patchState;
                    var payload = _b.payload;
                    return __awaiter(this, void 0, void 0, function () {
                        var account, password;
                        var _this = this;
                        return __generator(this, function (_c) {
                            account = payload.account, password = payload.password;
                            return [2 /*return*/, this.context.sdk.auth.editorSignin(account, password).then(function (res) {
                                    var data = res.data.data;
                                    patchState({
                                        user: data,
                                    });
                                    _this.context.setUser(data);
                                    _this.context.setInterceptors(data);
                                })];
                        });
                    });
                };
                AuthState.prototype.editorSignout = function () {
                    this.context.localStorage.remove(USER_STORAGE_KEY);
                };
                __decorate([
                    Action(AuthActions.InitUser),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Promise)
                ], AuthState.prototype, "InitUser", null);
                __decorate([
                    Action(AuthActions.EditorSignin),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object, AuthActions.EditorSignin]),
                    __metadata("design:returntype", Promise)
                ], AuthState.prototype, "editorSignin", null);
                __decorate([
                    Action(AuthActions.EditorSignout),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", []),
                    __metadata("design:returntype", void 0)
                ], AuthState.prototype, "editorSignout", null);
                __decorate([
                    Selector(),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", void 0)
                ], AuthState, "user", null);
                AuthState = __decorate([
                    State({
                        name: "AuthStore",
                        defaults: {
                            user: null,
                        },
                    }),
                    Injectable(),
                    __param(0, Inject(ContextService)),
                    __metadata("design:paramtypes", [ContextService])
                ], AuthState);
                return AuthState;
            }());

            var QingAuthComponent = exports('QingAuthComponent', /** @class */ (function () {
                function QingAuthComponent(store, context) {
                    this.store = store;
                    this.context = context;
                }
                QingAuthComponent.prototype.ngOnInit = function () {
                    this.context.initial();
                };
                QingAuthComponent.prototype.sign = function () {
                    this.context.showDialog("登录", "SigninComponent");
                };
                __decorate([
                    Select(AuthState.user),
                    __metadata("design:type", Observable)
                ], QingAuthComponent.prototype, "user$", void 0);
                QingAuthComponent = __decorate([
                    Component({
                        selector: "qing-auth",
                        template: "<div class=\"qing-auth-container\"><ng-container *ngIf=\"user$ | async as user; else login\"><p>{{ user.nickname }}</p></ng-container><ng-template #login><button (click)=\"sign()\">\u767B\u5F55</button></ng-template></div>",
                        styles: [".qing-auth-container{width:100%;padding:10px}.qing-auth-container p{width:100%;color:#fff;text-align:center}.qing-auth-container button{width:100%;height:30px;border:none;background-color:#4164e4;color:#fff;font-size:14px;line-height:14px}"],
                    }),
                    __param(1, Inject(ContextService)),
                    __metadata("design:paramtypes", [Store,
                        ContextService])
                ], QingAuthComponent);
                return QingAuthComponent;
            }()));

            var SigninComponent = /** @class */ (function () {
                function SigninComponent(store, context) {
                    this.store = store;
                    this.context = context;
                    this.isSubmitted = false;
                    this.introduces = [
                        {
                            title: "快速制作",
                            description: "快速制作h5小游戏",
                            image: "https://osd-alpha.tooqing.com/d40f8e9310c78e74eca40187a0e5d61a.png",
                        },
                        {
                            title: "素材丰富",
                            description: "积累行业十年丰富素材",
                            image: "https://osd-alpha.tooqing.com/JLC9R0szI_.png",
                        },
                    ];
                    this.signinForm = new FormGroup({
                        account: new FormControl("", Validators.required),
                        password: new FormControl("", Validators.required),
                    });
                }
                Object.defineProperty(SigninComponent.prototype, "account", {
                    get: function () {
                        return this.signinForm.get("account");
                    },
                    enumerable: false,
                    configurable: true
                });
                SigninComponent.prototype.isAccountInvalid = function () {
                    var account = this.signinForm.get("account");
                    return account.invalid && (account.dirty || account.touched);
                };
                Object.defineProperty(SigninComponent.prototype, "password", {
                    get: function () {
                        return this.signinForm.get("password");
                    },
                    enumerable: false,
                    configurable: true
                });
                SigninComponent.prototype.isPasswordInvalid = function () {
                    var password = this.signinForm.get("password");
                    return password.invalid && (password.dirty || password.touched);
                };
                SigninComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log("submit");
                    this.isSubmitted = true;
                    this.store
                        .dispatch(new AuthActions.EditorSignin(this.signinForm.value))
                        .subscribe(function () {
                        _this.isSubmitted = false;
                        _this.context.destroyDialog();
                    }, function (error) {
                        _this.isSubmitted = false;
                        var _a = error.response.data, code = _a.code; _a.msg;
                        if (code === 10101) {
                            _this.account.setErrors({
                                notFound: true,
                            });
                        }
                        if (code === 10102) {
                            _this.password.setErrors({
                                incorrect: true,
                            });
                        }
                    });
                };
                SigninComponent = __decorate([
                    Component({
                        selector: "signin",
                        template: "<div class=\"signin-container p-grid\"><div class=\"signin-introduces p-col-8\"><p-carousel [value]=\"introduces\"><ng-template let-introduce pTemplate=\"item\"><div class=\"signin-introduces-item\"><h2>{{ introduce.title }}</h2><p>{{ introduce.description }}</p><img src=\"{{ introduce.image }}\"></div></ng-template></p-carousel></div><div class=\"signin-form p-col-4\"><div class=\"sign-logo\"></div><h1>\u6B22\u8FCE\u4F7F\u7528\u56FE\u8F7B</h1><form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\"><ng-container *ngIf=\"isSubmitted\"><div class=\"signin-form-mask\"><p-progressBar mode=\"indeterminate\"></p-progressBar><div class=\"mask\"></div></div></ng-container><fieldset><label for=\"account\">\u7528\u6237\u540D</label> <input id=\"account\" [ngClass]=\"{ error: isAccountInvalid() }\" type=\"text\" formControlName=\"account\" placeholder=\"\u7528\u6237\u540D\"><div *ngIf=\"isAccountInvalid()\"><div *ngIf=\"account.errors.required\"><p class=\"error-message\">\u8BF7\u586B\u5199\u7528\u6237\u540D\uFF01</p></div><div *ngIf=\"account.errors.notFound\"><p class=\"error-message\">\u7528\u6237\u540D\u4E0D\u5B58\u5728\uFF01</p></div></div></fieldset><fieldset><label for=\"password\">\u5BC6&nbsp;&nbsp;\u7801</label> <input id=\"password\" [ngClass]=\"{ error: isPasswordInvalid() }\" type=\"password\" appPassword formControlName=\"password\" placeholder=\"\u5BC6\u7801\"><div *ngIf=\"isPasswordInvalid()\"><div *ngIf=\"password.errors.required\"><p class=\"error-message\">\u8BF7\u586B\u5199\u5BC6\u7801\uFF01</p></div><div *ngIf=\"password.errors.incorrect\"><p class=\"error-message\">\u5BC6\u7801\u4E0D\u6B63\u786E\uFF01</p></div></div></fieldset><button type=\"submit\" [disabled]=\"!signinForm.valid\">\u767B\u5F55</button></form><p-checkbox name=\"autoSignin\" value=\"30\u5929\u5185\u514D\u767B\u5F55\" [(ngModel)]=\"autoSignin\"></p-checkbox></div></div>",
                        styles: ["::ng-deep p-carousel{width:100%}::ng-deep p-progressbar .p-progressbar{height:6px;background:#fff}::ng-deep p-progressbar .p-progressbar .p-progressbar-value{background:#4164e4}.signin-container{margin:0;width:1000px;height:100%}.signin-container .signin-introduces{display:flex;align-items:center;justify-content:center;background-color:#f2f5fa}.signin-introduces-item{display:flex;flex-direction:column;align-items:center;justify-content:center}.signin-introduces-item h2{margin:10px 0;font-size:26px;font-weight:400;letter-spacing:3px}.signin-introduces-item p{margin:0 0 20px 0;color:#999;letter-spacing:1px}.signin-introduces-item img{width:500px;height:370px;border-radius:5px;object-fit:cover}.signin-form{padding:130px 20px 0}.signin-form h1{font-size:26px;margin-bottom:30px;letter-spacing:3px}.signin-form form{position:relative;width:100%;padding-top:5px}.signin-form form .signin-form-mask{position:absolute;top:-10px;width:100%;height:calc(100% + 10px);background-color:#fff;opacity:.5;z-index:10}.signin-form form>fieldset{display:flex;flex-direction:column;border:none;margin-bottom:15px}.signin-form form>fieldset label{font-size:16px;margin-bottom:8px}.signin-form form>fieldset input{width:100%;height:40px;padding-left:5px;border-radius:3px;font-size:16px;border:1px solid #e8e9eb;background-color:#fafbff}.signin-form form>fieldset input:focus{outline-color:#4164e4;border:none}.signin-form form>fieldset input.error{border-color:#dc3545}.signin-form form>fieldset p{margin-top:5px}.signin-form button[type=submit]{width:100%;height:40px;margin-top:15px;border:none;border-radius:5px;background-color:#4164e4;color:#fff;font-size:16px;cursor:pointer}.signin-form button[type=submit]:focus{outline:0;border:none}.signin-form button[type=submit]:disabled{background-color:#5569b3}"],
                    }),
                    __param(1, Inject(ContextService)),
                    __metadata("design:paramtypes", [Store,
                        ContextService])
                ], SigninComponent);
                return SigninComponent;
            }());

            var QingAuthPluginModule = exports('QingAuthPluginModule', /** @class */ (function () {
                function QingAuthPluginModule() {
                }
                QingAuthPluginModule = __decorate([
                    NgModule({
                        declarations: [QingAuthComponent, SigninComponent],
                        imports: [
                            CommonModule,
                            FormsModule,
                            ReactiveFormsModule,
                            CheckboxModule,
                            ProgressBarModule,
                            CarouselModule,
                            NgxsModule.forFeature([AuthState]),
                        ],
                        exports: [QingAuthComponent],
                        entryComponents: [QingAuthComponent, SigninComponent],
                        providers: [
                            {
                                provide: "QingAuthComponent",
                                useValue: QingAuthComponent,
                            },
                            {
                                provide: "SigninComponent",
                                useValue: SigninComponent,
                            },
                        ],
                    })
                ], QingAuthPluginModule);
                return QingAuthPluginModule;
            }()));

            var config$1 = exports('config', {
                name: "qing-auth-plugin",
                id: "qingAuth",
                entryComponent: "QingAuthComponent",
                components: ["QingAuthComponent", "SigninComponent"],
                moduleName: "QingAuthPluginModule",
                displayName: "登录插件",
                contributes: {
                    workbenchActivitybar: {
                        title: "登录插件",
                        icon: "qing qing-user",
                        command: function (context) {
                            context.eventBus.emit(config$1.events.OPEN_QING_AUTH);
                        },
                    },
                    workbenchExplorer: {
                        component: "QingAuthComponent",
                    },
                    workbenchStage: {
                        component: "SigninComponent",
                    },
                },
                events: {
                    OPEN_QING_AUTH: "open-qing-auth",
                },
            });
            var OPEN_SCENE = "open-scene";
            var renderSignin = function (context) {
                context.puzzle
                    .getPuzzleSlot(WORKBENCH_PUZZLE_BLOCK.WORKBENCH_STAGE)
                    .container.renderComponent("SigninComponent");
            };
            var active = exports('active', function (context) {
                context.puzzle
                    .getPuzzleSlot(WORKBENCH_PUZZLE_BLOCK.WORKBENCH_MENU)
                    .container.addMenu({
                    label: "打开游戏",
                    command: function () {
                        context.eventBus.emit(OPEN_SCENE);
                    },
                });
                context.eventBus.on(config$1.events.OPEN_QING_AUTH, function () {
                    context.puzzle
                        .getPuzzleSlot(WORKBENCH_PUZZLE_BLOCK.WORKBENCH_EXPLORER)
                        .container.renderComponent("QingAuthComponent");
                });
            });
            var deactive = exports('deactive', function (context) {
                context.eventBus.off(OPEN_SCENE, renderSignin);
            });

        }
    };
});
