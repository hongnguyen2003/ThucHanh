const contactController = (req, res, next) => {
    res.render("views/layouts/default", { title: "Home Page", data: { path: "views/contact", props: {} } });
};

export default contactController;