---
id: create-order
title: Create Order API
sidebar_label: Create Order API
---

# Create Order API

The Create Order API endpoint allows your system (ERP, CRM, landing page builder, marketplace...) to send orders to your EasyOrders store automatically, without manual entry.

Orders created with this API are regular store orders: they appear in the **Orders** list of your dashboard and follow the same flow as the orders placed in your store (stock update, notifications, installed apps and [webhooks](./webhooks.md)).

## You Must have API Key

You must get an API key from [previous docs](./auth.md) and the API key should have permission to orders:create

The order is always created in the store that owns the API key, so you don't need to send a store id.

## Endpoint

- **Method**: POST
- **URL**: `https://api.easy-orders.net/api/v1/external-apps/orders`

## Request Headers

- **Api-Key**: `string`
- **Content-Type**: `application/json`

Replace `string` with your API key.

## Request Body (JSON)

```js
const requestBody = {
  full_name: "Ahmed Mohamed", // required, customer name
  phone: "01012345678", // required, customer phone
  phone_alt: "01112345678", // optional, alternative customer phone
  email: "ahmed@example.com", // optional, customer email
  country: "Egypt", // optional, customer country
  government: "Cairo", // optional, customer gov
  address: "12 Tahrir St, Downtown, Cairo", // required, customer address
  payment_method: "cod", // required, see payment methods below
  shipping_cost: 50, // optional, defaults to your store shipping cost (0 means free shipping)
  coupon_codes: ["SUMMER10"], // optional, coupon codes of your store
  note: "Please call before delivery", // optional, order notes
  ref: "EXT-10025", // optional, id of the order in your system
  metadata: { source: "erp" }, // optional, any extra data
  products: [
    {
      product_id: "6f1c2a8e-3b0e-4b8e-9d3a-2f4b1c9e7a10", // required, product id
      quantity: 2, // required, at least 1
    },
    {
      product_id: "9a3e5c1d-7b2f-4e8a-b6d4-1c9f0e2a3b4c",
      variant_id: "0b7e8f3c-1d2a-4c5b-8e9f-a1b2c3d4e5f6", // required if the product has variants
      quantity: 1,
      price: 150, // optional, unit price, defaults to the product (or variant) price
      metadata: { engraving: "A.M" }, // optional, any extra data of this product
    },
  ],
};
```

### Order Fields

| Field                 | Type             | Required | Description                                                                                                         |
| --------------------- | ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| `full_name`           | string           | Yes      | Customer full name                                                                                                  |
| `phone`               | string           | Yes      | Customer phone: 7 to 15 digits, optionally starting with `+`. Spaces, dashes, dots and parentheses are allowed      |
| `address`             | string           | Yes      | Detailed shipping address                                                                                           |
| `payment_method`      | string           | Yes      | Payment method key, see [Payment Methods](#payment-methods)                                                         |
| `products`            | array            | Yes      | 1 to 100 ordered products, see [Product Fields](#product-fields)                                                    |
| `phone_alt`           | string           | No       | Alternative customer phone, same format as `phone`                                                                  |
| `email`               | string           | No       | Customer email, must be a valid email address                                                                       |
| `country`             | string           | No       | Shipping country                                                                                                    |
| `government`          | string           | No       | Shipping government, state or city                                                                                  |
| `sa_national_address` | string           | No       | Saudi national address                                                                                              |
| `shipping_cost`       | number           | No       | Shipping cost, defaults to your store shipping cost. `0` means free shipping                                        |
| `total_cost`          | number           | No       | Final order total, defaults to products cost + shipping cost - coupons discount                                     |
| `coupon_codes`        | array of strings | No       | Coupon codes of your store to apply                                                                                 |
| `note`                | string           | No       | Order notes                                                                                                         |
| `ref`                 | string           | No       | Id of the order in your system, saved on the order and returned by the [Get Order by ID API](./get-order-by-id.md) |
| `utm_source`          | string           | No       | Marketing source of the order                                                                                       |
| `utm_campaign`        | string           | No       | Marketing campaign of the order                                                                                     |
| `metadata`            | object           | No       | Any extra data to save on the order                                                                                 |

### Product Fields

| Field        | Type    | Required                   | Description                                                                                        |
| ------------ | ------- | -------------------------- | -------------------------------------------------------------------------------------------------- |
| `product_id` | string  | Yes                        | Id of a product of your store                                                                      |
| `variant_id` | string  | For products with variants | Id of the ordered variant of the product                                                           |
| `quantity`   | integer | Yes                        | Ordered quantity, at least 1                                                                       |
| `price`      | number  | No                         | Unit price, defaults to the current product price (the sale price when set, or the variant price) |
| `metadata`   | object  | No                         | Any extra data to save on the ordered product                                                      |

You can get the ids of your products and their variants with the [Get All Products API](./get-all-products.md) (add `join=Variations.Props,Variants.VariationProps` to get the variants) or the [Get Product by ID API](./get-product-by-id.md). Both need the products:read permission.

## Response Body (JSON)

When the order is created, you receive a `201 Created` response:

```js
const dataYouWillReceive = {
  id: "3d9b6a52-6f0e-4f43-9a1e-5b2f7c8d9e01", // order id
  order_number: 1024, // order number shown in the dashboard (short_id)
  status: "pending", // pending for cod orders, pending_payment for the other payment methods
  payment_method: "cod",
  product_cost: 310, // products costs
  shipping_cost: 50, // shipping costs
  coupon_discount: 31, // coupons discount
  total_cost: 329, // total costs
  created_at: "2026-10-18T14:03:00.474921+03:00",
};
```

Use `id` with the [Get Order by ID API](./get-order-by-id.md) and `order_number` with the [Get Order by Short ID API](./get-order-by-short-id.md).

## Payment Methods

`payment_method` is the key of the payment method of the order. A key is 2 to 50 characters long and contains only letters, digits, underscores or dashes. Keys are case-insensitive and saved in lowercase, so `COD` is saved as `cod`.

| Key           | Order status      | Notes                                                          |
| ------------- | ----------------- | -------------------------------------------------------------- |
| `cod`         | `pending`         | Cash on delivery, not allowed for orders with digital products |
| Any other key | `pending_payment` | The order waits for an online or manual payment                |

Available keys: `cod`, `stripe`, `paypal`, `paymob`, `wallet_paymob`, `paylink`, `tap`, `tabby`, `fawaterk`, `taager`, `moyasar`, `paytabs`, `kashier`, `my_fatoorah`, `upay`, `xpay`, `ziina`, `tamara`, `easykash`, `transfer_receipt` (the customer uploads a payment receipt) and `fabmisr`. New payment methods can be used as soon as they are available, without any change to this API.

:::warning

`cod` is the only cash on delivery key. The keys are not checked against the list above, so a typo such as `cash` or `cash_on_delivery` is saved as it is (in lowercase) and creates an order waiting for payment (`pending_payment`). Check the spelling of the keys you send.

:::

:::note

This API only saves the payment method of the order, it doesn't collect the payment. When your system collects the payment, you can update the order status with the [Update Order Status API](./update-order-status.md), for example to `paid`.

:::

## Examples

### Cash on Delivery Order

This order uses your store prices and shipping cost:

```bash
curl -X POST "https://api.easy-orders.net/api/v1/external-apps/orders" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Ahmed Mohamed",
    "phone": "01012345678",
    "government": "Cairo",
    "address": "12 Tahrir St, Downtown, Cairo",
    "payment_method": "cod",
    "ref": "EXT-10025",
    "products": [
      { "product_id": "6f1c2a8e-3b0e-4b8e-9d3a-2f4b1c9e7a10", "quantity": 2 }
    ]
  }'
```

### Custom Prices, Free Shipping and Fixed Total

```bash
curl -X POST "https://api.easy-orders.net/api/v1/external-apps/orders" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Sara Ali",
    "phone": "+966 50 123 4567",
    "address": "King Fahd Rd, Riyadh",
    "payment_method": "tabby",
    "shipping_cost": 0,
    "total_cost": 270,
    "note": "Gift wrapping",
    "products": [
      {
        "product_id": "9a3e5c1d-7b2f-4e8a-b6d4-1c9f0e2a3b4c",
        "variant_id": "0b7e8f3c-1d2a-4c5b-8e9f-a1b2c3d4e5f6",
        "quantity": 2,
        "price": 150
      }
    ]
  }'
```

This order is created with the `pending_payment` status, a products cost of 300 and a total of 270.

### JavaScript (fetch)

```javascript
const response = await fetch("https://api.easy-orders.net/api/v1/external-apps/orders", {
  method: "POST",
  headers: {
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(requestBody),
});

if (response.status === 201) {
  const order = await response.json();
  console.log(`order ${order.order_number} created with id ${order.id}`);
} else if (response.status === 429) {
  // rate limit exceeded: the body is plain text, wait before sending more requests
} else {
  const error = await response.json();
  console.error(response.status, error.message, error.errors);
}
```

## Business Rules

1. **Store**: the order is created in the store that owns the API key. Products and variants must belong to this store, unknown and deleted products are rejected.
2. **Prices**: when a product has no `price`, its current price is used (the sale price when set, or the variant price).
3. **Shipping**: when `shipping_cost` is omitted, your store shipping cost is used. The costs of your shipping areas are not looked up from `government`, so send `shipping_cost` when your shipping cost depends on the city.
4. **Coupons**: the `coupon_codes` and the active automatic coupons of your store are applied like in your store checkout. Send `total_cost` to force the final amount.
5. **Order Status**: `cod` orders are created as `pending`, the orders with any other payment method as `pending_payment`.
6. **Variants**: a product that has variants must be ordered with a `variant_id`.
7. **Stock**: when a product tracks its stock and disables orders when out of stock (`track_stock` and `disable_orders_for_no_stock`), the ordered quantity (summed for the same product or variant) can't be more than the available stock.
8. **Digital Products**: digital products can only be ordered with a quantity of 1 and can't be paid with `cod`.
9. **Blocked Phone Numbers**: orders with a `phone` or `phone_alt` blocked by your store are rejected.
10. **Products Cost**: the products cost of the order must be greater than 0.
11. **All or Nothing**: only a `201` response creates an order. A rejected or failed request never creates an order (or a part of it), so you can fix the request and send it again.
12. **Webhooks**: the **Order Created** [webhook](./webhooks.md) is also sent for the orders created with this API. You can recognize your orders with the `id` returned by this API.

## Avoiding Duplicate Orders

Every successful request creates a new order, even when the same body is sent again. If a request times out or the connection drops before you get the response, check the orders of your store in the dashboard before sending the request again.

## Error Responses

All errors, except `429`, are JSON objects with a `message`. Validation errors also contain an `errors` array with one entry per invalid field: `field` is the path of the field in the request body (for example `products[0].quantity`) and `message` explains the problem.

| Status | When                                                                                                 |
| ------ | ---------------------------------------------------------------------------------------------------- |
| `400`  | Missing, invalid or inactive API key, inactive store, invalid body or invalid fields                 |
| `403`  | The API key doesn't have the orders:create permission                                                |
| `413`  | The request body is larger than 64 KB                                                                |
| `422`  | The order can't be created in your store (products, variants, stock, coupons, blocked phone numbers) |
| `429`  | Rate limit exceeded, the body is the plain text `Limit exceeded`. See [Rate Limit](./rate-limit.md)  |
| `500`  | Unexpected error, try again later                                                                    |

### Missing API Key (400)

```json
{
  "message": "Api-Key not found"
}
```

### Invalid or Inactive API Key (400)

```json
{
  "message": "Api-Key not valid"
}
```

### Inactive Store (400)

Your store is not active or has an unpaid balance:

```json
{
  "message": "Store not active or has over due"
}
```

### Missing Permission (403)

```json
{
  "message": "permission denied"
}
```

### Invalid Body (400)

The body is not valid JSON. An empty body returns `request body is required`:

```json
{
  "message": "request body must be a valid JSON object"
}
```

### Invalid Fields (400)

```json
{
  "message": "validation failed",
  "errors": [
    { "field": "phone", "message": "phone is required" },
    { "field": "payment_method", "message": "payment_method must be 2 to 50 characters long and contain only letters, digits, underscores or dashes" },
    { "field": "products[0].quantity", "message": "quantity must be at least 1" }
  ]
}
```

### Wrong Field Type (400)

```json
{
  "message": "validation failed",
  "errors": [
    { "field": "products.quantity", "message": "products.quantity must be of type integer" }
  ]
}
```

### Order Cannot Be Created (422)

```json
{
  "message": "order cannot be created",
  "errors": [
    { "field": "products[0].product_id", "message": "product not found in the store" },
    { "field": "products[1].variant_id", "message": "variant_id is required for products with variants" },
    { "field": "products[2].quantity", "message": "not enough stock: 5 requested, 3 available" },
    { "field": "phone", "message": "phone number is blocked by the store" }
  ]
}
```

Other `422` errors:

| Field                    | Message                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| `products[i].variant_id` | `variant not found for this product`                                                       |
| `products[i].quantity`   | `digital products can only be ordered with a quantity of 1`                                |
| `payment_method`         | `cash on delivery is not allowed for orders with digital products`                         |
| `coupon_codes`           | Coupon errors, such as `coupon "SUMMER10" not found` or `coupon "SUMMER10" is not active` |
| `products`               | `order product cost must be greater than 0`                                                |

### Body Too Large (413)

```json
{
  "message": "request body is too large"
}
```

### Unexpected Error (500)

```json
{
  "message": "an unexpected error occurred while creating the order, please try again later"
}
```

## Limits and Security

- Keep your API key secret and call this API from your server only, never from a browser or a mobile app: anyone who has the key can create orders in your store.
- Use a dedicated API key for each integration, with only the permissions it needs (for example only orders:create).
- A request can contain up to 100 products and its body is limited to 64 KB.
- You can send up to 40 requests per minute, see [Rate Limit](./rate-limit.md).
