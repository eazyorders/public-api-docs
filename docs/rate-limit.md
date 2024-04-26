---
id: rate-limit
title: Rate Limit Policy
sidebar_label: Rate Limit
---

# Rate Limit Policy

At our service, we enforce a rate limit to ensure fair usage and maintain the performance and stability of our system.

## Rate Limit Details

- **Rate Limit**: 40 requests per minute

## Why a Rate Limit?

Implementing a rate limit is crucial for several reasons:

1. **Fair Usage**: By limiting the number of requests a user can make within a certain time frame, we ensure fair access to our service for all users.

2. **Preventing Abuse**: Rate limits help prevent abuse of our service, such as spamming or overloading our servers with excessive requests.

3. **Maintaining Performance**: By spreading out the requests over time, we can maintain optimal performance and ensure a smooth user experience for everyone.

## What Counts as a Request?

A "request" refers to any interaction with our service that requires server processing. This includes API calls, page loads, data retrievals, and any other actions that require communication with our servers.

## Handling Rate Limit Exceeded Errors

If you exceed the rate limit, you will receive a `429 Too Many Requests` HTTP status code in response to your request. In such cases, you should wait for the next minute before making additional requests.

## Need More Requests?

If your use case requires more than the allotted rate limit, please [contact us](mailto:info@easy-orders.net) to discuss your requirements. We may be able to provide a custom solution tailored to your needs.

---

Have further questions or need assistance? [Contact us](mailto:info@easy-orders.net) for support.
