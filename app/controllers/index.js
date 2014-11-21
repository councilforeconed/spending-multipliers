export default Ember.ObjectController.extend({

  sliderMinimum: 0,
  sliderMaximum: 100,
  sliderValue: 0,

  marginalPropensityToConsume: function () {
    return this.get('sliderValue');
  }.property('sliderValue'),

  marginalPropensityToSave: function () {
    return this.get('sliderMaximum') - this.get('marginalPropensityToConsume');
  }.property('marginalPropensityToConsume'),

});
