function getPosition(property, order) {

    const position = order.indexOf(property);

    if(position >= 0) {
        return position;
    }

    return property.startsWith("/")? order.indexOf("/") : order.indexOf("*");

}

export default function Reorder(parseTree, orderList) {

    const groups = [];

    for(const line of parseTree.lines) {
        const l = line.trim();
        groups.push({property: l.slice(0, l.indexOf(":")), line: line})
    }

    groups.sort((a, b)=>{return getPosition(a.property, orderList) - getPosition(b.property, orderList)});

    for(let i = 0; i < groups.length; i++) {
        parseTree.lines[i] = groups[i].line;
    }
}
