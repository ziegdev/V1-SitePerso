

const mainController = {
    HomePage: function (req, res) {
        res.render('../views/HomePage.ejs');
    },
    CareerStory: function (req,res) {
        res.render('../views/CareerStory.ejs');
    }
};

module.exports = mainController;