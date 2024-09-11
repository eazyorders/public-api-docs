---
id: get-order-by-id
title: Get Order by ID API
sidebar_label: Get Order by ID API
---

# Get Order by ID API

The Get Order by ID API endpoint allows you to retrieve details of a specific order from your store in EasyOrders.

## You Must have API Key

You must get API key from previous docs and API key should have permission to orders:read

## Endpoint

- **Method**: GET
- **URL**: `https://api.easy-orders.net/api/v1/external-apps/orders/:order_id`

## Request Headers

- **Api-Key**: `string`

Replace `string` with your API key.

## Response Body (JSON)

```js
const dataYouWillReceive = {
  id: "2692e31f-27f6-472d-b4cd-c0c1c168511c", // order id
  updated_at: "2024-04-08T03:01:02.474921+02:00",
  created_at: "2024-04-08T03:01:02.474921+02:00",
  store_id: "29bafd4f-5e5a-4faf-8f0f-6c4379eb65ef",
  cost: 730, // products costs
  shipping_cost: 20, // shipping costs
  total_cost: 750, // total costs
  status: "pending",
  full_name: "Violet Henson", // customer name
  phone: "01034567890", // customer phone
  government: "منطقة الرياض", // customer gov
  address: "Est est sunt in ven", // customer address
  payment_method: "cod",
  cart_items: [
    {
      id: "27845040-1252-448a-a257-1118e9ff2424",
      product_id: "fac7a724-63bd-42c8-8179-9e96f992504f",
      variant_id: "cb0eb2b5-bf08-430e-a5bb-7a2af7c7bb31", // variant id and could be undefined if product has no variants
      store_id: "29bafd4f-5e5a-4faf-8f0f-6c4379eb65ef",
      price: 220, // cart item price
      quantity: 1,
      product: {
        id: "fac7a724-63bd-42c8-8179-9e96f992504f",
        updated_at: "2024-03-16T10:48:02.301593+02:00",
        created_at: "2022-12-19T17:27:53.497836+02:00",
        store_id: "29bafd4f-5e5a-4faf-8f0f-6c4379eb65ef",
        name: "ترينج  شبابي أندر ارمر",
        price: 220,
        sku: "EG010102RO5G06", // you can set in creating product
        taager_code: "020501DR0523", // you can set in creating product
        drop_shipping_provider: "taager", // name of drop-shipping provider that you can set while creating a product
      },
      variant: {
        // a product variant
        id: "cb0eb2b5-bf08-430e-a5bb-7a2af7c7bb31",
        product_id: "fac7a724-63bd-42c8-8179-9e96f992504f",
        price: 220,
        sale_price: 0,
        quantity: 0,
        taager_code: "020501WL0530", // code or sku that you can set in product variant while creating product
        variation_props: [
          {
            id: "fd336249-d66f-43df-bce0-2ccc9fa42cc6",
            variation: "color",
            variation_prop: "#808080",
            product_variant_id: "cb0eb2b5-bf08-430e-a5bb-7a2af7c7bb31",
          },
          {
            id: "ab56b8cf-e670-487c-a329-f604238638e5",
            variation: "size",
            variation_prop: "L",
            product_variant_id: "cb0eb2b5-bf08-430e-a5bb-7a2af7c7bb31",
          },
        ],
      },
    },
    {
      id: "869b9144-7505-4db4-84f6-1389c85ade13",
      product_id: "b185e6d0-ebda-4e47-ba0c-e6de5e19acc7",
      store_id: "29bafd4f-5e5a-4faf-8f0f-6c4379eb65ef",
      order_id: "2692e31f-27f6-472d-b4cd-c0c1c168511c",
      price: 510,
      quantity: 1,
      product: {
        id: "b185e6d0-ebda-4e47-ba0c-e6de5e19acc7",
        updated_at: "2024-03-16T10:48:02.301593+02:00",
        created_at: "2023-05-16T07:26:23.934723+03:00",
        store_id: "29bafd4f-5e5a-4faf-8f0f-6c4379eb65ef",
        name: "EARBUDS RO5 GAMING",
        price: 510,
        sku: "EG010102RO5G06",
        taager_code: "EG010102RO5G06",
        drop_shipping_provider: "taager", // name of drop-shipping provider that you can set while creating a product
      },
    },
  ],
};
```
