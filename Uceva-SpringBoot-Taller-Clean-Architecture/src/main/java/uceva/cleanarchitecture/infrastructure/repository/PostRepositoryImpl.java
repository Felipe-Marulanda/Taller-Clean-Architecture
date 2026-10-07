package uceva.cleanarchitecture.infrastructure.repository;

import uceva.cleanarchitecture.domain.entity.Post;
import uceva.cleanarchitecture.domain.repository.PostRepository;
import uceva.cleanarchitecture.infrastructure.datasource.PostDatasource;

import java.util.List;

public class PostRepositoryImpl extends PostRepository {
    private final PostDatasource postDatasource;

    public PostRepositoryImpl(PostDatasource postDatasource) {
        this.postDatasource = postDatasource;
    }

    @Override
    public List<Post> getAll(int countPosts) {
        return postDatasource.getAll(countPosts);
    }
}
