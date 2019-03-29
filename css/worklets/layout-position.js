registerLayout("position", class {
  static get inputProperties() {
    return [
        '--position-x',
    ];
  }
  *intrinsicSizes() {}
  *layout(children, edges, constraintSpace, props) {
    let posx = props.get('--position-x').value;
    let childFragments = [];
    for(let child of children) {
      let childFragment = yield child.layoutNextFragment();
      let childHalfSize = childFragment.inlineSize / 2;
      let parentHalfSize = constraintSpace.fixedInlineSize / (100 / posx);
      childFragment.inlineOffset = parentHalfSize - childHalfSize;
      childFragment.blockOffset = constraintSpace.fixedBlockSize / 2 - childFragment.blockSize / 2;
      childFragments.push(childFragment);
    }
    return {
      childFragments
    };
  }
});