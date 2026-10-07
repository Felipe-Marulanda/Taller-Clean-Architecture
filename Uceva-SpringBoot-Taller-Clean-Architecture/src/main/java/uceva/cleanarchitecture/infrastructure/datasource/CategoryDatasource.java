package uceva.cleanarchitecture.infrastructure.datasource;

import com.github.javafaker.Faker;
import uceva.cleanarchitecture.domain.entity.Category;

import java.util.ArrayList;
import java.util.List;

public class CategoryDatasource {
    private final Faker faker = new Faker();

    public List<Category> getAll(int countCategories) {
        List<Category> categories = new ArrayList<>();
        for (int i = 1; i <= countCategories; i++) {
            categories.add(new Category(
                    i,
                    faker.commerce().department(),
                    faker.lorem().sentence()
            ));
        }
        return categories;
    }
}
