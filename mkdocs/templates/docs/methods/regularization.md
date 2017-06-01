description: List of regularization methods in Neataptic
authors: Thomas Wagenaar
keywords: regularization, dropout, neural-network, training, backpropagation

As of the 24st of may, the first regularization method has been implemented: **dropout**. Please note that dropout is still _experimental_ and should not be used for full scale projects. It is not even sure that the implementation is 100% correct, but it should be close to correct.

![](http://cs231n.github.io/assets/nn2/dropout.jpeg)

_Visualisation of dropout_

### How to use

Only use dropout when you are working with large datasets that may show some noise. Dropout is a method that prevents overfitting, but it shouldn't work on datasets like XOR or SINUS, as they don't have any noise. Dropout can only be used during training:

```javascript
myNetwork.train(myTrainingSet, {
  error: 0.03,
  iterations: 1000,
  rate: 0.3,
  dropout: 0.4 // if you're not sure, use 0.5
});
```

Setting the dropout to `0.4` means that 40% of the neurons will be dropped out every training iteration. Please note that Neataptic has no layered network architecture, so dropout applies to the complete hidden area.
