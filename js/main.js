/* SanteShop Global Engine — rebuilt interaction layer */
const storyVideos=["assets/videos/story-01.mp4","assets/videos/story-02.mp4","assets/videos/story-03.mp4","assets/videos/story-04.mp4","assets/videos/story-05.mp4"];
const toastMessages=["🛒 22+ Product Buyers","💼 18+ People Interested in the Business","👥 10+ New Visitors","💬 10+ People Asking for Contact","❤️ 15+ New Engagements","📦 16+ People Interested in Packages"];
const toast=document.getElementById("toast");
function showToast(message){if(!toast)return;toast.textContent=message;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),3200)}
setTimeout(()=>showToast("🌿 Welcome! Explore the new product collection."),2500);
let toastIndex=0;setInterval(()=>{showToast(toastMessages[toastIndex%toastMessages.length]);toastIndex++},9000);
const storyModal=document.getElementById("storyModal");
const storyVideo=document.getElementById("storyVideo");
const storyTitle=document.getElementById("storyModalTitle");
function openStory(index){if(!storyModal||!storyVideo)return;storyTitle.textContent="Santé Story "+String(index+1).padStart(2,"0");const url=storyVideos[index];storyVideo.innerHTML=url?'<video src="'+url+'" controls autoplay playsinline></video>':'<div class="story-placeholder">Story video coming soon.</div>';storyModal.classList.add("open");storyModal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeStory(){if(!storyModal)return;storyModal.classList.remove("open");storyModal.setAttribute("aria-hidden","true");storyVideo.innerHTML="";document.body.style.overflow=""}
document.querySelectorAll(".story-card[data-story]").forEach(card=>card.addEventListener("click",()=>openStory(Number(card.dataset.story))));
document.getElementById("storyClose")?.addEventListener("click",closeStory);
storyModal?.addEventListener("click",e=>{if(e.target===storyModal)closeStory()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeStory()});
const wellnessMain=document.querySelector(".wellness-main");
const wellnessThumbs=[...document.querySelectorAll(".wellness-thumb")];
wellnessThumbs.forEach((button,index)=>button.addEventListener("click",()=>{if(wellnessMain)wellnessMain.src=button.dataset.image;wellnessThumbs.forEach((b,i)=>b.classList.toggle("active",i===index))}));
if(wellnessMain&&wellnessThumbs.length>1){let wi=0;setInterval(()=>{wi=(wi+1)%wellnessThumbs.length;wellnessMain.src=wellnessThumbs[wi].dataset.image;wellnessThumbs.forEach((b,i)=>b.classList.toggle("active",i===wi))},4000)}
const yannahMainImage=document.getElementById("yannahMainImage");
const yannahThumbs=[...document.querySelectorAll(".yannah-thumb")];
yannahThumbs.forEach((button,index)=>{button.style.backgroundImage='url("'+button.dataset.image+'")';button.addEventListener("click",()=>{if(yannahMainImage)yannahMainImage.src=button.dataset.image;yannahThumbs.forEach((b,i)=>b.classList.toggle("active",i===index))})});
if(yannahMainImage&&yannahThumbs.length>1){let yi=0;setInterval(()=>{yi=(yi+1)%yannahThumbs.length;yannahMainImage.src=yannahThumbs[yi].dataset.image;yannahThumbs.forEach((b,i)=>b.classList.toggle("active",i===yi))},3000)}
const inquiryForm=document.querySelector(".contact-form");
inquiryForm?.querySelector("button")?.addEventListener("click",()=>showToast("💚 Thanks! Your inquiry is ready for the next connection step."));
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",()=>closeStory()));
console.log("SanteShop Global Engine rebuilt and loaded 🚀");

/* Original 95(3) Chat With Us widget */
(()=>{
  const css=`
.chat-fab{position:fixed;right:22px;bottom:22px;z-index:10230;border:0;background:#087f45;color:#fff;padding:16px 20px;border-radius:999px;font-weight:1000;box-shadow:0 18px 40px #087f4550;cursor:pointer}
.chat-panel{position:fixed;right:22px;bottom:82px;width:320px;z-index:10229;background:#fff;border:1px solid #dcefe4;border-radius:22px;box-shadow:0 25px 70px #173b2740;padding:14px;display:none}.chat-panel.open{display:block}.chat-panel h3{margin:5px 8px 12px;color:#102018}.chat-option{display:block;padding:14px;border-radius:14px;background:#f4faf6;margin:8px 0;font-weight:800;border:0;width:100%;text-align:left;cursor:pointer;color:#102018}.chat-option:hover{background:#e2f5e9;color:#087f45}.chat-order-help,.leslie-inline-options{display:none}.chat-order-help.is-open,.leslie-inline-options.is-open{display:block}.chat-order-step{padding:10px 12px;border-radius:12px;background:#f8fcf9;margin:7px 0}.chat-order-step b,.chat-order-step span{display:block}.chat-order-step b{color:#087f45;font-size:13px}.chat-order-step span{font-size:12px;color:#53645b;margin-top:3px}.chat-shop-link{display:block;width:100%;border:0;border-radius:999px;background:#087f45;color:#fff;padding:12px;font-weight:800;cursor:pointer;margin-top:10px}.leslie-inline-options a{display:flex;gap:10px;align-items:center;padding:10px 12px;margin:6px 0;border-radius:12px;background:#f4faf6}.leslie-inline-options small{display:block;color:#68776f;font-weight:500}.chat-fab:hover{background:#066f3e}@media(max-width:600px){.chat-panel{right:12px;left:12px;width:auto}.chat-fab{right:14px;bottom:14px;padding:14px 18px}}
`;
  const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);
  if(document.getElementById('chat')||document.querySelector('.chat-fab'))return;
  document.body.insertAdjacentHTML('beforeend',`<button class="chat-fab" id="chatFab95" type="button">💬 Chat with us</button><div class="chat-panel" id="chat"><h3>How can we help?</h3><button class="chat-option chat-order-toggle" type="button" aria-expanded="false">🛒 How to order</button><div class="chat-order-help" id="chatOrderHelp"><div class="chat-order-step"><b>01 — Choose Your Product</b><span>Browse our Santé wellness products and choose what fits your needs.</span></div><div class="chat-order-step"><b>02 — Confirm Your Order</b><span>We'll assist you with your order details, payment, and delivery.</span></div><div class="chat-order-step"><b>03 — Get your Barley products 📦</b><span>Sit back and wait for your order to arrive.</span></div><button class="chat-shop-link" id="chatShop" type="button">🛍️ Click here to shop →</button></div><button class="chat-option" id="chatDistributor" type="button">🚀 How to become Distributor</button><button class="chat-option" id="chatDiscount" type="button">🏷️ How to get discounts</button><button class="chat-option chat-leslie-toggle" type="button" aria-expanded="false">💬 Talk to Leslie</button><div class="leslie-inline-options" id="leslieInlineOptions"><a href="tel:09393401974"><span>📞</span><span><b>Call Now</b><small>09393401974</small></span></a><a href="https://m.me/lesliecastroicalla" target="_blank" rel="noopener"><span>💬</span><span><b>Messenger</b><small>Message Leslie directly</small></span></a></div></div>`);
  const chat=document.getElementById('chat'),fab=document.getElementById('chatFab95'),order=document.getElementById('chatOrderHelp'),orderBtn=document.querySelector('.chat-order-toggle'),leslie=document.getElementById('leslieInlineOptions'),leslieBtn=document.querySelector('.chat-leslie-toggle');
  fab.onclick=()=>chat.classList.toggle('open');
  orderBtn.onclick=()=>{const open=order.classList.toggle('is-open');orderBtn.setAttribute('aria-expanded',open)};
  leslieBtn.onclick=()=>{const open=leslie.classList.toggle('is-open');leslieBtn.setAttribute('aria-expanded',open)};
  document.getElementById('chatShop').onclick=()=>{chat.classList.remove('open');document.querySelector('#products')?.scrollIntoView({behavior:'smooth'})};
  document.getElementById('chatDiscount').onclick=()=>{chat.classList.remove('open');document.querySelector('#packages')?.scrollIntoView({behavior:'smooth'})};
  document.getElementById('chatDistributor').onclick=()=>{chat.classList.remove('open');document.querySelector('#start')?.scrollIntoView({behavior:'smooth'})};
  document.addEventListener('click',e=>{if(chat.classList.contains('open')&&!chat.contains(e.target)&&!fab.contains(e.target))chat.classList.remove('open')});
})();
