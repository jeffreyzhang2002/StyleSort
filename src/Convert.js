import Reorder from "./Reorder.js";

export default function Convert(parseTree, orderList, spacing) {
    return ConvertHelper(parseTree, orderList, spacing);
}

function ConvertHelper(parseTree, orderList, spacing, indentation=0,) {

    const indent = spacing.repeat(indentation);
    let content = "";

    Reorder(parseTree, orderList)

    for(const line of parseTree.lines)
        content += indent + line + '\n';

    for(let i = 0; i < parseTree.headers.length; i++)
        content += `\n${indent}${parseTree.headers[i]}{\n${ConvertHelper(parseTree.blocks[i], orderList, spacing, indentation + 1)}\n${indent}}\n`;

    return content.slice(0, -1);
}


