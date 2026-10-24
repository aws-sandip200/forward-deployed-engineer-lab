package com.forwarddeployed.pricing;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;

@Service
public class PricingAgentService {
    private final List<ProductProvider> providers;
    public PricingAgentService(List<ProductProvider> providers) { this.providers = providers; }

    public CompareResponse compare(CompareRequest request) {
        String currency = request.currency() == null || request.currency().isBlank()
                ? "INR" : request.currency().trim().toUpperCase(Locale.ROOT);

        List<ProductOffer> all = providers.stream()
                .flatMap(provider -> provider.search(request.query().trim(), currency).stream())
                .filter(offer -> currency.equalsIgnoreCase(offer.currency()))
                .sorted(Comparator.comparing(ProductOffer::totalPrice))
                .toList();

        List<ProductOffer> available = all.stream().filter(ProductOffer::inStock).toList();
        List<ProductOffer> eligible = request.maxBudget() == null ? available
                : available.stream().filter(o -> o.totalPrice().compareTo(request.maxBudget()) <= 0).toList();
        ProductOffer best = eligible.stream().min(Comparator.comparing(ProductOffer::totalPrice)).orElse(null);

        List<String> notes = new ArrayList<>();
        notes.add("Ranked by item price plus shipping; taxes and delivery estimates may not be included.");
        notes.add("Demo provider returns sample data only. Connect official APIs for live comparisons.");
        if (available.isEmpty()) notes.add("No in-stock offers were returned.");
        else if (best == null) notes.add("No in-stock offer is within the supplied budget.");
        else notes.add("Recommendation is the lowest total-price in-stock offer within the budget, if supplied.");
        return new CompareResponse(request.query(), best, all, "lowest in-stock landed cost", notes);
    }
}