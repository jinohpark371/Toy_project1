package com.jinoh.rareitemServer.Controller;


import com.jinoh.rareitemServer.Service.TripService;
import com.jinoh.rareitemServer.domain.Trip;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trips")
@RequiredArgsConstructor
public class TripController {

    private final TripService tripService;

    @GetMapping
    public List<Trip> getAllTrips(){
        return tripService.getAllTrips();
    }

    @PostMapping
    public Trip createTrip(@RequestBody Trip trip){
        return tripService.createTrip();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteTrip(@PathVariable Long id){
        tripService.deleteTrip(id);

        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/schedules")
    public ResponseEntity<Sche>



}
