"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _axios = _interopRequireDefault(require("axios"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _store = _interopRequireDefault(require("store"));

var _svgs = require("./svg/svgs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var expirePlugin = require('store/plugins/expire');

_store.default.addPlugin(expirePlugin);

var LinkedInProfileBar = function LinkedInProfileBar(props) {
  var flatButtonStyle = {
    backgroundColor: 'rgba(230,230,230,0.8)',
    borderRadius: '0',
    height: '100%',
    textTransform: 'none'
  };

  var _props = _objectSpread({}, props),
      tooltip = _props.tooltip,
      username = _props.username,
      organization = _props.organization,
      role = _props.role,
      newPage = _props.newPage;

  if (newPage == undefined) newPage = true;
  tooltip = tooltip || 'Visit Profile';

  var getPad = function getPad(val) {
    return {
      'padding': val
    };
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.Grid, {
    container: true
  }, _react.default.createElement(_core.Grid, {
    className: "Paper"
  }, _react.default.createElement(_core.Tooltip, {
    title: "LinkedIn"
  }, _react.default.createElement(_core.Button, {
    variant: "text",
    style: flatButtonStyle
  }, _react.default.createElement(_svgs.LinkedInSVG, null))), _react.default.createElement(_core.Tooltip, {
    title: tooltip
  }, _react.default.createElement("a", {
    target: newPage ? '_blank' : '',
    href: "https://in.linkedin.com/in/".concat(username),
    style: {
      padding: '10px'
    }
  }, username)), organization && _react.default.createElement(_core.Tooltip, {
    title: "Organization"
  }, _react.default.createElement(_core.Button, {
    variant: "text",
    style: flatButtonStyle
  }, _react.default.createElement(_svgs.BuildingSVG, {
    style: getPad('5px')
  }), " ", _react.default.createElement("b", null, organization))), role && _react.default.createElement(_core.Tooltip, {
    title: "Role"
  }, _react.default.createElement(_core.Button, {
    variant: "text",
    style: _objectSpread({}, flatButtonStyle, {
      textTransform: 'none'
    })
  }, " ", _react.default.createElement(_svgs.PersonSVG, {
    style: getPad('2px')
  }), " ", role)))));
};

LinkedInProfileBar.propTypes = {
  username: _propTypes.default.string.isRequired,
  tooltip: _propTypes.default.string,
  role: _propTypes.default.string,
  organization: _propTypes.default.string
};
var _default = LinkedInProfileBar;
exports.default = _default;