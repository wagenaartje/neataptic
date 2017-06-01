description: Documentation of the Layer instance in Neataptic
authors: Thomas Wagenaar
keywords: LSTM, GRU, architecture, neural-network, recurrent


Layers are pre-built architectures that allow you to combine different network architectures into óne network. At this moment, there are 3 layers (more to come soon!):

```javascript
Layer.Dense
Layer.LSTM
Layer.GRU
```

### Constructing your own network with layers
You should always start your network with a `Dense` layer and always end it with a `Dense` layer. You can connect layers with each other just like you can connect nodes and groups with each other. This is an example of a custom architecture built with layers:

```javascript
var input = new Layer.Dense(1);
var hidden1 = new Layer.LSTM(5);
var hidden2 = new Layer.GRU(1);
var output = new Layer.Dense(1);

// connect however you want
input.connect(hidden1);
hidden1.connect(hidden2);
hidden2.connect(output);

var network = Architect.Construct([input, hidden1, hidden2, output]);
```
