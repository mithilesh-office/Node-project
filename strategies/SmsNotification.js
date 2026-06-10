import NotificationStrategy from "./NotificationStrategy.js";

class SmsNotification extends NotificationStrategy {

    send(user) {
        console.log(`SMS sent to ${user.phone}`);
    }
}

export default SmsNotification;