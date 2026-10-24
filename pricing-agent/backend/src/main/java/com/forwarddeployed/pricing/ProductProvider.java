package com.forwarddeployed.pricing;

import java.util.List;

public interface ProductProvider {
    String name();
    List<ProductOffer> search(String query, String currency);
}