<!--*********** All from script manager -->
<!--  Clickcease.com tracking-->
var script = document.createElement('script');
script.async = true; script.type = 'text/javascript';
var target = 'https://www.clickcease.com/monitor/stat.js';
script.src = target;var elem = document.head;elem.appendChild(script);
<!--  End Clickcease.com tracking-->

<!-- Begin Inspectlet Asynchronous Code -->
(function() {
window.__insp = window.__insp || [];
__insp.push(['wid', 1737717451]);
var ldinsp = function(){
if(typeof window.__inspld != 'undefined') return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = 'inspsync'; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=1737717451&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
setTimeout(ldinsp, 0);
})();

<!-- End Inspectlet Asynchronous Code -->

<!-- FOMO -->
var script = document.createElement('script');
script.async = true; script.type = 'text/javascript';
var target = 'https://load.fomo.com/api/v1/f94zblPoHIi23nD8tDGeQQ/load.js';
script.src = target;var elem = document.head;elem.appendChild(script);


<!-- End FOMO -->

<!--*********** End All from script manager -->


<!-- Testimonials.js -->
var testimonials=function(){var e=document.querySelector('#testimonials'),t=1e3*parseFloat(getComputedStyle(e.querySelector('figure')).getPropertyValue('transition-duration'));return t=t/3*2,{next:function(){var i=e.querySelector('figure.active'),a=i.nextElementSibling;null!==a&&(i.className='',setTimeout(function(){i.className='hidden',a.className='',setTimeout(function(){a.className='active'},40)},t))},prev:function(){var i=e.querySelector('figure.active'),a=i.previousElementSibling;null!==a&&(i.className='',setTimeout(function(){i.className='hidden',a.className='',setTimeout(function(){a.className='active'},40)},t))}}}();

<!-- End Testimonials.js -->


<!-- Multistep.js -->
!function(){var e=document.querySelector('#multistep'),t=e.querySelector('div.reel'),n=e.querySelectorAll('fieldset'),r=e.querySelector('input[name=ad_id]'),a=e.querySelector('input[name=gclid]'),i=e.querySelector('input[name=h]'),j = e.querySelector('input[name=l1]'),l=document.querySelector('input[name=zip]'),u=e.querySelector('select[name=purpose]'),o=e.querySelector('input[name=value]'),d=e.querySelector('input[name=amount]'),c=e.querySelector('select[name=credit]'),s=e.querySelector('input[name=kw]'),y=e.querySelector('input[name=loc]');function m(e){e=e.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var t=new RegExp('[\\?&]'+e+'=([^&#]*)').exec(location.search);return null===t?'':decodeURIComponent(t[1].replace(/\+/g,' '))}function p(e,t){return!!e.className.match(new RegExp('(\\s|^)'+t+'(\\s|$)'))}function v(e,t){p(e,t)||(e.className=(e.className+' '+t).trim())}function b(e,t){if(p(e,t)){var n=new RegExp('(\\s|^)'+t+'(\\s|$)');e.className=e.className.replace(n,' ').trim()}}r.value=m('ad_id'),a.value=m('gclid'),i.value=m('h'),j.value = m('l1'),s.value=m('kw'),y.value=m('loc'),e.addEventListener('submit',function(t){if(t.preventDefault(),!g())return!1;e.querySelector('img.arrow').style.display='none',z[z.length-1].style.display='none',e.querySelector('span.indicator').style.display='block',e.querySelector('button[type=submit]').setAttribute('disabled','true'),e.submit()}),e.addEventListener('keydown',function(e){if(13==e.keyCode||13==e.which)return e.preventDefault(),!1});var f=function(t){if(13==t.keyCode||13==t.which){if(t.preventDefault(),this==e){if(window.Event)var n=new Event('submit');else(n=document.createEvent('Event')).initEvent('submit',!0,!0);this.dispatchEvent(n)}else'function'==typeof this&&this.call();return!1}},S=function(){if(5===this.value.length){if(!q())return;var t='https://www.zipcodeapi.com/rest/js-mPjFvc4Zlu0JtZewGO5r8WQoBgW1hfqGT5VtMZwLE5WxUQkcfYbqA0khq9vEjXUA/info.json/'+this.value+'/degrees',n=new XMLHttpRequest;n.open('get',t),n.onreadystatechange=function(){if(200===n.status&&4===n.readyState){var t=JSON.parse(n.responseText);if(t.error_msg)return void console.error('Zip code lookup failed: '+t.error_msg);var r=e.querySelectorAll('span.location');e.querySelector('input[name=city]').value=t.city,e.querySelector('input[name=state]').value=t.state;for(var a=0,i=r.length;a<i;a++)r[a].innerHTML=t.city+', '+t.state}},n.send()}}.bind(l);function q(){return l.value.match(/^[0-9]{5}$/)?(b(l,'invalid'),u.tabIndex=3,e.querySelector('select[name=term]').tabIndex=4,e.querySelector('select[name=ppty]').tabIndex=5,P[1].tabIndex=6,l.setCustomValidity(''),v(e.querySelector('input[name=zip] + div.error'),'hidden'),!0):(v(l,'invalid'),u.tabIndex=-1,e.querySelector('select[name=term]').tabIndex=-1,e.querySelector('select[name=ppty]').tabIndex=-1,P[1].tabIndex=-1,e.querySelector('select[name=use]').tabIndex=-1,e.querySelector('input[name=value]').tabIndex=-1,e.querySelector('input[name=amount]').tabIndex=-1,P[2].tabIndex=-1,c.tabIndex=-1,e.querySelector('select[name=va]').tabIndex=-1,e.querySelector('select[name=bk]').tabIndex=-1,e.querySelector('button[type=submit]').tabIndex=-1,l.setCustomValidity('Please enter a valid zip code.'),b(e.querySelector('input[name=zip] + div.error'),'hidden'),l.focus(),!1)}function x(){return 0!=u.selectedIndex?(b(u,'invalid'),e.querySelector('select[name=use]').tabIndex=7,e.querySelector('input[name=value]').tabIndex=8,e.querySelector('input[name=amount]').tabIndex=9,P[2].tabIndex=10,u.setCustomValidity(''),!0):(v(u,'invalid'),e.querySelector('select[name=use]').tabIndex=-1,e.querySelector('input[name=value]').tabIndex=-1,e.querySelector('input[name=amount]').tabIndex=-1,P[2].tabIndex=-1,c.tabIndex=-1,e.querySelector('select[name=va]').tabIndex=-1,e.querySelector('select[name=bk]').tabIndex=-1,e.querySelector('button[type=submit]').tabIndex=-1,u.setCustomValidity('Please select an optionn.'),u.focus(),!1)}function I(){return o.value>0?(b(o,'invalid'),o.setCustomValidity(''),v(e.querySelector('input[name=value] + div.error'),'hidden'),!0):(v(o,'invalid'),b(e.querySelector('input[name=value] + div.error'),'hidden'),o.setCustomValidity('Please enter a dollar amount.'),o.focus(),!1)}function h(){return d.value>0?(b(d,'invalid'),d.setCustomValidity(''),v(e.querySelector('input[name=amount] + div.error'),'hidden'),!0):(v(d,'invalid'),b(e.querySelector('input[name=amount] + div.error'),'hidden'),d.setCustomValidity('Please enter a dollar amount.'),d.focus(),!1)}function g(){return 0!=c.selectedIndex?(b(c,'invalid'),c.setCustomValidity(''),!0):(v(c,'invalid'),c.setCustomValidity('Please select an option.'),c.focus(),!1)}l.addEventListener('input',S),u.addEventListener('change',x),o.addEventListener('input',function(){document.activeElement==o&&I()}),d.addEventListener('input',function(){document.activeElement==d&&h()}),c.addEventListener('change',g);var E=1,k=!1;function w(){if(!1===k){k=!0,testimonials&&testimonials.next();var n=parseInt(getComputedStyle(t).getPropertyValue('left')),r=parseInt(getComputedStyle(e).getPropertyValue('width'));t.style.left=n-r+'px',E++;var a=1e3*parseFloat(getComputedStyle(t).getPropertyValue('transition-duration'));setTimeout(function(){for(var t=e.querySelectorAll('*[tabindex]'),n=0,r=t.length;n<r;n++)if(t[n].tabIndex==this.tabIndex+1){t[n].focus(),k=!1;break}}.bind(this),a)}}var C=function(){q()&&w.call(P[0])},L=function(){x()&&w.call(P[1])},V=function(){var t;t=h(),(I()&&t?(c.tabIndex=11,e.querySelector('select[name=va]').tabIndex=12,e.querySelector('select[name=bk]').tabIndex=13,e.querySelector('button[type=submit]').tabIndex=14,1):(c.tabIndex=-1,e.querySelector('select[name=va]').tabIndex=-1,e.querySelector('select[name=bk]').tabIndex=-1,e.querySelector('button[type=submit]').tabIndex=-1,0))&&w.call(P[2])},P=e.querySelectorAll('button.next');function A(){if(!1===k){k=!0,testimonials&&testimonials.prev(),this.blur();var n=parseInt(getComputedStyle(t).getPropertyValue('left')),r=parseInt(getComputedStyle(e).getPropertyValue('width'));t.style.left=n+r+'px',E--;var a=1e3*parseFloat(getComputedStyle(t).getPropertyValue('transition-duration'));setTimeout(function(){k=!1},a)}}P[0].addEventListener('click',C),P[1].addEventListener('click',L),P[2].addEventListener('click',V),n[0].addEventListener('keyup',f.bind(C)),n[1].addEventListener('keyup',f.bind(L)),n[2].addEventListener('keyup',f.bind(V)),n[3].addEventListener('keyup',f.bind(e));for(var z=e.querySelectorAll('button.back'),N=0,R=z.length;N<R;N++){var T=z[N];T.addEventListener('click',A.bind(T))}window.addEventListener('resize',function(){var n=parseInt(getComputedStyle(e).getPropertyValue('width'));t.style.left='-'+(E-1)*n+'px'})}();  


<!-- End Multistep.js -->

<!-- Reviewsonmywebsite.com -->
var script = document.createElement('script');
script.async = true; script.type = 'text/javascript';
var target = 'https://reviewsonmywebsite.com/js/embedLoader.js?id=dbaebe9662c6466e4cbe';
script.src = target;var elem = document.head;elem.appendChild(script);



<!-- End Reviewsonmywebsite.com -->

<!-- Jquery 1.4.2 + Smooth scrolling-->
var script = document.createElement('script');
script.async = false; script.type = 'text/javascript';
var target = 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js';
script.src = target;var elem = document.head;elem.appendChild(script);

   <!--Smooth Scrolling script follows-->
  
  jQuery(function($) {
  
    // The speed of the scroll in milliseconds
    var speed = 1000;
  
    // Find links that are #anchors and scroll to them
    $('a[href^=#]')
      .not('.lp-pom-form .lp-pom-button')
      .unbind('click.smoothScroll')
      .bind('click.smoothScroll', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top }, speed);
      });
  });

<!-- End Jquery 1.4.2 + Smooth scrolling-->
