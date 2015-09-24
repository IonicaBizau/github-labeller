// Dependencies
var GitHub = require("gh.js")
  , EventEmitter = require("events").EventEmitter
  , SameTime = require("same-time")
  ;

/**
 * GitHubLaber
 * Adds the provided labels to specified repository or to all repositories from
 * specified account.
 *
 * @name GitHubLaber
 * @function
 * @param {Array} labels An array of objects like this:
 * @param {Object} options An object containing the following fields:
 *
 *  - `repo` (String): A string like `"user/repository"` or `"user"`–in this case
 *    the labels will be created in all repositories
 *  - `token` (String): The GitHub token.
 *
 * @param {Function} callback The callback function.
 * @return {EventEmitter} An event emitter you can use for listening for specific events:
 *
 *  - `added` (owner, repo, label, err, data)–after a label was created
 */
function GitHubLaber (labels, options, callback) {

    var ev = new EventEmitter()
      , i = 0
      , repo = null
      , user = null
      , splits = null
      , gh = null
      , cLabel = null
      ;

    if (!labels.length) {
        callback(null, null);
        return ev;
    }

    // Normalize labels
    for (; i < labels.length; ++i) {
        cLabel = labels[i];
        cLabel = labels[i] = {
            name: cLabel.name
          , color: cLabel.color.charAt(0) === "#"
                 ? cLabel.color.substring(1)
                 : cLabel.color
        };
        if (!cLabel.name) {
            callback(new Error("Missing name for label: " + i));
            return ev;
        }
        if (!cLabel.color) {
            callback(new Error("Missing color for label: " + i));
            return ev;
        }
    }

    repo = options.repo

    // user/repo
    splits = repo.split("/");
    if (splits.length === 2) {
        user = splits[0];
        repo = splits[1];
    }

    gh = new GitHub({ token: options.token });

    if (repo) {
        GitHubLaber.addToRepo(ev, gh, user, repo, labels, callback);
    } else {
        gh.get("users/" + user + "/repos", { all: true }, function (err, repos) {
            if (err) { return callback(err); }
            SameTime(repos.map(function (c) {
                return function (done) {
                    GitHubLaber.addToRepo(ev, gh, user, c.name, labels, done);
                }
            }), callback);
        });
    }

    return ev;
}

/**
 * addToRepo
 * Creates a new label.
 *
 * @name addToRepo
 * @function
 * @param {EventEmitter} ev The event emitter instance.
 * @param {GitHub} gh The `gh.js` instance.
 * @param {String} owner The owner username.
 * @param {String} repo The repository name.
 * @param {Object} label The label object.
 * @param {Function} callback Callback function
 * @return {Request} The request object.
 */
GitHubLaber.addToRepo = function (ev, gh, owner, repo, label, callback) {
    if (Array.isArray(label)) {
        return SameTime(label.map(function (c) {
            return function (done) {
                GitHubLaber.addToRepo(ev, gh, owner, repo, c, function (err, data) {
                    ev.emit("added", owner, repo, label, err, data);
                    done(null, data);
                });
            };
        }), callback);
    }
    return gh.get("repos/" + owner + "/" + repo + "/labels", { data: label }, callback);
};

module.exports = GitHubLaber;
