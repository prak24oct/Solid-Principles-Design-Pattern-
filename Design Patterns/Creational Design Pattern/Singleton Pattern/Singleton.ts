class Logger {
    private constructor() {}

    private static instance : Logger;

    public static getInstance(): Logger {
        if(!Logger.instance){
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: string): void {
        const timestamp = new Date();
        console.log(`[${timestamp.toLocaleString}] - ${message}`)
    }
}

const logger1 = Logger.getInstance();
logger1.log("First Log Message");

const logger2 = Logger.getInstance();
logger2.log("Second log message");

console.log(logger1 == logger2)