registerAnimator('parallax', class {
  constructor(options = {}) {
    this.factor = options.factor || 1;
  }
  animate(currentTime, effect) {
    effect.localTime = currentTime * this.factor;
  }
  destroy() {
    return {
      factor: this.factor
    }
  }
});