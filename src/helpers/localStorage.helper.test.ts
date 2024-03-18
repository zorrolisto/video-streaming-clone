import {
  getArrayFromLocalStorage,
  setArrayToLocalStorage,
} from "./localStorage.helper";
import { describe, beforeEach, test, expect } from "@jest/globals";

describe("getArrayFromLocalStorage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("should return an empty array if localStorage is empty", () => {
    const key = "testKey";
    const result = getArrayFromLocalStorage(key);
    expect(result).toEqual([]);
  });

  test("should return the parsed array from localStorage", () => {
    const key = "testKey";
    const data = [1, 2, 3];
    setArrayToLocalStorage(key, data);
    const result = getArrayFromLocalStorage(key);
    expect(result).toEqual(data);
  });

  test("should return an empty array if localStorage data is not a valid JSON array", () => {
    const key = "testKey";
    const invalidData = "not an array";
    localStorage.setItem(key, invalidData);
    const result = getArrayFromLocalStorage(key);
    expect(result).toEqual([]);
  });

  test("should return an empty array if an error occurs while parsing localStorage data", () => {
    const key = "testKey";
    const invalidData = "{ invalid JSON }";
    localStorage.setItem(key, invalidData);
    const result = getArrayFromLocalStorage(key);
    expect(result).toEqual([]);
  });
});
