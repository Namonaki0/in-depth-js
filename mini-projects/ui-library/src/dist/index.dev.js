"use strict";

require("./style.css");

var _tootip = _interopRequireDefault(require("./ui-components/tootip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// creating a tooltip
var tooltip = new _tootip["default"](document.querySelector(".tooltip"));
tooltip.innit();