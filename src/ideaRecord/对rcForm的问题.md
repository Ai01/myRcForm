
1. rcForm的主要组成部分?

> fieldsStore, instance, cachedBind, clearedFieldMetaCache


2. fieldsStore中有什么?

> fields, fieldsMeta

3. fields是由什么组成的

> fields是一个{name: value}的对象。支持tree数据结构

3. fieldsMeta由什么组成?

```js
const fieldOption = {
  name,
  trigger: DEFAULT_TRIGGER,
  valuePropName: 'value',
  validate: [],
  ...usersFieldOption,
};

const {
  rules,
  trigger,
  validateTrigger = trigger,
  validate,
} = fieldOption;

const fieldMeta = this.fieldsStore.getFieldMeta(name);
if ('initialValue' in fieldOption) {
  fieldMeta.initialValue = fieldOption.initialValue;
}

const validateRules = normalizeValidateRules(validate, rules, validateTrigger);

const meta = {
  ...fieldMeta,
  ...fieldOption,
  validate: validateRules,
};
```

> 从上面的源码可以看出meta里面主要是rules,trigger,validate等


4. getFieldProps可以怎么用 ?

> 和getFieldDecorator一样

5. rcForm的双向绑定是怎么实现的

> createForm返回一个component然后setFieldsValue中使用了forceUpdate。实现了value到视图的更新。
dom的trigger事件触发的时候改变state
