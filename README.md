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

<!-- prettier-ignore-start -->

```css
a { box-shadow: inset 1px 1px 1px #fff, 2px 2px 2px rgba(0,0,0,1), inset 3px 3px 3px red; }
/**                                                                ↑
 * Inset value group is not positioned in correct order */
```

<!-- prettier-ignore-end -->

### Options

#### `true`

The following pattern is considered warning:

<!-- prettier-ignore-start -->

```css
a { box-shadow: inset 1px 1px 1px #fff, 2px 2px 2px rgba(0,0,0,1), inset 3px 3px 3px red; }
```

<!-- prettier-ignore-end -->

The following pattern is _not_ considered warning:

<!-- prettier-ignore-start -->

```css
a { box-shadow: inset 1px 1px 1px #fff, inset 3px 3px 3px red, 2px 2px 2px rgba(0,0,0,1); }
```

<!-- prettier-ignore-end -->

---

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://github.com/niksy/stylelint-value-list-box-shadow-inset-first/actions?query=workflow%3ACI
[ci-img]: https://github.com/niksy/stylelint-value-list-box-shadow-inset-first/workflows/CI/badge.svg?branch=master

<!-- prettier-ignore-end -->
