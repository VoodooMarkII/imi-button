(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{327:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return d}));var n=r(328),o=r(0),c=Object(o.g)("v-card__actions"),l=Object(o.g)("v-card__subtitle"),h=Object(o.g)("v-card__text"),d=Object(o.g)("v-card__title");n.a},328:function(e,t,r){"use strict";r(10),r(8),r(7),r(4),r(9);var n=r(2),o=(r(13),r(329),r(148)),c=r(1),l=(r(102),r(330),r(150)),h=r(22),d=r(71),f=r(149),m=r(15),v=r(0),y=r(5);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var O=Object(y.a)(h.a,Object(d.b)(["absolute","fixed","top","bottom"]),f.a,m.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(v.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(v.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e;return e={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(e,this.isReversed?"right":"left",Object(v.f)(this.normalizedValue,"%")),Object(n.a)(e,"width",Object(v.f)(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?l.b:l.c},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(v.f)(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var slot=Object(v.k)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect().width;this.internalValue=e.offsetX/t*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(v.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),w=c.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(O,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),k=r(66);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function B(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(y.a)(w,k.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return B(B({"v-card":!0},k.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=B({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=w.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},329:function(e,t,r){},330:function(e,t,r){},334:function(e,t,r){},335:function(e,t,r){"use strict";r(146);var n=r(147);t.a=Object(n.a)("flex")},336:function(e,t,r){"use strict";r(146);var n=r(147);t.a=Object(n.a)("layout")},339:function(e,t,r){"use strict";r(334)},350:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{md:'<section><h1>狗按钮 / KORONE-BUTTON</h1>\n<p>音源来自VTuber戌神沁音</p>\n<p>相关链接：</p>\n<ul>\n<li>戌神沁音Twitter：<a href="https://twitter.com/inugamikorone">https://twitter.com/inugamikorone</a></li>\n<li>Youtube：<a href="https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q?sub_confirmation=1">https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q?sub_confirmation=1</a></li>\n<li>Bilibili：<a href="https://space.bilibili.com/412135619">https://space.bilibili.com/412135619</a></li>\n</ul>\n<p>本项目基于<a href="https://github.com/voosc/fubuki-button">狐按钮</a>进行修改。</p>\n<h2>参与完善本项目</h2>\n<p>如果您不知道如何直接参与GitHub开发，可以直接将素材或意见建议发送到<a href="mailto:korone@fubuki.moe">korone@fubuki.moe</a>，带上标题、内容以及您的ID（Bilibili、Twitter等均可），贡献者名单将会有您的名字。</p>\n<p>当然您也可以发在 <a href="https://github.com/voosc/korone-button/issues">Issues</a> ，同样也请带上标题和内容。</p>\n<p>如果您可以进行开发，那么请Fork本项目进行修改，完成修改后在本项目中发起一个Pull Request，详细说明如下：</p>\n<h3>添加或修改音频</h3>\n<p>音频文件为mp3格式，码率128Kbps，储存在<code>static/voices/</code>目录下，对应的URL为<code>/voices/</code>。</p>\n<p>所有的音频信息都存储在<code>assets/voices.json</code>中，要添加或修改音频，你同样需要修改这个文件中对应的内容。</p>\n<p>如果需要对现有音频进行修改，建议将原音频文件删除，重新命名一个新文件，这样可以避免浏览器缓存问题。</p>\n<h3>参与网页开发</h3>\n<p>本项目使用Vue + NuxtJS + Vuetify框架进行开发，要部署本地开发环境，请先安装最新版的Node与Yarn包管理器。</p>\n<ol>\n<li>Fork 并 Clone 代码到本地</li>\n<li>进入代码目录，运行<code>yarn</code>以安装依赖项目</li>\n<li>开启本地开发服务器，运行<code>yarn dev</code>，这将会在<code>localhost:3000</code>启动，在代码修改过程中，本地开发服务器可以即时反映修改的结果。</li>\n<li>要编译可供部署的文件，请运行<code>yarn generate</code>，这将会在<code>dist</code>目录下生成可以直接部署到静态网站托管（GitHub Pages等）的文件。</li>\n</ol>\n<h2>贡献者</h2>\n<p>开发：</p>\n<ul>\n<li>GitHub <a href="https://github.com/lonelyion">孤单离子</a></li>\n<li>GitHub <a href="https://github.com/Nyaasu66">Nyaasu</a></li>\n</ul>\n<h2>协议</h2>\n<p>音频部分: <a href="https://www.hololive.tv/terms">Hololive 二次创作条款</a> (只有日语).</p>\n<p>其他部分：<a href="https://github.com/voosc/fubuki-button/blob/master/LICENSE">MIT License</a></p>\n<p>本项目为爱好者作品，和 Hololive 官方没有关联</p>\n<h2>支持</h2>\n<h3>BroswerStack</h3>\n<p>Proudly using BrowserStack.</p>\n<p><a href="https://www.browserstack.com/"><img src="https://i.loli.net/2017/09/27/59cbc16b0f8b4.png" alt="" /></a></p>\n<blockquote>\n<p><strong>BrowserStack</strong> is a cloud-based cross-browser testing tool that enables developers to test their websites across various browsers on different operating systems and mobile devices, without requiring users to install virtual machines, devices or emulators.</p>\n</blockquote>\n<h3>Vercel</h3>\n<p>Powered by Vercel.</p>\n<p><a href="https://www.vercel.com/?utm_source=oruyanke"><img src="https://i.loli.net/2020/07/18/rPah8FVmqBXL6dj.png" alt="vercel.png" /></a></p>\n<blockquote>\n<p><strong>​Vercel</strong> is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration.</p>\n</blockquote>\n</section>\n'}},head:function(){return{title:this.$t("site.about")+" - "+this.$t("site.title"),link:[{rel:"canonical",href:"https://korone.icu/about"}]}}},o=(r(339),r(70)),c=r(101),l=r.n(c),h=r(328),d=r(327),f=r(335),m=r(336),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",[t("v-flex",[t("v-card",[t("v-card-text",[t("div",{staticClass:"markdown-body",domProps:{innerHTML:this._s(this.md)}})])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCard:h.a,VCardText:d.b,VFlex:f.a,VLayout:m.a})}}]);