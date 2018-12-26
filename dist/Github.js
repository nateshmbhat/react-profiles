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

var GithubProfileBar =
/*#__PURE__*/
function (_Component) {
  _inherits(GithubProfileBar, _Component);

  function GithubProfileBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GithubProfileBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GithubProfileBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      totalRepos: 0,
      totalStars: 0
    });

    return _this;
  }

  _createClass(GithubProfileBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = _objectSpread({}, this.props),
          username = _this$props.username;

      _store.default.removeExpiredKeys();

      var profile = _store.default.get('profile');

      if (profile) {
        this.setState({
          totalRepos: profile.totalRepos,
          totalStars: profile.totalStars
        });
      } else {
        _axios.default.get("https://api.github.com/users/".concat(username, "/repos?type=owner&sort=updated")).then(function (resp) {
          console.log("Github api response =  ", resp);
          var stars = 0;
          resp.data.forEach(function (repo) {
            stars += repo.stargazers_count;
          });

          _store.default.set('profile', {
            totalStars: stars,
            totalRepos: resp.data.length
          }, new Date().getTime() + 3600 * 1000);

          _this2.setState({
            totalRepos: resp.data.length,
            totalStars: stars
          });
        }).catch(function (err) {
          console.log(err);
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
          totalRepos = _this$state.totalRepos,
          totalStars = _this$state.totalStars;

      var _this$props2 = _objectSpread({}, this.props),
          tooltip = _this$props2.tooltip,
          username = _this$props2.username,
          newPage = _this$props2.newPage;

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
        title: "Github"
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, _react.default.createElement(_svgs.GithubSVG, null))), _react.default.createElement(_core.Tooltip, {
        title: tooltip
      }, _react.default.createElement("a", {
        target: newPage ? '_blank' : '',
        href: "https://github.com/".concat(username),
        style: {
          padding: '10px'
        }
      }, username)), _react.default.createElement(_core.Tooltip, {
        title: "".concat(totalRepos, " Repositories")
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, "  ", _react.default.createElement("i", {
        className: "fa fa-archive"
      }), _react.default.createElement("b", null, totalRepos))), _react.default.createElement(_core.Tooltip, {
        title: "".concat(totalStars, " Stars")
      }, _react.default.createElement(_core.Button, {
        variant: "text",
        style: flatButtonStyle
      }, " ", _react.default.createElement("i", {
        className: "fa fa-star"
      }), " ", _react.default.createElement("b", null, totalStars))))));
    }
  }]);

  return GithubProfileBar;
}(_react.Component);

GithubProfileBar.propTypes = {
  username: _propTypes.default.string.isRequired,
  tooltip: _propTypes.default.string
};
var _default = GithubProfileBar;
exports.default = _default;