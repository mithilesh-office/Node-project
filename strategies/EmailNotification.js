class EmailNotification {

    send(user) {

        console.log(
            `Email sent to ${user.email}`
        );
    }
}

export default EmailNotification;