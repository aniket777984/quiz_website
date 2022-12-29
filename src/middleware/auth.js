module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated() && !req.user.completed) {
      return next();
    } else if (req.user.completed) {
      res.render("finished");
    } else {
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (req.isAuthenticated()) {
      if (
        new Date().getTime() < new Date("dec 30, 2022 18:30:00 GMT+05:30").getTime()
      ) 
      {
        res.redirect("/dashboard");
      }
      else
      {
        res.redirect("/finish");
      }
    } else {
      return next();
    }
  },
};
