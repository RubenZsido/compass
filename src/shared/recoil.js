import { atom } from "recoil";
export const titleAtom = atom({
  key: "title", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const subtitleAtom = atom({
  key: "subtitle", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const finalCopy = atom({
  key: "copy", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
