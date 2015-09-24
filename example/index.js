// Dependencies
var GitHubLabeller = require("../lib");

// Provide the token and some info
var labeller = GitHubLabeller([
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

labeller.on("added", function (owner, repo, label, err, data) {
    console.log(label, owner + "/" + repo);
});
