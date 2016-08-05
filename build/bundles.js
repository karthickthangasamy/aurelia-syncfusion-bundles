var bundle = [
  "[aurelia-syncfusion-bridge]",
  "[aurelia-syncfusion-bridge/**/*.js]",
  "aurelia-syncfusion-bridge/**/*.html!text",
  "jquery",
  "jquery-easing",
  "text",
  "json",
  "aurelia-framework",
  "aurelia-bootstrapper",
  "aurelia-router",
  "aurelia-templating-binding",
  "aurelia-templating-resources",
  "aurelia-templating-router",
  "aurelia-loader-default",
  "aurelia-history-browser",
  "aurelia-logging-console",
  "aurelia-animator-css",
  "aurelia-binding",
  "aurelia-bootstrapper",
  "aurelia-dependency-injection",
  "aurelia-event-aggregator",
  "aurelia-fetch-client",
  "aurelia-framework",
  "aurelia-history",
  "aurelia-history-browser",
  "aurelia-http-client",
  "aurelia-loader",
  "aurelia-loader-default",
  "aurelia-logging",
  "aurelia-logging-console",
  "aurelia-metadata",
  "aurelia-path",
  "aurelia-route-recognizer",
  "aurelia-router",
  "aurelia-task-queue",
  "aurelia-templating",
  "aurelia-templating-binding",
  "aurelia-templating-resources",
  "aurelia-templating-router"
];

module.exports = {
  "bundles": {
    "bundles/bundle": {
      "includes": bundle      
    }
  }
}

var ejBundle = [

];
module.exports = {
  "bundles-ej": {
    "bundles/ejBundle":{
      include: ejBundle,
      "excludes": [          
          "[syncfusion-javascript/Scripts/ej/jquery.unobtrusive-ajax.min.js]",
          "[syncfusion-javascript/Scripts/ej/jquery.validate.unobtrusive.min.js]",
          "[syncfusion-javascript/Scripts/ej/jsrender.min.js]",    
          "[syncfusion-javascript/Scripts/ej/ej.widgets.all*.js]",
          "[syncfusion-javascript/Scripts/ej/common/ej.unobtrusive.min.js]",
          "[syncfusion-javascript/Scripts/ej/common/ej.webform.min.js]",
          "[syncfusion-javascript/Scripts/ej/common/ej.widget.angular.min.js]",
          "[syncfusion-javascript/Scripts/ej/common/ej.widget.ko.min.js]",
          "[syncfusion-javascript/Scripts/ej/web/ej.web.all.min.js]",
          "[syncfusion-javascript/Scripts/ej/mobile/*.js]"
      ],
      "options": {
        "inject": true,
        "minify": true
      }
    }
  }
}
