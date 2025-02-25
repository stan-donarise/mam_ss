declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    class $mol_object2 {
        static $: $;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        static toJSON(): any;
        destructor(): void;
        static destructor(): void;
        toString(): string;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        fresh(): void;
        complete(): void;
        get incompleted(): boolean;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        pub_list: $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor): void;
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: ($mol_wire_sub | number)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    const $mol_dev_format_head: unique symbol;
    const $mol_dev_format_body: unique symbol;
    function $mol_dev_format_native(obj: any): any[];
    function $mol_dev_format_auto(obj: any): any[];
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get temp(): boolean;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor): void;
        [$mol_dev_format_head](): any[];
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        static promise: Promise<void> | null;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_tick | null;
        static plan(): void;
        static sync(): void;
        [Symbol.toStringTag]: string;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        get incompleted(): boolean;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): this;
        reap(): void;
        toString(): string;
        toJSON(): string;
        [$mol_dev_format_head](): any[];
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): this | undefined;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async_raw(): Promise<Result>;
        async(): Promise<Result> & {
            destructor(): void;
        };
        step(): Promise<null>;
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        static _promise: Promise<void> | null;
        static get promise(): Promise<void>;
        cancelled: boolean;
        promise: Promise<void>;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
    }[keyof Input];
}

declare namespace $ {
    function $mol_log3_web_make(level: $mol_type_keys_extract<Console, Function>, color: string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        channel(): ((next?: $mol_type_foot<Args>) => Awaited<Result>) & {
            atom: $mol_wire_atom<Host, Args, Result>;
        };
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    function $mol_wire_plex<Args extends [any, ...any[]]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: typeof host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    let $mol_mem: typeof $mol_wire_solo;
    let $mol_mem_key: typeof $mol_wire_plex;
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
        static resizes(next?: Event): Event | undefined;
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], notify?: 'notify'): Element[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr: PropertyDescriptor) => PropertyDescriptor;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    var $mol_dom: typeof globalThis;
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    function $mol_wire_watch(): void;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }, passive?: boolean): void;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    export function $mol_wire_async<Host extends object>(obj: Host): ObjectOrFunctionResultPromisify<Host>;
    type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res ? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res> : Some;
    type MethodsResultPromisify<Host extends Object> = {
        [K in keyof Host]: FunctionResultPromisify<Host[K]>;
    };
    type ObjectOrFunctionResultPromisify<Some> = (Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}) & (Some extends Object ? MethodsResultPromisify<Some> : Some);
    export {};
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_promise<Result = void> extends Promise<Result> {
        done: (value: Result | PromiseLike<Result>) => void;
        fail: (reason?: any) => void;
        constructor(executor?: (done: (value: Result | PromiseLike<Result>) => void, fail: (reason?: any) => void) => void);
    }
}

declare namespace $ {
    class $mol_promise_blocker<Result> extends $mol_promise<Result> {
        static [Symbol.toStringTag]: string;
    }
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    type $mol_style_unit_str<Quanity extends $mol_style_unit_any = $mol_style_unit_any> = `${number}${Quanity}`;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): `${number}%`;
        static px(value: number): `${number}px`;
        static mm(value: number): `${number}mm`;
        static cm(value: number): `${number}cm`;
        static Q(value: number): `${number}Q`;
        static in(value: number): `${number}in`;
        static pc(value: number): `${number}pc`;
        static pt(value: number): `${number}pt`;
        static cap(value: number): `${number}cap`;
        static ch(value: number): `${number}ch`;
        static em(value: number): `${number}em`;
        static rem(value: number): `${number}rem`;
        static ex(value: number): `${number}ex`;
        static ic(value: number): `${number}ic`;
        static lh(value: number): `${number}lh`;
        static rlh(value: number): `${number}rlh`;
        static vh(value: number): `${number}vh`;
        static vw(value: number): `${number}vw`;
        static vi(value: number): `${number}vi`;
        static vb(value: number): `${number}vb`;
        static vmin(value: number): `${number}vmin`;
        static vmax(value: number): `${number}vmax`;
        static deg(value: number): `${number}deg`;
        static rad(value: number): `${number}rad`;
        static grad(value: number): `${number}grad`;
        static turn(value: number): `${number}turn`;
        static s(value: number): `${number}s`;
        static ms(value: number): `${number}ms`;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'scale' | 'cubic-bezier' | 'linear' | 'steps' | $mol_style_func_image | $mol_style_func_filter;
    type $mol_style_func_image = 'url' | 'linear-gradient' | 'radial-gradient' | 'conic-gradient';
    type $mol_style_func_filter = 'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'opacity' | 'sepia' | 'saturate';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static linear_gradient<Value>(value: Value): $mol_style_func<"linear-gradient", Value>;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string, Value extends string>(name: Name, defaultValue?: Value): $mol_style_func<"var", Name | (Name | Value)[]>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%`)[]>;
        static clamp(min: $mol_style_unit_str<any>, mid: $mol_style_unit_str<any>, max: $mol_style_unit_str<any>): $mol_style_func<"clamp", `${number}${any}`[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static linear(...breakpoints: Array<number | [number, number | $mol_style_unit_str<'%'>]>): $mol_style_func<"linear", string[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
        static steps(value: number, step_position: 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end'): $mol_style_func<"steps", (number | "end" | "start" | "jump-start" | "jump-end" | "jump-none" | "jump-both")[]>;
        static blur(value?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"blur", string>;
        static brightness(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"brightness", string | number>;
        static contrast(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"contrast", string | number>;
        static drop_shadow(color: $mol_style_properties_color, x_offset: $mol_style_unit_str<$mol_style_unit_length>, y_offset: $mol_style_unit_str<$mol_style_unit_length>, blur_radius?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"drop-shadow", (`${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax` | $mol_style_properties_color)[]>;
        static grayscale(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"grayscale", string | number>;
        static hue_rotate(value?: 0 | $mol_style_unit_str<$mol_style_unit_angle>): $mol_style_func<"hue-rotate", string | 0>;
        static invert(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"invert", string | number>;
        static opacity(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"opacity", string | number>;
        static sepia(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"sepia", string | number>;
        static saturate(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"saturate", string | number>;
    }
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | $mol_style_func<'var'>;
    export type $mol_style_properties_color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Single_animation_composition = 'replace' | 'add' | 'accumulate';
    type Single_animation_direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    type Single_animation_fill_mode = 'none' | 'forwards' | 'backwards' | 'both';
    type Single_animation_iteration_count = 'infinite' | number;
    type Single_animation_play_state = 'running' | 'paused';
    type Easing_function = Linear_easing_function | Cubic_bezier_easing_function | Step_easing_function;
    type Linear_easing_function = 'linear' | $mol_style_func<'linear'>;
    type Cubic_bezier_easing_function = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | $mol_style_func<'cubic-bezier'>;
    type Step_easing_function = 'step-start' | 'step-end' | $mol_style_func<'steps'>;
    type Compat_auto = 'searchfield' | 'textarea' | 'push-button' | 'slider-horizontal' | 'checkbox' | 'radio' | 'menulist' | 'listbox' | 'meter' | 'progress-bar' | 'button';
    type Compat_special = 'textfield' | 'menulist-button';
    type Mix_blend_mode = Blend_mode | 'plus-darker' | 'plus-lighter';
    type Blend_mode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    type Box = 'border-box' | 'padding-box' | 'content-box';
    type Baseline_position = 'baseline' | `${'first' | 'last'} baseline`;
    type Content_distribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
    type Self_position = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';
    type Content_position = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type Overflow_position = 'unsafe' | 'safe';
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        accentColor?: $mol_style_properties_color | Common;
        align?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        justify?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        all?: Common;
        animation?: {
            composition?: Single_animation_composition | Single_animation_composition[][] | Common;
            delay?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            direction?: Single_animation_direction | Single_animation_direction[][] | Common;
            duration?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            fillMode?: Single_animation_fill_mode | Single_animation_fill_mode[][] | Common;
            iterationCount?: Single_animation_iteration_count | Single_animation_iteration_count[][] | Common;
            name?: 'none' | string & {} | ('none' | string & {})[][] | Common;
            playState?: Single_animation_play_state | Single_animation_play_state[][] | Common;
            timingFunction?: Easing_function | Easing_function[][] | Common;
        };
        appearance?: 'none' | 'auto' | Compat_auto | Compat_special | Common;
        aspectRatio?: 'auto' | number | `${number} / ${number}`;
        backdropFilter: $mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'> | ($mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'>)[][] | 'none' | Common;
        backfaceVisibility: 'visible' | 'hidden' | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            attachment?: 'scroll' | 'fixed' | 'local' | ('scroll' | 'fixed' | 'local')[][] | Common;
            blendMode?: Mix_blend_mode | Mix_blend_mode[][] | Common;
            clip?: Box | Box[][] | Common;
            color?: $mol_style_properties_color | Common;
            image?: readonly (readonly [$mol_style_func<$mol_style_func_image> | string & {}])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            size?: (BG_size | [BG_size, BG_size])[];
        };
        box?: {
            shadow?: readonly ([
                ...[inset: 'inset'] | [],
                x: Length,
                y: Length,
                blur: Length,
                spread: Length,
                color: $mol_style_properties_color
            ] | {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: $mol_style_properties_color;
            })[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: string & {} | 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: $mol_style_properties_color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch' | Common;
        scrollbar?: {
            color?: readonly [$mol_style_properties_color, $mol_style_properties_color] | 'auto' | Common;
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
            padding?: Directions<Length | 'auto'>;
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' | Common;
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: Directions<{
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: $mol_style_properties_color | Common;
            width?: Length | Common;
        }>;
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size | Common;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number | Common;
        opacity: number | Common;
    }
    export {};
}

declare namespace $ {
    function $mol_style_prop<Keys extends string[]>(prefix: string, keys: Keys): Record<Keys[number], $mol_style_func<"var", unknown>>;
}

declare namespace $ {
    const $mol_theme: Record<"image" | "line" | "text" | "field" | "focus" | "back" | "hover" | "card" | "current" | "special" | "control" | "shade", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: Record<"text" | "space" | "blur" | "block" | "round", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean | null;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): void;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly $mol_view_content[];
        sub_visible(): readonly $mol_view_content[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        dom_id(): string;
        dom_node_external(next?: Element): Element;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        static _view_names?: Map<string, string[]>;
        static view_names(suffix: string): string[];
        view_names_owned(): string[];
        view_names(): Set<string>;
        theme(next?: null | string): string | null;
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style_size(): {
            [key: string]: string | number;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [x: string]: (event: Event) => Promise<void>;
        };
        plugins(): readonly $mol_view[];
        [$mol_dev_format_head](): any[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
        destructor(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node_external(next?: Element): Element;
        render(): void;
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type Attrs<View extends $mol_view, Config, Attrs = ReturnType<View['attr']>> = {
        [name in keyof Attrs]?: {
            [val in keyof Config[Extract<name, keyof Config>]]: $mol_style_guard<View, Config[Extract<name, keyof Config>][val]>;
        };
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    type Keys<View extends $mol_view> = '>' | '@' | keyof $mol_style_properties | $mol_style_pseudo_element | $mol_style_pseudo_class | $mol_type_keys_extract<View, () => $mol_view> | `$${string}`;
    export type $mol_style_guard<View extends $mol_view, Config> = {
        [key in Keys<View>]?: unknown;
    } & $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends `[${string}]` ? {
            [val in keyof Config[key]]: $mol_style_guard<View, Config[key][val]>;
        } : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : key extends `$${string}` ? $mol_type_error<'Unknown View Class'> : $mol_type_error<'Unknown CSS Property'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		attr( ): ({ 
			'tabindex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number, cache?: 'cache'): number;
        scroll_left(next?: number, cache?: 'cache'): number;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $ss_blocks_block extends $mol_view {
		value( next?: string ): string
		focus_state( next?: string ): string
		after_content( ): string
		mouseout( next?: any ): any
		mouseover( next?: any ): any
		minimal_height( ): number
		sub( ): readonly(any)[]
		value_changed( next?: string ): string
		attr( ): ({ 
			'focus-state': ReturnType< $ss_blocks_block['focus_state'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'--after': ReturnType< $ss_blocks_block['after_content'] >,
		})  & ReturnType< $mol_view['style'] >
		visible_placeholder( ): string
		placeholder( ): string
		on_ctrl_x( next?: any ): any
		before_any_input( next?: any ): any
		before_insert_text( next?: any ): any
		beforeinput( next?: any ): any
		keydown( next?: any ): any
		input( next?: any ): any
		dragenter( next?: any ): any
		drop( next?: any ): any
		drag( next?: any ): any
		dragleave( next?: any ): any
		paste( next?: any ): any
		cut( next?: any ): any
		event( ): ({ 
			mouseout( next?: ReturnType< $ss_blocks_block['mouseout'] > ): ReturnType< $ss_blocks_block['mouseout'] >,
			mouseover( next?: ReturnType< $ss_blocks_block['mouseover'] > ): ReturnType< $ss_blocks_block['mouseover'] >,
		})  & ReturnType< $mol_view['event'] >
		focused( next?: boolean ): boolean
		hovered( next?: boolean ): boolean
		focus( ): any
	}
	
}

//# sourceMappingURL=block.view.tree.d.ts.map
declare namespace $.$$ {
    type $ss_blocks_block_focus_states = 'focused' | 'setting' | 'blurred';
    type $ss_blocks_block_id = any;
    function $ss_blocks_block_anchor_el(): HTMLElement;
    class $ss_blocks_block extends $.$ss_blocks_block {
        sub(): readonly any[];
        after_content(): string;
        visible_placeholder(): string;
        focus_state(next?: $ss_blocks_block_focus_states): $ss_blocks_block_focus_states;
        focus(): Promise<void>;
        input(e?: any): void;
        beforeinput(e?: any): any;
        on_ctrl_x(e?: any): void;
        keydown(e?: any): any;
        dragenter(e: any): void;
        drop(e: any): void;
        drag(e: any): void;
        dragleave(e: any): void;
        paste(e: any): void;
        cut(e: any): void;
        mouseover(): void;
        mouseout(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $ss_blocks extends $mol_object2 {
		Block( id: any): $ss_blocks_block
		beforeinput( next?: any ): any
		keydown( next?: any ): any
		input( next?: any ): any
		dragenter( next?: any ): any
		drop( next?: any ): any
		drag( next?: any ): any
		dragleave( next?: any ): any
		paste( next?: any ): any
		cut( next?: any ): any
	}
	
}

//# sourceMappingURL=blocks.view.tree.d.ts.map
declare namespace $.$$ {
    class $ss_blocks extends $.$ss_blocks {
        constructor();
        block_dom_name(): string;
        Block(id: $ss_blocks_block_id): $ss_blocks_block;
        block_from_node(node: Element): $ss_blocks_block;
        block_from_sel(): $ss_blocks_block | undefined;
        input(e?: any): void;
        beforeinput(e?: any): void;
        keydown(e?: any): void;
        dragenter(e: any): void;
        drop(e: any): void;
        drag(e: any): void;
        dragleave(e: any): void;
        paste(e: any): void;
        cut(e: any): void;
    }
}

declare namespace $ {
    type $mol_type_enforce<Actual extends Expected, Expected> = Actual;
}

declare namespace $ {

	type __ss_blocks_contenteditable_1 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['Block'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['Block'] >[0]
	>
	type __ss_blocks_contenteditable_2 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_beforeinput'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['beforeinput'] >[0]
	>
	type __ss_blocks_contenteditable_3 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_keydown'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['keydown'] >[0]
	>
	type __ss_blocks_contenteditable_4 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_input'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['input'] >[0]
	>
	type __ss_blocks_contenteditable_5 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_dragenter'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['dragenter'] >[0]
	>
	type __ss_blocks_contenteditable_6 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_drop'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['drop'] >[0]
	>
	type __ss_blocks_contenteditable_7 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_drag'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['drag'] >[0]
	>
	type __ss_blocks_contenteditable_8 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_dragleave'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['dragleave'] >[0]
	>
	type __ss_blocks_contenteditable_9 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_paste'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['paste'] >[0]
	>
	type __ss_blocks_contenteditable_10 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_cut'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['cut'] >[0]
	>
	export class $ss_blocks_contenteditable extends $mol_view {
		Block( id: any): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['Block'] >
		blocks_beforeinput( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['beforeinput'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['beforeinput'] >
		blocks_keydown( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['keydown'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['keydown'] >
		blocks_input( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['input'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['input'] >
		blocks_dragenter( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['dragenter'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['dragenter'] >
		blocks_drop( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['drop'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['drop'] >
		blocks_drag( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['drag'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['drag'] >
		blocks_dragleave( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['dragleave'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['dragleave'] >
		blocks_paste( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['paste'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['paste'] >
		blocks_cut( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['cut'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['cut'] >
		Body( ): $mol_view
		Blocks( ): $ss_blocks
		sub( ): readonly(any)[]
		field( ): ({ 
			'contentEditable': boolean,
		})  & ReturnType< $mol_view['field'] >
		event( ): ({ 
			beforeinput( next?: ReturnType< $ss_blocks_contenteditable['blocks_beforeinput'] > ): ReturnType< $ss_blocks_contenteditable['blocks_beforeinput'] >,
			keydown( next?: ReturnType< $ss_blocks_contenteditable['blocks_keydown'] > ): ReturnType< $ss_blocks_contenteditable['blocks_keydown'] >,
			input( next?: ReturnType< $ss_blocks_contenteditable['blocks_input'] > ): ReturnType< $ss_blocks_contenteditable['blocks_input'] >,
			dragenter( next?: ReturnType< $ss_blocks_contenteditable['blocks_dragenter'] > ): ReturnType< $ss_blocks_contenteditable['blocks_dragenter'] >,
			drop( next?: ReturnType< $ss_blocks_contenteditable['blocks_drop'] > ): ReturnType< $ss_blocks_contenteditable['blocks_drop'] >,
			drag( next?: ReturnType< $ss_blocks_contenteditable['blocks_drag'] > ): ReturnType< $ss_blocks_contenteditable['blocks_drag'] >,
			dragleave( next?: ReturnType< $ss_blocks_contenteditable['blocks_dragleave'] > ): ReturnType< $ss_blocks_contenteditable['blocks_dragleave'] >,
			paste( next?: ReturnType< $ss_blocks_contenteditable['blocks_paste'] > ): ReturnType< $ss_blocks_contenteditable['blocks_paste'] >,
			cut( next?: ReturnType< $ss_blocks_contenteditable['blocks_cut'] > ): ReturnType< $ss_blocks_contenteditable['blocks_cut'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=contenteditable.view.tree.d.ts.map
declare namespace $ {
    class $mol_span extends $mol_object2 {
        readonly uri: string;
        readonly source: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(uri: string, source: string, row: number, col: number, length: number);
        static unknown: $mol_span;
        static begin(uri: string, source?: string): $mol_span;
        static end(uri: string, source: string): $mol_span;
        static entire(uri: string, source: string): $mol_span;
        toString(): string;
        toJSON(): {
            uri: string;
            row: number;
            col: number;
            length: number;
        };
        error(message: string, Class?: ErrorConstructor): Error;
        span(row: number, col: number, length: number): $mol_span;
        after(length?: number): $mol_span;
        slice(begin: number, end?: number): $mol_span;
    }
}

declare namespace $ {
    class $mol_error_syntax extends SyntaxError {
        reason: string;
        line: string;
        span: $mol_span;
        constructor(reason: string, line: string, span: $mol_span);
    }
}

declare namespace $ {
    function $mol_tree2_from_string(this: $, str: string, uri?: string): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_to_string(this: $, tree: $mol_tree2): string;
}

declare namespace $ {
    type $mol_tree2_path = Array<string | number | null>;
    type $mol_tree2_hack<Context> = (input: $mol_tree2, belt: $mol_tree2_belt<Context>, context: Context) => readonly $mol_tree2[];
    type $mol_tree2_belt<Context> = Record<string, $mol_tree2_hack<Context>>;
    class $mol_tree2 extends Object {
        readonly type: string;
        readonly value: string;
        readonly kids: readonly $mol_tree2[];
        readonly span: $mol_span;
        constructor(type: string, value: string, kids: readonly $mol_tree2[], span: $mol_span);
        static list(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        list(kids: readonly $mol_tree2[]): $mol_tree2;
        static data(value: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        data(value: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        static struct(type: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        struct(type: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        clone(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        text(): string;
        static fromString(str: string, uri?: string): $mol_tree2;
        toString(): string;
        insert(value: $mol_tree2 | null, ...path: $mol_tree2_path): $mol_tree2;
        select(...path: $mol_tree2_path): $mol_tree2;
        filter(path: string[], value?: string): $mol_tree2;
        hack_self<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): readonly $mol_tree2[];
        hack<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): $mol_tree2[];
        error(message: string, Class?: ErrorConstructor): Error;
    }
    class $mol_tree2_empty extends $mol_tree2 {
        constructor();
    }
}

declare namespace $ {

	export class $ss_editor_node_data extends $mol_object2 {
		id( ): string
		value( next?: string ): string
		type( next?: string ): string
		child_ids( next?: readonly(string)[] ): readonly(string)[]
		child_nodes( next?: readonly($ss_editor_node_data)[] ): readonly($ss_editor_node_data)[]
		tree( next?: $mol_tree2_empty ): $mol_tree2_empty
		multiple( next?: boolean ): boolean
		changeable( next?: boolean ): boolean
		binded( next?: boolean ): boolean
		data_tree( id: any, next?: $mol_tree2_empty ): $mol_tree2_empty
		data_value( id: any, next?: string ): string
		data_type( id: any, next?: string ): string
		data_child_ids( id: any, next?: readonly(string)[] ): readonly(string)[]
		data_child_nodes( id: any, next?: readonly($ss_editor_node_data)[] ): readonly($ss_editor_node_data)[]
		data_changeable( id: any, next?: boolean ): boolean
		data_multiple( id: any, next?: boolean ): boolean
	}
	
}

//# sourceMappingURL=data.view.tree.d.ts.map
declare namespace $.$$ {
    type $ss_editor_node_data_id = string;
    class $ss_editor_node_data extends $.$ss_editor_node_data {
        binded(next?: any): boolean;
    }
}

declare namespace $ {

	export class $mol_ghost extends $mol_view {
		Sub( ): $mol_view
	}
	
}

//# sourceMappingURL=ghost.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node_external(next?: Element): Element;
        dom_node_actual(): Element;
        dom_tree(): Element;
        title(): string;
        minimal_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		rows( ): readonly($mol_view)[]
		gap_before( ): number
		gap_after( ): number
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		Empty( ): $mol_view
		Gap_before( ): $mol_view
		Gap_after( ): $mol_view
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(next?: [number, number]): [number, number];
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_ss_editor_node_ui_default_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_width_ss_editor_node_ui_default_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_width'] >
	>
	type $mol_list__rows_ss_editor_node_ui_default_3 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_default['children'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $ss_editor_node_ui_default extends $mol_view {
		Block( ): $ss_blocks_block
		Self_body( ): $mol_view
		children( ): readonly($ss_editor_node_ui)[]
		Children( ): $mol_list
		block_focused( ): boolean
		id( ): string
		data_node( ): $ss_editor_node_data
		sub( ): readonly(any)[]
		attr( ): ({ 
			'focused': ReturnType< $ss_editor_node_ui_default['block_focused'] >,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=default.view.tree.d.ts.map
declare namespace $.$$ {
    class $ss_editor_node_ui_default extends $.$ss_editor_node_ui_default {
        block_focused(): boolean;
        auto(): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $ss_editor_noedit extends $mol_view {
		field( ): ({ 
			'contentEditable': boolean,
		})  & ReturnType< $mol_view['field'] >
	}
	
}

//# sourceMappingURL=noedit.view.tree.d.ts.map
declare namespace $ {
    let $mol_layer: Record<"focus" | "float" | "hover" | "speck" | "popup", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {

	type $mol_pop_bubble__align_mol_pop_1 = $mol_type_enforce<
		ReturnType< $mol_pop['align'] >
		,
		ReturnType< $mol_pop_bubble['align'] >
	>
	type $mol_pop_bubble__content_mol_pop_2 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max_mol_pop_3 = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	export class $mol_pop extends $mol_view {
		Anchor( ): any
		align( ): string
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		prefer( ): string
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		align( ): string
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'mol_pop_align': ReturnType< $mol_pop_bubble['align'] >,
			'tabindex': number,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        showed(next?: boolean): boolean;
        sub_visible(): any[];
        height_max(): number;
        align(): string;
        align_vert(): "suspense" | "top" | "bottom";
        align_hor(): "suspense" | "left" | "right";
        View_port(): $mol_view;
        view_port(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | {
            left: number;
            top: number;
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_pop_over extends $mol_pop {
		hovered( next?: boolean ): boolean
		event_show( next?: any ): any
		event_hide( next?: any ): any
		showed( ): ReturnType< $mol_pop_over['hovered'] >
		attr( ): ({ 
			'tabindex': number,
		})  & ReturnType< $mol_pop['attr'] >
		event( ): ({ 
			mouseenter( next?: ReturnType< $mol_pop_over['event_show'] > ): ReturnType< $mol_pop_over['event_show'] >,
			mouseleave( next?: ReturnType< $mol_pop_over['event_hide'] > ): ReturnType< $mol_pop_over['event_hide'] >,
		})  & ReturnType< $mol_pop['event'] >
	}
	
}

//# sourceMappingURL=over.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pop_over extends $.$mol_pop_over {
        event_show(event?: MouseEvent): void;
        event_hide(event?: MouseEvent): void;
        showed(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_speck extends $mol_view {
		theme( ): string
		value( ): any
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_speck['theme'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		event( ): ({ 
			click( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        status(next?: any[]): any[];
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        hint_safe(): string;
        sub_visible(): ($mol_view_content | $mol_speck)[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
        aria_checked(): string;
    }
}

declare namespace $ {

	type $mol_check__minimal_width_mol_pick_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height_mol_pick_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled_mol_pick_3 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked_mol_pick_4 = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks_mol_pick_5 = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub_mol_pick_6 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint_mol_pick_7 = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pick extends $.$mol_pick {
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        width_limit(): number;
        minimal_width(): number;
        row_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<{
        [Key in keyof Intersection]: Intersection[Key];
    }, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
}

declare namespace $ {
    type $mol_type_intersect<Union> = (Union extends any ? (_: Union) => void : never) extends ((_: infer Intersection) => void) ? Intersection : never;
}

declare namespace $ {
    type $mol_unicode_category = [$mol_unicode_category_binary] | ['General_Category', $mol_char_category_general] | ['Script', $mol_unicode_category_script] | ['Script_Extensions', $mol_unicode_category_script];
    type $mol_unicode_category_binary = 'ASCII' | 'ASCII_Hex_Digit' | 'Alphabetic' | 'Any' | 'Assigned' | 'Bidi_Control' | 'Bidi_Mirrored' | 'Case_Ignorable' | 'Cased' | 'Changes_When_Casefolded' | 'Changes_When_Casemapped' | 'Changes_When_Lowercased' | 'Changes_When_NFKC_Casefolded' | 'Changes_When_Titlecased' | 'Changes_When_Uppercased' | 'Dash' | 'Default_Ignorable_Code_Point' | 'Deprecated' | 'Diacritic' | 'Emoji' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Presentation' | 'Extended_Pictographic' | 'Extender' | 'Grapheme_Base' | 'Grapheme_Extend' | 'Hex_Digit' | 'IDS_Binary_Operator' | 'IDS_Trinary_Operator' | 'ID_Continue' | 'ID_Start' | 'Ideographic' | 'Join_Control' | 'Logical_Order_Exception' | 'Lowercase' | 'Math' | 'Noncharacter_Code_Point' | 'Pattern_Syntax' | 'Pattern_White_Space' | 'Quotation_Mark' | 'Radical' | 'Regional_Indicator' | 'Sentence_Terminal' | 'Soft_Dotted' | 'Terminal_Punctuation' | 'Unified_Ideograph' | 'Uppercase' | 'Variation_Selector' | 'White_Space' | 'XID_Continue' | 'XID_Start';
    type $mol_char_category_general = 'Cased_Letter' | 'Close_Punctuation' | 'Connector_Punctuation' | 'Control' | 'Currency_Symbol' | 'Dash_Punctuation' | 'Decimal_Number' | 'Enclosing_Mark' | 'Final_Punctuation' | 'Format' | 'Initial_Punctuation' | 'Letter' | 'Letter_Number' | 'Line_Separator' | 'Lowercase_Letter' | 'Mark' | 'Math_Symbol' | 'Modifier_Letter' | 'Modifier_Symbol' | 'Nonspacing_Mark' | 'Number' | 'Open_Punctuation' | 'Other' | 'Other_Letter' | 'Other_Number' | 'Other_Punctuation' | 'Other_Symbol' | 'Paragraph_Separator' | 'Private_Use' | 'Punctuation' | 'Separator' | 'Space_Separator' | 'Spacing_Mark' | 'Surrogate' | 'Symbol' | 'Titlecase_Letter' | 'Unassigned' | 'Uppercase_Letter';
    type $mol_unicode_category_script = 'Adlam' | 'Ahom' | 'Anatolian_Hieroglyphs' | 'Arabic' | 'Armenian' | 'Avestan' | 'Balinese' | 'Bamum' | 'Bassa_Vah' | 'Batak' | 'Bengali' | 'Bhaiksuki' | 'Bopomofo' | 'Brahmi' | 'Braille' | 'Buginese' | 'Buhid' | 'Canadian_Aboriginal' | 'Carian' | 'Caucasian_Albanian' | 'Chakma' | 'Cham' | 'Chorasmian' | 'Cherokee' | 'Common' | 'Coptic' | 'Cuneiform' | 'Cypriot' | 'Cyrillic' | 'Deseret' | 'Devanagari' | 'Dives_Akuru' | 'Dogra' | 'Duployan' | 'Egyptian_Hieroglyphs' | 'Elbasan' | 'Elymaic' | 'Ethiopic' | 'Georgian' | 'Glagolitic' | 'Gothic' | 'Grantha' | 'Greek' | 'Gujarati' | 'Gunjala_Gondi' | 'Gurmukhi' | 'Han' | 'Hangul' | 'Hanifi_Rohingya' | 'Hanunoo' | 'Hatran' | 'Hebrew' | 'Hiragana' | 'Imperial_Aramaic' | 'Inherited' | 'Inscriptional_Pahlavi' | 'Inscriptional_Parthian' | 'Javanese' | 'Kaithi' | 'Kannada' | 'Katakana' | 'Kayah_Li' | 'Kharoshthi' | 'Khitan_Small_Script' | 'Khmer' | 'Khojki' | 'Khudawadi' | 'Lao' | 'Latin' | 'Lepcha' | 'Limbu' | 'Linear_A' | 'Linear_B' | 'Lisu' | 'Lycian' | 'Lydian' | 'Mahajani' | 'Makasar' | 'Malayalam' | 'Mandaic' | 'Manichaean' | 'Marchen' | 'Medefaidrin' | 'Masaram_Gondi' | 'Meetei_Mayek' | 'Mende_Kikakui' | 'Meroitic_Cursive' | 'Meroitic_Hieroglyphs' | 'Miao' | 'Modi' | 'Mongolian' | 'Mro' | 'Multani' | 'Myanmar' | 'Nabataean' | 'Nandinagari' | 'New_Tai_Lue' | 'Newa' | 'Nko' | 'Nushu' | 'Nyiakeng_Puachue_Hmong' | 'Ogham' | 'Ol_Chiki' | 'Old_Hungarian' | 'Old_Italic' | 'Old_North_Arabian' | 'Old_Permic' | 'Old_Persian' | 'Old_Sogdian' | 'Old_South_Arabian' | 'Old_Turkic' | 'Oriya' | 'Osage' | 'Osmanya' | 'Pahawh_Hmong' | 'Palmyrene' | 'Pau_Cin_Hau' | 'Phags_Pa' | 'Phoenician' | 'Psalter_Pahlavi' | 'Rejang' | 'Runic' | 'Samaritan' | 'Saurashtra' | 'Sharada' | 'Shavian' | 'Siddham' | 'SignWriting' | 'Sinhala' | 'Sogdian' | 'Sora_Sompeng' | 'Soyombo' | 'Sundanese' | 'Syloti_Nagri' | 'Syriac' | 'Tagalog' | 'Tagbanwa' | 'Tai_Le' | 'Tai_Tham' | 'Tai_Viet' | 'Takri' | 'Tamil' | 'Tangut' | 'Telugu' | 'Thaana' | 'Thai' | 'Tibetan' | 'Tifinagh' | 'Tirhuta' | 'Ugaritic' | 'Vai' | 'Wancho' | 'Warang_Citi' | 'Yezidi' | 'Yi' | 'Zanabazar_Square';
}

interface String {
    match<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.match]>;
    matchAll<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.matchAll]>;
}
declare namespace $ {
    type Groups_to_params<T> = {
        [P in keyof T]?: T[P] | boolean | undefined;
    };
    export type $mol_regexp_source = number | string | RegExp | {
        [key in string]: $mol_regexp_source;
    } | readonly [$mol_regexp_source, ...$mol_regexp_source[]];
    export type $mol_regexp_groups<Source extends $mol_regexp_source> = Source extends number ? {} : Source extends string ? {} : Source extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{
        [key in Extract<keyof Source, number>]: $mol_regexp_groups<Source[key]>;
    }[Extract<keyof Source, number>]>> : Source extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> ? {} : NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> : Source extends {
        readonly [key in string]: $mol_regexp_source;
    } ? $mol_type_merge<$mol_type_intersect<{
        [key in keyof Source]: $mol_type_merge<$mol_type_override<{
            readonly [k in Extract<keyof Source, string>]: string;
        }, {
            readonly [k in key]: Source[key] extends string ? Source[key] : string;
        }> & $mol_regexp_groups<Source[key]>>;
    }[keyof Source]>> : never;
    export class $mol_regexp<Groups extends Record<string, string>> extends RegExp {
        readonly groups: (Extract<keyof Groups, string>)[];
        constructor(source: string, flags?: string, groups?: (Extract<keyof Groups, string>)[]);
        [Symbol.matchAll](str: string): RegExpStringIterator<RegExpMatchArray & $mol_type_override<RegExpMatchArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        [Symbol.match](str: string): null | RegExpMatchArray;
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): RegExpExecArray & $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        get native(): RegExp;
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static vary<Sources extends readonly $mol_regexp_source[]>(sources: Sources): $mol_regexp<$mol_regexp_groups<Sources[number]>>;
        static optional<Source extends $mol_regexp_source>(source: Source): $mol_regexp<$mol_regexp_groups<Source>>;
        static force_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static forbid_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static from<Source extends $mol_regexp_source>(source: Source, { ignoreCase, multiline }?: Partial<Pick<RegExp, 'ignoreCase' | 'multiline'>>): $mol_regexp<$mol_regexp_groups<Source>>;
        static unicode_only(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static unicode_except(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static char_range(from: number, to: number): $mol_regexp<{}>;
        static char_only(...allowed: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static char_except(...forbidden: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static decimal_only: $mol_regexp<{}>;
        static decimal_except: $mol_regexp<{}>;
        static latin_only: $mol_regexp<{}>;
        static latin_except: $mol_regexp<{}>;
        static space_only: $mol_regexp<{}>;
        static space_except: $mol_regexp<{}>;
        static word_break_only: $mol_regexp<{}>;
        static word_break_except: $mol_regexp<{}>;
        static tab: $mol_regexp<{}>;
        static slash_back: $mol_regexp<{}>;
        static nul: $mol_regexp<{}>;
        static char_any: $mol_regexp<{}>;
        static begin: $mol_regexp<{}>;
        static end: $mol_regexp<{}>;
        static or: $mol_regexp<{}>;
        static line_end: $mol_regexp<{
            readonly win_end: string;
            readonly mac_end: string;
        }>;
    }
    export {};
}

declare namespace $ {

	type $mol_paragraph__sub_mol_dimmer_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub_mol_dimmer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
}

declare namespace $ {
    let $mol_mem_persist: typeof $mol_wire_solid;
}

declare namespace $ {
    export function $mol_wire_sync<Host extends object>(obj: Host): ObjectOrFunctionResultAwaited<Host>;
    type FunctionResultAwaited<Some> = Some extends (...args: infer Args) => infer Res ? (...args: Args) => Awaited<Res> : Some;
    type ConstructorResultAwaited<Some> = Some extends new (...args: infer Args) => infer Res ? new (...args: Args) => Res : {};
    type MethodsResultAwaited<Host extends Object> = {
        [K in keyof Host]: FunctionResultAwaited<Host[K]>;
    };
    type ObjectOrFunctionResultAwaited<Some> = (Some extends (...args: any) => unknown ? FunctionResultAwaited<Some> : {}) & (Some extends Object ? MethodsResultAwaited<Some> & ConstructorResultAwaited<Some> : Some);
    export {};
}

declare namespace $ {
    class $mol_storage extends $mol_object2 {
        static native(): StorageManager;
        static persisted(next?: boolean, cache?: 'cache'): boolean;
        static estimate(): StorageEstimate;
        static dir(): FileSystemDirectoryHandle;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    class $mol_lock extends $mol_object {
        protected promise: null | Promise<void>;
        wait(): Promise<() => void>;
        grab(): () => void;
    }
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: BufferSource, encoding?: $mol_charset_encoding): string;
}

declare var $node: any;

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    type $mol_file_transaction_mode = 'create' | 'exists_truncate' | 'exists_fail' | 'read_only' | 'write_only' | 'read_write' | 'append';
    type $mol_file_transaction_buffer = ArrayBufferView;
    class $mol_file_transaction extends $mol_object {
        path(): string;
        modes(): readonly $mol_file_transaction_mode[];
        write(options: {
            buffer: ArrayBufferView | string | readonly ArrayBufferView[];
            offset?: number | null;
            length?: number | null;
            position?: number | null;
        }): number;
        read(): Uint8Array<ArrayBuffer>;
        truncate(size: number): void;
        close(): void;
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_file_transaction_web extends $mol_file_transaction {
        write(options: {
            buffer: ArrayBufferView | string | readonly ArrayBufferView[];
            offset?: number | null;
            length?: number | null;
            position?: number | null;
        }): number;
        truncate(size: number): void;
        read(): Buffer<ArrayBuffer>;
        close(): void;
    }
}

declare namespace $ {
    class $mol_file_base extends $mol_object {
        static absolute<This extends typeof $mol_file_base>(this: This, path: string): InstanceType<This>;
        static relative<This extends typeof $mol_file_base>(this: This, path: string): InstanceType<This>;
        static base: string;
        path(): string;
        parent(): this;
        exists_cut(): boolean;
        protected root(): boolean;
        protected stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        protected static changed: Set<$mol_file_base>;
        protected static frame: null | $mol_after_timeout;
        protected static changed_add(type: 'change' | 'rename', path: string): void;
        static watch_debounce(): number;
        static flush(): void;
        protected static watching: boolean;
        protected static lock: $mol_lock;
        protected static watch_off(path: string): void;
        static unwatched<Result>(side_effect: () => Result, affected_dir: string): Result;
        reset(): void;
        modified(): Date | null;
        version(): string;
        protected info(path: string): null | $mol_file_stat;
        protected ensure(): void;
        protected drop(): void;
        protected copy(to: string): void;
        protected read(): Uint8Array<ArrayBuffer>;
        protected write(buffer: Uint8Array<ArrayBuffer>): void;
        protected kids(): readonly this[];
        readable(opts: {
            start?: number;
            end?: number;
        }): ReadableStream<Uint8Array<ArrayBuffer>>;
        writable(opts: {
            start?: number;
        }): WritableStream<Uint8Array<ArrayBuffer>>;
        buffer(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        stat_make(size: number): {
            readonly type: "file";
            readonly size: number;
            readonly atime: Date;
            readonly mtime: Date;
            readonly ctime: Date;
        };
        clone(to: string): this | null;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        text(next?: string, virt?: 'virt'): string;
        text_int(next?: string, virt?: 'virt'): string;
        sub(reset?: null): this[];
        resolve(path: string): this;
        relate(base?: $mol_file_base): string;
        find(include?: RegExp, exclude?: RegExp): this[];
        size(): number;
        toJSON(): string;
        open(...modes: readonly $mol_file_transaction_mode[]): $mol_file_transaction;
    }
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file extends $mol_file_base {
    }
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        status(): "unknown" | "success" | "inform" | "redirect" | "wrong" | "failed";
        code(): number;
        message(): string;
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array<ArrayBufferLike>> | null;
        text(): string;
        json(): unknown;
        blob(): Blob;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch extends $mol_object2 {
        static request(input: RequestInfo, init?: RequestInit): Promise<Response> & {
            destructor: () => void;
        };
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static success(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array<ArrayBufferLike>> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static blob(input: RequestInfo, init?: RequestInit): Blob;
        static buffer(input: RequestInfo, init?: RequestInit): ArrayBuffer;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    class $mol_file_webdav extends $mol_file_base {
        static relative<This extends typeof $mol_file>(this: This, path: string): InstanceType<This>;
        resolve(path: string): this;
        static headers(): Record<string, string>;
        headers(): Record<string, string>;
        protected fetch(init: RequestInit): $mol_fetch_response;
        protected read(): Uint8Array<ArrayBuffer>;
        protected write(body: Uint8Array<ArrayBuffer>): void;
        protected ensure(): void;
        protected drop(): void;
        protected copy(to: string): void;
        protected kids(): this[];
        readable(opts: {
            start?: number;
            end?: number;
        }): ReadableStream<Uint8Array<ArrayBuffer>>;
        protected info(): $mol_file_stat | null;
    }
}

declare namespace $ {
    class $mol_file_web extends $mol_file_webdav {
        static base: string;
        version(): string;
        protected info(): $mol_file_stat | null;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): undefined;
        event_up(event?: KeyboardEvent): undefined;
        event_down(event?: KeyboardEvent): undefined;
        event_left(event?: KeyboardEvent): undefined;
        event_right(event?: KeyboardEvent): undefined;
        index_y(): number | null;
        index_x(): number | null;
    }
}

declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): { [key in keyof typeof $mol_keyboard_code]?: (event: KeyboardEvent) => void; };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {

	type $mol_hotkey__mod_ctrl_mol_string_1 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_mol_string_2 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        error_report(): void;
        hint_visible(): string;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
        selection_watcher(): $mol_dom_listener;
        selection_change(event: Event): void;
        selection_start(): number;
        selection_end(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): Record<string, any>;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_svg_path__geometry_mol_icon_1 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key_mol_search_1 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y_mol_search_2 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_search_3 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value_mol_search_4 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_search_5 = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit_mol_search_6 = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_mol_search_7 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard_mol_search_8 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter_mol_search_9 = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint_mol_search_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_mol_search_11 = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows_mol_search_13 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_search_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_dimmer__haystack_mol_search_15 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_search_16 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__17 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub_mol_search_18 = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_mol_search_19 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_20 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        anchor_content(): ($mol_button_minor | $.$mol_string)[];
        suggests_showed(next?: boolean): boolean;
        suggest_selected(next?: string): void;
        nav_components(): ($mol_button_minor | $.$mol_string)[];
        nav_focused(component?: $mol_view): $mol_view | $.$mol_string | null;
        suggest_label(key: string): string;
        menu_items(): $mol_button_minor[];
        suggest_select(id: string, event?: MouseEvent): void;
        clear(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => readonly string[]): (variant: Variant) => boolean;
}

declare namespace $ {

	type $mol_dimmer__haystack_mol_select_1 = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_select_2 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y_mol_select_3 = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_select_4 = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle_mol_select_5 = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows_mol_select_6 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_select_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__event_click_mol_select_8 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub_mol_select_9 = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_select_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query_mol_select_11 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint_mol_select_12 = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit_mol_select_13 = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled_mol_select_14 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $.$mol_search | null;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_button_minor | $.$mol_search)[];
        trigger_content(): readonly $mol_view_content[];
        menu_content(): $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_ss_editor_node_ui_pop_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_pop_2 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['bubble_content'] >
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_pop_over__showed_ss_editor_node_ui_pop_3 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['showed'] >
		,
		ReturnType< $mol_pop_over['showed'] >
	>
	type $mol_pop_over__align_ss_editor_node_ui_pop_4 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['test'] >
		,
		ReturnType< $mol_pop_over['align'] >
	>
	type $mol_pop_over__Anchor_ss_editor_node_ui_pop_5 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['Anchor'] >
		,
		ReturnType< $mol_pop_over['Anchor'] >
	>
	type $mol_pop_over__bubble_content_ss_editor_node_ui_pop_6 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['visible_bubble_content'] >
		,
		ReturnType< $mol_pop_over['bubble_content'] >
	>
	type $mol_list__rows_ss_editor_node_ui_pop_7 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['children'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_ss_editor_node_ui_pop_8 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['bubble_content_autocomplete'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_pop_9 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['autocomplete_footer'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_pop_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_select__no_options_message_ss_editor_node_ui_pop_11 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['no_options_message'] >
	>
	type $mol_select__event_select_ss_editor_node_ui_pop_12 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['event_select'] >
		,
		ReturnType< $mol_select['event_select'] >
	>
	type $mol_select__dictionary_ss_editor_node_ui_pop_13 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['select_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__filter_pattern_ss_editor_node_ui_pop_14 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['filter_pattern'] >
		,
		ReturnType< $mol_select['filter_pattern'] >
	>
	export class $ss_editor_node_ui_pop extends $ss_editor_node_ui_default {
		showed( next?: boolean ): boolean
		test( ): string
		self_hovered( ): ReturnType< ReturnType< $ss_editor_node_ui_pop['Self_body'] >['hovered'] >
		Anchor( ): $mol_view
		bubble_content( ): readonly(any)[]
		Bubble_content( ): $ss_editor_noedit
		visible_bubble_content( ): readonly(any)[]
		Self_body( ): $mol_pop_over
		Children( ): $mol_list
		bubble_content_autocomplete( ): readonly(any)[]
		Bubble_scroll( ): $mol_scroll
		autocomplete_footer( ): readonly(any)[]
		Autocomplete_footer( ): $mol_view
		event_select( id: any, next?: any ): any
		Bubble_pane( ): ReturnType< ReturnType< $ss_editor_node_ui_pop['Autocomplete'] >['Bubble_pane'] >
		select_dict( ): Record<string, any>
		filter_pattern( ): string
		sub( ): readonly(any)[]
		Autocomplete_bubble_content( ): $ss_editor_noedit
		autocomplete( ): boolean
		data_node( ): $ss_editor_node_data
		options_filtered( ): readonly(any)[]
		Autocomplete( ): $mol_select
		attr( ): ({ 
			'hovered': ReturnType< $ss_editor_node_ui_pop['self_hovered'] >,
		})  & ReturnType< $ss_editor_node_ui_default['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $.$$ {
    class $ss_editor_node_ui_pop extends $.$ss_editor_node_ui_pop {
        autocomplete_showed(): boolean;
        visible_bubble_content(): $ss_editor_noedit[];
        showed(): boolean;
        event_select(opt: string, e: Event): null;
        filter_pattern(): string;
        options_filtered(): readonly string[];
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_find_replace extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=replace.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_minor__click_ss_editor_node_ui_class_1 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_class['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_ss_editor_node_ui_class_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $ss_editor_node_ui_class_self__Block_ss_editor_node_ui_class_3 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_class['Block'] >
		,
		ReturnType< $ss_editor_node_ui_class_self['Block'] >
	>
	type $ss_editor_node_ui_class_self__valid_ss_editor_node_ui_class_4 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_class['valid'] >
		,
		ReturnType< $ss_editor_node_ui_class_self['valid'] >
	>
	export class $ss_editor_node_ui_class extends $ss_editor_node_ui_pop {
		Block( ): $ss_blocks_block
		valid( ): boolean
		clear( next?: any ): any
		Replace_class_icon( ): $mol_icon_find_replace
		Replace_class( ): $mol_button_minor
		data_node( ): $ss_editor_node_data
		tree( ): $mol_tree2_empty
		sub( ): readonly(any)[]
		autocomplete( ): boolean
		class_list( ): readonly(string)[]
		Anchor( ): $ss_editor_node_ui_class_self
		bubble_content( ): readonly(any)[]
	}
	
	type $ss_editor_noedit__sub_ss_editor_node_ui_class_self_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_class_self_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $ss_editor_node_ui_class_self extends $mol_view {
		Dollar( ): $ss_editor_noedit
		Block( ): $ss_blocks_block
		Label( ): $mol_view
		valid( ): boolean
		sub( ): readonly(any)[]
		attr( ): ({ 
			'valid': ReturnType< $ss_editor_node_ui_class_self['valid'] >,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=class.view.tree.d.ts.map
declare namespace $.$$ {
    class $ss_editor_node_ui_class extends $.$ss_editor_node_ui_class {
        valid(): boolean;
        autocomplete_showed(): boolean;
        select_dict(): {
            [k: string]: string;
        };
        event_select(class_name: string): void;
        clear(): void;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {

	type $ss_editor_node_ui_locale__children_ss_editor_node_ui_1 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_locale['children'] >
	>
	type $ss_editor_node_ui_locale__data_node_ss_editor_node_ui_2 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_locale['data_node'] >
	>
	type $ss_editor_node_ui_root__children_ss_editor_node_ui_3 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_root['children'] >
	>
	type $ss_editor_node_ui_root__data_node_ss_editor_node_ui_4 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_root['data_node'] >
	>
	type $ss_editor_node_ui_value__Block_ss_editor_node_ui_5 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_value['Block'] >
	>
	type $ss_editor_node_ui_value__children_ss_editor_node_ui_6 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_value['children'] >
	>
	type $ss_editor_node_ui_value__data_node_ss_editor_node_ui_7 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_value['data_node'] >
	>
	type $ss_editor_node_ui_string__Block_ss_editor_node_ui_8 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_string['Block'] >
	>
	type $ss_editor_node_ui_string__children_ss_editor_node_ui_9 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_string['children'] >
	>
	type $ss_editor_node_ui_string__data_node_ss_editor_node_ui_10 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_string['data_node'] >
	>
	type $ss_editor_node_ui_bool__Block_ss_editor_node_ui_11 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_bool['Block'] >
	>
	type $ss_editor_node_ui_bool__children_ss_editor_node_ui_12 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_bool['children'] >
	>
	type $ss_editor_node_ui_bool__data_node_ss_editor_node_ui_13 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_bool['data_node'] >
	>
	type $ss_editor_node_ui_null__Block_ss_editor_node_ui_14 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_null['Block'] >
	>
	type $ss_editor_node_ui_null__children_ss_editor_node_ui_15 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_null['children'] >
	>
	type $ss_editor_node_ui_null__data_node_ss_editor_node_ui_16 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_null['data_node'] >
	>
	type $ss_editor_node_ui_left__children_ss_editor_node_ui_17 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_left['children'] >
	>
	type $ss_editor_node_ui_left__data_node_ss_editor_node_ui_18 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_left['data_node'] >
	>
	type $ss_editor_node_ui_right__children_ss_editor_node_ui_19 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_right['children'] >
	>
	type $ss_editor_node_ui_right__data_node_ss_editor_node_ui_20 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_right['data_node'] >
	>
	type $ss_editor_node_ui_bi__children_ss_editor_node_ui_21 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_bi['children'] >
	>
	type $ss_editor_node_ui_bi__data_node_ss_editor_node_ui_22 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_bi['data_node'] >
	>
	type $ss_editor_node_ui_default__Block_ss_editor_node_ui_23 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_default['Block'] >
	>
	type $ss_editor_node_ui_default__children_ss_editor_node_ui_24 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_default['children'] >
	>
	type $ss_editor_node_ui_default__data_node_ss_editor_node_ui_25 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_default['data_node'] >
	>
	type $ss_editor_node_ui_list__Block_ss_editor_node_ui_26 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_list['Block'] >
	>
	type $ss_editor_node_ui_list__data_node_ss_editor_node_ui_27 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_list['data_node'] >
	>
	type $ss_editor_node_ui_list__children_ss_editor_node_ui_28 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_list['children'] >
	>
	type $ss_editor_node_ui_list__Block_fabric_ss_editor_node_ui_29 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block_fabric'] >
		,
		ReturnType< $ss_editor_node_ui_list['Block_fabric'] >
	>
	type $ss_editor_node_ui_list__id_ss_editor_node_ui_30 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['id'] >
		,
		ReturnType< $ss_editor_node_ui_list['id'] >
	>
	type $ss_editor_node_ui_dict__Block_ss_editor_node_ui_31 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_dict['Block'] >
	>
	type $ss_editor_node_ui_dict__data_node_ss_editor_node_ui_32 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_dict['data_node'] >
	>
	type $ss_editor_node_ui_dict__children_ss_editor_node_ui_33 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_dict['children'] >
	>
	type $ss_editor_node_ui_key__Block_ss_editor_node_ui_34 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_key['Block'] >
	>
	type $ss_editor_node_ui_key__children_ss_editor_node_ui_35 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_key['children'] >
	>
	type $ss_editor_node_ui_key__data_node_ss_editor_node_ui_36 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_key['data_node'] >
	>
	type $ss_editor_node_ui_prop__Block_ss_editor_node_ui_37 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_prop['Block'] >
	>
	type $ss_editor_node_ui_prop__children_ss_editor_node_ui_38 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_prop['children'] >
	>
	type $ss_editor_node_ui_prop__data_node_ss_editor_node_ui_39 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_prop['data_node'] >
	>
	type $ss_editor_node_ui_prop__replace_ss_editor_node_ui_40 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['replace_prop'] >
		,
		ReturnType< $ss_editor_node_ui_prop['replace'] >
	>
	type $ss_editor_node_ui_prop__add_object_in_list_ss_editor_node_ui_41 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['add_object_in_list'] >
		,
		ReturnType< $ss_editor_node_ui_prop['add_object_in_list'] >
	>
	type $ss_editor_node_ui_prop__id_ss_editor_node_ui_42 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['id'] >
		,
		ReturnType< $ss_editor_node_ui_prop['id'] >
	>
	type $ss_editor_node_ui_prop__unbind_prop_ss_editor_node_ui_43 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['unbind_prop'] >
		,
		ReturnType< $ss_editor_node_ui_prop['unbind_prop'] >
	>
	type $ss_editor_node_ui_prop_root__Block_ss_editor_node_ui_44 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['Block'] >
	>
	type $ss_editor_node_ui_prop_root__children_ss_editor_node_ui_45 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['children'] >
	>
	type $ss_editor_node_ui_prop_root__data_node_ss_editor_node_ui_46 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['data_node'] >
	>
	type $ss_editor_node_ui_prop_root__props_of_ss_editor_node_ui_47 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['props_of'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['props_of'] >
	>
	type $ss_editor_node_ui_prop_root__data_node_parent_ss_editor_node_ui_48 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node_parent'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['data_node_parent'] >
	>
	type $ss_editor_node_ui_prop_root__drop_node_ss_editor_node_ui_49 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['drop_node'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['drop_node'] >
	>
	type $ss_editor_node_ui_prop_root__set_subprop_tree_ss_editor_node_ui_50 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['set_subprop_tree'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['set_subprop_tree'] >
	>
	type $ss_editor_node_ui_prop_root__add_object_in_list_ss_editor_node_ui_51 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['add_object_in_list'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['add_object_in_list'] >
	>
	type $ss_editor_node_ui_prop_root__id_ss_editor_node_ui_52 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['id'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['id'] >
	>
	type $ss_editor_node_ui_prop_sub__Block_ss_editor_node_ui_53 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['Block'] >
	>
	type $ss_editor_node_ui_prop_sub__children_ss_editor_node_ui_54 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['children'] >
	>
	type $ss_editor_node_ui_prop_sub__data_node_ss_editor_node_ui_55 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['data_node'] >
	>
	type $ss_editor_node_ui_prop_sub__props_of_ss_editor_node_ui_56 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['props_of'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['props_of'] >
	>
	type $ss_editor_node_ui_prop_sub__data_node_parent_ss_editor_node_ui_57 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node_parent'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['data_node_parent'] >
	>
	type $ss_editor_node_ui_prop_sub__drop_node_ss_editor_node_ui_58 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['drop_node'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['drop_node'] >
	>
	type $ss_editor_node_ui_prop_sub__set_subprop_tree_ss_editor_node_ui_59 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['set_subprop_tree'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['set_subprop_tree'] >
	>
	type $ss_editor_node_ui_prop_sub__add_object_in_list_ss_editor_node_ui_60 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['add_object_in_list'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['add_object_in_list'] >
	>
	type $ss_editor_node_ui_prop_sub__id_ss_editor_node_ui_61 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['id'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['id'] >
	>
	type $ss_editor_node_ui_class__Block_ss_editor_node_ui_62 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_class['Block'] >
	>
	type $ss_editor_node_ui_class__children_ss_editor_node_ui_63 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_class['children'] >
	>
	type $ss_editor_node_ui_class__data_node_ss_editor_node_ui_64 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_class['data_node'] >
	>
	type $ss_editor_node_ui_class__class_list_ss_editor_node_ui_65 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['class_list'] >
		,
		ReturnType< $ss_editor_node_ui_class['class_list'] >
	>
	type $ss_editor_node_ui_class_base__Block_ss_editor_node_ui_66 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_class_base['Block'] >
	>
	type $ss_editor_node_ui_class_base__children_ss_editor_node_ui_67 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_class_base['children'] >
	>
	type $ss_editor_node_ui_class_base__data_node_ss_editor_node_ui_68 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_class_base['data_node'] >
	>
	type $ss_editor_node_ui_class_base__class_list_ss_editor_node_ui_69 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['class_list'] >
		,
		ReturnType< $ss_editor_node_ui_class_base['class_list'] >
	>
	type $ss_editor_node_ui_component__Block_ss_editor_node_ui_70 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_component['Block'] >
	>
	type $ss_editor_node_ui_component__children_ss_editor_node_ui_71 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_component['children'] >
	>
	type $ss_editor_node_ui_component__library_tree_ss_editor_node_ui_72 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['library_tree'] >
		,
		ReturnType< $ss_editor_node_ui_component['library_tree'] >
	>
	type $ss_editor_node_ui_component__data_node_ss_editor_node_ui_73 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_component['data_node'] >
	>
	type $ss_editor_node_ui_component__Block_fabric_ss_editor_node_ui_74 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block_fabric'] >
		,
		ReturnType< $ss_editor_node_ui_component['Block_fabric'] >
	>
	type $ss_editor_node_ui_component__drop_node_ss_editor_node_ui_75 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['drop_node'] >
		,
		ReturnType< $ss_editor_node_ui_component['drop_node'] >
	>
	type $ss_editor_node_ui_component__drop_parent_node_ss_editor_node_ui_76 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['drop_parent_node'] >
		,
		ReturnType< $ss_editor_node_ui_component['drop_parent_node'] >
	>
	type $ss_editor_node_ui_component__add_sibling_object_above_ss_editor_node_ui_77 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['add_sibling_object_above'] >
		,
		ReturnType< $ss_editor_node_ui_component['add_sibling_object_above'] >
	>
	type $ss_editor_node_ui_component__add_rootprop_ss_editor_node_ui_78 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['add_rootprop'] >
		,
		ReturnType< $ss_editor_node_ui_component['add_rootprop'] >
	>
	type $ss_editor_node_ui_component__id_ss_editor_node_ui_79 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['id'] >
		,
		ReturnType< $ss_editor_node_ui_component['id'] >
	>
	type $ss_editor_node_ui_object__Block_ss_editor_node_ui_80 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_object['Block'] >
	>
	type $ss_editor_node_ui_object__children_ss_editor_node_ui_81 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_object['children'] >
	>
	type $ss_editor_node_ui_object__library_tree_ss_editor_node_ui_82 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['library_tree'] >
		,
		ReturnType< $ss_editor_node_ui_object['library_tree'] >
	>
	type $ss_editor_node_ui_object__data_node_ss_editor_node_ui_83 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_object['data_node'] >
	>
	type $ss_editor_node_ui_object__Block_fabric_ss_editor_node_ui_84 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block_fabric'] >
		,
		ReturnType< $ss_editor_node_ui_object['Block_fabric'] >
	>
	type $ss_editor_node_ui_object__drop_node_ss_editor_node_ui_85 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['drop_node'] >
		,
		ReturnType< $ss_editor_node_ui_object['drop_node'] >
	>
	type $ss_editor_node_ui_object__drop_parent_node_ss_editor_node_ui_86 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['drop_parent_node'] >
		,
		ReturnType< $ss_editor_node_ui_object['drop_parent_node'] >
	>
	type $ss_editor_node_ui_object__add_sibling_object_above_ss_editor_node_ui_87 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['add_sibling_object_above'] >
		,
		ReturnType< $ss_editor_node_ui_object['add_sibling_object_above'] >
	>
	type $ss_editor_node_ui_object__replace_ss_editor_node_ui_88 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['replace_prop'] >
		,
		ReturnType< $ss_editor_node_ui_object['replace'] >
	>
	type $ss_editor_node_ui_object__props_by_type_ss_editor_node_ui_89 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['props_by_type'] >
		,
		ReturnType< $ss_editor_node_ui_object['props_by_type'] >
	>
	type $ss_editor_node_ui_object__add_subprop_ss_editor_node_ui_90 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['add_subprop'] >
		,
		ReturnType< $ss_editor_node_ui_object['add_subprop'] >
	>
	type $ss_editor_node_ui_object__id_ss_editor_node_ui_91 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['id'] >
		,
		ReturnType< $ss_editor_node_ui_object['id'] >
	>
	export class $ss_editor_node_ui extends $mol_ghost {
		type( ): ReturnType< ReturnType< $ss_editor_node_ui['data_node'] >['type'] >
		Locale( ): $ss_editor_node_ui_locale
		Root( ): $ss_editor_node_ui_root
		Value( ): $ss_editor_node_ui_value
		String( ): $ss_editor_node_ui_string
		Bool( ): $ss_editor_node_ui_bool
		Null( ): $ss_editor_node_ui_null
		Left( ): $ss_editor_node_ui_left
		Right( ): $ss_editor_node_ui_right
		Bi( ): $ss_editor_node_ui_bi
		Default( ): $ss_editor_node_ui_default
		List_body( ): ReturnType< ReturnType< $ss_editor_node_ui['List'] >['Self_body'] >
		List_children( ): ReturnType< ReturnType< $ss_editor_node_ui['List'] >['Children'] >
		List( ): $ss_editor_node_ui_list
		Dict_body( ): ReturnType< ReturnType< $ss_editor_node_ui['Dict'] >['Self_body'] >
		Dict_children( ): ReturnType< ReturnType< $ss_editor_node_ui['Dict'] >['Children'] >
		Dict( ): $ss_editor_node_ui_dict
		Key( ): $ss_editor_node_ui_key
		replace_prop( id: any, next?: any ): any
		add_object_in_list( id: any, next?: any ): any
		unbind_prop( id: any): any
		Prop( ): $ss_editor_node_ui_prop
		props_of( id: any): readonly($mol_tree2)[]
		set_subprop_tree( id: any, next?: any ): any
		Prop_root( ): $ss_editor_node_ui_prop_root
		Subprop( ): $ss_editor_node_ui_prop_sub
		Class_body( ): ReturnType< ReturnType< $ss_editor_node_ui['Class'] >['Self_body'] >
		class_list( ): readonly(string)[]
		valid_class( ): ReturnType< ReturnType< $ss_editor_node_ui['Class'] >['valid'] >
		Class( ): $ss_editor_node_ui_class
		Class_base_body( ): ReturnType< ReturnType< $ss_editor_node_ui['Class_base'] >['Self_body'] >
		Class_base( ): $ss_editor_node_ui_class_base
		drop_node( id: any): any
		drop_parent_node( id: any): any
		add_sibling_object_above( id: any): any
		add_rootprop( id: any): any
		Component( ): $ss_editor_node_ui_component
		props_by_type( id: any): readonly($ss_editor_node_data)[]
		add_subprop( id: any): any
		Object( ): $ss_editor_node_ui_object
		id( ): string
		data_id( ): string
		data_node( ): $ss_editor_node_data
		data_node_parent( ): $ss_editor_node_data
		library_tree( ): $mol_tree2_empty
		Block( ): $ss_blocks_block
		Block_fabric( id: any): $ss_blocks_block
		children( ): readonly($ss_editor_node_ui)[]
		Sub( ): ReturnType< $ss_editor_node_ui['Root'] >
		type_force( next?: string ): string
		variants( ): Record<string, any>
	}
	
	export class $ss_editor_node_ui_root extends $ss_editor_node_ui_default {
		sub( ): readonly(any)[]
	}
	
	export class $ss_editor_node_ui_locale extends $ss_editor_node_ui_default {
		sub( ): readonly(any)[]
	}
	
	type $ss_editor_noedit__sub_ss_editor_node_ui_dict_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_list__rows_ss_editor_node_ui_dict_2 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_dict['children'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $ss_editor_node_ui_dict extends $ss_editor_node_ui_default {
		Self_body( ): $ss_editor_noedit
		children( ): readonly($ss_editor_node_ui)[]
		sub( ): readonly(any)[]
		Children( ): $mol_list
	}
	
	export class $ss_editor_node_ui_value extends $ss_editor_node_ui_default {
	}
	
	type $mol_view__sub_ss_editor_node_ui_key_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_key_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_ss_editor_node_ui_key_3 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_key['children'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $ss_editor_node_ui_key extends $ss_editor_node_ui_default {
		Block( ): $ss_blocks_block
		Self_body( ): $mol_view
		Delimiter( ): $mol_view
		children( ): readonly($ss_editor_node_ui)[]
		Children( ): $mol_list
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_ss_editor_node_ui_null_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_null_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	export class $ss_editor_node_ui_null extends $ss_editor_node_ui_value {
		Block( ): $ss_blocks_block
		Self_body( ): $mol_view
		Noeditable( ): $ss_editor_noedit
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_ss_editor_node_ui_bool_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_bool_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	export class $ss_editor_node_ui_bool extends $ss_editor_node_ui_value {
		Block( ): $ss_blocks_block
		Self_body( ): $mol_view
		Noeditable( ): $ss_editor_noedit
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_ss_editor_node_ui_string_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_string_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	export class $ss_editor_node_ui_string extends $ss_editor_node_ui_value {
		Block( ): $ss_blocks_block
		Self_body( ): $mol_view
		Noeditable( ): $ss_editor_noedit
		sub( ): readonly(any)[]
	}
	
	type __ss_editor_node_ui_left_1 = $mol_type_enforce<
		Parameters< $ss_editor_node_ui_left['value'] >[0]
		,
		Parameters< ReturnType< $ss_editor_node_ui_left['data_node'] >['value'] >[0]
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_left_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	export class $ss_editor_node_ui_left extends $ss_editor_node_ui_default {
		value( next?: ReturnType< ReturnType< $ss_editor_node_ui_left['data_node'] >['value'] > ): ReturnType< ReturnType< $ss_editor_node_ui_left['data_node'] >['value'] >
		Self_body( ): $ss_editor_noedit
		data_node( ): $ss_editor_node_data
		sub( ): readonly(any)[]
	}
	
	type $ss_editor_noedit__sub_ss_editor_node_ui_left_slot_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_left_slot_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $ss_editor_node_ui_left_slot extends $ss_editor_node_ui_left {
		Self_body( ): $ss_editor_noedit
		Label( ): $mol_view
		sub( ): readonly(any)[]
	}
	
	type __ss_editor_node_ui_right_1 = $mol_type_enforce<
		Parameters< $ss_editor_node_ui_right['value'] >[0]
		,
		Parameters< ReturnType< $ss_editor_node_ui_right['data_node'] >['value'] >[0]
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_right_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	export class $ss_editor_node_ui_right extends $ss_editor_node_ui_default {
		value( next?: ReturnType< ReturnType< $ss_editor_node_ui_right['data_node'] >['value'] > ): ReturnType< ReturnType< $ss_editor_node_ui_right['data_node'] >['value'] >
		Self_body( ): $ss_editor_noedit
		data_node( ): $ss_editor_node_data
		sub( ): readonly(any)[]
	}
	
	type __ss_editor_node_ui_bi_1 = $mol_type_enforce<
		Parameters< $ss_editor_node_ui_bi['value'] >[0]
		,
		Parameters< ReturnType< $ss_editor_node_ui_bi['data_node'] >['value'] >[0]
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_bi_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	export class $ss_editor_node_ui_bi extends $ss_editor_node_ui_default {
		value( next?: ReturnType< ReturnType< $ss_editor_node_ui_bi['data_node'] >['value'] > ): ReturnType< ReturnType< $ss_editor_node_ui_bi['data_node'] >['value'] >
		Self_body( ): $ss_editor_noedit
		data_node( ): $ss_editor_node_data
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=ui.view.tree.d.ts.map
declare namespace $.$$ {
    type $ss_editor_node_ui_id = [$ss_editor_node_ui_id | null, $ss_editor_node_data_id];
    function $ss_editor_node_ui_id_build(data_id: string, parent_ui_id?: $ss_editor_node_ui_id | null): $ss_editor_node_ui_id;
    class $ss_editor_node_ui extends $.$ss_editor_node_ui {
        Sub(): any;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_view__dom_name_mol_page_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_2 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_page_3 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_page_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name_mol_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_6 = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type __mol_page_7 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub_mol_page_8 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub_mol_page_9 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name_mol_page_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_11 = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		attr( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_row extends $mol_view {
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_view__minimal_height_mol_labeler_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_2 = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_labeler_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_4 = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_form_field_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_form_field extends $mol_labeler {
		name( ): string
		bid( ): string
		Bid( ): $mol_view
		control( ): any
		bids( ): readonly(string)[]
		label( ): readonly(any)[]
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=field.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_form_field extends $.$mol_form_field {
        bid(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_list__sub_mol_form_1 = $mol_type_enforce<
		ReturnType< $mol_form['body'] >
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_row__sub_mol_form_2 = $mol_type_enforce<
		ReturnType< $mol_form['foot'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_form extends $mol_list {
		keydown( next?: any ): any
		form_fields( ): readonly($mol_form_field)[]
		body( ): ReturnType< $mol_form['form_fields'] >
		Body( ): $mol_list
		buttons( ): readonly($mol_view)[]
		foot( ): ReturnType< $mol_form['buttons'] >
		Foot( ): $mol_row
		submit_allowed( ): boolean
		submit_blocked( ): boolean
		event( ): ({ 
			keydown( next?: ReturnType< $mol_form['keydown'] > ): ReturnType< $mol_form['keydown'] >,
		})  & ReturnType< $mol_list['event'] >
		submit( next?: any ): any
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        form_fields(): readonly $mol_form_field[];
        submit_allowed(): boolean;
        submit_blocked(): boolean;
        keydown(next: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
		theme( ): string
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $ss_editor_noedit__sub_ss_editor_node_ui_list_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	export class $ss_editor_node_ui_list extends $ss_editor_node_ui_default {
		Self_body( ): $ss_editor_noedit
		Block_fabric( id: any): $ss_blocks_block
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_key extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=key.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_key_variant extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=variant.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_cached extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=cached.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_tick extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=tick.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_box extends $mol_check {
		Icon( ): $mol_icon_tick
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=can.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_plus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=plus.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_plus_box extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {
    function $mol_range2<Item = number>(item?: Item[] | ((index: number) => Item), size?: () => number): Item[];
    class $mol_range2_array<Item> extends Array<Item> {
        concat(...tail: Item[][]): Item[];
        filter<Context>(check: (val: Item, index: number, list: Item[]) => boolean, context?: Context): Item[];
        forEach<Context>(proceed: (this: Context, val: Item, index: number, list: Item[]) => void, context?: Context): void;
        map<Item_out, Context>(proceed: (this: Context, val: Item, index: number, list: Item[]) => Item_out, context?: Context): Item_out[];
        reduce<Result>(merge: (result: Result, val: Item, index: number, list: Item[]) => Result, result?: Result): Result | undefined;
        toReversed(): Item[];
        slice(from?: number, to?: number): Item[];
        some<Context>(check: (this: Context, val: Item, index: number, list: Item[]) => boolean, context?: Context): boolean;
        every<Narrow extends Item, Context = null>(check: (value: Item, index: number, array: Item[]) => value is Narrow, context?: Context): this is Narrow[];
        reverse(): never;
        sort(): never;
        [Symbol.toPrimitive](): string;
    }
}

declare namespace $ {

	type __ss_editor_node_ui_prop_1 = $mol_type_enforce<
		Parameters< $ss_editor_node_ui_prop['binded'] >[0]
		,
		Parameters< ReturnType< $ss_editor_node_ui_prop['data_node'] >['binded'] >[0]
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_prop_2 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['icons'] >
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_check_box__title_ss_editor_node_ui_prop_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_ss_editor_node_ui_prop_4 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['changeable'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title_ss_editor_node_ui_prop_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_ss_editor_node_ui_prop_6 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['multiple'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_button_minor__click_ss_editor_node_ui_prop_7 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_ss_editor_node_ui_prop_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_ss_editor_node_ui_prop_9 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['add_first'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_ss_editor_node_ui_prop_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__title_ss_editor_node_ui_prop_11 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['pos_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_ss_editor_node_ui_prop_12 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['add_in_pos'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_labeler__title_ss_editor_node_ui_prop_13 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_ss_editor_node_ui_prop_14 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['new_item_positions'] >
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $ss_editor_node_data__changeable_ss_editor_node_ui_prop_15 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['changeable'] >
		,
		ReturnType< $ss_editor_node_data['changeable'] >
	>
	type $ss_editor_node_data__multiple_ss_editor_node_ui_prop_16 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['multiple'] >
		,
		ReturnType< $ss_editor_node_data['multiple'] >
	>
	type $mol_view__sub_ss_editor_node_ui_prop_17 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['self_sub'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_pop_over__Anchor_ss_editor_node_ui_prop_18 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['Add_list_item'] >
		,
		ReturnType< $mol_pop_over['Anchor'] >
	>
	type $mol_pop_over__align_ss_editor_node_ui_prop_19 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pop_over['align'] >
	>
	type $mol_pop_over__bubble_content_ss_editor_node_ui_prop_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pop_over['bubble_content'] >
	>
	export class $ss_editor_node_ui_prop extends $ss_editor_node_ui_pop {
		type( ): ReturnType< ReturnType< $ss_editor_node_ui_prop['data_node'] >['type'] >
		binded( next?: ReturnType< ReturnType< $ss_editor_node_ui_prop['data_node'] >['binded'] > ): ReturnType< ReturnType< $ss_editor_node_ui_prop['data_node'] >['binded'] >
		Icon_multiple( ): $mol_icon_key_variant
		Icon_changeable( ): $mol_icon_cached
		icons( ): readonly(any)[]
		Icons( ): $ss_editor_noedit
		self_sub( ): readonly(any)[]
		List_body( ): ReturnType< ReturnType< $ss_editor_node_ui_prop['tail_ui_node'] >['List_body'] >
		List_children( ): ReturnType< ReturnType< $ss_editor_node_ui_prop['tail_ui_node'] >['List_children'] >
		Dict_body( ): ReturnType< ReturnType< $ss_editor_node_ui_prop['tail_ui_node'] >['Dict_body'] >
		Dict_children( ): ReturnType< ReturnType< $ss_editor_node_ui_prop['tail_ui_node'] >['Dict_children'] >
		changeable( next?: boolean ): boolean
		Changeable( ): $mol_check_box
		multiple( next?: boolean ): boolean
		Multiple( ): $mol_check_box
		drop( next?: any ): any
		Drop_icon( ): $mol_icon_trash_can_outline
		Drop( ): $mol_button_minor
		add_first( next?: any ): any
		Add_list_item_icon( ): $mol_icon_plus_box
		Add_list_item( ): $mol_button_minor
		pos_title( id: any): string
		add_in_pos( id: any, next?: any ): any
		New_item_pos( id: any): $mol_button_minor
		new_item_positions( ): readonly(any)[]
		Position_label( ): $mol_labeler
		data_node( ): $ss_editor_node_data
		drop_node( id: any): any
		unbind_prop( id: any): any
		autocomplete( ): boolean
		replace( id: any, next?: any ): any
		add_object_in_list( id: any, next?: any ): any
		position( ): string
		id( ): string
		sub( ): readonly(any)[]
		Anchor( ): $mol_view
		tail_ui_node_type( ): string
		tail_ui_node_nullable( ): any
		tail_ui_node( ): $ss_editor_node_ui
		bubble_content( ): readonly(any)[]
		Add_list_item_popover( ): $mol_pop_over
	}
	
}

//# sourceMappingURL=prop.view.tree.d.ts.map
declare namespace $.$$ {
    class $ss_editor_node_ui_prop extends $.$ss_editor_node_ui_prop {
        changeable(next?: boolean): boolean;
        multiple(next?: boolean): boolean;
        icons(): ($mol_icon_key_variant | $mol_icon_cached)[];
        tail_ui_node_type(): string;
        tail_ui_node_nullable(): $.$ss_editor_node_ui | null;
        tail_ui_node(): $.$ss_editor_node_ui;
        self_sub(): ($.$ss_blocks_block | $.$mol_list | $ss_editor_noedit)[];
        sub(): ($.$mol_list | $.$mol_pop_over)[];
        bubble_content(): any[];
        new_item_positions(): $mol_button_minor[];
        pos_title(i: number): string;
        drop(): void;
        add_first(): void;
        add_in_pos(pos: string): void;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_check__checked_mol_check_list_1 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label_mol_check_list_2 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled_mol_check_list_3 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint_mol_check_list_4 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height_mol_check_list_5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	export class $mol_check_list extends $mol_view {
		option_checked( id: any, next?: boolean ): boolean
		option_title( id: any): string
		option_label( id: any): readonly(any)[]
		enabled( ): boolean
		option_enabled( id: any): ReturnType< $mol_check_list['enabled'] >
		option_hint( id: any): string
		items( ): readonly($mol_check)[]
		dictionary( ): Record<string, any>
		Option( id: any): $mol_check
		options( ): Record<string, any>
		keys( ): readonly(string)[]
		sub( ): ReturnType< $mol_check_list['items'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_list extends $.$mol_check_list {
        options(): {
            [key: string]: string;
        };
        dictionary(next?: Record<string, boolean>): Record<string, boolean>;
        option_checked(id: string, next?: boolean | null): boolean;
        keys(): readonly string[];
        items(): $.$mol_check[];
        option_title(key: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {

	export class $mol_switch extends $mol_check_list {
		value( next?: string ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: string): string;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_view_tree2_error extends Error {
        readonly spans: readonly $mol_span[];
        constructor(message: string, spans: readonly $mol_span[]);
        toJSON(): {
            message: string;
            spans: readonly $mol_span[];
        };
    }
    class $mol_view_tree2_error_suggestions {
        readonly suggestions: readonly string[];
        constructor(suggestions: readonly string[]);
        toString(): string;
        toJSON(): readonly string[];
    }
    function $mol_view_tree2_error_str(strings: readonly string[], ...parts: readonly ($mol_span | readonly $mol_span[] | string | number | $mol_view_tree2_error_suggestions)[]): $mol_view_tree2_error;
}

declare namespace $ {
    function $mol_view_tree2_child(this: $, tree: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_classes(defs: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_normalize(this: $, defs: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    let $mol_view_tree2_prop_signature: $mol_regexp<{
        readonly name: string;
        readonly key: string;
        readonly next: string;
    }>;
}

declare namespace $ {
    function $mol_view_tree2_prop_parts(this: $, prop: $mol_tree2): {
        name: string;
        key: string;
        next: string;
    };
}

declare namespace $ {
    function $mol_view_tree2_prop_quote(name: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_class_match(klass?: $mol_tree2): boolean;
}

declare namespace $ {
    function $mol_view_tree2_class_super(this: $, klass: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_class_props(this: $, klass: $mol_tree2): $mol_tree2[];
}

declare namespace $ {

	type $mol_check_box__title_ss_editor_node_ui_prop_sub_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_ss_editor_node_ui_prop_sub_2 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop_sub['bind'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_switch__value_ss_editor_node_ui_prop_sub_3 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop_sub['bind_value'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_ss_editor_node_ui_prop_sub_4 = $mol_type_enforce<
		({ 
			'left': string,
			'bi': string,
			'right': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_pop_over__Anchor_ss_editor_node_ui_prop_sub_5 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop_sub['Bind'] >
		,
		ReturnType< $mol_pop_over['Anchor'] >
	>
	type $mol_pop_over__align_ss_editor_node_ui_prop_sub_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pop_over['align'] >
	>
	type $mol_pop_over__bubble_content_ss_editor_node_ui_prop_sub_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pop_over['bubble_content'] >
	>
	export class $ss_editor_node_ui_prop_sub extends $ss_editor_node_ui_prop {
		valid( ): boolean
		bind( next?: boolean ): boolean
		Bind( ): $mol_check_box
		bind_value( next?: string ): string
		Switch_bind( ): $mol_switch
		data_node_parent( ): $ss_editor_node_data
		props_of( id: any): readonly($mol_tree2)[]
		set_subprop_tree( id: any, next?: any ): any
		position( ): string
		bubble_content( ): readonly(any)[]
		autocomplete_footer( ): readonly(any)[]
		attr( ): ({ 
			'valid': ReturnType< $ss_editor_node_ui_prop_sub['valid'] >,
		})  & ReturnType< $ss_editor_node_ui_prop['attr'] >
		Bind_popover( ): $mol_pop_over
	}
	
}

//# sourceMappingURL=sub.view.tree.d.ts.map
declare namespace $.$$ {
    class $ss_editor_node_ui_prop_sub extends $.$ss_editor_node_ui_prop_sub {
        bind(next?: boolean): boolean;
        bind_value(next?: string): string;
        bubble_content(): ($.$mol_pop_over | $mol_button_minor)[];
        valid(): boolean;
        autocomplete_showed(): boolean;
        select_value(next?: any): string;
        props_of_class(): readonly $mol_tree2[];
        select_dict(): Record<string, string>;
        event_select(selected: string): void;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $ss_editor_node_ui_prop_root extends $ss_editor_node_ui_prop_sub {
		position( ): string
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $.$$ {
    class $ss_editor_node_ui_prop_root extends $.$ss_editor_node_ui_prop_root {
        bubble_content(): ($.$mol_pop_over | $mol_button_minor)[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_view__sub_ss_editor_node_ui_class_base_1 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_class_base['root_props'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $ss_editor_node_ui_class_base extends $ss_editor_node_ui_class {
		root_props( ): readonly($ss_editor_node_ui_prop_root)[]
		Props( ): $mol_view
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=base.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_playlist_plus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=plus.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_ss_editor_node_ui_object_1 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['class_children'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_object_2 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['icons'] >
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_object_3 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['object_label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_object_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_ss_editor_node_ui_object_5 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['add_new_subprop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_ss_editor_node_ui_object_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_check_box__title_ss_editor_node_ui_object_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_ss_editor_node_ui_object_8 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['multiple'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_button_minor__title_ss_editor_node_ui_object_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_ss_editor_node_ui_object_10 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_ss_editor_node_ui_object_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_ss_editor_node_ui_object_12 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_ss_editor_node_ui_object_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $ss_editor_node_data__multiple_ss_editor_node_ui_object_14 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['multiple'] >
		,
		ReturnType< $ss_editor_node_data['multiple'] >
	>
	type $mol_view__sub_ss_editor_node_ui_object_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $ss_editor_node_ui_object extends $ss_editor_node_ui_pop {
		Class_body( ): ReturnType< ReturnType< $ss_editor_node_ui_object['class_ui_node'] >['Class_body'] >
		class_children( ): ReturnType< ReturnType< $ss_editor_node_ui_object['class_ui_node'] >['children'] >
		Props( ): $mol_view
		Icon_multiple( ): $mol_icon_key_variant
		icons( ): readonly(any)[]
		Icons( ): $ss_editor_noedit
		object_label( ): readonly(any)[]
		Object_label( ): $mol_view
		Class_label( ): $mol_view
		add_new_subprop( next?: any ): any
		Props_select_icon( ): $mol_icon_playlist_plus
		Props_select( ): $mol_button_minor
		multiple( next?: boolean ): boolean
		Multiple( ): $mol_check_box
		clear( next?: any ): any
		Replace_icon( ): $mol_icon_find_replace
		Replace( ): $mol_button_minor
		drop( next?: any ): any
		Drop_icon( ): $mol_icon_trash_can_outline
		Drop( ): $mol_button_minor
		tree( ): $mol_tree2_empty
		library_tree( ): $mol_tree2_empty
		Block_fabric( id: any): $ss_blocks_block
		drop_node( id: any): any
		drop_parent_node( id: any): any
		replace( id: any, next?: any ): any
		add_subprop( id: any): any
		add_sibling_object_above( id: any): any
		autocomplete( ): boolean
		props_by_type( id: any): readonly($ss_editor_node_data)[]
		data_node( ): $ss_editor_node_data
		class_ui_node( ): $ss_editor_node_ui
		sub( ): readonly(any)[]
		Anchor( ): $mol_view
		bubble_content( ): readonly(any)[]
		autocomplete_footer( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=object.view.tree.d.ts.map
declare namespace $.$$ {
    class $ss_editor_node_ui_object extends $.$ss_editor_node_ui_object {
        multiple(next?: boolean): boolean;
        icons(): $mol_icon_key_variant[];
        class_ui_node(): $.$ss_editor_node_ui;
        object_label(): ($.$ss_blocks_block | $ss_editor_noedit)[];
        type_tree(): $mol_tree2;
        clear(): void;
        select_value(next?: any): string;
        select_dict(): Record<string, string>;
        event_select(selected_data_id: string): void;
        class_tree(): $mol_tree2;
        class_tree_string(): string;
        drop(): void;
        add_sibling_above(): void;
        add_new_subprop(): void;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_button_minor__click_ss_editor_node_ui_component_1 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_component['add_new_rootprop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_ss_editor_node_ui_component_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_component_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_component_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_component_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $ss_editor_node_ui_component extends $ss_editor_node_ui_object {
		add_new_rootprop( next?: any ): any
		Props_select_icon( ): $mol_icon_playlist_plus
		Props_select( ): $mol_button_minor
		Dollar( ): $ss_editor_noedit
		Component_label( ): $mol_view
		add_rootprop( next?: any ): any
		bubble_content( ): readonly(any)[]
		Anchor( ): $mol_view
	}
	
}

//# sourceMappingURL=component.view.tree.d.ts.map
declare namespace $.$$ {
    class $ss_editor_node_ui_component extends $.$ss_editor_node_ui_component {
        Class_body(): $.$mol_pop_over;
        class_children(): $.$ss_editor_node_ui[];
        add_new_rootprop(): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type __ss_editor_1 = $mol_type_enforce<
		Parameters< $ss_editor['Block'] >[0]
		,
		Parameters< ReturnType< $ss_editor['Contenteditable'] >['Block'] >[0]
	>
	type $ss_blocks_contenteditable__Body_ss_editor_2 = $mol_type_enforce<
		ReturnType< $ss_editor['Ui_root_node'] >
		,
		ReturnType< $ss_blocks_contenteditable['Body'] >
	>
	type $ss_editor_node_ui__id_ss_editor_3 = $mol_type_enforce<
		ReturnType< $ss_editor['id'] >
		,
		ReturnType< $ss_editor_node_ui['id'] >
	>
	type $ss_editor_node_ui__data_node_ss_editor_4 = $mol_type_enforce<
		ReturnType< $ss_editor['data_node_by_ui_id'] >
		,
		ReturnType< $ss_editor_node_ui['data_node'] >
	>
	type $ss_editor_node_ui__data_node_parent_ss_editor_5 = $mol_type_enforce<
		ReturnType< $ss_editor['data_node_parent_by_ui_id'] >
		,
		ReturnType< $ss_editor_node_ui['data_node_parent'] >
	>
	type $ss_editor_node_ui__children_ss_editor_6 = $mol_type_enforce<
		ReturnType< $ss_editor['ui_node_children'] >
		,
		ReturnType< $ss_editor_node_ui['children'] >
	>
	type $ss_editor_node_ui__library_tree_ss_editor_7 = $mol_type_enforce<
		ReturnType< $ss_editor['library_tree'] >
		,
		ReturnType< $ss_editor_node_ui['library_tree'] >
	>
	type $ss_editor_node_ui__Block_ss_editor_8 = $mol_type_enforce<
		ReturnType< $ss_editor['Ui_node_block'] >
		,
		ReturnType< $ss_editor_node_ui['Block'] >
	>
	type $ss_editor_node_ui__Block_fabric_ss_editor_9 = $mol_type_enforce<
		ReturnType< $ss_editor['Block_fabric'] >
		,
		ReturnType< $ss_editor_node_ui['Block_fabric'] >
	>
	type $ss_editor_node_ui__drop_node_ss_editor_10 = $mol_type_enforce<
		ReturnType< $ss_editor['drop_node'] >
		,
		ReturnType< $ss_editor_node_ui['drop_node'] >
	>
	type $ss_editor_node_ui__unbind_prop_ss_editor_11 = $mol_type_enforce<
		ReturnType< $ss_editor['unbind_prop'] >
		,
		ReturnType< $ss_editor_node_ui['unbind_prop'] >
	>
	type $ss_editor_node_ui__drop_parent_node_ss_editor_12 = $mol_type_enforce<
		ReturnType< $ss_editor['drop_parent_node'] >
		,
		ReturnType< $ss_editor_node_ui['drop_parent_node'] >
	>
	type $ss_editor_node_ui__add_sibling_object_above_ss_editor_13 = $mol_type_enforce<
		ReturnType< $ss_editor['add_sibling_object_above'] >
		,
		ReturnType< $ss_editor_node_ui['add_sibling_object_above'] >
	>
	type $ss_editor_node_ui__props_by_type_ss_editor_14 = $mol_type_enforce<
		ReturnType< $ss_editor['props_by_type'] >
		,
		ReturnType< $ss_editor_node_ui['props_by_type'] >
	>
	type $ss_editor_node_ui__replace_prop_ss_editor_15 = $mol_type_enforce<
		ReturnType< $ss_editor['replace_prop'] >
		,
		ReturnType< $ss_editor_node_ui['replace_prop'] >
	>
	type $ss_editor_node_ui__set_subprop_tree_ss_editor_16 = $mol_type_enforce<
		ReturnType< $ss_editor['set_subprop_tree'] >
		,
		ReturnType< $ss_editor_node_ui['set_subprop_tree'] >
	>
	type $ss_editor_node_ui__add_subprop_ss_editor_17 = $mol_type_enforce<
		ReturnType< $ss_editor['add_subprop'] >
		,
		ReturnType< $ss_editor_node_ui['add_subprop'] >
	>
	type $ss_editor_node_ui__add_rootprop_ss_editor_18 = $mol_type_enforce<
		ReturnType< $ss_editor['add_rootprop'] >
		,
		ReturnType< $ss_editor_node_ui['add_rootprop'] >
	>
	type $ss_editor_node_ui__add_object_in_list_ss_editor_19 = $mol_type_enforce<
		ReturnType< $ss_editor['add_object_in_list'] >
		,
		ReturnType< $ss_editor_node_ui['add_object_in_list'] >
	>
	type $ss_editor_node_ui__class_list_ss_editor_20 = $mol_type_enforce<
		ReturnType< $ss_editor['class_list'] >
		,
		ReturnType< $ss_editor_node_ui['class_list'] >
	>
	type $ss_editor_node_ui__props_of_ss_editor_21 = $mol_type_enforce<
		ReturnType< $ss_editor['props_of'] >
		,
		ReturnType< $ss_editor_node_ui['props_of'] >
	>
	type $ss_editor_node_data__id_ss_editor_22 = $mol_type_enforce<
		ReturnType< $ss_editor['id'] >
		,
		ReturnType< $ss_editor_node_data['id'] >
	>
	type $ss_editor_node_data__tree_ss_editor_23 = $mol_type_enforce<
		ReturnType< $ss_editor['data_tree'] >
		,
		ReturnType< $ss_editor_node_data['tree'] >
	>
	type $ss_editor_node_data__value_ss_editor_24 = $mol_type_enforce<
		ReturnType< $ss_editor['data_value'] >
		,
		ReturnType< $ss_editor_node_data['value'] >
	>
	type $ss_editor_node_data__type_ss_editor_25 = $mol_type_enforce<
		ReturnType< $ss_editor['data_type'] >
		,
		ReturnType< $ss_editor_node_data['type'] >
	>
	type $ss_editor_node_data__child_ids_ss_editor_26 = $mol_type_enforce<
		ReturnType< $ss_editor['data_child_ids'] >
		,
		ReturnType< $ss_editor_node_data['child_ids'] >
	>
	type $ss_editor_node_data__child_nodes_ss_editor_27 = $mol_type_enforce<
		ReturnType< $ss_editor['data_child_nodes'] >
		,
		ReturnType< $ss_editor_node_data['child_nodes'] >
	>
	type $ss_editor_node_data__changeable_ss_editor_28 = $mol_type_enforce<
		ReturnType< $ss_editor['data_changeable'] >
		,
		ReturnType< $ss_editor_node_data['changeable'] >
	>
	type $ss_editor_node_data__multiple_ss_editor_29 = $mol_type_enforce<
		ReturnType< $ss_editor['data_multiple'] >
		,
		ReturnType< $ss_editor_node_data['multiple'] >
	>
	type $ss_editor_node_data__data_tree_ss_editor_30 = $mol_type_enforce<
		ReturnType< $ss_editor['data_tree'] >
		,
		ReturnType< $ss_editor_node_data['data_tree'] >
	>
	type $ss_editor_node_data__data_value_ss_editor_31 = $mol_type_enforce<
		ReturnType< $ss_editor['data_value'] >
		,
		ReturnType< $ss_editor_node_data['data_value'] >
	>
	type $ss_editor_node_data__data_type_ss_editor_32 = $mol_type_enforce<
		ReturnType< $ss_editor['data_type'] >
		,
		ReturnType< $ss_editor_node_data['data_type'] >
	>
	type $ss_editor_node_data__data_child_ids_ss_editor_33 = $mol_type_enforce<
		ReturnType< $ss_editor['data_child_ids'] >
		,
		ReturnType< $ss_editor_node_data['data_child_ids'] >
	>
	type $ss_editor_node_data__data_child_nodes_ss_editor_34 = $mol_type_enforce<
		ReturnType< $ss_editor['data_child_nodes'] >
		,
		ReturnType< $ss_editor_node_data['data_child_nodes'] >
	>
	type $ss_editor_node_data__data_changeable_ss_editor_35 = $mol_type_enforce<
		ReturnType< $ss_editor['data_changeable'] >
		,
		ReturnType< $ss_editor_node_data['data_changeable'] >
	>
	type $ss_editor_node_data__data_multiple_ss_editor_36 = $mol_type_enforce<
		ReturnType< $ss_editor['data_multiple'] >
		,
		ReturnType< $ss_editor_node_data['data_multiple'] >
	>
	export class $ss_editor extends $mol_scroll {
		Ui_root_node( next?: any ): any
		Block( id: any): ReturnType< ReturnType< $ss_editor['Contenteditable'] >['Block'] >
		Contenteditable( ): $ss_blocks_contenteditable
		id( id: any): string
		data_node_by_ui_id( id: any): $ss_editor_node_data
		data_node_parent_by_ui_id( id: any): $ss_editor_node_data
		ui_node_children( id: any, next?: readonly($ss_editor_node_ui)[] ): readonly($ss_editor_node_ui)[]
		library_tree( ): $mol_tree2_empty
		Ui_node_block( id: any): $ss_blocks_block
		Block_fabric( id: any): $ss_blocks_block
		drop_node( id: any): any
		unbind_prop( id: any): any
		drop_parent_node( id: any): any
		add_sibling_object_above( id: any): any
		replace_prop( id: any, next?: any ): any
		set_subprop_tree( id: any, next?: any ): any
		add_subprop( id: any): any
		add_rootprop( id: any): any
		add_object_in_list( id: any, next?: any ): any
		class_list( ): readonly(string)[]
		props_of( id: any): readonly($mol_tree2)[]
		data_tree( id: any, next?: $mol_tree2_empty ): $mol_tree2_empty
		data_value( id: any, next?: string ): string
		data_type( id: any, next?: string ): string
		data_child_ids( id: any, next?: readonly(string)[] ): readonly(string)[]
		data_child_nodes( id: any, next?: readonly($ss_editor_node_data)[] ): readonly($ss_editor_node_data)[]
		data_changeable( id: any, next?: boolean ): boolean
		data_multiple( id: any, next?: boolean ): boolean
		title( ): string
		sub( ): readonly(any)[]
		lib( ): $mol_tree2_empty
		prop_ids( next?: readonly(string)[] ): readonly(string)[]
		props_by_type( id: any): readonly($ss_editor_node_data)[]
		prop_norm_tree( id: any, next?: readonly($mol_tree2)[] ): readonly($mol_tree2)[]
		Ui_node( id: any): $ss_editor_node_ui
		Data_node( id: any): $ss_editor_node_data
		initial_tree_string( ): string
	}
	
}

//# sourceMappingURL=editor.view.tree.d.ts.map
declare namespace $.$$ {
    type Prop_definition = {
        in_class: string;
        tree: $mol_tree2;
    };
    export class $ss_editor extends $.$ss_editor {
        auto(): void;
        add_data(tree: $mol_tree2, id?: string, type?: string): string;
        prop_sign(type: string): {
            name: string;
            changeable: boolean;
            multiple: boolean;
        };
        prop_name(type: string): string;
        prop_ids(next?: any): readonly string[];
        root_props(): $.$ss_editor_node_data[];
        props_by_type(type: string): $ss_editor_node_data[];
        add_prop_data(tree: $mol_tree2, type?: string): string;
        add_prop_sub_data(tree: $mol_tree2, id?: string): string;
        parse_prop_tree(parent_id: string, tree: $mol_tree2, parent_type?: string): string;
        add_prop_from_tree(tree: $mol_tree2): void;
        add_norm_subprop(obj_name: string, subprop_tree: $mol_tree2): void;
        data_id_to_prop_name(): void;
        prop_name_to_data_id(): void;
        init(tree: $mol_tree2): void;
        Ui_node_id_by_pos(pos: number, next: $ss_editor_node_ui | null): $ss_editor_node_ui | null;
        data_id_from_ui_id(ui_id: $ss_editor_node_ui_id): string;
        data_tree_from_ui_id(ui_id: $ss_editor_node_ui_id): $mol_tree2_empty;
        data_child_nodes(data_id: string): $.$ss_editor_node_data[];
        data_node_by_ui_id(ui_id: $ss_editor_node_ui_id): $.$ss_editor_node_data;
        data_node_parent_by_ui_id(ui_id: $ss_editor_node_ui_id): $.$ss_editor_node_data;
        ui_node_type(ui_id: $ss_editor_node_ui_id): string;
        id(id: string): string;
        Ui_node_block(ui_id: $ss_editor_node_ui_id): $.$ss_blocks_block;
        Block_fabric(id: string): $.$ss_blocks_block;
        ui_node_children(ui_id: $ss_editor_node_ui_id, next?: $ss_editor_node_ui[]): $ss_editor_node_ui[];
        drop_node(ui_id: $ss_editor_node_ui_id): void;
        replace_prop(from_prop_ui_id: $ss_editor_node_ui_id, to_prop_data_id: string): void;
        drop_parent_node(ui_id: $ss_editor_node_ui_id): void;
        unbind_prop(ui_id: $ss_editor_node_ui_id): void;
        add_sibling_object_above(ui_id: $ss_editor_node_ui_id): void;
        add_object_in_list(list_ui_id: $ss_editor_node_ui_id, pos: number): void;
        add_subprop(ui_id: $ss_editor_node_ui_id): void;
        add_rootprop(ui_id: $ss_editor_node_ui_id): void;
        set_subprop_tree(subprop_ui_id: $ss_editor_node_ui_id, subprop_tree: $mol_tree2): void;
        click(next?: any): void;
        library_tree(): $mol_tree2;
        library(): $mol_tree2;
        class_list(): string[];
        inherit_chain_trees(cl: string): $mol_tree2[];
        inherit_chain_names(cl: string): string[];
        props_map(base: string): Map<string, Prop_definition[]>;
        props_of(base: string): $mol_tree2[];
    }
    export {};
}

declare namespace $.$$ {
}

export = $;
//# sourceMappingURL=web.d.ts.map
