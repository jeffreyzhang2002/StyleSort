import CodeBlock from "./CodeBlock.js";

export default function Parser(file) {

    const stack = [new CodeBlock()];

    for(const character of file) {

        switch (character) {
            case '\n':
                stack.at(-1).newLine();
            case '\r':
                continue;

            case '{':
                stack.at(-1).checkBracket();
                stack.push(new CodeBlock());
                continue;

            case '}':
                stack.at(-2).addBlock(stack.pop().clean());
                continue;

            default:
                stack.at(-1).addCharacter(character);
        }
    }

    return stack[0].clean();
}
