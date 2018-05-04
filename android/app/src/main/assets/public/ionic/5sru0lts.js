/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{e,d as i}from"./chunk-f025f93c.js";class s{static get is(){return"ion-chip"}static get host(){return{theme:"chip"}}static get properties(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}}static get style(){return"ion-chip{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-weight:400;vertical-align:middle}ion-chip>ion-icon{border-radius:50%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:32px;height:32px}ion-chip ion-icon{font-size:18px}.chip-ios{border-radius:16px;margin:2px 0;height:32px;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Roboto,sans-serif;font-size:13px;color:var(--ion-text-ios-color-step-150,var(--ion-text-color-step-150,#262626));background:rgba(var(--ion-text-ios-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1)}.chip-ios>ion-label{margin:0 10px}.chip-ios>ion-icon{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.chip-ios ion-avatar{width:32px;height:32px}.chip-ios-primary{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.chip-ios .icon-ios-primary{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.chip-ios .icon-ios-primary svg{fill:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));stroke:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff))}.chip-ios-secondary{color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8))}.chip-ios .icon-ios-secondary{color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8))}.chip-ios .icon-ios-secondary svg{fill:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));stroke:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.chip-ios-tertiary{color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#7044ff))}.chip-ios .icon-ios-tertiary{color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#7044ff))}.chip-ios .icon-ios-tertiary svg{fill:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));stroke:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.chip-ios-success{color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));background-color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.chip-ios .icon-ios-success{color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));background-color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.chip-ios .icon-ios-success svg{fill:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));stroke:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff))}.chip-ios-warning{color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000));background-color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.chip-ios .icon-ios-warning{color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000));background-color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.chip-ios .icon-ios-warning svg{fill:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000));stroke:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000))}.chip-ios-danger{color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:var(--ion-color-ios-danger,var(--ion-color-danger,#f04141))}.chip-ios .icon-ios-danger{color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:var(--ion-color-ios-danger,var(--ion-color-danger,#f04141))}.chip-ios .icon-ios-danger svg{fill:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));stroke:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff))}.chip-ios-light{color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));background-color:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8))}.chip-ios .icon-ios-light{color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));background-color:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8))}.chip-ios .icon-ios-light svg{fill:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));stroke:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000))}.chip-ios-medium{color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000));background-color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.chip-ios .icon-ios-medium{color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000));background-color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.chip-ios .icon-ios-medium svg{fill:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000));stroke:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000))}.chip-ios-dark{color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:var(--ion-color-ios-dark,var(--ion-color-dark,#222428))}.chip-ios .icon-ios-dark{color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:var(--ion-color-ios-dark,var(--ion-color-dark,#222428))}.chip-ios .icon-ios-dark svg{fill:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));stroke:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff))}"}static get styleMode(){return"ios"}}class r{constructor(){this.disabled=!1}getStyleClassMap(t){return function(t,e,i,s){const r="default"===i?`${e}`:`${e}-${i}`,o={[r]:!0,[`${r}-${s}`]:!0};return t&&(o[`${r}-${s}-${t}`]=!0),o}(this.color,t,this.fill||"default",this.mode)}render(){const s=i(this.el.classList),r=this.href?"a":"button",o=Object.assign({},s,e("chip-button",this.mode),this.getStyleClassMap("chip-button"));return t(r,{class:o,disabled:this.disabled,href:this.href},t("span",{class:"chip-button-inner"},t("slot",null)),"md"===this.mode&&t("ion-ripple-effect",{tapClick:!0}))}static get is(){return"ion-chip-button"}static get properties(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},fill:{type:String,attr:"fill"},href:{type:String,attr:"href"},mode:{type:String,attr:"mode"}}}static get style(){return".chip-button{border-radius:50%;margin:0;position:relative;width:32px;height:32px;border:0}.chip-button:active,.chip-button:focus{outline:0}.chip-button-inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.chip-button-ios{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.chip-button-clear-ios{color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff));background-color:transparent}.chip-button-ios-primary{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.chip-ios-primary .chip-button-ios{color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff));background-color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff))}.chip-button-clear-ios-primary{color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff));background-color:transparent}.chip-ios-primary .chip-button-clear-ios{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:transparent}.chip-button-ios-secondary{color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8))}.chip-ios-secondary .chip-button-ios{color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8));background-color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.chip-button-clear-ios-secondary{color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8));background-color:transparent}.chip-ios-secondary .chip-button-clear-ios{color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:transparent}.chip-button-ios-tertiary{color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#7044ff))}.chip-ios-tertiary .chip-button-ios{color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#7044ff));background-color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.chip-button-clear-ios-tertiary{color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#7044ff));background-color:transparent}.chip-ios-tertiary .chip-button-clear-ios{color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:transparent}.chip-button-ios-success{color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));background-color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.chip-ios-success .chip-button-ios{color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60));background-color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff))}.chip-button-clear-ios-success{color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60));background-color:transparent}.chip-ios-success .chip-button-clear-ios{color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));background-color:transparent}.chip-button-ios-warning{color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000));background-color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.chip-ios-warning .chip-button-ios{color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00));background-color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000))}.chip-button-clear-ios-warning{color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00));background-color:transparent}.chip-ios-warning .chip-button-clear-ios{color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000));background-color:transparent}.chip-button-ios-danger{color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:var(--ion-color-ios-danger,var(--ion-color-danger,#f04141))}.chip-ios-danger .chip-button-ios{color:var(--ion-color-ios-danger,var(--ion-color-danger,#f04141));background-color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff))}.chip-button-clear-ios-danger{color:var(--ion-color-ios-danger,var(--ion-color-danger,#f04141));background-color:transparent}.chip-ios-danger .chip-button-clear-ios{color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:transparent}.chip-button-ios-light{color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));background-color:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8))}.chip-ios-light .chip-button-ios{color:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8));background-color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000))}.chip-button-clear-ios-light{color:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8));background-color:transparent}.chip-ios-light .chip-button-clear-ios{color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));background-color:transparent}.chip-button-ios-medium{color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000));background-color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.chip-ios-medium .chip-button-ios{color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2));background-color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000))}.chip-button-clear-ios-medium{color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2));background-color:transparent}.chip-ios-medium .chip-button-clear-ios{color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000));background-color:transparent}.chip-button-ios-dark{color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:var(--ion-color-ios-dark,var(--ion-color-dark,#222428))}.chip-ios-dark .chip-button-ios{color:var(--ion-color-ios-dark,var(--ion-color-dark,#222428));background-color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff))}.chip-button-clear-ios-dark{color:var(--ion-color-ios-dark,var(--ion-color-dark,#222428));background-color:transparent}.chip-ios-dark .chip-button-clear-ios{color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:transparent}"}static get styleMode(){return"ios"}}export{s as IonChip,r as IonChipButton};