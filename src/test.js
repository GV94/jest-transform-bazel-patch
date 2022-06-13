const test = require("node:test");
const assert = require("node:assert");

const { impl } = require("./index");

const bazelTestDir = `$HOME/.cache/bazel/_bazel_$USER/$HASH/sandbox/linux-sandbox/1459/execroot/$WORKSPACE/$BIN_DIR/$PACKAGE_NAME/_unit_test_launcher.sh.runfiles`;
const bazelRunDir = `$HOME/.cache/bazel/_bazel_$USER/$HASH/execroot/$WORKSPACE/$BIN_DIR/$PACKAGE_NAME/_unit_test_launcher.sh.runfiles`;

test("it return expected string for bazel test string", () => {
  assert(
    impl(bazelTestDir) ===
      `$HOME/.cache/bazel/_bazel_$USER/$HASH/execroot/$WORKSPACE/$BIN_DIR/$PACKAGE_NAME`
  );
});

test("it return expected string for bazel run string", () => {
  assert(
    impl(bazelTestDir) ===
      `$HOME/.cache/bazel/_bazel_$USER/$HASH/execroot/$WORKSPACE/$BIN_DIR/$PACKAGE_NAME`
  );
});

test("it should work for both bazel test and bazel run", () => {
  const str1 = impl(bazelTestDir);
  const str2 = impl(bazelRunDir);
  assert(str1 === str2);
});
