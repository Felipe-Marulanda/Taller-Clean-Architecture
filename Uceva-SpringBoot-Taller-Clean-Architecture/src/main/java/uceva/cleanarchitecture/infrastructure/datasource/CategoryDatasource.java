package uceva.cleanarchitecture.infrastructure.datasource;

import uceva.cleanarchitecture.domain.entity.Category;

import java.util.ArrayList;
import java.util.List;

public class CategoryDatasource {
    private final String[] categoryNames = {"Tecnología", "Hogar", "Deportes", "Libros", "Música"};

    public List<Category> getAll(int countCategories) {
        List<Category> categories = new ArrayList<>();
        for (int i = 1; i <= countCategories; i++) {
            categories.add(new Category(
                    i,
                    categoryNames[(i - 1) % categoryNames.length],
                    "Artículos y novedades de " + categoryNames[(i - 1) % categoryNames.length].toLowerCase() + "."
            ));
        }
        return categories;
    }
}
