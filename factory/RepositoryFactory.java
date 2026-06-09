package factory;
import repository.*;


public class RepositoryFactory {
    public static UserRepository createRepository(){
        return new InMemoryUserRepository();
    }
}