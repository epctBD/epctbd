const routes = {
  "/api/project": require("./project"),
  "/api/team-member": require("./team"),
  "/api/admin": require("./admin"),
};

module.exports.registerApplicationRoutes = function (app) {
  for (let uri in routes) {
    app.use(uri, routes[`${uri}`]);
  }
};
