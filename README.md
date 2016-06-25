# stylelint-value-list-box-shadow-inset-first

[![Build Status][ci-img]][ci]

Stylelint rule for checking if box-shadow inset values are first in list.

## Install

```sh
npm install stylelint-value-list-box-shadow-inset-first --save-dev
```

## Usage

Add this config to your `.stylelintrc`:

```json
{
	"plugins": [
		"stylelint-value-list-box-shadow-inset-first"
	],
	"rules": [
		"plugin/value-list-box-shadow-inset-first": true
	]
}
```

## Details

```css
a { box-shadow: inset 1px 1px 1px #fff, 2px 2px 2px rgba(0,0,0,1), inset 3px 3px 3px red; }
/**                                                                ↑
 * Inset value group is not positioned in correct order */
```

### Options

#### `true`

The following pattern is considered warning:

```css
a { box-shadow: inset 1px 1px 1px #fff, 2px 2px 2px rgba(0,0,0,1), inset 3px 3px 3px red; }
```

The following pattern is *not* considered warning:

```css
a { box-shadow: inset 1px 1px 1px #fff, inset 3px 3px 3px red, 2px 2px 2px rgba(0,0,0,1); }
```

---

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/stylelint-value-list-box-shadow-inset-first
[ci-img]: https://img.shields.io/travis/niksy/stylelint-value-list-box-shadow-inset-first/master.svg
