// Generated by CoffeeScript 1.10.0
(function() {
  var Logger, colors,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  colors = require('colors');

  Logger = (function() {
    function Logger() {
      this.Log = bind(this.Log, this);
      this.Info = bind(this.Info, this);
      this.Success = bind(this.Success, this);
      this.Error = bind(this.Error, this);
      this._getIndent = bind(this._getIndent, this);
    }

    Logger.prototype._getIndent = function(i) {
      var idnt;
      idnt = '\ \ ';
      if (i && typeof i === "number") {
        return " " + (idnt.repeat(i - 1)) + "- ";
      } else {
        return '';
      }
    };

    Logger.prototype.Error = function(msg, i) {
      var idnt;
      if (typeof msg === 'undefined') {
        return;
      }
      idnt = this._getIndent(i);
      return console.log(("" + idnt + msg).red);
    };

    Logger.prototype.Success = function(msg, i) {
      var idnt;
      if (typeof msg === 'undefined') {
        return;
      }
      idnt = this._getIndent(i);
      return console.log(("" + idnt + msg).green);
    };

    Logger.prototype.Info = function(msg, i) {
      var idnt;
      if (typeof msg === 'undefined') {
        return;
      }
      idnt = this._getIndent(i);
      return console.log(("" + idnt + msg).yellow);
    };

    Logger.prototype.Log = function(msg, i) {
      var idnt;
      if (typeof msg === 'undefined') {
        return;
      }
      idnt = this._getIndent(i);
      return console.log("" + idnt + msg);
    };

    return Logger;

  })();

  module.exports = Logger;

}).call(this);
