const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/data", (req, res) => {
  //   res.send("hello guys");
  const dummy = [
    {
      username: "sarthak",
      city: "bhopal",
      age: 30,
    },
  ];

  res.json({ data: dummy });
});

app.listen(8000, () => {
  console.log("server:8000 is running...");
});
