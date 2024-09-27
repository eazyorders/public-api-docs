---
id: update-product-stock
title: Update Product Stock API
sidebar_label: Update Product Stock API
---

# Update Product Stock API

The Update Product Stock API endpoint allows you to update the stock quantity of a specific product or variant in your EasyOrders store.

## You Must have API Key

You must get an API key from previous docs and the API key should have permission to update products:update

## Update Product Stock

To update the stock quantity of a product, use the following endpoint:

- **Method**: PATCH
- **URL**: `https://api.easy-orders.net/api/v1/external-apps/products/sku/:sku/quantity`

### Request Body (JSON)

```js
const requestBody = {
  quantity: 10, // New stock quantity (min 0)
};
```

### Request Headers

- **Api-Key**: `string`

Replace `string` with your API key.

## Update Product Variant

To update the details of a product variant, use the following endpoint:

- **Method**: PATCH
- **URL**: `https://api.easy-orders.net/api/v1/external-apps/products/variants/:product_taager_code/:variant_taager_code/quantity` (taager_code is the code of the variant you set when creating the product or variant)

### Request Headers

- **Api-Key**: `string`

### Request Body (JSON)

```js
const requestBody = {
  quantity: 10, // New stock quantity (min 0)
};
```
