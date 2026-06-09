package adapter;
import model.User;
import strategy.NotificationStrategy;
public class EmailAdapter implements NotificationStrategy {
    private ThirdPartyEmailService emailService = new ThirdPartyEmailService();
    public void send(User user){
        emailService.sendMail("Welcome " + user.getName());
    }
}