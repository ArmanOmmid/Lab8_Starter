// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Valid Phone Numbers Tests
test('Phone Number Test: "841-444-9091" is Valid', () => {
    expect(functions.isPhoneNumber("841-444-9091")).toBe(true);
});

test('Phone Number Test: "858-900-4494" is Valid', () => {
    expect(functions.isPhoneNumber("858-900-4494")).toBe(true);
});

test('Phone Number Test: "1984" is NOT Valid', () => {
    expect(functions.isPhoneNumber("1984")).toBe(false);
});

test('Phone Number Test: "1-1-1-1-1" is NOT Valid', () => {
    expect(functions.isPhoneNumber("1-1-1-1-1")).toBe(false);
});

// Valid Emails Tests
test('Email Test: "bobby@ucsd.edu" is Valid', () => {
    expect(functions.isEmail("bobby@ucsd.edu")).toBe(true);
});

test('Email Test: "google@gmail.com" is Valid', () => {
    expect(functions.isEmail("google@gmail.com")).toBe(true);
});

test('Email Test: "google@gmail@yahoo.com" is NOT Valid', () => {
    expect(functions.isEmail("google@gmail@yahoo.com")).toBe(false);
});

test('Email Test: "google.com" is NOT Valid', () => {
    expect(functions.isEmail("google.com")).toBe(false);
});

// Valid Password Tests
test('Password Test: "meresenne19987" is Valid', () => {
    expect(functions.isStrongPassword("meresenne19987")).toBe(true);
});

test('Password Test: "password" is Valid', () => {
    expect(functions.isStrongPassword("password")).toBe(true);
});

test('Password Test: "1secret999" is NOT Valid', () => {
    expect(functions.isStrongPassword("1secret999")).toBe(false);
});

test('Password Test: "bad" is NOT Valid', () => {
    expect(functions.isStrongPassword("bad")).toBe(false);
});

// Valid Date Tests
test('Date Test: "11/12/2021" is Valid', () => {
    expect(functions.isDate("11/12/2021")).toBe(true);
});

test('Date Test: "6/6/2020" is Valid', () => {
    expect(functions.isDate("6/6/2020")).toBe(true);
});

test('Date Test: "11122021" is NOT Valid', () => {
    expect(functions.isDate("11122021")).toBe(false);
});

test('Date Test: "today" is NOT Valid', () => {
    expect(functions.isDate("today")).toBe(false);
});

// Valid Hex Color Tests
test('Hex Color Test: "FFFFFF" is Valid', () => {
    expect(functions.isHexColor("ABCDEF")).toBe(true);
});

test('Hex Color Test: "3" is Valid', () => {
    expect(functions.isHexColor("333")).toBe(true);
});

test('Hex Color Test: "ABCDEFG" is NOT Valid', () => {
    expect(functions.isHexColor("ABCDEFG")).toBe(false);
});

test('Hex Color Test: "GHIJKL" is NOT Valid', () => {
    expect(functions.isHexColor("GHIJKL")).toBe(false);
});