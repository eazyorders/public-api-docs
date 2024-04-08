---
id: update-shipping-api
title: Update Shipping API
sidebar_label: Update Shipping API
---

# Update Shipping API

The Update Shipping API endpoint allows you to update shipping costs for different locations in [Your API Name].

## Endpoint

- **Method**: PATCH
- **URL**: `https://api.easy-orders.net/api/v1/external-apps/shipping`

## Request Headers

- **Api-Key**: string

Replace `string` with your API key.

## Request Body (Payload)

The request body should be a string containing comma-separated key-value pairs where the key represents the location (e.g., city or area) and the value represents the shipping cost. Here's the format:

```js
// assume that you have cities like this
const cities = [
    {
        "name": "cairo",
        "shipping_cost": 30
    },
    {
        "name": "alexandria",
        "shipping_cost": 30
    }

]

// here is the payload for updaing store shipping
const updateShipping = {
    is_active: true, // must be true
    cities: cities.map((city) => `${city.name}:${city.shipping_cost}`).join(","),
}
```

the end result of cities should be a string in this format
### Example

```plaintext
cairo:30,alexander:40
```
```plaintext
القاهرة:22,الاسكندرية:33
```

### Full Example

To create a PATCH API request using Markdown format for the endpoint `https://api.easy-orders.net/api/v1/external-apps/shipping`, with the header `Api-Key: secret` and JSON body containing `is_active` and `cities` fields, you can follow this structure:

### PATCH Request

#### Endpoint:
```
https://api.easy-orders.net/api/v1/external-apps/shipping
```

#### Headers:
```
Api-Key: secret
```

#### Body:
```json
{
    "is_active": true,
    "cities": "cairo:30,alexander:40"
}
```
