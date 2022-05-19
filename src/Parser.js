import fs from "fs";
import Block from "./Block.js";

export default function Parser(file) {

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

    console.log(stack[0]);

    return stack[0];
}
