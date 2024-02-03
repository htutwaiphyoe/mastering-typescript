var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Foo_bar;
/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeout(n) {
    return new Promise((res) => setTimeout(res, n));
}
/**
 * Add two numbers
 * @param a first number
 * @param b second
 */
export function addNumbers(a, b) {
    return __awaiter(this, void 0, void 0, function* () {
        yield timeout(500);
        return a + b;
    });
}
class Foo {
    static getValue() {
        return __classPrivateFieldGet(Foo, _a, "f", _Foo_bar);
    }
}
_a = Foo;
_Foo_bar = { value: 3 };
//== Run the program ==//
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(yield addNumbers(Foo.getValue(), 4));
}))();
