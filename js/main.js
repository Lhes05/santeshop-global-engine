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
function openStory(index){
  if(!storyModal||!storyVideo)return;
  storyTitle.textContent="Santé Story "+String(index+1).padStart(2,"0");
  const url=storyVideos[index];
  storyVideo.innerHTML=url?'<video src="'+url+'" controls autoplay playsinline></video>':'<div class="story-placeholder">Story video coming soon.</div>';
  storyModal.classList.add("open");storyModal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
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
