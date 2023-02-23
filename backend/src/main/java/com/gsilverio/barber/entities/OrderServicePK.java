package com.gsilverio.barber.entities;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Embeddable
public class OrderServicePK {

    @ManyToOne
    @JoinColumn(name="order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "kind_of_service_id")
    private KindOfService kindOfService;

    public OrderServicePK(){

    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public KindOfService getKindOfService() {
        return kindOfService;
    }

    public void setKindOfService(KindOfService kindOfService) {
        this.kindOfService = kindOfService;
    }
}
