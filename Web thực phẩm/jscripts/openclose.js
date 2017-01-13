﻿jQuery(function(){initOpenClose();initAccordion();});function initOpenClose(){jQuery('.open-close').openClose({activeClass:'active',opener:'.opener',slider:'.slide',animSpeed:400,effect:'none'});jQuery('.drop-title').openClose({activeClass:'active',hideOnClickOutside:true,opener:'.opener',slider:'.slide',animSpeed:400,effect:'none'});jQuery('.popup-holder').openClose({hideOnClickOutside:true,activeClass:'active',opener:'.open',slider:'.popup',animSpeed:400,event:'over',effect:'none'});jQuery('.b-block, .right-area, .out-stock-form, .to-cart-block').openClose({hideOnClickOutside:true,activeClass:'active',opener:'.open',slider:'.popup',animSpeed:400,event:'click',effect:'none'});jQuery('.specialties-block').openClose({activeClass:'active',opener:'.link-view',slider:'.slide',animSpeed:400,effect:'fade'});}
function initAccordion(){jQuery('ul.accordeon-list').slideAccordion({addClassBeforeAnimation:true,opener:'a.opener',slider:'.slide',animSpeed:400});};(function($){$.fn.slideAccordion=function(opt){var options=$.extend({addClassBeforeAnimation:false,activeClass:'active',opener:'.opener',slider:'.slide',animSpeed:300,collapsible:true,event:'click'},opt);return this.each(function(){var accordion=$(this);var items=accordion.find(':has('+options.slider+')');items.each(function(){var item=$(this);var opener=item.find(options.opener);var slider=item.find(options.slider);opener.bind(options.event,function(e){if(!slider.is(':animated')){if(item.hasClass(options.activeClass)){if(options.collapsible){slider.slideUp(options.animSpeed,function(){hideSlide(slider);item.removeClass(options.activeClass);});}}else{var levelItems=item.siblings('.'+options.activeClass);var sliderElements=levelItems.find(options.slider);item.addClass(options.activeClass);showSlide(slider).hide().slideDown(options.animSpeed);sliderElements.slideUp(options.animSpeed,function(){levelItems.removeClass(options.activeClass);hideSlide(sliderElements);});}}
e.preventDefault();});if(item.hasClass(options.activeClass))showSlide(slider);else hideSlide(slider);});});};var showSlide=function(slide){return slide.css({position:'',top:'',left:'',width:''});};var hideSlide=function(slide){return slide.show().css({position:'absolute',top:-9999,left:-9999,width:slide.width()});};}(jQuery));;(function($){function OpenClose(options){this.options=$.extend({addClassBeforeAnimation:true,hideOnClickOutside:false,activeClass:'active',opener:'.opener',slider:'.slide',animSpeed:400,effect:'fade',event:'click'},options);this.init();}
OpenClose.prototype={init:function(){if(this.options.holder){this.findElements();this.attachEvents();this.makeCallback('onInit');}},findElements:function(){this.holder=$(this.options.holder);this.opener=this.holder.find(this.options.opener);this.slider=this.holder.find(this.options.slider);},attachEvents:function(){var self=this;this.eventHandler=function(e){e.preventDefault();if(self.slider.hasClass(slideHiddenClass)){self.showSlide();}else{self.hideSlide();}};self.opener.bind(self.options.event,this.eventHandler);if(self.options.event==='over'){self.opener.bind('mouseenter',function(){self.showSlide();});self.holder.bind('mouseleave',function(){self.hideSlide();});}
self.outsideClickHandler=function(e){if(self.options.hideOnClickOutside){var target=$(e.target);if(!target.is(self.holder)&&!target.closest(self.holder).length){self.hideSlide();}}};if(this.holder.hasClass(this.options.activeClass)){$(document).bind('click touchstart',self.outsideClickHandler);}else{this.slider.addClass(slideHiddenClass);this.slider.removeClass('hidden');}},showSlide:function(){var self=this;if(self.options.addClassBeforeAnimation){self.holder.addClass(self.options.activeClass);}
self.slider.removeClass(slideHiddenClass);$(document).bind('click touchstart',self.outsideClickHandler);self.makeCallback('animStart',true);toggleEffects[self.options.effect].show({box:self.slider,speed:self.options.animSpeed,complete:function(){if(!self.options.addClassBeforeAnimation){self.holder.addClass(self.options.activeClass);}
self.makeCallback('animEnd',true);}});},hideSlide:function(){var self=this;if(self.options.addClassBeforeAnimation){self.holder.removeClass(self.options.activeClass);}
$(document).unbind('click touchstart',self.outsideClickHandler);self.makeCallback('animStart',false);toggleEffects[self.options.effect].hide({box:self.slider,speed:self.options.animSpeed,complete:function(){if(!self.options.addClassBeforeAnimation){self.holder.removeClass(self.options.activeClass);}
self.slider.addClass(slideHiddenClass);self.makeCallback('animEnd',false);}});},destroy:function(){this.slider.removeClass(slideHiddenClass).css({display:''});this.opener.unbind(this.options.event,this.eventHandler);this.holder.removeClass(this.options.activeClass).removeData('OpenClose');$(document).unbind('click touchstart',this.outsideClickHandler);},makeCallback:function(name){if(typeof this.options[name]==='function'){var args=Array.prototype.slice.call(arguments);args.shift();this.options[name].apply(this,args);}}};var slideHiddenClass='js-slide-hidden';$(function(){var tabStyleSheet=$('<style type="text/css">')[0];var tabStyleRule='.'+ slideHiddenClass;tabStyleRule+='{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important}';if(tabStyleSheet.styleSheet){tabStyleSheet.styleSheet.cssText=tabStyleRule;}else{tabStyleSheet.appendChild(document.createTextNode(tabStyleRule));}
$('head').append(tabStyleSheet);});var toggleEffects={slide:{show:function(o){o.box.stop(true).hide().slideDown(o.speed,o.complete);},hide:function(o){o.box.stop(true).slideUp(o.speed,o.complete);}},fade:{show:function(o){o.box.stop(true).hide().fadeIn(o.speed,o.complete);},hide:function(o){o.box.stop(true).fadeOut(o.speed,o.complete);}},none:{show:function(o){o.box.hide().show(0,o.complete);},hide:function(o){o.box.hide(0,o.complete);}}};$.fn.openClose=function(opt){return this.each(function(){jQuery(this).data('OpenClose',new OpenClose($.extend(opt,{holder:this})));});};}(jQuery));
