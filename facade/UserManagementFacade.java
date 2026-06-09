package facade;
import model.User;
import services.UserService;
import strategy.NotificationStrategy;

public class UserManagementFacade {
    private UserService service;
    private NotificationStrategy notification;
    public UserManagementFacade(UserService service,
                                NotificationStrategy notification){
        this.service = service;
        this.notification = notification;
    }
    public void registerUser(User user){
        service.createUser(user);
        notification.send(user);
    }
}