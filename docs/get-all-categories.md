---
id: get-all-categories
title: get all category category API
sidebar_label: get all category category API
---

# get all category category API

The get all category category API endpoint allows you to add a new category to your store in EasyOrders.

## You Must have API Key
You must get API key from previous docs and API key should have permission to categories:read  

## Endpoint

- **Method**: GET
- **URL**: `https://api.easy-orders.net/api/v1/external-apps/categories/`

## Request Headers

- **Api-Key**: `string`

Replace `string` with your API key.

## Response Body (JSON)

```js
const category = {
  "thumb": "example_thumb_value",
  "created_at": "2024-04-26T12:00:00Z",
  "name": "example_category_name",
  "slug": "example_category_slug",
  "show_in_header": true,
  "hidden": false,
  "position": 1,
  "parent_id": "id-of-parent-or-null"
  "children": [] // same as this object
}


```
