export default Ember.Component.extend({

  width: 940,
  margin: 0,

  graphWidth: function () {
    return 940 - (this.get('margin') * 2);
  }.property('width', 'margin'),

  consumeBarWidth: function () {
    return 940 * this.get('consume') / this.get('max')
  }.property('graphWidth', 'max', 'consume'),

});
