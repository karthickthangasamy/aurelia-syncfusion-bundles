/* */ 
define(['exports', '../common/common', 'ej.radialslider.min'], function (exports, _common) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ejRadialSlider = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var _dec, _dec2, _dec3, _dec4, _class;

  var ejRadialSlider = exports.ejRadialSlider = (_dec = (0, _common.customElement)(_common.constants.elementPrefix + 'radial-slider'), _dec2 = (0, _common.inlineView)('' + _common.constants.aureliaTemplateString), _dec3 = (0, _common.generateBindables)('ejRadialSlider', ['autoOpen', 'cssClass', 'enableAnimation', 'enableRoundOff', 'endAngle', 'inline', 'innerCircleImageClass', 'innerCircleImageUrl', 'radius', 'strokeWidth']), _dec4 = (0, _common.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = function (_WidgetBase) {
    _inherits(ejRadialSlider, _WidgetBase);

    function ejRadialSlider(element) {
      _classCallCheck(this, ejRadialSlider);

      var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

      _this.element = element;
      return _this;
    }

    return ejRadialSlider;
  }(_common.WidgetBase)) || _class) || _class) || _class) || _class);
});