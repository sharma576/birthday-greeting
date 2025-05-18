function showSurprise() {
  document.getElementById("surprise").style.display = "block";
  startConfetti();
}

function startConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 100 + 10,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
    tilt: Math.random() * 10 - 5,
    tiltAngle: 0
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.fillStyle = c.color;
      ctx.ellipse(c.x, c.y, c.r, c.r / 2, c.tilt, 0, Math.PI * 2);
      ctx.fill();
    });
    update();
    requestAnimationFrame(draw);
  }

  function update() {
    confetti.forEach(c => {
      c.y += Math.cos(c.d) + 1 + c.r / 2;
      c.tiltAngle += 0.05;
      c.tilt = Math.sin(c.tiltAngle) * 10;

      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  draw();
}
