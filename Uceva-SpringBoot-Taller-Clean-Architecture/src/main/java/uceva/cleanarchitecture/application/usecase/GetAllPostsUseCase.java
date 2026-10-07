package uceva.cleanarchitecture.application.usecase;

import uceva.cleanarchitecture.domain.entity.Post;
import uceva.cleanarchitecture.domain.repository.PostRepository;

import java.util.List;

public class GetAllPostsUseCase {
    private final PostRepository postRepository;

    public GetAllPostsUseCase(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> execute(int countPosts) {
        return postRepository.getAll(countPosts);
    }
}
