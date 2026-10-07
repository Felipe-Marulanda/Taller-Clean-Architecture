package uceva.cleanarchitecture.domain.repository;

import uceva.cleanarchitecture.domain.entity.Post;

import java.util.List;

public abstract class PostRepository {
    public abstract List<Post> getAll(int countPosts);
}
