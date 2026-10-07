package uceva.cleanarchitecture.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import uceva.cleanarchitecture.application.usecase.GetAllOrdersUseCase;
import uceva.cleanarchitecture.application.usecase.GetAllCategoriesUseCase;
import uceva.cleanarchitecture.application.usecase.GetAllPostsUseCase;
import uceva.cleanarchitecture.domain.repository.OrderRepository;
import uceva.cleanarchitecture.domain.repository.CategoryRepository;
import uceva.cleanarchitecture.domain.repository.PostRepository;
import uceva.cleanarchitecture.infrastructure.datasource.OrderDatasource;
import uceva.cleanarchitecture.infrastructure.datasource.CategoryDatasource;
import uceva.cleanarchitecture.infrastructure.datasource.PostDatasource;
import uceva.cleanarchitecture.infrastructure.repository.OrderRepositoryImpl;
import uceva.cleanarchitecture.infrastructure.repository.CategoryRepositoryImpl;
import uceva.cleanarchitecture.infrastructure.repository.PostRepositoryImpl;

@Configuration
public class AppConfig {

    @Bean
    OrderDatasource orderDatasource() {
        return new OrderDatasource();
    }

    @Bean
    CategoryDatasource categoryDatasource() {
        return new CategoryDatasource();
    }

    @Bean
    PostDatasource postDatasource() {
        return new PostDatasource();
    }

    @Bean
    OrderRepository orderRepository(OrderDatasource orderDatasource) {
        return new OrderRepositoryImpl(orderDatasource);
    }

    @Bean
    CategoryRepository categoryRepository(CategoryDatasource categoryDatasource) {
        return new CategoryRepositoryImpl(categoryDatasource);
    }

    @Bean
    PostRepository postRepository(PostDatasource postDatasource) {
        return new PostRepositoryImpl(postDatasource);
    }

    @Bean
    GetAllOrdersUseCase getAllOrdersUseCase(OrderRepository orderRepository) {
        return new GetAllOrdersUseCase(orderRepository);
    }

    @Bean
    GetAllCategoriesUseCase getAllCategoriesUseCase(CategoryRepository categoryRepository) {
        return new GetAllCategoriesUseCase(categoryRepository);
    }

    @Bean
    GetAllPostsUseCase getAllPostsUseCase(PostRepository postRepository) {
        return new GetAllPostsUseCase(postRepository);
    }

}
