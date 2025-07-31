export class LogHelper {
    private static _spacer = '  ';
    private static _tabCount = 0;

    static get Tab() {
        if (this._tabCount === 0) return '';
        return this._spacer.repeat(this._tabCount);
    }

    static LogShift(message?: any, ...optionalParams: any[]) {
        this.Log(message, ...optionalParams)
        this._tabCount++;
    }

    static LogUnshift(message?: any, ...optionalParams: any[]) {
        this._tabCount--;
        this.Log(message, ...optionalParams)
    }

    static Log(message?: any, ...optionalParams: any[]) {
        if (message === null || message === undefined)
            console.log(message, ...optionalParams);
        console.log(`${LogHelper.Tab}` + message, ...optionalParams);
    }
}
