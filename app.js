const products = [
  {id:1,name:'Apex Oversized Tee',category:'men',type:'T-Shirt',price:38,img:'assets/products/apex-oversized-tee.svg',badge:'BEST SELLER',sizes:['S','M','L','XL','XXL'],desc:'Heavyweight cotton-blend oversized tee with dropped shoulders and a clean training-to-street silhouette.'},
  {id:2,name:'Velocity Performance Tee',category:'men',type:'T-Shirt',price:34,img:'assets/products/velocity-performance-tee.svg',badge:'NEW',sizes:['S','M','L','XL','XXL'],desc:'Lightweight stretch training tee designed for breathability, mobility and high-output sessions.'},
  {id:3,name:'IronCore Tank',category:'men',type:'Tank',price:28,img:'assets/products/ironcore-tank.svg',sizes:['S','M','L','XL'],desc:'Athletic-cut tank with open armholes for unrestricted upper-body movement.'},
  {id:4,name:'Flex 5" Shorts',category:'men',type:'Shorts',price:42,img:'assets/products/flex-5-shorts.svg',badge:'POPULAR',sizes:['S','M','L','XL','XXL'],desc:'Five-inch training shorts with stretch fabric, secure pockets and a performance waistband.'},
  {id:5,name:'Flex 7" Shorts',category:'men',type:'Shorts',price:44,img:'assets/products/flex-7-shorts.svg',sizes:['S','M','L','XL','XXL'],desc:'Seven-inch versatile shorts built for lifting, conditioning and everyday movement.'},
  {id:6,name:'Alpha Joggers',category:'men',type:'Joggers',price:58,img:'assets/products/alpha-joggers.svg',sizes:['S','M','L','XL','XXL'],desc:'Tapered performance joggers with stretch comfort and clean ankle cuffs.'},
  {id:7,name:'Core Hoodie',category:'men',type:'Hoodie',price:68,img:'assets/products/core-hoodie.svg',badge:'NEW',sizes:['S','M','L','XL','XXL'],desc:'Premium training hoodie with a structured athletic fit and soft brushed interior.'},
  {id:8,name:'Compression Tee',category:'men',type:'Compression',price:36,img:'assets/products/compression-tee.svg',sizes:['S','M','L','XL'],desc:'Close-to-body performance top for layering, lifting and high-intensity training.'},
  {id:9,name:'Compression Shorts',category:'men',type:'Compression',price:34,img:'assets/products/compression-shorts.svg',sizes:['S','M','L','XL'],desc:'Supportive compression shorts with four-way stretch for training and recovery days.'},

  {id:10,name:'Sculpt Seamless Leggings',category:'women',type:'Leggings',price:64,img:'assets/products/sculpt-seamless-leggings.svg',badge:'BEST SELLER',sizes:['XS','S','M','L','XL'],desc:'High-rise seamless leggings designed for stretch, support and a smooth training fit.'},
  {id:11,name:'Elevate Sports Bra',category:'women',type:'Sports Bra',price:38,img:'assets/products/elevate-sports-bra.svg',sizes:['XS','S','M','L','XL'],desc:'Medium-support sports bra with a secure underband and comfortable training straps.'},
  {id:12,name:'Pulse Biker Shorts',category:'women',type:'Shorts',price:42,img:'assets/products/pulse-biker-shorts.svg',sizes:['XS','S','M','L','XL'],desc:'High-rise biker shorts with a supportive waistband and flexible seamless feel.'},
  {id:13,name:'Motion Crop Top',category:'women',type:'Crop Top',price:36,img:'assets/products/motion-crop-top.svg',badge:'NEW',sizes:['XS','S','M','L','XL'],desc:'Soft performance crop top with an athletic cut for studio, lifting and everyday wear.'},
  {id:14,name:'Essential Oversized Tee',category:'women',type:'T-Shirt',price:38,img:'assets/products/essential-oversized-tee.svg',sizes:['XS','S','M','L','XL'],desc:'Relaxed oversized tee with a premium cotton feel and effortless post-workout styling.'},
  {id:15,name:'Aura Zip Hoodie',category:'women',type:'Hoodie',price:72,img:'assets/products/aura-zip-hoodie.svg',badge:'NEW',sizes:['XS','S','M','L','XL'],desc:'Full-zip training hoodie with a flattering relaxed fit and soft everyday comfort.'},
  {id:16,name:'Shape Flare Leggings',category:'women',type:'Leggings',price:68,img:'assets/products/shape-flare-leggings.svg',sizes:['XS','S','M','L','XL'],desc:'High-rise flared leggings built for studio sessions, warmups and athleisure styling.'},
  {id:17,name:'Flex Sports Bra',category:'women',type:'Sports Bra',price:42,img:'assets/products/flex-sports-bra.svg',sizes:['XS','S','M','L','XL'],desc:'Supportive training bra with wider straps and a smooth, flexible performance fabric.'},

  {id:18,name:'Forge Trainer',category:'shoes',type:'Training Shoes',price:120,img:'assets/products/forge-trainer.svg',badge:'BEST SELLER',sizes:['7','8','9','10','11','12','13'],desc:'Stable cross-training shoe with a supportive heel platform and flexible forefoot.'},
  {id:19,name:'Nova Runner',category:'shoes',type:'Running Shoes',price:135,img:'assets/products/nova-runner.svg',badge:'NEW',sizes:['6','7','8','9','10','11','12'],desc:'Responsive daily running shoe designed for comfortable miles and gym cardio.'},
  {id:20,name:'Axis Lift',category:'shoes',type:'Lifting Shoes',price:125,img:'assets/products/axis-lift.svg',sizes:['7','8','9','10','11','12','13'],desc:'Firm, stable lifting shoe with a grounded platform for squats and strength sessions.'},
  {id:21,name:'Drift Everyday Trainer',category:'shoes',type:'Training Shoes',price:110,img:'assets/products/drift-everyday-trainer.svg',sizes:['6','7','8','9','10','11','12'],desc:'Versatile everyday trainer balancing cushioning, support and clean street-ready style.'},
  {id:22,name:'Aero Knit Runner',category:'shoes',type:'Running Shoes',price:130,img:'assets/products/aero-knit-runner.svg',sizes:['6','7','8','9','10','11','12'],desc:'Breathable knit running shoe with lightweight cushioning for treadmill and road sessions.'},

  {id:23,name:'Crew Performance Socks',category:'accessories',type:'Socks · 3 Pack',price:18,img:'assets/products/crew-performance-socks.svg',badge:'3 PACK',sizes:['S/M','L/XL'],desc:'Cushioned crew training socks with arch support and sweat-managing fabric.'},
  {id:24,name:'No-Show Training Socks',category:'accessories',type:'Socks · 3 Pack',price:16,img:'assets/products/no-show-training-socks.svg',badge:'3 PACK',sizes:['S/M','L/XL'],desc:'Low-profile training socks with breathable zones and heel grip.'},
  {id:25,name:'Apex Training Cap',category:'accessories',type:'Cap',price:28,img:'assets/products/apex-cap.svg',sizes:['One Size'],desc:'Lightweight training cap with adjustable closure and sweat-friendly inner band.'},
  {id:26,name:'Velocity Trucker Cap',category:'accessories',type:'Cap',price:30,img:'assets/products/velocity-trucker-cap.svg',sizes:['One Size'],desc:'Structured athletic trucker cap with breathable rear panels and adjustable fit.'},
  {id:27,name:'Pro Duffel 35L',category:'accessories',type:'Gym Bag',price:62,img:'assets/products/pro-duffel.svg',badge:'POPULAR',sizes:['35L'],desc:'Roomy gym duffel with shoe compartment, internal organization and durable handles.'},
  {id:28,name:'Mini Gym Bag 20L',category:'accessories',type:'Gym Bag',price:48,img:'assets/products/mini-gym-bag.svg',sizes:['20L'],desc:'Compact training bag sized for daily essentials, shoes and a change of clothes.'},
  {id:29,name:'Steel Shaker 24oz',category:'accessories',type:'Shaker',price:24,img:'assets/products/steel-shaker.svg',sizes:['24 oz'],desc:'Stainless-style shaker with secure lid and clean minimalist profile.'},
  {id:30,name:'Hydration Bottle 32oz',category:'accessories',type:'Bottle',price:26,img:'assets/products/hydration-bottle.svg',sizes:['32 oz'],desc:'Large training bottle with easy-grip body and leak-resistant cap.'},
  {id:31,name:'Lifting Straps',category:'accessories',type:'Lifting Gear',price:18,img:'assets/products/lifting-straps.svg',sizes:['One Size'],desc:'Durable lifting straps designed to support grip during pulling movements.'},
  {id:32,name:'Wrist Wraps',category:'accessories',type:'Lifting Gear',price:22,img:'assets/products/wrist-wraps.svg',sizes:['One Size'],desc:'Adjustable wrist wraps for added support during pressing and strength work.'},
  {id:33,name:'Training Gloves',category:'accessories',type:'Gloves',price:28,img:'assets/products/training-gloves.svg',sizes:['S','M','L','XL'],desc:'Padded training gloves with breathable backing and grippy palm zones.'},
  {id:34,name:'Power Lifting Belt',category:'accessories',type:'Lifting Gear',price:48,img:'assets/products/power-belt.svg',sizes:['S','M','L','XL'],desc:'Supportive lifting belt for strength training with an easy-adjust buckle system.'},
  {id:35,name:'Performance Gym Towel',category:'accessories',type:'Towel',price:20,img:'assets/products/gym-towel.svg',sizes:['One Size'],desc:'Soft, quick-drying gym towel sized for benches, cardio equipment and training bags.'},
  {id:36,name:'Performance Backpack 28L',category:'accessories',type:'Backpack',price:68,img:'assets/products/performance-backpack.svg',badge:'NEW',sizes:['28L'],desc:'Structured training backpack with laptop sleeve, bottle pockets and gym-ready storage.'}
];

let state = {filter:'all', search:'', sort:'featured', cart: JSON.parse(localStorage.getItem('kdCart') || '[]')};
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const money = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n);

function filteredProducts(){
  let list = products.filter(p => state.filter==='all' || p.category===state.filter)
    .filter(p => `${p.name} ${p.type}`.toLowerCase().includes(state.search.toLowerCase()));
  if(state.sort==='low') list.sort((a,b)=>a.price-b.price);
  if(state.sort==='high') list.sort((a,b)=>b.price-a.price);
  if(state.sort==='az') list.sort((a,b)=>a.name.localeCompare(b.name));
  return list;
}

function renderProducts(){
  const list = filteredProducts();
  $('#resultsCount').textContent = `${list.length} product${list.length===1?'':'s'}`;
  $('#productGrid').innerHTML = list.map(p => `
    <article class="product-card">
      <div class="product-image">
        <img loading="lazy" src="${p.img}" alt="${p.name}" />
        ${p.badge ? `<span class="badge">${p.badge}</span>`:''}
        <button class="quick-btn" data-quick="${p.id}">QUICK VIEW</button>
      </div>
      <div class="product-meta">
        <div class="product-topline"><div><div class="product-name">${p.name}</div><div class="product-category">${p.type}</div></div><div class="price">${money(p.price)}</div></div>
        <div class="product-actions"><button data-quick="${p.id}">Details</button><button class="add" data-add="${p.id}">Add to bag</button></div>
      </div>
    </article>`).join('') || '<p>No products match your search.</p>';
}

function setFilter(filter){
  state.filter = filter;
  $$('.filter').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));
  renderProducts();
  setTimeout(()=>$('#shop').scrollIntoView({behavior:'smooth',block:'start'}),50);
}

function saveCart(){localStorage.setItem('kdCart',JSON.stringify(state.cart)); renderCart();}
function addToCart(id,size='Default'){
  const p=products.find(x=>x.id===Number(id)); if(!p) return;
  const found=state.cart.find(x=>x.id===p.id && x.size===size);
  if(found) found.qty++; else state.cart.push({id:p.id,size,qty:1});
  saveCart(); showToast(`${p.name} added to bag`);
}
function renderCart(){
  const count=state.cart.reduce((s,i)=>s+i.qty,0); $('#cartCount').textContent=count;
  if(!state.cart.length){$('#cartItems').innerHTML='<div class="empty-cart"><strong>Your bag is empty.</strong><p>Add training essentials to get started.</p></div>'; $('#cartSubtotal').textContent='$0.00'; return;}
  let subtotal=0;
  $('#cartItems').innerHTML=state.cart.map((i,idx)=>{const p=products.find(x=>x.id===i.id); subtotal+=p.price*i.qty; return `
    <div class="cart-item"><img src="${p.img}" alt="${p.name}"><div><h4>${p.name}</h4><small>${i.size}</small><div class="qty"><button data-qty="${idx}" data-delta="-1">−</button><span>${i.qty}</span><button data-qty="${idx}" data-delta="1">+</button><button class="remove" data-remove="${idx}">Remove</button></div></div><strong>${money(p.price*i.qty)}</strong></div>`}).join('');
  $('#cartSubtotal').textContent=money(subtotal);
}
function openCart(){ $('#cartDrawer').classList.add('open'); $('#overlay').classList.add('show'); $('#cartDrawer').setAttribute('aria-hidden','false'); }
function closeCart(){ $('#cartDrawer').classList.remove('open'); $('#overlay').classList.remove('show'); $('#cartDrawer').setAttribute('aria-hidden','true'); }
function showToast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(window.toastTimer); window.toastTimer=setTimeout(()=>t.classList.remove('show'),2200); }

function openQuick(id){
  const p=products.find(x=>x.id===Number(id)); if(!p) return;
  $('#quickContent').innerHTML=`<div class="quick-grid"><img src="${p.img}" alt="${p.name}"><div class="quick-info"><div class="qcat">${p.category.toUpperCase()} / ${p.type.toUpperCase()}</div><h2>${p.name}</h2><div class="qprice">${money(p.price)}</div><p>${p.desc}</p><strong>SELECT SIZE</strong><div class="size-row">${p.sizes.map((s,i)=>`<button class="size-pill ${i===0?'selected':''}" data-size="${s}">${s}</button>`).join('')}</div><button class="btn btn-primary" data-modal-add="${p.id}">ADD TO BAG</button><p><small>Free U.S. shipping on orders $100+. 30-day return policy shown for store design purposes.</small></p></div></div>`;
  $('#quickView').showModal();
}

$('#productGrid').addEventListener('click',e=>{
  const q=e.target.closest('[data-quick]'); if(q) openQuick(q.dataset.quick);
  const a=e.target.closest('[data-add]'); if(a) addToCart(a.dataset.add, products.find(p=>p.id===Number(a.dataset.add)).sizes[0]);
});
$('#quickContent').addEventListener('click',e=>{
  if(e.target.matches('.size-pill')){$$('.size-pill').forEach(b=>b.classList.remove('selected')); e.target.classList.add('selected');}
  const a=e.target.closest('[data-modal-add]'); if(a){const size=$('.size-pill.selected')?.dataset.size || 'Default'; addToCart(a.dataset.modalAdd,size); $('#quickView').close(); openCart();}
});
$('#closeQuick').addEventListener('click',()=>$('#quickView').close());
$('#quickView').addEventListener('click',e=>{if(e.target===$('#quickView')) $('#quickView').close();});

$('#filters').addEventListener('click',e=>{if(e.target.dataset.filter) setFilter(e.target.dataset.filter)});
$$('[data-nav-category]').forEach(a=>a.addEventListener('click',()=>{setFilter(a.dataset.navCategory); $('#mobileMenu').classList.remove('open')}));
$$('[data-category-jump]').forEach(c=>c.addEventListener('click',()=>setFilter(c.dataset.categoryJump)));
$('#productSearch').addEventListener('input',e=>{state.search=e.target.value;renderProducts()});
$('#sortProducts').addEventListener('change',e=>{state.sort=e.target.value;renderProducts()});
$('#searchFocus').addEventListener('click',()=>{setFilter('all');setTimeout(()=>$('#productSearch').focus(),400)});
$('#openCart').addEventListener('click',openCart); $('#closeCart').addEventListener('click',closeCart); $('#overlay').addEventListener('click',closeCart);
$('#cartItems').addEventListener('click',e=>{
  if(e.target.dataset.qty!==undefined){const i=Number(e.target.dataset.qty),d=Number(e.target.dataset.delta); state.cart[i].qty+=d; if(state.cart[i].qty<=0) state.cart.splice(i,1); saveCart();}
  if(e.target.dataset.remove!==undefined){state.cart.splice(Number(e.target.dataset.remove),1); saveCart();}
});
$('#checkoutBtn').addEventListener('click',()=>showToast('Connect Shopify, Stripe or another checkout provider to accept payments.'));
$('#menuBtn').addEventListener('click',()=>$('#mobileMenu').classList.toggle('open'));
$('#adviceForm').addEventListener('submit',e=>{e.preventDefault(); $('#formNote').textContent='Thanks! This demo captured the form locally. Connect a form service or backend before launch.'; showToast('Advice request ready to connect'); e.target.reset();});
$('#newsletterForm').addEventListener('submit',e=>{e.preventDefault(); showToast('Newsletter form ready to connect'); e.target.reset();});

renderProducts(); renderCart();
