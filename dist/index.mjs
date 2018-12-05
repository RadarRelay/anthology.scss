import t from"chalk";var e=function t(e){if(void 0===e&&(e=t.StyleSheets[0]),!e&&!t.StyleSheets[0])throw new Error("Could not find any style sheets containing Anthology.scss metadata.");this.styleSheet=e,this.parseMetadata()},r={breakpoints:{configurable:!0}},o={StyleSheets:{configurable:!0}};o.StyleSheets.get=function(){return Array.from(document.styleSheets).filter(function(t){if(!t.rules&&!t.cssRules)return!1;return!!Array.from(t.rules||t.cssRules).find(function(t){return"-anthology-metadata::before"===t.selectorText})})},r.breakpoints.get=function(){return this.metadata.config.breakpoints},e.prototype.parseMetadata=function(){if(!this.styleSheet.rules&&!this.styleSheet.cssRules)throw new Error("Style sheet does not contain any CSS rules.");var t=this.styleSheet,e=Array.from(t.rules||t.cssRules),r=e.find(function(t){return"-anthology-metadata::before"===t.selectorText});if(!r)throw new Error("Style sheet does not contain Anthology.scss metadata.");var o=JSON.parse(JSON.parse(r.style.content));return this.metadata=o,this.rules=e,this},e.prototype.extract=function(e,r,o){var s=this;void 0===o&&(o={});var n,a,i,c=this.metadata.config.separator,l=o.important?""+c+this.metadata.config["important-tag"]:"",u=o.theme?""+c+this.metadata.config["theme-tag"]+o.theme:"",p=o.breakpoint?""+c+this.metadata.config["responsive-tag"]+o.breakpoint:"",h=o.pseudo?""+c+o.pseudo:"";if(!this.rules.find(function(t){if(o.breakpoint&&t.type===CSSRule.MEDIA_RULE){var f=t;if(f.conditionText.includes(s.breakpoints[o.breakpoint]))return a=""+e+c+r+l+u+h,i=CSS.escape(a),!!Array.from(f.cssRules).find(function(t){return(n=t).selectorText.includes(i)})}else if(t.type===CSSRule.STYLE_RULE)return a=""+e+c+r+l+u+p+h,i=CSS.escape(a),(n=t).selectorText.includes(i)}))throw new Error("Could not find Anthology-generated rule associated with selector: "+t.cyan(i));var f=n.style[0];return{shorthand:e,adjective:r,options:o,selector:a,selectorEscaped:i,property:f,value:n.style[f],cssRule:n}},e.prototype.extractStyle=function(t,e,r){return void 0===r&&(r={}),this.extract(t,e,r).cssRule.style},e.prototype.extractSelector=function(t,e,r){return void 0===r&&(r={}),this.extract(t,e,r).selector},e.prototype.extractSelectorEscaped=function(t,e,r){return void 0===r&&(r={}),this.extract(t,e,r).selectorEscaped},e.prototype.extractProperty=function(t,e,r){return void 0===r&&(r={}),this.extract(t,e,r).property},e.prototype.extractValue=function(t,e,r){return void 0===r&&(r={}),this.extract(t,e,r).value},Object.defineProperties(e.prototype,r),Object.defineProperties(e,o);export{e as AnthologyClient};
//# sourceMappingURL=index.mjs.map
