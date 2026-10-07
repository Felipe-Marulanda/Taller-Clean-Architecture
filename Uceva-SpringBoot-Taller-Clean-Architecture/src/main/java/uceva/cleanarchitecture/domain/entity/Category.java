package uceva.cleanarchitecture.domain.entity;

public class Category {
    public Integer id;
    public String name;
    public String description;

    public Category(Integer id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
