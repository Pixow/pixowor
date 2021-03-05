System.register(['@angular/common', '@angular/core', '@angular/forms', '@ngxs/store', 'primeng/accordion', 'primeng/fileupload', 'qing-workbench'], function (exports) {
    'use strict';
    var CommonModule, Injectable, Inject, Component, NgModule, FormsModule, Action, Selector, State, Select, Store, NgxsModule, AccordionModule, FileUploadModule, ContextService;
    return {
        setters: [function (module) {
            CommonModule = module.CommonModule;
        }, function (module) {
            Injectable = module.Injectable;
            Inject = module.Inject;
            Component = module.Component;
            NgModule = module.NgModule;
        }, function (module) {
            FormsModule = module.FormsModule;
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
            FileUploadModule = module.FileUploadModule;
        }, function (module) {
            ContextService = module.ContextService;
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

            /**
             * Compare semver version numbers
             *
             * @param {String} a
             * @param {String} b
             * @api public
             */

            var compareVersion = function(a, b) {
                var i;
                var len;

                if (typeof a + typeof b !== 'stringstring') {
                    return false;
                }

                a = a.split('.');
                b = b.split('.');
                i = 0;
                len = Math.max(a.length, b.length);

                for (; i < len; i++) {
                    if ((a[i] && !b[i] && parseInt(a[i]) > 0) || (parseInt(a[i]) > parseInt(b[i]))) {
                        return 1;
                    } else if ((b[i] && !a[i] && parseInt(b[i]) > 0) || (parseInt(a[i]) < parseInt(b[i]))) {
                        return -1;
                    }
                }

                return 0;
            };

            var ActionsType;
            (function (ActionsType) {
                ActionsType["LIST_PLUGINS"] = "ListPlugins";
            })(ActionsType || (ActionsType = {}));
            var PluginsMarketActions;
            (function (PluginsMarketActions) {
                var ListPlugins = /** @class */ (function () {
                    function ListPlugins() {
                    }
                    ListPlugins.type = ActionsType.LIST_PLUGINS;
                    return ListPlugins;
                }());
                PluginsMarketActions.ListPlugins = ListPlugins;
            })(PluginsMarketActions || (PluginsMarketActions = {}));

            var MarketState = /** @class */ (function () {
                function MarketState(context) {
                    this.context = context;
                }
                MarketState.plugins = function (state) {
                    return state.plugins;
                };
                MarketState.prototype.listPlugins = function (_a) {
                    var patchState = _a.patchState;
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_b) {
                            // patchState({
                            //   plugins: [
                            //     {
                            //       name: "场景编辑器",
                            //       logo:
                            //         "https://osd-alpha.tooqing.com/pixelpai/SpawnPointNode/5cc42f6417553727db1d2bba/1/5cc42f6417553727db1d2bba.png",
                            //       description: "用于编辑游戏场景，可以放置。",
                            //       author: "moJiXiang",
                            //       id: "sceneEditor",
                            //     },
                            //     {
                            //       name: "场景编辑器",
                            //       logo:
                            //         "https://osd-alpha.tooqing.com/pixelpai/SpawnPointNode/5cc42f6417553727db1d2bba/1/5cc42f6417553727db1d2bba.png",
                            //       description:
                            //         "用于编辑游戏场景，可以放置各种物件，人物，可以给物件添加脚本逻辑。",
                            //       author: "moJiXiang",
                            //       id: "sceneEditor",
                            //     },
                            //   ],
                            // });
                            this.context.sdk.plugin.listPlugins().then(function (res) {
                                var _a = res.data.data; _a.total; var list = _a.list;
                                if (res.data) {
                                    patchState({
                                        plugins: list,
                                    });
                                }
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                __decorate([
                    Action(PluginsMarketActions.ListPlugins),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Promise)
                ], MarketState.prototype, "listPlugins", null);
                __decorate([
                    Selector(),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", void 0)
                ], MarketState, "plugins", null);
                MarketState = __decorate([
                    State({
                        name: "PluginsMarketStore",
                        defaults: {
                            plugins: [],
                        },
                    }),
                    Injectable(),
                    __param(0, Inject(ContextService)),
                    __metadata("design:paramtypes", [ContextService])
                ], MarketState);
                return MarketState;
            }());

            var PluginsMarketComponent = exports('PluginsMarketComponent', /** @class */ (function () {
                function PluginsMarketComponent(store, context) {
                    this.store = store;
                    this.context = context;
                }
                PluginsMarketComponent.prototype.ngOnInit = function () {
                    this.context.initial();
                    this.store.dispatch(new PluginsMarketActions.ListPlugins());
                };
                PluginsMarketComponent.prototype._getPluginFolderName = function (name, version) {
                    return name + ("_" + version);
                };
                PluginsMarketComponent.prototype.installPlugin = function (pluginName, pluginVersion) {
                    var _this = this;
                    this.context.installPlugin({ pluginName: pluginName, pluginVersion: pluginVersion }, function () {
                        _this.context.success("插件安装成功！");
                    });
                };
                PluginsMarketComponent.prototype.onUpload = function (event) {
                    var _this = this;
                    console.log("event: ", event.files);
                    var pkgFile = event.files.find(function (file) { return file.name === "package.json"; });
                    this.context.readFile(pkgFile.path, function (_a) {
                        var data = _a.data;
                        return __awaiter(_this, void 0, void 0, function () {
                            var pkg, folderName, res, plugin;
                            var _this = this;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        pkg = JSON.parse(data);
                                        folderName = pkg.name + ("_" + pkg.version);
                                        return [4 /*yield*/, this.context.sdk.plugin.getPlugin(pkg.name)];
                                    case 1:
                                        res = _b.sent();
                                        plugin = res.data.data.list[0];
                                        if (plugin) {
                                            if (compareVersion(plugin.version, pkg.version) >= 0) {
                                                this.context.error("插件版本已存在！");
                                            }
                                            else {
                                                this.context.zipFiles({ files: event.files.map(function (file) { return file.path; }), folderName: folderName }, function (_a) {
                                                    var error = _a.error, data = _a.data;
                                                    return __awaiter(_this, void 0, void 0, function () {
                                                        var name_1, filePath, res_1, token;
                                                        var _this = this;
                                                        return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0:
                                                                    if (!error) return [3 /*break*/, 1];
                                                                    console.log("error: ", error);
                                                                    return [3 /*break*/, 3];
                                                                case 1:
                                                                    name_1 = data.name, filePath = data.filePath;
                                                                    return [4 /*yield*/, this.context.sdk.util.getQiniuToken({ name: name_1 })];
                                                                case 2:
                                                                    res_1 = _b.sent();
                                                                    token = res_1.data.data.token;
                                                                    this.context.uploadFile({ uri: filePath, key: name_1, qiniuToken: token }, function (res) {
                                                                        console.log("uploadFile: ", res);
                                                                        _this.context.sdk.plugin
                                                                            .updatePlugin(plugin._id, { version: pkg.version })
                                                                            .then(function (res) {
                                                                            _this.context.success("插件上传成功！");
                                                                        });
                                                                    });
                                                                    _b.label = 3;
                                                                case 3: return [2 /*return*/];
                                                            }
                                                        });
                                                    });
                                                });
                                            }
                                        }
                                        else {
                                            this.context.sdk.plugin
                                                .createPlugin({
                                                name: pkg.name,
                                                description: pkg.description,
                                                version: pkg.version,
                                            })
                                                .then(function (res) {
                                                _this.context.zipFiles({ files: event.files.map(function (file) { return file.path; }), folderName: folderName }, function (_a) {
                                                    _a.error; var data = _a.data;
                                                    return __awaiter(_this, void 0, void 0, function () {
                                                        var name, filePath, res, token;
                                                        var _this = this;
                                                        return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0:
                                                                    name = data.name, filePath = data.filePath;
                                                                    console.log("name: ", name);
                                                                    return [4 /*yield*/, this.context.sdk.util.getQiniuToken({ name: name })];
                                                                case 1:
                                                                    res = _b.sent();
                                                                    token = res.data.data.token;
                                                                    this.context.uploadFile({ uri: filePath, key: name, qiniuToken: token }, function (res) {
                                                                        console.log("uploadFile: ", res);
                                                                        _this.context.success("插件上传成功！");
                                                                    });
                                                                    return [2 /*return*/];
                                                            }
                                                        });
                                                    });
                                                });
                                            });
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                };
                __decorate([
                    Select(MarketState.plugins),
                    __metadata("design:type", Observable)
                ], PluginsMarketComponent.prototype, "plugins$", void 0);
                PluginsMarketComponent = __decorate([
                    Component({
                        selector: "plugins-market",
                        template: "<div class=\"plugins-market\"><div class=\"plugins-market__header\"><h1>\u63D2\u4EF6\u5E02\u573A</h1></div><div class=\"plugins-market__search\"><input placeholder=\"\u641C\u7D22\u63D2\u4EF6\u5E02\u573A\"></div><p-accordion><p-accordionTab header=\"\u5728\u7EBF\u63D2\u4EF6\"><ul><li *ngFor=\"let plugin of plugins$ | async\"><div class=\"plugin-item\"><div class=\"plugin-logo\"><img src=\"{{ plugin.logo }}\"></div><div class=\"plugin-info\"><h3>{{ plugin.name }}</h3><p>{{ plugin.description }}</p><i>{{ plugin.author }}</i> <button (click)=\"installPlugin(plugin.name, plugin.version)\">\u5B89\u88C5</button></div></div></li></ul></p-accordionTab><p-accordionTab header=\"\u672C\u5730\u5B89\u88C5\"><ul><li *ngFor=\"let plugin of plugins$ | async\"><div class=\"plugin-item\"><div class=\"plugin-logo\"><img src=\"{{ plugin.logo }}\"></div><div class=\"plugin-info\"><h3>{{ plugin.name }}</h3><p>{{ plugin.description }}</p><i>{{ plugin.author }}</i> <button (click)=\"installPlugin(plugin.name, plugin.version)\">\u5B89\u88C5</button></div></div></li></ul></p-accordionTab></p-accordion><div class=\"plugins-market__upload\"><h1>\u63D2\u4EF6\u4E0A\u4F20</h1><div class=\"upload-filed\"><p-fileUpload name=\"myfile[]\" multiple=\"true\" customUpload=\"true\" showCancelButton=\"false\" (uploadHandler)=\"onUpload($event)\"><ng-template let-file pTemplate=\"file\"><div>{{ file.name }} - {{ file.size }} bytes</div></ng-template></p-fileUpload></div></div></div>",
                        styles: ["::ng-deep p-accordion .p-accordion .p-accordion-header.p-highlight .p-accordion-header-link{background-color:#1b1d22!important;color:#fff!important}::ng-deep p-accordion .p-accordion .p-accordion-header:hover .p-accordion-header-link{background-color:#1b1d22!important;color:#fff!important}::ng-deep p-accordion .p-accordion .p-accordion-header .p-accordion-header-link{border:none;color:#fff;background:0 0;border-radius:0!important;padding:.5rem;font-weight:400}::ng-deep p-accordion .p-accordion .p-accordion-header .p-accordion-header-link:focus{box-shadow:none!important}::ng-deep p-accordion .p-accordion .p-accordion-tab .p-accordion-content{background:0 0;border-radius:0!important;padding:0;border:none}::ng-deep p-fileupload .p-fileupload .p-fileupload-buttonbar{background-color:transparent;border:none;padding:0}::ng-deep p-fileupload .p-fileupload .p-fileupload-buttonbar .p-button{background-color:#4164e4;padding:3px}::ng-deep p-fileupload .p-fileupload .p-fileupload-content{color:#fff;background-color:transparent;border:none}.plugins-market__header{padding:10px;padding-bottom:5px;color:#fff}.plugins-market__search{padding:10px;padding-top:5px}.plugins-market__search input{width:100%;height:30px;outline:0}.plugins-market .plugin-item{display:flex;flex-direction:row;padding:10px;color:#fff;cursor:pointer}.plugins-market .plugin-item:hover{background-color:#1b1d22}.plugins-market .plugin-item .plugin-logo{margin-right:10px}.plugins-market .plugin-item .plugin-logo img{width:80px;height:80px;object-fit:cover}.plugins-market .plugin-item .plugin-info{position:relative;display:flex;flex-direction:column;justify-content:space-around}.plugins-market .plugin-item .plugin-info h3{font-size:16px;font-weight:700;margin-bottom:10px}.plugins-market .plugin-item .plugin-info p{font-size:14px;line-height:16px}.plugins-market .plugin-item .plugin-info i{font-size:12px}.plugins-market .plugin-item button{position:absolute;bottom:0;right:0;border:none;background-color:#4164e4;color:#fff;font-size:12px;line-height:14px;border-radius:3px;cursor:pointer;outline:0}.plugins-market__upload{padding:10px;color:#fff}"],
                    }),
                    __param(1, Inject(ContextService)),
                    __metadata("design:paramtypes", [Store,
                        ContextService])
                ], PluginsMarketComponent);
                return PluginsMarketComponent;
            }()));

            var PluginsMarketPluginModule = exports('PluginsMarketPluginModule', /** @class */ (function () {
                function PluginsMarketPluginModule() {
                }
                PluginsMarketPluginModule = __decorate([
                    NgModule({
                        declarations: [PluginsMarketComponent],
                        imports: [
                            CommonModule,
                            FormsModule,
                            AccordionModule,
                            FileUploadModule,
                            NgxsModule.forFeature([MarketState]),
                        ],
                        exports: [PluginsMarketComponent],
                        entryComponents: [PluginsMarketComponent],
                        providers: [
                            {
                                provide: "PluginsMarketComponent",
                                useValue: PluginsMarketComponent,
                            },
                        ],
                    })
                ], PluginsMarketPluginModule);
                return PluginsMarketPluginModule;
            }()));

            var config$1 = exports('config', {
                name: "plugins-market-plugin",
                id: "pluginsMarket",
                entryComponent: "PluginsMarketComponent",
                components: [],
                moduleName: "PluginsMarketPluginModule",
                displayName: "插件市场",
                contributes: {
                    workbenchActivitybar: {
                        title: "插件市场 ",
                        icon: "qing qing-plug",
                    },
                    workbenchExplorer: {
                        component: "PluginsMarketComponent",
                    },
                    workbenchStage: {
                        component: "PluginDetailComponent",
                    },
                },
            });

        }
    };
});
