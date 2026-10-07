package uceva.cleanarchitecture.infrastructure.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uceva.cleanarchitecture.application.usecase.GetAllPostsUseCase;
import uceva.cleanarchitecture.domain.entity.Post;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {
    private final GetAllPostsUseCase getAllPostsUseCase;

    public PostController(GetAllPostsUseCase getAllPostsUseCase) {
        this.getAllPostsUseCase = getAllPostsUseCase;
    }

    @GetMapping("/{countPosts}")
    public List<Post> getAll(@PathVariable int countPosts) {
        return getAllPostsUseCase.execute(countPosts);
    }
}
