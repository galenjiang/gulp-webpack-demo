
require("../css/app.scss");
require.ensure([], function(require) {
  var a = require("./core/a").a;
  a()
});     

require.ensure([], function(require) {
  var b = require("./core/b").b;
  b()

});
