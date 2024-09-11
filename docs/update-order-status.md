---
id: update-order-status
title: Update Order Status API
sidebar_label: Update Order Status API
---

# Update Order Status API

The Update Order Status API endpoint allows you to change the status of a specific order in your EasyOrders store.

## You Must have API Key

You must get an API key from previous docs and the API key should have permission to orders:update

## Endpoint

- **Method**: PUT
- **URL**: `https://api.easy-orders.net/api/v1/external-apps/orders/:order_id/status`

## Request Headers

- **Api-Key**: `string`

Replace `string` with your API key.

## Available Statuses

The following statuses are available for updating an order:

- `pending`: The order has been placed but not yet processed.
- `pending_payment`: The order is awaiting payment confirmation.
- `paid`: The payment for the order has been received.
- `paid_failed`: The payment attempt for the order has failed.
- `processing`: The order is being prepared for shipment.
- `in_delivery`: The order has been shipped and is in transit.
- `delivered`: The order has been successfully delivered to the customer.
- `canceled`: The order has been canceled.

## Request Body (JSON)

```js
const requestBody = {
  status: "processing", // new status of the order
};
```
