"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrategyFactory = void 0;

var _strategy = require("./strategy");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StrategyFactory =
/*#__PURE__*/
function () {
  function StrategyFactory() {
    _classCallCheck(this, StrategyFactory);
  }

  _createClass(StrategyFactory, [{
    key: "create",
    value: function create(props) {
      return new _strategy.FieldStrategy(props);
    }
  }]);

  return StrategyFactory;
}();

exports.StrategyFactory = StrategyFactory;