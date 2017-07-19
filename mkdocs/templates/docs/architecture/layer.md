description: Documentation of the Layer instance in Neataptic
authors: Thomas Wagenaar
keywords: LSTM, GRU, architecture, neural-network, recurrent


Layers are pre-built architectures that allow you to combine different network
architectures into óne network. At this moment, there are 3 layers (more to come soon!):

```javascript
Layer.Dense
Layer.LSTM
Layer.GRU
Layer.Memory
```

Check out the options and details for each layer below.

### Constructing your own network with layers
You should always start your network with a `Dense` layer and always end it with
a `Dense` layer. You can connect layers with each other just like you can connect
nodes and groups with each other. This is an example of a custom architecture
built with layers:

```javascript
var input = new Layer.Dense(1);
var hidden1 = new Layer.LSTM(5);
var hidden2 = new Layer.GRU(1);
var output = new Layer.Dense(1);

// connect however you want
input.connect(hidden1);
hidden1.connect(hidden2);
hidden2.connect(output);

var network = architect.Construct([input, hidden1, hidden2, output]);
```

### Layer.Dense
The dense layer is a regular layer.

```javascript
var layer = new Layer.Dense(size);
```

### Layer.LSTM
The LSTM layer is very useful for detecting and predicting patterns over long
time lags. This is a recurrent layer. More info? Check out the [LSTM](../builtins/lstm.md) page.

```javascript
var layer = new Layer.LSTM(size);
```

Be aware that using `Layer.LSTM` is worse than using `architect.LSTM`. See issue [#25](https://github.com/wagenaartje/neataptic/issues/25).

### Layer.GRU
The GRU layer is similar to the LSTM layer, however it has no memory cell and only
two gates. It is also a recurrent layer that is excellent for timeseries prediction.
More info? Check out the [GRU](../builtins/gru.md) page.

```javascript
var layer = new Layer.GRU(size);
```

### Layer.Memory
The Memory layer is very useful if you want your network to remember a number of
previous inputs in an absolute way. For example, if you set the `memory` option to
3, it will remember the last 3 inputs in the same state as they were inputted.

```javascript
var layer = new Layer.Memory(size, memory);
```

The input layer to the memory layer should always have the same size as the memory size.
The memory layer will output a total of `size * memory` values.

> This page is incomplete. There is no description on the functions you can use
on this instance yet. Feel free to add the info (check out src/layer.js)
