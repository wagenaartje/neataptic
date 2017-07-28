description: List of cost functions in Neataptic
authors: Thomas Wagenaar
keywords: cost function, loss function, mse, cross entropy, optimize

[Cost functions](https://en.wikipedia.org/wiki/Loss_functions_for_classification)
play an important role in neural networks. They give neural networks an indication
of 'how wrong' they are; a.k.a. how far they are from the desired output. But
also in fitness functions, cost functions play an important role. 

### Methods

At the moment, there are 7 built-in mutation methods (all for networks):

Name | Function |
---- | ------ |
[methods.cost.CROSS_ENTROPY](http://neuralnetworksanddeeplearning.com/chap3.html#the_cross-entropy_cost_function) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/106c195cc961bd026ad949ad5ff89f3cde845e2c)
[methods.cost.MSE](https://en.wikipedia.org/wiki/Mean_squared_error) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/67b9ac7353c6a2710e35180238efe54faf4d9c15)
[methods.cost.BINARY](https://link.springer.com/referenceworkentry/10.1007%2F978-0-387-30164-8_884) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/aa1123a619eb4566439c92655d3f6331aa69c1d1)
[methods.cost.MAE](https://en.wikipedia.org/wiki/Mean_absolute_error) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ef87b78a9af65e308cf4aa9acf6f203efbdeded)
[methods.cost.MAPE](https://en.wikipedia.org/wiki/Mean_absolute_percentage_error) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/b2557e2cbee5f1cbf3c9b474878df86d1e74189a)
[methods.cost.MSLE](none) | none
[methods.cost.HINGE](https://en.wikipedia.org/wiki/Hinge_loss) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/a5f42d461f1a28b27438e8f1641e042ff2e40102)

### Usage
Before experimenting with any of the loss functions, note that not every loss
function might 'work' for your network. Some networks have nodes with activation
functions that can have negative values; this will create some weird error values
with some cost methods. So if you don't know what you're doing: stick to any of
the first three cost methods!


```javascript
myNetwork.train(trainingData, {
  log: 1,
  iterations: 500,
  error: 0.03,
  rate: 0.05,
  cost: methods.cost.METHOD
});
```
