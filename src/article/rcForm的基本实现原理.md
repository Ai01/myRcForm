# rcForm的基本实现原理


## 认识rcForm

> 使用rcForm 

### rcForm有哪些重要api

1. createForm
2. getFieldProps(getFieldDecorator)
3. setFieldsValue 

> 这些api是basicExample中使用的。这肯定不是全部，但可以肯定的是这些api很重要。

### 这些api做了什么

> createForm: 从createForm的使用中可以看出，createForm()返回了一个函数，这个函数接受一个react
组件作为参数。那么我们可以肯定createForm是一个返回一个高阶组件的函数。

> getFieldProps(getFieldDecorator): 这个两个api都接受一个唯一字符，和这个字符的一些options。
不同之处在于，这两个api和组件的绑定方式不同。同时劫持了对应component的onChange事件。
从这些行为中，我们可以肯定的是rcForm的组成中，有一个store，存储了field和field对应的option，
同时存储了对应component的ref。如果没有存下这些东西，rcForm无法实现获取对应id的值，无法提供
onChange事件。这两个api最重要的一点是实现了视图和store的绑定。

> setFieldsValue: 这个api可以改变store中field的值,实现了store到视图的绑定

### 从返回值来推测这些api实现了什么

> 从上面三个api的分析我们可以看出rcForm做了以下几个很重要的事情

1. 提供了store，存储了field的options，component的ref等一些对应的组成。
2. 提供了视图和store的双向绑定。
3. 因为有field的store。对应的field的crud操作都应该存在。

### rcForm可能用什么方法实现的

1. 当field的值改变的时候触发对应ref的value改变。setFields的时候找到对应的ref改变value，
onChange的时候调用setFields。

> 上面的想法是我的第一印象，也可以实现这个功能。但是我看了rcForm使用了forceUpdate。
