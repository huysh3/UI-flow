"use strict";jQuery(function(s){s(document).ready(function(){var t=[],o=[],r=0,n="",e="",a="",i=null,c=0,l=0,p=0,u=0;s(window).scroll(function(t){var o=s(this).scrollTop();n=o>r?"down":"up",r=o}),s.fn.stickUp=function(t){s(this).addClass("stuckMenu");var r=0;if(null!=t){for(var n in t.parts)t.parts.hasOwnProperty(n)&&(o[r]=t.parts[r],r++);0==r&&console.log("error:needs arguments"),e=t.itemClass,a=t.itemHover,null!=t.topMargin?"auto"==t.topMargin?u=parseInt(s(".stuckMenu").css("margin-top")):isNaN(t.topMargin)&&t.topMargin.search("px")>0?u=parseInt(t.topMargin.replace("px","")):isNaN(parseInt(t.topMargin))?(console.log("incorrect argument, ignored."),u=0):u=parseInt(t.topMargin):u=0,i=s("."+e).size()}c=parseInt(s(this).height()),l=parseInt(s(this).css("margin-bottom")),p=parseInt(s(this).next().closest("div").css("margin-top")),vartop=parseInt(s(this).offset().top)},s(document).on("scroll",function(){if(varscroll=parseInt(s(document).scrollTop()),null!=i)for(var r=0;r<i;r++){var v=function(r){contentView=.4*s("#"+o[r]).height(),testView=t[r]-contentView,varscroll>testView?(s("."+e).removeClass(a),s("."+e+":eq("+r+")").addClass(a)):varscroll<50&&(s("."+e).removeClass(a),s("."+e+":eq(0)").addClass(a))};t[r]=s("#"+o[r]).offset().top,"down"==n&&varscroll>t[r]-50&&varscroll<t[r]+50&&(s("."+e).removeClass(a),s("."+e+":eq("+r+")").addClass(a)),"up"==n&&v(r)}vartop<varscroll+u&&(s(".stuckMenu").addClass("isStuck"),s(".stuckMenu").next().closest("div").css({"margin-top":c+l+p+"px"},10),s(".stuckMenu").css("position","fixed"),s(".isStuck").css({top:"0px"},10,function(){})),varscroll+u<vartop&&(s(".stuckMenu").removeClass("isStuck"),s(".stuckMenu").next().closest("div").css({"margin-top":p+"px"},10),s(".stuckMenu").css("position","relative"))})})});