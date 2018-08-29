"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldStrategy = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FieldStrategy =
/*#__PURE__*/
function () {
  function FieldStrategy(props) {
    _classCallCheck(this, FieldStrategy);

    _defineProperty(this, "props", void 0);

    this.props = props;
  }

  _createClass(FieldStrategy, [{
    key: "getType",
    value: function getType() {
      return this.props.type;
    }
  }, {
    key: "getValueByData",
    value: function getValueByData(data) {
      return typeof this.props.toValue === 'function' ? this.props.toValue(data) : data;
    }
  }, {
    key: "getDataByValue",
    value: function getDataByValue(value) {
      return typeof this.props.toData === 'function' ? this.props.toData(value) : value;
    }
  }]);

  return FieldStrategy;
}();

exports.FieldStrategy = FieldStrategy;