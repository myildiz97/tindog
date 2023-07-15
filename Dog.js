export default class Dog {
  constructor(data) {
    Object.assign(this, data);
  };

  likeDog() {
    this.hasBeenSwiped = true;
    this.hasBeenLiked = true;
  };

  disLikeDog() {
    this.hasBeenSwiped = true;
    this.hasBeenLiked = false;
  };

  reset() {
    this.hasBeenSwiped = false;
    this.hasBeenLiked = false;
  };

  getDog() {
    return `
      <div id="hero">
        <img id="hero-img" src="${this.avatar}" alt=${this.name}>
        <div id="tag">
          ${this.hasBeenSwiped ? 
            this.hasBeenLiked ? `
            <div id="tag">
              <img src="/images/badge-like.png" alt="liked">
            </div>
          ` : `
            <div id="tag">
              <img src="/images/badge-nope.png" alt="liked">
            </div>
          ` : ""}
        </div>
        <div id="desc">
          <span>${this.name}, ${this.age}</span>
          <span>${this.bio}</span>
        </div>
      </div>
    `
  };
};