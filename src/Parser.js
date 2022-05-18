import fs from "fs";
import Block from "./Block.js";

export default function Parser(path) {

    let file;

    try {
        file = fs.readFileSync(path, "utf8").trim();
    } catch (exception) {
        console.log("No such file");
        process.exit(-1);
    }

    const stack = [new Block()];

    for(const character of file) {

        switch (character) {
            case '\n':
                stack.at(-1).newLine();
            case '\r':
                continue;

            case '{':
                stack.at(-1).checkBracket();
                stack.push(new Block());
                continue;

            case '}':
                stack.at(-2).addBlock(stack.pop().clean());
                continue;

            default:
                stack.at(-1).addCharacter(character);
        }
    }

    return stack[0];
}
