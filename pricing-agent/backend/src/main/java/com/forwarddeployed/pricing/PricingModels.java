package com.forwarddeployed.pricing;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;
import java.math.BigDecimal;
import java.util.List;

record CompareRequest(@NotBlank String query, @PositiveOrZero BigDecimal maxBudget, String currency) {}
record CompareResponse(String query, ProductOffer recommendation, List<ProductOffer> offers, String rankingMethod, List<String> notes) {}