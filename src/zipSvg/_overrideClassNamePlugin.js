/* eslint-disable */
exports.type = 'full';
exports.active = true;
exports.fn = (data, params) => {
  if (!params || !(Array.isArray(params.classNames) && params.classNames.some(String) || params.className)) {
    return data;
  }

  var classNames = params.classNames || [params.className],
    svg = data.content[0];

  if (svg.isElem('svg')) {
    if (svg.hasAttr('class')) {
      var classes = [];
      classNames.forEach(function (className) {
        if (classes.indexOf(className) < 0) {
          classes.push(className);
        }
      });
      svg
        .attr('class')
        .value = classes.join(' ');
    } else {
      svg.addAttr({
        name: 'class',
        value: classNames.join(' '),
        prefix: '',
        local: 'class'
      });
    }
  }

  return data;

}
