---
id: get-all-products
title: get all product Product API
sidebar_label: get all product Product API
---

# get all product Product API

The get all product Product API endpoint allows you to add a new product to your store in EasyOrders.

## You Must have API Key

You must get API key from previous docs and API key should have permission to products:read

## Endpoint

- **Method**: GET
- **URL**: `https://api.easy-orders.net/api/v1/external-apps/products`

## Request Headers

- **Api-Key**: `string`

Replace `string` with your API key.

## Filter the products

### Basic Syntax

Filters follow this pattern:

```
field||operator||value
```

Where:

- `field` is the property name you want to filter on
- `operator` is the comparison operation
- `value` is what you're comparing against

### Operators

| Operator | Description              | Example                         |
| -------- | ------------------------ | ------------------------------- |
| `eq`     | Equal to                 | `filter=name\|\|eq\|\|iphone`   |
| `cont`   | Contains                 | `filter=name\|\|cont\|\|iphone` |
| `neq`    | Not equal to             | `filter=quantity\|\|neq\|\|0`   |
| `gt`     | Greater than             | `filter=price\|\|gt\|\|100`     |
| `gte`    | Greater than or equal to | `filter=price\|\|gte\|\|175`    |
| `lt`     | Less than                | `filter=quantity\|\|lt\|\|10`   |
| `lte`    | Less than or equal to    | `filter=price\|\|lte\|\|150`    |

### Multiple Filters

Multiple filters should be specified as separate filter parameters in the query:

```
filter=category_id||eq||category-id&filter=price||gte||100
```

This example will filter for records where:

- The category_id is equal to category-id AND
- The price is greater than or equal to 100

Each filter condition is specified using a separate `filter=` parameter in the URL, joined with the `&` character.

## Response Body (JSON)

```js
const product = {
  name: "ترنج أديداس",
  price: 175, // original price
  sale_price: 150, // sale price
  description:
    '<p><br></p><p>ترنج اديداس 3 الوان مقاسات لارج و اكس لارج و 2 اكس لارج</p><p><br></p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/Ibjm2KHfymo?showinfo=0"></iframe><p><br></p>',
  slug: "trnj-adydas", // must be in english and unique
  sku: "642c99587a397366b436f46b", // your sku
  thumb: "https://domain.com/url_to_img.png",
  images: [
    "https://domain.com/url_to_img.png",
    "https://domain.com/url_to_img.png",
  ],
  quantity: 12, // or 0 if not available
  track_stock: true, // true if you want to track quantity and decrease when new order to product
  disable_orders_for_no_stock: false, // disable getting orders if quantity is 0
  categories: [
    {
      id: "category-id",
      name: "name",
    },
    {
      id: "category-id",
      name: "name",
    },
  ],
  buy_now_text: "اضغط هنا للشراء",
  is_reviews_enabled: true,
  fake_visitors_min: 20,
  fake_visitors_max: 70,
  fake_timer_hours: 1,
  is_quantity_hidden: false,
  is_header_hidden: false,
  is_free_shipping: false,
  taager_code: "YOUR_PRODUCT_SKU", // your sku
  drop_shipping_provider: "YOUR_COMPANY_NAME", // your company name
  variations: [
    {
      id: "521a0ab9-12e0-4536-b458-47006108c39e",
      name: "اللون",
      product_id: "4501688d-c283-4b24-b7bb-e6406d419367",
      type: "dropdown", // or buttons or color
      props: [
        {
          id: "f803e005-69c7-4b9f-ae2d-0590703aadc9",
          name: "أزرق",
          variation_id: "521a0ab9-12e0-4536-b458-47006108c39e",
          value: "أزرق",
        },
        {
          id: "54b1ed90-3b7b-4330-8278-5f78c6c5e660",
          name: "أسود",
          variation_id: "521a0ab9-12e0-4536-b458-47006108c39e",
          value: "أسود",
        },
        {
          id: "9996bff1-83b0-4192-b334-671e85260255",
          name: "أبيض ",
          variation_id: "521a0ab9-12e0-4536-b458-47006108c39e",
          value: "أبيض",
        },
      ],
    },
    {
      id: "fa9ba052-6140-43f0-92ba-f206a22b764b",
      name: "المقاس",
      product_id: "4501688d-c283-4b24-b7bb-e6406d419367",
      type: "dropdown",
      props: [
        {
          id: "e067d3a4-689d-4c5d-9aa8-1af8f18c7c60",
          name: "l",
          variation_id: "fa9ba052-6140-43f0-92ba-f206a22b764b",
          value: "l",
        },
        {
          id: "34bceb7e-b17a-42ca-a4f0-c4202c23ab26",
          name: "xl",
          variation_id: "fa9ba052-6140-43f0-92ba-f206a22b764b",
          value: "xl",
        },
        {
          id: "1013bda4-52b6-4f04-8e4a-8a5ddea0cc02",
          name: "2xl",
          variation_id: "fa9ba052-6140-43f0-92ba-f206a22b764b",
          value: "2xl",
        },
      ],
    },
  ],
  variants: [
    {
      id: "13aae9ed-4844-43af-b54c-ab35b4ed13da",
      price: 175,
      sale_price: 0,
      quantity: 0,
      taager_code: "642c97467a397366b436f40a", // your variant id
      variation_props: [
        {
          variation: "اللون",
          variation_prop: "أزرق",
        },
        {
          variation: "المقاس",
          variation_prop: "l",
        },
      ],
    },
    {
      price: 175,
      sale_price: 0,
      quantity: 0,
      taager_code: "642c976b7a397366b436f40f",
      variation_props: [
        {
          variation: "اللون",
          variation_prop: "أزرق",
        },
        {
          variation: "المقاس",
          variation_prop: "xl",
        },
      ],
    },
    {
      price: 175,
      sale_price: 0,
      quantity: 0,
      taager_code: "642c979f7a397366b436f415",
      variation_props: [
        {
          variation: "اللون",
          variation_prop: "أزرق",
        },
        {
          variation: "المقاس",
          variation_prop: "2xl",
        },
      ],
    },
    {
      price: 175,
      sale_price: 0,
      quantity: 0,
      taager_code: "642c97cc7a397366b436f419",
      variation_props: [
        {
          variation: "اللون",
          variation_prop: "أسود",
        },
        {
          variation: "المقاس",
          variation_prop: "l",
        },
      ],
    },
    {
      price: 175,
      sale_price: 0,
      quantity: 0,
      taager_code: "642c98837a397366b436f44e",
      variation_props: [
        {
          variation: "اللون",
          variation_prop: "أسود",
        },
        {
          variation: "المقاس",
          variation_prop: "xl",
        },
      ],
    },
    {
      price: 175,
      sale_price: 0,
      quantity: 0,
      taager_code: "642c98a17a397366b436f454",
      variation_props: [
        {
          variation: "اللون",
          variation_prop: "أسود",
        },
        {
          variation: "المقاس",
          variation_prop: "2xl",
        },
      ],
    },
    {
      price: 175,
      sale_price: 0,
      quantity: 0,
      taager_code: "642c98d47a397366b436f458",
      variation_props: [
        {
          variation: "اللون",
          variation_prop: "أبيض ",
        },
        {
          variation: "المقاس",
          variation_prop: "l",
        },
      ],
    },
    {
      price: 175,
      sale_price: 0,
      quantity: 0,
      taager_code: "642c99117a397366b436f463",
      variation_props: [
        {
          variation: "اللون",
          variation_prop: "أبيض ",
        },
        {
          variation: "المقاس",
          variation_prop: "xl",
        },
      ],
    },
    {
      price: 175,
      sale_price: 0,
      quantity: 0,
      taager_code: "642c99587a397366b436f46b",
      variation_props: [
        {
          variation: "اللون",
          variation_prop: "أبيض ",
        },
        {
          variation: "المقاس",
          variation_prop: "2xl",
        },
      ],
    },
  ],
};
```
