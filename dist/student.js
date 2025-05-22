"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(SName, SId, htmlMarks, jsMarks, cssMarks) {
        this.SName = SName;
        this.SId = SId;
        this.htmlMarks = htmlMarks;
        this.jsMarks = jsMarks;
        this.cssMarks = cssMarks;
    }
    Name(SName) {
        this.SName = SName;
    }
    sId(sId) {
        this.SId = sId;
    }
    setMarks(html, js, css) {
        this.htmlMarks = html;
        this.jsMarks = js;
        this.cssMarks = css;
    }
    getName() {
        return this.SName;
    }
    getId() {
        return this.SId;
    }
    gethtmlMarks() {
        return this.htmlMarks;
    }
    ;
    getjsMarks() {
        return this.jsMarks;
    }
    getcssMarks() {
        return this.cssMarks;
    }
    getAvgMarks() {
        return (this.htmlMarks + this.jsMarks + this.cssMarks) / 3;
    }
}
exports.Student = Student;
//# sourceMappingURL=student.js.map