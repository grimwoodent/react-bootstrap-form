"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = void 0;

var _grim = require("grim.lib");

var _schema = require("./schema");

var _uischema = require("./uischema");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var uid = new _grim.UID.Queue();

var Field =
/*#__PURE__*/
function () {
  function Field(schema, uischema, events) {
    _classCallCheck(this, Field);

    _defineProperty(this, "uid", uid.getNext());

    _defineProperty(this, "schema", void 0);

    _defineProperty(this, "uischema", void 0);

    _defineProperty(this, "events", void 0);

    this.schema = new _schema.Schema(schema);
    this.uischema = new _uischema.UISchema(uischema);
    this.events = new _grim.Callbacks(events);
  }

  _createClass(Field, [{
    key: "getUID",
    value: function getUID() {
      return this.uid;
    }
  }, {
    key: "getSchema",
    value: function getSchema() {
      return this.schema;
    }
  }, {
    key: "getUISchema",
    value: function getUISchema() {
      return this.uischema;
    }
  }]);

  return Field;
}();

exports.Field = Field;