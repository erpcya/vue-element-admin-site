(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{305:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("你可以使用 "),e("code",[t._v("CDN")]),t._v(" 外链的方式引入这些第三方库，这样能大大增加构建的速度(通过 CDN 引入的资源不会经 webpack 打包)。如果你的项目没有自己的"),e("code",[t._v("CDN")]),t._v("服务的话，使用一些第三方的"),e("code",[t._v("CDN")]),t._v("服务，如"),e("a",{attrs:{href:"https://unpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("unpkg"),e("OutboundLink")],1),t._v("等是一个很好的选择，它提供过了免费的资源加速，同时提供了缓存优化，由于你的第三方资源是在"),e("code",[t._v("html")]),t._v("中通过"),e("code",[t._v("script")]),t._v("引入的，它的缓存更新策略都是你自己手动来控制的，省去了你需要优化缓存策略功夫。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),e("p",[t._v("之后还有一个小细节是如果你用了全局对象方式引入 vue，就不需要 手动 Vue.use(Vuex） ，它会自动挂载，具体见 "),e("a",{attrs:{href:"https://github.com/vuejs/vuex/issues/731",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("完整的"),e("a",{attrs:{href:"https://github.com/adempiere/vue-admin-template/commit/eaaa3c1ddadd114451a1a83e042f1fc56a9809a1",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码修改"),e("OutboundLink")],1)]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("同理，其它第三方依赖都可以使用相同的方式处理（比如"),e("code",[t._v("vuex")]),t._v("、"),e("code",[t._v("vue-router")]),t._v("等）。当然你也可以选择使用 "),e("a",{attrs:{href:"https://webpack.docschina.org/plugins/dll-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DLLPlugin"),e("OutboundLink")],1),t._v("的方式来处理第三方依赖，从而来优化构建。")])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[this._v("#")]),this._v(" CDN")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("你可以通过执行"),e("code",[t._v("npm run preview -- --report")]),t._v("来分析"),e("code",[t._v("webpack")]),t._v("打包之后的结果，观察各个静态资源的大小。你可以发现占用空间最多的是第三方依赖。如"),e("code",[t._v("vue")]),t._v("、"),e("code",[t._v("element-ui")]),t._v("、 "),e("code",[t._v("ECharts")]),t._v("等。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("很多文章说使用 "),e("code",[t._v("CDN")]),t._v(" 引入的方式能大大减小代码的体积，这是不可能的。虽然打包完的 "),e("code",[t._v("bundle")]),t._v("小了，但那部分代码只是被你拆出去，用"),e("code",[t._v("CDN")]),t._v("的方式引入罢了。你想减小体积，最高效的方案是启用"),e("code",[t._v("GZIP")]),t._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"我个人暂时不使用cdn引入第三方依赖的原因："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我个人暂时不使用cdn引入第三方依赖的原因："}},[this._v("#")]),this._v(" 我个人暂时不使用"),s("code",[this._v("CDN")]),this._v("引入第三方依赖的原因：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("暂时构建速度还没有遇到什么瓶颈，所有没有必要单独剥离部分第三方依赖。使用"),e("code",[t._v("CDN")]),t._v("引入的方式等于一些第三方依赖的版本你是通过"),e("code",[t._v("package.json")]),t._v("来控制的，一些依赖则需要手动维护，增加了一些维护成本。目前基于 webpack 的"),e("code",[t._v("optimization.splitChunks")]),t._v("已经做了资源的缓存优化，静态资源的缓存已经做得很好了。并且目前所有的静态资源都会上传到自己的"),e("code",[t._v("CDN")]),t._v("服务，没有必要使用第三方的"),e("code",[t._v("CDN")]),t._v("服务。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("当然所有的优化都是需要结合自己的具体业务来调整的！")]),this._v(" 之后可能会采用这种引入方式，或者使用"),s("code",[this._v("webpack dll")]),this._v("的方式进行优化。如果你觉得"),s("code",[this._v("CDN")]),this._v("引入对于的项目有益处，你可以遵循如下方法进行修改：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[this._v("#")]),this._v(" 使用方式")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("先找到 "),e("code",[t._v("vue.config.js")]),t._v("， 添加 "),e("code",[t._v("externals")]),t._v(" 让 "),e("code",[t._v("webpack")]),t._v(" 不打包 "),e("code",[t._v("vue")]),t._v(" 和 "),e("code",[t._v("element")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("externals"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  vue"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ELEMENT'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后配置那些第三方资源的"),s("code",[this._v("CDN")]),this._v("，请注意先后顺序。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cdn "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  css"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// element-ui css")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://unpkg.com/element-ui/lib/theme-chalk/index.css'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  js"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue must at first!")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://unpkg.com/vue/dist/vue.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// element-ui js")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://unpkg.com/element-ui/lib/index.js'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("之后通过 "),s("code",[this._v("html-webpack-plugin")]),this._v("注入到 "),s("code",[this._v("index.html")]),this._v("之中:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("args")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cdn "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cdn\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" args\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("找到 "),s("code",[this._v("public/index.html")]),this._v("。通过你配置的"),s("code",[this._v("CND Config")]),this._v(" 依次注入 css 和 js。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 引入样式 --\x3e")]),t._v("\n  <% for(var css of htmlWebpackPlugin.options.cdn.css) { %>\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%=css%>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  <% } %>\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 引入JS --\x3e")]),t._v("\n<% for(var js of htmlWebpackPlugin.options.cdn.js) { %>\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%=js%>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n<% } %>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("最终你可以使用 "),s("code",[this._v("npm run preview -- --report")]),this._v(" 查看效果 如图：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/0c5bdc47aeaecc340b9a5a88325b49885538bf90/68747470733a2f2f70616e6a69616368656e2e6769746875622e696f2f696d616765732f656c656d656e742d63646e2e706e67",alt:""}})])}],!1,null,null,null);s.default=n.exports}}]);