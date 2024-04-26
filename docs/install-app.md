---
id: create_authorized_app_link
title: Creating Authorized App Link
---

## Introduction

This document provides instructions on how to create an authorized app link for integrating your application with our system. The authorized app link allows users to install your application and grant necessary permissions for seamless integration.

## Why?
You can create this link to make user accept then create webhook directly and send to you api key with permissions instead of make user create these steps manually. But you can make these steps manual from dashboard without this steps.
Preview:
![install app](/img/install_app.png)


## Creating Authorized App Link

To create an authorized app link, follow these steps:

1. Construct the URL using the following format:
```   
https://seller.easy-orders.net/#/install-app?
app_description=<APP_DESCRIPTION>&
app_icon=<APP_ICON_URL>&
app_name=<APP_NAME>&
callback_url=<CALLBACK_URL>&
orders_webhook=<ORDERS_WEBHOOK_URL>&
permissions=<PERMISSIONS>&
redirect_url=<REDIRECT_URL>
```


Replace the placeholders with the appropriate values:

- `<APP_DESCRIPTION>`: Description of your application.
- `<APP_ICON_URL>`: URL of the icon for your application.
- `<APP_NAME>`: Name of your application.
- `<CALLBACK_URL>`: URL where the authorization response will be sent.
- `<ORDERS_WEBHOOK_URL>`: URL where orders webhook notifications will be sent.
- `<PERMISSIONS>`: List of permissions required by your application.
- `<REDIRECT_URL>`: URL where users will be redirected after authorizing your application.

2. Distribute the constructed URL to your users, allowing them to install and authorize your application.

## Example

Here's an example of a constructed authorized app link:
```
https://seller.easyorders.localhost/#/install-app?app_name=YOUR%20APP%20NAME&app_description=YOUR%20DESCRIPTION&permissions=products:read,products:create,shipping_areas&app_icon=https://wilsonclinic.com/wp-content/uploads/2018/12/placeholder-logo-2.png
```

Replace the placeholders with your actual values.

## Conclusion

By following these steps, you can create an authorized app link for seamless integration with our system. If you encounter any issues or need further assistance, please contact our support team.

