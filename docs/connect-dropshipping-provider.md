---
id: connect-dropshipping
title: Connecting a Dropshipping Provider
sidebar_label: Connecting a Dropshipping Provider
---

# Connecting a Dropshipping Provider

To successfully integrate a dropshipping provider with your platform, follow these steps:

## Step 1: Create API Key with Permissions

1. **User creates API key**: Generate an API key with permissions to create products and update shipping information.

## Step 2: Set Up Webhook Endpoint

1. **Create webhook endpoint**: Set up a webhook endpoint to receive orders from the dropshipping provider.
2. **Handle incoming webhooks**: When a webhook is received, process the order information:
   - Set up a webhook endpoint to receive order notifications from the dropshipping provider.
   - Upon receiving a webhook, extract the order ID from the payload.
   - Use the order ID to fetch the complete order details using the Get Order by ID API.
   - For more information on how to retrieve order details, refer to the [Get Order by ID API documentation](/docs/get-order-by-id).

## Step 3: List Products and Create Product Requests

1. **List products for customers**: Display available products for customers to import into their stores.
2. **Send create product request**: When a user decides to import a product, send a create product request to the dropshipping provider's API.

## Step 4: Update Shipping Areas

1. **Update shipping areas**: Modify shipping areas in the customer's store to match those of the dropshipping provider. This ensures accurate shipping calculations and options.

## Step 5: Provide Shipping Choices

1. **Enable free shipping option**: Provide the user with the choice to offer free shipping.
2. **Add shipping cost to products**: When creating a product using the API, include shipping costs as part of the product details.

## Step 6: Automate Api Key and webhook creation

You can use Authorize link to enable users to accept installing your app and create API key and webhook automatically.
for more information please check [authorize app link](/docs/install-app.md)

## Note

please consider your database structure to enable user have multiple stores and each store have its own API key and webhook. Most of the users will have multiple stores and want to connect each store with same account.

## Conclusion

Follow these steps to seamlessly integrate a drop-shipping provider into your platform, providing users with a wide range of products and shipping options.
