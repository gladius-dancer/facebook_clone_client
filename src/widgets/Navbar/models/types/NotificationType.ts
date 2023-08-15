export type NotificationType = {
    id: string;
    type: string;
    sender: string;
    avatar: string
}

export type NotificationSchema = {
    notifications: NotificationType[]
}
