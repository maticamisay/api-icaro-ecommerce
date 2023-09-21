const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));

app.get("/api/todos", (req, res) => {
  setTimeout(() => {
    return res.json([
      {
        id: 1,
        title: "Learn NodeJS",
        completed: false,
      },
      {
        id: 2,
        title: "Learn ReactJS",
        completed: false,
      },
      {
        id: 3,
        title: "Learn React Native",
        completed: false,
      },
    ]);
  }, 2000);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
