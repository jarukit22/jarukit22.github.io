const canvas = document.getElementById("universe");
const ctx = canvas.getContext("2d");

function getCSSVariable(name) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const stars = [];
const numStars = 300;
const speedFactor = 1; // ปรับความเร็วได้

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.5 * speedFactor,
    dy: (Math.random() - 0.5) * 0.5 * speedFactor,
  });
}

function drawStars() {
  // พื้นหลังสีดำ
  const bgColor = getCSSVariable("--bg-color");
  const starColor = getCSSVariable("--accent-blue");
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = starColor;
    ctx.fill();

    // เคลื่อนไหว
    star.x += star.dx;
    star.y += star.dy;

    // ถ้าหลุดขอบ ให้วนกลับ
    if (star.x < 0) star.x = width;
    if (star.x > width) star.x = 0;
    if (star.y < 0) star.y = height;
    if (star.y > height) star.y = 0;

    // ระยิบระยับเล็กน้อย
    star.radius += (Math.random() - 0.5) * 0.05;
    star.radius = Math.max(0.5, Math.min(2, star.radius));
  });

  requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
