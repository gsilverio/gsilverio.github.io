package com.gsilverio.barber.entities;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="tb_kind_of_service")
public class KindOfService implements Serializable {
    private static final long serialVersionUID =1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nameOfService;
    private Double price;
    private String imgUrl;

    @OneToMany(mappedBy = "id.kindOfService")
    private Set<OrderService> service = new HashSet<>();
    public KindOfService(){

    }
    public KindOfService(Long id, String nameOfService, Double price, String imgUrl) {
        this.id = id;
        this.nameOfService = nameOfService;
        this.price = price;
        this.imgUrl = imgUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameOfService() {
        return nameOfService;
    }

    public void setNameOfService(String nameOfService) {
        this.nameOfService = nameOfService;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Set<OrderService> getService() {
        return service;
    }
    public List<Order> getOrder(){
        return service.stream().map(x->x.getOrder()).toList();
    }
}
