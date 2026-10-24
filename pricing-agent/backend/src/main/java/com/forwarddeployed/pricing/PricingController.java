package com.forwarddeployed.pricing;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class PricingController {
    private final PricingAgentService service;
    public PricingController(PricingAgentService service) { this.service = service; }

    @GetMapping("/health")
    public Map<String, String> health() { return Map.of("status", "UP", "service", "pricing-agent"); }

    @PostMapping("/pricing/compare")
    public CompareResponse compare(@Valid @RequestBody CompareRequest request) {
        if (request.query().trim().length() < 2)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Query must contain at least 2 characters");
        if (request.currency() != null && !request.currency().isBlank()
                && !request.currency().trim().matches("[A-Za-z]{3}"))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Currency must be a 3-letter code, e.g. INR or USD");
        return service.compare(request);
    }
}