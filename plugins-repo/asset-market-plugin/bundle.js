System.register(['qing-workbench', '@angular/common', '@angular/core', '@angular/forms', 'primeng/accordion', 'primeng/fileupload'], function (exports) {
    'use strict';
    var ContextService, WORKBENCH_PUZZLE_BLOCK, CommonModule, Injectable, Inject, Component, Input, NgModule, FormsModule, AccordionModule, FileUploadModule;
    return {
        setters: [function (module) {
            ContextService = module.ContextService;
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
        }, function (module) {
            AccordionModule = module.AccordionModule;
        }, function (module) {
            FileUploadModule = module.FileUploadModule;
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

            function assetSerializer(input) {
                var result = input.map(function (e) {
                    var _a;
                    return {
                        id: e.id || "undefined",
                        thumbnail: ((_a = e.versions[0]) === null || _a === void 0 ? void 0 : _a.resources[0]) || "undefined",
                        author: e.owner.nickname || "未知作者",
                        name: e.name || "未知名称",
                        type: e.type || "undefined",
                    };
                });
                return result;
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

            var AssetMarketService = /** @class */ (function () {
                function AssetMarketService(context) {
                    this.context = context;
                }
                AssetMarketService.prototype.fetchMarketItemData = function (query) {
                    var _this = this;
                    try {
                        var observable$ = new Observable(function (observer) {
                            _this.context.sdk.component
                                .listMarketComponents(query)
                                .then(function (res) {
                                var data = res.data;
                                observer.next(res.data.data);
                                observer.complete();
                            })
                                .catch(function (e) {
                                observer.error(e);
                            });
                        });
                        return observable$;
                    }
                    catch (e) {
                        console.log(e);
                    }
                };
                AssetMarketService.prototype.fetchMyItemData = function (query) {
                    var _this = this;
                    try {
                        var observable$ = new Observable(function (observer) {
                            _this.context.sdk.component
                                .listMyComponents(query)
                                .then(function (res) {
                                var data = res.data;
                                observer.next(res.data.data);
                                observer.complete();
                            })
                                .catch(function (e) {
                                observer.error(e);
                            });
                        });
                        return observable$;
                    }
                    catch (e) {
                        console.log(e);
                    }
                };
                AssetMarketService.prototype.fetchMarketFunctionPackData = function (query) {
                    var _this = this;
                    try {
                        var observable$ = new Observable(function (observer) {
                            _this.context.sdk.component
                                .listMarketCustomNodes(query)
                                .then(function (res) {
                                var data = res.data;
                                observer.next(res.data.data);
                                observer.complete();
                            })
                                .catch(function (e) {
                                observer.error(e);
                            });
                        });
                        return observable$;
                    }
                    catch (e) {
                        console.log(e);
                    }
                };
                AssetMarketService.prototype.fetchMyFunctionPackData = function (query) {
                    var _this = this;
                    try {
                        var observable$ = new Observable(function (observer) {
                            _this.context.sdk.component
                                .listMyCustomNodes(query)
                                .then(function (res) {
                                var data = res.data;
                                observer.next(res.data.data);
                                observer.complete();
                            })
                                .catch(function (e) {
                                observer.error(e);
                            });
                        });
                        return observable$;
                    }
                    catch (e) {
                        console.log(e);
                    }
                };
                AssetMarketService = __decorate([
                    Injectable(),
                    __param(0, Inject(ContextService)),
                    __metadata("design:paramtypes", [ContextService])
                ], AssetMarketService);
                return AssetMarketService;
            }());

            var AssetMarketComponent = exports('AssetMarketComponent', /** @class */ (function () {
                function AssetMarketComponent(context, assetMarketService) {
                    this.context = context;
                    this.assetMarketService = assetMarketService;
                    this.assets = [];
                    this.isLoaded = false;
                    this.query = {
                        page: 0,
                        pageSize: 20,
                    };
                }
                AssetMarketComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.context.initial();
                    var assetRawData = this.assetMarketService.fetchMarketItemData(this.query);
                    console.log(assetRawData);
                    assetRawData.subscribe(function (res) {
                        _this.assets = assetSerializer(res);
                        console.log("🚀 ~ file: asset-market.component.ts ~ line 33 ~ AssetMarketComponent ~ ngOnInit ~ this.assets", _this.assets);
                        _this.isLoaded = true;
                    });
                };
                AssetMarketComponent = __decorate([
                    Component({
                        selector: "asset-market",
                        template: "<div class=\"asset-market\"><div class=\"asset-market__header\"><h1>\u8D44\u6E90\u5E02\u573A</h1></div><div class=\"asset-market__search\"><input placeholder=\"\u641C\u7D22\u8D44\u6E90\u5E02\u573A\"></div><div class=\"main\"><div class=\"asset-market__container\"><div class=\"asset-market__banner\">\u8FD9\u91CC\u4EE5\u540E\u4F1A\u6709\u5934\u6761\u5185\u5BB9</div><ul class=\"asset-market__list\"><li *ngFor=\"let asset of assets\"><p-skeletion *ngIf=\"!isLoaded\" size=\"5rem\"></p-skeletion><asset-tile *ngIf=\"isLoaded\" [asset]=\"asset\"></asset-tile></li></ul></div><div class=\"asset-market__filter\">\u8FD9\u91CC\u4EE5\u540E\u4F1A\u6709\u7B5B\u9009\u5668</div></div></div>",
                        styles: [""],
                        providers: [AssetMarketService],
                    }),
                    __param(0, Inject(ContextService)),
                    __metadata("design:paramtypes", [ContextService,
                        AssetMarketService])
                ], AssetMarketComponent);
                return AssetMarketComponent;
            }()));

            var AssetTileComponent = /** @class */ (function () {
                function AssetTileComponent(context) {
                    this.context = context;
                }
                AssetTileComponent.prototype.ngOnInit = function () { };
                AssetTileComponent.prototype.getThumbnail = function (thumbnail) {
                    if (thumbnail && thumbnail !== "undefined") {
                        return this.context.WorkbenchConfig.WEB_RESOURCE_URI + thumbnail;
                    }
                    else {
                        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAADICAYAAACgRt7ZAAANOUlEQVR4Xu2dfahmVRXGf0IlNkJNKlqCaWVJkX+U1ZgTOchIpkhopvRNZUpphTkKFWT0haZUWmSWBdqnZVGWlkga5aBQmVNkmVZiaZpWNKaVfxTLzo1pvDP33fuctfc6ez8bLldwr7X381vrmfe+5z3vPjugIQIikExgh+QIBYiACCDjqAlEIIOAjJMBTSEiIOOoB0Qgg4CMkwFNISIg46gHRCCDgIyTAU0hIiDjqAdEIIOAjJMBTSEiIOOoB0Qgg4CMkwFNISIg46gHRCCDgIyTAU0hIiDjqAdEIIOAjJMBTSEiIOOoB0Qgg4CMkwFNISIg46gHRCCDgIyTAU0hIiDjqAdEIIOAjJMBTSEiIOOoB0Qgg4CMkwFNISIg46gHRCCDgIyTAU0hIiDjqAdEIIOAjJMBTSEiIOOoB0Qgg4CMkwFNISIg46gHRCCDgIyTAS0h5CDgMGDX4WcX4F7gnuHnCuDahHyaGoSAjDN9IfYHXgccATx5gfS3At8CPgNsWmC+pgQgIONMV4Q9gbcAJwM7ZaR9ADgPOBf4Q0a8QgoSkHGmgX0s8EFgnwnS3QIcD1wzQS6lcCIg44wHewpwzvg0D8uwTuZxoDpRShlnHMijgEvHpdhu9N7AbY75lTqTgIyTCQ44ENiYH75Q5M3AAcDmhWZrUjECMk4earsQcBWwX154UtRXgWOSIjTZnYCMk4f4TOC0vNCsKLv4cElWpIJcCMg46Vjtc5rrMi85p6/23wj7kHRtbrDipicg46Qztc9aTkoPGx3xauDi0VmUYBICMk46RrvKtVd62OgIu3r30tFZlGASAjJOGsb1wJVpIZPNfhBYBdhvjcoEZJy0ArwPeGdayKSzDwcunzSjkmURkHHSsJ0PnJAWMulsu0vhw5NmVLIsAjJOGjb7TOXotJBJZ38SOHHSjEqWRUDGScN2NXBwWsiks+3GT7uHTaMyARknrQAyThqvZmfLOGmllXHSeDU7W8ZJK62Mk8ar2dkyTlppZZw0Xs3OlnHSSivjpPFqdraMk1ZaGSeNV7OzZZy00so4abyanS3jpJVWxknj1exsGSettDJOGq9mZ8/VOI8evti1O2A/O2dU6N8ZMXbXQO07B76fse8crfcBdwB36rSdhxOfm3HeMBwpa6fLaJQj8KfhtFH7+vZ3yi0bd6W5GOfI4ZTMQ+Ki7GZnFwEfAW7oRvEyQudgnDOAd/dcpIDa7c+4twMXBNxbkS1FN46dw2xnKWvEJPD64bD4mLtz3FVk49hZYjoSybH4E6VeA1w/Ua7ZpIlqHDuC6cbZUOx7oz8ZTjX9V08YohrnQ8CpPRVi5lo3AGfPXEPS9iMaZzVw0/D5TJIYTa5G4PeA/ZXwl2o7KLxwROPYca9fKsxBy40ncBzw5fFp5pEhonE+DdjVGo15EbgQsA+ouxgRjfMj4Nld0G9LpNXtOW1J2raaiMax518+oZcCNKTz9kpHA1dBGNE4OTckVoGnRf+PgF2O3rEXJjJOL5UuozNiP7kojyhUrzgupS6SNGI/uQiPKFTGcSl1kaQR+8lFeEShMo5LqYskjdhPLsIjCpVxXEpdJGnEfnIRHlGojONS6iJJI/aTi/CIQmUcl1IXSRqxn1yERxQq47iUukjSiP3kIjyiUBnHpdRFkkbsJxfhEYXKOC6lLpI0Yj+5CI8oVMZxKXWRpBH7yUV4RKEyjkupiySN2E8uwiMKlXFcSl0kacR+chEeUaiM41LqIkkj9pOL8IhCZRyXUhdJGrGfXIRHFCrjuJS6SNKI/eQiPKJQGcel1EWSRuwnF+ERhco4LqUukjRiP7kIjyhUxnEpdZGkEfvJRXhEoTKOS6mLJI3YTy7CIwqVcVxKXSRpxH5yER5RqIzjUuoiSSP2k4vwiEJlHJdSF0kasZ9chEcUKuO4lLpI0oj95CI8otBFH1u4C/AUYN/htwsgJU0iELGfkgQsOrkloYcNT6S232YojfIEWuqn7dJrVag92NV+Hl++d7TiAgTuB+4B7gVuHh4PchWweYHYEFNaNY7B3Wcwz5tDkNYmViJgD6Wy5yKdNzxYbKX5Vf9/y8ZZAnsKcE5Vylo8hcDfBvO8F/hnSmDJuT0Yx3g+E9hUEqzWGk3AnrdjT+f7zehMDgl6MY6hs/c7dzgwVEpfAi8Afui7RHr2noxjdI4ALkvHpIjKBPaM9o9eb8ax+tvnRGdUbgQtn0bAXnEOBR5IC/Ob3aNx7E82+/tZj0v06yuPzPZQ5eM9Eufk7NE4xslecRa9QyGHq2J8CKwDrvFJnZa1V+PYq84vgMem4dLsygS+BhxdeQ8PLd+rcUz714GXRCiC9pBEYC1wbVKEw+SejfMm4OMOTJXSl8BZwOm+S6ycvWfj7AbcvTIizQhG4FfAfrX31LNxjP1fgcfULoLWTyawCrAbRauN3o1zK/CkavS1cC6BvYDbc4OniOvdONcDz50CpHIUJfAs4IaiK261WO/GuQ54Xs0CaO0sAgcBG7MiJwrq3Ti/1rdFJ+qksmmeCljtqo3ejWPfQHxcNfpaOJfA6uHCTm786LjejaMTdUa3UPEEdwF7FF9V73H+R8AO9bi8dgG0fjKBs4ENyVETB/T8inMucPLEPJXOn8B6wA72qDp6No4uDFRtvazF7eODNVmREwf1ahw7Ospe8jXmReCVwOcjbLlH49ixUXZ3rc5ci9CBi+/hCuDFi0/3ndmjcT4G6Kw1376aOvuDwCHAD6ZOnJuvN+OcAJyfC0tx1Qi8EfhUtdWXWbgn4+wI3Ac8IlIBtJcVCbwn4uEqPRnnx4DdHKgxDwL/AA4Hvhdxuz0Y58DhLDV7LIjGPAjYhYB3AD+Nut2WjbMzcKpOs4naesvuyz6nsUPXQ1xy3h65Vo3zmuFJBXZmtEZsAva4j28C3xh+x97tsLuWjPN04EjghcCLZkG/vU3aG/mtx3I30tpd6XZ2wC9rf5MztwQRjWMHBS6yr52AXYGlRxo+IxeC4iYjsEjdJlusZqKIQnWrf82OGLd2xH4ap2gb0RGFyjgupS6SNGI/uQiPKFTGcSl1kaQR+8lFeEShMo5LqYskjdhPLsIjCpVxXEpdJGnEfnIRHlGojONS6iJJI/aTi/CIQmUcl1IXSRqxn1yERxQq47iUukjSiP3kIjyiUBnHpdRFkkbsJxfhEYXKOC6lLpI0Yj+5CI8otBXj/Bmw2+M3AfbfSz92cujSj51bfZRLZeskjdhPLiQiCp27cS4ELh1Ms0jR7OnXxwGvaOCLdhH7aZEaJM+JKHSuxrFvKp4z4nTQRw4HJNohiXsnVzJGQMR+ciETUegcjfMu4P0TVWj34cw3O0NsbiNiP7kwjCh0bsaxP7G+4FAd+ybkSQ55PVNG7CcXvRGFzsk43vzsAL5vu1TeJ6k3D59dZ2SNKHQuxtkXuCWDeWrIy+fwHfxBVMR+SuW90PyIQudgHHslsEvNpcZcnqwQsZ9cahRRaHTjXADYiaAlx27Dedf2Khd5ROwnF14RhUY3zgGAHW5Yeszh+N6I/eRSp4hCIxunxqvNloX/LnCoSydMkzRiP02jbKssEYVGNk7p9zZbF/21wGddOmGapBH7aRplMk42R7uCVvs9hr3XuTtbgX+gjOPPeJsrRH3FOQs4vSKXpaWvBg4OsI/ltiDjVCxMVOOsHa5sVUTz0NKnAWfW3sQ21pdxKhbmj4DdrxVt2BG7NwXYlH0Nwe6+jjbsWFs7WbWLEfFfiBuB/QPS3wO4K8C+jI0xijZ+FrRuLpwiGucS4BgXteOSPgqwZ1HWHnZm9v21N7HM+l8BXhZwXy5bimgcu53+Yhe145JGYhXxfeCrgM+NQzyf6EjNsETticDvAiKMxCqicezLd7cFrJvLliI1w5YCLwLsX7BIIxKraMb5KPC2SMXy3kukZthSq91WYreXRBqRWEUyjn0guwb4baRiee8lUjNsrfUTwIneABLyR2IVyTj2nFU7a6GrEakZlgMf6VPySKyiGOey4fGRXZnGxEZqhm3Bt1tdNgSoTCRWEYxjtx9ZbbockZphewWw54K+FVhdsUqRWNU0zs+BDwBfrFiL6ktHaoaVYDxtMM+xw0mYK82f+v9HYlXDOHZ3uH2lwa6g/X1quHPLF6kZFmVnn+CvB54/3NNmt8KsWjR4xLx1I2KnDrX3ft5jM3Dn8HMlsNF7wTnln6Nx5sRXe22UgIzTaGEly5eAjOPLV9kbJSDjNFpYyfIlIOP48lX2RgnIOI0WVrJ8Ccg4vnyVvVECMk6jhZUsXwIyji9fZW+UgIzTaGEly5eAjOPLV9kbJSDjNFpYyfIlIOP48lX2RgnIOI0WVrJ8Ccg4vnyVvVECMk6jhZUsXwIyji9fZW+UgIzTaGEly5eAjOPLV9kbJSDjNFpYyfIlIOP48lX2RgnIOI0WVrJ8Ccg4vnyVvVECMk6jhZUsXwIyji9fZW+UgIzTaGEly5eAjOPLV9kbJSDjNFpYyfIlIOP48lX2RgnIOI0WVrJ8Ccg4vnyVvVEC/wFZr0XYt3sPUgAAAABJRU5ErkJggg==";
                    }
                };
                __decorate([
                    Input("asset"),
                    __metadata("design:type", Object)
                ], AssetTileComponent.prototype, "asset", void 0);
                AssetTileComponent = __decorate([
                    Component({
                        selector: "asset-tile",
                        template: "<div class=\"asset-tile\"><div class=\"asset-tile__thumbnail\"><img src=\"getThumbnail(asset.thumbnail)\" alt=\"\"> <img #noThumbnail src=\"data:image/png;base64,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\"> <button *ngIf=\"asset.isFavorite; else notFavorite\" class=\"asset-tile__favorite\"></button> <button #notFavorite class=\"asset-tile__not-favorite\"></button></div><div *ngIf=\"!!asset.options\" class=\"asset-tile__optional-section\"></div><div class=\"asset-tile__author\">{{ asset.author }}</div><div class=\"asset-tile__name\">{{ asset.name }}/div><div class=\"asset-tile__rank\">{{ asset.rank }}</div><div *ngIf=\"!!asset.price\" class=\"asset-tile__price\">{{ asset.price.cost }}{{ asset.price.currency }}</div></div></div>",
                        styles: [""],
                    }),
                    __param(0, Inject(ContextService)),
                    __metadata("design:paramtypes", [ContextService])
                ], AssetTileComponent);
                return AssetTileComponent;
            }());

            var AssetMarketPluginModule = exports('AssetMarketPluginModule', /** @class */ (function () {
                function AssetMarketPluginModule() {
                }
                AssetMarketPluginModule = __decorate([
                    NgModule({
                        declarations: [AssetMarketComponent, AssetTileComponent],
                        imports: [CommonModule, FormsModule, AccordionModule, FileUploadModule],
                        exports: [AssetMarketComponent],
                        entryComponents: [AssetMarketComponent],
                        providers: [
                            {
                                provide: "AssetMarketComponent",
                                useValue: AssetMarketComponent,
                            },
                            AssetMarketService,
                        ],
                    })
                ], AssetMarketPluginModule);
                return AssetMarketPluginModule;
            }()));

            var config$1 = exports('config', {
                name: "asset-market-plugin",
                id: "assetMarket",
                components: ["AssetMarketComponent"],
                dialogComponents: [],
                moduleName: "AssetMarketPluginModule",
                displayName: "资源市场",
                contributes: {
                    workbenchActivitybar: {
                        title: "资源市场",
                        icon: "qing qing-modules",
                        command: function (context) {
                            context.eventBus.emit(config$1.events.OPEN_ASSET_MARKET);
                        },
                    },
                    workbenchExplorer: {
                        component: "AssetMarketComponent",
                    },
                },
                events: {
                    OPEN_ASSET_MARKET: "open-asset-market",
                },
            });
            var active = exports('active', function (context) {
                context.eventBus.on(config$1.events.OPEN_ASSET_MARKET, function () {
                    context.puzzle
                        .getPuzzleSlot(WORKBENCH_PUZZLE_BLOCK.WORKBENCH_EXPLORER)
                        .container.renderComponent("AssetMarketComponent");
                });
            });
            var deactive = exports('deactive', function (context) { });

        }
    };
});
