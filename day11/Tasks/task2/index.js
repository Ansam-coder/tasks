let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let img = new Image();
img.src = "./img.jpg";
img.onload = function () {
  ctx.drawImage(img, 0, 0, 500, 500);
  ctx.fillStyle = "white";
  ctx.font = "bold 13px Verdana";
  ctx.fillStyle = "white";
  ctx.fillText(
    "Hello!",
    10,
    480
  );
};
