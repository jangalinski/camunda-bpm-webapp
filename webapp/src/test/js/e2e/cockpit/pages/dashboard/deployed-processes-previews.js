'use strict';

var Base = require('./deployed-processes-plugin');

module.exports = Base.extend({

  tabLabel: 'Previews',

  previewsObject: function() {
    return this.pluginObject().element(by.css('.tile-grid'));
  },

  processesPreviews: function() {
    return this.previewsObject().all(by.repeater('statistic in statistics'));
  },

  selectProcess: function(item) {
    return this.processesList().get(item).element(by.binding('{{ statistic.definition.name }}')).click();
  }

});
