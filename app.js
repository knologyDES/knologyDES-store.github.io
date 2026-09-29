const products = [
  {id:1,name:'Apex Oversized Tee',category:'men',type:'Oversized T-Shirt',price:40,img:'https://images.pexels.com/photos/15917309/pexels-photo-15917309.jpeg?auto=compress&cs=tinysrgb&w=900',badge:'BEST SELLER',sizes:['S','M','L','XL','XXL'],desc:'Heavyweight oversized gym tee with dropped shoulders and a clean training-to-street silhouette.'},
  {id:2,name:'Velocity Performance Tee',category:'men',type:'Performance T-Shirt',price:36,img:'https://images.pexels.com/photos/7293699/pexels-photo-7293699.jpeg?auto=compress&cs=tinysrgb&w=900',badge:'NEW',sizes:['S','M','L','XL','XXL'],desc:'Lightweight stretch training tee designed for breathability and high-output sessions.'},
  {id:3,name:'IronCore Tank',category:'men',type:'Tank Top',price:32,img:'https://images.pexels.com/photos/28758302/pexels-photo-28758302.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['S','M','L','XL'],desc:'Athletic-cut tank for unrestricted upper-body movement.'},
  {id:4,name:'Flex 5" Shorts',category:'men',type:'Training Shorts',price:26,img:'https://images.pexels.com/photos/5929231/pexels-photo-5929231.jpeg?auto=compress&cs=tinysrgb&w=900',badge:'POPULAR',sizes:['S','M','L','XL','XXL'],desc:'Five-inch training shorts with a performance waistband and lightweight feel.'},
  {id:5,name:'Flex 7" Shorts',category:'men',type:'Training Shorts',price:34,img:'https://images.pexels.com/photos/2468344/pexels-photo-2468344.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['S','M','L','XL','XXL'],desc:'Seven-inch versatile shorts built for lifting and conditioning.'},
  {id:6,name:'Alpha Joggers',category:'men',type:'Joggers',price:50,img:'https://images.pexels.com/photos/7690213/pexels-photo-7690213.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['S','M','L','XL','XXL'],desc:'Tapered performance joggers with stretch comfort and a clean athletic fit.'},
  {id:7,name:'Core Hoodie',category:'men',type:'Hoodie',price:60,img:'https://images.pexels.com/photos/17883716/pexels-photo-17883716.jpeg?auto=compress&cs=tinysrgb&w=900',badge:'NEW',sizes:['S','M','L','XL','XXL'],desc:'Premium training hoodie with a structured fit and soft interior.'},
  {id:8,name:'Compression Tee',category:'men',type:'Compression Top',price:36,img:'https://images.pexels.com/photos/15917306/pexels-photo-15917306.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['S','M','L','XL'],desc:'Close-to-body performance top for lifting and high-intensity training.'},
  {id:9,name:'Compression Shorts',category:'men',type:'Compression Shorts',price:34,img:'https://images.pexels.com/photos/6796973/pexels-photo-6796973.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['S','M','L','XL'],desc:'Supportive compression-style shorts with a flexible training fit.'},

  {id:10,name:'Sculpt Seamless Leggings',category:'women',type:'Leggings',price:38,img:'https://images.pexels.com/photos/6516177/pexels-photo-6516177.jpeg?auto=compress&cs=tinysrgb&w=900',badge:'BEST SELLER',sizes:['XS','S','M','L','XL'],desc:'High-rise seamless-style leggings designed for stretch, support and comfort.'},
  {id:11,name:'Elevate Sports Bra',category:'women',type:'Sports Bra',price:26,img:'https://images.pexels.com/photos/6572566/pexels-photo-6572566.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['XS','S','M','L','XL'],desc:'Medium-support sports bra with secure underband and training straps.'},
  {id:12,name:'Pulse Biker Shorts',category:'women',type:'Biker Shorts',price:28,img:'https://images.pexels.com/photos/3931303/pexels-photo-3931303.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['XS','S','M','L','XL'],desc:'High-rise biker shorts with a supportive waistband and flexible feel.'},
  {id:13,name:'Motion Crop Top',category:'women',type:'Crop Top',price:38,img:'https://images.pexels.com/photos/11121629/pexels-photo-11121629.jpeg?auto=compress&cs=tinysrgb&w=900',badge:'NEW',sizes:['XS','S','M','L','XL'],desc:'Soft performance crop top made for studio, lifting and everyday wear.'},
  {id:14,name:'Essential Oversized Tee',category:'women',type:'Oversized T-Shirt',price:38,img:'https://images.pexels.com/photos/3768603/pexels-photo-3768603.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['XS','S','M','L','XL'],desc:'Relaxed oversized tee with a premium casual training look.'},
  {id:15,name:'Aura Zip Hoodie',category:'women',type:'Zip Hoodie',price:66,img:'https://images.pexels.com/photos/3931222/pexels-photo-3931222.jpeg?auto=compress&cs=tinysrgb&w=900',badge:'NEW',sizes:['XS','S','M','L','XL'],desc:'Full-zip training hoodie with a relaxed athletic fit.'},
  {id:16,name:'Shape Flare Leggings',category:'women',type:'Flare Leggings',price:38,img:'https://images.pexels.com/photos/8846590/pexels-photo-8846590.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['XS','S','M','L','XL'],desc:'High-rise flare leggings for studio sessions and athleisure styling.'},
  {id:17,name:'Flex Sports Bra',category:'women',type:'Sports Bra',price:32,img:'https://images.pexels.com/photos/3855602/pexels-photo-3855602.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['XS','S','M','L','XL'],desc:'Supportive training bra with wider straps and flexible performance fabric.'},

  {id:18,name:'Forge Trainer',category:'shoes',type:'Training Shoes',price:145,img:'https://images.pexels.com/photos/1456737/pexels-photo-1456737.jpeg?auto=compress&cs=tinysrgb&w=900',badge:'BEST SELLER',sizes:['7','8','9','10','11','12','13'],desc:'Stable cross-training shoe with a grounded platform for strength work.'},
  {id:19,name:'Nova Runner',category:'shoes',type:'Running Shoes',price:150,img:'https://images.pexels.com/photos/4162552/pexels-photo-4162552.jpeg?auto=compress&cs=tinysrgb&w=900',badge:'NEW',sizes:['6','7','8','9','10','11','12'],desc:'Responsive daily running shoe for cardio, treadmill and road sessions.'},
  {id:20,name:'Axis Lift',category:'shoes',type:'Lifting Shoes',price:150,img:'https://images.pexels.com/photos/6740819/pexels-photo-6740819.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['7','8','9','10','11','12','13'],desc:'Firm lifting shoe with a stable base for strength sessions.'},
  {id:21,name:'Drift Everyday Trainer',category:'shoes',type:'Training Shoes',price:90,img:'https://images.pexels.com/photos/12745676/pexels-photo-12745676.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['6','7','8','9','10','11','12'],desc:'Versatile trainer balancing cushioning, support and everyday comfort.'},
  {id:22,name:'Aero Knit Runner',category:'shoes',type:'Running Shoes',price:145,img:'https://images.pexels.com/photos/6740822/pexels-photo-6740822.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['6','7','8','9','10','11','12'],desc:'Breathable running shoe designed for light, comfortable training miles.'},

  {id:23,name:'Crew Performance Socks',category:'accessories',type:'Socks · 3 Pack',price:20,img:'https://images.pexels.com/photos/6339694/pexels-photo-6339694.jpeg?auto=compress&cs=tinysrgb&w=900',badge:'3 PACK',sizes:['S/M','L/XL'],desc:'Cushioned crew training socks with arch support.'},
  {id:24,name:'No-Show Training Socks',category:'accessories',type:'Socks · 3 Pack',price:16,img:'https://images.pexels.com/photos/6740819/pexels-photo-6740819.jpeg?auto=compress&cs=tinysrgb&w=900',badge:'3 PACK',sizes:['S/M','L/XL'],desc:'Low-profile training socks with breathable zones.'},
  {id:25,name:'Apex Training Cap',category:'accessories',type:'Cap',price:28,img:'https://images.pexels.com/photos/16976087/pexels-photo-16976087.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['One Size'],desc:'Lightweight training cap with adjustable closure.'},
  {id:26,name:'Velocity Trucker Cap',category:'accessories',type:'Cap',price:30,img:'https://images.pexels.com/photos/31097315/pexels-photo-31097315.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['One Size'],desc:'Structured athletic cap with a breathable training look.'},
  {id:27,name:'Pro Duffel 35L',category:'accessories',type:'Gym Bag',price:62,img:'https://images.pexels.com/photos/4943933/pexels-photo-4943933.jpeg?auto=compress&cs=tinysrgb&w=900',badge:'POPULAR',sizes:['35L'],desc:'Roomy gym duffel for shoes, clothing and daily training essentials.'},
  {id:28,name:'Mini Gym Bag 20L',category:'accessories',type:'Gym Bag',price:48,img:'https://images.pexels.com/photos/4943933/pexels-photo-4943933.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['20L'],desc:'Compact training bag sized for everyday essentials.'},
  {id:29,name:'Steel Shaker 24oz',category:'accessories',type:'Shaker',price:24,img:'https://images.pexels.com/photos/28455328/pexels-photo-28455328.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['24 oz'],desc:'Durable shaker bottle for protein and hydration.'},
  {id:30,name:'Hydration Bottle 32oz',category:'accessories',type:'Bottle',price:26,img:'https://images.pexels.com/photos/4720533/pexels-photo-4720533.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['32 oz'],desc:'Large training bottle with easy-grip body.'},
  {id:31,name:'Lifting Straps',category:'accessories',type:'Lifting Gear',price:20,img:'https://images.pexels.com/photos/6740822/pexels-photo-6740822.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['One Size'],desc:'Durable lifting straps designed to support grip during pulling movements.'},
  {id:32,name:'Wrist Wraps',category:'accessories',type:'Lifting Gear',price:26,img:'https://images.pexels.com/photos/6339694/pexels-photo-6339694.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['One Size'],desc:'Adjustable wrist wraps for added support during pressing and strength work.'},
  {id:33,name:'Training Gloves',category:'accessories',type:'Gloves',price:28,img:'https://images.pexels.com/photos/6796973/pexels-photo-6796973.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['S','M','L','XL'],desc:'Padded training gloves with grip support.'},
  {id:34,name:'Power Lifting Belt',category:'accessories',type:'Lifting Gear',price:48,img:'https://images.pexels.com/photos/10754973/pexels-photo-10754973.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['S','M','L','XL'],desc:'Supportive lifting belt for strength training.'},
  {id:35,name:'Performance Gym Towel',category:'accessories',type:'Towel',price:20,img:'https://images.pexels.com/photos/4943933/pexels-photo-4943933.jpeg?auto=compress&cs=tinysrgb&w=900',sizes:['One Size'],desc:'Soft, quick-drying gym towel for training sessions.'},
  {id:36,name:'Performance Backpack 28L',category:'accessories',type:'Backpack',price:68,img:'https://images.pexels.com/photos/16976087/pexels-photo-16976087.jpeg?auto=compress&cs=tinysrgb&w=900',badge:'NEW',sizes:['28L'],desc:'Structured training backpack with room for daily gym gear.'}
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
        <img loading="lazy" src="${p.img}" alt="${p.name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='assets/knologydes-logo.jpg'" />
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
    <div class="cart-item"><img src="${p.img}" alt="${p.name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='assets/knologydes-logo.jpg'"><div><h4>${p.name}</h4><small>${i.size}</small><div class="qty"><button data-qty="${idx}" data-delta="-1">−</button><span>${i.qty}</span><button data-qty="${idx}" data-delta="1">+</button><button class="remove" data-remove="${idx}">Remove</button></div></div><strong>${money(p.price*i.qty)}</strong></div>`}).join('');
  $('#cartSubtotal').textContent=money(subtotal);
}
function openCart(){ $('#cartDrawer').classList.add('open'); $('#overlay').classList.add('show'); $('#cartDrawer').setAttribute('aria-hidden','false'); }
function closeCart(){ $('#cartDrawer').classList.remove('open'); $('#overlay').classList.remove('show'); $('#cartDrawer').setAttribute('aria-hidden','true'); }
function showToast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(window.toastTimer); window.toastTimer=setTimeout(()=>t.classList.remove('show'),2200); }

function openQuick(id){
  const p=products.find(x=>x.id===Number(id)); if(!p) return;
  $('#quickContent').innerHTML=`<div class="quick-grid"><img src="${p.img}" alt="${p.name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='assets/knologydes-logo.jpg'"><div class="quick-info"><div class="qcat">${p.category.toUpperCase()} / ${p.type.toUpperCase()}</div><h2>${p.name}</h2><div class="qprice">${money(p.price)}</div><p>${p.desc}</p><strong>SELECT SIZE</strong><div class="size-row">${p.sizes.map((s,i)=>`<button class="size-pill ${i===0?'selected':''}" data-size="${s}">${s}</button>`).join('')}</div><button class="btn btn-primary" data-modal-add="${p.id}">ADD TO BAG</button><p><small>Free U.S. shipping on orders $100+. 30-day return policy shown for store design purposes.</small></p></div></div>`;
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
