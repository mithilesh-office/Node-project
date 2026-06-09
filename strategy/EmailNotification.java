package strategy;
import model.User;

public class EmailNotification implements NotificationStrategy {

    public void send(User user){

        System.out.println("Email sent to " + user.getName());
        
    }

}