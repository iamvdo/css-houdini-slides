registerAnimator('simple', class {
  animate(currentTime, effect) {
    effect.localTime = currentTime;
  }
});