package com.forwarddeployed.pricing;

import org.junit.jupiter.api.Test;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

class PricingAgentServiceTest {
    @Test void choosesLowestInStockTotalPriceWithinBudget() {
        ProductOffer expensive = offer("Store A", "110.00", true);
        ProductOffer best = offer("Store B", "95.00", true);
        ProductOffer outOfStock = offer("Store C", "50.00", false);
        ProductProvider provider = new ProductProvider() {
            public String name() { return "test"; }
            public List<ProductOffer> search(String query, String currency) { return List.of(expensive, best, outOfStock); }
        };
        PricingAgentService service = new PricingAgentService(List.of(provider));
        CompareResponse response = service.compare(new CompareRequest("test item", new BigDecimal("100"), "INR"));
        assertEquals("Store B", response.recommendation().seller());
        assertEquals(3, response.offers().size());
    }

    @Test void returnsNoRecommendationWhenBudgetTooLow() {
        ProductProvider provider = new ProductProvider() {
            public String name() { return "test"; }
            public List<ProductOffer> search(String query, String currency) { return List.of(offer("Store A", "110.00", true)); }
        };
        CompareResponse response = new PricingAgentService(List.of(provider))
                .compare(new CompareRequest("test item", new BigDecimal("10"), "INR"));
        assertNull(response.recommendation());
    }

    private ProductOffer offer(String seller, String total, boolean inStock) {
        BigDecimal totalPrice = new BigDecimal(total);
        return new ProductOffer("Test product", seller, "TEST", "https://example.com", totalPrice,
                BigDecimal.ZERO, totalPrice, "INR", inStock, Instant.now());
    }
}