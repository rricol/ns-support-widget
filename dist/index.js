"use strict";(()=>{window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let t=document.querySelector('[nu-order-element="list"]'),n=document.querySelector('[nu-order-element="textarea"]');t&&t.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.addEventListener("change",()=>{if(e.checked){let l=prompt("Indiquez la quantit\xE9 souhaitez:");if(l){let o=`${e.nextElementSibling.innerText} - "qt\xE9: "${l}`;n&&(n.value+=o+`
`)}}})})});})();
