## Documentation
You can see below the API reference of this module.

### `GitHubLabeller(labels, options, callback)`
Adds the provided labels to specified repository or to all repositories from
specified account.

#### Params
- **Array** `labels`: An array of objects like this:
- **Object** `options`: An object containing the following fields:
 - `repo` (String): A string like `"user/repository"` or `"user"`–in this case
   the labels will be created in all repositories
 - `source` (String): If provided, the tool will take the labels from this repository.
 - `token` (String): The GitHub token.
- **Function** `callback`: The callback function.

#### Return
- **EventEmitter** An event emitter you can use for listening for specific events:
 - `added` (owner, repo, label, err, data)–after a label was created

### `addToRepo(ev, gh, owner, repo, label, callback)`
Creates a new label.

#### Params
- **EventEmitter** `ev`: The event emitter instance.
- **GitHub** `gh`: The `gh.js` instance.
- **String** `owner`: The owner username.
- **String** `repo`: The repository name.
- **Object** `label`: The label object.
- **Function** `callback`: Callback function

#### Return
- **Request** The request object.

