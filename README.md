# NEO blockchain transaction script parser

This module parses tx scripts into a set of instructions that can be used for debugging or inspection.

## Installation

`yarn add neo-script-parser`

## CLI usage

`yarn neo-script-parser --script <tx script string>`

## Usage

```js
import { parse } from 'neo-script-parser'
```
or
```js
var parse = require('neo-script-parser').parse
```

```js
var txdata = '0801e65c00000000000840420f000000000014f9e6e770af783d809bd1a65e1bb5b6042953bcac080303000000000000209b7cffdaa674beae0f930ebe6085af9093e5fe56b34a5c220ccdcf6efc336fc514dc98759406cc2130dcd0d93c4c6e8a82b55b454456c1096d616b654f6666657267bd097b2fcf70e1fd30a5c3ef51e662feeafeba01'
var entries = parse(txdata)
console.log(entries.pop())
// {
//   opcode: 103,
//   pos: 114,
//   name: 'APPCALL',
//   comment: 'Calls script with hash: $XX',
//   data: <Buffer bd 09 7b 2f cf 70 e1 fd 30 a5 c3 ef 51 e6 62 fe ea fe ba 01>,
//   hex: 'bd097b2fcf70e1fd30a5c3ef51e662feeafeba01'
// }
```