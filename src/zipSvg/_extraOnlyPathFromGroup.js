const _ = require('lodash');

exports.type = 'perItem';
exports.active = true;
exports.fn = (item) => {
  if (item.isElem('g')) {
    if (item.content.length) {
      const pathItems = _.filter(item.content, child => child.isElem('path'));
      if (pathItems.length === 1) {
        _.merge(item, pathItems[0]);
        item.content = [];

        return item;
      }
    }
  }

  if (item.isElem('polygon')) {
    return false;
  }

  return item;
};
