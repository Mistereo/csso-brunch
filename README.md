## csso-brunch

Adds [CSSO](https://github.com/css/csso) support to [brunch](http://brunch.io).

CSSO (CSS Optimizer) is a CSS minimizer unlike others. In addition to usual minification techniques it can perform structural optimization of CSS files, resulting in smaller file size compared to other minifiers.

## Usage

Install the plugin via npm:

```console
npm install --save csso-brunch
```

To specify CSSO options, use `config.plugins.csso` object, for example:

```javascript
exports.config = {
  ...
  plugins: {
    csso: {
      restructure: false
    }
  }
}
```

## License

The MIT License (MIT)
