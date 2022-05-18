export default class Block {

    static includeComments = true;

    constructor() {
        this.lines = [""];
        this.headers = [];
        this.blocks = [];
    }

    newLine() {
        if (this.lines.at(-1) != "") {
            this.lines.at(-1).trim();
            this.lines.push("");

        }
    }

    checkBracket() {
        if(this.lines.at(-1) == '')
            this.lines.pop();
        this.headers.push(this.lines.pop());
    }

    clean() {
        while(this.lines.at(-1) == '')
            this.lines.pop()

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
