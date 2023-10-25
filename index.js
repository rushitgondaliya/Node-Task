const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const { connectDB } = require("./db/dbConnection");
const routes = require("./routes/v1");
// const url = require('url');
// const querystring = require('querystring');
require("./helpers/crons");
const config = require("./config/config");

const app = express();

/**
 * allow form-data from body
 * form-data is use for image upload
 * parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * allow json data from body
 * parse application/json
 */
app.use(bodyParser.json());

/** enable cors */
app.use(cors());
app.options("*", cors());

app.use("/v1", routes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

/** Database connection */
connectDB()

/** get positional perameters */
app.get("/:id", (req,res) => {
  console.log(req.params);
  res
    .status(200)
    .json({success: true, message: "token created!" , data: "saveToken"})
});



// app.get('/', async function(req, res) {

//     // Access the provided 'page' and 'limt' query parameters
//     let page = req.query.page;
//     let limit = req.query.limit;

//     let articles = await Article.findAll().paginate({page: page, limit: limit}).exec();

//     // Return the articles to the rendering engine
//     res.render('index', {
//         articles: articles
//     });
// });

/** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning port number 3000!");
});
