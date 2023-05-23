import { Component } from "./component.js";
import { Form } from "./form.js";
import { Input } from "./input.js";
import { Label } from "./label.js";

const element = new Component("h1", "body", {
  textContent: "Sociedade Esportiva Palmeiras!",
});

console.log(element);
element.render();
element.tag = "h3";
element.build().render();

const form = new Form("body");

const label = new Label("Time do coração:", form, { htmlFor: "nameInput" });

const input = new Input(form, {
  id: "nameInput",
  name: "name",
  type: "text",
  placeholder: "Verdão",
});

form.render();
label.render();
form.addChildren(input);

form.addChildren(
  new Component("br"),
  new Component("br"),
  new Label("data de nascimento:", form, { htmlFor: "dateInput" }),
  new Input(form, { type: "date", id: "dateInput" })
);
