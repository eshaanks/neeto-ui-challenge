import * as R from "ramda";

const camelize = str =>
  str
    .replace(/[^a-z0-9]/gi, " ")
    .toLowerCase()
    .split(" ")
    .map((elem, index) =>
      index === 0
        ? elem
        : elem[0].toUpperCase() + elem.substring(1, elem.length)
    )
    .join("");

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

export const buildSelectOption = optionsAsStringArray =>
  optionsAsStringArray.map(optionAsString => ({
    label: optionAsString,
    value: camelize(optionAsString),
  }));
