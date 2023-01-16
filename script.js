const left = document.getElementById("left");
const right = document.getElementById("right");

const carousel = document.getElementById("carousel");

count = 0;
left.addEventListener("click", function (e) {
    if (count > 0) {
        count--;
    }
    console.log("left" + count);
    if (count >= 0) {
      carousel.style.right = count * 94 + "vw";
  }
});
right.addEventListener("click", function (e) {
  if (count < 3) {
    count++;
  }

  if (count > 0 && count <= 2) {
    carousel.style.right = count * 94 + "vw";
  }
});




const watchList = document.getElementById("watch-list")
const watchLisItem = document.getElementById("watch-list-item")

watchList.addEventListener("click", function () {

    if (watchLisItem.style.visibility === "visible") {
        watchLisItem.style.visibility = "hidden"
    } else {
        watchLisItem.style.visibility = "visible"
    }
})
