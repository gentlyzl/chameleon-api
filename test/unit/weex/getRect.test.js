require('../../vm/weex/index');
var cml = require('../../.api/weex/index')["default"];
var expect = require('chai').expect;

describe('获得节点元素信息', function () {
  it('getRect: 获得节点元素信息', function () {
    return cml.getRect({ weexRef: {} }).then(function (res) {
      expect(res.width).to.match(/\d+/);
      expect(res.height).to.match(/\d+/);
      expect(res.top).to.match(/\d+/);
      expect(res.bottom).to.match(/\d+/);
      expect(res.left).to.match(/\d+/);
      expect(res.right).to.match(/\d+/);
    })
  })
})
