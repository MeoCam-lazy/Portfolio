// Toggle menu khi click icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}
// Hiệu ứng gõ chữ từng ký tự
let text = "Hi, It's <br> KhoaNguyn"; 
let index = 0;
let displayText = "";
// Bắt đầu hiệu ứng khi load trang
function typeEffect() {
    if (index < text.length) {
        if (text[index] === "<" && text.substring(index, index + 4) === "<br>") {
            displayText += "<br>"; 
            index += 4; 
        } else {
            if ("KhoaNguyn".includes(text[index])) {
                displayText += `<span style="color: var(--main-color)">${text[index]}</span>`;
            } else {
                displayText += text[index];
            }
            index++;
        }
        document.getElementById("text").innerHTML = displayText;
        setTimeout(typeEffect, 400); 
    }
}
// Xử lý nút play/pause nhạc
window.onload = typeEffect;
const playButton = document.querySelector('.play-button');
const audioElement = document.querySelector('audio');
playButton.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        playButton.innerHTML = '<i class="bx bxs-volume-full"></i>';
    } else {
        audioElement.pause();
        playButton.innerHTML = '<i class="bx bxs-volume-mute"></i>';
    }
});
// Xử lý animation slide giới thiệu
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        let slide = document.getElementById("intro-slide");
        slide.style.animation = "slideOut 2s ease-in forwards";
        setTimeout(() => {
            document.querySelector(".content").style.display = "block";
        }, 1000);
    }, 2000); 
});
// Scroll nhẹ lên đầu trang sau khi load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 2000); 
});

// Hiệu ứng nhẹ cho chữ <span>Me</span> trong <h2>
const meSpan = document.querySelector('.about-content h2 span');

if (meSpan) {
  meSpan.style.background = 'linear-gradient(270deg, var(--main-color), var(--highlight-color), var(--sky-color), var(--main-color))';
  meSpan.style.backgroundSize = '600% 600%';
  meSpan.style.webkitBackgroundClip = 'text';
  meSpan.style.webkitTextFillColor = 'transparent';
  meSpan.style.animation = 'gradientShift 8s ease infinite';
}

//Hieu ung load div khi lan dau tai
const reveals = document.querySelectorAll('div');

function revealOnScroll() {
  reveals.forEach((div) => {
    const windowHeight = window.innerHeight;
    const revealTop = div.getBoundingClientRect().top;
    const revealPoint = 100; // khoảng cách so với bottom

    if (revealTop < windowHeight - revealPoint) {
      div.classList.add('active');
    } else {
      div.classList.remove('active'); // nếu muốn ẩn khi cuộn lên
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// gọi 1 lần để load luôn khi trang mở
revealOnScroll();

