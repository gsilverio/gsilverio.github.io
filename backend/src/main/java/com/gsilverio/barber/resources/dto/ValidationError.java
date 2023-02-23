package com.gsilverio.barber.resources.dto;

import com.gsilverio.barber.resources.execeptions.StandardError;

import java.util.ArrayList;
import java.util.List;

public class ValidationError extends StandardError {
    private List<FieldMessage> errors = new ArrayList<>();

    public List<FieldMessage> getErrors() {
        return errors;
    }
    public void addError(String fieldName, String message){
        errors.add(new FieldMessage(fieldName, message));
    }
}
