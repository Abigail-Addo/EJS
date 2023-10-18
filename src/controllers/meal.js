const knex = require('../config/db')

const mealController = {
    landingPage: async (req, res) => {
        try {

            let usr = req.query.username;

            if (!usr) {
                res.redirect('/login');
            } else {
                let cuisine = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Pescetarian'];

                const meals = await knex('meal').select('*').orderBy('id', 'desc');
                console.log(meals);

                if (!meals) {
                    res.render('pages/notFound', {
                        title: "Not Found",
                        user: usr,
                    });
                }

                res.render('pages/home', {
                    title: "Home",
                    user: usr,
                    kitchen: cuisine,
                    meal: meals
                });
            }
        } catch (err) {
            console.log(err);
        }
    },

    getMeal: (req, res) => {
        res.render('pages/meal', {
            title: "Meal",
        });
    },

    deleteMeal: (req, res) => {
        res.render('pages/meal', {
            title: "Meal",
        });
    }

};


module.exports = mealController;