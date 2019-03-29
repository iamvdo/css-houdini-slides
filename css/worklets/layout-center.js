registerLayout("center", class {
  *intrinsicSizes() {}
  *layout(children, edges, constraintSpace, props) {
    let childFragments = [];
    for(let child of children) {
      let childFragment = yield child.layoutNextFragment();
      let childHalfSize = childFragment.inlineSize / 2;
      let parentHalfSize = constraintSpace.fixedInlineSize / 2;
      childFragment.inlineOffset = parentHalfSize - childHalfSize;
      childFragment.blockOffset = constraintSpace.fixedBlockSize / 2 - childFragment.blockSize / 2;
      childFragments.push(childFragment);
    }
    return {
      childFragments
    };
  }
});