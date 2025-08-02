const canvas = document.getElementById("luckyWheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");

const segments = [
  { text: "Prize A", color: "#FFD700" },
  { text: "Prize B", color: "#ADFF2F" },
  { text: "Prize C", color: "#87CEEB" },
  { text: "Try Again", color: "#FF6347" },
  { text: "Prize D", color: "#DA70D6" },
  { text: "Prize E", color: "#F0E68C" },
];

const segmentAngle = (2 * Math.PI) / segments.length;
let currentRotation = 0;

function drawWheel() {
  segments.forEach((segment, index) => {
    const startAngle = index * segmentAngle;
    const endAngle = (index + 1) * segmentAngle;

    ctx.beginPath();
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2,
      startAngle,
      endAngle
    );
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.closePath();
    ctx.fillStyle = segment.color;
    ctx.fill();

    // Draw text
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(startAngle + segmentAngle / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(segment.text, canvas.width / 2 - 20, 10);
    ctx.restore();
  });
}

function spinWheel() {
  spinBtn.disabled = true;
  const randomDegrees = Math.floor(Math.random() * 360) + 3600; // Spin multiple rotations
  currentRotation += randomDegrees;
  canvas.style.transform = `rotate(${currentRotation}deg)`;

  // Determine winning segment after spin animation
  setTimeout(() => {
    const finalAngle = currentRotation % 360;
    const winningIndex = Math.floor(
      (360 - finalAngle) / (360 / segments.length)
    );
    alert(`You won: ${segments[winningIndex].text}!`);
    spinBtn.disabled = false;
  }, 4000); // Matches CSS transition duration
}

drawWheel();
spinBtn.addEventListener("click", spinWheel);
