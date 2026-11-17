const cfg=window.HAFLAW;
const wa=(message)=>`https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(message)}`;
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('hero-wa').href=wa('Hello HAFLAW, I would like to enquire about your event services.');
document.getElementById('float-wa').href=wa('Hello HAFLAW, I would like to enquire about your event services.');
const menu=document.getElementById('menu'),nav=document.getElementById('nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const date=document.querySelector('[name=date]');const now=new Date();date.min=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
document.getElementById('booking-form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const msg=['Hello HAFLAW, I would like to request an event booking.','',`Name: ${f.get('customer')}`,`Phone: ${f.get('phone')}`,`Event date: ${f.get('date')}`,`Event location: ${f.get('place')}`,`Service: ${f.get('service')}`,`Estimated guests: ${f.get('guests')||'Not specified'}`,`Details: ${f.get('notes')||'None'}`,'','Please let me know availability and the price.'].join('\n');window.open(wa(msg),'_blank','noopener,noreferrer')});
