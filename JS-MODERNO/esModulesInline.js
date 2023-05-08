export function label(attributes) {
  const element = document.createElement(`label`);
  Object.assign(element, attributes);
  return element;
}

export function input(attributes) {
  const element = document.createElement(`input`);
  Object.assign(element, attributes);
  return element;
}

export function br() {
  const element = document.createElement(`br`);
  return element;
}

export const fullName = "Uilian Oliveira Rocha";

// TIPOS DE EXPORT
// Inline:

export function inline() {
  console.log(`Export nomeado inline`);
}

export default function defaultInline() {
  console.log(`Export default inline`);
}
