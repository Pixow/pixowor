System.register(['qing-workbench', '@angular/common', '@angular/core', '@angular/forms', '@ngxs/store', 'primeng/accordion', 'primeng/menu'], function (exports) {
    'use strict';
    var ContextService, Game, WORKBENCH_PUZZLE_BLOCK, CommonModule, Injectable, Inject, Component, Input, NgModule, FormsModule, ReactiveFormsModule, Action, Selector, State, Select, Store, NgxsModule, AccordionModule, MenuModule;
    return {
        setters: [function (module) {
            ContextService = module.ContextService;
            Game = module.Game;
            WORKBENCH_PUZZLE_BLOCK = module.WORKBENCH_PUZZLE_BLOCK;
        }, function (module) {
            CommonModule = module.CommonModule;
        }, function (module) {
            Injectable = module.Injectable;
            Inject = module.Inject;
            Component = module.Component;
            Input = module.Input;
            NgModule = module.NgModule;
        }, function (module) {
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
            AccordionModule = module.AccordionModule;
        }, function (module) {
            MenuModule = module.MenuModule;
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

            var GameActionsType;
            (function (GameActionsType) {
                GameActionsType["LIST_TEMPLATE_GAMES"] = "list_template_games";
                GameActionsType["LIST_MY_GAMES"] = "list_my_games";
            })(GameActionsType || (GameActionsType = {}));
            var GameActions;
            (function (GameActions) {
                var ListTemplateGames = /** @class */ (function () {
                    function ListTemplateGames() {
                    }
                    ListTemplateGames.type = GameActionsType.LIST_TEMPLATE_GAMES;
                    return ListTemplateGames;
                }());
                GameActions.ListTemplateGames = ListTemplateGames;
                var ListMyGames = /** @class */ (function () {
                    function ListMyGames(pagination) {
                        if (pagination === void 0) { pagination = {
                            page: 1,
                            pageSize: 20,
                        }; }
                        this.pagination = pagination;
                    }
                    ListMyGames.type = GameActionsType.LIST_MY_GAMES;
                    return ListMyGames;
                }());
                GameActions.ListMyGames = ListMyGames;
            })(GameActions || (GameActions = {}));

            var TransformationType;
            (function (TransformationType) {
                TransformationType[TransformationType["PLAIN_TO_CLASS"] = 0] = "PLAIN_TO_CLASS";
                TransformationType[TransformationType["CLASS_TO_PLAIN"] = 1] = "CLASS_TO_PLAIN";
                TransformationType[TransformationType["CLASS_TO_CLASS"] = 2] = "CLASS_TO_CLASS";
            })(TransformationType || (TransformationType = {}));

            /**
             * Storage all library metadata.
             */
            var MetadataStorage = /** @class */ (function () {
                function MetadataStorage() {
                    // -------------------------------------------------------------------------
                    // Properties
                    // -------------------------------------------------------------------------
                    this._typeMetadatas = new Map();
                    this._transformMetadatas = new Map();
                    this._exposeMetadatas = new Map();
                    this._excludeMetadatas = new Map();
                    this._ancestorsMap = new Map();
                }
                // -------------------------------------------------------------------------
                // Adder Methods
                // -------------------------------------------------------------------------
                MetadataStorage.prototype.addTypeMetadata = function (metadata) {
                    if (!this._typeMetadatas.has(metadata.target)) {
                        this._typeMetadatas.set(metadata.target, new Map());
                    }
                    this._typeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
                };
                MetadataStorage.prototype.addTransformMetadata = function (metadata) {
                    if (!this._transformMetadatas.has(metadata.target)) {
                        this._transformMetadatas.set(metadata.target, new Map());
                    }
                    if (!this._transformMetadatas.get(metadata.target).has(metadata.propertyName)) {
                        this._transformMetadatas.get(metadata.target).set(metadata.propertyName, []);
                    }
                    this._transformMetadatas.get(metadata.target).get(metadata.propertyName).push(metadata);
                };
                MetadataStorage.prototype.addExposeMetadata = function (metadata) {
                    if (!this._exposeMetadatas.has(metadata.target)) {
                        this._exposeMetadatas.set(metadata.target, new Map());
                    }
                    this._exposeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
                };
                MetadataStorage.prototype.addExcludeMetadata = function (metadata) {
                    if (!this._excludeMetadatas.has(metadata.target)) {
                        this._excludeMetadatas.set(metadata.target, new Map());
                    }
                    this._excludeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
                };
                // -------------------------------------------------------------------------
                // Public Methods
                // -------------------------------------------------------------------------
                MetadataStorage.prototype.findTransformMetadatas = function (target, propertyName, transformationType) {
                    return this.findMetadatas(this._transformMetadatas, target, propertyName).filter(function (metadata) {
                        if (!metadata.options)
                            return true;
                        if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
                            return true;
                        if (metadata.options.toClassOnly === true) {
                            return (transformationType === TransformationType.CLASS_TO_CLASS ||
                                transformationType === TransformationType.PLAIN_TO_CLASS);
                        }
                        if (metadata.options.toPlainOnly === true) {
                            return transformationType === TransformationType.CLASS_TO_PLAIN;
                        }
                        return true;
                    });
                };
                MetadataStorage.prototype.findExcludeMetadata = function (target, propertyName) {
                    return this.findMetadata(this._excludeMetadatas, target, propertyName);
                };
                MetadataStorage.prototype.findExposeMetadata = function (target, propertyName) {
                    return this.findMetadata(this._exposeMetadatas, target, propertyName);
                };
                MetadataStorage.prototype.findExposeMetadataByCustomName = function (target, name) {
                    return this.getExposedMetadatas(target).find(function (metadata) {
                        return metadata.options && metadata.options.name === name;
                    });
                };
                MetadataStorage.prototype.findTypeMetadata = function (target, propertyName) {
                    return this.findMetadata(this._typeMetadatas, target, propertyName);
                };
                MetadataStorage.prototype.getStrategy = function (target) {
                    var excludeMap = this._excludeMetadatas.get(target);
                    var exclude = excludeMap && excludeMap.get(undefined);
                    var exposeMap = this._exposeMetadatas.get(target);
                    var expose = exposeMap && exposeMap.get(undefined);
                    if ((exclude && expose) || (!exclude && !expose))
                        return 'none';
                    return exclude ? 'excludeAll' : 'exposeAll';
                };
                MetadataStorage.prototype.getExposedMetadatas = function (target) {
                    return this.getMetadata(this._exposeMetadatas, target);
                };
                MetadataStorage.prototype.getExcludedMetadatas = function (target) {
                    return this.getMetadata(this._excludeMetadatas, target);
                };
                MetadataStorage.prototype.getExposedProperties = function (target, transformationType) {
                    return this.getExposedMetadatas(target)
                        .filter(function (metadata) {
                        if (!metadata.options)
                            return true;
                        if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
                            return true;
                        if (metadata.options.toClassOnly === true) {
                            return (transformationType === TransformationType.CLASS_TO_CLASS ||
                                transformationType === TransformationType.PLAIN_TO_CLASS);
                        }
                        if (metadata.options.toPlainOnly === true) {
                            return transformationType === TransformationType.CLASS_TO_PLAIN;
                        }
                        return true;
                    })
                        .map(function (metadata) { return metadata.propertyName; });
                };
                MetadataStorage.prototype.getExcludedProperties = function (target, transformationType) {
                    return this.getExcludedMetadatas(target)
                        .filter(function (metadata) {
                        if (!metadata.options)
                            return true;
                        if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
                            return true;
                        if (metadata.options.toClassOnly === true) {
                            return (transformationType === TransformationType.CLASS_TO_CLASS ||
                                transformationType === TransformationType.PLAIN_TO_CLASS);
                        }
                        if (metadata.options.toPlainOnly === true) {
                            return transformationType === TransformationType.CLASS_TO_PLAIN;
                        }
                        return true;
                    })
                        .map(function (metadata) { return metadata.propertyName; });
                };
                MetadataStorage.prototype.clear = function () {
                    this._typeMetadatas.clear();
                    this._exposeMetadatas.clear();
                    this._excludeMetadatas.clear();
                    this._ancestorsMap.clear();
                };
                // -------------------------------------------------------------------------
                // Private Methods
                // -------------------------------------------------------------------------
                MetadataStorage.prototype.getMetadata = function (metadatas, target) {
                    var metadataFromTargetMap = metadatas.get(target);
                    var metadataFromTarget;
                    if (metadataFromTargetMap) {
                        metadataFromTarget = Array.from(metadataFromTargetMap.values()).filter(function (meta) { return meta.propertyName !== undefined; });
                    }
                    var metadataFromAncestors = [];
                    for (var _i = 0, _a = this.getAncestors(target); _i < _a.length; _i++) {
                        var ancestor = _a[_i];
                        var ancestorMetadataMap = metadatas.get(ancestor);
                        if (ancestorMetadataMap) {
                            var metadataFromAncestor = Array.from(ancestorMetadataMap.values()).filter(function (meta) { return meta.propertyName !== undefined; });
                            metadataFromAncestors.push.apply(metadataFromAncestors, metadataFromAncestor);
                        }
                    }
                    return metadataFromAncestors.concat(metadataFromTarget || []);
                };
                MetadataStorage.prototype.findMetadata = function (metadatas, target, propertyName) {
                    var metadataFromTargetMap = metadatas.get(target);
                    if (metadataFromTargetMap) {
                        var metadataFromTarget = metadataFromTargetMap.get(propertyName);
                        if (metadataFromTarget) {
                            return metadataFromTarget;
                        }
                    }
                    for (var _i = 0, _a = this.getAncestors(target); _i < _a.length; _i++) {
                        var ancestor = _a[_i];
                        var ancestorMetadataMap = metadatas.get(ancestor);
                        if (ancestorMetadataMap) {
                            var ancestorResult = ancestorMetadataMap.get(propertyName);
                            if (ancestorResult) {
                                return ancestorResult;
                            }
                        }
                    }
                    return undefined;
                };
                MetadataStorage.prototype.findMetadatas = function (metadatas, target, propertyName) {
                    var metadataFromTargetMap = metadatas.get(target);
                    var metadataFromTarget;
                    if (metadataFromTargetMap) {
                        metadataFromTarget = metadataFromTargetMap.get(propertyName);
                    }
                    var metadataFromAncestorsTarget = [];
                    for (var _i = 0, _a = this.getAncestors(target); _i < _a.length; _i++) {
                        var ancestor = _a[_i];
                        var ancestorMetadataMap = metadatas.get(ancestor);
                        if (ancestorMetadataMap) {
                            if (ancestorMetadataMap.has(propertyName)) {
                                metadataFromAncestorsTarget.push.apply(metadataFromAncestorsTarget, ancestorMetadataMap.get(propertyName));
                            }
                        }
                    }
                    return metadataFromAncestorsTarget
                        .slice()
                        .reverse()
                        .concat((metadataFromTarget || []).slice().reverse());
                };
                MetadataStorage.prototype.getAncestors = function (target) {
                    if (!target)
                        return [];
                    if (!this._ancestorsMap.has(target)) {
                        var ancestors = [];
                        for (var baseClass = Object.getPrototypeOf(target.prototype.constructor); typeof baseClass.prototype !== 'undefined'; baseClass = Object.getPrototypeOf(baseClass.prototype.constructor)) {
                            ancestors.push(baseClass);
                        }
                        this._ancestorsMap.set(target, ancestors);
                    }
                    return this._ancestorsMap.get(target);
                };
                return MetadataStorage;
            }());

            /**
             * Default metadata storage is used as singleton and can be used to storage all metadatas.
             */
            var defaultMetadataStorage = new MetadataStorage();

            /**
             * This function returns the global object across Node and browsers.
             *
             * Note: `globalThis` is the standardized approach however it has been added to
             * Node.js in version 12. We need to include this snippet until Node 12 EOL.
             */
            function getGlobal() {
                if (typeof globalThis !== 'undefined') {
                    return globalThis;
                }
                if (typeof global !== 'undefined') {
                    return global;
                }
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore: Cannot find name 'window'.
                if (typeof window !== 'undefined') {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore: Cannot find name 'window'.
                    return window;
                }
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore: Cannot find name 'self'.
                if (typeof self !== 'undefined') {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore: Cannot find name 'self'.
                    return self;
                }
            }

            function isPromise(p) {
                return p !== null && typeof p === 'object' && typeof p.then === 'function';
            }

            function instantiateArrayType(arrayType) {
                var array = new arrayType();
                if (!(array instanceof Set) && !('push' in array)) {
                    return [];
                }
                return array;
            }
            var TransformOperationExecutor = /** @class */ (function () {
                // -------------------------------------------------------------------------
                // Constructor
                // -------------------------------------------------------------------------
                function TransformOperationExecutor(transformationType, options) {
                    this.transformationType = transformationType;
                    this.options = options;
                    // -------------------------------------------------------------------------
                    // Private Properties
                    // -------------------------------------------------------------------------
                    this.recursionStack = new Set();
                }
                // -------------------------------------------------------------------------
                // Public Methods
                // -------------------------------------------------------------------------
                TransformOperationExecutor.prototype.transform = function (source, value, targetType, arrayType, isMap, level) {
                    var _this = this;
                    if (level === void 0) { level = 0; }
                    if (Array.isArray(value) || value instanceof Set) {
                        var newValue_1 = arrayType && this.transformationType === TransformationType.PLAIN_TO_CLASS
                            ? instantiateArrayType(arrayType)
                            : [];
                        value.forEach(function (subValue, index) {
                            var subSource = source ? source[index] : undefined;
                            if (!_this.options.enableCircularCheck || !_this.isCircular(subValue)) {
                                var realTargetType = void 0;
                                if (typeof targetType !== 'function' &&
                                    targetType &&
                                    targetType.options &&
                                    targetType.options.discriminator &&
                                    targetType.options.discriminator.property &&
                                    targetType.options.discriminator.subTypes) {
                                    if (_this.transformationType === TransformationType.PLAIN_TO_CLASS) {
                                        realTargetType = targetType.options.discriminator.subTypes.find(function (subType) {
                                            return subType.name === subValue[targetType.options.discriminator.property];
                                        });
                                        var options = { newObject: newValue_1, object: subValue, property: undefined };
                                        var newType = targetType.typeFunction(options);
                                        realTargetType === undefined ? (realTargetType = newType) : (realTargetType = realTargetType.value);
                                        if (!targetType.options.keepDiscriminatorProperty)
                                            delete subValue[targetType.options.discriminator.property];
                                    }
                                    if (_this.transformationType === TransformationType.CLASS_TO_CLASS) {
                                        realTargetType = subValue.constructor;
                                    }
                                    if (_this.transformationType === TransformationType.CLASS_TO_PLAIN) {
                                        subValue[targetType.options.discriminator.property] = targetType.options.discriminator.subTypes.find(function (subType) { return subType.value === subValue.constructor; }).name;
                                    }
                                }
                                else {
                                    realTargetType = targetType;
                                }
                                var value_1 = _this.transform(subSource, subValue, realTargetType, undefined, subValue instanceof Map, level + 1);
                                if (newValue_1 instanceof Set) {
                                    newValue_1.add(value_1);
                                }
                                else {
                                    newValue_1.push(value_1);
                                }
                            }
                            else if (_this.transformationType === TransformationType.CLASS_TO_CLASS) {
                                if (newValue_1 instanceof Set) {
                                    newValue_1.add(subValue);
                                }
                                else {
                                    newValue_1.push(subValue);
                                }
                            }
                        });
                        return newValue_1;
                    }
                    else if (targetType === String && !isMap) {
                        if (value === null || value === undefined)
                            return value;
                        return String(value);
                    }
                    else if (targetType === Number && !isMap) {
                        if (value === null || value === undefined)
                            return value;
                        return Number(value);
                    }
                    else if (targetType === Boolean && !isMap) {
                        if (value === null || value === undefined)
                            return value;
                        return Boolean(value);
                    }
                    else if ((targetType === Date || value instanceof Date) && !isMap) {
                        if (value instanceof Date) {
                            return new Date(value.valueOf());
                        }
                        if (value === null || value === undefined)
                            return value;
                        return new Date(value);
                    }
                    else if (!!getGlobal().Buffer && (targetType === Buffer || value instanceof Buffer) && !isMap) {
                        if (value === null || value === undefined)
                            return value;
                        return Buffer.from(value);
                    }
                    else if (isPromise(value) && !isMap) {
                        return new Promise(function (resolve, reject) {
                            value.then(function (data) { return resolve(_this.transform(undefined, data, targetType, undefined, undefined, level + 1)); }, reject);
                        });
                    }
                    else if (!isMap && value !== null && typeof value === 'object' && typeof value.then === 'function') {
                        // Note: We should not enter this, as promise has been handled above
                        // This option simply returns the Promise preventing a JS error from happening and should be an inaccessible path.
                        return value; // skip promise transformation
                    }
                    else if (typeof value === 'object' && value !== null) {
                        // try to guess the type
                        if (!targetType && value.constructor !== Object /* && TransformationType === TransformationType.CLASS_TO_PLAIN*/)
                            targetType = value.constructor;
                        if (!targetType && source)
                            targetType = source.constructor;
                        if (this.options.enableCircularCheck) {
                            // add transformed type to prevent circular references
                            this.recursionStack.add(value);
                        }
                        var keys = this.getKeys(targetType, value, isMap);
                        var newValue = source ? source : {};
                        if (!source &&
                            (this.transformationType === TransformationType.PLAIN_TO_CLASS ||
                                this.transformationType === TransformationType.CLASS_TO_CLASS)) {
                            if (isMap) {
                                newValue = new Map();
                            }
                            else if (targetType) {
                                newValue = new targetType();
                            }
                            else {
                                newValue = {};
                            }
                        }
                        var _loop_1 = function (key) {
                            if (key === '__proto__' || key === 'constructor') {
                                return "continue";
                            }
                            var valueKey = key;
                            var newValueKey = key, propertyName = key;
                            if (!this_1.options.ignoreDecorators && targetType) {
                                if (this_1.transformationType === TransformationType.PLAIN_TO_CLASS) {
                                    var exposeMetadata = defaultMetadataStorage.findExposeMetadataByCustomName(targetType, key);
                                    if (exposeMetadata) {
                                        propertyName = exposeMetadata.propertyName;
                                        newValueKey = exposeMetadata.propertyName;
                                    }
                                }
                                else if (this_1.transformationType === TransformationType.CLASS_TO_PLAIN ||
                                    this_1.transformationType === TransformationType.CLASS_TO_CLASS) {
                                    var exposeMetadata = defaultMetadataStorage.findExposeMetadata(targetType, key);
                                    if (exposeMetadata && exposeMetadata.options && exposeMetadata.options.name) {
                                        newValueKey = exposeMetadata.options.name;
                                    }
                                }
                            }
                            // get a subvalue
                            var subValue = undefined;
                            if (value instanceof Map) {
                                subValue = value.get(valueKey);
                            }
                            else if (value[valueKey] instanceof Function) {
                                subValue = value[valueKey]();
                            }
                            else {
                                subValue = value[valueKey];
                            }
                            // determine a type
                            var type = undefined, isSubValueMap = subValue instanceof Map;
                            if (targetType && isMap) {
                                type = targetType;
                            }
                            else if (targetType) {
                                var metadata_1 = defaultMetadataStorage.findTypeMetadata(targetType, propertyName);
                                if (metadata_1) {
                                    var options = { newObject: newValue, object: value, property: propertyName };
                                    var newType = metadata_1.typeFunction ? metadata_1.typeFunction(options) : metadata_1.reflectedType;
                                    if (metadata_1.options &&
                                        metadata_1.options.discriminator &&
                                        metadata_1.options.discriminator.property &&
                                        metadata_1.options.discriminator.subTypes) {
                                        if (!(value[valueKey] instanceof Array)) {
                                            if (this_1.transformationType === TransformationType.PLAIN_TO_CLASS) {
                                                type = metadata_1.options.discriminator.subTypes.find(function (subType) {
                                                    if (subValue && subValue instanceof Object && metadata_1.options.discriminator.property in subValue) {
                                                        return subType.name === subValue[metadata_1.options.discriminator.property];
                                                    }
                                                });
                                                type === undefined ? (type = newType) : (type = type.value);
                                                if (!metadata_1.options.keepDiscriminatorProperty) {
                                                    if (subValue && subValue instanceof Object && metadata_1.options.discriminator.property in subValue) {
                                                        delete subValue[metadata_1.options.discriminator.property];
                                                    }
                                                }
                                            }
                                            if (this_1.transformationType === TransformationType.CLASS_TO_CLASS) {
                                                type = subValue.constructor;
                                            }
                                            if (this_1.transformationType === TransformationType.CLASS_TO_PLAIN) {
                                                subValue[metadata_1.options.discriminator.property] = metadata_1.options.discriminator.subTypes.find(function (subType) { return subType.value === subValue.constructor; }).name;
                                            }
                                        }
                                        else {
                                            type = metadata_1;
                                        }
                                    }
                                    else {
                                        type = newType;
                                    }
                                    isSubValueMap = isSubValueMap || metadata_1.reflectedType === Map;
                                }
                                else if (this_1.options.targetMaps) {
                                    // try to find a type in target maps
                                    this_1.options.targetMaps
                                        .filter(function (map) { return map.target === targetType && !!map.properties[propertyName]; })
                                        .forEach(function (map) { return (type = map.properties[propertyName]); });
                                }
                                else if (this_1.options.enableImplicitConversion &&
                                    this_1.transformationType === TransformationType.PLAIN_TO_CLASS) {
                                    // if we have no registererd type via the @Type() decorator then we check if we have any
                                    // type declarations in reflect-metadata (type declaration is emited only if some decorator is added to the property.)
                                    var reflectedType = Reflect.getMetadata('design:type', targetType.prototype, propertyName);
                                    if (reflectedType) {
                                        type = reflectedType;
                                    }
                                }
                            }
                            // if value is an array try to get its custom array type
                            var arrayType_1 = Array.isArray(value[valueKey])
                                ? this_1.getReflectedType(targetType, propertyName)
                                : undefined;
                            // const subValueKey = TransformationType === TransformationType.PLAIN_TO_CLASS && newKeyName ? newKeyName : key;
                            var subSource = source ? source[valueKey] : undefined;
                            // if its deserialization then type if required
                            // if we uncomment this types like string[] will not work
                            // if (this.transformationType === TransformationType.PLAIN_TO_CLASS && !type && subValue instanceof Object && !(subValue instanceof Date))
                            //     throw new Error(`Cannot determine type for ${(targetType as any).name }.${propertyName}, did you forget to specify a @Type?`);
                            // if newValue is a source object that has method that match newKeyName then skip it
                            if (newValue.constructor.prototype) {
                                var descriptor = Object.getOwnPropertyDescriptor(newValue.constructor.prototype, newValueKey);
                                if ((this_1.transformationType === TransformationType.PLAIN_TO_CLASS ||
                                    this_1.transformationType === TransformationType.CLASS_TO_CLASS) &&
                                    // eslint-disable-next-line @typescript-eslint/unbound-method
                                    ((descriptor && !descriptor.set) || newValue[newValueKey] instanceof Function))
                                    return "continue";
                            }
                            if (!this_1.options.enableCircularCheck || !this_1.isCircular(subValue)) {
                                var transformKey = this_1.transformationType === TransformationType.PLAIN_TO_CLASS ? newValueKey : key;
                                var finalValue = void 0;
                                if (this_1.transformationType === TransformationType.CLASS_TO_PLAIN) {
                                    // Get original value
                                    finalValue = value[transformKey];
                                    // Apply custom transformation
                                    finalValue = this_1.applyCustomTransformations(finalValue, targetType, transformKey, value, this_1.transformationType);
                                    // If nothing change, it means no custom transformation was applied, so use the subValue.
                                    finalValue = value[transformKey] === finalValue ? subValue : finalValue;
                                    // Apply the default transformation
                                    finalValue = this_1.transform(subSource, finalValue, type, arrayType_1, isSubValueMap, level + 1);
                                }
                                else {
                                    if (subValue === undefined && this_1.options.exposeDefaultValues) {
                                        // Set default value if nothing provided
                                        finalValue = newValue[newValueKey];
                                    }
                                    else {
                                        finalValue = this_1.transform(subSource, subValue, type, arrayType_1, isSubValueMap, level + 1);
                                        finalValue = this_1.applyCustomTransformations(finalValue, targetType, transformKey, value, this_1.transformationType);
                                    }
                                }
                                if (finalValue !== undefined || this_1.options.exposeUnsetFields) {
                                    if (newValue instanceof Map) {
                                        newValue.set(newValueKey, finalValue);
                                    }
                                    else {
                                        newValue[newValueKey] = finalValue;
                                    }
                                }
                            }
                            else if (this_1.transformationType === TransformationType.CLASS_TO_CLASS) {
                                var finalValue = subValue;
                                finalValue = this_1.applyCustomTransformations(finalValue, targetType, key, value, this_1.transformationType);
                                if (finalValue !== undefined || this_1.options.exposeUnsetFields) {
                                    if (newValue instanceof Map) {
                                        newValue.set(newValueKey, finalValue);
                                    }
                                    else {
                                        newValue[newValueKey] = finalValue;
                                    }
                                }
                            }
                        };
                        var this_1 = this;
                        // traverse over keys
                        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                            var key = keys_1[_i];
                            _loop_1(key);
                        }
                        if (this.options.enableCircularCheck) {
                            this.recursionStack.delete(value);
                        }
                        return newValue;
                    }
                    else {
                        return value;
                    }
                };
                TransformOperationExecutor.prototype.applyCustomTransformations = function (value, target, key, obj, transformationType) {
                    var _this = this;
                    var metadatas = defaultMetadataStorage.findTransformMetadatas(target, key, this.transformationType);
                    // apply versioning options
                    if (this.options.version !== undefined) {
                        metadatas = metadatas.filter(function (metadata) {
                            if (!metadata.options)
                                return true;
                            return _this.checkVersion(metadata.options.since, metadata.options.until);
                        });
                    }
                    // apply grouping options
                    if (this.options.groups && this.options.groups.length) {
                        metadatas = metadatas.filter(function (metadata) {
                            if (!metadata.options)
                                return true;
                            return _this.checkGroups(metadata.options.groups);
                        });
                    }
                    else {
                        metadatas = metadatas.filter(function (metadata) {
                            return !metadata.options || !metadata.options.groups || !metadata.options.groups.length;
                        });
                    }
                    metadatas.forEach(function (metadata) {
                        value = metadata.transformFn({ value: value, key: key, obj: obj, type: transformationType, options: _this.options });
                    });
                    return value;
                };
                // preventing circular references
                TransformOperationExecutor.prototype.isCircular = function (object) {
                    return this.recursionStack.has(object);
                };
                TransformOperationExecutor.prototype.getReflectedType = function (target, propertyName) {
                    if (!target)
                        return undefined;
                    var meta = defaultMetadataStorage.findTypeMetadata(target, propertyName);
                    return meta ? meta.reflectedType : undefined;
                };
                TransformOperationExecutor.prototype.getKeys = function (target, object, isMap) {
                    var _this = this;
                    // determine exclusion strategy
                    var strategy = defaultMetadataStorage.getStrategy(target);
                    if (strategy === 'none')
                        strategy = this.options.strategy || 'exposeAll'; // exposeAll is default strategy
                    // get all keys that need to expose
                    var keys = [];
                    if (strategy === 'exposeAll' || isMap) {
                        if (object instanceof Map) {
                            keys = Array.from(object.keys());
                        }
                        else {
                            keys = Object.keys(object);
                        }
                    }
                    if (isMap) {
                        // expose & exclude do not apply for map keys only to fields
                        return keys;
                    }
                    if (!this.options.ignoreDecorators && target) {
                        // add all exposed to list of keys
                        var exposedProperties = defaultMetadataStorage.getExposedProperties(target, this.transformationType);
                        if (this.transformationType === TransformationType.PLAIN_TO_CLASS) {
                            exposedProperties = exposedProperties.map(function (key) {
                                var exposeMetadata = defaultMetadataStorage.findExposeMetadata(target, key);
                                if (exposeMetadata && exposeMetadata.options && exposeMetadata.options.name) {
                                    return exposeMetadata.options.name;
                                }
                                return key;
                            });
                        }
                        if (this.options.excludeExtraneousValues) {
                            keys = exposedProperties;
                        }
                        else {
                            keys = keys.concat(exposedProperties);
                        }
                        // exclude excluded properties
                        var excludedProperties_1 = defaultMetadataStorage.getExcludedProperties(target, this.transformationType);
                        if (excludedProperties_1.length > 0) {
                            keys = keys.filter(function (key) {
                                return !excludedProperties_1.includes(key);
                            });
                        }
                        // apply versioning options
                        if (this.options.version !== undefined) {
                            keys = keys.filter(function (key) {
                                var exposeMetadata = defaultMetadataStorage.findExposeMetadata(target, key);
                                if (!exposeMetadata || !exposeMetadata.options)
                                    return true;
                                return _this.checkVersion(exposeMetadata.options.since, exposeMetadata.options.until);
                            });
                        }
                        // apply grouping options
                        if (this.options.groups && this.options.groups.length) {
                            keys = keys.filter(function (key) {
                                var exposeMetadata = defaultMetadataStorage.findExposeMetadata(target, key);
                                if (!exposeMetadata || !exposeMetadata.options)
                                    return true;
                                return _this.checkGroups(exposeMetadata.options.groups);
                            });
                        }
                        else {
                            keys = keys.filter(function (key) {
                                var exposeMetadata = defaultMetadataStorage.findExposeMetadata(target, key);
                                return (!exposeMetadata ||
                                    !exposeMetadata.options ||
                                    !exposeMetadata.options.groups ||
                                    !exposeMetadata.options.groups.length);
                            });
                        }
                    }
                    // exclude prefixed properties
                    if (this.options.excludePrefixes && this.options.excludePrefixes.length) {
                        keys = keys.filter(function (key) {
                            return _this.options.excludePrefixes.every(function (prefix) {
                                return key.substr(0, prefix.length) !== prefix;
                            });
                        });
                    }
                    // make sure we have unique keys
                    keys = keys.filter(function (key, index, self) {
                        return self.indexOf(key) === index;
                    });
                    return keys;
                };
                TransformOperationExecutor.prototype.checkVersion = function (since, until) {
                    var decision = true;
                    if (decision && since)
                        decision = this.options.version >= since;
                    if (decision && until)
                        decision = this.options.version < until;
                    return decision;
                };
                TransformOperationExecutor.prototype.checkGroups = function (groups) {
                    if (!groups)
                        return true;
                    return this.options.groups.some(function (optionGroup) { return groups.includes(optionGroup); });
                };
                return TransformOperationExecutor;
            }());

            /**
             * These are the default options used by any transformation operation.
             */
            var defaultOptions = {
                enableCircularCheck: false,
                enableImplicitConversion: false,
                excludeExtraneousValues: false,
                excludePrefixes: undefined,
                exposeDefaultValues: false,
                exposeUnsetFields: true,
                groups: undefined,
                ignoreDecorators: false,
                strategy: undefined,
                targetMaps: undefined,
                version: undefined,
            };

            var __assign = (undefined && undefined.__assign) || function () {
                __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            var ClassTransformer = /** @class */ (function () {
                function ClassTransformer() {
                }
                ClassTransformer.prototype.classToPlain = function (object, options) {
                    var executor = new TransformOperationExecutor(TransformationType.CLASS_TO_PLAIN, __assign(__assign({}, defaultOptions), options));
                    return executor.transform(undefined, object, undefined, undefined, undefined, undefined);
                };
                ClassTransformer.prototype.classToPlainFromExist = function (object, plainObject, options) {
                    var executor = new TransformOperationExecutor(TransformationType.CLASS_TO_PLAIN, __assign(__assign({}, defaultOptions), options));
                    return executor.transform(plainObject, object, undefined, undefined, undefined, undefined);
                };
                ClassTransformer.prototype.plainToClass = function (cls, plain, options) {
                    var executor = new TransformOperationExecutor(TransformationType.PLAIN_TO_CLASS, __assign(__assign({}, defaultOptions), options));
                    return executor.transform(undefined, plain, cls, undefined, undefined, undefined);
                };
                ClassTransformer.prototype.plainToClassFromExist = function (clsObject, plain, options) {
                    var executor = new TransformOperationExecutor(TransformationType.PLAIN_TO_CLASS, __assign(__assign({}, defaultOptions), options));
                    return executor.transform(clsObject, plain, undefined, undefined, undefined, undefined);
                };
                ClassTransformer.prototype.classToClass = function (object, options) {
                    var executor = new TransformOperationExecutor(TransformationType.CLASS_TO_CLASS, __assign(__assign({}, defaultOptions), options));
                    return executor.transform(undefined, object, undefined, undefined, undefined, undefined);
                };
                ClassTransformer.prototype.classToClassFromExist = function (object, fromObject, options) {
                    var executor = new TransformOperationExecutor(TransformationType.CLASS_TO_CLASS, __assign(__assign({}, defaultOptions), options));
                    return executor.transform(fromObject, object, undefined, undefined, undefined, undefined);
                };
                ClassTransformer.prototype.serialize = function (object, options) {
                    return JSON.stringify(this.classToPlain(object, options));
                };
                /**
                 * Deserializes given JSON string to a object of the given class.
                 */
                ClassTransformer.prototype.deserialize = function (cls, json, options) {
                    var jsonObject = JSON.parse(json);
                    return this.plainToClass(cls, jsonObject, options);
                };
                /**
                 * Deserializes given JSON string to an array of objects of the given class.
                 */
                ClassTransformer.prototype.deserializeArray = function (cls, json, options) {
                    var jsonObject = JSON.parse(json);
                    return this.plainToClass(cls, jsonObject, options);
                };
                return ClassTransformer;
            }());

            var classTransformer = new ClassTransformer();
            function plainToClass(cls, plain, options) {
                return classTransformer.plainToClass(cls, plain, options);
            }

            var GameState = /** @class */ (function () {
                function GameState(context) {
                    this.context = context;
                }
                GameState.templateGames = function (state) {
                    return plainToClass(Game, state.templateGames);
                };
                GameState.myGames = function (state) {
                    return plainToClass(Game, state.myGames);
                };
                GameState.prototype.ngxsOnInit = function (ctx) {
                    ctx.dispatch(new GameActions.ListTemplateGames());
                    ctx.dispatch(new GameActions.ListMyGames());
                };
                GameState.prototype.listMyGames = function (_a, _b) {
                    var patchState = _a.patchState;
                    var pagination = _b.pagination;
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_c) {
                            return [2 /*return*/, this.context.sdk.game.listMyGames(pagination).then(function (res) {
                                    console.log("my games======>", res);
                                    var _a = res.data.data; _a.total; var list = _a.list;
                                    patchState({
                                        myGames: list,
                                    });
                                })];
                        });
                    });
                };
                GameState.prototype.listTemplateGames = function (_a) {
                    var patchState = _a.patchState;
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_b) {
                            return [2 /*return*/, this.context.sdk.game.listTemplateGames().then(function (res) {
                                    console.log("template games=====>", res);
                                    var data = res.data.data;
                                    patchState({
                                        templateGames: data.data,
                                    });
                                })];
                        });
                    });
                };
                __decorate([
                    Action(GameActions.ListMyGames),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object, GameActions.ListMyGames]),
                    __metadata("design:returntype", Promise)
                ], GameState.prototype, "listMyGames", null);
                __decorate([
                    Action(GameActions.ListTemplateGames),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Promise)
                ], GameState.prototype, "listTemplateGames", null);
                __decorate([
                    Selector(),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", void 0)
                ], GameState, "templateGames", null);
                __decorate([
                    Selector(),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", void 0)
                ], GameState, "myGames", null);
                GameState = __decorate([
                    State({
                        name: "GameStore",
                        defaults: {
                            templateGames: [],
                            myGames: [],
                        },
                    }),
                    Injectable(),
                    __param(0, Inject(ContextService)),
                    __metadata("design:paramtypes", [ContextService])
                ], GameState);
                return GameState;
            }());

            var GameExplorerComponent = exports('GameExplorerComponent', /** @class */ (function () {
                function GameExplorerComponent(context, store) {
                    this.context = context;
                    this.store = store;
                }
                GameExplorerComponent.prototype.ngOnInit = function () {
                    this.context.initial();
                    this.myGames$.subscribe(function (data) {
                        console.log("myGames: ", data);
                    });
                };
                GameExplorerComponent.prototype.onTabOpen = function (event) {
                    var index = event.index;
                    if (index === 1) {
                        this.store.dispatch(new GameActions.ListMyGames());
                    }
                    else {
                        this.store.dispatch(new GameActions.ListTemplateGames());
                    }
                };
                __decorate([
                    Select(GameState.templateGames),
                    __metadata("design:type", Observable)
                ], GameExplorerComponent.prototype, "templateGames$", void 0);
                __decorate([
                    Select(GameState.myGames),
                    __metadata("design:type", Observable)
                ], GameExplorerComponent.prototype, "myGames$", void 0);
                GameExplorerComponent = __decorate([
                    Component({
                        selector: "game-explorer",
                        template: "<div class=\"game-explorer\"><p-accordion (onOpen)=\"onTabOpen($event)\"><p-accordionTab header=\"\u6A21\u677F\u6E38\u620F\"><div class=\"scroll-box\"><ul><li *ngFor=\"let game of templateGames$ | async\"><div class=\"game-item\"><div class=\"game-logo\"><img src=\"{{ game.gameCover }}\"></div><div class=\"game-info\"><h3>{{ game.name }}</h3><p>{{ game.description }}</p><ng-container *ngIf=\"game.isExists; else download\"><p-menu [model]=\"items\"></p-menu><i class=\"qing qing-settings\"></i></ng-container><ng-template #download><button (click)=\"downloadGame(game._id)\">{{ game.isDownload ? \"\u4E0B\u8F7D\u4E2D\" : \"\u4E0B\u8F7D\" }}</button></ng-template></div></div></li></ul></div></p-accordionTab><p-accordionTab header=\"\u6211\u7684\u6E38\u620F\"><div class=\"scroll-box\"><ul><li *ngFor=\"let game of myGames$ | async\"><game-item [game]=\"game\"></game-item></li></ul></div></p-accordionTab></p-accordion></div>",
                        styles: [".scroll-box{max-height:1000px;overflow-y:auto}.scroll-box::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#f5f5f5}.scroll-box::-webkit-scrollbar{width:10px;background-color:#f5f5f5}.scroll-box::-webkit-scrollbar-thumb{background-color:#1b1d22}"],
                    }),
                    __param(0, Inject(ContextService)),
                    __metadata("design:paramtypes", [ContextService,
                        Store])
                ], GameExplorerComponent);
                return GameExplorerComponent;
            }()));

            var GameItemComponent = /** @class */ (function () {
                function GameItemComponent(context) {
                    var _this = this;
                    this.context = context;
                    this.items = [
                        {
                            label: "编辑",
                            command: function () {
                                console.log("编辑游戏", _this.game._id);
                                _this.context.setEditedGame(_this.game);
                            },
                        },
                        {
                            label: "运行",
                            command: function () {
                                console.log("运行游戏 ");
                            },
                        },
                    ];
                }
                GameItemComponent.prototype.downloadGame = function (game) {
                    var _this = this;
                    game.isDownload = true;
                    this.context.downloadGame(game, function () {
                        game.isDownload = false;
                        _this.context.success("下载游戏成功!");
                    });
                };
                __decorate([
                    Input(),
                    __metadata("design:type", Game)
                ], GameItemComponent.prototype, "game", void 0);
                GameItemComponent = __decorate([
                    Component({
                        selector: "game-item",
                        template: "<div class=\"game-item\"><div class=\"game-logo\"><img src=\"{{ game.gameCover }}\"></div><div class=\"game-info\"><h3>{{ game.name }}</h3><p>{{ game.description }}</p><ng-container *ngIf=\"game.isExists; else download\"><p-menu #menu [popup]=\"true\" [model]=\"items\"></p-menu><i class=\"qing qing-settings\" (click)=\"menu.toggle($event)\"></i></ng-container><ng-template #download><button (click)=\"downloadGame(game)\">{{ game.isDownload ? \"\u4E0B\u8F7D\u4E2D\" : \"\u4E0B\u8F7D\" }}</button></ng-template></div></div>",
                        styles: [".game-item{display:flex;padding:10px}.game-item:hover{background-color:#1b1d22}.game-item .game-logo{margin-right:10px}.game-item .game-logo img{width:100px;height:100px}.game-item .game-info h3{font-size:20px;color:#fff;margin-bottom:10px}.game-item .game-info p{font-size:14px;color:#fff;margin-bottom:5px}.game-item .game-info button{min-width:40px;border:none;background-color:#4164e4;color:#fff;font-size:12px;border-radius:3px;padding:2px 5px;cursor:pointer;outline:0}"],
                    }),
                    __metadata("design:paramtypes", [ContextService])
                ], GameItemComponent);
                return GameItemComponent;
            }());

            var GameExplorerPluginModule = exports('GameExplorerPluginModule', /** @class */ (function () {
                function GameExplorerPluginModule() {
                }
                GameExplorerPluginModule = __decorate([
                    NgModule({
                        declarations: [GameExplorerComponent, GameItemComponent],
                        imports: [
                            CommonModule,
                            FormsModule,
                            ReactiveFormsModule,
                            AccordionModule,
                            MenuModule,
                            NgxsModule.forFeature([GameState]),
                        ],
                        exports: [GameExplorerComponent],
                        entryComponents: [GameExplorerComponent],
                        providers: [
                            {
                                provide: "GameExplorerComponent",
                                useValue: GameExplorerComponent,
                            },
                        ],
                    })
                ], GameExplorerPluginModule);
                return GameExplorerPluginModule;
            }()));

            var config$1 = exports('config', {
                name: "game-explorer-plugin",
                id: "gameExplorer",
                components: ["GameExplorerComponent"],
                moduleName: "GameExplorerPluginModule",
                displayName: "游戏列表",
                contributes: {
                    workbenchActivitybar: {
                        title: "游戏列表",
                        icon: "qing qing-game",
                        command: function (context) {
                            context.eventBus.emit(config$1.events.OPEN_GAME_EXPLORER);
                        },
                    },
                    workbenchExplorer: {
                        component: "GameExplorerComponent",
                    },
                },
                events: {
                    OPEN_GAME_EXPLORER: "open-game-explorer",
                },
            });
            var active = exports('active', function (context) {
                context.eventBus.on(config$1.events.OPEN_GAME_EXPLORER, function () {
                    context.puzzle
                        .getPuzzleSlot(WORKBENCH_PUZZLE_BLOCK.WORKBENCH_EXPLORER)
                        .container.renderComponent("GameExplorerComponent");
                });
            });
            var deactive = exports('deactive', function (context) { });

        }
    };
});
