import Reorder from "./Reorder.js";

export default function Convert(parseTree, order, indentation=0) {
    let content = "";

    Reorder(parseTree, order);

    for(const line of parseTree.lines)
        content += line + '\n';

    for(let i = 0; i < parseTree.headers.length; i++)
        content += `\n${parseTree.headers[i]}{\n${Convert(parseTree.blocks[i], order, indentation + 1)}${" ".repeat(4 * indentation)}}\n`;

    return content;
}
