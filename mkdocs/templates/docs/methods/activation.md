description: List of activation functions in Neataptic
authors: Thomas Wagenaar
keywords: activation function, squash, logistic sigmoid, neuron

Activation functions determine what activation value neurons should get. Depending on your network's environment, choosing a suitable activation function can have a positive impact on the learning ability of the network.

### Methods

Name | Graph | Equation | Derivative
---- | ----- | -------- | ----------
LOGISTIC | <img src="http://imgur.com/LR7dIMm.png" width="120px"/> | $ f(x) = \frac{1}{1+e^{-x}} $ | $ f'(x) = f(x)(1 - f(x)) $
TANH     | <img src="http://imgur.com/8lrWuwU.png" width="120px"/> | $ f(x) = tanh(x) = \frac{2}{1+e^{-2x}} - 1 $ | $ f'(x) = 1 - f(x)^2 $
RELU     | <img src="http://imgur.com/M2FozQu.png" width="120px"/> | $ f(x) = \begin{cases} 0  & \text{if} & x \lt 0 \\\ x & \text{if} & x \ge 0 \end{cases} $ | $ f'(x) = \begin{cases} 0  & \text{if} & x \lt 0 \\\ 1 & \text{if} & x \ge 0 \end{cases} $
IDENTITY | <img src="http://imgur.com/3cJ1QTQ.png" width="120px"/> | $ f(x) = x $ | $ f'(x) = 1 $
STEP | <img src="http://imgur.com/S5qZbVY.png" width="120px"/> |$ f(x) = \begin{cases} 0  & \text{if} & x \lt 0 \\\ 1 & \text{if} & x \ge 0 \end{cases} $| $ f'(x) = \begin{cases} 0  & \text{if} & x \neq 0 \\\ ? & \text{if} & x = 0 \end{cases} $
SOFTSIGN | <img src="http://imgur.com/8bdal1j.png" width="120px"/> | $ f(x) = \frac{x}{1+\left\lvert x \right\rvert} $ | $ f'(x) = \frac{x}{{(1+\left\lvert x \right\rvert)}^2} $
SINUSOID | <img src="http://imgur.com/IbxYwL0.png" width="120px"/> | $ f(x) = sin(x) $ |  $ f'(x) = cos(x) $
GAUSSIAN | <img src="http://imgur.com/aJDCbPI.png" width="120px"/> | $ f(x) = e^{-x^2} $ | $ f'(x) = -2xe^{-x^2} $
BENT_IDENTITY | <img src="http://imgur.com/m0RGEDV.png" width="120px"/> | $ f(x) = \frac{\sqrt{x^2+1} - 1}{2} + x$ | $ f'(x) = \frac{ x }{2\sqrt{x^2+1}} + 1 $
BIPOLAR | <img src="http://imgur.com/gSiH8hU.png" width="120px"/> | $ f(x) = \begin{cases} -1  & \text{if} & x \le 0 \\\ 1 & \text{if} & x \gt 0 \end{cases}  $ | $ f'(x) = 0 $
BIPOLAR_SIGMOID | <img src="http://imgur.com/rqXYBaH.png" width="120px"/> |  $ f(x) = \frac{2}{1+e^{-x}}  - 1$ | $f'(x) = \frac{(1 + f(x))(1 - f(x))}{2} $
HARD_TANH | <img src="http://imgur.com/WNqyjdK.png" width="120px"/> | $ f(x) = \text{max}(-1, \text{min}(1, x)) $ | $ f'(x) = \begin{cases} 1  & \text{if} & x \gt -1 & \text{and} & x \lt 1 \\\ 0 & \text{if} & x \le -1 & \text{or} & x \ge 1 \end{cases} $
ABSOLUTE<sup>1</sup> | <img src="http://imgur.com/SBs32OI.png" width="120px"/> | $ f(x) = \left\lvert x \right\rvert $ | $ f'(x) = \begin{cases} -1  & \text{if} & x \lt 0 \\\ 1 & \text{if} & x \ge 0 \end{cases} $
SELU | <img src="http://i.imgur.com/BCSi7Lu.png" width="120px"/> |  $ f(x) = \lambda \begin{cases} x  & \text{if} & x \gt 0 \\\ \alpha e^x - \alpha & \text{if} & x \le 0 \end{cases} $ | $ f'(x) = \begin{cases} \lambda  & \text{if} & x \gt 0 \\\ \alpha e^x & \text{if} & x \le 0 \end{cases} $
INVERSE | <img src="http://imgur.com/n5RiG7N.png" width="120px"/> | $ f(x) = 1 - x $ | $ f'(x) = -1 $

<sup>1</sup> avoid using this activation function on a node with a selfconnection

### Usage
By default, a neuron uses a [Logistic Sigmoid](http://en.wikipedia.org/wiki/Logistic_function) as its squashing/activation function. You can change that property the following way:

```javascript
var A = new Node();
A.squash = methods.activation.<ACTIVATION_FUNCTION>;

// eg.
A.squash = methods.activation.SINUSOID;
```
