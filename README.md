[![github-labeller](http://i.imgur.com/T59a7rb.png)](#)

# `$ github-labeller` [![Support this project][donate-now]][paypal-donations]

Automagically create issue labels in your GitHub projects.

[![github-labeller](http://i.imgur.com/jpELj6R.png)](#)

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g github-labeller
```

Then, run `github-labeller --help` and see what the CLI tool can do.

```sh
$ github-labeller --help
Usage: github-labeller [options]

Options:
  -r, --repo <user(/repo)>        The repository full name (e.g.                   
                                  ionicabizau/github-labeller) or the username.    
  -t, --token <token>             The GitHub token.                                
  -c, --config <path>             The configuration file (a JSON file containing an
                                  array like this: [{ "color": "#4aa3df", "name":  
                                  "Some label name" }]).                           
  -i, --import <user/repository>  Import labels from a specific repository.        
  -h, --help                      Displays this help.                              
  -v, --version                   Displays version information.                    

Examples:
  github-labeller -r ionicabizau/github-labeller -t some-token -c my-labels.json
  github-labeller -r ionicabizau -i jlord/git-it-electron -t some-token # import @jlord's labels in all my projects

Documentation can be found at https://github.com/IonicaBizau/github-labeller#readme
```

## Example

Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i github-labeller
```

```js
// Dependencies
var GitHubLabeller = require("github-labeller");

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
```

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md