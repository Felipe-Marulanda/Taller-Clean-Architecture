package uceva.cleanarchitecture.infrastructure.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uceva.cleanarchitecture.application.usecase.GetAllCategoriesUseCase;
import uceva.cleanarchitecture.domain.entity.Category;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    private final GetAllCategoriesUseCase getAllCategoriesUseCase;

    public CategoryController(GetAllCategoriesUseCase getAllCategoriesUseCase) {
        this.getAllCategoriesUseCase = getAllCategoriesUseCase;
    }

    @GetMapping("/{countCategories}")
    public List<Category> getAll(@PathVariable int countCategories) {
        return getAllCategoriesUseCase.execute(countCategories);
    }
}
