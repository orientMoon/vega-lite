"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Constants and utilities for data type */
/** Data type based on level of measurement */
var Type;
(function (Type) {
    Type.QUANTITATIVE = 'quantitative';
    Type.ORDINAL = 'ordinal';
    Type.TEMPORAL = 'temporal';
    Type.NOMINAL = 'nominal';
})(Type = exports.Type || (exports.Type = {}));
var TYPE_INDEX = {
    quantitative: 1,
    ordinal: 1,
    temporal: 1,
    nominal: 1
};
function isType(t) {
    return !!TYPE_INDEX[t];
}
exports.isType = isType;
exports.QUANTITATIVE = Type.QUANTITATIVE;
exports.ORDINAL = Type.ORDINAL;
exports.TEMPORAL = Type.TEMPORAL;
exports.NOMINAL = Type.NOMINAL;
/**
 * Get full, lowercase type name for a given type.
 * @param  type
 * @return Full type name.
 */
function getFullName(type) {
    if (type) {
        type = type.toLowerCase();
        switch (type) {
            case 'q':
            case exports.QUANTITATIVE:
                return 'quantitative';
            case 't':
            case exports.TEMPORAL:
                return 'temporal';
            case 'o':
            case exports.ORDINAL:
                return 'ordinal';
            case 'n':
            case exports.NOMINAL:
                return 'nominal';
        }
    }
    // If we get invalid input, return undefined type.
    return undefined;
}
exports.getFullName = getFullName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNENBQTRDO0FBQzVDLDhDQUE4QztBQUU5QyxJQUFpQixJQUFJLENBS3BCO0FBTEQsV0FBaUIsSUFBSTtJQUNOLGlCQUFZLEdBQW1CLGNBQWMsQ0FBQztJQUM5QyxZQUFPLEdBQWMsU0FBUyxDQUFDO0lBQy9CLGFBQVEsR0FBZSxVQUFVLENBQUM7SUFDbEMsWUFBTyxHQUFjLFNBQVMsQ0FBQztBQUM5QyxDQUFDLEVBTGdCLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQUtwQjtBQUdELElBQU0sVUFBVSxHQUFlO0lBQzdCLFlBQVksRUFBRSxDQUFDO0lBQ2YsT0FBTyxFQUFFLENBQUM7SUFDVixRQUFRLEVBQUUsQ0FBQztJQUNYLE9BQU8sRUFBRSxDQUFDO0NBQ1gsQ0FBQztBQUVGLGdCQUF1QixDQUFNO0lBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFGRCx3QkFFQztBQUVZLFFBQUEsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDakMsUUFBQSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN2QixRQUFBLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3pCLFFBQUEsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFFcEM7Ozs7R0FJRztBQUNILHFCQUE0QixJQUFpQjtJQUMzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2IsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLG9CQUFZO2dCQUNmLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDeEIsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLGdCQUFRO2dCQUNYLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDcEIsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLGVBQU87Z0JBQ1YsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNuQixLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssZUFBTztnQkFDVixNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBQ0Qsa0RBQWtEO0lBQ2xELE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQXBCRCxrQ0FvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZsYWd9IGZyb20gJy4vdXRpbCc7XG4vKiogQ29uc3RhbnRzIGFuZCB1dGlsaXRpZXMgZm9yIGRhdGEgdHlwZSAqL1xuLyoqIERhdGEgdHlwZSBiYXNlZCBvbiBsZXZlbCBvZiBtZWFzdXJlbWVudCAqL1xuXG5leHBvcnQgbmFtZXNwYWNlIFR5cGUge1xuICBleHBvcnQgY29uc3QgUVVBTlRJVEFUSVZFOiAncXVhbnRpdGF0aXZlJyA9ICdxdWFudGl0YXRpdmUnO1xuICBleHBvcnQgY29uc3QgT1JESU5BTDogJ29yZGluYWwnID0gJ29yZGluYWwnO1xuICBleHBvcnQgY29uc3QgVEVNUE9SQUw6ICd0ZW1wb3JhbCcgPSAndGVtcG9yYWwnO1xuICBleHBvcnQgY29uc3QgTk9NSU5BTDogJ25vbWluYWwnID0gJ25vbWluYWwnO1xufVxuZXhwb3J0IHR5cGUgVHlwZSA9IHR5cGVvZiBUeXBlLlFVQU5USVRBVElWRSB8IHR5cGVvZiBUeXBlLk9SRElOQUwgfCB0eXBlb2YgVHlwZS5URU1QT1JBTCB8IHR5cGVvZiBUeXBlLk5PTUlOQUw7XG5cbmNvbnN0IFRZUEVfSU5ERVg6IEZsYWc8VHlwZT4gPSB7XG4gIHF1YW50aXRhdGl2ZTogMSxcbiAgb3JkaW5hbDogMSxcbiAgdGVtcG9yYWw6IDEsXG4gIG5vbWluYWw6IDFcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGUodDogYW55KTogdCBpcyBUeXBlIHtcbiAgcmV0dXJuICEhVFlQRV9JTkRFWFt0XTtcbn1cblxuZXhwb3J0IGNvbnN0IFFVQU5USVRBVElWRSA9IFR5cGUuUVVBTlRJVEFUSVZFO1xuZXhwb3J0IGNvbnN0IE9SRElOQUwgPSBUeXBlLk9SRElOQUw7XG5leHBvcnQgY29uc3QgVEVNUE9SQUwgPSBUeXBlLlRFTVBPUkFMO1xuZXhwb3J0IGNvbnN0IE5PTUlOQUwgPSBUeXBlLk5PTUlOQUw7XG5cbi8qKlxuICogR2V0IGZ1bGwsIGxvd2VyY2FzZSB0eXBlIG5hbWUgZm9yIGEgZ2l2ZW4gdHlwZS5cbiAqIEBwYXJhbSAgdHlwZVxuICogQHJldHVybiBGdWxsIHR5cGUgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bGxOYW1lKHR5cGU6IFR5cGV8c3RyaW5nKTogVHlwZSB7XG4gIGlmICh0eXBlKSB7XG4gICAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgY2FzZSBRVUFOVElUQVRJVkU6XG4gICAgICAgIHJldHVybiAncXVhbnRpdGF0aXZlJztcbiAgICAgIGNhc2UgJ3QnOlxuICAgICAgY2FzZSBURU1QT1JBTDpcbiAgICAgICAgcmV0dXJuICd0ZW1wb3JhbCc7XG4gICAgICBjYXNlICdvJzpcbiAgICAgIGNhc2UgT1JESU5BTDpcbiAgICAgICAgcmV0dXJuICdvcmRpbmFsJztcbiAgICAgIGNhc2UgJ24nOlxuICAgICAgY2FzZSBOT01JTkFMOlxuICAgICAgICByZXR1cm4gJ25vbWluYWwnO1xuICAgIH1cbiAgfVxuICAvLyBJZiB3ZSBnZXQgaW52YWxpZCBpbnB1dCwgcmV0dXJuIHVuZGVmaW5lZCB0eXBlLlxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIl19