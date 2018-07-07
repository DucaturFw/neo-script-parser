"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var OpCode_1 = __importDefault(require("./OpCode"));
var hints_1 = __importDefault(require("./hints"));
function disassemble(script) {
    function readByte() {
        return bytes[i++];
    }
    function readBytes(len) {
        return bytes.slice(i, i += len); //.toString('hex')
    }
    function readUInt16() {
        var uint = bytes.readUInt16LE(i);
        i += 2;
        return uint;
    }
    function readUInt32() {
        var uint = bytes.readUInt32LE(i);
        i += 4;
        return uint;
    }
    function readInt16() {
        var int = bytes.readInt16LE(i);
        i += 2;
        return int;
    }
    function readInt32() {
        var int = bytes.readInt32LE(i);
        i += 4;
        return int;
    }
    var entries = [];
    var bytes = Buffer.from(script, 'hex');
    var i = 0;
    while (i < (bytes.length - 1)) {
        var opcode = readByte();
        var entry = {
            opcode: opcode,
            pos: i - 1,
            name: OpCode_1.default[opcode],
            comment: hints_1.default[opcode],
        };
        if (opcode >= OpCode_1.default.PUSHBYTES1 && opcode <= OpCode_1.default.PUSHBYTES75) {
            var len = opcode;
            entry.data = readBytes(len);
            entry.name = "PUSHBYTES" + len;
            entry.comment = "Pushes " + len + " bytes into the stack: $$";
        }
        else if ((opcode >= OpCode_1.default.PUSH1 && opcode <= OpCode_1.default.PUSH16) || (opcode == OpCode_1.default.PUSH0)) {
            entry.int = opcode && (opcode - OpCode_1.default.PUSH1 + 1);
            entry.data = Buffer.from([entry.int]);
        }
        else
            switch (opcode) {
                // Push value
                //case OpCode.PUSH0:
                case OpCode_1.default.PUSHDATA1:
                    {
                        var len = readByte();
                        entry.data = readBytes(len);
                        entry.comment = "Pushes " + len + " bytes into the stack: $$";
                        break;
                    }
                case OpCode_1.default.PUSHDATA2:
                    {
                        var len = readUInt16();
                        entry.data = readBytes(len);
                        entry.comment = "Pushes " + len + " bytes into the stack: $$";
                        break;
                    }
                case OpCode_1.default.PUSHDATA4:
                    {
                        var len = readInt32();
                        entry.data = readBytes(len);
                        entry.comment = "Pushes " + len + " bytes into the stack: $$";
                        break;
                    }
                /*case OpCode.PUSHM1:
                case OpCode.PUSH1:
                case OpCode.PUSH2:
                case OpCode.PUSH3:
                case OpCode.PUSH4:
                case OpCode.PUSH5:
                case OpCode.PUSH6:
                case OpCode.PUSH7:
                case OpCode.PUSH8:
                case OpCode.PUSH9:
                case OpCode.PUSH10:
                case OpCode.PUSH11:
                case OpCode.PUSH12:
                case OpCode.PUSH13:
                case OpCode.PUSH14:
                case OpCode.PUSH15:
                case OpCode.PUSH16:*/
                // Control
                //case OpCode.NOP:
                case OpCode_1.default.JMP:
                case OpCode_1.default.JMPIF:
                case OpCode_1.default.JMPIFNOT:
                    {
                        var offset = readInt16();
                        //offset = context.InstructionPointer + offset - 3
                        break;
                    }
                /*case OpCode.CALL:
                    InvocationStack.Push(context.Clone());
                    context.InstructionPointer += 2;
                    ExecuteOp(OpCode.JMP, CurrentContext);
                    break;*/
                /*case OpCode.RET:
                    InvocationStack.Pop().Dispose();
                    if (InvocationStack.Count == 0)
                        State |= VMState.HALT;
                    break;*/
                case OpCode_1.default.APPCALL:
                case OpCode_1.default.TAILCALL:
                    {
                        var script_hash = readBytes(20);
                        entry.data = script_hash;
                        entry.comment = "Calls script with hash: $XX";
                        break;
                    }
                case OpCode_1.default.SYSCALL:
                    {
                        entry.data = readBytes(252);
                        entry.comment = "System call with data: $$";
                        break;
                    }
                // Stack ops
                /*case OpCode.DUPFROMALTSTACK:
                case OpCode.TOALTSTACK:
                case OpCode.FROMALTSTACK:
                case OpCode.XDROP:
                case OpCode.XSWAP:
                case OpCode.XTUCK:
                case OpCode.DEPTH:
                case OpCode.DROP:
                case OpCode.DUP:
                case OpCode.NIP:
                case OpCode.OVER:
                case OpCode.PICK:
                case OpCode.ROLL:
                case OpCode.ROT:
                case OpCode.SWAP:
                case OpCode.TUCK:
                case OpCode.CAT:
                case OpCode.SUBSTR:
                case OpCode.LEFT:
                case OpCode.RIGHT:
                case OpCode.SIZE:
                    */
                // Bitwise logic
                /*case OpCode.INVERT:
                case OpCode.AND:
                case OpCode.OR:
                case OpCode.XOR:
                case OpCode.EQUAL:
    |                            */
                // Numeric
                /*case OpCode.INC:
                case OpCode.DEC:
                case OpCode.SIGN:
                case OpCode.NEGATE:
                case OpCode.ABS:
                case OpCode.NOT:
                case OpCode.NZ:
                case OpCode.ADD:
                case OpCode.SUB:
                case OpCode.MUL:
                case OpCode.DIV:
                case OpCode.MOD:
                case OpCode.SHL:
                case OpCode.SHR:
                case OpCode.BOOLAND:
                case OpCode.BOOLOR:
                case OpCode.NUMEQUAL:
                case OpCode.NUMNOTEQUAL:
                case OpCode.LT:
                case OpCode.GT:
                case OpCode.LTE:
                case OpCode.GTE:
                case OpCode.MIN:
                case OpCode.MAX:
                case OpCode.WITHIN:
                    */
                // Crypto
                /*
                case OpCode.SHA1:
                case OpCode.SHA256:
                case OpCode.HASH160:
                case OpCode.HASH256:
                case OpCode.CHECKSIG:
                case OpCode.CHECKMULTISIG:
                case OpCode.ARRAYSIZE:
                case OpCode.PACK:
                case OpCode.UNPACK:
                case OpCode.PICKITEM:
                case OpCode.SETITEM:
                case OpCode.NEWARRAY:
                case OpCode.NEWSTRUCT:
                */
                // Exceptions
                /*case OpCode.THROW:
                case OpCode.THROWIFNOT:
                */
                default:
                    {
                        if (!OpCode_1.default[opcode]) {
                            entry.name = "???";
                            entry.comment = "Invalid opcode!!";
                        }
                        break;
                    }
            }
        entry.hex = entry.data && entry.data.toString('hex');
        entries.push(entry);
    }
    return entries;
}
exports.disassemble = disassemble;
