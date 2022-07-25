"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @param {Boolean} show
 * @param {funcion} onCloseFunction
 * @param {object, string} styleModalWrapper //Style for Inline react CSS can be string or set of style objects.
 * @param {object, string} styleModalContainer //Style for Inline react CSS can be string or set of style objects.
 * @param {object, string} styleModalButton //Style for Inline react CSS can be string or set of style objects.
 * @param {object, string} styleModalHeader //Style for Inline react CSS can be string or set of style objects.
 * @param {object, string} styleModalBody //Style for Inline react CSS can be string or set of style objects.
 
 * @param {node} modalHeaderContent //Anything that can be rendered: numbers, strings, elements or an array
 * @param {node} modalBodyContent //Anything that can be rendered: numbers, strings, elements or an array
 
* @param {string} buttonContent 
 * @returns HTMLElement
 */
const Modal = _ref => {
  let {
    show,
    onCloseFunction,
    styleModalWrapper,
    styleModalContainer,
    styleModalHeader,
    styleModalBody,
    styleButton,
    modalHeaderContent,
    modalBodyContent,
    buttonContent
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, show ? /*#__PURE__*/_react.default.createElement("div", {
    style: styleModalWrapper,
    className: "modalWrapper",
    onClick: onCloseFunction
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContainer",
    style: styleModalContainer,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "modalHeader",
    style: styleModalHeader
  }, modalHeaderContent), /*#__PURE__*/_react.default.createElement("section", {
    className: "modalBody",
    style: styleModalBody
  }, modalBodyContent ? modalBodyContent : "Modal Body Content"), /*#__PURE__*/_react.default.createElement("section", {
    className: "modalFooter"
  }, /*#__PURE__*/_react.default.createElement("button", {
    style: styleButton,
    className: "button",
    onClick: onCloseFunction
  }, buttonContent ? buttonContent : "Close")))) : "");
};

Modal.propTypes = {
  show: _propTypes.default.bool.isRequired,
  onCloseFunction: _propTypes.default.func.isRequired,
  styleModalWrapper: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  styleModalContainer: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  styleModalHeader: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  styleModalBody: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  styleButton: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  modalHeaderContent: _propTypes.default.node,
  modalBodyContent: _propTypes.default.node,
  buttonContent: _propTypes.default.string
};
var _default = Modal;
exports.default = _default;