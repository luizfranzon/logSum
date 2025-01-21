import { format } from "date-fns";

export interface IformatLoggerData {
  lineLog: string;
  title: string;
}

export function formatLogger(data: IformatLoggerData): string {
  const { lineLog, title } = data;
  const currentTime = format(new Date(), "HH:mm:ss");

  const time = `- [${currentTime}]`.gray;
  const titleFormatted = title.green;

  const lowerCaseLog = lineLog.toLocaleLowerCase();

  if (["error", "fail", "fatal", "exception", "unhandled", "erro"].some(word => lowerCaseLog.includes(word))) {
    return `${time} - [${titleFormatted}]: ${lineLog.red}`;
  }

  return `${time} - [${titleFormatted}]: ${lineLog}`;
}