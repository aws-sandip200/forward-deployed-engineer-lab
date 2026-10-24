package com.forwarddeployed.pricing;

import org.springframework.stereotype.Component;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.Locale;

/** Local sample data only; replace or augment with official APIs or licensed feeds. */
@Component
public class DemoProductProvider implements ProductProvider {
    @Override public String name() { return "demo-sample-data"; }

    @Override public List<ProductOffer> search(String query, String currency) {
        String q = query.toLowerCase(Locale.ROOT);
        String product = q.contains("phone") ? "Example smartphone"
                : q.contains("headphone") ? "Example wireless headphones"
                : "Example product matching: " + query;
        String c = (currency == null || currency.isBlank()) ? "INR" : currency.toUpperCase(Locale.ROOT);
        Instant now = Instant.now();
        return List.of(
            offer(product, "Demo Store A", "DEMO-A", "https://example.com/store-a", "3999.00", "99.00", c, true, now),
            offer(product, "Demo Store B", "DEMO-B", "https://example.com/store-b", "3799.00", "249.00", c, true, now),
            offer(product, "Demo Store C", "DEMO-C", "https://example.com/store-c", "3599.00", "0.00", c, false, now),
            offer(product, "Demo Store D", "DEMO-D", "https://example.com/store-d", "4299.00", "0.00", c, true, now)
        );
    }

    private ProductOffer offer(String name, String seller, String source, String url,
                               String price, String shipping, String currency, boolean stock, Instant at) {
        BigDecimal item = new BigDecimal(price);
        BigDecimal ship = new BigDecimal(shipping);
        return new ProductOffer(name, seller, source, url, item, ship, item.add(ship), currency, stock, at);
    }
}