System.register(['@angular/common', '@angular/core', '@ngxs/store', '@angular/animations', 'qing-workbench'], function (exports) {
    'use strict';
    var ɵparseCookieValue, DOCUMENT, CommonModule, InjectionToken, NgModule, Injectable, Injector, Inject, PLATFORM_ID, ɵɵdefineInjectable, Component, Directive, TemplateRef, Input, ChangeDetectionStrategy, ViewEncapsulation, EventEmitter, forwardRef, ChangeDetectorRef, Output, ContentChildren, ElementRef, Action, Selector, State, Select, Store, NgxsModule, trigger, state, style, transition, animate, ContextService;
    return {
        setters: [function (module) {
            ɵparseCookieValue = module.ɵparseCookieValue;
            DOCUMENT = module.DOCUMENT;
            CommonModule = module.CommonModule;
        }, function (module) {
            InjectionToken = module.InjectionToken;
            NgModule = module.NgModule;
            Injectable = module.Injectable;
            Injector = module.Injector;
            Inject = module.Inject;
            PLATFORM_ID = module.PLATFORM_ID;
            ɵɵdefineInjectable = module.ɵɵdefineInjectable;
            Component = module.Component;
            Directive = module.Directive;
            TemplateRef = module.TemplateRef;
            Input = module.Input;
            ChangeDetectionStrategy = module.ChangeDetectionStrategy;
            ViewEncapsulation = module.ViewEncapsulation;
            EventEmitter = module.EventEmitter;
            forwardRef = module.forwardRef;
            ChangeDetectorRef = module.ChangeDetectorRef;
            Output = module.Output;
            ContentChildren = module.ContentChildren;
            ElementRef = module.ElementRef;
        }, function (module) {
            Action = module.Action;
            Selector = module.Selector;
            State = module.State;
            Select = module.Select;
            Store = module.Store;
            NgxsModule = module.NgxsModule;
        }, function (module) {
            trigger = module.trigger;
            state = module.state;
            style = module.style;
            transition = module.transition;
            animate = module.animate;
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

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            var ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {
                function ObjectUnsubscribedErrorImpl() {
                    Error.call(this);
                    this.message = 'object unsubscribed';
                    this.name = 'ObjectUnsubscribedError';
                    return this;
                }
                ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
                return ObjectUnsubscribedErrorImpl;
            })();
            var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

            /** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
            var SubjectSubscription = /*@__PURE__*/ (function (_super) {
                __extends(SubjectSubscription, _super);
                function SubjectSubscription(subject, subscriber) {
                    var _this = _super.call(this) || this;
                    _this.subject = subject;
                    _this.subscriber = subscriber;
                    _this.closed = false;
                    return _this;
                }
                SubjectSubscription.prototype.unsubscribe = function () {
                    if (this.closed) {
                        return;
                    }
                    this.closed = true;
                    var subject = this.subject;
                    var observers = subject.observers;
                    this.subject = null;
                    if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
                        return;
                    }
                    var subscriberIndex = observers.indexOf(this.subscriber);
                    if (subscriberIndex !== -1) {
                        observers.splice(subscriberIndex, 1);
                    }
                };
                return SubjectSubscription;
            }(Subscription));

            /** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
            var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
                __extends(SubjectSubscriber, _super);
                function SubjectSubscriber(destination) {
                    var _this = _super.call(this, destination) || this;
                    _this.destination = destination;
                    return _this;
                }
                return SubjectSubscriber;
            }(Subscriber));
            var Subject = /*@__PURE__*/ (function (_super) {
                __extends(Subject, _super);
                function Subject() {
                    var _this = _super.call(this) || this;
                    _this.observers = [];
                    _this.closed = false;
                    _this.isStopped = false;
                    _this.hasError = false;
                    _this.thrownError = null;
                    return _this;
                }
                Subject.prototype[rxSubscriber] = function () {
                    return new SubjectSubscriber(this);
                };
                Subject.prototype.lift = function (operator) {
                    var subject = new AnonymousSubject(this, this);
                    subject.operator = operator;
                    return subject;
                };
                Subject.prototype.next = function (value) {
                    if (this.closed) {
                        throw new ObjectUnsubscribedError();
                    }
                    if (!this.isStopped) {
                        var observers = this.observers;
                        var len = observers.length;
                        var copy = observers.slice();
                        for (var i = 0; i < len; i++) {
                            copy[i].next(value);
                        }
                    }
                };
                Subject.prototype.error = function (err) {
                    if (this.closed) {
                        throw new ObjectUnsubscribedError();
                    }
                    this.hasError = true;
                    this.thrownError = err;
                    this.isStopped = true;
                    var observers = this.observers;
                    var len = observers.length;
                    var copy = observers.slice();
                    for (var i = 0; i < len; i++) {
                        copy[i].error(err);
                    }
                    this.observers.length = 0;
                };
                Subject.prototype.complete = function () {
                    if (this.closed) {
                        throw new ObjectUnsubscribedError();
                    }
                    this.isStopped = true;
                    var observers = this.observers;
                    var len = observers.length;
                    var copy = observers.slice();
                    for (var i = 0; i < len; i++) {
                        copy[i].complete();
                    }
                    this.observers.length = 0;
                };
                Subject.prototype.unsubscribe = function () {
                    this.isStopped = true;
                    this.closed = true;
                    this.observers = null;
                };
                Subject.prototype._trySubscribe = function (subscriber) {
                    if (this.closed) {
                        throw new ObjectUnsubscribedError();
                    }
                    else {
                        return _super.prototype._trySubscribe.call(this, subscriber);
                    }
                };
                Subject.prototype._subscribe = function (subscriber) {
                    if (this.closed) {
                        throw new ObjectUnsubscribedError();
                    }
                    else if (this.hasError) {
                        subscriber.error(this.thrownError);
                        return Subscription.EMPTY;
                    }
                    else if (this.isStopped) {
                        subscriber.complete();
                        return Subscription.EMPTY;
                    }
                    else {
                        this.observers.push(subscriber);
                        return new SubjectSubscription(this, subscriber);
                    }
                };
                Subject.prototype.asObservable = function () {
                    var observable = new Observable();
                    observable.source = this;
                    return observable;
                };
                Subject.create = function (destination, source) {
                    return new AnonymousSubject(destination, source);
                };
                return Subject;
            }(Observable));
            var AnonymousSubject = /*@__PURE__*/ (function (_super) {
                __extends(AnonymousSubject, _super);
                function AnonymousSubject(destination, source) {
                    var _this = _super.call(this) || this;
                    _this.destination = destination;
                    _this.source = source;
                    return _this;
                }
                AnonymousSubject.prototype.next = function (value) {
                    var destination = this.destination;
                    if (destination && destination.next) {
                        destination.next(value);
                    }
                };
                AnonymousSubject.prototype.error = function (err) {
                    var destination = this.destination;
                    if (destination && destination.error) {
                        this.destination.error(err);
                    }
                };
                AnonymousSubject.prototype.complete = function () {
                    var destination = this.destination;
                    if (destination && destination.complete) {
                        this.destination.complete();
                    }
                };
                AnonymousSubject.prototype._subscribe = function (subscriber) {
                    var source = this.source;
                    if (source) {
                        return this.source.subscribe(subscriber);
                    }
                    else {
                        return Subscription.EMPTY;
                    }
                };
                return AnonymousSubject;
            }(Subject));

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            function isScheduler(value) {
                return value && typeof value.schedule === 'function';
            }

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            var subscribeToArray = function (array) {
                return function (subscriber) {
                    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
                        subscriber.next(array[i]);
                    }
                    subscriber.complete();
                };
            };

            /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
            function scheduleArray(input, scheduler) {
                return new Observable(function (subscriber) {
                    var sub = new Subscription();
                    var i = 0;
                    sub.add(scheduler.schedule(function () {
                        if (i === input.length) {
                            subscriber.complete();
                            return;
                        }
                        subscriber.next(input[i++]);
                        if (!subscriber.closed) {
                            sub.add(this.schedule());
                        }
                    }));
                    return sub;
                });
            }

            /** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */
            function fromArray(input, scheduler) {
                if (!scheduler) {
                    return new Observable(subscribeToArray(input));
                }
                else {
                    return scheduleArray(input, scheduler);
                }
            }

            /** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */
            function of() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var scheduler = args[args.length - 1];
                if (isScheduler(scheduler)) {
                    args.pop();
                    return scheduleArray(args, scheduler);
                }
                else {
                    return fromArray(args);
                }
            }

            /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
            function map(project, thisArg) {
                return function mapOperation(source) {
                    if (typeof project !== 'function') {
                        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
                    }
                    return source.lift(new MapOperator(project, thisArg));
                };
            }
            var MapOperator = /*@__PURE__*/ (function () {
                function MapOperator(project, thisArg) {
                    this.project = project;
                    this.thisArg = thisArg;
                }
                MapOperator.prototype.call = function (subscriber, source) {
                    return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
                };
                return MapOperator;
            }());
            var MapSubscriber = /*@__PURE__*/ (function (_super) {
                __extends(MapSubscriber, _super);
                function MapSubscriber(destination, project, thisArg) {
                    var _this = _super.call(this, destination) || this;
                    _this.project = project;
                    _this.count = 0;
                    _this.thisArg = thisArg || _this;
                    return _this;
                }
                MapSubscriber.prototype._next = function (value) {
                    var result;
                    try {
                        result = this.project.call(this.thisArg, value, this.count++);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    this.destination.next(result);
                };
                return MapSubscriber;
            }(Subscriber));

            /** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
            var subscribeToPromise = function (promise) {
                return function (subscriber) {
                    promise.then(function (value) {
                        if (!subscriber.closed) {
                            subscriber.next(value);
                            subscriber.complete();
                        }
                    }, function (err) { return subscriber.error(err); })
                        .then(null, hostReportError);
                    return subscriber;
                };
            };

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            function getSymbolIterator() {
                if (typeof Symbol !== 'function' || !Symbol.iterator) {
                    return '@@iterator';
                }
                return Symbol.iterator;
            }
            var iterator = /*@__PURE__*/ getSymbolIterator();

            /** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
            var subscribeToIterable = function (iterable) {
                return function (subscriber) {
                    var iterator$1 = iterable[iterator]();
                    do {
                        var item = void 0;
                        try {
                            item = iterator$1.next();
                        }
                        catch (err) {
                            subscriber.error(err);
                            return subscriber;
                        }
                        if (item.done) {
                            subscriber.complete();
                            break;
                        }
                        subscriber.next(item.value);
                        if (subscriber.closed) {
                            break;
                        }
                    } while (true);
                    if (typeof iterator$1.return === 'function') {
                        subscriber.add(function () {
                            if (iterator$1.return) {
                                iterator$1.return();
                            }
                        });
                    }
                    return subscriber;
                };
            };

            /** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
            var subscribeToObservable = function (obj) {
                return function (subscriber) {
                    var obs = obj[observable]();
                    if (typeof obs.subscribe !== 'function') {
                        throw new TypeError('Provided object does not correctly implement Symbol.observable');
                    }
                    else {
                        return obs.subscribe(subscriber);
                    }
                };
            };

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

            /** PURE_IMPORTS_START  PURE_IMPORTS_END */
            function isPromise(value) {
                return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
            }

            /** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
            var subscribeTo = function (result) {
                if (!!result && typeof result[observable] === 'function') {
                    return subscribeToObservable(result);
                }
                else if (isArrayLike(result)) {
                    return subscribeToArray(result);
                }
                else if (isPromise(result)) {
                    return subscribeToPromise(result);
                }
                else if (!!result && typeof result[iterator] === 'function') {
                    return subscribeToIterable(result);
                }
                else {
                    var value = isObject(result) ? 'an invalid object' : "'" + result + "'";
                    var msg = "You provided " + value + " where a stream was expected."
                        + ' You can provide an Observable, Promise, Array, or Iterable.';
                    throw new TypeError(msg);
                }
            };

            /** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */
            function scheduleObservable(input, scheduler) {
                return new Observable(function (subscriber) {
                    var sub = new Subscription();
                    sub.add(scheduler.schedule(function () {
                        var observable$1 = input[observable]();
                        sub.add(observable$1.subscribe({
                            next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                            error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                            complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
                        }));
                    }));
                    return sub;
                });
            }

            /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
            function schedulePromise(input, scheduler) {
                return new Observable(function (subscriber) {
                    var sub = new Subscription();
                    sub.add(scheduler.schedule(function () {
                        return input.then(function (value) {
                            sub.add(scheduler.schedule(function () {
                                subscriber.next(value);
                                sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                            }));
                        }, function (err) {
                            sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
                        });
                    }));
                    return sub;
                });
            }

            /** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */
            function scheduleIterable(input, scheduler) {
                if (!input) {
                    throw new Error('Iterable cannot be null');
                }
                return new Observable(function (subscriber) {
                    var sub = new Subscription();
                    var iterator$1;
                    sub.add(function () {
                        if (iterator$1 && typeof iterator$1.return === 'function') {
                            iterator$1.return();
                        }
                    });
                    sub.add(scheduler.schedule(function () {
                        iterator$1 = input[iterator]();
                        sub.add(scheduler.schedule(function () {
                            if (subscriber.closed) {
                                return;
                            }
                            var value;
                            var done;
                            try {
                                var result = iterator$1.next();
                                value = result.value;
                                done = result.done;
                            }
                            catch (err) {
                                subscriber.error(err);
                                return;
                            }
                            if (done) {
                                subscriber.complete();
                            }
                            else {
                                subscriber.next(value);
                                this.schedule();
                            }
                        }));
                    }));
                    return sub;
                });
            }

            /** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
            function isInteropObservable(input) {
                return input && typeof input[observable] === 'function';
            }

            /** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
            function isIterable(input) {
                return input && typeof input[iterator] === 'function';
            }

            /** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */
            function scheduled(input, scheduler) {
                if (input != null) {
                    if (isInteropObservable(input)) {
                        return scheduleObservable(input, scheduler);
                    }
                    else if (isPromise(input)) {
                        return schedulePromise(input, scheduler);
                    }
                    else if (isArrayLike(input)) {
                        return scheduleArray(input, scheduler);
                    }
                    else if (isIterable(input) || typeof input === 'string') {
                        return scheduleIterable(input, scheduler);
                    }
                }
                throw new TypeError((input !== null && typeof input || input) + ' is not observable');
            }

            /** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */
            function from(input, scheduler) {
                if (!scheduler) {
                    if (input instanceof Observable) {
                        return input;
                    }
                    return new Observable(subscribeTo(input));
                }
                else {
                    return scheduled(input, scheduler);
                }
            }

            /** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_util_subscribeTo PURE_IMPORTS_END */
            var SimpleInnerSubscriber = /*@__PURE__*/ (function (_super) {
                __extends(SimpleInnerSubscriber, _super);
                function SimpleInnerSubscriber(parent) {
                    var _this = _super.call(this) || this;
                    _this.parent = parent;
                    return _this;
                }
                SimpleInnerSubscriber.prototype._next = function (value) {
                    this.parent.notifyNext(value);
                };
                SimpleInnerSubscriber.prototype._error = function (error) {
                    this.parent.notifyError(error);
                    this.unsubscribe();
                };
                SimpleInnerSubscriber.prototype._complete = function () {
                    this.parent.notifyComplete();
                    this.unsubscribe();
                };
                return SimpleInnerSubscriber;
            }(Subscriber));
            var SimpleOuterSubscriber = /*@__PURE__*/ (function (_super) {
                __extends(SimpleOuterSubscriber, _super);
                function SimpleOuterSubscriber() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                SimpleOuterSubscriber.prototype.notifyNext = function (innerValue) {
                    this.destination.next(innerValue);
                };
                SimpleOuterSubscriber.prototype.notifyError = function (err) {
                    this.destination.error(err);
                };
                SimpleOuterSubscriber.prototype.notifyComplete = function () {
                    this.destination.complete();
                };
                return SimpleOuterSubscriber;
            }(Subscriber));
            function innerSubscribe(result, innerSubscriber) {
                if (innerSubscriber.closed) {
                    return undefined;
                }
                if (result instanceof Observable) {
                    return result.subscribe(innerSubscriber);
                }
                return subscribeTo(result)(innerSubscriber);
            }

            /** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */
            function mergeMap(project, resultSelector, concurrent) {
                if (concurrent === void 0) {
                    concurrent = Number.POSITIVE_INFINITY;
                }
                if (typeof resultSelector === 'function') {
                    return function (source) { return source.pipe(mergeMap(function (a, i) { return from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
                }
                else if (typeof resultSelector === 'number') {
                    concurrent = resultSelector;
                }
                return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
            }
            var MergeMapOperator = /*@__PURE__*/ (function () {
                function MergeMapOperator(project, concurrent) {
                    if (concurrent === void 0) {
                        concurrent = Number.POSITIVE_INFINITY;
                    }
                    this.project = project;
                    this.concurrent = concurrent;
                }
                MergeMapOperator.prototype.call = function (observer, source) {
                    return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
                };
                return MergeMapOperator;
            }());
            var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
                __extends(MergeMapSubscriber, _super);
                function MergeMapSubscriber(destination, project, concurrent) {
                    if (concurrent === void 0) {
                        concurrent = Number.POSITIVE_INFINITY;
                    }
                    var _this = _super.call(this, destination) || this;
                    _this.project = project;
                    _this.concurrent = concurrent;
                    _this.hasCompleted = false;
                    _this.buffer = [];
                    _this.active = 0;
                    _this.index = 0;
                    return _this;
                }
                MergeMapSubscriber.prototype._next = function (value) {
                    if (this.active < this.concurrent) {
                        this._tryNext(value);
                    }
                    else {
                        this.buffer.push(value);
                    }
                };
                MergeMapSubscriber.prototype._tryNext = function (value) {
                    var result;
                    var index = this.index++;
                    try {
                        result = this.project(value, index);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    this.active++;
                    this._innerSub(result);
                };
                MergeMapSubscriber.prototype._innerSub = function (ish) {
                    var innerSubscriber = new SimpleInnerSubscriber(this);
                    var destination = this.destination;
                    destination.add(innerSubscriber);
                    var innerSubscription = innerSubscribe(ish, innerSubscriber);
                    if (innerSubscription !== innerSubscriber) {
                        destination.add(innerSubscription);
                    }
                };
                MergeMapSubscriber.prototype._complete = function () {
                    this.hasCompleted = true;
                    if (this.active === 0 && this.buffer.length === 0) {
                        this.destination.complete();
                    }
                    this.unsubscribe();
                };
                MergeMapSubscriber.prototype.notifyNext = function (innerValue) {
                    this.destination.next(innerValue);
                };
                MergeMapSubscriber.prototype.notifyComplete = function () {
                    var buffer = this.buffer;
                    this.active--;
                    if (buffer.length > 0) {
                        this._next(buffer.shift());
                    }
                    else if (this.active === 0 && this.hasCompleted) {
                        this.destination.complete();
                    }
                };
                return MergeMapSubscriber;
            }(SimpleOuterSubscriber));

            /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
            function filter(predicate, thisArg) {
                return function filterOperatorFunction(source) {
                    return source.lift(new FilterOperator(predicate, thisArg));
                };
            }
            var FilterOperator = /*@__PURE__*/ (function () {
                function FilterOperator(predicate, thisArg) {
                    this.predicate = predicate;
                    this.thisArg = thisArg;
                }
                FilterOperator.prototype.call = function (subscriber, source) {
                    return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
                };
                return FilterOperator;
            }());
            var FilterSubscriber = /*@__PURE__*/ (function (_super) {
                __extends(FilterSubscriber, _super);
                function FilterSubscriber(destination, predicate, thisArg) {
                    var _this = _super.call(this, destination) || this;
                    _this.predicate = predicate;
                    _this.thisArg = thisArg;
                    _this.count = 0;
                    return _this;
                }
                FilterSubscriber.prototype._next = function (value) {
                    var result;
                    try {
                        result = this.predicate.call(this.thisArg, value, this.count++);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    if (result) {
                        this.destination.next(value);
                    }
                };
                return FilterSubscriber;
            }(Subscriber));

            /** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */
            function concatMap(project, resultSelector) {
                return mergeMap(project, resultSelector, 1);
            }

            /**
             * @license Angular v11.1.1
             * (c) 2010-2020 Google LLC. https://angular.io/
             * License: MIT
             */

            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
             * `HttpResponse`.
             *
             * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
             * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
             * `HttpBackend`.
             *
             * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
             *
             * @publicApi
             */
            class HttpHandler {
            }
            /**
             * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
             *
             * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
             *
             * When injected, `HttpBackend` dispatches requests directly to the backend, without going
             * through the interceptor chain.
             *
             * @publicApi
             */
            class HttpBackend {
            }

            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * Represents the header configuration options for an HTTP request.
             * Instances are immutable. Modifying methods return a cloned
             * instance with the change. The original object is never changed.
             *
             * @publicApi
             */
            class HttpHeaders {
                /**  Constructs a new HTTP header object with the given values.*/
                constructor(headers) {
                    /**
                     * Internal map of lowercased header names to the normalized
                     * form of the name (the form seen first).
                     */
                    this.normalizedNames = new Map();
                    /**
                     * Queued updates to be materialized the next initialization.
                     */
                    this.lazyUpdate = null;
                    if (!headers) {
                        this.headers = new Map();
                    }
                    else if (typeof headers === 'string') {
                        this.lazyInit = () => {
                            this.headers = new Map();
                            headers.split('\n').forEach(line => {
                                const index = line.indexOf(':');
                                if (index > 0) {
                                    const name = line.slice(0, index);
                                    const key = name.toLowerCase();
                                    const value = line.slice(index + 1).trim();
                                    this.maybeSetNormalizedName(name, key);
                                    if (this.headers.has(key)) {
                                        this.headers.get(key).push(value);
                                    }
                                    else {
                                        this.headers.set(key, [value]);
                                    }
                                }
                            });
                        };
                    }
                    else {
                        this.lazyInit = () => {
                            this.headers = new Map();
                            Object.keys(headers).forEach(name => {
                                let values = headers[name];
                                const key = name.toLowerCase();
                                if (typeof values === 'string') {
                                    values = [values];
                                }
                                if (values.length > 0) {
                                    this.headers.set(key, values);
                                    this.maybeSetNormalizedName(name, key);
                                }
                            });
                        };
                    }
                }
                /**
                 * Checks for existence of a given header.
                 *
                 * @param name The header name to check for existence.
                 *
                 * @returns True if the header exists, false otherwise.
                 */
                has(name) {
                    this.init();
                    return this.headers.has(name.toLowerCase());
                }
                /**
                 * Retrieves the first value of a given header.
                 *
                 * @param name The header name.
                 *
                 * @returns The value string if the header exists, null otherwise
                 */
                get(name) {
                    this.init();
                    const values = this.headers.get(name.toLowerCase());
                    return values && values.length > 0 ? values[0] : null;
                }
                /**
                 * Retrieves the names of the headers.
                 *
                 * @returns A list of header names.
                 */
                keys() {
                    this.init();
                    return Array.from(this.normalizedNames.values());
                }
                /**
                 * Retrieves a list of values for a given header.
                 *
                 * @param name The header name from which to retrieve values.
                 *
                 * @returns A string of values if the header exists, null otherwise.
                 */
                getAll(name) {
                    this.init();
                    return this.headers.get(name.toLowerCase()) || null;
                }
                /**
                 * Appends a new value to the existing set of values for a header
                 * and returns them in a clone of the original instance.
                 *
                 * @param name The header name for which to append the values.
                 * @param value The value to append.
                 *
                 * @returns A clone of the HTTP headers object with the value appended to the given header.
                 */
                append(name, value) {
                    return this.clone({ name, value, op: 'a' });
                }
                /**
                 * Sets or modifies a value for a given header in a clone of the original instance.
                 * If the header already exists, its value is replaced with the given value
                 * in the returned object.
                 *
                 * @param name The header name.
                 * @param value The value or values to set or overide for the given header.
                 *
                 * @returns A clone of the HTTP headers object with the newly set header value.
                 */
                set(name, value) {
                    return this.clone({ name, value, op: 's' });
                }
                /**
                 * Deletes values for a given header in a clone of the original instance.
                 *
                 * @param name The header name.
                 * @param value The value or values to delete for the given header.
                 *
                 * @returns A clone of the HTTP headers object with the given value deleted.
                 */
                delete(name, value) {
                    return this.clone({ name, value, op: 'd' });
                }
                maybeSetNormalizedName(name, lcName) {
                    if (!this.normalizedNames.has(lcName)) {
                        this.normalizedNames.set(lcName, name);
                    }
                }
                init() {
                    if (!!this.lazyInit) {
                        if (this.lazyInit instanceof HttpHeaders) {
                            this.copyFrom(this.lazyInit);
                        }
                        else {
                            this.lazyInit();
                        }
                        this.lazyInit = null;
                        if (!!this.lazyUpdate) {
                            this.lazyUpdate.forEach(update => this.applyUpdate(update));
                            this.lazyUpdate = null;
                        }
                    }
                }
                copyFrom(other) {
                    other.init();
                    Array.from(other.headers.keys()).forEach(key => {
                        this.headers.set(key, other.headers.get(key));
                        this.normalizedNames.set(key, other.normalizedNames.get(key));
                    });
                }
                clone(update) {
                    const clone = new HttpHeaders();
                    clone.lazyInit =
                        (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
                    clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
                    return clone;
                }
                applyUpdate(update) {
                    const key = update.name.toLowerCase();
                    switch (update.op) {
                        case 'a':
                        case 's':
                            let value = update.value;
                            if (typeof value === 'string') {
                                value = [value];
                            }
                            if (value.length === 0) {
                                return;
                            }
                            this.maybeSetNormalizedName(update.name, key);
                            const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                            base.push(...value);
                            this.headers.set(key, base);
                            break;
                        case 'd':
                            const toDelete = update.value;
                            if (!toDelete) {
                                this.headers.delete(key);
                                this.normalizedNames.delete(key);
                            }
                            else {
                                let existing = this.headers.get(key);
                                if (!existing) {
                                    return;
                                }
                                existing = existing.filter(value => toDelete.indexOf(value) === -1);
                                if (existing.length === 0) {
                                    this.headers.delete(key);
                                    this.normalizedNames.delete(key);
                                }
                                else {
                                    this.headers.set(key, existing);
                                }
                            }
                            break;
                    }
                }
                /**
                 * @internal
                 */
                forEach(fn) {
                    this.init();
                    Array.from(this.normalizedNames.keys())
                        .forEach(key => fn(this.normalizedNames.get(key), this.headers.get(key)));
                }
            }

            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * Provides encoding and decoding of URL parameter and query-string values.
             *
             * Serializes and parses URL parameter keys and values to encode and decode them.
             * If you pass URL query parameters without encoding,
             * the query parameters can be misinterpreted at the receiving end.
             *
             *
             * @publicApi
             */
            class HttpUrlEncodingCodec {
                /**
                 * Encodes a key name for a URL parameter or query-string.
                 * @param key The key name.
                 * @returns The encoded key name.
                 */
                encodeKey(key) {
                    return standardEncoding(key);
                }
                /**
                 * Encodes the value of a URL parameter or query-string.
                 * @param value The value.
                 * @returns The encoded value.
                 */
                encodeValue(value) {
                    return standardEncoding(value);
                }
                /**
                 * Decodes an encoded URL parameter or query-string key.
                 * @param key The encoded key name.
                 * @returns The decoded key name.
                 */
                decodeKey(key) {
                    return decodeURIComponent(key);
                }
                /**
                 * Decodes an encoded URL parameter or query-string value.
                 * @param value The encoded value.
                 * @returns The decoded value.
                 */
                decodeValue(value) {
                    return decodeURIComponent(value);
                }
            }
            function paramParser(rawParams, codec) {
                const map = new Map();
                if (rawParams.length > 0) {
                    const params = rawParams.split('&');
                    params.forEach((param) => {
                        const eqIdx = param.indexOf('=');
                        const [key, val] = eqIdx == -1 ?
                            [codec.decodeKey(param), ''] :
                            [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
                        const list = map.get(key) || [];
                        list.push(val);
                        map.set(key, list);
                    });
                }
                return map;
            }
            function standardEncoding(v) {
                return encodeURIComponent(v)
                    .replace(/%40/gi, '@')
                    .replace(/%3A/gi, ':')
                    .replace(/%24/gi, '$')
                    .replace(/%2C/gi, ',')
                    .replace(/%3B/gi, ';')
                    .replace(/%2B/gi, '+')
                    .replace(/%3D/gi, '=')
                    .replace(/%3F/gi, '?')
                    .replace(/%2F/gi, '/');
            }
            /**
             * An HTTP request/response body that represents serialized parameters,
             * per the MIME type `application/x-www-form-urlencoded`.
             *
             * This class is immutable; all mutation operations return a new instance.
             *
             * @publicApi
             */
            class HttpParams {
                constructor(options = {}) {
                    this.updates = null;
                    this.cloneFrom = null;
                    this.encoder = options.encoder || new HttpUrlEncodingCodec();
                    if (!!options.fromString) {
                        if (!!options.fromObject) {
                            throw new Error(`Cannot specify both fromString and fromObject.`);
                        }
                        this.map = paramParser(options.fromString, this.encoder);
                    }
                    else if (!!options.fromObject) {
                        this.map = new Map();
                        Object.keys(options.fromObject).forEach(key => {
                            const value = options.fromObject[key];
                            this.map.set(key, Array.isArray(value) ? value : [value]);
                        });
                    }
                    else {
                        this.map = null;
                    }
                }
                /**
                 * Reports whether the body includes one or more values for a given parameter.
                 * @param param The parameter name.
                 * @returns True if the parameter has one or more values,
                 * false if it has no value or is not present.
                 */
                has(param) {
                    this.init();
                    return this.map.has(param);
                }
                /**
                 * Retrieves the first value for a parameter.
                 * @param param The parameter name.
                 * @returns The first value of the given parameter,
                 * or `null` if the parameter is not present.
                 */
                get(param) {
                    this.init();
                    const res = this.map.get(param);
                    return !!res ? res[0] : null;
                }
                /**
                 * Retrieves all values for a  parameter.
                 * @param param The parameter name.
                 * @returns All values in a string array,
                 * or `null` if the parameter not present.
                 */
                getAll(param) {
                    this.init();
                    return this.map.get(param) || null;
                }
                /**
                 * Retrieves all the parameters for this body.
                 * @returns The parameter names in a string array.
                 */
                keys() {
                    this.init();
                    return Array.from(this.map.keys());
                }
                /**
                 * Appends a new value to existing values for a parameter.
                 * @param param The parameter name.
                 * @param value The new value to add.
                 * @return A new body with the appended value.
                 */
                append(param, value) {
                    return this.clone({ param, value, op: 'a' });
                }
                /**
                 * Replaces the value for a parameter.
                 * @param param The parameter name.
                 * @param value The new value.
                 * @return A new body with the new value.
                 */
                set(param, value) {
                    return this.clone({ param, value, op: 's' });
                }
                /**
                 * Removes a given value or all values from a parameter.
                 * @param param The parameter name.
                 * @param value The value to remove, if provided.
                 * @return A new body with the given value removed, or with all values
                 * removed if no value is specified.
                 */
                delete(param, value) {
                    return this.clone({ param, value, op: 'd' });
                }
                /**
                 * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
                 * separated by `&`s.
                 */
                toString() {
                    this.init();
                    return this.keys()
                        .map(key => {
                        const eKey = this.encoder.encodeKey(key);
                        // `a: ['1']` produces `'a=1'`
                        // `b: []` produces `''`
                        // `c: ['1', '2']` produces `'c=1&c=2'`
                        return this.map.get(key).map(value => eKey + '=' + this.encoder.encodeValue(value))
                            .join('&');
                    })
                        // filter out empty values because `b: []` produces `''`
                        // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
                        .filter(param => param !== '')
                        .join('&');
                }
                clone(update) {
                    const clone = new HttpParams({ encoder: this.encoder });
                    clone.cloneFrom = this.cloneFrom || this;
                    clone.updates = (this.updates || []).concat([update]);
                    return clone;
                }
                init() {
                    if (this.map === null) {
                        this.map = new Map();
                    }
                    if (this.cloneFrom !== null) {
                        this.cloneFrom.init();
                        this.cloneFrom.keys().forEach(key => this.map.set(key, this.cloneFrom.map.get(key)));
                        this.updates.forEach(update => {
                            switch (update.op) {
                                case 'a':
                                case 's':
                                    const base = (update.op === 'a' ? this.map.get(update.param) : undefined) || [];
                                    base.push(update.value);
                                    this.map.set(update.param, base);
                                    break;
                                case 'd':
                                    if (update.value !== undefined) {
                                        let base = this.map.get(update.param) || [];
                                        const idx = base.indexOf(update.value);
                                        if (idx !== -1) {
                                            base.splice(idx, 1);
                                        }
                                        if (base.length > 0) {
                                            this.map.set(update.param, base);
                                        }
                                        else {
                                            this.map.delete(update.param);
                                        }
                                    }
                                    else {
                                        this.map.delete(update.param);
                                        break;
                                    }
                            }
                        });
                        this.cloneFrom = this.updates = null;
                    }
                }
            }

            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * Determine whether the given HTTP method may include a body.
             */
            function mightHaveBody(method) {
                switch (method) {
                    case 'DELETE':
                    case 'GET':
                    case 'HEAD':
                    case 'OPTIONS':
                    case 'JSONP':
                        return false;
                    default:
                        return true;
                }
            }
            /**
             * Safely assert whether the given value is an ArrayBuffer.
             *
             * In some execution environments ArrayBuffer is not defined.
             */
            function isArrayBuffer(value) {
                return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
            }
            /**
             * Safely assert whether the given value is a Blob.
             *
             * In some execution environments Blob is not defined.
             */
            function isBlob(value) {
                return typeof Blob !== 'undefined' && value instanceof Blob;
            }
            /**
             * Safely assert whether the given value is a FormData instance.
             *
             * In some execution environments FormData is not defined.
             */
            function isFormData(value) {
                return typeof FormData !== 'undefined' && value instanceof FormData;
            }
            /**
             * An outgoing HTTP request with an optional typed body.
             *
             * `HttpRequest` represents an outgoing request, including URL, method,
             * headers, body, and other request configuration options. Instances should be
             * assumed to be immutable. To modify a `HttpRequest`, the `clone`
             * method should be used.
             *
             * @publicApi
             */
            class HttpRequest {
                constructor(method, url, third, fourth) {
                    this.url = url;
                    /**
                     * The request body, or `null` if one isn't set.
                     *
                     * Bodies are not enforced to be immutable, as they can include a reference to any
                     * user-defined data type. However, interceptors should take care to preserve
                     * idempotence by treating them as such.
                     */
                    this.body = null;
                    /**
                     * Whether this request should be made in a way that exposes progress events.
                     *
                     * Progress events are expensive (change detection runs on each event) and so
                     * they should only be requested if the consumer intends to monitor them.
                     */
                    this.reportProgress = false;
                    /**
                     * Whether this request should be sent with outgoing credentials (cookies).
                     */
                    this.withCredentials = false;
                    /**
                     * The expected response type of the server.
                     *
                     * This is used to parse the response appropriately before returning it to
                     * the requestee.
                     */
                    this.responseType = 'json';
                    this.method = method.toUpperCase();
                    // Next, need to figure out which argument holds the HttpRequestInit
                    // options, if any.
                    let options;
                    // Check whether a body argument is expected. The only valid way to omit
                    // the body argument is to use a known no-body method like GET.
                    if (mightHaveBody(this.method) || !!fourth) {
                        // Body is the third argument, options are the fourth.
                        this.body = (third !== undefined) ? third : null;
                        options = fourth;
                    }
                    else {
                        // No body required, options are the third argument. The body stays null.
                        options = third;
                    }
                    // If options have been passed, interpret them.
                    if (options) {
                        // Normalize reportProgress and withCredentials.
                        this.reportProgress = !!options.reportProgress;
                        this.withCredentials = !!options.withCredentials;
                        // Override default response type of 'json' if one is provided.
                        if (!!options.responseType) {
                            this.responseType = options.responseType;
                        }
                        // Override headers if they're provided.
                        if (!!options.headers) {
                            this.headers = options.headers;
                        }
                        if (!!options.params) {
                            this.params = options.params;
                        }
                    }
                    // If no headers have been passed in, construct a new HttpHeaders instance.
                    if (!this.headers) {
                        this.headers = new HttpHeaders();
                    }
                    // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
                    if (!this.params) {
                        this.params = new HttpParams();
                        this.urlWithParams = url;
                    }
                    else {
                        // Encode the parameters to a string in preparation for inclusion in the URL.
                        const params = this.params.toString();
                        if (params.length === 0) {
                            // No parameters, the visible URL is just the URL given at creation time.
                            this.urlWithParams = url;
                        }
                        else {
                            // Does the URL already have query parameters? Look for '?'.
                            const qIdx = url.indexOf('?');
                            // There are 3 cases to handle:
                            // 1) No existing parameters -> append '?' followed by params.
                            // 2) '?' exists and is followed by existing query string ->
                            //    append '&' followed by params.
                            // 3) '?' exists at the end of the url -> append params directly.
                            // This basically amounts to determining the character, if any, with
                            // which to join the URL and parameters.
                            const sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                            this.urlWithParams = url + sep + params;
                        }
                    }
                }
                /**
                 * Transform the free-form body into a serialized format suitable for
                 * transmission to the server.
                 */
                serializeBody() {
                    // If no body is present, no need to serialize it.
                    if (this.body === null) {
                        return null;
                    }
                    // Check whether the body is already in a serialized form. If so,
                    // it can just be returned directly.
                    if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
                        typeof this.body === 'string') {
                        return this.body;
                    }
                    // Check whether the body is an instance of HttpUrlEncodedParams.
                    if (this.body instanceof HttpParams) {
                        return this.body.toString();
                    }
                    // Check whether the body is an object or array, and serialize with JSON if so.
                    if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
                        Array.isArray(this.body)) {
                        return JSON.stringify(this.body);
                    }
                    // Fall back on toString() for everything else.
                    return this.body.toString();
                }
                /**
                 * Examine the body and attempt to infer an appropriate MIME type
                 * for it.
                 *
                 * If no such type can be inferred, this method will return `null`.
                 */
                detectContentTypeHeader() {
                    // An empty body has no content type.
                    if (this.body === null) {
                        return null;
                    }
                    // FormData bodies rely on the browser's content type assignment.
                    if (isFormData(this.body)) {
                        return null;
                    }
                    // Blobs usually have their own content type. If it doesn't, then
                    // no type can be inferred.
                    if (isBlob(this.body)) {
                        return this.body.type || null;
                    }
                    // Array buffers have unknown contents and thus no type can be inferred.
                    if (isArrayBuffer(this.body)) {
                        return null;
                    }
                    // Technically, strings could be a form of JSON data, but it's safe enough
                    // to assume they're plain strings.
                    if (typeof this.body === 'string') {
                        return 'text/plain';
                    }
                    // `HttpUrlEncodedParams` has its own content-type.
                    if (this.body instanceof HttpParams) {
                        return 'application/x-www-form-urlencoded;charset=UTF-8';
                    }
                    // Arrays, objects, and numbers will be encoded as JSON.
                    if (typeof this.body === 'object' || typeof this.body === 'number' ||
                        Array.isArray(this.body)) {
                        return 'application/json';
                    }
                    // No type could be inferred.
                    return null;
                }
                clone(update = {}) {
                    // For method, url, and responseType, take the current value unless
                    // it is overridden in the update hash.
                    const method = update.method || this.method;
                    const url = update.url || this.url;
                    const responseType = update.responseType || this.responseType;
                    // The body is somewhat special - a `null` value in update.body means
                    // whatever current body is present is being overridden with an empty
                    // body, whereas an `undefined` value in update.body implies no
                    // override.
                    const body = (update.body !== undefined) ? update.body : this.body;
                    // Carefully handle the boolean options to differentiate between
                    // `false` and `undefined` in the update args.
                    const withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
                    const reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
                    // Headers and params may be appended to if `setHeaders` or
                    // `setParams` are used.
                    let headers = update.headers || this.headers;
                    let params = update.params || this.params;
                    // Check whether the caller has asked to add headers.
                    if (update.setHeaders !== undefined) {
                        // Set every requested header.
                        headers =
                            Object.keys(update.setHeaders)
                                .reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
                    }
                    // Check whether the caller has asked to set params.
                    if (update.setParams) {
                        // Set every requested param.
                        params = Object.keys(update.setParams)
                            .reduce((params, param) => params.set(param, update.setParams[param]), params);
                    }
                    // Finally, construct the new HttpRequest using the pieces from above.
                    return new HttpRequest(method, url, body, {
                        params,
                        headers,
                        reportProgress,
                        responseType,
                        withCredentials,
                    });
                }
            }

            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * Type enumeration for the different kinds of `HttpEvent`.
             *
             * @publicApi
             */
            var HttpEventType;
            (function (HttpEventType) {
                /**
                 * The request was sent out over the wire.
                 */
                HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
                /**
                 * An upload progress event was received.
                 */
                HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
                /**
                 * The response status code and headers were received.
                 */
                HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
                /**
                 * A download progress event was received.
                 */
                HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
                /**
                 * The full response including the body was received.
                 */
                HttpEventType[HttpEventType["Response"] = 4] = "Response";
                /**
                 * A custom event from an interceptor or a backend.
                 */
                HttpEventType[HttpEventType["User"] = 5] = "User";
            })(HttpEventType || (HttpEventType = {}));
            /**
             * Base class for both `HttpResponse` and `HttpHeaderResponse`.
             *
             * @publicApi
             */
            class HttpResponseBase {
                /**
                 * Super-constructor for all responses.
                 *
                 * The single parameter accepted is an initialization hash. Any properties
                 * of the response passed there will override the default values.
                 */
                constructor(init, defaultStatus = 200, defaultStatusText = 'OK') {
                    // If the hash has values passed, use them to initialize the response.
                    // Otherwise use the default values.
                    this.headers = init.headers || new HttpHeaders();
                    this.status = init.status !== undefined ? init.status : defaultStatus;
                    this.statusText = init.statusText || defaultStatusText;
                    this.url = init.url || null;
                    // Cache the ok value to avoid defining a getter.
                    this.ok = this.status >= 200 && this.status < 300;
                }
            }
            /**
             * A partial HTTP response which only includes the status and header data,
             * but no response body.
             *
             * `HttpHeaderResponse` is a `HttpEvent` available on the response
             * event stream, only when progress events are requested.
             *
             * @publicApi
             */
            class HttpHeaderResponse extends HttpResponseBase {
                /**
                 * Create a new `HttpHeaderResponse` with the given parameters.
                 */
                constructor(init = {}) {
                    super(init);
                    this.type = HttpEventType.ResponseHeader;
                }
                /**
                 * Copy this `HttpHeaderResponse`, overriding its contents with the
                 * given parameter hash.
                 */
                clone(update = {}) {
                    // Perform a straightforward initialization of the new HttpHeaderResponse,
                    // overriding the current parameters with new ones if given.
                    return new HttpHeaderResponse({
                        headers: update.headers || this.headers,
                        status: update.status !== undefined ? update.status : this.status,
                        statusText: update.statusText || this.statusText,
                        url: update.url || this.url || undefined,
                    });
                }
            }
            /**
             * A full HTTP response, including a typed response body (which may be `null`
             * if one was not returned).
             *
             * `HttpResponse` is a `HttpEvent` available on the response event
             * stream.
             *
             * @publicApi
             */
            class HttpResponse extends HttpResponseBase {
                /**
                 * Construct a new `HttpResponse`.
                 */
                constructor(init = {}) {
                    super(init);
                    this.type = HttpEventType.Response;
                    this.body = init.body !== undefined ? init.body : null;
                }
                clone(update = {}) {
                    return new HttpResponse({
                        body: (update.body !== undefined) ? update.body : this.body,
                        headers: update.headers || this.headers,
                        status: (update.status !== undefined) ? update.status : this.status,
                        statusText: update.statusText || this.statusText,
                        url: update.url || this.url || undefined,
                    });
                }
            }
            /**
             * A response that represents an error or failure, either from a
             * non-successful HTTP status, an error while executing the request,
             * or some other failure which occurred during the parsing of the response.
             *
             * Any error returned on the `Observable` response stream will be
             * wrapped in an `HttpErrorResponse` to provide additional context about
             * the state of the HTTP layer when the error occurred. The error property
             * will contain either a wrapped Error object or the error response returned
             * from the server.
             *
             * @publicApi
             */
            class HttpErrorResponse extends HttpResponseBase {
                constructor(init) {
                    // Initialize with a default status of 0 / Unknown Error.
                    super(init, 0, 'Unknown Error');
                    this.name = 'HttpErrorResponse';
                    /**
                     * Errors are never okay, even when the status code is in the 2xx success range.
                     */
                    this.ok = false;
                    // If the response was successful, then this was a parse error. Otherwise, it was
                    // a protocol-level failure of some sort. Either the request failed in transit
                    // or the server returned an unsuccessful status code.
                    if (this.status >= 200 && this.status < 300) {
                        this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
                    }
                    else {
                        this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
                    }
                    this.error = init.error || null;
                }
            }

            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
             * the given `body`. This function clones the object and adds the body.
             *
             * Note that the `responseType` *options* value is a String that identifies the
             * single data type of the response.
             * A single overload version of the method handles each response type.
             * The value of `responseType` cannot be a union, as the combined signature could imply.
             *
             */
            function addBody(options, body) {
                return {
                    body,
                    headers: options.headers,
                    observe: options.observe,
                    params: options.params,
                    reportProgress: options.reportProgress,
                    responseType: options.responseType,
                    withCredentials: options.withCredentials,
                };
            }
            /**
             * Performs HTTP requests.
             * This service is available as an injectable class, with methods to perform HTTP requests.
             * Each request method has multiple signatures, and the return type varies based on
             * the signature that is called (mainly the values of `observe` and `responseType`).
             *
             * Note that the `responseType` *options* value is a String that identifies the
             * single data type of the response.
             * A single overload version of the method handles each response type.
             * The value of `responseType` cannot be a union, as the combined signature could imply.

             *
             * @usageNotes
             * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
             *
             * ### HTTP Request Example
             *
             * ```
             *  // GET heroes whose name contains search term
             * searchHeroes(term: string): observable<Hero[]>{
             *
             *  const params = new HttpParams({fromString: 'name=term'});
             *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
             * }
             * ```
             * ### JSONP Example
             * ```
             * requestJsonp(url, callback = 'callback') {
             *  return this.httpClient.jsonp(this.heroesURL, callback);
             * }
             * ```
             *
             * ### PATCH Example
             * ```
             * // PATCH one of the heroes' name
             * patchHero (id: number, heroName: string): Observable<{}> {
             * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
             *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
             *    .pipe(catchError(this.handleError('patchHero')));
             * }
             * ```
             *
             * @see [HTTP Guide](guide/http)
             *
             * @publicApi
             */
            class HttpClient {
                constructor(handler) {
                    this.handler = handler;
                }
                /**
                 * Constructs an observable for a generic HTTP request that, when subscribed,
                 * fires the request through the chain of registered interceptors and on to the
                 * server.
                 *
                 * You can pass an `HttpRequest` directly as the only parameter. In this case,
                 * the call returns an observable of the raw `HttpEvent` stream.
                 *
                 * Alternatively you can pass an HTTP method as the first parameter,
                 * a URL string as the second, and an options hash containing the request body as the third.
                 * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
                 * type of returned observable.
                 *   * The `responseType` value determines how a successful response body is parsed.
                 *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
                 * object as a type parameter to the call.
                 *
                 * The `observe` value determines the return type, according to what you are interested in
                 * observing.
                 *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
                 * progress events by default.
                 *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
                 * where the `T` parameter depends on the `responseType` and any optionally provided type
                 * parameter.
                 *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
                 *
                 */
                request(first, url, options = {}) {
                    let req;
                    // First, check whether the primary argument is an instance of `HttpRequest`.
                    if (first instanceof HttpRequest) {
                        // It is. The other arguments must be undefined (per the signatures) and can be
                        // ignored.
                        req = first;
                    }
                    else {
                        // It's a string, so it represents a URL. Construct a request based on it,
                        // and incorporate the remaining arguments (assuming `GET` unless a method is
                        // provided.
                        // Figure out the headers.
                        let headers = undefined;
                        if (options.headers instanceof HttpHeaders) {
                            headers = options.headers;
                        }
                        else {
                            headers = new HttpHeaders(options.headers);
                        }
                        // Sort out parameters.
                        let params = undefined;
                        if (!!options.params) {
                            if (options.params instanceof HttpParams) {
                                params = options.params;
                            }
                            else {
                                params = new HttpParams({ fromObject: options.params });
                            }
                        }
                        // Construct the request.
                        req = new HttpRequest(first, url, (options.body !== undefined ? options.body : null), {
                            headers,
                            params,
                            reportProgress: options.reportProgress,
                            // By default, JSON is assumed to be returned for all calls.
                            responseType: options.responseType || 'json',
                            withCredentials: options.withCredentials,
                        });
                    }
                    // Start with an Observable.of() the initial request, and run the handler (which
                    // includes all interceptors) inside a concatMap(). This way, the handler runs
                    // inside an Observable chain, which causes interceptors to be re-run on every
                    // subscription (this also makes retries re-run the handler, including interceptors).
                    const events$ = of(req).pipe(concatMap((req) => this.handler.handle(req)));
                    // If coming via the API signature which accepts a previously constructed HttpRequest,
                    // the only option is to get the event stream. Otherwise, return the event stream if
                    // that is what was requested.
                    if (first instanceof HttpRequest || options.observe === 'events') {
                        return events$;
                    }
                    // The requested stream contains either the full response or the body. In either
                    // case, the first step is to filter the event stream to extract a stream of
                    // responses(s).
                    const res$ = events$.pipe(filter((event) => event instanceof HttpResponse));
                    // Decide which stream to return.
                    switch (options.observe || 'body') {
                        case 'body':
                            // The requested stream is the body. Map the response stream to the response
                            // body. This could be done more simply, but a misbehaving interceptor might
                            // transform the response body into a different format and ignore the requested
                            // responseType. Guard against this by validating that the response is of the
                            // requested type.
                            switch (req.responseType) {
                                case 'arraybuffer':
                                    return res$.pipe(map((res) => {
                                        // Validate that the body is an ArrayBuffer.
                                        if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                            throw new Error('Response is not an ArrayBuffer.');
                                        }
                                        return res.body;
                                    }));
                                case 'blob':
                                    return res$.pipe(map((res) => {
                                        // Validate that the body is a Blob.
                                        if (res.body !== null && !(res.body instanceof Blob)) {
                                            throw new Error('Response is not a Blob.');
                                        }
                                        return res.body;
                                    }));
                                case 'text':
                                    return res$.pipe(map((res) => {
                                        // Validate that the body is a string.
                                        if (res.body !== null && typeof res.body !== 'string') {
                                            throw new Error('Response is not a string.');
                                        }
                                        return res.body;
                                    }));
                                case 'json':
                                default:
                                    // No validation needed for JSON responses, as they can be of any type.
                                    return res$.pipe(map((res) => res.body));
                            }
                        case 'response':
                            // The response stream was requested directly, so return it.
                            return res$;
                        default:
                            // Guard against new future observe types being added.
                            throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
                    }
                }
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `DELETE` request to execute on the server. See the individual overloads for
                 * details on the return type.
                 *
                 * @param url     The endpoint URL.
                 * @param options The HTTP options to send with the request.
                 *
                 */
                delete(url, options = {}) {
                    return this.request('DELETE', url, options);
                }
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `GET` request to execute on the server. See the individual overloads for
                 * details on the return type.
                 */
                get(url, options = {}) {
                    return this.request('GET', url, options);
                }
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `HEAD` request to execute on the server. The `HEAD` method returns
                 * meta information about the resource without transferring the
                 * resource itself. See the individual overloads for
                 * details on the return type.
                 */
                head(url, options = {}) {
                    return this.request('HEAD', url, options);
                }
                /**
                 * Constructs an `Observable` that, when subscribed, causes a request with the special method
                 * `JSONP` to be dispatched via the interceptor pipeline.
                 * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
                 * API endpoints that don't support newer,
                 * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
                 * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
                 * requests even if the API endpoint is not located on the same domain (origin) as the client-side
                 * application making the request.
                 * The endpoint API must support JSONP callback for JSONP requests to work.
                 * The resource API returns the JSON response wrapped in a callback function.
                 * You can pass the callback function name as one of the query parameters.
                 * Note that JSONP requests can only be used with `GET` requests.
                 *
                 * @param url The resource URL.
                 * @param callbackParam The callback function name.
                 *
                 */
                jsonp(url, callbackParam) {
                    return this.request('JSONP', url, {
                        params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
                        observe: 'body',
                        responseType: 'json',
                    });
                }
                /**
                 * Constructs an `Observable` that, when subscribed, causes the configured
                 * `OPTIONS` request to execute on the server. This method allows the client
                 * to determine the supported HTTP methods and other capabilites of an endpoint,
                 * without implying a resource action. See the individual overloads for
                 * details on the return type.
                 */
                options(url, options = {}) {
                    return this.request('OPTIONS', url, options);
                }
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `PATCH` request to execute on the server. See the individual overloads for
                 * details on the return type.
                 */
                patch(url, body, options = {}) {
                    return this.request('PATCH', url, addBody(options, body));
                }
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `POST` request to execute on the server. The server responds with the location of
                 * the replaced resource. See the individual overloads for
                 * details on the return type.
                 */
                post(url, body, options = {}) {
                    return this.request('POST', url, addBody(options, body));
                }
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
                 * with a new set of values.
                 * See the individual overloads for details on the return type.
                 */
                put(url, body, options = {}) {
                    return this.request('PUT', url, addBody(options, body));
                }
            }
            HttpClient.decorators = [
                { type: Injectable }
            ];
            HttpClient.ctorParameters = () => [
                { type: HttpHandler }
            ];

            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
             *
             *
             */
            class HttpInterceptorHandler {
                constructor(next, interceptor) {
                    this.next = next;
                    this.interceptor = interceptor;
                }
                handle(req) {
                    return this.interceptor.intercept(req, this.next);
                }
            }
            /**
             * A multi-provider token that represents the array of registered
             * `HttpInterceptor` objects.
             *
             * @publicApi
             */
            const HTTP_INTERCEPTORS = new InjectionToken('HTTP_INTERCEPTORS');
            class NoopInterceptor {
                intercept(req, next) {
                    return next.handle(req);
                }
            }
            NoopInterceptor.decorators = [
                { type: Injectable }
            ];

            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            const XSSI_PREFIX = /^\)\]\}',?\n/;
            /**
             * Determine an appropriate URL for the response, by checking either
             * XMLHttpRequest.responseURL or the X-Request-URL header.
             */
            function getResponseUrl(xhr) {
                if ('responseURL' in xhr && xhr.responseURL) {
                    return xhr.responseURL;
                }
                if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
                    return xhr.getResponseHeader('X-Request-URL');
                }
                return null;
            }
            /**
             * A wrapper around the `XMLHttpRequest` constructor.
             *
             * @publicApi
             */
            class XhrFactory {
            }
            /**
             * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
             *
             */
            class BrowserXhr {
                constructor() { }
                build() {
                    return (new XMLHttpRequest());
                }
            }
            BrowserXhr.decorators = [
                { type: Injectable }
            ];
            BrowserXhr.ctorParameters = () => [];
            /**
             * Uses `XMLHttpRequest` to send requests to a backend server.
             * @see `HttpHandler`
             * @see `JsonpClientBackend`
             *
             * @publicApi
             */
            class HttpXhrBackend {
                constructor(xhrFactory) {
                    this.xhrFactory = xhrFactory;
                }
                /**
                 * Processes a request and returns a stream of response events.
                 * @param req The request object.
                 * @returns An observable of the response events.
                 */
                handle(req) {
                    // Quick check to give a better error message when a user attempts to use
                    // HttpClient.jsonp() without installing the HttpClientJsonpModule
                    if (req.method === 'JSONP') {
                        throw new Error(`Attempted to construct Jsonp request without HttpClientJsonpModule installed.`);
                    }
                    // Everything happens on Observable subscription.
                    return new Observable((observer) => {
                        // Start by setting up the XHR object with request method, URL, and withCredentials flag.
                        const xhr = this.xhrFactory.build();
                        xhr.open(req.method, req.urlWithParams);
                        if (!!req.withCredentials) {
                            xhr.withCredentials = true;
                        }
                        // Add all the requested headers.
                        req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(',')));
                        // Add an Accept header if one isn't present already.
                        if (!req.headers.has('Accept')) {
                            xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
                        }
                        // Auto-detect the Content-Type header if one isn't present already.
                        if (!req.headers.has('Content-Type')) {
                            const detectedType = req.detectContentTypeHeader();
                            // Sometimes Content-Type detection fails.
                            if (detectedType !== null) {
                                xhr.setRequestHeader('Content-Type', detectedType);
                            }
                        }
                        // Set the responseType if one was requested.
                        if (req.responseType) {
                            const responseType = req.responseType.toLowerCase();
                            // JSON responses need to be processed as text. This is because if the server
                            // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                            // xhr.response will be null, and xhr.responseText cannot be accessed to
                            // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                            // is parsed by first requesting text and then applying JSON.parse.
                            xhr.responseType = ((responseType !== 'json') ? responseType : 'text');
                        }
                        // Serialize the request body if one is present. If not, this will be set to null.
                        const reqBody = req.serializeBody();
                        // If progress events are enabled, response headers will be delivered
                        // in two events - the HttpHeaderResponse event and the full HttpResponse
                        // event. However, since response headers don't change in between these
                        // two events, it doesn't make sense to parse them twice. So headerResponse
                        // caches the data extracted from the response whenever it's first parsed,
                        // to ensure parsing isn't duplicated.
                        let headerResponse = null;
                        // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
                        // state, and memoizes it into headerResponse.
                        const partialFromXhr = () => {
                            if (headerResponse !== null) {
                                return headerResponse;
                            }
                            // Read status and normalize an IE9 bug (https://bugs.jquery.com/ticket/1450).
                            const status = xhr.status === 1223 ? 204 : xhr.status;
                            const statusText = xhr.statusText || 'OK';
                            // Parse headers from XMLHttpRequest - this step is lazy.
                            const headers = new HttpHeaders(xhr.getAllResponseHeaders());
                            // Read the response URL from the XMLHttpResponse instance and fall back on the
                            // request URL.
                            const url = getResponseUrl(xhr) || req.url;
                            // Construct the HttpHeaderResponse and memoize it.
                            headerResponse = new HttpHeaderResponse({ headers, status, statusText, url });
                            return headerResponse;
                        };
                        // Next, a few closures are defined for the various events which XMLHttpRequest can
                        // emit. This allows them to be unregistered as event listeners later.
                        // First up is the load event, which represents a response being fully available.
                        const onLoad = () => {
                            // Read response state from the memoized partial data.
                            let { headers, status, statusText, url } = partialFromXhr();
                            // The body will be read out if present.
                            let body = null;
                            if (status !== 204) {
                                // Use XMLHttpRequest.response if set, responseText otherwise.
                                body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                            }
                            // Normalize another potential bug (this one comes from CORS).
                            if (status === 0) {
                                status = !!body ? 200 : 0;
                            }
                            // ok determines whether the response will be transmitted on the event or
                            // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                            // but a successful status code can still result in an error if the user
                            // asked for JSON data and the body cannot be parsed as such.
                            let ok = status >= 200 && status < 300;
                            // Check whether the body needs to be parsed as JSON (in many cases the browser
                            // will have done that already).
                            if (req.responseType === 'json' && typeof body === 'string') {
                                // Save the original body, before attempting XSSI prefix stripping.
                                const originalBody = body;
                                body = body.replace(XSSI_PREFIX, '');
                                try {
                                    // Attempt the parse. If it fails, a parse error should be delivered to the user.
                                    body = body !== '' ? JSON.parse(body) : null;
                                }
                                catch (error) {
                                    // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                                    // JSON response. Restore the original body (including any XSSI prefix) to deliver
                                    // a better error response.
                                    body = originalBody;
                                    // If this was an error request to begin with, leave it as a string, it probably
                                    // just isn't JSON. Otherwise, deliver the parsing error to the user.
                                    if (ok) {
                                        // Even though the response status was 2xx, this is still an error.
                                        ok = false;
                                        // The parse error contains the text of the body that failed to parse.
                                        body = { error, text: body };
                                    }
                                }
                            }
                            if (ok) {
                                // A successful response is delivered on the event stream.
                                observer.next(new HttpResponse({
                                    body,
                                    headers,
                                    status,
                                    statusText,
                                    url: url || undefined,
                                }));
                                // The full body has been received and delivered, no further events
                                // are possible. This request is complete.
                                observer.complete();
                            }
                            else {
                                // An unsuccessful request is delivered on the error channel.
                                observer.error(new HttpErrorResponse({
                                    // The error in this case is the response body (error from the server).
                                    error: body,
                                    headers,
                                    status,
                                    statusText,
                                    url: url || undefined,
                                }));
                            }
                        };
                        // The onError callback is called when something goes wrong at the network level.
                        // Connection timeout, DNS error, offline, etc. These are actual errors, and are
                        // transmitted on the error channel.
                        const onError = (error) => {
                            const { url } = partialFromXhr();
                            const res = new HttpErrorResponse({
                                error,
                                status: xhr.status || 0,
                                statusText: xhr.statusText || 'Unknown Error',
                                url: url || undefined,
                            });
                            observer.error(res);
                        };
                        // The sentHeaders flag tracks whether the HttpResponseHeaders event
                        // has been sent on the stream. This is necessary to track if progress
                        // is enabled since the event will be sent on only the first download
                        // progerss event.
                        let sentHeaders = false;
                        // The download progress event handler, which is only registered if
                        // progress events are enabled.
                        const onDownProgress = (event) => {
                            // Send the HttpResponseHeaders event if it hasn't been sent already.
                            if (!sentHeaders) {
                                observer.next(partialFromXhr());
                                sentHeaders = true;
                            }
                            // Start building the download progress event to deliver on the response
                            // event stream.
                            let progressEvent = {
                                type: HttpEventType.DownloadProgress,
                                loaded: event.loaded,
                            };
                            // Set the total number of bytes in the event if it's available.
                            if (event.lengthComputable) {
                                progressEvent.total = event.total;
                            }
                            // If the request was for text content and a partial response is
                            // available on XMLHttpRequest, include it in the progress event
                            // to allow for streaming reads.
                            if (req.responseType === 'text' && !!xhr.responseText) {
                                progressEvent.partialText = xhr.responseText;
                            }
                            // Finally, fire the event.
                            observer.next(progressEvent);
                        };
                        // The upload progress event handler, which is only registered if
                        // progress events are enabled.
                        const onUpProgress = (event) => {
                            // Upload progress events are simpler. Begin building the progress
                            // event.
                            let progress = {
                                type: HttpEventType.UploadProgress,
                                loaded: event.loaded,
                            };
                            // If the total number of bytes being uploaded is available, include
                            // it.
                            if (event.lengthComputable) {
                                progress.total = event.total;
                            }
                            // Send the event.
                            observer.next(progress);
                        };
                        // By default, register for load and error events.
                        xhr.addEventListener('load', onLoad);
                        xhr.addEventListener('error', onError);
                        // Progress events are only enabled if requested.
                        if (req.reportProgress) {
                            // Download progress is always enabled if requested.
                            xhr.addEventListener('progress', onDownProgress);
                            // Upload progress depends on whether there is a body to upload.
                            if (reqBody !== null && xhr.upload) {
                                xhr.upload.addEventListener('progress', onUpProgress);
                            }
                        }
                        // Fire the request, and notify the event stream that it was fired.
                        xhr.send(reqBody);
                        observer.next({ type: HttpEventType.Sent });
                        // This is the return from the Observable function, which is the
                        // request cancellation handler.
                        return () => {
                            // On a cancellation, remove all registered event listeners.
                            xhr.removeEventListener('error', onError);
                            xhr.removeEventListener('load', onLoad);
                            if (req.reportProgress) {
                                xhr.removeEventListener('progress', onDownProgress);
                                if (reqBody !== null && xhr.upload) {
                                    xhr.upload.removeEventListener('progress', onUpProgress);
                                }
                            }
                            // Finally, abort the in-flight request.
                            if (xhr.readyState !== xhr.DONE) {
                                xhr.abort();
                            }
                        };
                    });
                }
            }
            HttpXhrBackend.decorators = [
                { type: Injectable }
            ];
            HttpXhrBackend.ctorParameters = () => [
                { type: XhrFactory }
            ];

            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            const XSRF_COOKIE_NAME = new InjectionToken('XSRF_COOKIE_NAME');
            const XSRF_HEADER_NAME = new InjectionToken('XSRF_HEADER_NAME');
            /**
             * Retrieves the current XSRF token to use with the next outgoing request.
             *
             * @publicApi
             */
            class HttpXsrfTokenExtractor {
            }
            /**
             * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
             */
            class HttpXsrfCookieExtractor {
                constructor(doc, platform, cookieName) {
                    this.doc = doc;
                    this.platform = platform;
                    this.cookieName = cookieName;
                    this.lastCookieString = '';
                    this.lastToken = null;
                    /**
                     * @internal for testing
                     */
                    this.parseCount = 0;
                }
                getToken() {
                    if (this.platform === 'server') {
                        return null;
                    }
                    const cookieString = this.doc.cookie || '';
                    if (cookieString !== this.lastCookieString) {
                        this.parseCount++;
                        this.lastToken = ɵparseCookieValue(cookieString, this.cookieName);
                        this.lastCookieString = cookieString;
                    }
                    return this.lastToken;
                }
            }
            HttpXsrfCookieExtractor.decorators = [
                { type: Injectable }
            ];
            HttpXsrfCookieExtractor.ctorParameters = () => [
                { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
                { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
                { type: String, decorators: [{ type: Inject, args: [XSRF_COOKIE_NAME,] }] }
            ];
            /**
             * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
             */
            class HttpXsrfInterceptor {
                constructor(tokenService, headerName) {
                    this.tokenService = tokenService;
                    this.headerName = headerName;
                }
                intercept(req, next) {
                    const lcUrl = req.url.toLowerCase();
                    // Skip both non-mutating requests and absolute URLs.
                    // Non-mutating requests don't require a token, and absolute URLs require special handling
                    // anyway as the cookie set
                    // on our origin is not the same as the token expected by another origin.
                    if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
                        lcUrl.startsWith('https://')) {
                        return next.handle(req);
                    }
                    const token = this.tokenService.getToken();
                    // Be careful not to overwrite an existing header of the same name.
                    if (token !== null && !req.headers.has(this.headerName)) {
                        req = req.clone({ headers: req.headers.set(this.headerName, token) });
                    }
                    return next.handle(req);
                }
            }
            HttpXsrfInterceptor.decorators = [
                { type: Injectable }
            ];
            HttpXsrfInterceptor.ctorParameters = () => [
                { type: HttpXsrfTokenExtractor },
                { type: String, decorators: [{ type: Inject, args: [XSRF_HEADER_NAME,] }] }
            ];

            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * An injectable `HttpHandler` that applies multiple interceptors
             * to a request before passing it to the given `HttpBackend`.
             *
             * The interceptors are loaded lazily from the injector, to allow
             * interceptors to themselves inject classes depending indirectly
             * on `HttpInterceptingHandler` itself.
             * @see `HttpInterceptor`
             */
            class HttpInterceptingHandler {
                constructor(backend, injector) {
                    this.backend = backend;
                    this.injector = injector;
                    this.chain = null;
                }
                handle(req) {
                    if (this.chain === null) {
                        const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
                        this.chain = interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.backend);
                    }
                    return this.chain.handle(req);
                }
            }
            HttpInterceptingHandler.decorators = [
                { type: Injectable }
            ];
            HttpInterceptingHandler.ctorParameters = () => [
                { type: HttpBackend },
                { type: Injector }
            ];
            /**
             * Configures XSRF protection support for outgoing requests.
             *
             * For a server that supports a cookie-based XSRF protection system,
             * use directly to configure XSRF protection with the correct
             * cookie and header names.
             *
             * If no names are supplied, the default cookie name is `XSRF-TOKEN`
             * and the default header name is `X-XSRF-TOKEN`.
             *
             * @publicApi
             */
            class HttpClientXsrfModule {
                /**
                 * Disable the default XSRF protection.
                 */
                static disable() {
                    return {
                        ngModule: HttpClientXsrfModule,
                        providers: [
                            { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
                        ],
                    };
                }
                /**
                 * Configure XSRF protection.
                 * @param options An object that can specify either or both
                 * cookie name or header name.
                 * - Cookie name default is `XSRF-TOKEN`.
                 * - Header name default is `X-XSRF-TOKEN`.
                 *
                 */
                static withOptions(options = {}) {
                    return {
                        ngModule: HttpClientXsrfModule,
                        providers: [
                            options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                            options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
                        ],
                    };
                }
            }
            HttpClientXsrfModule.decorators = [
                { type: NgModule, args: [{
                            providers: [
                                HttpXsrfInterceptor,
                                { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                                { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                                { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                                { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                            ],
                        },] }
            ];
            /**
             * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
             * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
             *
             * You can add interceptors to the chain behind `HttpClient` by binding them to the
             * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
             *
             * @publicApi
             */
            class HttpClientModule {
            }
            HttpClientModule.decorators = [
                { type: NgModule, args: [{
                            /**
                             * Optional configuration for XSRF protection.
                             */
                            imports: [
                                HttpClientXsrfModule.withOptions({
                                    cookieName: 'XSRF-TOKEN',
                                    headerName: 'X-XSRF-TOKEN',
                                }),
                            ],
                            /**
                             * Configures the [dependency injector](guide/glossary#injector) where it is imported
                             * with supporting services for HTTP communications.
                             */
                            providers: [
                                HttpClient,
                                { provide: HttpHandler, useClass: HttpInterceptingHandler },
                                HttpXhrBackend,
                                { provide: HttpBackend, useExisting: HttpXhrBackend },
                                BrowserXhr,
                                { provide: XhrFactory, useExisting: BrowserXhr },
                            ],
                        },] }
            ];

            class ObjectUtils {
                static equals(obj1, obj2, field) {
                    if (field)
                        return (this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field));
                    else
                        return this.equalsByValue(obj1, obj2);
                }
                static equalsByValue(obj1, obj2) {
                    if (obj1 === obj2)
                        return true;
                    if (obj1 && obj2 && typeof obj1 == 'object' && typeof obj2 == 'object') {
                        var arrA = Array.isArray(obj1), arrB = Array.isArray(obj2), i, length, key;
                        if (arrA && arrB) {
                            length = obj1.length;
                            if (length != obj2.length)
                                return false;
                            for (i = length; i-- !== 0;)
                                if (!this.equalsByValue(obj1[i], obj2[i]))
                                    return false;
                            return true;
                        }
                        if (arrA != arrB)
                            return false;
                        var dateA = obj1 instanceof Date, dateB = obj2 instanceof Date;
                        if (dateA != dateB)
                            return false;
                        if (dateA && dateB)
                            return obj1.getTime() == obj2.getTime();
                        var regexpA = obj1 instanceof RegExp, regexpB = obj2 instanceof RegExp;
                        if (regexpA != regexpB)
                            return false;
                        if (regexpA && regexpB)
                            return obj1.toString() == obj2.toString();
                        var keys = Object.keys(obj1);
                        length = keys.length;
                        if (length !== Object.keys(obj2).length)
                            return false;
                        for (i = length; i-- !== 0;)
                            if (!Object.prototype.hasOwnProperty.call(obj2, keys[i]))
                                return false;
                        for (i = length; i-- !== 0;) {
                            key = keys[i];
                            if (!this.equalsByValue(obj1[key], obj2[key]))
                                return false;
                        }
                        return true;
                    }
                    return obj1 !== obj1 && obj2 !== obj2;
                }
                static resolveFieldData(data, field) {
                    if (data && field) {
                        if (this.isFunction(field)) {
                            return field(data);
                        }
                        else if (field.indexOf('.') == -1) {
                            return data[field];
                        }
                        else {
                            let fields = field.split('.');
                            let value = data;
                            for (let i = 0, len = fields.length; i < len; ++i) {
                                if (value == null) {
                                    return null;
                                }
                                value = value[fields[i]];
                            }
                            return value;
                        }
                    }
                    else {
                        return null;
                    }
                }
                static isFunction(obj) {
                    return !!(obj && obj.constructor && obj.call && obj.apply);
                }
                static reorderArray(value, from, to) {
                    if (value && from !== to) {
                        if (to >= value.length) {
                            to %= value.length;
                            from %= value.length;
                        }
                        value.splice(to, 0, value.splice(from, 1)[0]);
                    }
                }
                static insertIntoOrderedArray(item, index, arr, sourceArr) {
                    if (arr.length > 0) {
                        let injected = false;
                        for (let i = 0; i < arr.length; i++) {
                            let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
                            if (currentItemIndex > index) {
                                arr.splice(i, 0, item);
                                injected = true;
                                break;
                            }
                        }
                        if (!injected) {
                            arr.push(item);
                        }
                    }
                    else {
                        arr.push(item);
                    }
                }
                static findIndexInList(item, list) {
                    let index = -1;
                    if (list) {
                        for (let i = 0; i < list.length; i++) {
                            if (list[i] == item) {
                                index = i;
                                break;
                            }
                        }
                    }
                    return index;
                }
                static removeAccents(str) {
                    if (str && str.search(/[\xC0-\xFF]/g) > -1) {
                        str = str
                            .replace(/[\xC0-\xC5]/g, "A")
                            .replace(/[\xC6]/g, "AE")
                            .replace(/[\xC7]/g, "C")
                            .replace(/[\xC8-\xCB]/g, "E")
                            .replace(/[\xCC-\xCF]/g, "I")
                            .replace(/[\xD0]/g, "D")
                            .replace(/[\xD1]/g, "N")
                            .replace(/[\xD2-\xD6\xD8]/g, "O")
                            .replace(/[\xD9-\xDC]/g, "U")
                            .replace(/[\xDD]/g, "Y")
                            .replace(/[\xDE]/g, "P")
                            .replace(/[\xE0-\xE5]/g, "a")
                            .replace(/[\xE6]/g, "ae")
                            .replace(/[\xE7]/g, "c")
                            .replace(/[\xE8-\xEB]/g, "e")
                            .replace(/[\xEC-\xEF]/g, "i")
                            .replace(/[\xF1]/g, "n")
                            .replace(/[\xF2-\xF6\xF8]/g, "o")
                            .replace(/[\xF9-\xFC]/g, "u")
                            .replace(/[\xFE]/g, "p")
                            .replace(/[\xFD\xFF]/g, "y");
                    }
                    return str;
                }
            }

            class FilterMatchMode {
            }
            FilterMatchMode.STARTS_WITH = 'startsWith';
            FilterMatchMode.CONTAINS = 'contains';
            FilterMatchMode.NOT_CONTAINS = 'notContains';
            FilterMatchMode.ENDS_WITH = 'endsWith';
            FilterMatchMode.EQUALS = 'equals';
            FilterMatchMode.NOT_EQUALS = 'notEquals';
            FilterMatchMode.IN = 'in';
            FilterMatchMode.LESS_THAN = 'lt';
            FilterMatchMode.LESS_THAN_OR_EQUAL_TO = 'lte';
            FilterMatchMode.GREATER_THAN = 'gt';
            FilterMatchMode.GREATER_THAN_OR_EQUAL_TO = 'gte';
            FilterMatchMode.BETWEEN = 'between';
            FilterMatchMode.IS = 'is';
            FilterMatchMode.IS_NOT = 'isNot';
            FilterMatchMode.BEFORE = 'before';
            FilterMatchMode.AFTER = 'after';
            FilterMatchMode.DATE_IS = 'dateIs';
            FilterMatchMode.DATE_IS_NOT = 'dateIsNot';
            FilterMatchMode.DATE_BEFORE = 'dateBefore';
            FilterMatchMode.DATE_AFTER = 'dateAfter';

            class PrimeNGConfig {
                constructor() {
                    this.ripple = false;
                    this.filterMatchModeOptions = {
                        text: [
                            FilterMatchMode.STARTS_WITH,
                            FilterMatchMode.CONTAINS,
                            FilterMatchMode.NOT_CONTAINS,
                            FilterMatchMode.ENDS_WITH,
                            FilterMatchMode.EQUALS,
                            FilterMatchMode.NOT_EQUALS
                        ],
                        numeric: [
                            FilterMatchMode.EQUALS,
                            FilterMatchMode.NOT_EQUALS,
                            FilterMatchMode.LESS_THAN,
                            FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
                            FilterMatchMode.GREATER_THAN,
                            FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
                        ],
                        date: [
                            FilterMatchMode.DATE_IS,
                            FilterMatchMode.DATE_IS_NOT,
                            FilterMatchMode.DATE_BEFORE,
                            FilterMatchMode.DATE_AFTER
                        ]
                    };
                    this.translation = {
                        startsWith: 'Starts with',
                        contains: 'Contains',
                        notContains: 'Not contains',
                        endsWith: 'Ends with',
                        equals: 'Equals',
                        notEquals: 'Not equals',
                        noFilter: 'No Filter',
                        lt: 'Less than',
                        lte: 'Less than or equal to',
                        gt: 'Greater than',
                        gte: 'Greater than or equal to',
                        is: 'Is',
                        isNot: 'Is not',
                        before: 'Before',
                        after: 'After',
                        dateIs: 'Date is',
                        dateIsNot: 'Date is not',
                        dateBefore: 'Date is before',
                        dateAfter: 'Date is after',
                        clear: 'Clear',
                        apply: 'Apply',
                        matchAll: 'Match All',
                        matchAny: 'Match Any',
                        addRule: 'Add Rule',
                        removeRule: 'Remove Rule',
                        accept: 'Yes',
                        reject: 'No',
                        choose: 'Choose',
                        upload: 'Upload',
                        cancel: 'Cancel',
                        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        today: 'Today',
                        weekHeader: 'Wk'
                    };
                    this.translationSource = new Subject();
                    this.translationObserver = this.translationSource.asObservable();
                }
                getTranslation(key) {
                    return this.translation[key];
                }
                setTranslation(value) {
                    this.translation = Object.assign(Object.assign({}, this.translation), value);
                    this.translationSource.next(this.translation);
                }
            }
            PrimeNGConfig.ɵprov = ɵɵdefineInjectable({ factory: function PrimeNGConfig_Factory() { return new PrimeNGConfig(); }, token: PrimeNGConfig, providedIn: "root" });
            PrimeNGConfig.decorators = [
                { type: Injectable, args: [{ providedIn: 'root' },] }
            ];

            var ConfirmEventType;
            (function (ConfirmEventType) {
                ConfirmEventType[ConfirmEventType["ACCEPT"] = 0] = "ACCEPT";
                ConfirmEventType[ConfirmEventType["REJECT"] = 1] = "REJECT";
                ConfirmEventType[ConfirmEventType["CANCEL"] = 2] = "CANCEL";
            })(ConfirmEventType || (ConfirmEventType = {}));

            class FilterService {
                constructor() {
                    this.filters = {
                        startsWith: (value, filter, filterLocale) => {
                            if (filter === undefined || filter === null || filter.trim() === '') {
                                return true;
                            }
                            if (value === undefined || value === null) {
                                return false;
                            }
                            let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
                            let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
                            return stringValue.slice(0, filterValue.length) === filterValue;
                        },
                        contains: (value, filter, filterLocale) => {
                            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                                return true;
                            }
                            if (value === undefined || value === null) {
                                return false;
                            }
                            let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
                            let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
                            return stringValue.indexOf(filterValue) !== -1;
                        },
                        notContains: (value, filter, filterLocale) => {
                            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                                return true;
                            }
                            if (value === undefined || value === null) {
                                return false;
                            }
                            let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
                            let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
                            return stringValue.indexOf(filterValue) === -1;
                        },
                        endsWith: (value, filter, filterLocale) => {
                            if (filter === undefined || filter === null || filter.trim() === '') {
                                return true;
                            }
                            if (value === undefined || value === null) {
                                return false;
                            }
                            let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
                            let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
                            return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
                        },
                        equals: (value, filter, filterLocale) => {
                            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                                return true;
                            }
                            if (value === undefined || value === null) {
                                return false;
                            }
                            if (value.getTime && filter.getTime)
                                return value.getTime() === filter.getTime();
                            else
                                return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
                        },
                        notEquals: (value, filter, filterLocale) => {
                            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                                return false;
                            }
                            if (value === undefined || value === null) {
                                return true;
                            }
                            if (value.getTime && filter.getTime)
                                return value.getTime() !== filter.getTime();
                            else
                                return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
                        },
                        in: (value, filter) => {
                            if (filter === undefined || filter === null || filter.length === 0) {
                                return true;
                            }
                            for (let i = 0; i < filter.length; i++) {
                                if (ObjectUtils.equals(value, filter[i])) {
                                    return true;
                                }
                            }
                            return false;
                        },
                        between: (value, filter) => {
                            if (filter == null || filter[0] == null || filter[1] == null) {
                                return true;
                            }
                            if (value === undefined || value === null) {
                                return false;
                            }
                            if (value.getTime)
                                return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
                            else
                                return filter[0] <= value && value <= filter[1];
                        },
                        lt: (value, filter, filterLocale) => {
                            if (filter === undefined || filter === null) {
                                return true;
                            }
                            if (value === undefined || value === null) {
                                return false;
                            }
                            if (value.getTime && filter.getTime)
                                return value.getTime() < filter.getTime();
                            else
                                return value < filter;
                        },
                        lte: (value, filter, filterLocale) => {
                            if (filter === undefined || filter === null) {
                                return true;
                            }
                            if (value === undefined || value === null) {
                                return false;
                            }
                            if (value.getTime && filter.getTime)
                                return value.getTime() <= filter.getTime();
                            else
                                return value <= filter;
                        },
                        gt: (value, filter, filterLocale) => {
                            if (filter === undefined || filter === null) {
                                return true;
                            }
                            if (value === undefined || value === null) {
                                return false;
                            }
                            if (value.getTime && filter.getTime)
                                return value.getTime() > filter.getTime();
                            else
                                return value > filter;
                        },
                        gte: (value, filter, filterLocale) => {
                            if (filter === undefined || filter === null) {
                                return true;
                            }
                            if (value === undefined || value === null) {
                                return false;
                            }
                            if (value.getTime && filter.getTime)
                                return value.getTime() >= filter.getTime();
                            else
                                return value >= filter;
                        },
                        is: (value, filter, filterLocale) => {
                            return this.filters.equals(value, filter, filterLocale);
                        },
                        isNot: (value, filter, filterLocale) => {
                            return this.filters.notEquals(value, filter, filterLocale);
                        },
                        before: (value, filter, filterLocale) => {
                            return this.filters.lt(value, filter, filterLocale);
                        },
                        after: (value, filter, filterLocale) => {
                            return this.filters.gt(value, filter, filterLocale);
                        },
                        dateIs: (value, filter) => {
                            if (filter === undefined || filter === null) {
                                return true;
                            }
                            if (value === undefined || value === null) {
                                return false;
                            }
                            return value.toDateString() === filter.toDateString();
                        },
                        dateIsNot: (value, filter) => {
                            if (filter === undefined || filter === null) {
                                return true;
                            }
                            if (value === undefined || value === null) {
                                return false;
                            }
                            return value.toDateString() !== filter.toDateString();
                        },
                        dateBefore: (value, filter) => {
                            if (filter === undefined || filter === null) {
                                return true;
                            }
                            if (value === undefined || value === null) {
                                return false;
                            }
                            return value.getTime() < filter.getTime();
                        },
                        dateAfter: (value, filter) => {
                            if (filter === undefined || filter === null) {
                                return true;
                            }
                            if (value === undefined || value === null) {
                                return false;
                            }
                            return value.getTime() > filter.getTime();
                        }
                    };
                }
                filter(value, fields, filterValue, filterMatchMode, filterLocale) {
                    let filteredItems = [];
                    if (value) {
                        for (let item of value) {
                            for (let field of fields) {
                                let fieldValue = ObjectUtils.resolveFieldData(item, field);
                                if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                                    filteredItems.push(item);
                                    break;
                                }
                            }
                        }
                    }
                    return filteredItems;
                }
                register(rule, fn) {
                    this.filters[rule] = fn;
                }
            }
            FilterService.ɵprov = ɵɵdefineInjectable({ factory: function FilterService_Factory() { return new FilterService(); }, token: FilterService, providedIn: "root" });
            FilterService.decorators = [
                { type: Injectable, args: [{ providedIn: 'root' },] }
            ];

            class Header {
            }
            Header.decorators = [
                { type: Component, args: [{
                            selector: 'p-header',
                            template: '<ng-content></ng-content>'
                        },] }
            ];
            class Footer {
            }
            Footer.decorators = [
                { type: Component, args: [{
                            selector: 'p-footer',
                            template: '<ng-content></ng-content>'
                        },] }
            ];
            class PrimeTemplate {
                constructor(template) {
                    this.template = template;
                }
                getType() {
                    return this.name;
                }
            }
            PrimeTemplate.decorators = [
                { type: Directive, args: [{
                            selector: '[pTemplate]',
                            host: {}
                        },] }
            ];
            PrimeTemplate.ctorParameters = () => [
                { type: TemplateRef }
            ];
            PrimeTemplate.propDecorators = {
                type: [{ type: Input }],
                name: [{ type: Input, args: ['pTemplate',] }]
            };
            class SharedModule {
            }
            SharedModule.decorators = [
                { type: NgModule, args: [{
                            imports: [CommonModule],
                            exports: [Header, Footer, PrimeTemplate],
                            declarations: [Header, Footer, PrimeTemplate]
                        },] }
            ];

            let idx = 0;
            class AccordionTab {
                constructor(accordion, changeDetector) {
                    this.changeDetector = changeDetector;
                    this.cache = true;
                    this.selectedChange = new EventEmitter();
                    this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
                    this.id = `p-accordiontab-${idx++}`;
                    this.accordion = accordion;
                }
                get selected() {
                    return this._selected;
                }
                set selected(val) {
                    this._selected = val;
                    if (!this.loaded) {
                        if (this._selected && this.cache) {
                            this.loaded = true;
                        }
                        this.changeDetector.markForCheck();
                    }
                }
                ngAfterContentInit() {
                    this.templates.forEach((item) => {
                        switch (item.getType()) {
                            case 'content':
                                this.contentTemplate = item.template;
                                break;
                            case 'header':
                                this.headerTemplate = item.template;
                                break;
                            default:
                                this.contentTemplate = item.template;
                                break;
                        }
                    });
                }
                toggle(event) {
                    if (this.disabled) {
                        return false;
                    }
                    let index = this.findTabIndex();
                    if (this.selected) {
                        this.selected = false;
                        this.accordion.onClose.emit({ originalEvent: event, index: index });
                    }
                    else {
                        if (!this.accordion.multiple) {
                            for (var i = 0; i < this.accordion.tabs.length; i++) {
                                this.accordion.tabs[i].selected = false;
                                this.accordion.tabs[i].selectedChange.emit(false);
                                this.accordion.tabs[i].changeDetector.markForCheck();
                            }
                        }
                        this.selected = true;
                        this.loaded = true;
                        this.accordion.onOpen.emit({ originalEvent: event, index: index });
                    }
                    this.selectedChange.emit(this.selected);
                    this.accordion.updateActiveIndex();
                    this.changeDetector.markForCheck();
                    event.preventDefault();
                }
                findTabIndex() {
                    let index = -1;
                    for (var i = 0; i < this.accordion.tabs.length; i++) {
                        if (this.accordion.tabs[i] == this) {
                            index = i;
                            break;
                        }
                    }
                    return index;
                }
                get hasHeaderFacet() {
                    return this.headerFacet && this.headerFacet.length > 0;
                }
                onKeydown(event) {
                    if (event.which === 32 || event.which === 13) {
                        this.toggle(event);
                        event.preventDefault();
                    }
                }
                ngOnDestroy() {
                    this.accordion.tabs.splice(this.findTabIndex(), 1);
                }
            }
            AccordionTab.decorators = [
                { type: Component, args: [{
                            selector: 'p-accordionTab',
                            template: `
        <div class="p-accordion-tab" [ngClass]="{'p-accordion-tab-active': selected}">
            <div class="p-accordion-header" [ngClass]="{'p-highlight': selected, 'p-disabled': disabled}">
                <a role="tab" class="p-accordion-header-link" (click)="toggle($event)" (keydown)="onKeydown($event)" [attr.tabindex]="disabled ? null : 0"
                    [attr.id]="id" [attr.aria-controls]="id + '-content'" [attr.aria-expanded]="selected">
                    <span class="p-accordion-toggle-icon" [ngClass]="selected ? accordion.collapseIcon : accordion.expandIcon"></span>
                    <span class="p-accordion-header-text" *ngIf="!hasHeaderFacet">
                        {{header}}
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <ng-content select="p-header" *ngIf="hasHeaderFacet"></ng-content>
                </a>
            </div>
            <div [attr.id]="id + '-content'" class="p-toggleable-content" [@tabContent]="selected ? {value: 'visible', params: {transitionParams: transitionOptions}} : {value: 'hidden', params: {transitionParams: transitionOptions}}"
                role="region" [attr.aria-hidden]="!selected" [attr.aria-labelledby]="id">
                <div class="p-accordion-content">
                    <ng-content></ng-content>
                    <ng-container *ngIf="contentTemplate && (cache ? loaded : selected)">
                        <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                    </ng-container>
                </div>
            </div>
        </div>
    `,
                            animations: [
                                trigger('tabContent', [
                                    state('hidden', style({
                                        height: '0',
                                        overflow: 'hidden'
                                    })),
                                    state('visible', style({
                                        height: '*'
                                    })),
                                    transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                                    transition('void => *', animate(0))
                                ])
                            ],
                            changeDetection: ChangeDetectionStrategy.OnPush,
                            encapsulation: ViewEncapsulation.None,
                            styles: [".p-accordion-header-link{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:flex;position:relative;text-decoration:none;user-select:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}"]
                        },] }
            ];
            AccordionTab.ctorParameters = () => [
                { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => Accordion),] }] },
                { type: ChangeDetectorRef }
            ];
            AccordionTab.propDecorators = {
                header: [{ type: Input }],
                disabled: [{ type: Input }],
                cache: [{ type: Input }],
                selectedChange: [{ type: Output }],
                transitionOptions: [{ type: Input }],
                headerFacet: [{ type: ContentChildren, args: [Header,] }],
                templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
                selected: [{ type: Input }]
            };
            class Accordion {
                constructor(el, changeDetector) {
                    this.el = el;
                    this.changeDetector = changeDetector;
                    this.onClose = new EventEmitter();
                    this.onOpen = new EventEmitter();
                    this.expandIcon = 'pi pi-fw pi-chevron-right';
                    this.collapseIcon = 'pi pi-fw pi-chevron-down';
                    this.activeIndexChange = new EventEmitter();
                    this.tabs = [];
                }
                ngAfterContentInit() {
                    this.initTabs();
                    this.tabListSubscription = this.tabList.changes.subscribe(_ => {
                        this.initTabs();
                    });
                }
                initTabs() {
                    this.tabs = this.tabList.toArray();
                    this.updateSelectionState();
                    this.changeDetector.markForCheck();
                }
                getBlockableElement() {
                    return this.el.nativeElement.children[0];
                }
                get activeIndex() {
                    return this._activeIndex;
                }
                set activeIndex(val) {
                    this._activeIndex = val;
                    if (this.preventActiveIndexPropagation) {
                        this.preventActiveIndexPropagation = false;
                        return;
                    }
                    this.updateSelectionState();
                }
                updateSelectionState() {
                    if (this.tabs && this.tabs.length && this._activeIndex != null) {
                        for (let i = 0; i < this.tabs.length; i++) {
                            let selected = this.multiple ? this._activeIndex.includes(i) : (i === this._activeIndex);
                            let changed = selected !== this.tabs[i].selected;
                            if (changed) {
                                this.tabs[i].selected = selected;
                                this.tabs[i].selectedChange.emit(selected);
                                this.tabs[i].changeDetector.markForCheck();
                            }
                        }
                    }
                }
                updateActiveIndex() {
                    let index = this.multiple ? [] : null;
                    this.tabs.forEach((tab, i) => {
                        if (tab.selected) {
                            if (this.multiple) {
                                index.push(i);
                            }
                            else {
                                index = i;
                                return;
                            }
                        }
                    });
                    this.preventActiveIndexPropagation = true;
                    this.activeIndexChange.emit(index);
                }
                ngOnDestroy() {
                    if (this.tabListSubscription) {
                        this.tabListSubscription.unsubscribe();
                    }
                }
            }
            Accordion.decorators = [
                { type: Component, args: [{
                            selector: 'p-accordion',
                            template: `
        <div [ngClass]="'p-accordion p-component'" [ngStyle]="style" [class]="styleClass" role="tablist">
            <ng-content></ng-content>
        </div>
    `,
                            changeDetection: ChangeDetectionStrategy.OnPush
                        },] }
            ];
            Accordion.ctorParameters = () => [
                { type: ElementRef },
                { type: ChangeDetectorRef }
            ];
            Accordion.propDecorators = {
                multiple: [{ type: Input }],
                onClose: [{ type: Output }],
                onOpen: [{ type: Output }],
                style: [{ type: Input }],
                styleClass: [{ type: Input }],
                expandIcon: [{ type: Input }],
                collapseIcon: [{ type: Input }],
                activeIndexChange: [{ type: Output }],
                tabList: [{ type: ContentChildren, args: [AccordionTab,] }],
                activeIndex: [{ type: Input }]
            };
            class AccordionModule {
            }
            AccordionModule.decorators = [
                { type: NgModule, args: [{
                            imports: [CommonModule],
                            exports: [Accordion, AccordionTab, SharedModule],
                            declarations: [Accordion, AccordionTab]
                        },] }
            ];

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
                            patchState({
                                plugins: [
                                    {
                                        name: "场景编辑器",
                                        logo: "https://osd-alpha.tooqing.com/pixelpai/SpawnPointNode/5cc42f6417553727db1d2bba/1/5cc42f6417553727db1d2bba.png",
                                        description: "用于编辑游戏场景，可以放置。",
                                        author: "moJiXiang",
                                        id: "sceneEditor",
                                    },
                                    {
                                        name: "场景编辑器",
                                        logo: "https://osd-alpha.tooqing.com/pixelpai/SpawnPointNode/5cc42f6417553727db1d2bba/1/5cc42f6417553727db1d2bba.png",
                                        description: "用于编辑游戏场景，可以放置各种物件，人物，可以给物件添加脚本逻辑。",
                                        author: "moJiXiang",
                                        id: "sceneEditor",
                                    },
                                ],
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
                PluginsMarketComponent.prototype.installPlugin = function (pluginId) {
                };
                __decorate([
                    Select(MarketState.plugins),
                    __metadata("design:type", Observable)
                ], PluginsMarketComponent.prototype, "plugins$", void 0);
                PluginsMarketComponent = __decorate([
                    Component({
                        selector: "plugins-market",
                        template: "<div class=\"plugins-market\"><div class=\"plugins-market__header\"><h1>\u63D2\u4EF6\u5E02\u573A</h1></div><div class=\"plugins-market__search\"><input placeholder=\"\u641C\u7D22\u63D2\u4EF6\u5E02\u573A\"></div><p-accordion><p-accordionTab header=\"\u672C\u5730\u5B89\u88C5\"><ul><li *ngFor=\"let plugin of plugins\"><div class=\"plugin-item\"><div class=\"plugin-logo\"><img src=\"{{ plugin.logo }}\"></div><div class=\"plugin-info\"><h3>{{ plugin.name }}</h3><p>{{ plugin.description }}</p><i>{{ plugin.author }}</i> <button (click)=\"installPlugin(plugin.id)\">\u5B89\u88C5</button></div></div></li></ul></p-accordionTab></p-accordion></div>",
                        styles: ["::ng-deep p-accordion .p-accordion .p-accordion-header.p-highlight .p-accordion-header-link{background-color:#1b1d22!important;color:#fff!important}::ng-deep p-accordion .p-accordion .p-accordion-header:hover .p-accordion-header-link{background-color:#1b1d22!important;color:#fff!important}::ng-deep p-accordion .p-accordion .p-accordion-header .p-accordion-header-link{border:none;color:#fff;background:0 0;border-radius:0!important;padding:.5rem;font-weight:400}::ng-deep p-accordion .p-accordion .p-accordion-header .p-accordion-header-link:focus{box-shadow:none!important}::ng-deep p-accordion .p-accordion .p-accordion-tab .p-accordion-content{background:0 0;border-radius:0!important;padding:0;border:none}.plugins-market__header{padding:10px;padding-bottom:5px;color:#fff}.plugins-market__search{padding:10px;padding-top:5px}.plugins-market__search input{width:100%;height:30px;outline:0}.plugins-market .plugin-item{display:flex;flex-direction:row;padding:10px;color:#fff;cursor:pointer}.plugins-market .plugin-item:hover{background-color:#1b1d22}.plugins-market .plugin-item .plugin-logo{margin-right:10px}.plugins-market .plugin-item .plugin-logo img{width:80px;height:80px;object-fit:cover}.plugins-market .plugin-item .plugin-info{position:relative;display:flex;flex-direction:column;justify-content:space-around}.plugins-market .plugin-item .plugin-info h3{font-size:16px;font-weight:700;margin-bottom:10px}.plugins-market .plugin-item .plugin-info p{font-size:14px;line-height:16px}.plugins-market .plugin-item .plugin-info i{font-size:12px}.plugins-market .plugin-item button{position:absolute;bottom:0;right:0;border:none;background-color:#4164e4;color:#fff;font-size:12px;line-height:14px;border-radius:3px;cursor:pointer;outline:0}"],
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
                            HttpClientModule,
                            AccordionModule,
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
                componentName: "PluginsMarketComponent",
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
                },
            });

        }
    };
});
