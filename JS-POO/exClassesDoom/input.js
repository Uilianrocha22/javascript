import { Component } from "./component.js";
import { Label } from "./label.js";

export class Input extends Component {
  constructor(parent, options) {
    super("input", parent, options);
  }
}
