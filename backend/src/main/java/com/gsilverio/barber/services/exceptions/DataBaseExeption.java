package com.gsilverio.barber.services.exceptions;

public class DataBaseExeption extends RuntimeException{
    private static final long serialVersionUID=1L;
    public DataBaseExeption(String msg){
        super(msg);
    }
}
