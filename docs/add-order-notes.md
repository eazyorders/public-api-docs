---
id: add-order-notes
title: Add Order Notes API
sidebar_label: Add Order Notes API
---

# Add Order Notes API

The Add Order Notes API endpoint allows you to add notes to a specific order in your EasyOrders store.

## You Must have API Key

You must get an API key from previous docs and the API key should have permission to orders:update

## Endpoint

- **Method**: POST
- **URL**: `https://api.easy-orders.net/api/v1/external-apps/order-notes`

## Request Headers

- **Api-Key**: `string`

Replace `string` with your API key.

## Request Body (JSON)

```js
const requestBody = {
  order_id: "2692e31f-27f6-472d-b4cd-c0c1c168511c", // order id
  note: "Customer requested gift wrapping.",
  store_id: "29bafd4f-5e5a-4faf-8f0f-6c4379eb65ef", // store id
  type: "public", // type of note, e.g., public, private (public notes will be visible to the customer)
};
```
