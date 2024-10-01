(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PieChart"] = factory(require("vue"));
	else
		root["PieChart"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__274__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 907:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 274:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__274__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(274);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PieChart.vue?vue&type=template&id=8daa28f0&scoped=true

const _hoisted_1 = {
  viewBox: "0 0 32 32",
  class: "pie-chart-svg"
};
const _hoisted_2 = ["fill"];
const _hoisted_3 = ["fill", "font-size"];
const _hoisted_4 = ["d", "fill", "stroke-width", "onClick"];
const _hoisted_5 = ["x", "y", "fill", "font-size", "onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_segment_list = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("segment-list");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(['pie-chart-container', $props.containerClass])
  }, [$props.showLegendText ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    key: 0,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(['legend', $props.legendPosition])
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("p", null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.legendText), 1)], 2)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(['pie-chart-container']),
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)(`width: ${$props.size}px`)
  }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("svg", _hoisted_1, [$options.hasFullSegment ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
    key: 0
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("circle", {
    cx: "16",
    cy: "16",
    r: "16",
    fill: $data.fullSegment.color,
    class: "pie-chart-circle cursor-pointer",
    onClick: _cache[0] || (_cache[0] = $event => $options.handleSegmentClick($event, $data.fullSegment))
  }, null, 8, _hoisted_2), $props.showText ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("text", {
    key: 0,
    x: "16",
    y: "16",
    "text-anchor": "middle",
    "alignment-baseline": "middle",
    fill: $props.textColor,
    "font-size": $props.textSize,
    class: "pie-chart-text"
  }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(Math.round($data.fullSegment.percentage)) + "% ", 9, _hoisted_3)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 64)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
    key: 1
  }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($options.pieData, (segment, index) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("path", {
      key: index,
      d: segment.pathData,
      fill: segment.color,
      stroke: "white",
      "stroke-width": $props.strokeWidth,
      onClick: $event => $options.handleSegmentClick($event, segment),
      "stroke-linecap": "round",
      class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(segment.link ? 'cursor-pointer' : '')
    }, null, 10, _hoisted_4);
  }), 128)), $props.showText ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
    key: 0
  }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($options.pieData, (segment_text, text_index) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("text", {
      key: 'text-' + text_index,
      x: segment_text.textX,
      y: segment_text.textY,
      "text-anchor": "middle",
      "alignment-baseline": "middle",
      fill: $props.textColor,
      "font-size": $props.textSize,
      class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)([$options.cursorPointerClass(segment_text), $props.textClass]),
      onClick: $event => $options.handleSegmentClick($event, segment_text)
    }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(Math.round(segment_text.percentage)) + "% ", 11, _hoisted_5);
  }), 128)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 64))]))], 4), $props.showSegmentList ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_segment_list, {
    key: 1,
    segments: $props.data
  }, null, 8, ["segments"])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 2);
}
;// ./src/components/PieChart.vue?vue&type=template&id=8daa28f0&scoped=true

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SegmentList.vue?vue&type=template&id=3458a657&scoped=true

const SegmentListvue_type_template_id_3458a657_scoped_true_hoisted_1 = {
  class: "segment-list"
};
function SegmentListvue_type_template_id_3458a657_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("ul", SegmentListvue_type_template_id_3458a657_scoped_true_hoisted_1, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($props.segments, (segment, index) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("li", {
      key: index,
      class: "segment-item"
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
        backgroundColor: segment.color
      }),
      class: "color-box"
    }, null, 4), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(segment.label) + " - " + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(segment.percentage) + "%", 1)]);
  }), 128))]);
}
;// ./src/components/SegmentList.vue?vue&type=template&id=3458a657&scoped=true

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SegmentList.vue?vue&type=script&lang=js
/* harmony default export */ var SegmentListvue_type_script_lang_js = ({
  name: 'SegmentList',
  props: {
    segments: {
      type: Array,
      required: true
    }
  }
});
;// ./src/components/SegmentList.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SegmentList.vue?vue&type=style&index=0&id=3458a657&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/SegmentList.vue?vue&type=style&index=0&id=3458a657&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(907);
;// ./src/components/SegmentList.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(SegmentListvue_type_script_lang_js, [['render',SegmentListvue_type_template_id_3458a657_scoped_true_render],['__scopeId',"data-v-3458a657"]])

/* harmony default export */ var SegmentList = (__exports__);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PieChart.vue?vue&type=script&lang=js

/* harmony default export */ var PieChartvue_type_script_lang_js = ({
  name: "PieChart",
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    showText: {
      type: Boolean,
      default: true
    },
    textSize: {
      type: Number,
      default: 4
    },
    textColor: {
      type: String,
      default: "#1F1D1D"
    },
    textClass: {
      type: String,
      default: null
    },
    onSegmentClick: {
      type: Function,
      default: null
    },
    showLegendText: {
      type: Boolean,
      default: false
    },
    legendText: {
      type: String,
      default: 'Pie Chart'
    },
    legendPosition: {
      type: String,
      default: 'bottom'
    },
    showSegmentList: {
      type: Boolean,
      default: false
    },
    containerClass: {
      type: String,
      default: null
    },
    strokeWidth: {
      type: Number,
      default: 0.2
    },
    size: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      fullSegment: null
    };
  },
  computed: {
    hasFullSegment() {
      const segment = this.data.find(segment => segment.percentage === 100);
      this.fullSegment = segment;
      return segment;
    },
    pieData() {
      return this.generatePieData(this.data);
    }
  },
  methods: {
    cursorPointerClass(segment) {
      return segment.link ? 'cursor-pointer' : '';
    },
    handleSegmentClick(e, segment) {
      if (this.onSegmentClick) {
        this.onSegmentClick(segment);
      } else if (segment.link) {
        window.location.href = segment.link;
      }
    },
    calculatePathData(startAngle, percentage) {
      const radius = 16;
      const endAngle = startAngle + percentage * 3.6;
      const startRadians = startAngle * Math.PI / 180;
      const endRadians = endAngle * Math.PI / 180;
      const x1 = 16 + radius * Math.cos(startRadians);
      const y1 = 16 + radius * Math.sin(startRadians);
      const x2 = 16 + radius * Math.cos(endRadians);
      const y2 = 16 + radius * Math.sin(endRadians);
      const largeArcFlag = percentage > 50 ? 1 : 0;
      return `M16,16 L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;
    },
    generatePieData(pie_data) {
      const totalPercentage = pie_data.reduce((acc, segment) => acc + segment.percentage, 0);
      if (totalPercentage !== 100) {
        console.error('The total percentage of pie chart segments must equal 100%.');
        return [];
      }
      let cumulativeAngle = -90;
      return pie_data.map(segment => {
        const segmentData = {
          ...segment
        };
        const midAngle = cumulativeAngle + segment.percentage / 2 * 3.6;
        const radians = midAngle * Math.PI / 180;
        segmentData.textX = 16 + 9 * Math.cos(radians);
        segmentData.textY = 16 + 9 * Math.sin(radians);
        if (segment.percentage > 0) {
          segmentData.pathData = this.calculatePathData(cumulativeAngle, segment.percentage);
        } else {
          segmentData.pathData = "";
        }
        cumulativeAngle += segment.percentage * 3.6;
        return segmentData;
      });
    }
  },
  components: {
    SegmentList: SegmentList
  }
});
;// ./src/components/PieChart.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PieChart.vue?vue&type=style&index=0&id=8daa28f0&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/PieChart.vue?vue&type=style&index=0&id=8daa28f0&scoped=true&lang=css

;// ./src/components/PieChart.vue




;


const PieChart_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(PieChartvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-8daa28f0"]])

/* harmony default export */ var PieChart = (PieChart_exports_);
;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (PieChart);


__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=PieChart.umd.js.map