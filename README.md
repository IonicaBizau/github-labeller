
[![github-labeller](http://i.imgur.com/T59a7rb.png)](#)

# `$ github-labeller`

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/github-labeller.svg)](https://www.npmjs.com/package/github-labeller) [![Downloads](https://img.shields.io/npm/dt/github-labeller.svg)](https://www.npmjs.com/package/github-labeller) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Automagically create issue labels in your GitHub projects.

[![github-labeller](http://i.imgur.com/jpELj6R.png)](#)

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g github-labeller
```


Then, run `github-labeller --help` and see what the CLI tool can do.


```
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


You also need to get a GitHub application token. Go here: https://github.com/settings/tokens. Click on <kbd>Generate New Token</kbd>. Because you will be setting labels for repositories, you will need to add the `repo` scopes. Name the token something informative: `github-labeller` is a good name.

If you would like to use this label more than once, save it somewhere in your `.bash_profile` or `.bashrc` files. These are normally hidden in your root directory.


## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save github-labeller
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

## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
