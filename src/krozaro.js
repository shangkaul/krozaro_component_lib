let ratingStar1 = document.getElementById("star-1");
let ratingStar2 = document.getElementById("star-2");
let ratingStar3 = document.getElementById("star-3");
let ratingStar4 = document.getElementById("star-4");
let ratingStar5 = document.getElementById("star-5");
let ratingReset = document.getElementById("rating-reset")

let starList=[ ratingStar1,ratingStar2,ratingStar3,ratingStar4,ratingStar5]

const fillStar = (i) => {
    let iterator = 0;

  // This would color the stars
  for (iterator = 0; iterator < i; iterator++) {
    starList[iterator].setAttribute("style", "color: var(--color-primary)");
  }

  // This would remove the color from stars
  while (iterator != 5) {
    starList[iterator].setAttribute("style", "color: unset");
    iterator++;
  }
}

ratingStar1.addEventListener("click",()=>fillStar(1));
ratingStar2.addEventListener("click",()=>fillStar(2));
ratingStar3.addEventListener("click",()=>fillStar(3));
ratingStar4.addEventListener("click",()=>fillStar(4));
ratingStar5.addEventListener("click",()=>fillStar(5));
ratingReset.addEventListener("click",()=>fillStar(0));
