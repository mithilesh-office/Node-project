package strategy;
import model.User;

public class SmsNotification implements NotificationStrategy {

    public void send(User user){

        System.out.println("SMS sent to " + user.getName());
    }
    
}