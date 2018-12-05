# 📚 Anthology.scss

> A SCSS library for creating scaleable, brand-driven, atomic styles

## Install
```sh
yarn add anthology.scss
```
or
```sh
npm install anthology.scss
```

## SCSS

### `A(...)`

Anthology _mixins_ and _functions_ are called via this primary interface. For example, you can `@include A( {foo}, {args...} );` or set `$bar: A( {baz}, {args...} );`.

### Mixins

#### `A(configure, $config)`

##### Params
```
{Map} $config.breakpoints - A map of responsive breakpoints [default: null].
{String} $config.separator - A string delimiter which appears between each piece of the generated selectors [default: '-'].
{String} $config.important-tag - A string which designates '!important' rules [default: '!'].
{String} $config.theme-tag - A string which designates themed rules [default: '#'].
{String} $config.responsive-tag - A string which designates responsive rules [default: '@'].
{String} $config.grid-prefix - A string which prefixes Anthology-generated grids [default: 'grid'].
{String} $config.grid-area-prefix - A string which prefixes 'grid-area' rules for Anthology-generated grids [default: 'area'].
```

##### Usage

Sets the configuration for generating functional properties. `A(define, ...)` will throw if this mixin has not been included prior.

---

#### `A(define, $shorthand, $property, $values, $options)`

##### Params
```
{String} $shorthand - The name for this series of helpers.
{String} $property - The CSS property to target.
{Map} $values - A map of values to assign.
{Bool} $options.important - Whether to emit '!important' versions of the rules. This overrides the argument in `A(emit, ...)` and `A(emit-responsive, ...)` [default: true].
{Bool} $options.responsive - Whether to emit responsive versions of the rules. This overrides the argument in `A(emit, ...)` and `A(emit-responsive, ...)` [default: true].
{List} $options.pseudos - A list of pseudo-classes or pseudo-elements to generate selectors for.
{List} $options.themes - A list of themes to generate selectors for.
```

##### Usage

Defines a functional CSS rule. For optimization reasons, this mixin does not emit any CSS. To emit currently defined helpers, use `A(emit, ...)` and `A(emit-responsive, ...)`.

---

#### `A(emit, $important)`

##### Params
```
{Bool} $important - Whether to emit '!important' versions of the rules. [default: false].
```

##### Usage

Emits non-responsive rules. Emitted properties are flushed afterwards.

---

#### `A(emit-responsive, $important)`

##### Params
```
{Bool} $important - Whether to emit '!important' versions of the rules [default: false].
```

##### Usage

Emits responsive, media query efficient helpers. Emitted properties are flushed afterwards.

---
