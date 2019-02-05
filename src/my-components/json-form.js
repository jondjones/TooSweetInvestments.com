import React, { Component } from 'react';
import Form from 'react-jsonschema-form'

const mySchema ={
  "title": "My Form",
  "description": "My Form",
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string",
      "title": "Name"
    }
  }
};

export default class MyForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit({formData}) {
        console.log(formData);
    }

    render() {
        return (
            <Form schema={mySchema} onSubmit={this.handleSubmit} />
        )
    }
}