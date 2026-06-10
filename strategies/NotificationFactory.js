import EmailNotification from "./EmailNotification.js";
import SmsNotification from "./SmsNotification.js";


class NotificationFactory {
    static createNotification(type) {
        const notificationType = type.toLowerCase();

        switch (notificationType) {
            case "email":
                return new EmailNotification();
            
            case "sms":
                return new SmsNotification();
            
            default:
                throw new Error(`Unknown notification type: ${type}`);
        }
    }
}

export default NotificationFactory;
