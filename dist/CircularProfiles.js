"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Twitter = exports.Youtube = exports.Instagram = exports.GooglePlus = exports.Facebook = exports.Twitch = exports.Skype = exports.Yahoo = void 0;

var _react = _interopRequireDefault(require("react"));

var _svgs = require("./svg/svgs");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledIcon = function StyledIcon(_ref) {
  var children = _ref.children,
      link = _ref.link,
      tooltip = _ref.tooltip,
      newPage = _ref.newPage;
  return _react.default.createElement(_core.Tooltip, {
    title: tooltip
  }, _react.default.createElement("a", {
    href: link,
    target: newPage ? "_blank" : ""
  }, children));
};

var Instagram = function Instagram(_ref2) {
  var _ref2$link = _ref2.link,
      link = _ref2$link === void 0 ? '#' : _ref2$link,
      _ref2$tooltip = _ref2.tooltip,
      tooltip = _ref2$tooltip === void 0 ? "Instagram" : _ref2$tooltip,
      _ref2$newPage = _ref2.newPage,
      newPage = _ref2$newPage === void 0 ? true : _ref2$newPage;
  return _react.default.createElement(StyledIcon, {
    link: link,
    tooltip: tooltip,
    newPage: newPage
  }, _react.default.createElement("div", {
    className: "UnitIconReactProfile inline"
  }, _react.default.createElement(_svgs.InstagramSVG, {
    width: "50px",
    height: "50px"
  })));
};

exports.Instagram = Instagram;

var Youtube = function Youtube(_ref3) {
  var _ref3$link = _ref3.link,
      link = _ref3$link === void 0 ? '#' : _ref3$link,
      _ref3$tooltip = _ref3.tooltip,
      tooltip = _ref3$tooltip === void 0 ? "Youtube" : _ref3$tooltip,
      _ref3$newPage = _ref3.newPage,
      newPage = _ref3$newPage === void 0 ? true : _ref3$newPage;
  return _react.default.createElement(StyledIcon, {
    link: link,
    tooltip: tooltip,
    newPage: newPage
  }, _react.default.createElement("div", {
    className: "UnitIconReactProfile inline"
  }, _react.default.createElement(_svgs.YoutubeSVG, {
    width: "50px",
    height: "50px"
  })));
};

exports.Youtube = Youtube;

var Facebook = function Facebook(_ref4) {
  var _ref4$link = _ref4.link,
      link = _ref4$link === void 0 ? '#' : _ref4$link,
      _ref4$tooltip = _ref4.tooltip,
      tooltip = _ref4$tooltip === void 0 ? "Facebook" : _ref4$tooltip,
      _ref4$newPage = _ref4.newPage,
      newPage = _ref4$newPage === void 0 ? true : _ref4$newPage;
  return _react.default.createElement(StyledIcon, {
    link: link,
    tooltip: tooltip,
    newPage: newPage
  }, _react.default.createElement("div", {
    className: "UnitIconReactProfile inline"
  }, _react.default.createElement(_svgs.FacebookSVG, {
    width: "50px",
    height: "50px"
  })));
};

exports.Facebook = Facebook;

var GooglePlus = function GooglePlus(_ref5) {
  var _ref5$link = _ref5.link,
      link = _ref5$link === void 0 ? '#' : _ref5$link,
      _ref5$tooltip = _ref5.tooltip,
      tooltip = _ref5$tooltip === void 0 ? "Google Plus" : _ref5$tooltip,
      _ref5$newPage = _ref5.newPage,
      newPage = _ref5$newPage === void 0 ? true : _ref5$newPage;
  return _react.default.createElement(StyledIcon, {
    link: link,
    tooltip: tooltip,
    newPage: newPage
  }, _react.default.createElement("div", {
    className: "UnitIconReactProfile inline"
  }, _react.default.createElement(_svgs.GooglePlusSVG, {
    width: "50px",
    height: "50px"
  })));
};

exports.GooglePlus = GooglePlus;

var Twitch = function Twitch(_ref6) {
  var _ref6$link = _ref6.link,
      link = _ref6$link === void 0 ? '#' : _ref6$link,
      _ref6$tooltip = _ref6.tooltip,
      tooltip = _ref6$tooltip === void 0 ? "Twitch" : _ref6$tooltip,
      _ref6$newPage = _ref6.newPage,
      newPage = _ref6$newPage === void 0 ? true : _ref6$newPage;
  return _react.default.createElement(StyledIcon, {
    link: link,
    tooltip: tooltip,
    newPage: newPage
  }, _react.default.createElement("div", {
    className: "UnitIconReactProfile inline"
  }, _react.default.createElement(_svgs.TwitchSVG, {
    width: "50px",
    height: "50px"
  })));
};

exports.Twitch = Twitch;

var Skype = function Skype(_ref7) {
  var _ref7$link = _ref7.link,
      link = _ref7$link === void 0 ? '#' : _ref7$link,
      _ref7$tooltip = _ref7.tooltip,
      tooltip = _ref7$tooltip === void 0 ? "Skype" : _ref7$tooltip,
      _ref7$newPage = _ref7.newPage,
      newPage = _ref7$newPage === void 0 ? true : _ref7$newPage;
  return _react.default.createElement(StyledIcon, {
    link: link,
    tooltip: tooltip,
    newPage: newPage
  }, _react.default.createElement("div", {
    className: "UnitIconReactProfile inline"
  }, _react.default.createElement(_svgs.SkypeSVG, {
    width: "50px",
    height: "50px"
  })));
};

exports.Skype = Skype;

var Yahoo = function Yahoo(_ref8) {
  var _ref8$link = _ref8.link,
      link = _ref8$link === void 0 ? '#' : _ref8$link,
      _ref8$tooltip = _ref8.tooltip,
      tooltip = _ref8$tooltip === void 0 ? "Yahoo" : _ref8$tooltip,
      _ref8$newPage = _ref8.newPage,
      newPage = _ref8$newPage === void 0 ? true : _ref8$newPage;
  return _react.default.createElement(StyledIcon, {
    link: link,
    tooltip: tooltip,
    newPage: newPage
  }, _react.default.createElement("div", {
    className: "UnitIconReactProfile inline"
  }, _react.default.createElement(_svgs.YahooSVG, {
    width: "50px",
    height: "50px"
  })));
};

exports.Yahoo = Yahoo;

var Twitter = function Twitter(_ref9) {
  var _ref9$link = _ref9.link,
      link = _ref9$link === void 0 ? '#' : _ref9$link,
      _ref9$tooltip = _ref9.tooltip,
      tooltip = _ref9$tooltip === void 0 ? "Twitter" : _ref9$tooltip,
      _ref9$newPage = _ref9.newPage,
      newPage = _ref9$newPage === void 0 ? true : _ref9$newPage;
  return _react.default.createElement(StyledIcon, {
    link: link,
    tooltip: tooltip,
    newPage: newPage
  }, _react.default.createElement("div", {
    className: "UnitIconReactProfile inline"
  }, _react.default.createElement(_svgs.TwitterSVG, {
    width: "50px",
    height: "50px"
  })));
};

exports.Twitter = Twitter;