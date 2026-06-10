import EmailNotification from "./EmailNotification.js";
import SmsNotification from "./SmsNotification.js";
import AppError from "../errors/AppError.js";


class NotificationFactory {
    static createNotification(type) {
        if (!type) {
            throw new AppError("Notification type is required", 400);
        }
        const notificationType = type.toLowerCase();

        switch (notificationType) {
            case "email":
                return new EmailNotification();
            
            case "sms":
                return new SmsNotification();
            
            default:
                throw new AppError(`Unknown notification type: ${type}`, 400);
        }
    }
}

export default NotificationFactory;
