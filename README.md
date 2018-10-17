# @tillhub/numpad

> Simple numpad with display field, that also acts as an optional input field. It limits unser entry to numbers (positive and negative) with up to 2 decimals.
> It accepts a change handler function that is called with the current text value in the input field.

[![NPM](https://img.shields.io/npm/v/@tillhub/numpad.svg)](https://www.npmjs.com/package/@tillhub/numpad) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @tillhub/numpad
```

## Usage

```jsx
import React, { Component } from 'react'

import Numpad from '@tillhub/numpad'

class Example extends Component {
  render () {
    return (
      <Numpad />
    )
  }
}
```

### Properties

The component accepts optional properties.

| Property          | type     | required | example                   | default  | description                                                                                                                                                 |
|:------------------|:---------|:---------|:--------------------------|:---------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| handleChange      | function | no       | text => console.log(text) | () => {} | This function will be called with the current text in the input field. It is triggered on every click in the keypad and on every change in the input field. |
| startValue        | string   | no       | '15'                      | null     | The input field will be initiated with this value.                                                                                                          |
| disabled          | boolean  | no       | true                      | false    | If set to true, the input field and the keypad will be greyed out and disabled.                                                                             |
| withoutInputField | boolean  | no       | true                      | false    | If set to true, the input field will merely display values but not accept manual entry.                                                                     |
| decimalSeparator  | string   | no       | ','                       | '.'      | Pass in optional decimal separator. For now, only ',' is allowed as an alternative to '.'.                                                                  |
| width             | string   | no       | '800px'                   | '400px'  | Determines the width of the input field and keypad. Both will have equal width.                                                                             |


```jsx
import React, { Component } from 'react'

import Numpad from '@tillhub/numpad'

class Example extends Component {
  render () {
    return (
      <Numpad
        handleChange={text => console.log(text)}
        startValue='67.5'
        width='500px'
      />
    )
  }
}
```

### Slots

You can pass in children to fill a slot between the input field and keypad. A use case is for example to indicate a total.

```jsx
import React, { Component } from 'react'

import Numpad from '@tillhub/numpad'

class Example extends Component {
  render () {
    return (
      <Numpad>
        <div>of 200</div>
      </Numpad>
    )
  }
}
```

## License

MIT © [qtotuan](https://github.com/qtotuan)
