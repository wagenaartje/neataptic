description: List of activation functions in Neataptic
authors: Thomas Wagenaar
keywords: activation function, squash, logistic sigmoid, neuron

Activation functions determine what activation value neurons should get. Depending on your network's environment, choosing a suitable activation function can have a positive impact on the learning ability of the network.

### Methods

Name | Graph | Equation | Derivative
---- | ----- | -------- | ----------
LOGISTIC | ![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Activation_logistic.svg/120px-Activation_logistic.svg.png)|![](https://wikimedia.org/api/rest_v1/media/math/render/svg/faaa0c014ae28ac67db5c49b3f3e8b08415a3f2b)|![](https://wikimedia.org/api/rest_v1/media/math/render/svg/50a861269c68b1f1b973155fa40531d83c54c562)
TANH | ![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Activation_tanh.svg/120px-Activation_tanh.svg.png)|![](https://wikimedia.org/api/rest_v1/media/math/render/svg/48851c215e3c5b9dac76a25d4c358b9a2f7c137f)|![](https://wikimedia.org/api/rest_v1/media/math/render/svg/b371c445bf1130914d25b1995d853ac0e27bc956)
RELU | ![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Activation_rectified_linear.svg/120px-Activation_rectified_linear.svg.png)|![](https://wikimedia.org/api/rest_v1/media/math/render/svg/8d1e78eaf8445e3c1a9d48229abb921a61f30bad)|![](https://wikimedia.org/api/rest_v1/media/math/render/svg/29ee90b67c01654d3efba98c6fd13d21f75855f1)
IDENTITY |![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Activation_identity.svg/120px-Activation_identity.svg.png) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/f690285952308aa49e3c6aac892df31cad6d1b06) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/1f82687d38aa641f513d166b138923a84d7aae86)
STEP | ![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Activation_binary_step.svg/120px-Activation_binary_step.svg.png)|![](https://wikimedia.org/api/rest_v1/media/math/render/svg/57c710d836f45b21ac5314fc64f0a117c621cc3b)|![](https://wikimedia.org/api/rest_v1/media/math/render/svg/99761eb4566d128e38329db394513f3a0a8e78e5)
SOFTSIGN | ![](https://upload.wikimedia.org/wikipedia/commons/3/38/Activation_softsign.png) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/4735c7d34e544299cbbfdb4f388391627f186658) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/b5745ed0c96af00d5196d508712fb0fc52256cd2)
SINUSOID | ![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Activation_sinusoid.svg/120px-Activation_sinusoid.svg.png) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fb1266b7f7718442e31e45eef3d81bef6a8b9af) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/8cba0d31b2482c08dda6ec9adfd04fa7e3d9372f)
GAUSSIAN | ![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Activation_gaussian.svg/120px-Activation_gaussian.svg.png) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bed0b77b34cab03996deb42d464becab2f05636) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/70a7b3d396a5e9e1fc5395a0017733abba868169)
BENT_IDENTITY | ![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Activation_bent_identity.svg/120px-Activation_bent_identity.svg.png) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/c4365ebef6b1e8e4521ab1df8b640e27edf9557c) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/81d4ca91d2f4e2c53745ec90a7d6cc34dde33978)
BIPOLAR | <img src="http://i.imgur.com/v4cf68M.png" width="120px"/> | <img src="https://i.gyazo.com/47e224f7b2c3b84720f58ce1e2277392.png" width="280px"/>
BIPOLAR_SIGMOID | <img src="http://i.imgur.com/NPpcsYa.png" width="120px"/> | <img src="https://i.gyazo.com/b5910df22dc18ffa3ee41f0f729a83a1.png" width="280px"/>
HARD_TANH | <img src="http://i.imgur.com/GIOOhq9.png" width="120px"/> | <img src="https://i.gyazo.com/f976fa1e37c766da0a76e0360382b2ae.png" width="280px"/>
ABSOLUTE<sup>1</sup> | <img src="http://i.imgur.com/OPsnSDt.png" width="120px"/> | <img src="https://i.gyazo.com/c0689fbd94c4f4db460f67a8b9d505c9.png" width="280px"/>
SELU | <img src="http://i.imgur.com/YninNA4.png" width="120px"/> | <img src="https://i.gyazo.com/12f9265ba7a28d5d12c4f2322e7d0857.png" width="280px"/>
INVERSE | <img src="http://i.imgur.com/YzJSu9V.png" width="120px"/> | $$ f(x) = 1 - x $$ | $$ f'(x) = -1 $$

<sup>1</sup> avoid using this activation function on a node with a selfconnection

### Usage
By default, a neuron uses a [Logistic Sigmoid](http://en.wikipedia.org/wiki/Logistic_function) as its squashing/activation function. You can change that property the following way:

```javascript
var A = new Node();
A.squash = Methods.Activation.<ACTIVATION_FUNCTION>;

// eg.
A.squash = Methods.Activation.SINUSOID;
```
