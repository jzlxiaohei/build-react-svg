
exports.type = 'perItem';
exports.active = true;
exports.fn = (item) => {
  if (item.isElem('polygon')) {
    const stroke = item.computedAttr('stroke') || '#000';
    const strokeWidth = parseFloat(item.computedAttr('stroke-width')) || 0;
    if(
      (stroke === '#000000' || stroke === '#000')
      && strokeWidth < 1
    ) {
      return false;
    }
  }


  return item;
};
