export default Ember.Component.extend({

  tagName: 'rect',
  attributeBindings: ['width', 'height', 'x', 'y', 'fill'],

  x: function () {
    return this.get('offset') / this.get('sum') * 940;
  }.property('amount', 'offset', 'sum', 'totalWidth'),
  y: 0,

  width: function () {
    var amount = this.get('amount');
    var sum = this.get('sum');
    return amount / sum * 940;
  }.property('amount', 'sum', 'totalWidth'),

  height: 60

});