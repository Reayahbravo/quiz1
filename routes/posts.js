// When creating a new file, you will have to
// re-require whatever that this file needs even
// if these module are already required "app.js"
// or any other files.
const express = require("express");
const knex = require("../db/client");
// When building routes in seperate files from "app.js",
// we express.Router() to generate a route instance of
// express() to create an "app" instance.
const router = express.Router();

// CRUD for POSTS

// Posts#new
// GET /posts/new
router.get("/new", (req, res) => {
  res.render("notes/sign_in");
});

//mine
// router.get("/", (req, res) => {
//   res.render("posts/show");
// });

// Posts#create
// POST /posts
router.post("/", (req, res) => {
  // console.log(
  //   // When using knex, you can terminate your
  //   // with the `.toString()` which will display the
  //   // SQL code that is generate without executing
  //   // in your db.
  //   knex
  //     .select("*")
  //     .from("posts")
  //     .toString()
  // );

  // https://knexjs.org/#Builder-insert
  knex
    .insert({
      // When using knex.insert(), we pass it an object
      // where each key correspond to a column from the table
      // each value will data for the inserted row.
     
      imageUrl: req.body.imageUrl,
      user_name: req.cookies.user_name,
      content: req.body.content,
      user_name: req.cookies.user_name
      
    })
    .into("notes") 
    .returning("*")
    .then(([post]) => {
      console.log("notes insert result:", post);
      res.redirect(`/notes/${post.id}`);
    });
});

// Posts#show
// GET /posts/:id
router.get("/:id", (req, res) => {
  // Use "req.params" to acces URL params from a request.
  // URL params only appear for paths using `:` in front
  // of names.
  // Examples:
  // /posts/20 -> req.params == {id: 20}
  // /:name/:occupation -> /jon/king ->
  //   req.params == {name: "jon", occupation: "king"}
  // res.send(req.params);

  // https://knexjs.org/#Builder-select
  knex
    .select("*")
    .from("notes")
    .where({ id: req.params.id }) // WHERE id = 2
    .then(results => {
      // Array destructuring
      // The line below will create a variable named
      // that is assigned first of the results array.
      const [post] = results;
      // const post = results[0];

      // res.send(post);
      res.render("notes/new", { post: post });
    });
});

// Posts#index
// GET /posts
router.get("/", (req, res) => {
  knex
    .select("*")
    .from("notes")
    .then(posts => {
      res.render("notes/", { posts: posts });
    });
});

// To able to use this file in other files, you
// must export a value (e.g. array, object, number, string, class, etc.)
// For this file, we'll export the "router" to be able to
// connect to our app instance in "app.js".
module.exports = router;
// Whatever value is assigned to "module.exports"
// will be returned by "require" when this file
// is required.