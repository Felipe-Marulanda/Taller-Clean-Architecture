package uceva.cleanarchitecture.domain.entity;

public class Post {
    public Integer id;
    public String title;
    public String content;
    public String author;

    public Post(Integer id, String title, String content, String author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }
}
