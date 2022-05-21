export default class CodeBlock {

    constructor() {
        this.lines = [""];
        this.headers = [];
        this.blocks = [];
    }

    newLine() {
        if (this.lines.at(-1) != "") {
            this.lines[this.lines.length - 1] = this.lines.at(-1).trim();
            this.lines.push("");
        }
    }

    checkBracket() {
        if(this.lines.at(-1) == '')
            this.lines.pop();
        this.headers.push(this.lines.pop().trim());
    }

    clean() {
        while(this.lines.length > 0 && this.lines.at(-1).trim() == '') {
            this.lines.pop()
        }

        return this;
    }

    addCharacter(character) {
       this.lines.push(this.lines.pop() + character);
    }

    addBlock(block) {
        this.blocks.push(block)
        this.lines.push("");
    }
}
