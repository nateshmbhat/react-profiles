"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YahooSVG = exports.SkypeSVG = exports.InstagramSVG = exports.GooglePlusSVG = exports.TwitchSVG = exports.YoutubeSVG = exports.TwitterSVG = exports.FacebookSVG = exports.BuildingSVG = exports.LinkedInSVG = exports.BadgeSVG = exports.StackOverflowSVG = exports.RankSVG = exports.GithubSVG = exports.PersonSVG = exports.HackerrankSVG = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var HackerrankSVG = function HackerrankSVG(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '30px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '30px' : _ref$height,
      _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? '0 0 25 25' : _ref$viewBox,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? '#00ff00' : _ref$fill;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    "aria-hidden": "true",
    width: width,
    height: height,
    style: {
      "msTransform": "rotate(360deg)",
      "WebkitTransform": "lrotate(360deg)",
      'transform': 'rotate(360deg)'
    },
    preserveAspectRatio: "xMidYMid meet",
    viewBox: viewBox
  }, _react.default.createElement("path", {
    d: "M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799a.259.259 0 0 0-.258.258v3.875H9.963V6.908h.701a.255.255 0 0 0 .254-.258.257.257 0 0 0-.123-.221L9.223 4.92a.303.303 0 0 0-.226-.109.265.265 0 0 0-.207.107L7.11 6.43a.257.257 0 0 0-.12.218c0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492a.258.258 0 0 0 .259-.256v-4.004h4.073v4.152h-.699a.26.26 0 1 0-.137.477l1.579 1.51a.301.301 0 0 0 .225.109.264.264 0 0 0 .208-.109l1.679-1.51a.258.258 0 0 0-.135-.477h-.704l-.007-10.034a.257.257 0 0 0-.255-.26h-1.494v.002z",
    fill: fill
  }));
};

exports.HackerrankSVG = HackerrankSVG;

var GithubSVG = function GithubSVG(_ref2) {
  var _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? '30px' : _ref2$width,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? '30px' : _ref2$height,
      _ref2$viewBox = _ref2.viewBox,
      viewBox = _ref2$viewBox === void 0 ? '0 0 25 25' : _ref2$viewBox;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    width: width,
    height: height,
    viewBox: viewBox
  }, _react.default.createElement("path", {
    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
  }));
};

exports.GithubSVG = GithubSVG;

var StackOverflowSVG = function StackOverflowSVG(_ref3) {
  var _ref3$height = _ref3.height,
      height = _ref3$height === void 0 ? '22px' : _ref3$height,
      _ref3$viewBox = _ref3.viewBox,
      viewBox = _ref3$viewBox === void 0 ? "0 15 512 80" : _ref3$viewBox;
  var styles = '.st0{fill:#222426}.st1{fill:#bcbbbb}.st2{fill:#f48024}';
  return _react.default.createElement("div", null, _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    viewBox: viewBox,
    height: height
  }), _react.default.createElement("style", null, styles, "`"), _react.default.createElement("path", {
    className: "st0",
    d: "M123.7 67.3l-4.8-.4c-3.7-.3-5.2-1.8-5.2-4.3 0-3 2.3-4.9 6.6-4.9 3.1 0 5.8.7 7.9 2.4l2.8-2.8c-2.7-2.2-6.4-3.2-10.7-3.2-6.3 0-10.9 3.3-10.9 8.7 0 4.9 3.1 7.5 8.9 8l4.9.4c3.4.3 4.9 1.7 4.9 4.3 0 3.5-3 5.2-7.9 5.2-3.7 0-6.9-1-9.2-3.4l-2.9 2.9c3.3 3.1 7.2 4.3 12.2 4.3 7.2 0 12.1-3.3 12.1-9 .1-5.8-3.5-7.7-8.7-8.2zm37.2-13.4c-4.8 0-7.8.9-10.4 4.3l2.8 2.8c1.7-2.5 3.7-3.4 7.5-3.4 5.4 0 7.6 2.2 7.6 6.5V67h-8.9c-6.6 0-10.2 3.4-10.2 8.6 0 2.4.8 4.6 2.2 6 1.9 1.9 4.3 2.7 8.4 2.7 4 0 6.1-.8 8.6-3.2V84h4.3V63.8c-.1-6.4-4-9.9-11.9-9.9zm7.5 19.6c0 2.5-.5 4.2-1.5 5.1-1.9 1.8-4.1 2-6.6 2-4.7 0-6.8-1.6-6.8-5.1 0-3.4 2.2-5.2 6.6-5.2h8.3v3.2zm21.3-15.7c2.8 0 4.6.8 6.8 3.3l2.9-2.8c-3-3.3-5.6-4.3-9.7-4.3-7.5 0-13.1 5.1-13.1 15.2s5.7 15.2 13.1 15.2c4.1 0 6.7-1.1 9.8-4.4l-3-2.8c-2.2 2.5-4 3.4-6.8 3.4-2.9 0-5.3-1.1-6.9-3.4-1.4-1.9-1.9-4.2-1.9-8 0-3.7.5-6 1.9-8 1.6-2.3 4-3.4 6.9-3.4zm37.2-3.5h-5.4L208 67.4V41.1h-4.3V84h4.3V73.2l5.3-5.3 9.9 16.1h5.4l-12.3-19.1 10.6-10.6zm20.4-1.6c-4.6 0-7.6 1.8-9.5 3.8-2.8 2.9-3.5 6.4-3.5 12s.7 9.1 3.5 12c1.9 2 5 3.8 9.5 3.8 4.6 0 7.7-1.8 9.6-3.8 2.8-2.9 3.5-6.4 3.5-12s-.7-9.1-3.5-12c-1.9-2-5.1-3.8-9.6-3.8zm3.6 23.3c-.9.9-2.1 1.4-3.6 1.4s-2.7-.5-3.6-1.4c-1.6-1.6-1.8-4.3-1.8-7.5s.2-5.9 1.8-7.5c.9-.9 2-1.4 3.6-1.4 1.5 0 2.7.5 3.6 1.4 1.6 1.6 1.8 4.3 1.8 7.5s-.2 5.9-1.8 7.5zm30-22.9l-6.2 19.1-6.3-19.1h-8.1L271.7 84h6L289 53.1h-8.1zm21.3-.4c-8 0-13.5 5.7-13.5 15.8 0 12.5 7 15.8 14.3 15.8 5.6 0 8.6-1.7 11.7-4.9l-4.7-4.6c-2 2-3.6 2.9-7 2.9-4.3 0-6.8-2.9-6.8-6.9h19.3v-3.4c.1-8.4-4.8-14.7-13.3-14.7zm-5.9 12.9c.1-1.4.2-2.2.7-3.3.8-1.8 2.5-3.2 5.2-3.2 2.6 0 4.3 1.4 5.2 3.2.5 1.1.7 2 .7 3.3h-11.8zM327 56v-3h-7.5v31h7.7V65.4c0-3.9 2.6-5.7 5-5.7 1.9 0 2.9.6 4.1 1.8l5.8-5.8c-2.1-2.1-4.3-2.9-7.3-2.9-3.4-.1-6.3 1.5-7.8 3.2zm17.4-6.1V84h7.7V59.6h5.7v-5.9h-5.7v-3.4c0-1.8.9-2.8 2.7-2.8h3V41h-4.4c-6.2 0-9 4.5-9 8.9zm45.2 2.8c-4.6 0-7.6 1.8-9.5 3.8-2.8 2.9-3.5 6.4-3.5 12s.7 9.1 3.5 12c1.9 2 5 3.8 9.5 3.8 4.6 0 7.7-1.8 9.6-3.8 2.8-2.9 3.5-6.4 3.5-12s-.7-9.1-3.5-12c-1.9-2-5.1-3.8-9.6-3.8zm3.6 23.3c-.9.9-2.1 1.4-3.6 1.4s-2.7-.5-3.6-1.4c-1.6-1.6-1.8-4.3-1.8-7.5s.2-5.9 1.8-7.5c.9-.9 2-1.4 3.6-1.4 1.5 0 2.7.5 3.6 1.4 1.6 1.6 1.8 4.3 1.8 7.5s-.2 5.9-1.8 7.5zm45.9-22.9l-5 19.1-6.3-19.1h-5.6l-6.3 19.1-5-19.1h-8.2l9.5 30.9h6.3l6.5-19.4 6.5 19.4h6.3l9.4-30.9h-8.1zm-69.9 21.6V41h-7.7v34.1c0 4.4 2.7 8.8 9 8.8h4.4v-6.5h-3c-1.9 0-2.7-.9-2.7-2.7zM144.5 59l4-4h-8.2v-9.8H136V76c0 4.4 2.5 8 7.6 8h3.1v-3.7h-2.3c-2.8 0-4-1.6-4-4.3V59h4.1z"
  }), _react.default.createElement("path", {
    className: "st1",
    d: "M87.6 91.3v-22H95v29.3H29.1V69.3h7.3v22z"
  }), _react.default.createElement("path", {
    className: "st2",
    d: "M44.5 67.3l35.9 7.5 1.5-7.2L46 60.1l-1.5 7.2zm4.7-17.2l33.2 15.5 3.1-6.6-33.2-15.6-3.1 6.7zm9.2-16.3l28.2 23.4 4.7-5.6-28.2-23.4-4.7 5.6zm18.2-17.3l-5.9 4.4 21.9 29.4 5.9-4.4-21.9-29.4zM43.7 83.9h36.6v-7.3H43.7v7.3z"
  })));
};

exports.StackOverflowSVG = StackOverflowSVG;

var BadgeSVG = function BadgeSVG(_ref4) {
  var _ref4$viewBox = _ref4.viewBox,
      viewBox = _ref4$viewBox === void 0 ? "0 0 128 128" : _ref4$viewBox,
      _ref4$width = _ref4.width,
      width = _ref4$width === void 0 ? "50" : _ref4$width,
      _ref4$height = _ref4.height,
      height = _ref4$height === void 0 ? "50" : _ref4$height;
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    viewBox: viewBox,
    width: width,
    height: height
  }), _react.default.createElement("defs", null, _react.default.createElement("style", null, ".cls-2{fill:#2175aa}.cls-3{fill:#c3edf5}")), _react.default.createElement("g", {
    id: "_23_Page_Rank_Badge",
    "data-name": "23 Page Rank Badge"
  }, _react.default.createElement("path", {
    fill: "#4d91bb",
    d: "M43.22 61L64 73l-24 41.53-4.35-16.46-16.43 4.46zm41.57 0L64 73l24 41.57 4.35-16.46 16.43 4.46z"
  }), _react.default.createElement("path", {
    d: "M39.48 67.43v14.05h15.54l2.57 2.58L64 72.97l-20.78-12-3.74 6.46zM92.52 74.36l-7.74-13.39-20.78 12 7.87 13.63 5.11-5.12h15.54v-7.12z",
    class: "cls-2"
  }), _react.default.createElement("path", {
    d: "M37.48 24.45h53.03v53.03H37.48z",
    class: "cls-3"
  }), _react.default.createElement("path", {
    d: "M37.48 24.45h53.03v53.03H37.48z",
    class: "cls-3",
    transform: "rotate(45 64.002 50.96)"
  }), _react.default.createElement("circle", {
    cx: "64",
    cy: "50.97",
    r: "15",
    fill: "#7ad0cb"
  }), _react.default.createElement("path", {
    fill: "#4dbab4",
    d: "M52.74 51a15 15 0 0 1 13.13-14.91 15 15 0 1 0 0 29.74A15 15 0 0 1 52.74 51z"
  })));
};

exports.BadgeSVG = BadgeSVG;

var RankSVG = function RankSVG(_ref5) {
  var _ref5$width = _ref5.width,
      width = _ref5$width === void 0 ? "30" : _ref5$width,
      _ref5$height = _ref5.height,
      height = _ref5$height === void 0 ? "30" : _ref5$height,
      _ref5$viewBox = _ref5.viewBox,
      viewBox = _ref5$viewBox === void 0 ? "0 0 750 750" : _ref5$viewBox;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: viewBox,
    width: width,
    height: height
  }, _react.default.createElement("path", {
    fill: "#ff5a51",
    d: "M196 436H76V315a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4v121z"
  }), _react.default.createElement("path", {
    fill: "#ffbd2a",
    d: "M436 436H316V255a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4v181z"
  }), _react.default.createElement("path", {
    fill: "#bec950",
    d: "M316 436H196V205a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4v231z"
  }), _react.default.createElement("path", {
    fill: "#e75955",
    d: "M196 436h-30V311h26a4 4 0 0 1 4 4v121z"
  }), _react.default.createElement("path", {
    fill: "#ff993b",
    d: "M436 436h-30V251h26a4 4 0 0 1 4 4v181z"
  }), _react.default.createElement("path", {
    fill: "#58c357",
    d: "M316 436h-30V201h26a4 4 0 0 1 4 4v231z"
  }), _react.default.createElement("g", {
    fill: "#ff993b"
  }, _react.default.createElement("path", {
    d: "M256 130.75a7.5 7.5 0 0 0-7.5 7.5v35.5c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-35.5a7.5 7.5 0 0 0-7.5-7.5zM249.896 72a7.5 7.5 0 0 0-7.5-7.5h-25.661c-16.12 0-29.234 13.114-29.234 29.234v3.473c0 20.563 16.729 37.293 37.292 37.293h17.603a7.5 7.5 0 0 0 7.5-7.5V72zm-15 47.5h-10.103c-12.292 0-22.292-10.001-22.292-22.293v-3.473c0-7.849 6.386-14.234 14.234-14.234h18.161v40zM295.266 64.5h-25.661a7.5 7.5 0 0 0-7.5 7.5v55a7.5 7.5 0 0 0 7.5 7.5h17.603c20.563 0 37.292-16.729 37.292-37.293v-3.473c0-16.12-13.114-29.234-29.234-29.234zM309.5 97.207c0 12.292-10 22.293-22.292 22.293h-10.103v-40h18.161c7.849 0 14.234 6.386 14.234 14.234v3.473z"
  })), _react.default.createElement("path", {
    fill: "#ffd681",
    d: "M286 201h-60c-5.523 0-10-4.477-10-10v-4c0-8.837 7.163-16 16-16h48c8.837 0 16 7.163 16 16v4c0 5.523-4.477 10-10 10z"
  }), _react.default.createElement("path", {
    fill: "#ffbd2a",
    d: "M280 171h-30c8.837 0 16 7.164 16 16v4c0 5.523-4.477 10-10 10h30c5.523 0 10-4.477 10-10v-4c0-8.836-7.163-16-16-16z"
  }), _react.default.createElement("path", {
    fill: "#ffd681",
    d: "M256 141c-18.225 0-33-14.775-33-33V64a3 3 0 0 1 3-3h60a3 3 0 0 1 3 3v44c0 18.225-14.775 33-33 33z"
  }), _react.default.createElement("path", {
    fill: "#ffbd2a",
    d: "M259 61v47c0 12.822-7.318 23.928-18 29.391A32.85 32.85 0 0 0 256 141c18.225 0 33-14.775 33-33V64a3 3 0 0 0-3-3h-27z"
  }), _react.default.createElement("path", {
    fill: "#445",
    d: "M497 451H15c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15h482c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z"
  }), _react.default.createElement("path", {
    fill: "#30303a",
    d: "M497 421h-30c8.284 0 15 6.716 15 15s-6.716 15-15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
  })));
};

exports.RankSVG = RankSVG;

var LinkedInSVG = function LinkedInSVG(_ref6) {
  var _ref6$viewBox = _ref6.viewBox,
      viewBox = _ref6$viewBox === void 0 ? "0 0 512.002 512.002" : _ref6$viewBox,
      _ref6$height = _ref6.height,
      height = _ref6$height === void 0 ? '30' : _ref6$height,
      _ref6$width = _ref6.width,
      width = _ref6$width === void 0 ? '30' : _ref6$width;
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    viewBox: viewBox,
    height: height,
    width: width
  }), _react.default.createElement("circle", {
    cx: "256.001",
    cy: "256",
    r: "256",
    fill: "#4376b1"
  }), _react.default.createElement("path", {
    fill: "#369",
    d: "M511.016 233.634L394.729 117.198c-71.035 9.237-145.27 7.859-216.305 9.511-29.306 0-58.613 13.791-53.441 46.545 10.343 65.508 15.515 129.293 3.448 196.525-1.9 8.545-5.897 17.089-11.117 25.059L233.48 511.005c7.421.646 14.929.996 22.519.996 141.384 0 256-114.616 256-256 .002-7.54-.343-14.996-.983-22.367z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M376.023 109.468H135.979c-14.643 0-26.51 11.867-26.51 26.51V376.02c0 14.639 11.867 26.51 26.51 26.51h240.042c14.639 0 26.51-11.871 26.51-26.51V135.978c.002-14.643-11.869-26.51-26.508-26.51zM200.155 362.517a7.714 7.714 0 0 1-7.716 7.716h-32.837a7.715 7.715 0 0 1-7.716-7.716V224.856a7.715 7.715 0 0 1 7.716-7.716h32.839a7.715 7.715 0 0 1 7.716 7.716v137.661h-.002zM176.02 204.162c-17.23 0-31.196-13.969-31.196-31.201 0-17.229 13.965-31.196 31.196-31.196 17.232 0 31.198 13.969 31.198 31.196 0 17.234-13.967 31.201-31.198 31.201zm195.753 158.977a7.094 7.094 0 0 1-7.09 7.096h-35.242a7.095 7.095 0 0 1-7.092-7.096v-64.574c0-9.63 2.826-42.21-25.172-42.21-21.719 0-26.124 22.3-27.008 32.304v74.478a7.095 7.095 0 0 1-7.094 7.096h-34.082a7.097 7.097 0 0 1-7.096-7.096V224.234a7.097 7.097 0 0 1 7.096-7.096h34.082a7.095 7.095 0 0 1 7.094 7.096v12.009c8.054-12.085 20.023-21.416 45.502-21.416 56.425 0 56.105 52.717 56.105 81.686v66.627h-.003z"
  }), _react.default.createElement("path", {
    fill: "#d1d1d1",
    d: "M376.023 109.468H255.427v107.67h7.647a7.095 7.095 0 0 1 7.094 7.096v12.009c8.054-12.085 20.023-21.416 45.503-21.416 56.425 0 56.105 52.717 56.105 81.686v66.625a7.094 7.094 0 0 1-7.09 7.096h-35.242a7.095 7.095 0 0 1-7.092-7.096v-64.574c0-9.63 2.826-42.21-25.172-42.21-21.719 0-26.124 22.3-27.008 32.304v74.478a7.095 7.095 0 0 1-7.094 7.096h-7.647v32.301h120.596c14.639 0 26.51-11.871 26.51-26.51V135.978c-.004-14.643-11.875-26.51-26.514-26.51z"
  }));
};

exports.LinkedInSVG = LinkedInSVG;

var BuildingSVG = function BuildingSVG(_ref7) {
  var _ref7$viewBox = _ref7.viewBox,
      viewBox = _ref7$viewBox === void 0 ? "0 0 440 440" : _ref7$viewBox,
      _ref7$height = _ref7.height,
      height = _ref7$height === void 0 ? '30' : _ref7$height,
      _ref7$width = _ref7.width,
      width = _ref7$width === void 0 ? '30' : _ref7$width;
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    viewBox: viewBox,
    height: height,
    width: width
  }), _react.default.createElement("path", {
    fill: "#91dc5a",
    d: "M40 405h360v35H40z"
  }), _react.default.createElement("path", {
    fill: "#006c70",
    d: "M115 0h210v440H115z"
  }), _react.default.createElement("path", {
    fill: "#00a1a7",
    d: "M160 0h120v440H160z"
  }), _react.default.createElement("path", {
    fill: "#00d7df",
    d: "M160 370h120v70H160z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M145 60h30v40h-30zM205 60h30v40h-30zM265 60h30v40h-30zM145 130h30v40h-30zM205 130h30v40h-30zM265 130h30v40h-30zM145 200h30v40h-30zM205 200h30v40h-30zM265 200h30v40h-30zM145 270h30v40h-30zM205 270h30v40h-30zM265 270h30v40h-30z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    fill: "#fff",
    d: "M205 370h30v70h-30z"
  })));
};

exports.BuildingSVG = BuildingSVG;

var PersonSVG = function PersonSVG(_ref8) {
  var _ref8$viewBox = _ref8.viewBox,
      viewBox = _ref8$viewBox === void 0 ? "0 0 520 520" : _ref8$viewBox,
      _ref8$height = _ref8.height,
      height = _ref8$height === void 0 ? '20' : _ref8$height,
      _ref8$width = _ref8.width,
      width = _ref8$width === void 0 ? '20' : _ref8$width;
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    height: height,
    width: width,
    viewBox: viewBox
  }), _react.default.createElement("g", {
    fill: "#f6c358"
  }, _react.default.createElement("path", {
    d: "M246 348l61-41v-31l-13 11c-27 24-53 20-53 20-16 0-39-16-49-24l-8-6v30l62 41zM246 348l-20 27z"
  })), _react.default.createElement("path", {
    fill: "#64798a",
    d: "M181 82h38l10-2 26-9c8-3 16-3 23-1l40 15c27 9 30 35 30 35v71s3-24 16-43c3-5 4-10 4-16V70s-4-30-33-37c0 0 12-26-20-32H200c-42 0-76 34-76 76v46c0 10 3 19 9 27 5 6 10 15 11 29v-60c7-33 37-37 37-37z"
  }), _react.default.createElement("path", {
    fill: "#fcd462",
    d: "M241 307s26 4 53-20l13-11 1-1c12-8 35-30 40-84v-71s-3-26-30-35l-40-15c-7-2-15-2-23 1a628 628 0 0 1-36 11h-38s-30 4-37 37v74s1 58 40 84l8 6c10 8 33 24 49 24z"
  }), _react.default.createElement("g", {
    fill: "#d5d6db"
  }, _react.default.createElement("path", {
    d: "M267 376l-11 16 10 62 24-45zM226 454l10-62-11-16-24 33zM226 375l-1 1 21-28z"
  })), _react.default.createElement("g", {
    fill: "#e56353"
  }, _react.default.createElement("path", {
    d: "M266 454l-10-62 11-16-21-28-21 28 11 16-10 62 20 36 20-36zM246 490l2-2-2 2zM246 490l-2-2 2 2zM246 490zM246 348zM246 348z"
  })), _react.default.createElement("g", {
    fill: "#e1e6e9"
  }, _react.default.createElement("path", {
    d: "M246 348l21 28 23 33 50-90-33-12zM225 376l1-1 20-27-62-41-33 12 50 90z"
  })), _react.default.createElement("g", {
    fill: "#3a556a"
  }, _react.default.createElement("path", {
    d: "M491 464l-11-67c-3-18-15-33-33-39l-107-39 29 57h-36l12 24-97 88-2 2h223c14 0 25-12 22-26zM246 490z"
  })), _react.default.createElement("g", {
    fill: "#2f4859"
  }, _react.default.createElement("path", {
    d: "M266 454l-20 36 2-2 97-88-12-24h36l-29-57-50 90zM246 490z"
  })), _react.default.createElement("path", {
    fill: "#3a556a",
    d: "M246 490l-2-2-97-88 12-24h-36l28-57-107 39c-17 6-30 21-33 39L0 464c-2 14 9 26 23 26h223z"
  }), _react.default.createElement("path", {
    fill: "#2f4859",
    d: "M246 490l-20-36-25-45-50-90-28 57h36l-12 24 97 88 2 2z"
  }));
};

exports.PersonSVG = PersonSVG;

var FacebookSVG = function FacebookSVG(_ref9) {
  var _ref9$viewBox = _ref9.viewBox,
      viewBox = _ref9$viewBox === void 0 ? "0 0 409 409" : _ref9$viewBox,
      _ref9$height = _ref9.height,
      height = _ref9$height === void 0 ? "30" : _ref9$height,
      _ref9$width = _ref9.width,
      width = _ref9$width === void 0 ? "30" : _ref9$width;
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    viewBox: viewBox,
    height: height,
    width: width
  }), _react.default.createElement("path", {
    fill: "#475993",
    d: "M354 0H55C25 0 0 25 0 55v299c0 30 25 55 55 55h147l1-146h-38c-5 0-9-4-9-9v-47c0-5 4-9 8-9h38v-46c0-53 33-81 80-81h38c5 0 9 4 9 9v39c0 5-4 9-9 9h-23c-26 0-31 12-31 30v40h56c6 0 10 4 9 10l-5 47c-1 4-5 8-9 8h-51v146h88c30 0 55-25 55-55V55c0-30-25-55-55-55z"
  }));
};

exports.FacebookSVG = FacebookSVG;

var YahooSVG = function YahooSVG(_ref10) {
  var _ref10$viewBox = _ref10.viewBox,
      viewBox = _ref10$viewBox === void 0 ? "0 0 512 512" : _ref10$viewBox,
      _ref10$height = _ref10.height,
      height = _ref10$height === void 0 ? "30" : _ref10$height,
      _ref10$width = _ref10.width,
      width = _ref10$width === void 0 ? "30" : _ref10$width;
  return _react.default.createElement("svg", _extends({
    viewBox: viewBox,
    height: height,
    width: width
  }, {
    xmlns: "http://www.w3.org/2000/svg"
  }), _react.default.createElement("path", {
    d: "m256 0c-140.699219 0-256 115.300781-256 256s115.300781 256 256 256 256-115.300781 256-256-115.300781-256-256-256zm0 0",
    fill: "#ffd400"
  }), _react.default.createElement("path", {
    d: "m512 256c0 140.699219-115.300781 256-256 256v-512c140.699219 0 256 115.300781 256 256zm0 0",
    fill: "#fdbf00"
  }), _react.default.createElement("path", {
    d: "m166 211c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0",
    fill: "#3e5959"
  }), _react.default.createElement("path", {
    d: "m346 211c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0",
    fill: "#384949"
  }), _react.default.createElement("path", {
    d: "m445.601562 301c-20.402343 85.800781-97.5 150-189.601562 150s-169.199219-64.199219-189.601562-150l189.601562-30h.601562zm0 0",
    fill: "#ff5b5b"
  }), _react.default.createElement("path", {
    d: "m445.601562 301c-20.402343 85.800781-97.5 150-189.601562 150v-180h.601562zm0 0",
    fill: "#ff3939"
  }), _react.default.createElement("path", {
    d: "m451 241v15c0 15.597656-2.101562 30.597656-5.398438 45h-379.203124c-3.296876-14.402344-5.398438-29.402344-5.398438-45v-15zm0 0",
    fill: "#ececf1"
  }), _react.default.createElement("path", {
    d: "m451 241v15c0 15.597656-2.101562 30.597656-5.398438 45h-189.601562v-60zm0 0",
    fill: "#e2e2e7"
  }));
};

exports.YahooSVG = YahooSVG;

var SkypeSVG = function SkypeSVG(_ref11) {
  var _ref11$viewBox = _ref11.viewBox,
      viewBox = _ref11$viewBox === void 0 ? "0 0 512 512" : _ref11$viewBox,
      _ref11$height = _ref11.height,
      height = _ref11$height === void 0 ? "30" : _ref11$height,
      _ref11$width = _ref11.width,
      width = _ref11$width === void 0 ? "30" : _ref11$width;
  return _react.default.createElement("svg", _extends({
    viewBox: viewBox,
    height: height,
    width: width
  }, {
    xmlns: "http://www.w3.org/2000/svg"
  }), _react.default.createElement("path", {
    d: "m481.398438 271.398438c.300781-4.796876.601562-9.597657.601562-14.398438 0-124.199219-101.800781-227-226-227-4.800781 0-9.601562.300781-14.398438.601562-26.101562-19.800781-57.902343-30.601562-90.601562-30.601562-82.800781 0-151 69.199219-151 152 0 32.699219 10.800781 64.5 30.601562 90.597656-.300781 4.800782-.601562 9.601563-.601562 14.402344 0 124.199219 101.800781 225 226 225 4.800781 0 9.601562-.300781 14.398438-.601562 26.101562 19.800781 57.902343 30.601562 90.601562 30.601562 82.800781 0 151-67.199219 151-150 0-32.699219-10.800781-64.5-30.601562-90.601562zm0 0",
    fill: "#25d9f8"
  }), _react.default.createElement("path", {
    d: "m512 362c0 82.800781-68.199219 150-151 150-32.699219 0-64.5-10.800781-90.601562-30.601562-4.796876.300781-9.597657.601562-14.398438.601562v-452c124.199219 0 226 102.800781 226 227 0 4.800781-.300781 9.601562-.601562 14.398438 19.800781 26.101562 30.601562 57.902343 30.601562 90.601562zm0 0",
    fill: "#00c0f1"
  }), _react.default.createElement("path", {
    d: "m256 227c-24.300781 0-60-12-60-30 0-17.699219 36-29.699219 58.199219-29.699219h1.800781c26.699219.296875 48.300781 10.5 56.101562 19.796875 12.597657 15.601563 40.496094 13.203125 50.097657-6.597656 10.199219-20.699219-6.898438-38.101562-25.800781-51-21-13.800781-50.699219-20.699219-80.398438-20.699219-78.601562 0-120 44.398438-120 88.199219 0 45 45.898438 90 120 90 24.300781 0 60 12 60 30 0 17.699219-36 29.699219-58.199219 29.699219h-1.800781c-26.699219-.300781-48.300781-10.5-56.101562-19.800781-11.097657-13.796876-39.898438-14.699219-50.097657 6.601562-10.199219 20.699219 6.898438 38.101562 25.800781 51 21.898438 14.398438 50.398438 22.5 80.398438 22.5 74.097656 0 120-44.699219 120-90 0-45-45.902344-90-120-90zm0 0",
    fill: "#ececf1"
  }), _react.default.createElement("g", {
    fill: "#e2e2e7"
  }, _react.default.createElement("path", {
    d: "m376 317c0 45.300781-45.902344 90-120 90v-60.300781h1.800781c22.199219 0 58.199219-12 58.199219-29.699219 0-18-35.699219-30-60-30v-60c74.097656 0 120 45 120 90zm0 0"
  }), _react.default.createElement("path", {
    d: "m312.101562 187.097656c-7.800781-9.296875-29.402343-19.5-56.101562-19.796875v-58.5c29.699219 0 59.398438 6.898438 80.398438 20.699219 18.902343 12.898438 36 30.300781 25.800781 51-9.601563 19.800781-37.5 22.199219-50.097657 6.597656zm0 0"
  })));
};

exports.SkypeSVG = SkypeSVG;

var InstagramSVG = function InstagramSVG(_ref12) {
  var _ref12$viewBox = _ref12.viewBox,
      viewBox = _ref12$viewBox === void 0 ? "0 0 512 512" : _ref12$viewBox,
      _ref12$height = _ref12.height,
      height = _ref12$height === void 0 ? "30" : _ref12$height,
      _ref12$width = _ref12.width,
      width = _ref12$width === void 0 ? "30" : _ref12$width;
  return _react.default.createElement("svg", _extends({
    viewBox: viewBox,
    height: height,
    width: width
  }, {
    xmlns: "http://www.w3.org/2000/svg"
  }), _react.default.createElement("path", {
    d: "m437 0h-362c-41.398438 0-75 33.601562-75 75v362c0 41.398438 33.601562 75 75 75h362c41.398438 0 75-33.601562 75-75v-362c0-41.398438-33.601562-75-75-75zm0 0",
    fill: "#ff5b5b"
  }), _react.default.createElement("path", {
    d: "m512 75v362c0 41.398438-33.601562 75-75 75h-181v-512h181c41.398438 0 75 33.601562 75 75zm0 0",
    fill: "#ff3997"
  }), _react.default.createElement("path", {
    d: "m407 150c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0-60c-8.277344 0-15 6.722656-15 15s6.722656 15 15 15 15-6.722656 15-15-6.722656-15-15-15zm0 0",
    fill: "#e2e2e7"
  }), _react.default.createElement("path", {
    d: "m256 120c-74.398438 0-135 60.597656-135 135 0 74.398438 60.601562 135 135 135s136-60.601562 136-135c0-74.402344-61.601562-135-136-135zm0 240c-57.898438 0-105-47.101562-105-105s47.101562-105 105-105 106 47.101562 106 105-48.101562 105-106 105zm0 0",
    fill: "#ececf1"
  }), _react.default.createElement("path", {
    d: "m392 255c0 74.398438-61.601562 135-136 135v-30c57.898438 0 106-47.101562 106-105s-48.101562-105-106-105v-30c74.398438 0 136 60.597656 136 135zm0 0",
    fill: "#e2e2e7"
  }));
};

exports.InstagramSVG = InstagramSVG;

var TwitchSVG = function TwitchSVG(_ref13) {
  var _ref13$viewBox = _ref13.viewBox,
      viewBox = _ref13$viewBox === void 0 ? "0 0 512 512" : _ref13$viewBox,
      _ref13$height = _ref13.height,
      height = _ref13$height === void 0 ? "30" : _ref13$height,
      _ref13$width = _ref13.width,
      width = _ref13$width === void 0 ? "30" : _ref13$width;
  return _react.default.createElement("svg", _extends({
    viewBox: viewBox,
    height: height,
    width: width
  }, {
    xmlns: "http://www.w3.org/2000/svg"
  }), _react.default.createElement("path", {
    d: "m68.699219 0-68.699219 68.699219v383.300781h120v60h82.300781l60-60h151l98.699219-98.699219v-353.300781zm0 0",
    fill: "#b760ea"
  }), _react.default.createElement("path", {
    d: "m512 0v353.300781l-98.699219 98.699219h-151l-6.300781 6.300781v-458.300781zm0 0",
    fill: "#a24bdb"
  }), _react.default.createElement("path", {
    d: "m90 60v302h91v81.300781l81.300781-81.300781h121l68.699219-68.699219v-233.300781zm0 0",
    fill: "#ececf1"
  }), _react.default.createElement("path", {
    d: "m452 60v233.300781l-68.699219 68.699219h-121l-6.300781 6.300781v-308.300781zm0 0",
    fill: "#e2e2e7"
  }), _react.default.createElement("path", {
    d: "m241 165h30v92h-30zm0 0",
    fill: "#b760ea"
  }), _react.default.createElement("g", {
    fill: "#a24bdb"
  }, _react.default.createElement("path", {
    d: "m332 165h30v92h-30zm0 0"
  }), _react.default.createElement("path", {
    d: "m256 165h15v92h-15zm0 0"
  })));
};

exports.TwitchSVG = TwitchSVG;

var GooglePlusSVG = function GooglePlusSVG(_ref14) {
  var _ref14$viewBox = _ref14.viewBox,
      viewBox = _ref14$viewBox === void 0 ? "0 -91 512 512" : _ref14$viewBox,
      _ref14$height = _ref14.height,
      height = _ref14$height === void 0 ? "30" : _ref14$height,
      _ref14$width = _ref14.width,
      width = _ref14$width === void 0 ? "30" : _ref14$width;
  return _react.default.createElement("svg", _extends({
    viewBox: viewBox,
    height: height,
    width: width
  }, {
    xmlns: "http://www.w3.org/2000/svg"
  }), _react.default.createElement("path", {
    d: "m332 150v15c0 15.597656-2.101562 30.597656-6.300781 45-19.5 69.300781-84.097657 120-159.699219 120-91.199219 0-166-73.800781-166-165s74.800781-165 166-165c52.199219 0 102.101562 26.398438 127.597656 59.398438l-42.597656 42.902343c-18-24.601562-50.199219-42.300781-85-42.300781-57.898438 0-106 47.101562-106 105s48.101562 105 106 105c41.699219 0 79-24.601562 95.5-60h-80.5v-60zm0 0",
    fill: "#ff3939"
  }), _react.default.createElement("path", {
    d: "m512 135v60h-45v45h-60v-45h-45v-60h45v-45h60v45zm0 0",
    fill: "#ff3939"
  }), _react.default.createElement("g", {
    fill: "#c90232"
  }, _react.default.createElement("path", {
    d: "m166 60v-60c52.199219 0 102.101562 26.398438 127.597656 59.398438l-42.597656 42.902343c-18-24.601562-50.199219-42.300781-85-42.300781zm0 0"
  }), _react.default.createElement("path", {
    d: "m332 150v15c0 15.597656-2.101562 30.597656-6.300781 45-19.5 69.300781-84.097657 120-159.699219 120v-60c41.699219 0 79-24.601562 95.5-60h-80.5v-60zm0 0"
  }), _react.default.createElement("path", {
    d: "m512 135v60h-45v45h-30v-150h30v45zm0 0"
  })));
};

exports.GooglePlusSVG = GooglePlusSVG;

var YoutubeSVG = function YoutubeSVG(_ref15) {
  var _ref15$viewBox = _ref15.viewBox,
      viewBox = _ref15$viewBox === void 0 ? "0 -61 512 512" : _ref15$viewBox,
      _ref15$height = _ref15.height,
      height = _ref15$height === void 0 ? "30" : _ref15$height,
      _ref15$width = _ref15.width,
      width = _ref15$width === void 0 ? "30" : _ref15$width;
  return _react.default.createElement("svg", _extends({
    viewBox: viewBox,
    height: height,
    width: width
  }, {
    xmlns: "http://www.w3.org/2000/svg"
  }), _react.default.createElement("path", {
    d: "m437 0h-362c-41.398438 0-75 33.601562-75 75v240c0 41.398438 33.601562 75 75 75h362c41.398438 0 75-33.601562 75-75v-240c0-41.398438-33.601562-75-75-75zm0 0",
    fill: "#ff3939"
  }), _react.default.createElement("path", {
    d: "m512 75v240c0 41.398438-33.601562 75-75 75h-181v-390h181c41.398438 0 75 33.601562 75 75zm0 0",
    fill: "#c90232"
  }), _react.default.createElement("path", {
    d: "m256 136.199219-75-41.699219v204l75-43.199219 105.601562-60.601562zm0 0",
    fill: "#ececf1"
  }), _react.default.createElement("path", {
    d: "m361.601562 194.699219-105.601562 60.601562v-119.101562zm0 0",
    fill: "#e2e2e7"
  }));
};

exports.YoutubeSVG = YoutubeSVG;

var TwitterSVG = function TwitterSVG(_ref16) {
  var _ref16$viewBox = _ref16.viewBox,
      viewBox = _ref16$viewBox === void 0 ? "0 -47 512 512" : _ref16$viewBox,
      _ref16$height = _ref16.height,
      height = _ref16$height === void 0 ? "30" : _ref16$height,
      _ref16$width = _ref16.width,
      width = _ref16$width === void 0 ? "30" : _ref16$width;
  return _react.default.createElement("svg", _extends({
    viewBox: viewBox,
    height: height,
    width: width
  }, {
    xmlns: "http://www.w3.org/2000/svg"
  }), _react.default.createElement("path", {
    d: "m191.011719 419.042969c-22.140625 0-44.929688-1.792969-67.855469-5.386719-40.378906-6.332031-81.253906-27.457031-92.820312-33.78125l-30.335938-16.582031 32.84375-10.800781c35.902344-11.808594 57.742188-19.132813 84.777344-30.601563-27.070313-13.109375-47.933594-36.6875-57.976563-67.171875l-7.640625-23.199219 6.265625.960938c-5.941406-5.988281-10.632812-12.066407-14.269531-17.597657-12.933594-19.640624-19.78125-43.648437-18.324219-64.214843l1.4375-20.246094 12.121094 4.695313c-5.113281-9.65625-8.808594-19.96875-10.980469-30.78125-5.292968-26.355469-.863281-54.359376 12.476563-78.851563l10.558593-19.382813 14.121094 16.964844c44.660156 53.648438 101.226563 85.472656 168.363282 94.789063-2.742188-18.902344-.6875-37.148438 6.113281-53.496094 7.917969-19.039063 22.003906-35.1875 40.722656-46.691406 20.789063-12.777344 46-18.96875 70.988281-17.433594 26.511719 1.625 50.582032 11.558594 69.699219 28.742187 9.335937-2.421874 16.214844-5.011718 25.511719-8.511718 5.59375-2.109375 11.9375-4.496094 19.875-7.230469l29.25-10.078125-19.074219 54.472656c1.257813-.105468 2.554687-.191406 3.910156-.253906l31.234375-1.414062-18.460937 25.234374c-1.058594 1.445313-1.328125 1.851563-1.703125 2.417969-1.488282 2.242188-3.339844 5.035157-28.679688 38.867188-6.34375 8.472656-9.511718 19.511719-8.921875 31.082031 2.246094 43.96875-3.148437 83.746094-16.042969 118.230469-12.195312 32.628906-31.09375 60.621093-56.164062 83.199219-31.023438 27.941406-70.582031 47.066406-117.582031 56.847656-23.054688 4.800781-47.8125 7.203125-73.4375 7.203125zm0 0",
    fill: "#25d9f8"
  }), _react.default.createElement("path", {
    d: "m476.855469 57.628906 19.074219-54.476562-29.25 10.078125c-7.9375 2.734375-14.277344 5.125-19.875 7.230469-9.296876 3.503906-16.171876 6.09375-25.507813 8.515624-19.121094-17.183593-43.1875-27.117187-69.703125-28.746093-24.988281-1.535157-50.195312 4.65625-70.984375 17.433593-9.5625 5.878907-17.902344 12.96875-24.839844 21.03125v374.824219c2.917969-.523437 5.8125-1.082031 8.679688-1.679687 46.996093-9.78125 86.558593-28.910156 117.582031-56.847656 25.070312-22.582032 43.96875-50.574219 56.164062-83.199219 12.894532-34.484375 18.289063-74.265625 16.042969-118.234375-.59375-11.570313 2.574219-22.605469 8.921875-31.078125 25.335938-33.832031 27.191406-36.625 28.679688-38.867188.371094-.566406.644531-.976562 1.703125-2.421875l18.457031-25.230468-31.230469 1.414062c-1.355469.058594-2.65625.148438-3.914062.253906zm0 0",
    fill: "#00c0f1"
  }));
};

exports.TwitterSVG = TwitterSVG;