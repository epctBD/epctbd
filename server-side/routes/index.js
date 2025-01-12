const routes = {
  "/api/project": require("./project"),
  "/api/team-member": require("./team"),
  "/api/portfolio": require("./portfolio"),
  "/api/admin": require("./admin"),
  "/api/contact-us": require("./contact-us"),
  "/api/blog": require("./blogs"),
  "/api/book": require("./books"),
};

module.exports.registerApplicationRoutes = function (app) {
  for (let uri in routes) {
    app.use(uri, routes[`${uri}`]);
  }
};
