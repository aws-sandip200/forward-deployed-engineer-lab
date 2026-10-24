package com.forwarddeployed.pricing;

import java.math.BigDecimal;
import java.time.Instant;

public record ProductOffer(
    String productName,
    String seller,
    String source,
    String productUrl,
    BigDecimal itemPrice,
    BigDecimal shippingCost,
    BigDecimal totalPrice,
    String currency,
    boolean inStock,
    Instant observedAt
) {}