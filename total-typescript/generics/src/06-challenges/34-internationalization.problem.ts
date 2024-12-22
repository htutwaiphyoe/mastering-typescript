import { expect, it } from "vitest";

type Param<Value extends string> = Value extends ""
  ? []
  : Value extends `${string}{${infer Key}}${infer Rest}`
    ? [Key, ...Param<Rest>]
    : [];

const translate = <
  Obj extends Record<string, string>,
  Key extends keyof Obj,
  Params extends Param<Obj[Key]>,
>(
  translations: Obj,
  key: Key,
  ...args: Params extends [] ? [] : [params: Record<Params[number], string>]
) => {
  const translation = translations[key];
  const params: any = args[0] || {};

  return translation.replace(/{(\w+)}/g, (_, key) => params[key]);
};

const translations = {
  title: "Hello, {name}!",
  subtitle: "You have {count} unread messages.",
  button: "Click me!",
} as const;

it("Should translate a translation without parameters", () => {
  const buttonText = translate(translations, "button");

  expect(buttonText).toEqual("Click me!");
});

it("Should translate a translation WITH parameters", () => {
  const subtitle = translate(translations, "subtitle", {
    count: "2",
  });

  expect(subtitle).toEqual("You have 2 unread messages.");
});

it("Should force you to provide parameters if required", () => {
  // @ts-expect-error
  translate(translations, "title");
});

it("Should not let you pass parameters if NOT required", () => {
  // @ts-expect-error
  translate(translations, "button", {});
});
