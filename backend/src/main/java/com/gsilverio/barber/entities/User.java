package com.gsilverio.barber.entities;


import jakarta.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
@Entity
@Table(name = "tb_user")
public class User implements Serializable {
    private static final long serialVersionUID =1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String password;

    /*@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant createdAT;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant updatedAT;*/
    @OneToMany(mappedBy = "user")
    private List<Order> orders = new ArrayList<>();
    public User(){
    }

    public User(Long id, String name, String email, String phone,String password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    /*public Instant getCreatedAT() {
        return createdAT;
    }*/

    public List<Order> getOrders() {
        return orders;
    }

   /* public Instant getUpdatedAT() {
        return updatedAT;
    }
    @PrePersist
    public void prePersist(){
        createdAT = Instant.now();
    }
    @PreUpdate
    public void preUpdate(){
        updatedAT = Instant.now();
    }*/
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
