---
id: get-order-by-short-id
title: Get Order by Short ID API
sidebar_label: Get Order by Short ID API
---

# Get Order by Short ID API

The Get Order by Short ID API endpoint allows you to retrieve details of a specific order from your store using its numeric short ID (the order number shown in the dashboard).

## You Must have API Key

You must get API key from previous docs and API key should have permission to orders:read

## Endpoint

- **Method**: GET
- **URL**: `https://api.easy-orders.net/api/v1/external-apps/orders/short/:short_id`

Replace `:short_id` with the order's numeric short ID (e.g. `46`).

## Request Headers

- **Api-Key**: `string`

Replace `string` with your API key.

## Response Body (JSON)

```js
const dataYouWillReceive = {
  id: "ae120355-336b-48cd-8fed-3f1600015357", // order UUID
  updated_at: "2026-07-19T10:13:36.945509Z",
  created_at: "2026-07-02T12:53:05.531625Z",
  created_day: "2026-07-02T12:53:05.531615Z",
  guest_id: "c5f5c050-1fb0-401f-8259-d0d588eb6d1e",
  store_id: "4f5fc0a6-614e-4fb0-88f4-4ce1ed6d086f",
  cost: 16748, // products costs
  shipping_cost: 2, // shipping costs
  total_cost: 16750, // total costs
  expense: 2,
  status: "delivered",
  is_seen: true,
  short_id: 46, // numeric order number
  metadata: {
    tracking: {
      first_order_at: "2026-07-02T12:53:05.303Z",
      first_visit_at: "2026-07-02T12:52:41.208Z",
      orders_count: 0,
      pages_visited: ["/", "/collections/SHOES", "/products/duramo-sl2-w-running-shoes-for-women", "/checkout"],
      referrer: "app.easy-orders.net",
      sessions_count: 1,
      visit_duration_seconds: 24,
    },
  },
  full_name: "حسام ملاك محمد", // customer name
  email: "test12@gmail.com", // customer email
  phone: "01208348383", // customer phone
  government: "المنيا", // customer gov
  address: "منوف المنوفية مصر", // customer address
  ip: "41.69.245.555:43543",
  ip_country: "eg",
  payment_method: "cod",
  cart_items: [
    {
      id: "b9013b18-9eaa-4908-a1db-28d19a51a056",
      product_id: "bf970627-d12b-4a62-af20-9b8c98e6f33a",
      variant_id: "ad0b0971-3957-402f-948f-de6166ec6629", // variant id and could be undefined if product has no variants
      store_id: "4f5fc0a6-614e-4fb0-88f4-4ce1ed6d086f",
      order_id: "ae120355-336b-48cd-8fed-3f1600015357",
      price: 6249, // cart item price
      quantity: 1,
      in_cart: false,
      is_upsell: false,
      metadata: {},
      product: {
        id: "bf970627-d12b-4a62-af20-9b8c98e6f33a",
        store_id: "4f5fc0a6-614e-4fb0-88f4-4ce1ed6d086f",
        name: " Duramo Sl2 W Running Shoes For Women",
        price: 5398,
        sale_price: 4999,
        slug: "duramo-sl2-w-running-shoes-for-women",
        thumb: "https://easyorders.fra1.digitaloceanspaces.com/1778931633604188178.webp",
        images: [
          "https://easyorders.fra1.digitaloceanspaces.com/1778931633587297695.webp",
          "https://easyorders.fra1.digitaloceanspaces.com/1778931632880923833.webp",
        ],
      },
      variant: {
        id: "ad0b0971-3957-402f-948f-de6166ec6629",
        product_id: "bf970627-d12b-4a62-af20-9b8c98e6f33a",
        price: 7249,
        sale_price: 6249,
        quantity: 0,
        taager_code: "",
        variation_props: [
          {
            id: "7cda294e-793f-4f03-974c-051eb60e82d5",
            variation: "Size",
            variation_prop: "40",
            product_variant_id: "ad0b0971-3957-402f-948f-de6166ec6629",
          },
        ],
      },
    },
    {
      id: "1b1d337a-e06f-4715-bcb4-9033e56b3e28",
      product_id: "eaf52438-1170-4f3a-9deb-88f8fcd92e9a",
      variant_id: "3a80b86b-6b0d-42f3-b872-f035794b2ec6",
      store_id: "4f5fc0a6-614e-4fb0-88f4-4ce1ed6d086f",
      order_id: "ae120355-336b-48cd-8fed-3f1600015357",
      price: 10499,
      quantity: 1,
      in_cart: false,
      is_upsell: false,
      metadata: null,
      product: {
        id: "eaf52438-1170-4f3a-9deb-88f8fcd92e9a",
        store_id: "4f5fc0a6-614e-4fb0-88f4-4ce1ed6d086f",
        name: "Musamam White Intense Eau de Parfum",
        price: 2999,
        sale_price: 2499,
        slug: "musamam-white-intense-eau-de-parfum",
        thumb: "https://easyorders.fra1.digitaloceanspaces.com/1778770765761471760.webp",
      },
      variant: {
        id: "3a80b86b-6b0d-42f3-b872-f035794b2ec6",
        product_id: "eaf52438-1170-4f3a-9deb-88f8fcd92e9a",
        price: 10999,
        sale_price: 10499,
        quantity: 0,
        taager_code: "",
        variation_props: [
          {
            id: "a21e1b89-b2d8-4dc9-bcbf-853463bf0433",
            variation: "Size",
            variation_prop: "100ML",
            product_variant_id: "3a80b86b-6b0d-42f3-b872-f035794b2ec6",
          },
        ],
      },
    },
  ],
};
```
