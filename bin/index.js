#! /usr/bin/env node

import Yargs from "yargs";
import Parser from "../src/Parser.js";
import Convert from "../src/Convert.js";
import * as Path from "path";
import * as FS from "fs";

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

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
    .parseSync();

let order, file;

const fileExtension = (argv._[0].substring(argv._[0].lastIndexOf('.')+1, argv._[0].length) || argv._[0]).toLowerCase();

if(fileExtension != "css" && fileExtension != "scss") {
    console.log(`${argv._[0]} is not a CSS or SCSS file.`);
    process.exit(-1);
}

try {
    order = FS.readFileSync(argv.config? Path.resolve(process.cwd(), argv.config) : Path.resolve("../config/default.txt"), "utf8").split(/\s+/);
    file  = FS.readFileSync(Path.resolve(process.cwd(), argv._[0]), "utf8").trim();
} catch (exception) {
    console.log(`${exception.path} is not a valid path`);
    process.exit(-1);
}

const content = Convert(Parser(file), order);

if(!argv.output) {
    console.log("//__Output CSS__")
    console.log(content);
    console.log("//______________")
    process.exit(-1);
}

try {
    FS.writeFileSync(Path.resolve(process.cwd(), argv.output),content);
} catch (exception) {
    console.log("Unable to write to file");
}

console.log("Done!");



