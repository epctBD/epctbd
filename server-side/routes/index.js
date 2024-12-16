const routes = {
  "/api/project": require("./project"),
  "/api/team-member": require("./team"),
  "/api/portfolio": require("./portfolio"),
  "/api/admin": require("./admin"),
  "/api/contact-us": require("./contact-us"),
};

module.exports.registerApplicationRoutes = function (app) {
  for (let uri in routes) {
    app.use(uri, routes[`${uri}`]);
  }
};
