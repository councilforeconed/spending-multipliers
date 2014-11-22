export default Ember.Component.extend({

  sumOfAmounts: function () {
    return this.get('amounts').reduce(function (sum, n) {
      return sum + n;
    }, 0);
  }.property('amounts')

});