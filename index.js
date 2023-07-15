import dogs from "./data.js";
import Dog from "./Dog.js";

const dogData = [...dogs];
let isWaiting = false;

const getNewDog = (dogData) => {
  if (dogData.length > 0) {
    return new Dog(dogData.shift());
  } else {
    return new Dog(dogs[Math.floor(Math.random() * dogs.length)]);
  }
};

let currDog = getNewDog(dogData);

const handleLikeClick = () => {
  if (!isWaiting) {
    currDog.likeDog();
    render();
    isWaiting = true;
    currDog.hasBeenSwiped && 
      setTimeout(() => {
        currDog.reset();
        currDog = getNewDog(dogData);
        render();
        isWaiting = false;
      }, 1500);
  };
};

const handleDisLikeClick = () => {
  if (!isWaiting) {
    currDog.disLikeDog();
    render();
    isWaiting = true;
    currDog.hasBeenSwiped && 
      setTimeout(() => {
        currDog.reset();
        currDog = getNewDog(dogData);
        render();
        isWaiting = false;
      }, 1500);
  };
};

document.getElementById("like-btn").addEventListener("click", (currDog) => handleLikeClick(currDog));
document.getElementById("dislike-btn").addEventListener("click", (currDog) => handleDisLikeClick(currDog));

const render = () => {
  document.getElementById("main").innerHTML = currDog.getDog();
};

render();