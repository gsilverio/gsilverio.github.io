package com.gsilverio.barber.dto;

import com.gsilverio.barber.entities.KindOfService;
import com.gsilverio.barber.repositories.KindOfServiceRepository;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

import java.io.Serializable;

public class KindOfServiceDTO implements Serializable {
    private static final long serialVersionUID =1L;
    private Long id;
    @NotBlank(message = "Campo requerido")
    @Size(min = 5, max = 40, message = "Nome do Serviço deve ter entre 5 a 40 caracteres")
    private String nameOfService;
    @Positive(message = "Preco deve ser positivo")
    private Double price;
    @NotBlank(message = "Campo requerido e valido")
    @Size(min = 5, max = 40, message = "Url da imagem deve ter entre 5 a 40 caracteres")
    private String imgUrl;

    public KindOfServiceDTO(){
    }
    public KindOfServiceDTO(Long id, String nameOfService, Double price, String imgUrl) {
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

    public KindOfServiceDTO(KindOfService kindOfService){
        id=kindOfService.getId();
        nameOfService=kindOfService.getNameOfService();
        price=kindOfService.getPrice();
        imgUrl=kindOfService.getImgUrl();
    }
}
