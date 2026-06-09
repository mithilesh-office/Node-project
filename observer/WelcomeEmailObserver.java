package observer;
import model.User;
public class WelcomeEmailObserver implements UserObserver {
    public void update(User user){
        System.out.println("Welcome Email Sent To " + user.getName());
    }
}