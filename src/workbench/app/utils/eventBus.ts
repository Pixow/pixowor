export class EventBus {
  events: any;

  constructor() {
    this.events = {};
  }

  on(type: string, listener: Function, isUnshift?: boolean) {
    if (this.events[type]) {
      if (isUnshift) {
        this.events[type].unshift(listener);
      } else {
        this.events[type].push(listener);
      }
    } else {
      this.events[type] = [listener];
    }
  }

  emit(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach((fn) => fn.call(this, ...args));
    }
  }

  once(type, listener) {
    const me = this;
    function oneTime(...args) {
      listener.call(this, ...args);
      me.off(type, oneTime);
    }
    me.on(type, oneTime);
  }

  off(type, listener) {
    if (this.events[type]) {
      const index = this.events[type].indexOf(listener);
      this.events[type].splice(index, 1);
    }
  }
}
