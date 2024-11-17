const aboutController = (req, res, next) => {
    console.log("About Controller");    
    
    res.render("views/layouts/default", { title: "Home Page", data: { path: "views/about", props: {} } });
};

export default aboutController;