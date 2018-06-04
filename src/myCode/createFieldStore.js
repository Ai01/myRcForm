class FieldsStore {
  constructor(fields) {
    this.fields = fields || {};
    this.fieldsMeta = {};

    this.getFieldsValue = this.getFieldsValue.bind(this);
  }

  setFields(fields) {
    const oldFields = this.fields;

    this.fields = Object.assign({}, oldFields, fields);
  }

  setFieldsMeta(fieldsMeta) {
    const oldFieldsMeta = this.fieldsMeta;

    this.fieldsMeta = Object.assign({}, oldFieldsMeta, fieldsMeta);
  }

  getFieldValue(fieldName) {
    return this.fields[fieldName];
  }

  getFieldsValue(fields) {
    const res = {};
    fields.forEach(fieldName => {
      res[fieldName] = this.getFieldValue(fieldName);
    });

    console.log(res);
  }

  getFieldsMeta(fieldName) {
    return this.fieldsMeta[fieldName];
  }

  getFieldValuePropValue(fieldName) {
    return { value: this.fields[fieldName] };
  }
}

const createFieldsStore = fields => {
  return new FieldsStore(fields);
};

export default createFieldsStore;
