package strategy;
import model.User;

public interface NotificationStrategy {
    
    void send(User user);
}