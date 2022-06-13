// Copy and paste below into
// BEGIN COPY
const impl = (str) => {
  const runFilesRegex = new RegExp(/\/_unit_test_launcher.sh.runfiles/);
  const regex = new RegExp(/(?=(\/sandbox)).*(?=(\/\execroot))/);
  const first = str.split(runFilesRegex)[0];
  const second = first.split(regex);
  return second.length > 1 ? [second[0], second[3]].join("") : second[0];
};
//END COPY

module.exports = {
  impl,
};
