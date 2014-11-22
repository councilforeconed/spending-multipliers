import Round from 'appkit/models/round';

export default Ember.ArrayController.extend({

  startingAmount: 1000,
  sliderMinimum: 0,
  sliderMaximum: 100,
  sliderValue: 66,

  marginalPropensityToConsume: function () {
    return this.get('sliderValue');
  }.property('sliderValue'),

  marginalPropensityToSave: function () {
    return this.get('sliderMaximum') - this.get('marginalPropensityToConsume');
  }.property('marginalPropensityToConsume'),

  dollarAmounts: function () {
    var divisor = this.get('sliderMaximum');
    var marginalPropensityToConsume = this.get('marginalPropensityToConsume');
    return this.get('content').map(function (round, index) {
      var amount = this.get('startingAmount');
      for (var i = 0; i < index; i++) {
        amount = amount * marginalPropensityToConsume / divisor;
      }
      return amount;
    }.bind(this));
  }.property('content.[]', 'startingAmount', 'marginalPropensityToConsume', 'sliderMinimum'),

  actions: {
    addRound: function () {
      var rounds = this.get('content');
      rounds.addObject(Round.create({ number: rounds.length }));
    }
  }
});
