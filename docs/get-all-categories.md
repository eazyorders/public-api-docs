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

| Operator  | Description                   | Example                                                                                               |
| --------- | ----------------------------- | ----------------------------------------------------------------------------------------------------- |
| `eq`      | Equal to `=`                  | `filter=name\|\|eq\|\|iphone`                                                                         |
| `ne`      | Not equal to `!=`             | `filter=quantity\|\|ne\|\|0`                                                                          |
| `gt`      | Greater than `>`              | `filter=price\|\|gt\|\|100`                                                                           |
| `lt`      | Less than `<`                 | `filter=quantity\|\|lt\|\|10`                                                                         |
| `gte`     | Greater than or equal to `>=` | `filter=price\|\|gte\|\|175`                                                                          |
| `lte`     | Less than or equal to `<=`    | `filter=price\|\|lte\|\|150`                                                                          |
| `$in`     | In                            | `filter=status\|\|$in\|\|active,pending`<br/>`filter=id\|\|$in\|\|${products ids seperated by comma}` |
| `cont`    | Contains                      | `filter=name\|\|cont\|\|iphone`                                                                       |
| `isnull`  | Is null                       | `filter=description\|\|isnull`                                                                        |
| `notnull` | Is not null                   | `filter=description\|\|notnull`                                                                       |

### Fetch buy parent category id

```
filter=parent_id||eq||id-of-parent-category
```

### Multiple Filters

Multiple filters should be specified as separate filter parameters in the query:

```
filter=parent_id||isnull&filter=hidden||eq||false
```

This example will filter for records where:

- The parent_id is null AND
- The hidden field equals false

Each filter condition is specified using a separate `filter=` parameter in the URL, joined with the `&` character.

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
