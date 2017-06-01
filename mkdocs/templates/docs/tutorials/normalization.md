description: A tutorial on how to standardize/normalize your data for neural networks
authors: Thomas Wagenaar
keywords: normalize, 0, 1, standardize, input, output, neural-network

Although Neataptic networks accepts non-normalized values as input, normalizing your input makes your network converge faster. I see a lot of questions where people ask how to normalize their data correctly, so I decided to make a guide.

### Example data
You have gathered this information, now you want to use it to train/activate a neural network:

```javascript
{ stock: 933, sold: 352, price: 0.95,   category: 'drinks',      id: 40 }
{ stock: 154, sold: 103, price: 5.20,   category: 'foods',       id: 67 }
{ stock: 23,  sold: 5,   price: 121.30, category: 'electronics', id: 150 }
```

So some information on the above data:
* `stock`: the amount of this item in stock
* `sold`: the amount of this item sold ( in the last month )
* `price`: the price of this item
* `category`: the type of product
* `id`: the id of the product

### Normalize
So we want to represent each of these inputs as a number between `0` and `1`, however, we can not change the relativity between the values. So we need to treat each different input the same (`stock` gets treated the same for every item for example).

We have two types of values in our input data: numerical values and categorical values. These should always be treated differently.

#### Numerical values

Numerical values are values where the distance between two values matters. For example, `price: 0.95` is twice as small as `price: 1.90`. But not all integers/decimals are numerical values. Id's are often represented with numbers, but there is no relation between `id: 4` and `id: 8` . So these should be treated as categorical values.

Normalizing numerical values is quite easy, we just need to determine a maximum value we divide a certain input with. For example, we have the following data:

```javascript
stock: 933
stock: 154
stock: 23
```

We need to choose a value which is `>= 933` with which we divide all the `stock` values. We could choose `933`, but what if we get new data, where the `stock` value is higher than `933`? Then we have to renormalize all the data and retrain the network.

So we need to choose a value that is `>=933`, but also `>= future values` and it shouldn't be a too big number. We could make the assumption that the `stock` will never get larger than `2000`, so we choose `2000` as our maximum value. We now normalize our data with this maximum value:

```javascript
// Normalize the data with a maximum value (=2000)
stock: 933 -> 933/2000 -> 0.4665
stock: 154 -> 154/2000 -> 0.077
stock: 23  ->  23/2000 -> 0.0115
```

#### Categorical data
Categorical data shows no relation between different categories. So each category should be treated as a seperate input, this is called [one-hot encoding](https://en.wikipedia.org/wiki/One-hot). Basically, you create a seperate input for each category. You set all the inputs to `0`, except for the input which matches the sample category. This is one-hot encoding for our above training data:

<table class="table table-striped">
  <thead>
    <tr>
      <th>Sample</th>
      <th>Drinks</th>
      <th>Foods</th>
      <th>Electronics</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>2</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
    </tr>
  </tbody>
</table>

But this also allows the addition of new categories over time: you just a need input. It has no effect on the performances of the network on the past training data as when the new category is set to `0`, it has no effect (`weight * 0 = 0`).

### Normalized data
So applying what I have explained above creates our normalized data, note that the relativity between inputs has not been changed. Also note that some values may be rounded in the table below.

```javascript
{ stock: 0.4665, sold: 0.352, price: 0.00317, drinks: 1, foods: 0, electronics: 0, id40: 1, id67: 0, id150: 0 }
{ stock: 0.077,  sold: 0.103, price: 0.01733, drinks: 0, foods: 1, electronics: 0, id40: 0, id67: 1, id150: 0 }
{ stock: 0.0115, sold: 0.005, price: 0.40433, drinks: 0, foods: 0, electronics: 1, id40: 0, id67: 0, id150: 1 }
```

Max values:

* `stock`: 2000
* `sold`: 1000
* `price` : 300

Please note, that these inputs should be provided in arrays for neural networks in Neataptic:

```javascript
[ 0.4665, 0.352, 0.00317, 1, 0, 0, 1, 0, 0 ]
[ 0.77,   0.103, 0.01733, 0, 1, 0, 0, 1, 0 ]
[ 0.0115, 0.005, 0.40433, 0, 0, 1, 0, 0, 1 ]
```
