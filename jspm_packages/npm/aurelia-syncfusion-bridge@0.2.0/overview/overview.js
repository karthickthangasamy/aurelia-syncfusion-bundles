/* */ 
define(['exports', '../common/common', 'datavisualization/ej.diagram.min'], function (exports, _common) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ejOverview = undefined;

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

  var ejOverview = exports.ejOverview = (_dec = (0, _common.customElement)(_common.constants.elementPrefix + 'overview'), _dec2 = (0, _common.inlineView)('' + _common.constants.aureliaTemplateString), _dec3 = (0, _common.generateBindables)('ejOverview', ['sourceID', 'height', 'width'], [], { 'sourceID': 'sourceId' }), _dec4 = (0, _common.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = function (_WidgetBase) {
    _inherits(ejOverview, _WidgetBase);

    function ejOverview(element) {
      _classCallCheck(this, ejOverview);

      var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

      _this.element = element;
      return _this;
    }

    return ejOverview;
  }(_common.WidgetBase)) || _class) || _class) || _class) || _class);
});