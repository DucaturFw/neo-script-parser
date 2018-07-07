"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var OpCode_1 = __importDefault(require("./OpCode"));
exports.hints = {};
// Constants
exports.hints[OpCode_1.default.PUSH0] = "An empty array of bytes is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSHF] = exports.hints[OpCode_1.default.PUSH0];
exports.hints[OpCode_1.default.PUSHBYTES1] = /*0x01-0x4B*/ "The next opcode bytes is data to be pushed onto the stack";
exports.hints[OpCode_1.default.PUSHBYTES75] = "";
exports.hints[OpCode_1.default.PUSHDATA1] = "The next byte contains the number of bytes to be pushed onto the stack.";
exports.hints[OpCode_1.default.PUSHDATA2] = "The next two bytes contain the number of bytes to be pushed onto the stack.";
exports.hints[OpCode_1.default.PUSHDATA4] = "The next four bytes contain the number of bytes to be pushed onto the stack.";
exports.hints[OpCode_1.default.PUSHM1] = "The number -1 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH1] = "The number 1 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSHT] = exports.hints[OpCode_1.default.PUSH1];
exports.hints[OpCode_1.default.PUSH2] = "The number 2 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH3] = "The number 3 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH4] = "The number 4 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH5] = "The number 5 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH6] = "The number 6 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH7] = "The number 7 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH8] = "The number 8 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH9] = "The number 9 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH10] = "The number 10 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH11] = "The number 11 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH12] = "The number 12 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH13] = "The number 13 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH14] = "The number 14 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH15] = "The number 15 is pushed onto the stack.";
exports.hints[OpCode_1.default.PUSH16] = "The number 16 is pushed onto the stack.";
// Flow control
exports.hints[OpCode_1.default.NOP] = "Does nothing.";
exports.hints[OpCode_1.default.JMP] = "";
exports.hints[OpCode_1.default.JMPIF] = "";
exports.hints[OpCode_1.default.JMPIFNOT] = "";
exports.hints[OpCode_1.default.CALL] = "";
exports.hints[OpCode_1.default.RET] = "";
exports.hints[OpCode_1.default.APPCALL] = "";
exports.hints[OpCode_1.default.SYSCALL] = "";
exports.hints[OpCode_1.default.TAILCALL] = "";
// Stack
exports.hints[OpCode_1.default.DUPFROMALTSTACK] = "";
exports.hints[OpCode_1.default.TOALTSTACK] = "Puts the input onto the top of the alt stack. Removes it from the main stack.";
exports.hints[OpCode_1.default.FROMALTSTACK] = "Puts the input onto the top of the main stack. Removes it from the alt stack.";
exports.hints[OpCode_1.default.XDROP] = "";
exports.hints[OpCode_1.default.XSWAP] = "";
exports.hints[OpCode_1.default.XTUCK] = "";
exports.hints[OpCode_1.default.DEPTH] = "Puts the number of stack items onto the stack.";
exports.hints[OpCode_1.default.DROP] = "Removes the top stack item.";
exports.hints[OpCode_1.default.DUP] = "Duplicates the top stack item.";
exports.hints[OpCode_1.default.NIP] = "Removes the second-to-top stack item.";
exports.hints[OpCode_1.default.OVER] = "Copies the second-to-top stack item to the top.";
exports.hints[OpCode_1.default.PICK] = "The item in back in the stack is copied to the top.";
exports.hints[OpCode_1.default.ROLL] = "The item in back in the stack is moved to the top.";
exports.hints[OpCode_1.default.ROT] = "The top three items on the stack are rotated to the left.";
exports.hints[OpCode_1.default.SWAP] = "The top two items on the stack are swapped.";
exports.hints[OpCode_1.default.TUCK] = "The item at the top of the stack is copied and inserted before the second-to-top item.";
// Splice
exports.hints[OpCode_1.default.CAT] = "Concatenates two strings.";
exports.hints[OpCode_1.default.SUBSTR] = "Returns a section of a string.";
exports.hints[OpCode_1.default.LEFT] = "Keeps only characters left of the specified point in a string.";
exports.hints[OpCode_1.default.RIGHT] = "Keeps only characters right of the specified point in a string.";
exports.hints[OpCode_1.default.SIZE] = "Returns the length of the input string.";
// Bitwise logic
exports.hints[OpCode_1.default.INVERT] = "Flips all of the bits in the input.";
exports.hints[OpCode_1.default.AND] = "Boolean and between each bit in the inputs.";
exports.hints[OpCode_1.default.OR] = "Boolean or between each bit in the inputs.";
exports.hints[OpCode_1.default.XOR] = "Boolean exclusive or between each bit in the inputs.";
exports.hints[OpCode_1.default.EQUAL] = "Returns 1 if the inputs are exactly equal, 0 otherwise.";
//OP_EQUALVERIFY = 0x88, // Same as OP_EQUAL, but runs OP_VERIFY afterward.
//OP_RESERVED1 = 0x89, // Transaction is invalid unless occuring in an unexecuted OP_IF branch
//OP_RESERVED2 = 0x8A, // Transaction is invalid unless occuring in an unexecuted OP_IF branch
// Arithmetic
// Note: Arithmetic inputs are limited to signed 32-bit integers, but may overflow their output.
exports.hints[OpCode_1.default.INC] = "1 is added to the input.";
exports.hints[OpCode_1.default.DEC] = "1 is subtracted from the input.";
exports.hints[OpCode_1.default.SIGN] = "";
exports.hints[OpCode_1.default.NEGATE] = "The sign of the input is flipped.";
exports.hints[OpCode_1.default.ABS] = "The input is made positive.";
exports.hints[OpCode_1.default.NOT] = "If the input is 0 or 1, it is flipped. Otherwise the output will be 0.";
exports.hints[OpCode_1.default.NZ] = "Returns 0 if the input is 0. 1 otherwise.";
exports.hints[OpCode_1.default.ADD] = "a is added to b.";
exports.hints[OpCode_1.default.SUB] = "b is subtracted from a.";
exports.hints[OpCode_1.default.MUL] = "a is multiplied by b.";
exports.hints[OpCode_1.default.DIV] = "a is divided by b.";
exports.hints[OpCode_1.default.MOD] = "Returns the remainder after dividing a by b.";
exports.hints[OpCode_1.default.SHL] = "Shifts a left b bits, preserving sign.";
exports.hints[OpCode_1.default.SHR] = "Shifts a right b bits, preserving sign.";
exports.hints[OpCode_1.default.BOOLAND] = "If both a and b are not 0, the output is 1. Otherwise 0.";
exports.hints[OpCode_1.default.BOOLOR] = "If a or b is not 0, the output is 1. Otherwise 0.";
exports.hints[OpCode_1.default.NUMEQUAL] = "Returns 1 if the numbers are equal, 0 otherwise.";
exports.hints[OpCode_1.default.NUMNOTEQUAL] = "Returns 1 if the numbers are not equal, 0 otherwise.";
exports.hints[OpCode_1.default.LT] = "Returns 1 if a is less than b, 0 otherwise.";
exports.hints[OpCode_1.default.GT] = "Returns 1 if a is greater than b, 0 otherwise.";
exports.hints[OpCode_1.default.LTE] = "Returns 1 if a is less than or equal to b, 0 otherwise.";
exports.hints[OpCode_1.default.GTE] = "Returns 1 if a is greater than or equal to b, 0 otherwise.";
exports.hints[OpCode_1.default.MIN] = "Returns the smaller of a and b.";
exports.hints[OpCode_1.default.MAX] = "Returns the larger of a and b.";
exports.hints[OpCode_1.default.WITHIN] = "Returns 1 if x is within the specified range (left-inclusive), 0 otherwise.";
// Crypto
//hints[OpCode.RIPEMD160 = 0xA6, // The input is hashed using RIPEMD-160.
exports.hints[OpCode_1.default.SHA1] = ""; // The input is hashed using SHA-1.
exports.hints[OpCode_1.default.SHA256] = ""; // The input is hashed using SHA-256.
exports.hints[OpCode_1.default.HASH160] = "";
exports.hints[OpCode_1.default.HASH256] = "";
exports.hints[OpCode_1.default.CHECKSIG] = "";
exports.hints[OpCode_1.default.CHECKMULTISIG] = "";
// Array
exports.hints[OpCode_1.default.ARRAYSIZE] = "ARRAYSIZE";
exports.hints[OpCode_1.default.PACK] = "PACK";
exports.hints[OpCode_1.default.UNPACK] = "UNPACK";
exports.hints[OpCode_1.default.PICKITEM] = "Pops index and array from stack, then push the item in the array index to the stack";
exports.hints[OpCode_1.default.SETITEM] = "Pops newItem, index and array from stack, then copy the newItem to the array value at index";
exports.hints[OpCode_1.default.NEWARRAY] = "Pops size from stack and creates a new array with that size, and pushes the array into the stack";
exports.hints[OpCode_1.default.NEWSTRUCT] = " as value type ";
// Exceptions
exports.hints[OpCode_1.default.THROW] = "";
exports.hints[OpCode_1.default.THROWIFNOT] = "";
exports.default = exports.hints;
