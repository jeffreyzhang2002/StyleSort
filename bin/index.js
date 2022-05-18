#! /usr/bin/env node

import Yargs from "yargs";
import Parser from "../src/Parser.js";
import Convert from "../src/Convert.js";
import * as Path from "path";

const argv = Yargs(process.argv.slice(2))
    .option("config", {
        alias: "c",
        describe: "Path of file containing CSS properties order",
        type: "string"
    })
    .option("output", {
        alias: "o",
        describe: "output file path",
        type: "string"
    })
    .option("depth", {
        alias: "d",
        describe: "recursive file depth",
        type: "count"
    })
    .option("type", {
        alias: "t",
        describe: "",
        type: "array",
        choices: ["HTML", "CSS", "SCSS", "SASS", "JSX", "TSX", "HTML", "*"]
    })
    .parseSync();


const file = argv._[0];
const parseTree = Parser(file);

console.log(parseTree);

const content = Convert(parseTree);

console.log(content);

const filename = Path.parse(file) + "_0";



