#!/usr/bin/env node

import yargs from "yargs"
import { disassemble } from "./"

let { script, list } = (yargs(process.argv) as any as yargs.Argv)
	.option('script', {
		type: 'string',
		demand: true,
		describe: 'tx script string to parse'
	})
	.option('list', {
		type: 'boolean',
		demand: false,
		describe: 'output entries as a plain-text list'
	})
	.argv as any as { script: string, list: boolean }

let entries = disassemble(script)
if (list)
	console.log(entries.map(x => `${x.name} / ${x.hex}`).join('\n'))
else
	console.log(entries)