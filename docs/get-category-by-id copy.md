---
id: create-category
title: create one category category API
sidebar_label: create one category category API
---

# create one category category API

The create one category category API endpoint allows you to add a new category to your store in EasyOrders.

## You Must have API Key
You must create API key from previous docs and API key should have permission to categories:write  

## Endpoint

- **Method**: POST
- **URL**: `https://api.easy-orders.net/api/v1/external-apps/categories`

## Request Headers

- **Api-Key**: `string`

Replace `string` with your API key.

## Response Body (JSON)

```js
const category = {
  "thumb": "example_thumb_value",
  "name": "example_category_name",
  "slug": "example_category_slug",
  "show_in_header": true,
  "hidden": false,
  "position": 1,
  "parent_id": "id-of-parent-or-null"
}


```
