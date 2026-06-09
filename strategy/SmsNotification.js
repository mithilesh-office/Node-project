class SmsNotification {

    send(user) {

        console.log(
            `SMS sent to ${user.phone}`
        );
    }
}

export default SmsNotification;