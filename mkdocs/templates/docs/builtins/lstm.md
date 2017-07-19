description: How to use the Long Short-Term Memory network in Neataptic
authors: Thomas Wagenaar
keywords: recurrent, neural-network, LSTM, architecture

The [long short-term memory](http://en.wikipedia.org/wiki/Long_short_term_memory) is an architecture well-suited to learn from experience to classify, process and predict time series when there are very long time lags of unknown size between important events.

![Long short-term memory cell](https://i.gyazo.com/9d4310c6175006d1bad5669d0249061c.png)

To use this architecture you have to set at least one input node, one memory block assembly (consisting of four nodes: input gate, memory cell, forget gate and output gate), and an output node.

```javascript
var myLSTM = new architect.LSTM(2,6,1);
```

Also you can set many layers of memory blocks:

```javascript
var myLSTM = new architect.LSTM(2, 4, 4, 4, 1);
```

That LSTM network has 3 memory block assemblies, with 4 memory cells each, and their own input gates, memory cells, forget gates and output gates.

You can pass options if desired like so:

```javascript
var options = {
  memoryToMemory: false,    // default is false
  outputToMemory: false,    // default is false
  outputToGates: false,     // default is false
  inputToOutput: true,      // default is true
  inputToDeep: true         // default is true
};

var myLSTM = new architect.LSTM(2, 4, 4, 4, 1, options);
```

While training sequences or timeseries prediction to a LSTM, make sure you set the `clear` option to true while training. [See an example of sequence prediction here.](https://jsfiddle.net/9t2787k5/4/)

This is an example of character-by-character typing by an LSTM: [JSFiddle](https://jsfiddle.net/k23zbf0f/8/)
