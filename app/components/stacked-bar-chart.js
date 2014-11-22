export default Ember.Component.extend({

  width: 940,
  height: 60,

  viewBox: function () {
    return "0 0 %@ %@".fmt(940, 60);
  }.property('height', 'width'),

  sumOfAmounts: function () {
    return this.get('amounts').reduce(function (sum, n) {
      return sum + n;
    }, 0);
  }.property('amounts'),

  amountsForGraph: function () {
    var offset = 0;
    var colors = this.get('colors');
    return this.get('amounts').map(function (amount, index) {
      var bar = Ember.Object.create({
        value: amount,
        offset: offset,
        fill: colors[index % colors.length]
      });
      offset = offset + amount;
      return bar;
    }.bind(this));
  }.property('amounts', 'sumOfAmounts', 'width'),

  colors: [
    'rgb(182, 221, 211)',
    'rgb(86, 185, 197)',
    'rgb(227, 117, 54)',
    'rgb(248, 212, 58)',
    'rgb(255, 245, 213)',
    'rgb(196, 51, 49)',
    'rgb(101, 71, 42)',
    'rgb(198, 93, 221)',
    'rgb(48, 97, 88)',
    'rgb(116, 169, 73)',
    'rgb(153, 201, 135)',
    'rgb(16, 80, 143)',
    'rgb(94, 138, 185)'
  ],
});