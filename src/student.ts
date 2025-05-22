export class Student {
    SName: string;
    SId: number;
    htmlMarks: number;
    jsMarks: number;
    cssMarks: number;


    constructor(SName: string,SId: number, htmlMarks: number, jsMarks: number, cssMarks: number) {
        this.SName = SName;
        this.SId = SId;
        this.htmlMarks = htmlMarks;
        this.jsMarks = jsMarks;
        this.cssMarks = cssMarks;
    }

Name(SName: string):void {
    this.SName = SName;
}

sId(sId: number) :void {
    this.SId = sId;
}

setMarks(html: number, js: number, css: number):void {
    this.htmlMarks = html;
    this.jsMarks = js;
    this.cssMarks = css;

}

getName(): string {
    return this.SName;

}
getId(): number {
    return this.SId;
}
gethtmlMarks():number {
    return  this.htmlMarks};

getjsMarks(): number {
    return this.jsMarks;
}
getcssMarks(): number {
    return this.cssMarks;
}

getAvgMarks(): number {
    return (this.htmlMarks + this.jsMarks + this.cssMarks) / 3;
}


}