import { useMixin } from "../src/use_mixin";
import sinon from "sinon";
import { BaseController } from "@stimulus-library/utilities";

describe("useMixin", function () {
  it("should run the passed function on the object, and install a cleanup function on disconnect", function () {
    const obj = {
      disconnect: () => {
      },
    } as BaseController;
    const stp = sinon.fake();
    const trdn = sinon.fake();
    useMixin(obj, stp, trdn);

    sinon.assert.calledOnce(stp);
    sinon.assert.notCalled(trdn);

    obj.disconnect();

    sinon.assert.calledOnce(trdn);
  });
});
