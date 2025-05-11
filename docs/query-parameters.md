# Query Parameters

## Filter

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

## Sort

### Basic Syntax

```
sort=field,direction
```

Where:

- `field` is the property name you want to sort by
- `direction` is the direction of the sort (ASC or DESC)

Example:

```
sort=price,DESC
```

This will sort the products by price in descending order.

## Limit

### Basic Syntax

```
limit=number
```

Where:

- `number` is the number of records you want to retrieve

Example:

```
limit=10
```

This will retrieve 10 records.

## Selecting Fields

- `fields` is the list of fields you want to retrieve

Example:

```
fields=id,name,price
```

This will retrieve only the id, name, and price fields.

:::info
**Info**: When using the `fields` parameter, certain default fields will always be retrieved regardless of whether they are explicitly specified. These default fields are essential for the proper functioning of the API.
:::

## Joining Related Entities

- The `join` parameter allows you to include related entities in your API response, similar to SQL JOIN operations. This is useful for retrieving associated data in a single request instead of making multiple API calls.

Example:

```
join=variations
```

This will retrieve the variations and the variants of the product.

## Pagination

- `page` is the page number you want to retrieve

Example:

```
page=1
```

This will retrieve the first page of results.
