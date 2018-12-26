"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _axios = _interopRequireDefault(require("axios"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _svgs = require("./svg/svgs");

var _store = _interopRequireDefault(require("store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var expirePlugin = require('store/plugins/expire');

_store.default.addPlugin(expirePlugin);

var StackOverflowBar =
/*#__PURE__*/
function (_Component) {
  _inherits(StackOverflowBar, _Component);

  function StackOverflowBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StackOverflowBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StackOverflowBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      reputation: 0,
      questions: _store.default.get('stackoverflow-questions', 0),
      answers: _store.default.get('stackoverflow-answers', 0)
    });

    return _this;
  }

  _createClass(StackOverflowBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = _objectSpread({}, this.props),
          userid = _this$props.userid;

      _store.default.removeExpiredKeys();

      var storeKey = 'stackoverflow-profile-bar';
      var expireTime = new Date().getTime() + 3600 * 1000; //one hour from current timestamp

      var profile = _store.default.get(storeKey);

      if (profile) {
        this.setState({
          reputation: profile.reputation,
          bronze: profile.bronze,
          gold: profile.gold,
          silver: profile.silver,
          displayname: profile.displayname,
          link: profile.link
        });
      } else {
        _axios.default.get("https://api.stackexchange.com/2.2/users/".concat(userid, "?order=desc&sort=reputation&site=stackoverflow")).then(function (resp) {
          console.log("stackoverflow api response =  ", resp);

          if (!resp.data.items) {
            console.log("WRONG userid ");
          }

          var profile = resp.data.items[0];
          var newstate = {
            reputation: profile.reputation,
            bronze: profile.badge_counts.bronze,
            gold: profile.badge_counts.gold,
            silver: profile.badge_counts.silver,
            displayname: profile.display_name,
            link: profile.link
          };

          _store.default.set(storeKey, newstate, expireTime);

          _this2.setState(newstate);
        }).catch(function (err) {
          console.log(err);
        });

        _axios.default.get("https://api.stackexchange.com/2.2/users/".concat(userid, "/questions?order=desc&sort=activity&site=stackoverflow&filter=total")).then(function (resp) {
          _this2.setState({
            questions: resp.data.total
          });

          _store.default.set('stackoverflow-questions', resp.data.total, expireTime);

          _this2.setState({
            questions: resp.data.total
          });
        }).catch(function (err) {
          return console.log(err);
        });

        _axios.default.get("https://api.stackexchange.com/2.2/users/".concat(userid, "/answers?order=desc&sort=activity&site=stackoverflow&filter=total")).then(function (resp) {
          _this2.setState({
            answers: resp.data.total
          });

          _store.default.set('stackoverflow-answers', resp.data.total, expireTime);

          _this2.setState({
            answers: resp.data.total
          });
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var flatButtonStyle = {
        backgroundColor: 'rgba(230,230,230,0.8)',
        borderRadius: '0',
        height: '100%'
      };

      var _this$state = _objectSpread({}, this.state),
          displayname = _this$state.displayname,
          questions = _this$state.questions,
          answers = _this$state.answers,
          link = _this$state.link,
          reputation = _this$state.reputation,
          bronze = _this$state.bronze,
          gold = _this$state.gold,
          silver = _this$state.silver;

      var _this$props2 = _objectSpread({}, this.props),
          tooltip = _this$props2.tooltip;

      tooltip = tooltip || 'Visit Profile';
      console.log("PROPS , state = ", this.state, this.props);
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.Grid, {
        container: true
      }, _react.default.createElement(_core.Grid, {
        className: "Paper"
      }, _react.default.createElement(_core.Tooltip, {
        title: "StackOverflow"
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, _react.default.createElement(_svgs.StackOverflowSVG, null))), _react.default.createElement(_core.Tooltip, {
        title: tooltip
      }, _react.default.createElement("a", {
        target: "_blank",
        href: link,
        style: {
          padding: '10px'
        }
      }, displayname)), _react.default.createElement(_core.Tooltip, {
        title: "Gold badges"
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, " ", _react.default.createElement("i", {
        className: "fa fa-star"
      }), " ", _react.default.createElement("b", null, reputation))), _react.default.createElement(_core.Tooltip, {
        title: "Gold badges"
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, " ", _react.default.createElement("i", {
        className: "fa fa-trophy",
        style: {
          color: 'gold'
        }
      }), " ", _react.default.createElement("b", null, gold))), _react.default.createElement(_core.Tooltip, {
        title: "Silver badges"
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, " ", _react.default.createElement("i", {
        className: "fa fa-trophy",
        style: {
          color: 'silver'
        }
      }), " ", _react.default.createElement("b", null, silver))), _react.default.createElement(_core.Tooltip, {
        title: "Bronze badges"
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, " ", _react.default.createElement("i", {
        className: "fa fa-trophy",
        style: {
          color: '#cd7f32'
        }
      }), " ", _react.default.createElement("b", null, bronze))), _react.default.createElement(_core.Tooltip, {
        title: questions + " questions"
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, " ", _react.default.createElement("i", {
        className: "fa fa-question-circle"
      }), " ", _react.default.createElement("b", null, questions))), _react.default.createElement(_core.Tooltip, {
        title: answers + ' answers'
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, " ", _react.default.createElement("i", {
        className: "fa fa-stack-overflow",
        style: {
          color: 'darkgreen'
        }
      }), " ", _react.default.createElement("b", null, answers))))));
    }
  }]);

  return StackOverflowBar;
}(_react.Component);

StackOverflowBar.propTypes = {
  userid: _propTypes.default.string.isRequired,
  tooltip: _propTypes.default.string
};
var _default = StackOverflowBar;
exports.default = _default;