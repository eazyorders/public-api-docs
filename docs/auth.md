---
id: authentication
title: Authentication
sidebar_label: Authentication
---

# Authentication

To authenticate requests with EasyOrders API, you need to obtain an API key and include it in the request headers.

## Obtaining an API Key

To obtain an API key:

[//]: # (render image)
![Api Key in dashboard](/img/api-key.png)


1. Navigate to your seller dashboard account settings.
2. Go to the **Public API** section.
3. Click on **Create New API Key**.
4. Give your API key a name and save it.
5. Your API key will be displayed. Make sure to copy it as it won't be visible again.

## Using the API Key

Once you have obtained your API key, include it in the header of your requests as follows:

```
Api-Key: YOUR_API_KEY
```

Replace `YOUR_API_KEY` with the actual API key you obtained.

Example using cURL:
```bash
curl -H "Api-Key: YOUR_API_KEY" https://api.easy-orders.net/api/v1/external-apps/products
```

Example using JavaScript (fetch):
```javascript
fetch('https://api.easy-orders.net/api/v1/external-apps/products', {
    headers: {
        'Api-Key': 'YOUR_API_KEY'
    }
});
```

## Note

- Keep your API key confidential and do not share it publicly.
- If you suspect your API key has been compromised, regenerate it immediately from your account settings.

If you encounter any issues or have questions regarding authentication, feel free to [contact us](mailto:info@easy-orders.net) for assistance.
