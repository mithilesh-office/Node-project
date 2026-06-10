import NotificationStrategy from "./NotificationStrategy.js";

class EmailNotification extends NotificationStrategy {

    send(user) {
        console.log(`Email sent to ${user.email}`);
    }
}

export default EmailNotification;