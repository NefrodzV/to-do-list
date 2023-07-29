const events = {
  _events: [],

  on: function (eventName, fn) {
    this._events[eventName] = this._events[eventName] || []
    this._events[eventName].push(fn)
  },

  off: function (eventName, fn) {
    if (this._events[eventName]) {
      for (let i = 0; i < this._events[eventName].lenght; i++) {
        if (this._events[eventName][i] === fn) {
          this._events[eventName].splice(i, 1)
        }
      }
    }
  },

  emit: function (eventName, data) {
    if (this._events[eventName]) {
      this._events[eventName].forEach(function (fn) {
        fn(data)
      })
    }
  },
}

export default events
