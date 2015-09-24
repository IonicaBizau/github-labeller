// Dependencies
var GitHubLaber = require("../lib");

// Provide the token and some info
var laber = GitHubLaber([
    {
        color: "#4aa3df"
      , name: "Some blue label"
    }
], {
    repo: "jlord/git-it-electron"
  , token: "your token here"
}, function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});

laber.on("added", function (label, err, data) {
    console.log(label, err || data);
});
