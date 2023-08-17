import { camelCase, lowerFirst, upperFirst } from "../src/strings";
import { expect } from "chai";

describe("upperFirst", function () {
  it("should capitalize the first letter of a normal-cased string", function () {
    expect(upperFirst("hello")).to.equal("Hello");
    expect(upperFirst("hello world")).to.equal("Hello world");
    expect(upperFirst("HELLO WORLD")).to.equal("HELLO WORLD");
  });

  it("should capitalize the first letter of a kebab-cased string", function () {
    expect(upperFirst("Hello-world")).to.equal("Hello-world");
    expect(upperFirst("HELLO-WORLD")).to.equal("HELLO-WORLD");
    expect(upperFirst("hello-world")).to.equal("Hello-world");
    expect(upperFirst("hello-WORLD")).to.equal("Hello-WORLD");
  });

  it("should capitalize the first letter of a snake-cased string", function () {
    expect(upperFirst("Hello_world")).to.equal("Hello_world");
    expect(upperFirst("HELLO_WORLD")).to.equal("HELLO_WORLD");
    expect(upperFirst("hello_world")).to.equal("Hello_world");
    expect(upperFirst("hello_WORLD")).to.equal("Hello_WORLD");
  });

  it("should capitalize the first letter of a pascal-cased string", function () {
    expect(upperFirst("HelloWorld")).to.equal("HelloWorld");
    expect(upperFirst("HELLOWORLD")).to.equal("HELLOWORLD");
    expect(upperFirst("helloWorld")).to.equal("HelloWorld");
    expect(upperFirst("helloWORLD")).to.equal("HelloWORLD");
  });

  it("should not capitalize the first letter of a string that starts with a number", function () {
    expect(upperFirst("123hello")).to.equal("123hello");
    expect(upperFirst("123Hello")).to.equal("123Hello");
  });

  it("should capitalize the first letter of a string with non-ascii characters", function () {
    expect(upperFirst("áéíóúâêîôûøæåñ")).to.equal("Áéíóúâêîôûøæåñ");
    expect(upperFirst("ÁÉÍÓÚÂÊÎÔÛØÆÅÑ")).to.equal("ÁÉÍÓÚÂÊÎÔÛØÆÅÑ");
  });
});

describe("lowerFirst", function () {
  it("should lowercase the first letter of a normal-cased string", function () {
    expect(lowerFirst("Hello")).to.equal("hello");
    expect(lowerFirst("HELLO")).to.equal("hELLO");
    expect(lowerFirst("Hello world")).to.equal("hello world");
    expect(lowerFirst("HELLO WORLD")).to.equal("hELLO WORLD");
  });
  it("should lowercase the first letter of a kebab-cased string", function () {
    expect(lowerFirst("Hello-world")).to.equal("hello-world");
    expect(lowerFirst("HELLO-WORLD")).to.equal("hELLO-WORLD");
  });
  it("should lowercase the first letter of a snake-cased string", function () {
    expect(lowerFirst("Hello_world")).to.equal("hello_world");
    expect(lowerFirst("HELLO_WORLD")).to.equal("hELLO_WORLD");
  });
  it("should lowercase the first letter of a pascal-cased string", function () {
    expect(lowerFirst("HelloWorld")).to.equal("helloWorld");
    expect(lowerFirst("HELLOWORLD")).to.equal("hELLOWORLD");
  });

  it("should not lowercase the first letter of a string that starts with a number", function () {
    expect(lowerFirst("123Hello")).to.equal("123Hello");
    expect(lowerFirst("123hello")).to.equal("123hello");
  });

  it("should lowercase the first letter of a string with non-ascii characters", function () {
    expect(lowerFirst("ÁÉÍÓÚÂÊÎÔÛØÆÅÑ")).to.equal("áÉÍÓÚÂÊÎÔÛØÆÅÑ");
    expect(lowerFirst("áéíóúâêîôûøæåñ")).to.equal("áéíóúâêîôûøæåñ");
  });
});

describe("camelCase", function () {
  it("should take a normal-case string and return it camelized ", function () {
    expect(camelCase("Hello")).to.equal("hello");
    expect(camelCase("HELLO")).to.equal("hELLO");
    expect(camelCase("hello world")).to.equal("helloWorld");
    expect(camelCase("HELLO there how are you")).to.equal("hELLOThereHowAreYou");
  });

  it("should take a kebab-case string and return it camelized ", function () {
    expect(camelCase("Hello-world")).to.equal("helloWorld");
    expect(camelCase("HELLO-WORLD")).to.equal("hELLOWORLD");
    expect(camelCase("Hello-world how are you")).to.equal("helloWorldHowAreYou");
  });

  it("should take a snake-case string and return it camelized ", function () {
    expect(camelCase("Hello_world")).to.equal("helloWorld");
    expect(camelCase("HELLO_WORLD")).to.equal("hELLOWORLD");
    expect(camelCase("Hello_world how are you")).to.equal("helloWorldHowAreYou");
  });
});


describe("pascalCase", function () {
  it("should ", function () {

  });
});

