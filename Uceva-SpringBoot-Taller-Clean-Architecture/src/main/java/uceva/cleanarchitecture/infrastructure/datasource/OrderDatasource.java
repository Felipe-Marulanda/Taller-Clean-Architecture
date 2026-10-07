package uceva.cleanarchitecture.infrastructure.datasource;

import com.github.javafaker.Faker;
import uceva.cleanarchitecture.domain.entity.Order;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class OrderDatasource {
    private final Faker faker = new Faker();
    private final Random random = new Random();
    private final String[] statuses = {"Pendiente", "Pagada", "Enviada", "Entregada"};
    private final String[] customers = {"María Gómez", "Carlos Rodríguez", "Laura Martínez"};

    public List<Order> getAll(int countOrders) {
        List<Order> orders = new ArrayList<>();
        for (int i = 1; i <= countOrders; i++) {
            orders.add(new Order(
                    i,
                    customers[(i - 1) % customers.length],
                    (float) faker.number().numberBetween(20, 2000),
                    statuses[random.nextInt(statuses.length)]
            ));
        }
        return orders;
    }
}
