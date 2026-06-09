package observer;
import model.User;
public interface UserObserver {
    void update(User user);
}