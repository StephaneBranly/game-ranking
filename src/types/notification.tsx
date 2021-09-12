export type severityType =  "info" | "success" | "error" | "warning"

export type notificationType = 
{
    open: boolean,
    text?: string,
    severity?: severityType,
}
