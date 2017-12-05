
exports.type = 'perItem';
exports.active = true;
exports.fn = (item) => {
  if (item.isElem('polygon')) {
    const stroke = item.computedAttr('stroke');
    const strokeWidth = parseFloat(item.computedAttr('stroke-width'));
    if(
      (stroke === '#000000' || stroke === '#000')
      && (strokeWidth && strokeWidth < 1)
    ) {
      return false;
    }
  }

  return item;
};
