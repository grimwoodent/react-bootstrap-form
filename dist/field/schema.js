"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Schema = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Schema =
/*#__PURE__*/
function () {
  function Schema(props) {
    _classCallCheck(this, Schema);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "error", void 0);

    var type = props.type,
        error = props.error;
    this.type = type;
    this.error = error;
  }

  _createClass(Schema, [{
    key: "getType",
    value: function getType() {
      return this.type;
    } // region error

  }, {
    key: "getError",
    value: function getError() {
      return this.error;
    }
  }, {
    key: "setError",
    value: function setError(message) {
      this.error = message;
    } // endregion

  }]);

  return Schema;
}();

exports.Schema = Schema;