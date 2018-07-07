#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
var _1 = require("./");
var _a = yargs_1.default(process.argv)
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
    .argv, script = _a.script, list = _a.list;
var entries = _1.disassemble(script);
if (list)
    console.log(entries.map(function (x) { return x.name + " / " + x.hex; }).join('\n'));
else
    console.log(entries);
