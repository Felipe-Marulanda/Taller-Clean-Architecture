package uceva.cleanarchitecture.infrastructure.datasource;

import com.github.javafaker.Faker;
import uceva.cleanarchitecture.domain.entity.Post;

import java.util.ArrayList;
import java.util.List;

public class PostDatasource {
    private final Faker faker = new Faker();

    public List<Post> getAll(int countPosts) {
        List<Post> posts = new ArrayList<>();
        for (int i = 1; i <= countPosts; i++) {
            posts.add(new Post(
                    i,
                    faker.book().title(),
                    faker.lorem().paragraph(),
                    faker.name().fullName()
            ));
        }
        return posts;
    }
}
