import { LogHelper } from "./LogHelper"

export function MethodLogDecorator(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    const isStatic = typeof target === 'function'; // static methods come from constructor function

    descriptor.value = function (...args: any[]) {
        const className = isStatic
            ? target.name                                 // Static: target is the class itself
            : this.constructor?.name || 'UnknownClass';   // Instance: get class from 'this'

        const methodName = propertyKey;

        LogHelper.LogShift(`${className}.${methodName} started with args:`, args);
        const result = originalMethod.apply(this, args);
        LogHelper.LogUnshift(`${className}.${methodName} finished with result:`, result);
        return result;
    };

    return descriptor;
}
