!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");t.addEventListener("clck",(function(){n=setInterval((function(){r.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("clck",(function(){clearInterval(n),t.removeAttribute("disabled"),t.setAttribute("disabled",!0)}));var n=null;e.setAttribute("disabled",!0)}();
//# sourceMappingURL=01-color-switcher.72c9c89b.js.map
