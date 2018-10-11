const employeeRoutes = require('./employee');

const routeConstructor = (app) => {
    app.use("/employee", employeeRoutes);

    // Base API stops working
    // app.use("*", (req, res) => {
    //     res.sendStatus(404);
    // })
};

module.exports = routeConstructor;