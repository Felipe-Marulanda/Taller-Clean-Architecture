package uceva.cleanarchitecture.infrastructure.datasource;

import uceva.cleanarchitecture.domain.entity.Post;

import java.util.ArrayList;
import java.util.List;

public class PostDatasource {
    private final String[] titles = {"Arquitectura limpia", "Buenas prácticas de software", "Diseño de aplicaciones"};
    private final String[] authors = {"María Gómez", "Carlos Rodríguez", "Laura Martínez"};

    public List<Post> getAll(int countPosts) {
        List<Post> posts = new ArrayList<>();
        for (int i = 1; i <= countPosts; i++) {
            posts.add(new Post(
                    i,
                    titles[(i - 1) % titles.length],
                    "Contenido de ejemplo para el taller de Arquitectura de Software.",
                    authors[(i - 1) % authors.length]
            ));
        }
        return posts;
    }
}
