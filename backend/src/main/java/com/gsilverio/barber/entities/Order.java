package com.gsilverio.barber.entities;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
@Entity
@Table(name="tb_order")
public class Order implements Serializable {

    private static final long serialVersionUID =1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //BD ARMAZENAR NO FORMATO UTC
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant date;
    private Integer status;
    //SET-> nao pode ter a repetição do mesmo servico
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
    @OneToMany(mappedBy = "id.order")
    private Set<OrderService> services = new HashSet<>();
    public Order(){
    }

    public Order(Long id, Instant date, Integer status) {
        this.id = id;
        this.date = date;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getDate() {
        return date;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Set<OrderService> getServices() {
        return services;
    }

    public List<KindOfService> getKindOfService(){
        return services.stream().map(x->x.getKindOfService()).toList();
    }
}
