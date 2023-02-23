package com.gsilverio.barber.resources;

import com.gsilverio.barber.dto.KindOfServiceDTO;
import com.gsilverio.barber.dto.UserDTO;
import com.gsilverio.barber.entities.KindOfService;
import com.gsilverio.barber.services.KindOfServService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
@CrossOrigin(origins = {"http://localhost:3000"})

@RestController
@RequestMapping(value = "/kindofservice")
public class KindOfServiceResource {
    @Autowired
    private KindOfServService kindOfServService;
    @GetMapping
    public ResponseEntity<Page<KindOfServiceDTO>> findAll(Pageable pageable){
        Page<KindOfServiceDTO> list = kindOfServService.findAll(pageable);
        return ResponseEntity.ok().body(list);
    }
    @GetMapping(value="/{id}")
    public ResponseEntity<KindOfServiceDTO> findById(@PathVariable Long id){
        KindOfServiceDTO dto = kindOfServService.findById(id);
        return ResponseEntity.ok().body(dto);
    }
    @PostMapping
    public ResponseEntity<KindOfServiceDTO> insert(@Valid @RequestBody KindOfServiceDTO dto){
        dto  = kindOfServService.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<KindOfServiceDTO> update(@Valid @PathVariable Long id,@RequestBody KindOfServiceDTO dto) {
        dto = kindOfServService.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        kindOfServService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
