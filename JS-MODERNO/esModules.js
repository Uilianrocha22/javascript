import { label, input, br, fullName, inline as i } from "./esModulesInline.js";
import defaultInline from "./esModulesInline.js";
import { group } from "./esModulesNowInline.js";
import exportDefault from "./esModulesNowInline.js";

console.log(fullName);
console.log(
  label({
    for: `fullname`,
    textContent: `Nome Completo`,
  })
);
console.log(
  input({
    id: `fullname`,
    name: `fullname`,
    placeholder: `Digite seu nome completo...`,
  })
);
console.log(br());

// function inline e defaultInline RENOMEADAS
i();
defaultInline();

// functions NÃO-INLINE
group();
exportDefault();
