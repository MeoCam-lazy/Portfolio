const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const box = 20;
const canvasSize = 400;
let snake = [{ x: 10 * box, y: 10 * box }];
function generateFruit() {
  let newFruit;
  let isOnSnake;
  do {
    isOnSnake = false;
    newFruit = {
      x: Math.floor(Math.random() * 20) * box,
      y: Math.floor(Math.random() * 20) * box
    };
    for (let part of snake) {
      if (part.x === newFruit.x && part.y === newFruit.y) {
        isOnSnake = true;
        break;
      }
    }
  } while (isOnSnake);
  return newFruit;
}


let fruit = generateFruit();

let direction = "";
let score = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
});


function drawGame() {


  // Di chuyển rắn
let head = { x: snake[0].x, y: snake[0].y };
  if (direction === "UP") head.y -= box;
  if (direction === "DOWN") head.y += box;
  if (direction === "LEFT") head.x -= box;
  if (direction === "RIGHT") head.x += box;

  // Thêm đầu rắn vào mảng
  snake.unshift(head);

  // Nếu ăn mồi thì tăng điểm, không thì xóa đuôi
  if (head.x === fruit.x && head.y === fruit.y) {
    score += 10;
    fruit = generateFruit();
  } else {
    snake.pop();
  }

  // Xử lý va chạm tường
  if (head.x < -0 || head.x >= canvasSize || head.y < -0 || head.y >= canvasSize) {
    clearInterval(game);
    alert(`Game Over! Your Score: ${score}`);
    location.reload();
  }

  // Xử lý va chạm chính nó
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === head.x && snake[i].y === head.y) {
      clearInterval(game);
      alert(`Game Over! Your Score: ${score}`);
      location.reload();
    }
  }
  // Vẽ khung nền
  ctx.fillStyle = "#1e1e1e";
  ctx.fillRect(0, 0, canvasSize, canvasSize);

  

  // Vẽ rắn
  for (let i = 0; i < snake.length; i++) {
  ctx.fillStyle = i === 0 ? "#00FF00" : "#00CC00";
  ctx.fillRect(snake[i].x, snake[i].y, box, box);
}

  
  // Vẽ mồi
  ctx.fillStyle = "red";
  ctx.fillRect(fruit.x, fruit.y, box, box);

  // Hiển thị điểm
  ctx.fillStyle = "white";
  ctx.font = "20px Poppins";
  ctx.fillText(`Score: ${score}`, box, box * 1.5);
}

  let game = setInterval(drawGame, 100);
