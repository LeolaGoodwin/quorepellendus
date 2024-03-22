import test, { Test } from "tape-promise/tape";
import * as publicApi from "../../../main/typescript/public-api";

test("Library can be loaded", (t: Test) => {
  t.plan(2);
  t.ok(publicApi);
  t.pass("Test file can be executed");
});
