import { debounce } from "../src/debounce";
import sinon from "sinon";

let clock: any;

before(function () {
  clock = sinon.useFakeTimers();
});
after(function () {
  clock.restore();
});

it("calls callback after 100ms", function () {
  const callback = sinon.fake();
  const throttled = debounce(callback, 100);

  throttled();

  clock.tick(99);
  sinon.assert.notCalled(callback);

  clock.tick(1);
  sinon.assert.calledOnce(callback);

  // Also:
  // assert.equals(new Date().getTime(), 100);
});