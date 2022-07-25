"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Modal: true
};
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function get() {
    return _Modal.Modal;
  }
});

var _Modal = require("./components/Modal");

var _components = require("./components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});