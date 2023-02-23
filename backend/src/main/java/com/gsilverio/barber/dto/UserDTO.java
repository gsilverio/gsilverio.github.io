package com.gsilverio.barber.dto;

import com.gsilverio.barber.entities.Order;
import com.gsilverio.barber.entities.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class UserDTO implements Serializable {
    private static final long serialVersionUID =1L;
    private Long id;
    @NotBlank(message = "Campo requerido")
    @Size(min = 3, max = 40, message = "Nome de usuario deve ter entre 3 a 40 caracteres")
    private String name;
    @Email(message = "Email tem que ser valido")
    @NotBlank(message = "Campo requerido")
    @Size(min = 10, max = 30, message = "Nome de usuario deve ter entre 10 a 30 caracteres")
    private String email;
    @NotBlank(message = "Campo requerido")
    @Size(min = 11, message = "Numero de celular deve ter no minimo 11 caracteres numericos")
    private String phone;
    @NotBlank(message = "Campo requerido")
    @Size(min = 7, max = 40, message = "Senha deve conter entre 3 a 40 caracteres")
    private String password;

    private List<Order> orders = new ArrayList<>();
    public UserDTO(){

    }

    public UserDTO(Long id, String name, String email, String phone, String password) {
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

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
    public UserDTO(User entity){
        this.id=entity.getId();
        this.name=entity.getName();
        this.email=entity.getEmail();
        this.phone=entity.getPhone();
        this.password=entity.getPassword();
    }
    public UserDTO(User entity, Set<Order> orders){
        this(entity);
        orders.forEach(cat->this.orders.add(cat));
    }

}
