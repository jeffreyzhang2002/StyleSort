export default function Convert(parseTree, indentation=0) {
    let content = "";

    for(const line of parseTree.lines)
        content += line + '\n';

    for(let i = 0; i < parseTree.headers.length; i++)
        content += `${parseTree.headers[i]}{\n${Convert(parseTree.blocks[i], indentation + 1)}${" ".repeat(4 * indentation)}}\n`;

    return content;
}
