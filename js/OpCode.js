"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OpCode;
(function (OpCode) {
    // Constants
    OpCode[OpCode["PUSH0"] = 0] = "PUSH0";
    OpCode[OpCode["PUSHF"] = 0] = "PUSHF";
    OpCode[OpCode["PUSHBYTES1"] = 1] = "PUSHBYTES1";
    OpCode[OpCode["PUSHBYTES75"] = 75] = "PUSHBYTES75";
    OpCode[OpCode["PUSHDATA1"] = 76] = "PUSHDATA1";
    OpCode[OpCode["PUSHDATA2"] = 77] = "PUSHDATA2";
    OpCode[OpCode["PUSHDATA4"] = 78] = "PUSHDATA4";
    OpCode[OpCode["PUSHM1"] = 79] = "PUSHM1";
    OpCode[OpCode["PUSH1"] = 81] = "PUSH1";
    OpCode[OpCode["PUSHT"] = 81] = "PUSHT";
    OpCode[OpCode["PUSH2"] = 82] = "PUSH2";
    OpCode[OpCode["PUSH3"] = 83] = "PUSH3";
    OpCode[OpCode["PUSH4"] = 84] = "PUSH4";
    OpCode[OpCode["PUSH5"] = 85] = "PUSH5";
    OpCode[OpCode["PUSH6"] = 86] = "PUSH6";
    OpCode[OpCode["PUSH7"] = 87] = "PUSH7";
    OpCode[OpCode["PUSH8"] = 88] = "PUSH8";
    OpCode[OpCode["PUSH9"] = 89] = "PUSH9";
    OpCode[OpCode["PUSH10"] = 90] = "PUSH10";
    OpCode[OpCode["PUSH11"] = 91] = "PUSH11";
    OpCode[OpCode["PUSH12"] = 92] = "PUSH12";
    OpCode[OpCode["PUSH13"] = 93] = "PUSH13";
    OpCode[OpCode["PUSH14"] = 94] = "PUSH14";
    OpCode[OpCode["PUSH15"] = 95] = "PUSH15";
    OpCode[OpCode["PUSH16"] = 96] = "PUSH16";
    // Flow control
    OpCode[OpCode["NOP"] = 97] = "NOP";
    OpCode[OpCode["JMP"] = 98] = "JMP";
    OpCode[OpCode["JMPIF"] = 99] = "JMPIF";
    OpCode[OpCode["JMPIFNOT"] = 100] = "JMPIFNOT";
    OpCode[OpCode["CALL"] = 101] = "CALL";
    OpCode[OpCode["RET"] = 102] = "RET";
    OpCode[OpCode["APPCALL"] = 103] = "APPCALL";
    OpCode[OpCode["SYSCALL"] = 104] = "SYSCALL";
    OpCode[OpCode["TAILCALL"] = 105] = "TAILCALL";
    // Stack
    OpCode[OpCode["DUPFROMALTSTACK"] = 106] = "DUPFROMALTSTACK";
    OpCode[OpCode["TOALTSTACK"] = 107] = "TOALTSTACK";
    OpCode[OpCode["FROMALTSTACK"] = 108] = "FROMALTSTACK";
    OpCode[OpCode["XDROP"] = 109] = "XDROP";
    OpCode[OpCode["XSWAP"] = 114] = "XSWAP";
    OpCode[OpCode["XTUCK"] = 115] = "XTUCK";
    OpCode[OpCode["DEPTH"] = 116] = "DEPTH";
    OpCode[OpCode["DROP"] = 117] = "DROP";
    OpCode[OpCode["DUP"] = 118] = "DUP";
    OpCode[OpCode["NIP"] = 119] = "NIP";
    OpCode[OpCode["OVER"] = 120] = "OVER";
    OpCode[OpCode["PICK"] = 121] = "PICK";
    OpCode[OpCode["ROLL"] = 122] = "ROLL";
    OpCode[OpCode["ROT"] = 123] = "ROT";
    OpCode[OpCode["SWAP"] = 124] = "SWAP";
    OpCode[OpCode["TUCK"] = 125] = "TUCK";
    // Splice
    OpCode[OpCode["CAT"] = 126] = "CAT";
    OpCode[OpCode["SUBSTR"] = 127] = "SUBSTR";
    OpCode[OpCode["LEFT"] = 128] = "LEFT";
    OpCode[OpCode["RIGHT"] = 129] = "RIGHT";
    OpCode[OpCode["SIZE"] = 130] = "SIZE";
    // Bitwise logic
    OpCode[OpCode["INVERT"] = 131] = "INVERT";
    OpCode[OpCode["AND"] = 132] = "AND";
    OpCode[OpCode["OR"] = 133] = "OR";
    OpCode[OpCode["XOR"] = 134] = "XOR";
    OpCode[OpCode["EQUAL"] = 135] = "EQUAL";
    //OP_EQUALVERIFY = 0x88, // Same as OP_EQUAL, but runs OP_VERIFY afterward.
    //OP_RESERVED1 = 0x89, // Transaction is invalid unless occuring in an unexecuted OP_IF branch
    //OP_RESERVED2 = 0x8A, // Transaction is invalid unless occuring in an unexecuted OP_IF branch
    // Arithmetic
    // Note: Arithmetic inputs are limited to signed 32-bit integers, but may overflow their output.
    OpCode[OpCode["INC"] = 139] = "INC";
    OpCode[OpCode["DEC"] = 140] = "DEC";
    OpCode[OpCode["SIGN"] = 141] = "SIGN";
    OpCode[OpCode["NEGATE"] = 143] = "NEGATE";
    OpCode[OpCode["ABS"] = 144] = "ABS";
    OpCode[OpCode["NOT"] = 145] = "NOT";
    OpCode[OpCode["NZ"] = 146] = "NZ";
    OpCode[OpCode["ADD"] = 147] = "ADD";
    OpCode[OpCode["SUB"] = 148] = "SUB";
    OpCode[OpCode["MUL"] = 149] = "MUL";
    OpCode[OpCode["DIV"] = 150] = "DIV";
    OpCode[OpCode["MOD"] = 151] = "MOD";
    OpCode[OpCode["SHL"] = 152] = "SHL";
    OpCode[OpCode["SHR"] = 153] = "SHR";
    OpCode[OpCode["BOOLAND"] = 154] = "BOOLAND";
    OpCode[OpCode["BOOLOR"] = 155] = "BOOLOR";
    OpCode[OpCode["NUMEQUAL"] = 156] = "NUMEQUAL";
    OpCode[OpCode["NUMNOTEQUAL"] = 158] = "NUMNOTEQUAL";
    OpCode[OpCode["LT"] = 159] = "LT";
    OpCode[OpCode["GT"] = 160] = "GT";
    OpCode[OpCode["LTE"] = 161] = "LTE";
    OpCode[OpCode["GTE"] = 162] = "GTE";
    OpCode[OpCode["MIN"] = 163] = "MIN";
    OpCode[OpCode["MAX"] = 164] = "MAX";
    OpCode[OpCode["WITHIN"] = 165] = "WITHIN";
    // Crypto
    //RIPEMD160 = 0xA6, // The input is hashed using RIPEMD-160.
    OpCode[OpCode["SHA1"] = 167] = "SHA1";
    OpCode[OpCode["SHA256"] = 168] = "SHA256";
    OpCode[OpCode["HASH160"] = 169] = "HASH160";
    OpCode[OpCode["HASH256"] = 170] = "HASH256";
    OpCode[OpCode["CHECKSIG"] = 172] = "CHECKSIG";
    OpCode[OpCode["CHECKMULTISIG"] = 174] = "CHECKMULTISIG";
    // Array
    OpCode[OpCode["ARRAYSIZE"] = 192] = "ARRAYSIZE";
    OpCode[OpCode["PACK"] = 193] = "PACK";
    OpCode[OpCode["UNPACK"] = 194] = "UNPACK";
    OpCode[OpCode["PICKITEM"] = 195] = "PICKITEM";
    OpCode[OpCode["SETITEM"] = 196] = "SETITEM";
    OpCode[OpCode["NEWARRAY"] = 197] = "NEWARRAY";
    OpCode[OpCode["NEWSTRUCT"] = 198] = "NEWSTRUCT";
    // Exceptions
    OpCode[OpCode["THROW"] = 240] = "THROW";
    OpCode[OpCode["THROWIFNOT"] = 241] = "THROWIFNOT";
})(OpCode = exports.OpCode || (exports.OpCode = {}));
exports.default = OpCode;
