"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _svgs = require("./svg/svgs");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MyToolTip =
/*#__PURE__*/
function (_Component) {
  _inherits(MyToolTip, _Component);

  function MyToolTip() {
    _classCallCheck(this, MyToolTip);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyToolTip).apply(this, arguments));
  }

  _createClass(MyToolTip, [{
    key: "render",
    value: function render() {
      var _this$props = _objectSpread({}, this.props),
          tooltip = _this$props.tooltip,
          num = _this$props.num;

      var getToolTip = function getToolTip(tooltip, num) {
        if (typeof tooltip === 'string' && num === 0) return tooltip;
        if (typeof tooltip === 'string' && num > 0) return null;
        if (_typeof(tooltip) === 'object' && num < tooltip.length) return tooltip[num];
        return null;
      };

      return _react.default.createElement(_core.Tooltip, {
        title: getToolTip(tooltip, num)
      }, this.props.children);
    }
  }]);

  return MyToolTip;
}(_react.Component);

var HackerRank =
/*#__PURE__*/
function (_Component2) {
  _inherits(HackerRank, _Component2);

  function HackerRank() {
    _classCallCheck(this, HackerRank);

    return _possibleConstructorReturn(this, _getPrototypeOf(HackerRank).apply(this, arguments));
  }

  _createClass(HackerRank, [{
    key: "render",
    value: function render() {
      var _this$props2 = _objectSpread({}, this.props),
          tooltip = _this$props2.tooltip,
          contestRating = _this$props2.contestRating,
          competitions = _this$props2.competitions,
          username = _this$props2.username,
          rank = _this$props2.rank,
          category = _this$props2.category,
          bronze = _this$props2.bronze,
          silver = _this$props2.silver,
          gold = _this$props2.gold,
          _this$props2$barHeigh = _this$props2.barHeight,
          barHeight = _this$props2$barHeigh === void 0 ? "50px" : _this$props2$barHeigh;

      tooltip = tooltip || 'Visit Profile';
      var flatButtonStyle = {
        backgroundColor: 'rgba(230,230,230,0.8)',
        borderRadius: '0',
        height: '100%'
      };
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.Grid, {
        container: true
      }, _react.default.createElement(_core.Grid, {
        className: "Paper",
        direction: "row"
      }, _react.default.createElement(_core.Tooltip, {
        title: "Hackerrank"
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, _react.default.createElement(_svgs.HackerrankSVG, {
        fill: "darkgreen"
      }))), _react.default.createElement(_core.Tooltip, {
        title: tooltip
      }, _react.default.createElement("a", {
        target: "_blank",
        href: "https://www.hackerrank.com/profile/".concat(username),
        style: {
          padding: '10px'
        }
      }, username)), category && _react.default.createElement(_core.Tooltip, {
        title: "Category : ".concat(category)
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: _objectSpread({}, flatButtonStyle, {
          textTransform: 'none'
        })
      }, _react.default.createElement("b", null, category), " ")), rank && _react.default.createElement(_core.Tooltip, {
        title: "Rank : ".concat(rank)
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, " ", _react.default.createElement(_svgs.RankSVG, null), " ", _react.default.createElement("b", null, rank))), contestRating && _react.default.createElement(_core.Tooltip, {
        title: "Contest Rating : ".concat(contestRating)
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, " ", _react.default.createElement("i", {
        className: "fa fa-star"
      }), _react.default.createElement("b", null, contestRating))), competitions && _react.default.createElement(_core.Tooltip, {
        title: "Competitions : ".concat(competitions)
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, " ", _react.default.createElement("i", {
        className: "fa fa-flag"
      }), _react.default.createElement("b", null, competitions))), gold && _react.default.createElement(_core.Tooltip, {
        title: "Gold badges"
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, " ", _react.default.createElement("i", {
        className: "fa fa-trophy",
        style: {
          color: 'gold'
        }
      }), " ", _react.default.createElement("b", null, gold))), silver && _react.default.createElement(_core.Tooltip, {
        title: "Silver badges"
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, " ", _react.default.createElement("i", {
        className: "fa fa-trophy",
        style: {
          color: 'silver'
        }
      }), " ", _react.default.createElement("b", null, silver))), bronze && _react.default.createElement(_core.Tooltip, {
        title: "Bronze badges"
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, " ", _react.default.createElement("i", {
        className: "fa fa-trophy",
        style: {
          color: '#cd7f32'
        }
      }), " ", _react.default.createElement("b", null, bronze))))));
    }
  }]);

  return HackerRank;
}(_react.Component);

HackerRank.propTypes = {
  username: _propTypes.default.string.isRequired,
  tooltip: _propTypes.default.string,
  category: _propTypes.default.string,
  rank: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  gold: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  silver: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  bronze: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  contestRating: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  percentile: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  competitions: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
var _default = HackerRank;
exports.default = _default;