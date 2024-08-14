const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Sample data from your db.json
const db = {
  contacts: [
    {
      id: "A11",
      name: "Mukund Bajpai",
      photo: "https://img.icons8.com/bubbles/2x/user.png",
      mobile: "7985331573",
      email: "Mukundbajpaii@gmail.com",
      title: "Software Developer",
      company: "Bright Hint",
      group: "1",
    },
    {
      id: "A12",
      name: "Dainik",
      photo: "https://img.icons8.com/bubbles/2x/guest-male.png",
      mobile: "9325672910",
      email: "dainikbheda@gmail.com",
      title: "Software Developer",
      company: "Sapres global",
      group: "2",
    },
    {
      id: "A13",
      name: "Smit",
      photo: "https://img.icons8.com/bubbles/2x/name.png",
      mobile: "7865439023",
      email: "smitpatil@gmail.com",
      title: "Software Developer",
      company: "Cling multisolutions",
      group: "3",
    },
    {
      id: "A14",
      name: "Sahil",
      photo: "https://img.icons8.com/clouds/2x/guest-male.png",
      mobile: "9089561278",
      email: "sahilsingh@gmail.com",
      title: "Software Developer",
      company: "Cling multisolutions",
      group: "4",
    },
    {
      name: "Som",
      photo: "https://img.icons8.com/clouds/2x/user.png",
      mobile: "9004112920",
      email: "som151@gmail.com",
      title: "Game Developer ",
      company: "Unreal Engine",
      group: "2",
      id: "rVhejm0",
    },
    {
      name: "Shukla",
      photo: "https://img.icons8.com/clouds/2x/name.png",
      mobile: "7856432109",
      email: "shukla123@gmail.com",
      title: "MernStack Developer",
      company: "Cling Multisolutions",
      group: "1",
      id: "gh0q1-s",
    },
    {
      name: "Aditya Raj",
      photo: "https://img.icons8.com/doodle/2x/user.png",
      mobile: "7898243652",
      email: "adiraj123@gmail.com",
      title: "Developer",
      company: "Cling",
      group: "1",
      id: "ZKZFgHv",
    },
  ],
  groups: [
    { id: "1", name: "Colleague" },
    { id: "2", name: "Friends" },
    { id: "3", name: "Family" },
    { id: "4", name: "Service" },
  ],
};

// Routes
app.get("/contacts", (req, res) => {
  res.json(db.contacts);
});

app.get("/groups", (req, res) => {
  res.json(db.groups);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
