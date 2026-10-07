package uceva.cleanarchitecture.domain.entity;

public class Order {
    public Integer id;
    public String customerName;
    public Float total;
    public String status;

    public Order(Integer id, String customerName, Float total, String status) {
        this.id = id;
        this.customerName = customerName;
        this.total = total;
        this.status = status;
    }
}
