"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./styles/tooltip.css");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tooltip =
/*#__PURE__*/
function () {
  function Tooltip(element) {
    _classCallCheck(this, Tooltip);

    this.element = element;
    this.message = element.getAttribute("data-message");
  }

  _createClass(Tooltip, [{
    key: "innit",
    value: function innit() {
      var tip = document.createElement("div");
      tip.classList.add("tip");
      tip.textContent = this.message;
      this.element.appendChild(tip);
      this.element.addEventListener("mouseenter", function () {
        tip.classList.add("active");
      });
      this.element.addEventListener("mouseleave", function () {
        tip.classList.remove("active");
      });
    }
  }]);

  return Tooltip;
}();

exports["default"] = Tooltip;