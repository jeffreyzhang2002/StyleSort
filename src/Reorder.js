function getPosition(property, order) {

    let position = order.indexOf(property);

    if(position < 0)
        position = order.indexOf(property[0]);

    if(position < 0)
        position = order.indexOf("*");

    return position;
}

export default function Reorder(parseTree, orderList) {

    if(parseTree.lines.length == 0)
        return parseTree;

    const groups = [];

    for(const line of parseTree.lines) {
        groups.push({property: line.slice(0, line.indexOf(":")).toLowerCase(), line: line})
    }

    groups.sort((a, b)=>{return getPosition(a.property, orderList) - getPosition(b.property, orderList)});

    for(let i = 0; i < groups.length; i++) {
        parseTree.lines[i] = groups[i].line;
    }

    return parseTree;
}
