package com.gsilverio.barber.entities;

import jakarta.persistence.Embeddable;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_order_service")
public class OrderService {
    @EmbeddedId
    private OrderServicePK id = new OrderServicePK();
    private Double price;
    private Integer quantity;

    public OrderService(){
    }

    public OrderService(Order order, KindOfService kindOfService, Double price, Integer quantity) {
        id.setOrder(order);
        id.setKindOfService(kindOfService);
        this.price = price;
        this.quantity = quantity;
    }
    public Order getOrder(){
        return id.getOrder();
    }
    public void setOrder(Order order){
        id.setOrder(order);
    }
    public KindOfService getKindOfService(){
        return id.getKindOfService();
    }
    public void setKindOfService(KindOfService kindOfService){
        id.setKindOfService(kindOfService);
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
