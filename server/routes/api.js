const employeeRoutes = require('./employee');

const routeConstructor = (app) => {
    app.use("/employee", employeeRoutes);
};

module.exports = routeConstructor;