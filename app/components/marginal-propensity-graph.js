export default Ember.Component.extend({

  width: 940,
  margin: 0,

  graphWidth: function () {
    return this.get('width') - (this.get('margin') * 2);
  }.property('width', 'margin'),

  consumeBarWidth: function () {
    return this.get('graphWidth') * this.get('consume') / this.get('max')
  }.property('graphWidth', 'max', 'consume'),

});
