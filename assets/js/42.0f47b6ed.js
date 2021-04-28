(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{257:function(e,s,t){"use strict";t.r(s);var a=t(0),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("En el proceso de desarrollo del estilo, hay dos cuestiones más destacadas:")]),e._v(" "),e._m(2),e._v(" "),t("p",[e._v("Afortunadamente, vue nos proporciona "),t("a",{attrs:{href:"https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles",target:"_blank",rel:"noopener noreferrer"}},[e._v("scoped"),t("OutboundLink")],1),e._v(" el cual puede resolver fácilmente el problema anterior. Como su nombre indica, agrega un concepto de alcance (scoped) al css.")]),e._v(" "),e._m(3),t("p",[e._v("Si agregas "),t("code",[e._v("<style scoped>")]),e._v(" el css solo tendrá efecto en el componente actual. Para obtener documentación detallada, consulta "),t("a",{attrs:{href:"https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-loader"),t("OutboundLink")],1)]),e._v(" "),e._m(4),e._v(" "),t("br"),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),t("p",[e._v("Se compilará como:")]),e._v(" "),e._m(18),e._m(19),e._v(" "),e._m(20),t("p",[t("a",{attrs:{href:"https://vue-loader.vuejs.org/en/features/scoped-css.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentación oficial"),t("OutboundLink")],1)]),e._v(" "),e._m(21),e._v(" "),t("p",[e._v("Hablemos de la configuración de postcss. Después de la nueva versión de la inicialización "),t("a",{attrs:{href:"https://github.com/vuejs-templates/webpack",target:"_blank",rel:"noopener noreferrer"}},[e._v("plantilla vue-cli de webpack"),t("OutboundLink")],1),e._v(", hay un "),t("code",[e._v("postcss.config.js")]),e._v(" predeterminado en el directorio raíz. Por defecto, "),t("code",[e._v("vue-loader")]),e._v(" leerá la configuración de postcss, así que aquí puede cambiar la configuración directamente. La configuración es la misma que "),t("a",{attrs:{href:"https://github.com/postcss/postcss",target:"_blank",rel:"noopener noreferrer"}},[e._v("postcss"),t("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(22),t("p",[e._v("Como se describe en el código anterior, el corrector automático lee los parámetros de configuración de browserslist en package.json.")]),e._v(" "),e._m(23),e._v(" "),t("p",[e._v("Más detalles "),t("a",{attrs:{href:"https://github.com/ai/browserslist",target:"_blank",rel:"noopener noreferrer"}},[e._v("browserslist"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("code",[e._v("postcss")]),e._v(" tiene muchas otras características "),t("a",{attrs:{href:"https://www.postcss.parts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("para explorar por tu cuenta"),t("OutboundLink")],1)]),e._v(" "),e._m(24),e._v(" "),t("p",[e._v("Este proyecto no está configurado para inyectar automáticamente sass mixin en el estilo global, por lo que debes insertarlo manualmente.")]),e._v(" "),e._m(25),t("p",[e._v("Si necesitas inyectar automáticamente mixin global, puedes usar "),t("a",{attrs:{href:"https://github.com/shakacode/sass-resources-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("sass-resources-loader"),t("OutboundLink")],1),e._v(".")])])}),[function(){var e=this.$createElement,s=this._self._c||e;return s("h1",{attrs:{id:"estilo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estilo"}},[this._v("#")]),this._v(" Estilo")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"modulos-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modulos-css"}},[this._v("#")]),this._v(" Módulos CSS")])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[s("p",[this._v("Contaminación global —— El selector en el archivo CSS es global. Si el mismo nombre del selector esta en diferentes archivos, de acuerdo con el orden en el archivo de generación de compilación, los estilos generados más adelante sobrescribirán los anteriores.")])]),this._v(" "),s("li",[s("p",[this._v("Selector complejo —— Para evitar los problemas anteriores, debemos tener cuidado al escribir estilos, el nombre de la clase estará marcado con una serie de restricciones, el desarrollo entre varias personas también es muy fácil de conducir al caos con los nombres de los estilos. Los nombres de las clases son cada vez más largos. Eventualmente, es difícil de mantener.")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* Antes de compilar */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".example")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* Despues de compilar */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".example[_v-f3f3eg9]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("Con scoped, los estilos del componente principal no se filtrarán a los componentes secundarios. Sin embargo, el nodo raíz de un componente secundario se verá afectado tanto por el CSS con scoped del padre como por el CSS con scoped del hijo. Esto es así para que el padre pueda aplicar estilo al elemento raíz hijo con fines de diseño.")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"estructura-del-proyecto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estructura-del-proyecto"}},[this._v("#")]),this._v(" Estructura del proyecto")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("Todos los estilos globales de adempiere-vue se configuran en el directorio "),s("code",[this._v("@/styles")]),this._v(".")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("├── styles\n│   ├── btn.scss                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# botones css")]),e._v("\n│   ├── element-ui.scss          "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# estilo global personalizado de element-ui")]),e._v("\n│   ├── index.scss               "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# estilo global común")]),e._v("\n│   ├── mixin.scss               "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# global sass mixin")]),e._v("\n│   ├── sidebar.scss             "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# barra lateral css")]),e._v("\n│   ├── transition.scss          "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# animación de transición de vue")]),e._v("\n│   └── variables.scss           "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# variables globales")]),e._v("\n")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("El flujo de trabajo común es que los estilos globales se escriban en el directorio "),s("code",[this._v("src/styles")]),this._v(" y el estilo propio de cada página se escriba en su propio archivo "),s("code",[this._v(".vue")]),this._v(".")])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[this._v("<style>\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("/* estilos globales */")]),this._v("\n</style>\n\n<style scoped>\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("/* estilos locales */")]),this._v("\n</style>\n")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"estilo-de-element-ui-personalizado"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estilo-de-element-ui-personalizado"}},[this._v("#")]),this._v(" Estilo de element-ui personalizado")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("Ahora hablemos sobre cómo sobrescribir el estilo de element-ui. Debido a que el estilo de element-ui esta importado de manera global, no puedes agregar "),s("code",[this._v("scoped")]),this._v(" a una página para sobrescribirlo, en caso de que quieras sobrescribir el estilo de element solamente en esa página, puedes agregar una clase en su padre, utilizando espacio de nombres para resolver este problema.")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".article-page")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* tu espacio de nombres */")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".el-tag")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* etiqueta del elemento de element-ui */")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("margin-right")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 0px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[s("strong",[this._v("Por supuesto, también puedes usar los selectores profundos como se describe a continuación.")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"selectores-profundos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selectores-profundos"}},[this._v("#")]),this._v(" Selectores profundos")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[s("strong",[this._v("El componente principal cambia el estilo del componente secundario.")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v('Si quieres que un selector en estilos con scoped sea "profundo", es decir, que afecte a los componentes secundarios, puedes usar el combinador '),s("code",[this._v(">>>")]),this._v(":")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[e._v("<style scoped>\n.a >>> .b")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ... */")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n</style>\n")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".a[data-v-f3f3eg9] .b")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ... */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("Es posible que algunos preprocesadores, como SASS, no puedan analizar "),s("code",[this._v(">>>")]),this._v(" correctamente. En esos casos, puedes usar el combinador /deep/ en su lugar, es un alias para "),s("code",[this._v(">>>")]),this._v(" y funciona exactamente igual.")])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[this._v(".xxx-container >>> .el-button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n  xxxx\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"postcss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postcss"}},[this._v("#")]),this._v(" Postcss")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// postcss.config.js")]),e._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  plugins"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    autoprefixer"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// package.json")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"browserslist"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"> 1%"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"last 2 versions"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"not ie <= 8"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",[t("li",[t("code",[e._v("> 1%")]),e._v(" Compatible con navegadores con uso global superior al 1%")]),e._v(" "),t("li",[t("code",[e._v("last 2 versions")]),e._v(" Compatible con las dos últimas versiones de cada navegador")]),e._v(" "),t("li",[t("code",[e._v("not ie <= 8")]),e._v(" No compatible con ie8 e inferiores")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"mixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixin"}},[this._v("#")]),this._v(" Mixin")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language-scss extra-class"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[e._v("<style rel="),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"stylesheet/scss"')]),e._v(" lang="),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"scss"')]),e._v(">\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("@import")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"src/styles/mixin.scss"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n</style>\n")])])])}],!1,null,null,null);s.default=n.exports}}]);