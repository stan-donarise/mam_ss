"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        get incompleted() {
            return false;
        }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.web.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        return val && typeof val.then === 'function';
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));
//mol/promise/like/like.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        [Symbol.toStringTag];
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result) && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && left.stack === right.stack;
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
//mol/type/tail/tail.ts
;
"use strict";
//mol/type/foot/foot.ts
;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = `${prefix}.${field}`;
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const id = `${prefix}.${task.name}(${$mol_key(key)})`;
            if (dict) {
                const existen = dict.get(id);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(id, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));
//mol/wire/solo/solo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));
//mol/wire/plex/plex.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));
//mol/window/window.web.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//mol/dom/context/context.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        $mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement), 'notify');
        }, true);
    }
})($ || ($ = {}));
//mol/view/selection/selection.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        const current = $mol_wire_auto();
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/solid/solid.ts
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//mol/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));
//mol/dom/render/events/events.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//mol/dom/render/children/children.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//mol/dom/render/fields/fields.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach_force() {
        if (all.length) {
            el.innerHTML += '\n' + all.join('\n\n');
            all = [];
        }
        timer = null;
        return el;
    }
    $.$mol_style_attach_force = $mol_style_attach_force;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick($mol_style_attach_force);
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name, defaultValue) {
            return new $mol_style_func('var', defaultValue ? [name, defaultValue] : name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static linear(...breakpoints) {
            return new $mol_style_func("linear", breakpoints.map((e) => Array.isArray(e)
                ? String(e[0]) +
                    " " +
                    (typeof e[1] === "number" ? e[1] + "%" : e[1].toString())
                : String(e)));
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
        static steps(value, step_position) {
            return new $mol_style_func('steps', [value, step_position]);
        }
        static blur(value) {
            return new $mol_style_func('blur', value ?? "");
        }
        static brightness(value) {
            return new $mol_style_func('brightness', value ?? "");
        }
        static contrast(value) {
            return new $mol_style_func('contrast', value ?? "");
        }
        static drop_shadow(color, x_offset, y_offset, blur_radius) {
            return new $mol_style_func("drop-shadow", blur_radius
                ? [color, x_offset, y_offset, blur_radius]
                : [color, x_offset, y_offset]);
        }
        static grayscale(value) {
            return new $mol_style_func('grayscale', value ?? "");
        }
        static hue_rotate(value) {
            return new $mol_style_func('hue-rotate', value ?? "");
        }
        static invert(value) {
            return new $mol_style_func('invert', value ?? "");
        }
        static opacity(value) {
            return new $mol_style_func('opacity', value ?? "");
        }
        static sepia(value) {
            return new $mol_style_func('sepia', value ?? "");
        }
        static saturate(value) {
            return new $mol_style_func('saturate', value ?? "");
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_prop(prefix, postfixes) {
        const record = postfixes.reduce((record_obj, postfix) => {
            record_obj[postfix] = $mol_style_func.vary(`--${prefix}_${postfix}`);
            return record_obj;
        }, {});
        return record;
    }
    $.$mol_style_prop = $mol_style_prop;
})($ || ($ = {}));
//mol/style/prop/prop.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_theme = $mol_style_prop('mol_theme', [
        'back',
        'hover',
        'card',
        'current',
        'special',
        'text',
        'control',
        'shade',
        'line',
        'focus',
        'field',
        'image',
    ]);
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_satur: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n:where([mol_theme]) {\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 20% ), calc( 55% + 45% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, calc( 40% - 40% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 54% + 46% * var(--mol_theme_luma) ), .25 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .2 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 55% - 10% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 30% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 50% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_gap = $mol_style_prop('mol_gap', [
        'block',
        'text',
        'round',
        'space',
        'blur',
    ]);
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_showed = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = next || $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                $mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if ($mol_promise_like(error))
                    break render;
                if ((error_showed.get(error) ?? this) !== this)
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_showed.set(error, this);
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        theme(next = null) {
            return next;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                mol_theme: this.theme(),
            };
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            try {
                this.dom_final();
            }
            catch (err) {
                $mol_fail_log(err);
            }
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_frame(() => {
                this.dom_node().scrollIntoView({ block: 'start', inline: 'end' });
                this.focused(true);
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "theme", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps( 20, end ) infinite;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.autobind(), { once: true });
})($ || ($ = {}));
//mol/view/view/view.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node(next) {
            const node = next || $mol_owning_get(this).host.dom_node();
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $mol_view {
        scroll_top(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        scroll_left(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//mol/scroll/-view.tree/scroll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            display: 'flex',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            '::before': {
                display: 'none',
            },
            '::after': {
                display: 'none',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $mol_scroll {
        menu_title() {
            return "";
        }
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap(id) {
            const obj = new this.$.$mol_view();
            obj.title = () => "";
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2.prototype, "Gap", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//mol/book2/-view.tree/book2.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => {
                    try {
                        return page?.title();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                    }
                }).reverse().filter(Boolean).join(' | ');
            }
            menu_title() {
                return this.pages()[0]?.title() || this.title();
            }
            sub() {
                const next = [...this.pages(), this.Placeholder()];
                const prev = $mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    n.bring();
                    break;
                }
                return next;
            }
            bring() {
                const pages = this.pages();
                if (pages.length)
                    pages[pages.length - 1].bring();
                else
                    super.bring();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/book2.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x mandatory;\n\tpadding: 0 1px;\n\tscroll-padding: 0 1px;\n\tgap: 1px;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n\n[mol_book2] > *:not(:first-of-type):before,\n[mol_book2] > *:not(:last-of-type)::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 1.5rem;\n\twidth: 1px;\n\theight: 1rem;\n\tbackground: var(--mol_theme_special);\n\tborder-radius: var(--mol_gap_round);\n\topacity: .5;\n}\n[mol_book2] > *:not(:first-of-type):before {\n\tleft: -1px;\n}\n[mol_book2] > *:not(:last-of-type)::after {\n\tright: -1px;\n}\n\n:where([mol_book2]) > * {\n\tbackground-color: var(--mol_theme_card);\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_back); */\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\tbackground: none;\n}\n\n[mol_book2_gap] {\n\tbackground: none;\n\tflex-grow: 1;\n\tscroll-snap-align: none;\n\tmargin-right: -1px;\n\tbox-shadow: none;\n}\n\n[mol_book2_gap]::before,\n[mol_book2_gap]::after {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/book2/-css/book2.view.css.ts
;
"use strict";
var $;
(function ($) {
    function $mol_array_shuffle(array) {
        const res = array.slice();
        for (let index = res.length - 1; index > 0; index--) {
            const index_swap = Math.floor(Math.random() * (index + 1));
            const temp = res[index];
            res[index] = res[index_swap];
            res[index_swap] = temp;
        }
        return res;
    }
    $.$mol_array_shuffle = $mol_array_shuffle;
})($ || ($ = {}));
//mol/array/shuffle/shuffle.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const RAW_RANGES = [[160, 210], [265, 320]];
        const SATURATION = 0.95;
        const LIGHTNESS = 0.3;
        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        const sumHue = RAW_RANGES.reduce((sum, r) => sum + r[1] - r[0], 0);
        const HUE_RANGES = RAW_RANGES.map(r => {
            return {
                from: r[0],
                to: r[1],
                weight: (r[1] - r[0]) / sumHue,
                accWeight: 0,
            };
        });
        HUE_RANGES[0].accWeight = HUE_RANGES[0].weight;
        for (let i = 1; i < HUE_RANGES.length; i++) {
            const r = HUE_RANGES[i];
            r.accWeight = HUE_RANGES[i - 1].accWeight + r.weight;
        }
        function numFromRanges(ranges) {
            const w = Math.random();
            let chosenRange = ranges[0];
            for (const r of ranges) {
                if (w < r.accWeight) {
                    chosenRange = r;
                    break;
                }
            }
            return randomIntFromInterval(chosenRange.from, chosenRange.to);
        }
        class $ss_linkpad_color_generator {
            step = 100;
            start = 50;
            asset = [];
            constructor() {
                this.generateAsset();
            }
            generateAsset() {
                for (const range of RAW_RANGES) {
                    for (let i = range[0] + this.start; i < range[1]; i += this.step) {
                        this.asset.push(i);
                    }
                }
                this.start /= 2;
                this.step /= 2;
                this.asset = $mol_array_shuffle(this.asset);
            }
            get_next_hue() {
                return numFromRanges(HUE_RANGES);
            }
            get_next_hsl() {
                const h = numFromRanges(HUE_RANGES);
                return { h, s: SATURATION, l: LIGHTNESS };
            }
            foresee() {
                return this.asset.at(-1);
            }
        }
        $$.$ss_linkpad_color_generator = $ss_linkpad_color_generator;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/linkpad/color/color.ts
;
"use strict";
var $;
(function ($) {
    class $mol_ghost extends $mol_view {
        Sub() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//mol/ghost/-view.tree/ghost.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node(next) {
                const node = this.Sub().dom_node(next);
                $mol_dom_render_attributes(node, this.attr_static());
                $mol_dom_render_events(node, this.event());
                return node;
            }
            dom_node_actual() {
                this.dom_node();
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $mol_dom_render_attributes(node, attr);
                $mol_dom_render_styles(node, style);
                $mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                try {
                    this.dom_node_actual();
                    this.auto();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                return node;
            }
            title() {
                return this.Sub().title();
            }
            minimal_width() {
                return this.Sub().minimal_width();
            }
            minimal_height() {
                return this.Sub().minimal_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/ghost/ghost.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_store extends $mol_object2 {
        data_default;
        constructor(data_default) {
            super();
            this.data_default = data_default;
        }
        data(next) {
            return next === undefined ? this.data_default : next;
        }
        snapshot(next) {
            return JSON.stringify(this.data(next === undefined ? next : JSON.parse(next)));
        }
        value(key, next) {
            const data = this.data();
            if (next === undefined)
                return data && data[key];
            const Constr = Reflect.getPrototypeOf(data).constructor;
            this.data(Object.assign(new Constr, data, { [key]: next }));
            return next;
        }
        selection(key, next = [0, 0]) {
            return next;
        }
        sub(key, lens) {
            if (!lens)
                lens = new $mol_store();
            const data = lens.data;
            lens.data = next => {
                if (next == undefined) {
                    return this.value(key) ?? lens.data_default;
                }
                return this.value(key, next);
            };
            return lens;
        }
        reset() {
            this.data(this.data_default);
        }
        active() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_store.prototype, "data", null);
    __decorate([
        $mol_mem_key
    ], $mol_store.prototype, "selection", null);
    $.$mol_store = $mol_store;
})($ || ($ = {}));
//mol/store/store.ts
;
"use strict";
var $;
(function ($) {
    class $ss_linkpad_link_data extends $mol_store {
        id(next) {
            return this.value('id', next);
        }
        type_id(next) {
            return this.value('type_id', next);
        }
        from_id() {
            return this.value('from_id');
        }
        to_id() {
            return this.value('to_id');
        }
        val(next) {
            return this.value('val', next);
        }
        hue(next) {
            return this.value('hue', next);
        }
        undef(next) {
            return this.value('undef', next);
        }
        name(next) {
            return this.value('name', next);
        }
    }
    $.$ss_linkpad_link_data = $ss_linkpad_link_data;
})($ || ($ = {}));
//ss/linkpad/link/data/data.view.ts
;
"use strict";
var $;
(function ($) {
    class $ss_blocks_noedit extends $mol_view {
        field() {
            return {
                ...super.field(),
                contentEditable: false
            };
        }
    }
    $.$ss_blocks_noedit = $ss_blocks_noedit;
})($ || ($ = {}));
//ss/blocks/noedit/-view.tree/noedit.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $ss_blocks_block extends $mol_view {
        Placeholder() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                "test"
            ];
            return obj;
        }
        sub() {
            return [
                this.default_value()
            ];
        }
        value_setted(next) {
            if (next !== undefined)
                return next;
            return "default_block_value_changed";
        }
        value_changed(next) {
            if (next !== undefined)
                return next;
            return "default_block_value_changed";
        }
        attr() {
            return {
                ...super.attr(),
                "focus-state": this.focus_state(),
                empty: this.empty()
            };
        }
        style() {
            return {
                ...super.style(),
                "--before": this.before_content(),
                "--after": this.after_content(),
                opacity: this.opacity()
            };
        }
        visible_placeholder() {
            return "";
        }
        placeholder() {
            return "";
        }
        on_ctrl_x(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        keydown_enter(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        before_any_input(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        before_insert_text(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        beforeinput(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        keydown(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        input(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        dragenter(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        drop(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        drag(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        dragleave(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        paste(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        cut(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        event() {
            return {
                ...super.event(),
                mouseout: (next) => this.mouseout(next),
                mouseover: (next) => this.mouseover(next)
            };
        }
        focused(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        hovered(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        focused_or_hovered() {
            return false;
        }
        on_focused_or_hovered(id) {
            return null;
        }
        focus() {
            return null;
        }
        default_value() {
            return "default_block_value";
        }
        focus_state(next) {
            if (next !== undefined)
                return next;
            return "blurred";
        }
        empty(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        before_content() {
            return "";
        }
        after_content() {
            return "";
        }
        opacity() {
            return 1;
        }
        mouseout(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        mouseover(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "Placeholder", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "value_setted", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "value_changed", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "on_ctrl_x", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "keydown_enter", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "before_any_input", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "before_insert_text", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "beforeinput", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "input", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "dragenter", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "drop", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "drag", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "dragleave", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "paste", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "cut", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "focused", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "hovered", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "focus_state", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "empty", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "mouseout", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "mouseover", null);
    $.$ss_blocks_block = $ss_blocks_block;
})($ || ($ = {}));
//ss/blocks/block/-view.tree/block.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $ss_blocks_block_anchor_el() {
            const sel = document.getSelection();
            const anchor_el = sel?.anchorNode;
            let el = anchor_el;
            if (!anchor_el?.dataset?.type) {
                el = sel?.anchorNode?.parentElement;
            }
            return el;
        }
        $$.$ss_blocks_block_anchor_el = $ss_blocks_block_anchor_el;
        function focus_el() {
            const sel = document.getSelection();
            const focus_node = sel?.focusNode;
            let el = focus_node;
            if (!focus_node?.dataset?.type) {
                el = sel?.focusNode?.parentElement;
            }
            return el;
        }
        function $ss_blocks_block_trim(str) {
            return str?.at(-1) == '\n' ? str.slice(0, -1) : str;
        }
        $$.$ss_blocks_block_trim = $ss_blocks_block_trim;
        class $ss_blocks_block extends $.$ss_blocks_block {
            br() {
                return document.createElement('br');
            }
            sub() {
                const value = this.default_value();
                if (value && value != '\n') {
                    return [value, this.br()];
                }
                return [this.br()];
            }
            update_value(data_value) {
                const val = data_value || '\n';
                this.default_value = () => val;
                const innerText = this.dom_node()?.parentElement?.innerText;
                if (val != innerText) {
                    this.dom_node().innerHTML = val != '\n' ? val : '<br/>';
                }
            }
            input(e) {
                const innerText = this.dom_node()?.parentElement?.innerText;
                this.value_changed(innerText);
            }
            before_content() {
                return `"${this.visible_placeholder()}"`;
            }
            empty() {
                return ['', '\n'].includes(this.value_changed());
            }
            visible_placeholder() {
                const placeholder = this.placeholder();
                return this.empty() ? placeholder : '';
            }
            auto() {
                this.focused_or_hovered();
            }
            set_focused_or_hovered(args) {
                const { focused, hovered } = args;
                if (focused === undefined) {
                    this.on_focused_or_hovered(this.focused() || hovered);
                }
                else {
                    this.on_focused_or_hovered(this.hovered() || focused);
                }
            }
            focus_state(next) {
                if (next == 'focused') {
                    this.focused(true);
                    this.set_focused_or_hovered({ focused: true });
                }
                else {
                    this.focused(false);
                    this.set_focused_or_hovered({ focused: false });
                }
                return next || "blurred";
            }
            async focus(pos = 'end') {
                this.focus_state('setting');
                const dom = this.dom_tree();
                if (dom?.parentElement?.innerText == this.value_changed()
                    || dom.parentElement && !this.value_changed()) {
                    const selection = window.getSelection();
                    const range = document.createRange();
                    selection.removeAllRanges();
                    let focusEl = dom.lastChild;
                    if (!focusEl)
                        focusEl = dom;
                    if (focusEl?.nodeName == 'BR' && focusEl.previousSibling)
                        focusEl = focusEl.previousSibling;
                    range.setEnd(focusEl, focusEl.textContent.length);
                    range.collapse(false);
                    selection.addRange(range);
                    return;
                }
                else {
                    return new Promise(resolve => requestAnimationFrame(() => {
                        resolve(this.focus());
                    }));
                }
            }
            beforeinput(e) {
                const el = $ss_blocks_block_anchor_el();
                if (el.parentElement != focus_el().parentElement) {
                    e?.preventDefault();
                    return;
                }
                this.before_any_input(e);
                const sel = document.getSelection();
                switch (e?.inputType) {
                    case 'insertParagraph':
                        break;
                    case 'insertText':
                        this.before_insert_text(e);
                        break;
                    case 'deleteContentBackward':
                    case 'deleteWordBackward': {
                        if (sel.focusOffset == 0 && sel.isCollapsed) {
                            if (sel.anchorNode == el.firstChild || sel.anchorNode == el) {
                                e.preventDefault();
                            }
                        }
                        if (el?.textContent == '' || el?.innerText == '\n') {
                            e.preventDefault();
                        }
                        break;
                    }
                    case 'deleteContentForward':
                    case 'deleteWordForward': {
                        if (el?.parentElement?.innerText == '' || el?.parentElement?.innerText == '\n') {
                            e.preventDefault();
                            return;
                        }
                        if (sel?.isCollapsed) {
                            if (sel.focusOffset == sel.anchorNode?.textContent?.length) {
                                if (sel.anchorNode == el.lastChild?.previousSibling)
                                    e.preventDefault();
                                if (el.lastChild?.previousSibling?.nodeName == 'BR' && sel.anchorNode == el.lastChild.previousSibling?.previousSibling)
                                    e.preventDefault();
                                if (sel.anchorNode == el.lastChild)
                                    e.preventDefault();
                            }
                            if (sel.anchorNode?.nodeType != 3 && (sel.focusOffset >= sel.anchorNode.childNodes.length - 2)) {
                                e.preventDefault();
                            }
                        }
                        break;
                    }
                }
                if (e !== undefined)
                    return e;
                return null;
            }
            on_ctrl_x(e) {
            }
            keydown(e) {
                if (e.key == 'Tab') {
                    e.preventDefault();
                }
                else if (e.key === 'Enter') {
                    const keydown_enter = this.keydown_enter(e);
                    if (keydown_enter !== true) {
                        document.execCommand('insertLineBreak');
                    }
                    e.preventDefault();
                }
                else if (e.ctrlKey) {
                    if (e.code == "KeyX") {
                        this.on_ctrl_x(e);
                    }
                    else if (e.code == "KeyB") {
                        e.preventDefault();
                    }
                    else if (e.code == "KeyI") {
                        e.preventDefault();
                    }
                    else if (e.code == "KeyU") {
                        e.preventDefault();
                    }
                }
                if (e !== undefined)
                    return e;
                return null;
            }
            dragenter(e) {
                e.preventDefault();
            }
            drop(e) {
                e.preventDefault();
            }
            drag(e) {
                e.preventDefault();
            }
            dragleave(e) {
                e.preventDefault();
            }
            paste(e) {
                e.preventDefault();
                this.before_any_input(e);
                const sel = document.getSelection();
                if (sel?.rangeCount) {
                    const range = sel.getRangeAt(0);
                    const data = e.clipboardData.getData('text/plain');
                    const lines = data.split('\n');
                    range.deleteContents();
                    let wasThereTextLineAlready = false;
                    lines.forEach((line, index) => {
                        if (line == '' || line == '\r') {
                            range.insertNode(document.createElement('br'));
                            range.collapse();
                        }
                        else {
                            if (wasThereTextLineAlready) {
                                range.insertNode(document.createElement('br'));
                                range.collapse();
                            }
                            range.insertNode(document.createTextNode(line));
                            range.collapse();
                            wasThereTextLineAlready = true;
                        }
                    });
                }
                const innerText = this.dom_node()?.parentElement?.innerText;
                this.value_changed(innerText);
            }
            cut(e) {
            }
            mouseover() {
                this.hovered(true);
                this.set_focused_or_hovered({ hovered: true });
            }
            mouseout() {
                this.hovered(false);
                this.set_focused_or_hovered({ hovered: false });
            }
            hovered(next) {
                $mol_wire_solid();
                return next;
            }
            focused(next) {
                $mol_wire_solid();
                return next;
            }
        }
        __decorate([
            $mol_mem
        ], $ss_blocks_block.prototype, "br", null);
        __decorate([
            $mol_mem
        ], $ss_blocks_block.prototype, "sub", null);
        __decorate([
            $mol_action
        ], $ss_blocks_block.prototype, "update_value", null);
        __decorate([
            $mol_mem
        ], $ss_blocks_block.prototype, "before_content", null);
        __decorate([
            $mol_mem
        ], $ss_blocks_block.prototype, "empty", null);
        __decorate([
            $mol_mem
        ], $ss_blocks_block.prototype, "visible_placeholder", null);
        __decorate([
            $mol_action
        ], $ss_blocks_block.prototype, "set_focused_or_hovered", null);
        __decorate([
            $mol_mem
        ], $ss_blocks_block.prototype, "focus_state", null);
        __decorate([
            $mol_mem
        ], $ss_blocks_block.prototype, "hovered", null);
        __decorate([
            $mol_mem
        ], $ss_blocks_block.prototype, "focused", null);
        $$.$ss_blocks_block = $ss_blocks_block;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/blocks/block/block.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("ss/blocks/block/block.view.css", "[ss_blocks_block]::before {\n\tpointer-events: none;\n\tcontent: var(--before);\n\topacity: .3;\n}\n\n/* [ss_blocks_block]::before {\n\tpointer-events: none;\n\tcontent: var(--before);\n\topacity: .3;\n} */\n\n[ss_blocks_block][focus-state=\"focused\"] {\n\tbackground: rgba(255,255,255,0.1);\n}\n\n[ss_blocks_block] {\n\twhite-space: pre-wrap;\n\tdisplay: block;\n}\n\n[ss_blocks_block][empty] {\n\t/* caret-color: transparent; */\n}\n");
})($ || ($ = {}));
//ss/blocks/block/-css/block.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_linkpad_link_hover extends $mol_view {
        hovered(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        event() {
            return {
                ...super.event(),
                mouseenter: (next) => this.mouseenter(next),
                mouseleave: (next) => this.mouseleave(next)
            };
        }
        mouseenter(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        mouseleave(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_hover.prototype, "hovered", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_hover.prototype, "mouseenter", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_hover.prototype, "mouseleave", null);
    $.$ss_linkpad_link_hover = $ss_linkpad_link_hover;
})($ || ($ = {}));
//ss/linkpad/link/hover/-view.tree/hover.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_linkpad_link_hover extends $.$ss_linkpad_link_hover {
            mouseenter(event) {
                this.hovered(true);
            }
            mouseleave(event) {
                this.hovered(false);
            }
        }
        $$.$ss_linkpad_link_hover = $ss_linkpad_link_hover;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/linkpad/link/hover/hover.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
        style_size() {
            return {};
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//mol/svg/-view.tree/svg.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//mol/after/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//mol/state/time/time.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/svg.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//mol/svg/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/svg/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//mol/svg/path/-view.tree/path.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//mol/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1rem;\n\theight: 1rem;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tmargin: .25rem 0;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//mol/icon/chevron/-view.tree/chevron.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_right extends $mol_icon {
        path() {
            return "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
        }
    }
    $.$mol_icon_chevron_right = $mol_icon_chevron_right;
})($ || ($ = {}));
//mol/icon/chevron/right/-view.tree/right.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $mol_view {
        uri() {
            return "";
        }
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri_toggle(),
                title: this.hint_safe(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri_toggle() {
            return "";
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//mol/link/-view.tree/link.view.tree.ts
;
"use strict";
//mol/state/arg/arg.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom_context.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom_context.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom_context.history;
                    history.replaceState(history.state, $mol_dom_context.document.title, next);
                });
            }
            if ($mol_dom_context.parent !== $mol_dom_context.self) {
                $mol_dom_context.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom_context.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    break;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static go(next) {
            $mol_dom_context.location.href = this.make_link(next);
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
    function $mol_state_arg_change() {
        $mol_state_arg.href($mol_dom_context.location.href);
    }
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));
//mol/state/arg/arg.web.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//mol/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_down extends $mol_icon {
        path() {
            return "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";
        }
    }
    $.$mol_icon_chevron_down = $mol_icon_chevron_down;
})($ || ($ = {}));
//mol/icon/chevron/down/-view.tree/down.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $ss_blocks extends $mol_object2 {
        Block(id) {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        beforeinput(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        keydown(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        input(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        dragenter(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        drop(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        drag(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        dragleave(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        paste(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        cut(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $ss_blocks.prototype, "Block", null);
    __decorate([
        $mol_mem
    ], $ss_blocks.prototype, "beforeinput", null);
    __decorate([
        $mol_mem
    ], $ss_blocks.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $ss_blocks.prototype, "input", null);
    __decorate([
        $mol_mem
    ], $ss_blocks.prototype, "dragenter", null);
    __decorate([
        $mol_mem
    ], $ss_blocks.prototype, "drop", null);
    __decorate([
        $mol_mem
    ], $ss_blocks.prototype, "drag", null);
    __decorate([
        $mol_mem
    ], $ss_blocks.prototype, "dragleave", null);
    __decorate([
        $mol_mem
    ], $ss_blocks.prototype, "paste", null);
    __decorate([
        $mol_mem
    ], $ss_blocks.prototype, "cut", null);
    $.$ss_blocks = $ss_blocks;
})($ || ($ = {}));
//ss/blocks/-view.tree/blocks.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_blocks extends $.$ss_blocks {
            constructor() {
                super();
                let selected;
                document.onselectionchange = (e) => {
                    if (selected)
                        selected?.focus_state('blurred');
                    selected = this.block_from_sel();
                    selected?.focus_state('focused');
                };
            }
            block_dom_name() {
                return this.Block('0_0').dom_name();
            }
            Block(id) {
                let obj = new this.$.$ss_blocks_block();
                obj.dom_id = () => JSON.stringify(id);
                return obj;
            }
            block_from_node(node) {
                return this.Block(JSON.parse(node.id));
            }
            block_from_sel() {
                let node = getSelection()?.anchorNode;
                while (node && node.localName !== this.block_dom_name()) {
                    node = node?.parentElement;
                }
                if (node?.id)
                    return this.block_from_node(node);
            }
            input(e) {
                this.block_from_sel()?.input(e);
            }
            beforeinput(e) {
                this.block_from_sel()?.beforeinput(e);
            }
            keydown(e) {
                this.block_from_sel()?.keydown(e);
            }
            dragenter(e) {
                this.block_from_sel()?.dragenter(e);
            }
            drop(e) {
                this.block_from_sel()?.drop(e);
            }
            drag(e) {
                this.block_from_sel()?.drag(e);
            }
            dragleave(e) {
                this.block_from_sel()?.dragleave(e);
            }
            paste(e) {
                this.block_from_sel()?.paste(e);
            }
            cut(e) {
                this.block_from_sel()?.cut(e);
            }
        }
        __decorate([
            $mol_mem
        ], $ss_blocks.prototype, "block_dom_name", null);
        __decorate([
            $mol_mem_key
        ], $ss_blocks.prototype, "Block", null);
        __decorate([
            $mol_mem
        ], $ss_blocks.prototype, "input", null);
        __decorate([
            $mol_mem
        ], $ss_blocks.prototype, "beforeinput", null);
        __decorate([
            $mol_mem
        ], $ss_blocks.prototype, "keydown", null);
        __decorate([
            $mol_mem
        ], $ss_blocks.prototype, "dragenter", null);
        __decorate([
            $mol_mem
        ], $ss_blocks.prototype, "drop", null);
        __decorate([
            $mol_mem
        ], $ss_blocks.prototype, "drag", null);
        __decorate([
            $mol_mem
        ], $ss_blocks.prototype, "dragleave", null);
        __decorate([
            $mol_mem
        ], $ss_blocks.prototype, "paste", null);
        __decorate([
            $mol_mem
        ], $ss_blocks.prototype, "cut", null);
        $$.$ss_blocks = $ss_blocks;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/blocks/blocks.view.ts
;
"use strict";
var $;
(function ($) {
    class $ss_linkpad_link_default extends $mol_view {
        ui_id() {
            return null;
        }
        all_link_ids(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        Link_data(id) {
            return null;
        }
        type_name() {
            return "Type";
        }
        hide_contain(next) {
            if (next !== undefined)
                return next;
            return true;
        }
        from_id() {
            return this.data().from_id();
        }
        link_id() {
            return this.data().id();
        }
        data() {
            const obj = new this.$.$ss_linkpad_link_data();
            return obj;
        }
        type_data() {
            const obj = new this.$.$ss_linkpad_link_data();
            return obj;
        }
        Block(id) {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        from_view() {
            return [];
        }
        left_line() {
            return [];
        }
        right_line() {
            return [];
        }
        Icon() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.icon()
            ];
            return obj;
        }
        Name() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Name_block()
            ];
            return obj;
        }
        self_view() {
            return [
                this.Self()
            ];
        }
        type_and_name() {
            return [
                this.Type(),
                this.Name_disabled()
            ];
        }
        value_and_id() {
            return [
                this.Value(),
                this.Link_id(),
                this.Open_block()
            ];
        }
        self_node() {
            return [
                this.Circle_and_line(),
                this.Label()
            ];
        }
        self_link() {
            return [
                this.Link_picture(),
                this.Label()
            ];
        }
        links() {
            return [];
        }
        links_with_slots() {
            return [];
        }
        slot_value(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        slot_focused_or_hovered(id, next) {
            if (next !== undefined)
                return next;
            return false;
        }
        add_new_link(id) {
            return null;
        }
        replace(id) {
            return null;
        }
        replace_to_link(id) {
            return null;
        }
        Slot(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Slot_block(id)
            ];
            return obj;
        }
        links_view() {
            return [
                this.Links()
            ];
        }
        Connected_link(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Slot(id),
                this.Connected_link_row(id)
            ];
            return obj;
        }
        to_link_gap() {
            return [
                this.To_link_gap()
            ];
        }
        to_link_view() {
            return [
                this.To_link(),
                this.Slot_to_link()
            ];
        }
        sub() {
            return [
                ...this.from_view(),
                ...this.self_view(),
                ...this.to_link_view(),
                ...this.links_view()
            ];
        }
        attr() {
            return {
                node: this.is_node(),
                "hide-last-line": this.hide_last_line(),
                "has-links": this.has_links(),
                "has-name": this.has_name()
            };
        }
        style() {
            return {
                ...super.style(),
                "--color": this.color(),
                "--semitransporent": this.semitransporent(),
                "--typename": this.type_name_before(),
                "--linecolor": "rgba(255,255,255,0.1)"
            };
        }
        icon() {
            return "📍";
        }
        Name_block() {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        self_sub() {
            return [];
        }
        self_hovered(next) {
            return this.Self().hovered(next);
        }
        Self() {
            const obj = new this.$.$ss_linkpad_link_hover();
            obj.sub = () => this.self_sub();
            return obj;
        }
        Type() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                this.type_name()
            ];
            return obj;
        }
        name() {
            return "";
        }
        Name_disabled() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                this.name()
            ];
            return obj;
        }
        Value_block() {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        Value() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Value_block()
            ];
            return obj;
        }
        Link_id() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                this.link_id()
            ];
            return obj;
        }
        arg_path() {
            return null;
        }
        close_panel() {
            return null;
        }
        Open_icon() {
            const obj = new this.$.$mol_icon_chevron_right();
            return obj;
        }
        Open() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                path: this.arg_path(),
                right: this.link_id()
            });
            obj.uri_off = () => this.close_panel();
            obj.minimal_width = () => 0;
            obj.minimal_height = () => 0;
            obj.sub = () => [
                this.Open_icon()
            ];
            return obj;
        }
        Open_block() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                this.Open()
            ];
            return obj;
        }
        Circle() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                this.Icon()
            ];
            return obj;
        }
        Line_bottom() {
            const obj = new this.$.$ss_blocks_noedit();
            return obj;
        }
        Circle_and_line() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                this.Circle(),
                this.Line_bottom()
            ];
            return obj;
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                ...this.type_and_name(),
                ...this.value_and_id()
            ];
            return obj;
        }
        Chevron() {
            const obj = new this.$.$mol_icon_chevron_down();
            return obj;
        }
        Right_line() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.minimal_width = () => 0;
            obj.minimal_height = () => 0;
            obj.sub = () => [
                this.Chevron()
            ];
            return obj;
        }
        Link_picture() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                this.Circle_and_line(),
                this.Right_line()
            ];
            return obj;
        }
        Slot_block(id) {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        Links() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                ...this.links_with_slots()
            ];
            return obj;
        }
        Left_line(id) {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                ""
            ];
            return obj;
        }
        connected_link(id) {
            return null;
        }
        Connected_link_row(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Left_line(id),
                this.connected_link(id)
            ];
            return obj;
        }
        To_link_gap() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                ""
            ];
            return obj;
        }
        to_link() {
            return null;
        }
        To_link() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                ...this.to_link_gap(),
                this.to_link()
            ];
            return obj;
        }
        Slot_to_link() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        From_id() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                "from:",
                this.from_id()
            ];
            return obj;
        }
        is_node() {
            return true;
        }
        hide_last_line(next) {
            if (next !== undefined)
                return next;
            return true;
        }
        has_links() {
            return true;
        }
        has_name() {
            return true;
        }
        color() {
            return "transparent";
        }
        semitransporent() {
            return "transparent";
        }
        type_name_before() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "all_link_ids", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "hide_contain", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "data", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "type_data", null);
    __decorate([
        $mol_mem_key
    ], $ss_linkpad_link_default.prototype, "Block", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Name", null);
    __decorate([
        $mol_mem_key
    ], $ss_linkpad_link_default.prototype, "slot_value", null);
    __decorate([
        $mol_mem_key
    ], $ss_linkpad_link_default.prototype, "slot_focused_or_hovered", null);
    __decorate([
        $mol_mem_key
    ], $ss_linkpad_link_default.prototype, "Slot", null);
    __decorate([
        $mol_mem_key
    ], $ss_linkpad_link_default.prototype, "Connected_link", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Name_block", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Self", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Type", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Name_disabled", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Value_block", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Value", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Link_id", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Open_icon", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Open", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Open_block", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Circle", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Line_bottom", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Circle_and_line", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Chevron", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Right_line", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Link_picture", null);
    __decorate([
        $mol_mem_key
    ], $ss_linkpad_link_default.prototype, "Slot_block", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Links", null);
    __decorate([
        $mol_mem_key
    ], $ss_linkpad_link_default.prototype, "Left_line", null);
    __decorate([
        $mol_mem_key
    ], $ss_linkpad_link_default.prototype, "Connected_link_row", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "To_link_gap", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "To_link", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "Slot_to_link", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "From_id", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_default.prototype, "hide_last_line", null);
    $.$ss_linkpad_link_default = $ss_linkpad_link_default;
})($ || ($ = {}));
//ss/linkpad/link/default/-view.tree/default.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_linkpad_link_default extends $.$ss_linkpad_link_default {
            type_data() {
                return this.Link_data(this.data().type_id());
            }
            type_name() {
                return this.type_data()?.name();
            }
            type_name_before() {
                return `"${this.type_name()?.replaceAll('\n', ' ')}"`;
            }
            from_view() {
                return [];
                return this.data().from_id() ? [
                    this.From_id()
                ] : [];
            }
            self_view() {
                if (this.type_name() != 'Contain') {
                    return [this.Self()];
                }
                return this.hide_contain() ? [] : [this.Self()];
            }
            to_link_gap() {
                if (this.type_name() != 'Contain') {
                    return [this.To_link_gap()];
                }
                return this.hide_contain() ? [] : [this.To_link_gap()];
            }
            self_sub() {
                return this.to_link() ? this.self_link() : this.self_node();
            }
            connected_link(pos) {
                return this.links()[pos];
            }
            links_with_slots() {
                const links_with_slots = [];
                this.links().forEach((link, i) => {
                    links_with_slots.push(this.Connected_link(i));
                });
                const last_slot = this.Slot(this.links().length);
                links_with_slots.push(last_slot);
                return links_with_slots;
            }
            has_links() {
                return this.links().length > 0 ? true : false;
            }
            is_node() {
                return this.to_link() ? false : true;
            }
            to_link_view() {
                return this.to_link() ? [
                    this.To_link()
                ] : this.data().from_id() ? [
                    this.Slot_to_link()
                ] : [];
            }
            Name_block() {
                const block_id = [this.ui_id(), 'name'];
                const block = this.Block(block_id);
                block.value_changed = next => this.data().name(next);
                block.update_value(this.data().name());
                return block;
            }
            auto() {
                this.hide_last_line();
            }
            slot_focused_or_hovered(i, next) {
                if (i == this.links().length) {
                    this.hide_last_line(!next);
                }
                return next;
            }
            Slot_block(i) {
                const block_id = [this.ui_id(), `slot${i}`];
                const block = this.Block(block_id);
                block.value_changed = (next) => {
                    return this.slot_value(i, next);
                };
                block.update_value(this.slot_value(i));
                block.before_any_input = (e) => {
                    const link = this.add_new_link({ from: this.ui_id(), pos: i, val: e.data });
                    link.Type_name_block().focus();
                    e.preventDefault();
                };
                if (i == this.links().length) {
                    block.on_focused_or_hovered = (next) => {
                        this.slot_focused_or_hovered(i, next);
                    };
                }
                return block;
            }
            Type_block() {
                const block_id = [this.ui_id(), 'type'];
                const block = this.Block(block_id);
                block.update_value(this.type_name());
                return block;
            }
            color() {
                return `hsl(${this.type_data()?.hue()} 80% 60%)`;
            }
            semitransporent() {
                return `hsl(${this.type_data()?.hue()} 90% 60% / 20%)`;
            }
            Value_block() {
                const block_id = [this.ui_id(), 'value'];
                const block = this.Block(block_id);
                block.value_changed = next => this.data().val(next);
                block.update_value(this.data().val());
                return block;
            }
            name() {
                return this.data().name();
            }
            has_name() {
                return Boolean(this.name());
            }
            type_and_name() {
                return this.has_name() ? super.type_and_name() : [];
            }
            value_and_id() {
                return (this.has_name() && this.data().val()) ?
                    [this.Link_id(), this.Value()] :
                    this.type_name() == 'Package' ? [this.Value(), this.Open_block(), this.Link_id()] :
                        [this.Value(), this.Link_id()];
            }
            arg_path() {
                return this.$.$mol_state_arg.value('path') || null;
            }
            close_panel() {
                return new this.$.$mol_state_arg(this.state_key()).link({ right: null, path: this.arg_path() });
            }
        }
        __decorate([
            $mol_mem_key
        ], $ss_linkpad_link_default.prototype, "slot_focused_or_hovered", null);
        $$.$ss_linkpad_link_default = $ss_linkpad_link_default;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/linkpad/link/default/default.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("ss/linkpad/link/default/default.view.css", "[ss_blocks_block] {\n\tword-wrap: break-word;\n\tflex-shrink: 1;\n\tflex-grow: 1;\n\tmax-height: 7rem;\n\toverflow: auto;\n}\n\n[ss_linkpad_link_default_slot]:hover {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n/* [ss_linkpad_link_default][node] > [ss_linkpad_link_default_self] > [ss_linkpad_link_default_label] > [ss_linkpad_link_default_value] > [ss_blocks_block]::before { */\n\t/* content: var(--typename); */\n\t/* padding-right: .5rem; */\n\t/* opacity: .5; */\n\t/* color: var(--color); */\n\t/* background: linear-gradient(90deg, var(--semitransporent) 0%, transparent 5rem); */\n/* } */\n/* [ss_linkpad_link_default]:not([has-name]) [ss_linkpad_link_default_value] > [ss_blocks_block]::before { */\n[ss_linkpad_link_default]:not([has-name]) > [ss_linkpad_link_default_self] > [ss_linkpad_link_default_label] > [ss_linkpad_link_default_value] > [ss_blocks_block]::before {\n\tcontent: var(--typename);\n\tpadding-right: .5rem;\n\tcolor: var(--color);\n\topacity: 1;\n\t/* background: linear-gradient(90deg, var(--semitransporent) 0%, transparent 5rem); */\n}\n\n\n[ss_linkpad_link_default][node] > [ss_linkpad_link_default_name] {\n\tbackground: linear-gradient(90deg, var(--semitransporent) 0%, transparent 5rem);\n}\n\n/* [ss_linkpad_link_default][node] { */\n[ss_linkpad_link_default] {\n\t/* background: var(--color); */\n\t/* background: linear-gradient(90deg, var(--color) -500rem, transparent 200rem); */\n\tborder-radius: .75rem;\n\t/* background: linear-gradient(90deg, transparent 0rem, var(--semitransporent) 2.5rem, transparent 5rem); */\n}\n\n[ss_linkpad_link_default_links] > [ss_linkpad_link_default_slot] {\n\tborder-left: 1px solid var(--linecolor);\n}\n[ss_linkpad_link_default_links] > [ss_linkpad_link_default_slot]:last-child {\n\tborder-left: none;\n}\n\n[ss_linkpad_link_default_links] > [ss_linkpad_link_default_connected_link] {\n\tborder-left: 1px solid var(--linecolor);\n}\n[ss_linkpad_link_default][hide-last-line] > [ss_linkpad_link_default_links] > [ss_linkpad_link_default_connected_link]:nth-last-child(-n+2) {\n\tborder-left: 1px solid transparent;\n}\n[ss_linkpad_link_default][hide-last-line] > [ss_linkpad_link_default_links] > [ss_linkpad_link_default_connected_link]:nth-last-child(-n+2):before {\n\theight: calc( .75rem + .5rem + 1px );\n\tborder-left: 1px solid var(--linecolor);\n\tmargin-left: -.5px;\n\t/* right: -1px; */\n\tcontent: \"\";\n\tposition: absolute;\n}\n[ss_linkpad_link_default_to_link] {\n\tposition: relative;\n}\n\n[ss_linkpad_link_default_line_bottom] {\n\tdisplay: none;\n}\n[ss_linkpad_link_default]:not([hide-last-line]) > [ss_linkpad_link_default_self] > [ss_linkpad_link_default_circle_and_line] > [ss_linkpad_link_default_line_bottom],\n[ss_linkpad_link_default][has-links] > [ss_linkpad_link_default_self] > [ss_linkpad_link_default_circle_and_line] > [ss_linkpad_link_default_line_bottom] {\n\tdisplay: block;\n}\n\n[ss_linkpad_link_default]:not([hide-last-line]) > [ss_linkpad_link_default_to_link]:nth-last-child(-n+2):before,\n[ss_linkpad_link_default][has-links] > [ss_linkpad_link_default_to_link]:nth-last-child(-n+2):before {\n\t/* height: calc( .75rem + .75rem + 1px ); */\n\theight: 100%;\n\tborder-left: 1px solid var(--linecolor);\n\tmargin-left: calc( .75rem - 0px );\n\t/* right: -1px; */\n\tcontent: \"\";\n\tposition: absolute;\n}\n");
})($ || ($ = {}));
//ss/linkpad/link/default/-css/default.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const color = $mol_style_func.vary('--color');
        const linecolor = $mol_style_func.vary('--linecolor');
        const semitransporent = $mol_style_func.vary('--semitransporent');
        $mol_style_define($ss_linkpad_link_default, {
            backgroundColor: 'var(--block-color)',
            border: {},
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
            },
            Open: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: $mol_gap.space,
                    right: $mol_gap.space,
                },
            },
            Type: {
                color
            },
            Self: {
                gap: $mol_gap.space,
                flex: {
                    grow: 1,
                },
                ":hover": {
                    background: {
                        color: $mol_theme.hover,
                    }
                }
            },
            Label: {
                height: 'fit-content',
                width: 'fit-content',
                gap: '.5rem',
                flex: {
                    shrink: 1,
                    grow: 1,
                    wrap: 'wrap',
                },
                alignItems: 'flex-start',
            },
            Name: {
                flex: {
                    shrink: 1,
                    grow: 1,
                },
                color: $mol_theme.shade,
            },
            Name_disabled: {
                flex: {
                    shrink: 1,
                },
                color: $mol_theme.shade,
            },
            Value: {
                flex: {
                    shrink: 1,
                    grow: 1,
                },
            },
            Circle_and_line: {
                flex: {
                    direction: 'column',
                },
            },
            Line_bottom: {
                border: {
                    left: {
                        color: linecolor,
                        width: '1px',
                        style: 'solid',
                    },
                },
                flex: {
                    grow: 1,
                },
                margin: {
                    left: $mol_style_func.calc('.75rem - 0px'),
                },
            },
            Left_line: {
                border: {
                    top: {
                        radius: '1rem',
                        color: linecolor,
                        width: '1px',
                        style: 'solid',
                    },
                },
                width: '.75rem',
                margin: {
                    top: '.75rem',
                    left: '.25rem',
                },
            },
            Right_line: {
                borderTopRightRadius: '1rem',
                border: {
                    top: {
                        color: linecolor,
                        width: '1px',
                        style: 'solid',
                    },
                    right: {
                        color: linecolor,
                        width: '1px',
                        style: 'solid',
                    },
                },
                width: '.75rem',
                height: '.75rem',
                margin: {
                    top: '.75rem',
                    bottom: '.25rem',
                },
            },
            Chevron: {
                position: 'absolute',
                margin: {
                    top: '.15rem',
                },
                marginLeft: 'calc( .3rem - 1px )',
                color: linecolor
            },
            Connected_link: {
                flex: {
                    direction: 'column',
                },
            },
            To_link_gap: {
                width: '1.75rem',
            },
            Slot: {
                font: {
                    size: '.5rem',
                },
                height: '.5rem',
                lineHeight: '1',
            },
            Circle: {
                outline: 'var(--color) 1px solid',
                border: {
                    radius: '.75rem',
                    color: 'rgba(255,255,255,0.1)',
                    width: '1px',
                },
                background: {
                    color: semitransporent,
                },
                width: '1.5rem',
                height: '1.5rem',
                alignItems: 'center',
                justifyContent: 'center',
            },
            Icon: {
                margin: {
                    top: '-0.15rem',
                },
            },
            Links: {
                flex: {
                    direction: 'column',
                },
                margin: {
                    left: '.75rem',
                },
                padding: {},
            },
            Link_id: {
                opacity: 0.2,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/linkpad/link/default/default.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_linkpad_link_type extends $ss_linkpad_link_default {
        icon() {
            return "⭐";
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Name(),
                this.Link_id()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_type.prototype, "Label", null);
    $.$ss_linkpad_link_type = $ss_linkpad_link_type;
})($ || ($ = {}));
//ss/linkpad/link/type/-view.tree/type.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_linkpad_link_type extends $.$ss_linkpad_link_type {
            color() {
                return `hsl(${this.data().hue()} 80% 60%)`;
            }
            semitransporent() {
                return `hsl(${this.data().hue()} 90% 60% / 20%)`;
            }
        }
        $$.$ss_linkpad_link_type = $ss_linkpad_link_type;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/linkpad/link/type/type.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pop extends $mol_view {
        showed(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        align_vert() {
            return "";
        }
        align_hor() {
            return "";
        }
        prefer() {
            return "vert";
        }
        sub() {
            return [
                this.Anchor()
            ];
        }
        sub_visible() {
            return [
                this.Anchor(),
                this.Bubble()
            ];
        }
        Anchor() {
            return null;
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        Bubble() {
            const obj = new this.$.$mol_pop_bubble();
            obj.align = () => this.align();
            obj.content = () => this.bubble_content();
            obj.height_max = () => this.height_max();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
    class $mol_pop_bubble extends $mol_view {
        sub() {
            return this.content();
        }
        style() {
            return {
                ...super.style(),
                maxHeight: this.height_max()
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_pop_align: this.align(),
                tabindex: 0
            };
        }
        content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//mol/pop/-view.tree/pop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_layer = $mol_style_prop('mol_layer', [
        'hover',
        'focus',
        'speck',
        'float',
        'popup',
    ]);
})($ || ($ = {}));
//mol/layer/layer.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));
//mol/layer/-css/layer.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                switch (this.prefer()) {
                    case 'hor': return `${this.align_hor()}_${this.align_vert()}`;
                    case 'vert': return `${this.align_vert()}_${this.align_hor()}`;
                    default: return this.prefer();
                }
            }
            align_vert() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.top > (viewport.top + viewport.height / 2) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.left > (viewport.left + viewport.width / 2) ? 'left' : 'right';
            }
            View_port() {
                const view = new $mol_view;
                view.dom_node = () => {
                    let node = this.dom_node();
                    while (node = node.offsetParent) {
                        if (this.$.$mol_dom_context.getComputedStyle(node).overflow !== 'visible')
                            return node;
                    }
                    return this.$.$mol_dom_context.document.documentElement;
                };
                return view;
            }
            view_port() {
                return this.View_port().view_rect() ?? { ...this.$.$mol_window.size(), left: 0, top: 0 };
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "View_port", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "view_port", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pop/pop.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: var(--mol_layer_popup);\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\t/* overflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay; */\n\tword-break: normal;\n\twidth: max-content;\n\theight: max-content;\n\tflex-direction: column;\n\tmax-width: 80vw;\n\tmax-height: 80vw;\n}\n\n:where( [mol_pop_bubble] > * ) {\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense_suspense\"] {\n\topacity: 0;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//mol/pop/-css/pop.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pop_over extends $mol_pop {
        showed() {
            return this.hovered();
        }
        attr() {
            return {
                ...super.attr(),
                tabindex: 0
            };
        }
        event() {
            return {
                ...super.event(),
                mouseenter: (event) => this.event_show(event),
                mouseleave: (event) => this.event_hide(event)
            };
        }
        hovered(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        event_show(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_hide(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pop_over.prototype, "hovered", null);
    __decorate([
        $mol_mem
    ], $mol_pop_over.prototype, "event_show", null);
    __decorate([
        $mol_mem
    ], $mol_pop_over.prototype, "event_hide", null);
    $.$mol_pop_over = $mol_pop_over;
})($ || ($ = {}));
//mol/pop/over/-view.tree/over.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop_over extends $.$mol_pop_over {
            event_show(event) {
                this.hovered(true);
            }
            event_hide(event) {
                this.hovered(false);
            }
            showed() {
                return this.focused() || this.hovered();
            }
        }
        $$.$mol_pop_over = $mol_pop_over;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pop/over/over.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/over/over.view.css", "[mol_pop_over]:focus {\r\n\toutline: none;\r\n}");
})($ || ($ = {}));
//mol/pop/over/-css/over.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: this.theme()
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        theme() {
            return "$mol_theme_accent";
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//mol/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));
//mol/speck/-css/speck.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $mol_view {
        enabled() {
            return true;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                dblclick: (event) => this.clicks(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_safe()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.error();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        clicks(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        error() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "clicks", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//mol/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//mol/keyboard/code/code.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    this.status([error]);
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $mol_button {
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//mol/button/typed/-view.tree/typed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));
//mol/button/typed/-css/typed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//mol/button/minor/-view.tree/minor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/button/minor/-css/minor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.aria_checked(),
                role: this.aria_role()
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        aria_checked() {
            return "false";
        }
        aria_role() {
            return "checkbox";
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//mol/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));
//mol/check/-css/check.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
            aria_checked() {
                return String(this.checked());
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/check.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pick extends $mol_pop {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        Anchor() {
            return this.Trigger();
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        trigger_enabled() {
            return true;
        }
        trigger_content() {
            return [
                this.title()
            ];
        }
        hint() {
            return "";
        }
        Trigger() {
            const obj = new this.$.$mol_check();
            obj.minimal_width = () => 40;
            obj.minimal_height = () => 40;
            obj.enabled = () => this.trigger_enabled();
            obj.checked = (next) => this.showed(next);
            obj.sub = () => this.trigger_content();
            obj.hint = () => this.hint();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "Trigger", null);
    $.$mol_pick = $mol_pick;
})($ || ($ = {}));
//mol/pick/-view.tree/pick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pick/pick.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n\tflex-grow: 1;\n}\n");
})($ || ($ = {}));
//mol/pick/-css/pick.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//mol/state/local/local.ts
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));
//mol/state/local/local.web.ts
;
"use strict";
//mol/charset/encoding/encoding.ts
;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//mol/charset/decode/decode.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = $node || {};
//node/node.web.ts
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//mol/charset/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(null);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next) {
            let exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure();
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (virt) {
                const now = new Date;
                this.stat({
                    type: 'file',
                    size: 0,
                    atime: now,
                    mtime: now,
                    ctime: now,
                }, 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer(undefined));
            }
            else {
                const buffer = next === undefined ? undefined : $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//mol/file/file.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));
//mol/wire/sync/sync.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//mol/dom/parse/parse.ts
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        status() {
            const types = ['unknown', 'inform', 'success', 'redirect', 'wrong', 'failed'];
            return types[Math.floor(this.native.status / 100)];
        }
        code() {
            return this.native.status;
        }
        message() {
            return this.native.statusText || `HTTP Error ${this.code()}`;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            const native = globalThis.fetch ?? $node['undici'].fetch;
            const controller = new AbortController();
            let done = false;
            const promise = native(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done && !controller.signal.aborted)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            return new $mol_fetch_response($mol_wire_sync(this).request(input, init));
        }
        static success(input, init) {
            const response = this.response(input, init);
            if (response.status() === 'success')
                return response;
            throw new Error(response.message());
        }
        static stream(input, init) {
            return this.success(input, init).stream();
        }
        static text(input, init) {
            return this.success(input, init).text();
        }
        static json(input, init) {
            return this.success(input, init).json();
        }
        static buffer(input, init) {
            return this.success(input, init).buffer();
        }
        static xml(input, init) {
            return this.success(input, init).xml();
        }
        static xhtml(input, init) {
            return this.success(input, init).xhtml();
        }
        static html(input, init) {
            return this.success(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "success", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//mol/fetch/fetch.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        static base = $mol_dom_context.document?.currentScript
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        buffer(next) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        stat(next, virt) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        ensure() {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));
//mol/file/file.web.ts
;
"use strict";
//hyoo/hyoo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_huggingface_run(space, method, ...data) {
        while (true) {
            try {
                if (typeof method === 'number') {
                    return $mol_wire_sync(this).$mol_huggingface_ws(space, method, ...data);
                }
                else {
                    return this.$mol_huggingface_rest(space, method, ...data);
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                if (error instanceof Error && error.message === `Queue full`) {
                    $mol_fail_log(error);
                    continue;
                }
                $mol_fail_hidden(error);
            }
        }
    }
    $.$mol_huggingface_run = $mol_huggingface_run;
    function $mol_huggingface_rest(space, method, ...data) {
        const uri = `https://${space}.hf.space/run/${method}`;
        const response = $mol_fetch.json(uri, {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data }),
        });
        if ('error' in response) {
            $mol_fail(new Error(response.error ?? 'Unknown API error'));
        }
        return response.data;
    }
    $.$mol_huggingface_rest = $mol_huggingface_rest;
    function $mol_huggingface_ws(space, fn_index, ...data) {
        const session_hash = $mol_guid();
        const socket = new WebSocket(`wss://${space}.hf.space/queue/join`);
        const promise = new Promise((done, fail) => {
            socket.onclose = event => {
                if (event.reason)
                    fail(new Error(event.reason));
            };
            socket.onerror = event => {
                fail(new Error(`Socket error`));
            };
            socket.onmessage = event => {
                const message = JSON.parse(event.data);
                switch (message.msg) {
                    case 'send_hash':
                        return socket.send(JSON.stringify({ session_hash, fn_index }));
                    case 'estimation': return;
                    case 'queue_full':
                        fail(new Error(`Queue full`));
                    case 'send_data':
                        return socket.send(JSON.stringify({ session_hash, fn_index, data }));
                    case 'process_starts': return;
                    case 'process_completed':
                        if (message.success) {
                            return done(message.output.data);
                        }
                        else {
                            return fail(new Error(message.output.error ?? `Unknown API error`));
                        }
                    default:
                        return fail(new Error(`Unknown message type: ${message.msg}`));
                }
            };
        });
        return Object.assign(promise, {
            destructor: () => socket.close()
        });
    }
    $.$mol_huggingface_ws = $mol_huggingface_ws;
})($ || ($ = {}));
//mol/huggingface/huggingface.ts
;
"use strict";
var $;
(function ($) {
    function $hyoo_lingua_translate(lang, text) {
        const cache_key = `$hyoo_lingua_translate(${JSON.stringify(lang)},${JSON.stringify(text)})`;
        const cached = this.$mol_state_local.value(cache_key);
        if (cached)
            return String(cached);
        const translated = this.$mol_huggingface_run('hyoo-translate', 0, lang, text)[0];
        return this.$mol_state_local.value(cache_key, translated);
    }
    $.$hyoo_lingua_translate = $hyoo_lingua_translate;
})($ || ($ = {}));
//hyoo/lingua/translate/translate.ts
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    const def = this.lang_default();
                    if (lang === def)
                        throw error;
                }
            }
            return {};
        }
        static text(key) {
            const lang = this.lang();
            const target = this.texts(lang)[key];
            if (target)
                return target;
            this.warn(key);
            const en = this.texts('en')[key];
            if (!en)
                return key;
            try {
                return $mol_wire_sync($hyoo_lingua_translate).call(this.$, lang, en);
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return en;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//mol/locale/locale.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//mol/hotkey/-view.tree/hotkey.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== (event.ctrlKey || event.metaKey))
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hotkey/hotkey.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(next) {
            if (next !== undefined)
                return next;
            return [
                0,
                0
            ];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint_visible(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start(),
                inputMode: this.keyboard(),
                enterkeyhint: this.enter()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        value_changed(next) {
            return this.value(next);
        }
        hint() {
            return "";
        }
        hint_visible() {
            return this.hint();
        }
        spellcheck() {
            return true;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        keyboard() {
            return "text";
        }
        enter() {
            return "go";
        }
        length_max() {
            return +Infinity;
        }
        type(next) {
            if (next !== undefined)
                return next;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit_with_ctrl() {
            return false;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.mod_ctrl = () => this.submit_with_ctrl();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//mol/string/-view.tree/string.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = next.target;
                const from = el.selectionStart;
                const to = el.selectionEnd;
                el.value = this.value_changed(el.value);
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
            }
            selection_start() {
                const el = this.dom_node();
                if (el.selectionStart === null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (el.selectionEnd === null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/string/string.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/string/-css/string.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_dots_vertical extends $mol_icon {
        path() {
            return "M12,16C13.1,16 14,16.9 14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18C10,16.9 10.9,16 12,16M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M12,4C13.1,4 14,4.9 14,6C14,7.1 13.1,8 12,8C10.9,8 10,7.1 10,6C10,4.9 10.9,4 12,4Z";
        }
    }
    $.$mol_icon_dots_vertical = $mol_icon_dots_vertical;
})($ || ($ = {}));
//mol/icon/dots/vertical/-view.tree/vertical.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return +Infinity;
        }
        row_width() {
            return 0;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//mol/paragraph/-view.tree/paragraph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paragraph/paragraph.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/paragraph/-css/paragraph.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//mol/dimmer/-view.tree/dimmer.view.tree.ts
;
"use strict";
//mol/type/equals/equals.ts
;
"use strict";
//mol/type/merge/merge.ts
;
"use strict";
//mol/type/intersect/intersect.ts
;
"use strict";
//mol/unicode/unicode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static vary(sources) {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, '', groups);
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = (params) => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//mol/regexp/regexp.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//mol/dimmer/-css/dimmer.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $mol_plugin {
        cycle(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        keys_y(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        current_x(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        current_y(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.event_key(event)
            };
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//mol/nav/-view.tree/nav.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/nav/nav.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//mol/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = (!/Gecko\//.test(navigator.userAgent)
            && this.$mol_dom_context.CSS?.supports('overflow-anchor:auto')) ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//mol/support/css/css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = Math.max(0, max - 1);
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = Math.min(min + 1, kids.length);
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));
//mol/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_select extends $mol_pick {
        dictionary(next) {
            if (next !== undefined)
                return next;
            return {};
        }
        options() {
            return [];
        }
        value(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        option_label_default() {
            return "";
        }
        Option_row(id) {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (event) => this.event_select(id, event);
            obj.sub = () => this.option_content(id);
            return obj;
        }
        No_options() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.no_options_message()
            ];
            return obj;
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Nav()
            ];
        }
        hint() {
            return this.$.$mol_locale.text('$mol_select_hint');
        }
        bubble_content() {
            return [
                this.Filter(),
                this.Bubble_pane()
            ];
        }
        Filter() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.filter_pattern(next);
            obj.hint = () => this.$.$mol_locale.text('$mol_select_Filter_hint');
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Trigger_icon() {
            const obj = new this.$.$mol_icon_dots_vertical();
            return obj;
        }
        event_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        option_label(id) {
            return "";
        }
        filter_pattern(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Option_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.option_label(id);
            obj.needle = () => this.filter_pattern();
            return obj;
        }
        option_content(id) {
            return [
                this.Option_label(id)
            ];
        }
        no_options_message() {
            return this.$.$mol_locale.text('$mol_select_no_options_message');
        }
        nav_components() {
            return [];
        }
        option_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        nav_cycle(next) {
            if (next !== undefined)
                return next;
            return true;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.option_focused(component);
            obj.cycle = (next) => this.nav_cycle(next);
            return obj;
        }
        menu_content() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_content();
            return obj;
        }
        Bubble_pane() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.Menu()
            ];
            return obj;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "dictionary", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_row", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "No_options", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Filter", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Trigger_icon", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "event_select", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "filter_pattern", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_label", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "option_focused", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "nav_cycle", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Bubble_pane", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "submit", null);
    $.$mol_select = $mol_select;
})($ || ($ = {}));
//mol/select/-view.tree/select.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//mol/match/text.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return (value == null ? id : value) || this.option_label_default();
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.showed(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    this.Trigger_icon(),
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/select/select.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-right: -1rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-right: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));
//mol/select/-css/select.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_editor_noedit extends $mol_view {
        field() {
            return {
                ...super.field(),
                contentEditable: false
            };
        }
    }
    $.$ss_editor_noedit = $ss_editor_noedit;
})($ || ($ = {}));
//ss/editor/noedit/-view.tree/noedit.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_span extends $mol_object2 {
        uri;
        source;
        row;
        col;
        length;
        constructor(uri, source, row, col, length) {
            super();
            this.uri = uri;
            this.source = source;
            this.row = row;
            this.col = col;
            this.length = length;
            this[Symbol.toStringTag] = `${this.uri}#${this.row}:${this.col}/${this.length}`;
        }
        static unknown = $mol_span.begin('?');
        static begin(uri, source = '') {
            return new $mol_span(uri, source, 1, 1, 0);
        }
        static end(uri, source) {
            return new $mol_span(uri, source, 1, source.length + 1, length);
        }
        static entire(uri, source) {
            return new $mol_span(uri, source, 1, 1, source.length);
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return {
                uri: this.uri,
                row: this.row,
                col: this.col,
                length: this.length
            };
        }
        error(message, Class = Error) {
            return new Class(`${message}${this}`);
        }
        span(row, col, length) {
            return new $mol_span(this.uri, this.source, row, col, length);
        }
        after(length = 0) {
            return new $mol_span(this.uri, this.source, this.row, this.col + this.length, length);
        }
        slice(begin, end = -1) {
            let len = this.length;
            if (begin < 0)
                begin += len;
            if (end < 0)
                end += len;
            if (begin < 0 || begin > len)
                this.$.$mol_fail(`Begin value '${begin}' out of range ${this}`);
            if (end < 0 || end > len)
                this.$.$mol_fail(`End value '${end}' out of range ${this}`);
            if (end < begin)
                this.$.$mol_fail(`End value '${end}' can't be less than begin value ${this}`);
            return this.span(this.row, this.col + begin, end - begin);
        }
    }
    $.$mol_span = $mol_span;
})($ || ($ = {}));
//mol/span/span.ts
;
"use strict";
var $;
(function ($) {
    class $mol_error_syntax extends SyntaxError {
        reason;
        line;
        span;
        constructor(reason, line, span) {
            super(`${reason}\n${span}\n${line.substring(0, span.col - 1).replace(/\S/g, ' ')}${''.padEnd(span.length, '!')}\n${line}`);
            this.reason = reason;
            this.line = line;
            this.span = span;
        }
    }
    $.$mol_error_syntax = $mol_error_syntax;
})($ || ($ = {}));
//mol/error/syntax/syntax.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_string(str, uri = '?') {
        const span = $mol_span.entire(uri, str);
        var root = $mol_tree2.list([], span);
        var stack = [root];
        var pos = 0, row = 0, min_indent = 0;
        while (str.length > pos) {
            var indent = 0;
            var line_start = pos;
            row++;
            while (str.length > pos && str[pos] == '\t') {
                indent++;
                pos++;
            }
            if (!root.kids.length) {
                min_indent = indent;
            }
            indent -= min_indent;
            if (indent < 0 || indent >= stack.length) {
                const sp = span.span(row, 1, pos - line_start);
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                if (indent < 0) {
                    if (str.length > pos) {
                        this.$mol_fail(new this.$mol_error_syntax(`Too few tabs`, str.substring(line_start, pos), sp));
                    }
                }
                else {
                    this.$mol_fail(new this.$mol_error_syntax(`Too many tabs`, str.substring(line_start, pos), sp));
                }
            }
            stack.length = indent + 1;
            var parent = stack[indent];
            while (str.length > pos && str[pos] != '\\' && str[pos] != '\n') {
                var error_start = pos;
                while (str.length > pos && (str[pos] == ' ' || str[pos] == '\t')) {
                    pos++;
                }
                if (pos > error_start) {
                    let line_end = str.indexOf('\n', pos);
                    if (line_end === -1)
                        line_end = str.length;
                    const sp = span.span(row, error_start - line_start + 1, pos - error_start);
                    this.$mol_fail(new this.$mol_error_syntax(`Wrong nodes separator`, str.substring(line_start, line_end), sp));
                }
                var type_start = pos;
                while (str.length > pos &&
                    str[pos] != '\\' &&
                    str[pos] != ' ' &&
                    str[pos] != '\t' &&
                    str[pos] != '\n') {
                    pos++;
                }
                if (pos > type_start) {
                    let next = new $mol_tree2(str.slice(type_start, pos), '', [], span.span(row, type_start - line_start + 1, pos - type_start));
                    const parent_kids = parent.kids;
                    parent_kids.push(next);
                    parent = next;
                }
                if (str.length > pos && str[pos] == ' ') {
                    pos++;
                }
            }
            if (str.length > pos && str[pos] == '\\') {
                var data_start = pos;
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                let next = new $mol_tree2('', str.slice(data_start + 1, pos), [], span.span(row, data_start - line_start + 2, pos - data_start - 1));
                const parent_kids = parent.kids;
                parent_kids.push(next);
                parent = next;
            }
            if (str.length === pos && stack.length > 0) {
                const sp = span.span(row, pos - line_start + 1, 1);
                this.$mol_fail(new this.$mol_error_syntax(`Unexpected EOF, LF required`, str.substring(line_start, str.length), sp));
            }
            stack.push(parent);
            pos++;
        }
        return root;
    }
    $.$mol_tree2_from_string = $mol_tree2_from_string;
})($ || ($ = {}));
//mol/tree2/from/string/string.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_string(tree) {
        let output = [];
        function dump(tree, prefix = '') {
            if (tree.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output.push(tree.type);
                if (tree.kids.length == 1) {
                    output.push(' ');
                    dump(tree.kids[0], prefix);
                    return;
                }
                output.push("\n");
            }
            else if (tree.value.length || prefix.length) {
                output.push("\\" + tree.value + "\n");
            }
            for (const kid of tree.kids) {
                output.push(prefix);
                dump(kid, prefix + "\t");
            }
        }
        dump(tree);
        return output.join('');
    }
    $.$mol_tree2_to_string = $mol_tree2_to_string;
})($ || ($ = {}));
//mol/tree2/to/string/string.ts
;
"use strict";
var $;
(function ($) {
    class $mol_tree2 extends Object {
        type;
        value;
        kids;
        span;
        constructor(type, value, kids, span) {
            super();
            this.type = type;
            this.value = value;
            this.kids = kids;
            this.span = span;
            this[Symbol.toStringTag] = type || '\\' + value;
        }
        static list(kids, span = $mol_span.unknown) {
            return new $mol_tree2('', '', kids, span);
        }
        list(kids) {
            return $mol_tree2.list(kids, this.span);
        }
        static data(value, kids = [], span = $mol_span.unknown) {
            const chunks = value.split('\n');
            if (chunks.length > 1) {
                let kid_span = span.span(span.row, span.col, 0);
                const data = chunks.map(chunk => {
                    kid_span = kid_span.after(chunk.length);
                    return new $mol_tree2('', chunk, [], kid_span);
                });
                kids = [...data, ...kids];
                value = '';
            }
            return new $mol_tree2('', value, kids, span);
        }
        data(value, kids = []) {
            return $mol_tree2.data(value, kids, this.span);
        }
        static struct(type, kids = [], span = $mol_span.unknown) {
            if (/[ \n\t\\]/.test(type)) {
                $$.$mol_fail(span.error(`Wrong type ${JSON.stringify(type)}`));
            }
            return new $mol_tree2(type, '', kids, span);
        }
        struct(type, kids = []) {
            return $mol_tree2.struct(type, kids, this.span);
        }
        clone(kids, span = this.span) {
            return new $mol_tree2(this.type, this.value, kids, span);
        }
        text() {
            var values = [];
            for (var kid of this.kids) {
                if (kid.type)
                    continue;
                values.push(kid.value);
            }
            return this.value + values.join('\n');
        }
        static fromString(str, uri = 'unknown') {
            return $$.$mol_tree2_from_string(str, uri);
        }
        toString() {
            return $$.$mol_tree2_to_string(this);
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.kids.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                }).filter(Boolean);
                if (!replaced && value) {
                    sub.push(this.struct(type, []).insert(value, ...path.slice(1)));
                }
                return this.clone(sub);
            }
            else if (typeof type === 'number') {
                const sub = this.kids.slice();
                sub[type] = (sub[type] || this.list([]))
                    .insert(value, ...path.slice(1));
                return this.clone(sub.filter(Boolean));
            }
            else {
                const kids = ((this.kids.length === 0) ? [this.list([])] : this.kids)
                    .map(item => item.insert(value, ...path.slice(1)))
                    .filter(Boolean);
                return this.clone(kids);
            }
        }
        select(...path) {
            let next = [this];
            for (const type of path) {
                if (!next.length)
                    break;
                const prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.kids) {
                                if (child.type == type) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.kids.length)
                                next.push(item.kids[type]);
                            break;
                        default: next.push(...item.kids);
                    }
                }
            }
            return this.list(next);
        }
        filter(path, value) {
            const sub = this.kids.filter(item => {
                var found = item.select(...path);
                if (value === undefined) {
                    return Boolean(found.kids.length);
                }
                else {
                    return found.kids.some(child => child.value == value);
                }
            });
            return this.clone(sub);
        }
        hack(belt, context = {}) {
            return [].concat(...this.kids.map(child => {
                let handle = belt[child.type] || belt[''];
                if (!handle || handle === Object.prototype[child.type]) {
                    handle = (input, belt, context) => [
                        input.clone(input.hack(belt, context), context.span)
                    ];
                }
                try {
                    return handle(child, belt, context);
                }
                catch (error) {
                    error.message += `\n${child.clone([])}${child.span}`;
                    $mol_fail_hidden(error);
                }
            }));
        }
        error(message, Class = Error) {
            return this.span.error(`${message}\n${this.clone([])}`, Class);
        }
    }
    $.$mol_tree2 = $mol_tree2;
    class $mol_tree2_empty extends $mol_tree2 {
        constructor() {
            super('', '', [], $mol_span.unknown);
        }
    }
    $.$mol_tree2_empty = $mol_tree2_empty;
})($ || ($ = {}));
//mol/tree2/tree2.ts
;
"use strict";
var $;
(function ($) {
    class $ss_editor_node_data extends $mol_object2 {
        id() {
            return "";
        }
        value(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        type(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        child_ids(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        child_nodes(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        tree(next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_tree2_empty();
            return obj;
        }
        multiple(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        changeable(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        binded(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        data_tree(id, next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_tree2_empty();
            return obj;
        }
        data_value(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        data_type(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        data_child_ids(id, next) {
            if (next !== undefined)
                return next;
            return [];
        }
        data_child_nodes(id, next) {
            if (next !== undefined)
                return next;
            return [];
        }
        data_changeable(id, next) {
            if (next !== undefined)
                return next;
            return false;
        }
        data_multiple(id, next) {
            if (next !== undefined)
                return next;
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_data.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_data.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_data.prototype, "child_ids", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_data.prototype, "child_nodes", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_data.prototype, "tree", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_data.prototype, "multiple", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_data.prototype, "changeable", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_data.prototype, "binded", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_data.prototype, "data_tree", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_data.prototype, "data_value", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_data.prototype, "data_type", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_data.prototype, "data_child_ids", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_data.prototype, "data_child_nodes", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_data.prototype, "data_changeable", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_data.prototype, "data_multiple", null);
    $.$ss_editor_node_data = $ss_editor_node_data;
})($ || ($ = {}));
//ss/editor/node/data/-view.tree/data.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_editor_node_data extends $.$ss_editor_node_data {
            binded(next) {
                if (next === undefined) {
                    const bind_id = this.child_ids()[0];
                    const bind_type = this.data_type(bind_id);
                    return ['left', 'bi', 'right'].includes(bind_type);
                }
                if (next) {
                    const value_id = this.child_ids()[0];
                    const bind_id = $mol_guid() + ':<=';
                    this.data_value(bind_id, '<=');
                    this.data_type(bind_id, 'left');
                    const prop_name = this.value();
                    const prop_id = prop_name;
                    this.data_value(prop_id, prop_name);
                    this.data_type(prop_id, 'prop');
                    this.data_child_ids(prop_id, [value_id]);
                    this.data_child_ids(bind_id, [prop_id]);
                    this.data_child_ids(this.id(), [bind_id]);
                }
                else {
                    const bind_id = this.child_ids()[0];
                    const prop_id = this.data_child_ids(bind_id)[0];
                    const value_id = this.data_child_ids(prop_id)[0];
                    this.data_child_ids(this.id(), [value_id]);
                    this.changeable(false);
                }
                return next;
            }
        }
        __decorate([
            $mol_mem
        ], $ss_editor_node_data.prototype, "binded", null);
        $$.$ss_editor_node_data = $ss_editor_node_data;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/data/data.view.ts
;
"use strict";
var $;
(function ($) {
    class $ss_editor_node_ui_default extends $mol_view {
        id() {
            return "";
        }
        data_node() {
            const obj = new this.$.$ss_editor_node_data();
            return obj;
        }
        sub() {
            return [
                this.Self_body(),
                this.Children()
            ];
        }
        attr() {
            return {
                ...super.attr(),
                focused: this.block_focused()
            };
        }
        Block() {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        Self_body() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Block()
            ];
            obj.minimal_width = () => 32;
            return obj;
        }
        children() {
            return [];
        }
        Children() {
            const obj = new this.$.$mol_list();
            obj.rows = (next) => this.children();
            return obj;
        }
        block_focused() {
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_default.prototype, "data_node", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_default.prototype, "Block", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_default.prototype, "Self_body", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_default.prototype, "Children", null);
    $.$ss_editor_node_ui_default = $ss_editor_node_ui_default;
})($ || ($ = {}));
//ss/editor/node/ui/default/-view.tree/default.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_editor_node_ui_default extends $.$ss_editor_node_ui_default {
            block_focused() {
                return this.Block().focused();
            }
            auto() {
                this.data_node().value();
                this.data_node().type();
            }
        }
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_default.prototype, "block_focused", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_default.prototype, "auto", null);
        $$.$ss_editor_node_ui_default = $ss_editor_node_ui_default;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/default/default.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_editor_node_ui_default, {
            Children: {
                gap: $mol_gap.space,
            },
            color: 'purple',
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/default/default.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_editor_node_ui_pop extends $ss_editor_node_ui_default {
        sub() {
            return [
                this.Self_body(),
                this.Children()
            ];
        }
        Autocomplete_bubble_content() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => [
                this.Bubble_scroll(),
                this.Autocomplete_footer()
            ];
            return obj;
        }
        autocomplete() {
            return false;
        }
        data_node() {
            const obj = new this.$.$ss_editor_node_data();
            return obj;
        }
        Bubble_pane() {
            return this.Autocomplete().Bubble_pane();
        }
        options_filtered() {
            return this.Autocomplete().options_filtered();
        }
        Autocomplete() {
            const obj = new this.$.$mol_select();
            obj.no_options_message = () => "Not found";
            obj.event_select = (id, next) => this.event_select(id, next);
            obj.dictionary = () => this.select_dict();
            obj.filter_pattern = () => this.filter_pattern();
            return obj;
        }
        attr() {
            return {
                ...super.attr(),
                hovered: this.self_hovered()
            };
        }
        showed(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        test() {
            return "bottom_right";
        }
        Anchor() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Block()
            ];
            return obj;
        }
        bubble_content() {
            return [];
        }
        Bubble_content() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => this.bubble_content();
            return obj;
        }
        visible_bubble_content() {
            return [
                this.Bubble_content()
            ];
        }
        self_hovered() {
            return this.Self_body().hovered();
        }
        Self_body() {
            const obj = new this.$.$mol_pop_over();
            obj.showed = (next) => this.showed(next);
            obj.align = () => this.test();
            obj.Anchor = () => this.Anchor();
            obj.bubble_content = () => this.visible_bubble_content();
            return obj;
        }
        Children() {
            const obj = new this.$.$mol_list();
            obj.rows = (next) => this.children();
            return obj;
        }
        bubble_content_autocomplete() {
            return [
                this.Bubble_pane()
            ];
        }
        Bubble_scroll() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.bubble_content_autocomplete();
            return obj;
        }
        autocomplete_footer() {
            return [];
        }
        Autocomplete_footer() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.autocomplete_footer();
            return obj;
        }
        event_select(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        select_dict() {
            return {};
        }
        filter_pattern() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_pop.prototype, "Autocomplete_bubble_content", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_pop.prototype, "data_node", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_pop.prototype, "Autocomplete", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_pop.prototype, "showed", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_pop.prototype, "Anchor", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_pop.prototype, "Bubble_content", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_pop.prototype, "Self_body", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_pop.prototype, "Children", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_pop.prototype, "Bubble_scroll", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_pop.prototype, "Autocomplete_footer", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_ui_pop.prototype, "event_select", null);
    $.$ss_editor_node_ui_pop = $ss_editor_node_ui_pop;
})($ || ($ = {}));
//ss/editor/node/ui/pop/-view.tree/pop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_editor_node_ui_pop extends $.$ss_editor_node_ui_pop {
            autocomplete_showed() {
                return this.autocomplete() && this.data_node().value() == '';
            }
            visible_bubble_content() {
                return this.autocomplete_showed() ?
                    [this.Autocomplete_bubble_content()] :
                    this.showed() ?
                        [this.Bubble_content()] : [];
            }
            showed() {
                return (this.self_hovered() && this.block_focused())
                    || (this.autocomplete_showed() && this.block_focused());
            }
            event_select(opt, e) {
                return null;
            }
            filter_pattern() {
                return this.data_node().value();
            }
        }
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_pop.prototype, "autocomplete_showed", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_pop.prototype, "visible_bubble_content", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_pop.prototype, "showed", null);
        __decorate([
            $mol_mem_key
        ], $ss_editor_node_ui_pop.prototype, "event_select", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_pop.prototype, "filter_pattern", null);
        $$.$ss_editor_node_ui_pop = $ss_editor_node_ui_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/pop/pop.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_editor_node_ui_pop, {
            Bubble_content: {
                flex: {
                    direction: 'column',
                },
            },
            Self_body: {
                Bubble: {
                    flex: {
                        direction: 'row',
                    },
                    transition: 'none',
                },
            },
            Autocomplete_bubble_content: {
                flex: {
                    direction: 'column',
                },
            },
            Autocomplete_footer: {
                boxShadow: '0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/pop/pop.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_key extends $mol_icon {
        path() {
            return "M7,14C5.9,14 5,13.1 5,12C5,10.9 5.9,10 7,10C8.1,10 9,10.9 9,12C9,13.1 8.1,14 7,14M12.65,10C11.83,7.67 9.61,6 7,6C3.69,6 1,8.69 1,12C1,15.31 3.69,18 7,18C9.61,18 11.83,16.33 12.65,14H17V18H21V14H23V10H12.65Z";
        }
    }
    $.$mol_icon_key = $mol_icon_key;
})($ || ($ = {}));
//mol/icon/key/-view.tree/key.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_key_variant extends $mol_icon {
        path() {
            return "M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14C4.69,14 2,11.31 2,8C2,4.69 4.69,2 8,2C11.31,2 14,4.69 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5C5.9,5 5,5.9 5,7C5,8.1 5.9,9 7,9C8.1,9 9,8.1 9,7C9,5.9 8.1,5 7,5Z";
        }
    }
    $.$mol_icon_key_variant = $mol_icon_key_variant;
})($ || ($ = {}));
//mol/icon/key/variant/-view.tree/variant.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cached extends $mol_icon {
        path() {
            return "M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12";
        }
    }
    $.$mol_icon_cached = $mol_icon_cached;
})($ || ($ = {}));
//mol/icon/cached/-view.tree/cached.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//mol/icon/tick/-view.tree/tick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_box extends $mol_check {
        Icon() {
            const obj = new this.$.$mol_icon_tick();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//mol/check/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n\theight: 1rem;\n\talign-self: center;\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//mol/check/box/-css/box.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_trash_can extends $mol_icon {
        path() {
            return "M9,3V4H4V6H5V19C5,20.1 5.9,21 7,21H17C18.1,21 19,20.1 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z";
        }
    }
    $.$mol_icon_trash_can = $mol_icon_trash_can;
})($ || ($ = {}));
//mol/icon/trash/can/-view.tree/can.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_trash_can_outline extends $mol_icon {
        path() {
            return "M9,3V4H4V6H5V19C5,20.1 5.9,21 7,21H17C18.1,21 19,20.1 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z";
        }
    }
    $.$mol_icon_trash_can_outline = $mol_icon_trash_can_outline;
})($ || ($ = {}));
//mol/icon/trash/can/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//mol/icon/plus/-view.tree/plus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus_box extends $mol_icon {
        path() {
            return "M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z";
        }
    }
    $.$mol_icon_plus_box = $mol_icon_plus_box;
})($ || ($ = {}));
//mol/icon/plus/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 32;
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//mol/labeler/-view.tree/labeler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: .5rem .75rem 0;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n}\n");
})($ || ($ = {}));
//mol/labeler/-css/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_editor_node_ui_prop extends $ss_editor_node_ui_pop {
        type() {
            return this.data_node().type();
        }
        binded(next) {
            return this.data_node().binded(next);
        }
        data_node() {
            const obj = new this.$.$ss_editor_node_data();
            obj.changeable = (next) => this.changeable(next);
            obj.multiple = (next) => this.multiple(next);
            return obj;
        }
        drop_node(id) {
            return null;
        }
        unbind_prop(id) {
            return null;
        }
        autocomplete() {
            return true;
        }
        replace(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        add_object_in_list(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        position() {
            return "binded";
        }
        id() {
            return "";
        }
        sub() {
            return [
                this.Self_body(),
                this.Children()
            ];
        }
        Anchor() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.self_sub();
            return obj;
        }
        tail_ui_node_type() {
            return null;
        }
        tail_ui_node_nullable() {
            return null;
        }
        List_body() {
            return this.tail_ui_node().List_body();
        }
        List_children() {
            return this.tail_ui_node().List_children();
        }
        Dict_body() {
            return this.tail_ui_node().Dict_body();
        }
        Dict_children() {
            return this.tail_ui_node().Dict_children();
        }
        tail_ui_node() {
            const obj = new this.$.$ss_editor_node_ui();
            return obj;
        }
        bubble_content() {
            return [
                this.Changeable(),
                this.Multiple(),
                this.Drop()
            ];
        }
        Add_list_item_popover() {
            const obj = new this.$.$mol_pop_over();
            obj.Anchor = () => this.Add_list_item();
            obj.align = () => "right_top";
            obj.bubble_content = () => [
                this.Position_label()
            ];
            return obj;
        }
        attr() {
            return {
                ...super.attr(),
                tail: this.tail_ui_node_type()
            };
        }
        Self_block() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Block()
            ];
            return obj;
        }
        Icon_multiple() {
            const obj = new this.$.$mol_icon_key_variant();
            return obj;
        }
        Icon_changeable() {
            const obj = new this.$.$mol_icon_cached();
            return obj;
        }
        icons() {
            return [
                this.Icon_multiple(),
                this.Icon_changeable()
            ];
        }
        Icons() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => this.icons();
            return obj;
        }
        self_sub() {
            return [
                this.Self_block(),
                this.Icons()
            ];
        }
        changeable(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Changeable() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => "Changeable";
            obj.checked = (next) => this.changeable(next);
            return obj;
        }
        multiple(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Multiple() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => "Multiple";
            obj.checked = (next) => this.multiple(next);
            return obj;
        }
        drop(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Drop_icon() {
            const obj = new this.$.$mol_icon_trash_can_outline();
            return obj;
        }
        Drop() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.drop(next);
            obj.sub = () => [
                this.Drop_icon(),
                "Drop"
            ];
            return obj;
        }
        add_first(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Add_list_item_icon() {
            const obj = new this.$.$mol_icon_plus_box();
            return obj;
        }
        Add_list_item() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.add_first(next);
            obj.sub = () => [
                this.Add_list_item_icon(),
                "Add item"
            ];
            return obj;
        }
        pos_title(id) {
            return "";
        }
        add_in_pos(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        New_item_pos(id) {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.pos_title(id);
            obj.click = (next) => this.add_in_pos(id, next);
            return obj;
        }
        new_item_positions() {
            return [
                this.New_item_pos("1")
            ];
        }
        Position_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "In position:";
            obj.content = () => this.new_item_positions();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "data_node", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_ui_prop.prototype, "replace", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_ui_prop.prototype, "add_object_in_list", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "Anchor", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "tail_ui_node", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "Add_list_item_popover", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "Self_block", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "Icon_multiple", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "Icon_changeable", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "Icons", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "changeable", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "Changeable", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "multiple", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "Multiple", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "drop", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "Drop_icon", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "Drop", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "add_first", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "Add_list_item_icon", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "Add_list_item", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_ui_prop.prototype, "add_in_pos", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_ui_prop.prototype, "New_item_pos", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop.prototype, "Position_label", null);
    $.$ss_editor_node_ui_prop = $ss_editor_node_ui_prop;
})($ || ($ = {}));
//ss/editor/node/ui/prop/-view.tree/prop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_range2(item = index => index, size = () => Number.POSITIVE_INFINITY) {
        return new Proxy(new $mol_range2_array(), {
            get(target, field) {
                if (typeof field === 'string') {
                    if (field === 'length')
                        return size();
                    const index = Number(field);
                    if (index === Math.trunc(index))
                        return item(index);
                }
                return target[field];
            },
            set(target, field) {
                return $mol_fail(new TypeError('Lazy range is read only'));
            },
            ownKeys(target) {
                return [...Array(size())].map((v, i) => String(i)).concat('length');
            },
            getOwnPropertyDescriptor(target, field) {
                if (field === "length")
                    return {
                        value: size(),
                        writable: true,
                        enumerable: false,
                        configurable: false,
                    };
                const index = Number(field);
                if (index === Math.trunc(index))
                    return {
                        get: () => this.get(target, field, this),
                        enumerable: true,
                        configurable: true,
                    };
                return Object.getOwnPropertyDescriptor(target, field);
            }
        });
    }
    $.$mol_range2 = $mol_range2;
    class $mol_range2_array extends Array {
        concat(...tail) {
            if (tail.length === 0)
                return this;
            if (tail.length > 1) {
                let list = this;
                for (let item of tail)
                    list = list.concat(item);
                return list;
            }
            return $mol_range2(index => index < this.length ? this[index] : tail[0][index - this.length], () => this.length + tail[0].length);
        }
        filter(check, context) {
            const filtered = new $mol_range2_array();
            for (let index = 0; index < this.length; ++index) {
                const item = this[index];
                if (check.call(context, item, index, this))
                    filtered.push(item);
            }
            return filtered;
        }
        forEach(proceed, context) {
            for (let [key, value] of this.entries())
                proceed.call(context, value, key, this);
        }
        map(proceed, context) {
            return $mol_range2(index => proceed.call(context, this[index], index, this), () => this.length);
        }
        reduce(merge, result) {
            let index = 0;
            if (arguments.length === 1) {
                result = this[index++];
            }
            for (; index < this.length; ++index) {
                result = merge(result, this[index], index, this);
            }
            return result;
        }
        slice(from = 0, to = this.length) {
            return $mol_range2(index => this[from + index], () => Math.min(to, this.length) - from);
        }
        some(check, context) {
            for (let index = 0; index < this.length; ++index) {
                if (check.call(context, this[index], index, this))
                    return true;
            }
            return false;
        }
        every(check, context) {
            for (let index = 0; index < this.length; ++index) {
                if (!check.call(context, this[index], index, this))
                    return false;
            }
            return true;
        }
    }
    $.$mol_range2_array = $mol_range2_array;
})($ || ($ = {}));
//mol/range2/range2.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_editor_node_ui_prop extends $.$ss_editor_node_ui_prop {
            changeable(next) {
                if (next === undefined)
                    return this.data_node().changeable();
                return this.data_node().changeable(next);
            }
            multiple(next) {
                if (next === undefined)
                    return this.data_node().multiple();
                return this.data_node().multiple(next);
            }
            icons() {
                return [
                    ...this.multiple() ? [this.Icon_multiple()] : [],
                    ...this.changeable() ? [this.Icon_changeable()] : [],
                ];
            }
            tail_ui_node_type() {
                return this.tail_ui_node_nullable()?.type() || null;
            }
            tail_ui_node_nullable() {
                if (this.position() == 'binded')
                    return null;
                let ui_node = this.children()[0];
                while (ui_node) {
                    switch (ui_node.data_node().type()) {
                        case 'list':
                        case 'dict':
                            return ui_node;
                        case 'object':
                            return null;
                    }
                    ui_node = ui_node.children()[0];
                }
                return null;
            }
            tail_ui_node() {
                if (this.tail_ui_node_type() != '')
                    return this.tail_ui_node_nullable();
                return super.tail_ui_node();
            }
            self_sub() {
                return [
                    this.Self_block(),
                    ...this.icons().length > 0 ? [this.Icons()] : [],
                    ...this.tail_ui_node_type() == 'list' ? [this.Children(), this.List_body()] :
                        this.tail_ui_node_type() == 'dict' ? [this.Children(), this.Dict_body()] : []
                ];
            }
            sub() {
                return [
                    this.Self_body(),
                    ...this.tail_ui_node_type() == 'list' ? [this.List_children()] :
                        this.tail_ui_node_type() == 'dict' ? [this.Dict_children()] :
                            this.children().length > 0 ? [this.Children()] : []
                ];
            }
            bubble_content() {
                return [
                    ...this.children()[0]?.type() == 'list' ? [this.Add_list_item_popover()] : [],
                    ...super.bubble_content()
                ];
            }
            new_item_positions() {
                const list_children = this.children()[0].children();
                return $mol_range2().slice(1, list_children.length + 2)
                    .map(num => this.New_item_pos(num));
            }
            pos_title(i) {
                return String(i);
            }
            drop() {
                if (this.position() == 'binded') {
                    this.unbind_prop(this.id());
                    return;
                }
                this.drop_node(this.id());
            }
            add_first() {
                const list_ui_id = this.children()[0].id();
                this.add_object_in_list(list_ui_id, 0);
            }
            add_in_pos(pos) {
                const list_ui_id = this.children()[0].id();
                this.add_object_in_list(list_ui_id, Number(pos) - 1);
            }
        }
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop.prototype, "changeable", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop.prototype, "multiple", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop.prototype, "icons", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop.prototype, "tail_ui_node_type", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop.prototype, "tail_ui_node_nullable", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop.prototype, "tail_ui_node", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop.prototype, "self_sub", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop.prototype, "bubble_content", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop.prototype, "new_item_positions", null);
        __decorate([
            $mol_action
        ], $ss_editor_node_ui_prop.prototype, "drop", null);
        __decorate([
            $mol_action
        ], $ss_editor_node_ui_prop.prototype, "add_first", null);
        __decorate([
            $mol_action
        ], $ss_editor_node_ui_prop.prototype, "add_in_pos", null);
        $$.$ss_editor_node_ui_prop = $ss_editor_node_ui_prop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/prop/prop.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("ss/editor/node/ui/prop/prop.view.css", "[ss_editor_node_ui_prop] > [ss_editor_node_ui_prop_self_body] {\n\tcolor: var(--mol_theme_text);\n}\n\n[ss_editor_node_ui_prop][tail=\"list\"],\n[ss_editor_node_ui_prop][tail=\"dict\"] {\n\tflex-direction: column;\n\t/* flex-wrap: wrap; */\n\t/* width: min-content; */\n}\n");
})($ || ($ = {}));
//ss/editor/node/ui/prop/-css/prop.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_editor_node_ui_prop, {
            flex: {
                direction: 'row'
            },
            Position_label: {
                Content: {
                    padding: 0,
                },
            },
            Anchor: {
                align: {
                    self: 'flex-start'
                },
            },
            Add_list_item_popover: {
                width: 'fit-content',
                flex: {
                    grow: 0,
                },
            },
            Icons: {
                color: $mol_theme.shade,
                opacity: .6,
            },
            Drop: {
                color: $mol_theme.shade,
                flex: {
                    grow: 1
                },
            },
            Self_body: {
                align: {
                    self: 'flex-start',
                },
            },
            Children: {
                padding: {
                    left: $mol_gap.space,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/prop/prop.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_list extends $mol_view {
        Option(id) {
            const obj = new this.$.$mol_check();
            obj.checked = (next) => this.option_checked(id, next);
            obj.label = () => this.option_label(id);
            obj.enabled = () => this.option_enabled(id);
            obj.hint = () => this.option_hint(id);
            obj.minimal_height = () => 24;
            return obj;
        }
        options() {
            return {};
        }
        keys() {
            return [];
        }
        sub() {
            return this.items();
        }
        option_checked(id, next) {
            if (next !== undefined)
                return next;
            return false;
        }
        option_title(id) {
            return "";
        }
        option_label(id) {
            return [
                this.option_title(id)
            ];
        }
        enabled() {
            return true;
        }
        option_enabled(id) {
            return this.enabled();
        }
        option_hint(id) {
            return "";
        }
        items() {
            return [];
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_check_list.prototype, "Option", null);
    __decorate([
        $mol_mem_key
    ], $mol_check_list.prototype, "option_checked", null);
    $.$mol_check_list = $mol_check_list;
})($ || ($ = {}));
//mol/check/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_list extends $.$mol_check_list {
            options() {
                return {};
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key] || key;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "items", null);
        $$.$mol_check_list = $mol_check_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"]) {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"][disabled]) {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//mol/check/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_switch extends $mol_check_list {
        value(next) {
            if (next !== undefined)
                return next;
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_switch.prototype, "value", null);
    $.$mol_switch = $mol_switch;
})($ || ($ = {}));
//mol/switch/-view.tree/switch.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//mol/state/session/session.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $mol_state_session.value(`${this}.value()`, next) ?? '';
            }
            option_checked(key, next) {
                if (next === undefined)
                    return this.value() == key;
                this.value(next ? key : '');
                return next;
            }
        }
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/switch/switch.view.ts
;
"use strict";
var $;
(function ($) {
    class $ss_editor_node_ui_prop_sub extends $ss_editor_node_ui_prop {
        data_node_parent() {
            const obj = new this.$.$ss_editor_node_data();
            return obj;
        }
        props_of(id) {
            return [];
        }
        set_subprop_tree(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        position() {
            return "sub";
        }
        bubble_content() {
            return [
                this.Bind_popover(),
                this.Changeable(),
                this.Drop()
            ];
        }
        autocomplete_footer() {
            return [
                this.Drop()
            ];
        }
        attr() {
            return {
                ...super.attr(),
                valid: this.valid()
            };
        }
        Bind_popover() {
            const obj = new this.$.$mol_pop_over();
            obj.Anchor = () => this.Bind();
            obj.align = () => "right_center";
            obj.bubble_content = () => [
                this.Switch_bind()
            ];
            return obj;
        }
        valid() {
            return true;
        }
        bind(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Bind() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => "Bind";
            obj.checked = (next) => this.bind(next);
            return obj;
        }
        bind_value(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Switch_bind() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.bind_value(next);
            obj.options = () => ({
                left: "⟵",
                bi: "⟷",
                right: "⟶"
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop_sub.prototype, "data_node_parent", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_ui_prop_sub.prototype, "set_subprop_tree", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop_sub.prototype, "Bind_popover", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop_sub.prototype, "bind", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop_sub.prototype, "Bind", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop_sub.prototype, "bind_value", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_prop_sub.prototype, "Switch_bind", null);
    $.$ss_editor_node_ui_prop_sub = $ss_editor_node_ui_prop_sub;
})($ || ($ = {}));
//ss/editor/node/ui/prop/sub/-view.tree/sub.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree2_error extends Error {
        spans;
        constructor(message, spans) {
            super(message);
            this.spans = spans;
        }
        toJSON() {
            return {
                message: this.message,
                spans: this.spans
            };
        }
    }
    $.$mol_view_tree2_error = $mol_view_tree2_error;
    class $mol_view_tree2_error_suggestions {
        suggestions;
        constructor(suggestions) {
            this.suggestions = suggestions;
        }
        toString() {
            return this.suggestions.map(suggestion => `\`${suggestion}\``).join(', ');
        }
        toJSON() {
            return this.suggestions;
        }
    }
    $.$mol_view_tree2_error_suggestions = $mol_view_tree2_error_suggestions;
    function $mol_view_tree2_error_str(strings, ...parts) {
        const spans = [];
        for (const part of parts) {
            if (part instanceof $mol_span)
                spans.push(part);
            if (Array.isArray(part) && part.length > 0 && part[0] instanceof $mol_span)
                spans.push(...part);
        }
        return new $mol_view_tree2_error(join(strings, parts), spans);
    }
    $.$mol_view_tree2_error_str = $mol_view_tree2_error_str;
    function join(strings, objects) {
        let result = '';
        let obj_pos = 0;
        let obj_len = objects.length;
        for (const str of strings) {
            result += str;
            if (obj_pos < obj_len) {
                const obj = objects[obj_pos++];
                if (Array.isArray(obj))
                    result += obj.map(item => `\`${item}\``).join(', ');
                else
                    result += `\`${String(obj)}\``;
            }
        }
        return result;
    }
})($ || ($ = {}));
//mol/view/tree2/error.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_child(tree) {
        if (tree.kids.length === 0) {
            return this.$mol_fail($mol_view_tree2_error_str `Required one child at ${tree.span}`);
        }
        if (tree.kids.length > 1) {
            return this.$mol_fail($mol_view_tree2_error_str `Should be only one child at ${tree.span}`);
        }
        return tree.kids[0];
    }
    $.$mol_view_tree2_child = $mol_view_tree2_child;
})($ || ($ = {}));
//mol/view/tree2/child.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_classes(defs) {
        return defs.clone(defs.hack({
            '-': () => []
        }));
    }
    $.$mol_view_tree2_classes = $mol_view_tree2_classes;
})($ || ($ = {}));
//mol/view/tree2/classes.ts
;
"use strict";
var $;
(function ($_1) {
    class $mol_view_tree2_context extends $mol_object2 {
        parents;
        locales;
        methods;
        types;
        added_nodes;
        array;
        constructor($, parents, locales, methods, types = true, added_nodes = new Map(), array) {
            super();
            this.parents = parents;
            this.locales = locales;
            this.methods = methods;
            this.types = types;
            this.added_nodes = added_nodes;
            this.array = array;
            this.$ = $;
        }
        clone(prefixes, array) {
            return new this.$.$mol_view_tree2_context(this.$, prefixes, this.locales, this.methods, this.types, this.added_nodes, array);
        }
        parent(prefix) {
            const parents = this.parents.slice();
            parents.push(prefix);
            return this.clone(parents, this.array);
        }
        root() {
            return this.clone(this.parents.slice(0, 1));
        }
        locale_disable(array) {
            if (this.array)
                return this;
            return this.clone(this.parents, array);
        }
        get_method({ name, src, key, next }) {
            const prev = this.added_nodes.get(name.value);
            if (!prev)
                return;
            if ((prev.key && !key) || (!prev.key && key) || (prev.next && !next) || (!prev.next && next))
                return this.$.$mol_fail($mol_view_tree2_error_str `Method ${src.type} at ${src.span} is not same as ${prev.src.type} at ${prev.src.span}`);
            const current_default = src.kids.length > 0 ? src.kids[0] : undefined;
            const prev_default = prev.src.kids.length > 0 ? prev.src.kids[0] : undefined;
            if (prev_default?.toString() !== current_default?.toString())
                return this.$.$mol_fail($mol_view_tree2_error_str `Method ${name.value} at ${current_default?.span ?? name.span} already defined with another default value at ${prev_default?.span ?? prev.name.span}`);
            return prev;
        }
        check_scope_vars({ name, key, next }) {
            let finded_key;
            let finded_next;
            const parents = this.parents;
            for (let i = 1; i < parents.length; i++) {
                const parent = parents[i];
                if (next && parent.next)
                    finded_next = parent.next;
            }
            if (next && !finded_next)
                return this.$.$mol_fail($mol_view_tree2_error_str `Next ${next.value} at ${next.span} not found at ${this.parents.map(parent => parent.src.span)}`);
            const first_method = parents.length > 1 ? parents[1] : undefined;
            if (name.value === first_method?.name.value)
                return this.$.$mol_fail($mol_view_tree2_error_str `Method ${name.value} at ${name.span} already defined at ${first_method.name.span}`);
        }
        index(owner) {
            this.added_nodes.set(owner.name.value, owner);
            const index = this.methods.length;
            return index;
        }
        method(index, method) {
            this.methods.push(...method);
        }
        locale_nodes = new Map();
        locale(operator) {
            const parents = this.parents;
            const val = operator.kids.length === 1 ? operator.kids[0] : undefined;
            if (!val)
                return this.$.$mol_fail($mol_view_tree2_error_str `Need a one child at ${operator.span}, use \`some @ \\localized value\``);
            if (this.array)
                return this.$.$mol_fail($mol_view_tree2_error_str `Can\'t use \`@\` at ${operator.span} inside array at ${this.array.span}`);
            let key = '';
            const body = [];
            const last = parents.length > 0 ? parents[parents.length - 1] : undefined;
            for (const parent of parents) {
                body.push(parent.name);
                key += parent.name.value;
                if (parent === last)
                    break;
                body.push(parent.name.data('_'));
                key += '_';
            }
            const prev = this.locale_nodes.get(key);
            if (prev)
                return this.$.$mol_fail($mol_view_tree2_error_str `Locale key \`${key}\` at ${operator.span} conflicts with same at ${prev.span}`);
            this.locale_nodes.set(key, val);
            this.locales[key] = val.text();
            return operator.struct('line', body);
        }
    }
    $_1.$mol_view_tree2_context = $mol_view_tree2_context;
})($ || ($ = {}));
//mol/view/tree2/context.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_normalize(defs) {
        return defs.clone($mol_view_tree2_classes(defs).kids.map(cl => cl.clone([
            this.$mol_view_tree2_class_super(cl).clone(this.$mol_view_tree2_class_props(cl))
        ])));
    }
    $.$mol_view_tree2_normalize = $mol_view_tree2_normalize;
})($ || ($ = {}));
//mol/view/tree2/normalize.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_class_super(klass) {
        if (!class_regex.test(klass.type))
            return this.$mol_fail(err `Wrong class name at ${klass.span}`);
        const superclass = klass.kids.length === 1 ? klass.kids[0] : undefined;
        if (!superclass)
            return this.$mol_fail(err `No super class at ${klass.span}`);
        if (!class_regex.test(superclass.type))
            return this.$mol_fail(err `Wrong super class name ${JSON.stringify(superclass.type).replace(/(^"|"$)/g, "")} at ${superclass.span}`);
        return superclass;
    }
    $.$mol_view_tree2_class_super = $mol_view_tree2_class_super;
    const class_regex = /^[$A-Z]\w+$/;
})($ || ($ = {}));
//mol/view/tree2/class/super.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_class_props(klass) {
        let props = this.$mol_view_tree2_class_super(klass);
        props = props.clone(props.hack({
            '': (node, belt) => {
                const normal = node.type.replace(/!\w+/, '*');
                if (node.type === normal)
                    return [node.clone(node.hack(belt))];
                return [node.struct(normal, node.hack(belt))];
            }
        }));
        const props_inner = [];
        const props_root = props.hack({
            '<=': (operator, belt) => {
                const prop = this.$mol_view_tree2_child(operator);
                const defs = prop.hack(belt);
                if (defs.length)
                    props_inner.push(prop.clone(defs));
                return [operator.clone([prop.clone([])])];
            },
            '<=>': (operator, belt) => {
                const prop = this.$mol_view_tree2_child(operator);
                const defs = prop.hack(belt);
                if (defs.length)
                    props_inner.push(prop.clone(defs));
                return [operator.clone([prop.clone([])])];
            },
        });
        return [...props_root, ...props_inner];
    }
    $.$mol_view_tree2_class_props = $mol_view_tree2_class_props;
})($ || ($ = {}));
//mol/view/tree2/class/props.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_prop_split(src) {
        const prop_name = src.type;
        let key_pos = prop_name.indexOf('*');
        let next_pos = prop_name.indexOf('?');
        let next_pos_orig = next_pos;
        if (next_pos === -1)
            next_pos = prop_name.length;
        const name_end = (key_pos === -1) ? next_pos : key_pos;
        if (key_pos > next_pos)
            return this.$mol_fail(err `Index argument must be before next argument at ${src.span}, use ${example1}`);
        const name = prop_name.substring(0, name_end);
        const key = key_pos < 0 ? '' : prop_name.substring(key_pos + 1, next_pos);
        const next = prop_name.substring(next_pos + 1);
        if ((key && !regular_regex.test(key))
            || (next && !regular_regex.test(next)))
            return this.$mol_fail(err `Only regular chars and digits allowed ${key} ${next} at ${src.span}, use ${example2}`);
        return {
            src,
            name: $mol_tree2.data(name, [], src.span.slice(0, name.length)),
            key: key_pos >= 0 ? $mol_tree2.data(key ? JSON.stringify(key) : 'id', [], src.span.slice(key_pos, key_pos + key.length)) : undefined,
            next: next_pos_orig >= 0 ? $mol_tree2.data(next || 'next', [], src.span.slice(next_pos, next_pos + next.length)) : undefined
        };
    }
    $.$mol_view_tree2_prop_split = $mol_view_tree2_prop_split;
    const regular_regex = /^\w+$/;
    const example1 = new $mol_view_tree2_error_suggestions([
        'having!key?next <= owner!key?next'
    ]);
    const example2 = new $mol_view_tree2_error_suggestions([
        'having#',
        'having#key',
        'having#key?next',
        'having',
    ]);
})($ || ($ = {}));
//mol/view/tree2/prop/split.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_prop_name(prop) {
        return this.$mol_view_tree2_prop_split(prop).name.value;
    }
    $.$mol_view_tree2_prop_name = $mol_view_tree2_prop_name;
    function $mol_view_tree2_prop_key(prop) {
        return this.$mol_view_tree2_prop_split(prop).key?.value;
    }
    $.$mol_view_tree2_prop_key = $mol_view_tree2_prop_key;
    function $mol_view_tree2_prop_next(prop) {
        return this.$mol_view_tree2_prop_split(prop).next?.value;
    }
    $.$mol_view_tree2_prop_next = $mol_view_tree2_prop_next;
})($ || ($ = {}));
//mol/view/tree2/prop/prop.ts
;
"use strict";
var $;
(function ($) {
    const regular_regex = /^\w+$/;
    function $mol_view_tree2_prop_quote(name) {
        if (regular_regex.test(name.value))
            return name;
        return name.data(JSON.stringify(name.value));
    }
    $.$mol_view_tree2_prop_quote = $mol_view_tree2_prop_quote;
})($ || ($ = {}));
//mol/view/tree2/prop/quote.ts
;
"use strict";
var $;
(function ($) {
    const { begin, end, latin_only: letter, optional, repeat_greedy } = $mol_regexp;
    $.$mol_view_tree2_prop_signature = $mol_regexp.from([
        begin,
        { name: repeat_greedy(letter, 1) },
        { key: optional(['*', repeat_greedy(letter, 0)]) },
        { next: optional(['?', repeat_greedy(letter, 0)]) },
        end,
    ]);
})($ || ($ = {}));
//mol/view/tree2/prop/signature.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_editor_node_ui_prop_sub extends $.$ss_editor_node_ui_prop_sub {
            bind(next) {
                if (next === undefined) {
                    return this.binded();
                }
                return this.binded(next) ?? false;
            }
            bind_value(next) {
                if (next === undefined) {
                    const kid = this.data_node().child_nodes()[0];
                    return kid.type();
                }
                if (!this.bind())
                    this.bind(true);
                const kid = this.data_node().child_nodes()[0];
                kid.type(next);
                switch (next) {
                    case 'left':
                        kid.value('<=');
                        break;
                    case 'right':
                        kid.value('<=');
                        break;
                    case 'bi':
                        kid.value('<=');
                        kid.child_nodes()[0].changeable(true);
                        this.changeable(true);
                        break;
                    default:
                        this.bind(false);
                        break;
                }
                return next ?? '';
            }
            bubble_content() {
                return [
                    ...this.children()[0]?.type() == 'list' ? [this.Add_list_item_popover()] : [],
                    ...this.children().length > 0 ? [this.Bind_popover()] : [],
                    ...this.bind() ? [this.Changeable()] : [],
                    this.Drop(),
                ];
            }
            valid() {
                return this.options_filtered().includes(this.data_node().value());
            }
            autocomplete_showed() {
                return !this.valid();
            }
            select_value(next) {
                return this.data_node().value();
            }
            props_of_class() {
                const class_name = this.data_node_parent().value();
                return this.props_of('$' + class_name);
            }
            select_dict() {
                const overridden_props = this.data_node_parent().child_nodes().map(node => node.value());
                const dict = {};
                this.props_of_class().forEach(tree => {
                    const prop_name = this.$.$mol_view_tree2_prop_name(tree);
                    if (overridden_props.includes(prop_name) && this.data_node().value() != prop_name)
                        return;
                    dict[prop_name] = prop_name;
                });
                return dict;
            }
            event_select(selected) {
                const prop_tree = this.props_of_class().find(tree => this.$.$mol_view_tree2_prop_name(tree) == selected);
                this.set_subprop_tree(this.id(), prop_tree);
            }
        }
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop_sub.prototype, "bind", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop_sub.prototype, "bind_value", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop_sub.prototype, "bubble_content", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop_sub.prototype, "valid", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop_sub.prototype, "autocomplete_showed", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop_sub.prototype, "props_of_class", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop_sub.prototype, "select_dict", null);
        $$.$ss_editor_node_ui_prop_sub = $ss_editor_node_ui_prop_sub;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/prop/sub/sub.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("ss/editor/node/ui/prop/sub/sub.view.css", "[ss_editor_node_ui_prop_sub] > [ss_editor_node_ui_prop_sub_self_body] {\n\tcolor: red;\n}\n\n[ss_editor_node_ui_prop_sub][valid=\"true\"] > [ss_editor_node_ui_prop_sub_self_body] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//ss/editor/node/ui/prop/sub/-css/sub.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_editor_node_ui_prop_sub, {
            Anchor: {
                flex: {
                    direction: 'row'
                },
                align: {
                    self: 'flex-start'
                },
            },
            Bind_popover: {
                width: 'min-content',
                flex: {
                    grow: 0,
                },
            },
            Icons: {
                color: $mol_theme.shade,
                opacity: .6,
            },
            Self_body: {
                align: {
                    self: 'flex-start',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/prop/sub/sub.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_editor_node_ui_prop_root extends $ss_editor_node_ui_prop_sub {
        position() {
            return "root";
        }
    }
    $.$ss_editor_node_ui_prop_root = $ss_editor_node_ui_prop_root;
})($ || ($ = {}));
//ss/editor/node/ui/prop/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_editor_node_ui_prop_root extends $.$ss_editor_node_ui_prop_root {
            bubble_content() {
                return [
                    ...this.children()[0]?.type() == 'list' ? [this.Add_list_item_popover()] : [],
                    ...this.bind() ? [this.Changeable()] : [],
                    this.Drop(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_prop_root.prototype, "bubble_content", null);
        $$.$ss_editor_node_ui_prop_root = $ss_editor_node_ui_prop_root;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/prop/root/root.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("ss/editor/node/ui/prop/root/root.view.css", "[ss_editor_node_ui_prop_root] > [ss_editor_node_ui_prop_root_self_body] {\n\tcolor: red;\n}\n\n[ss_editor_node_ui_prop_root][valid=\"true\"] > [ss_editor_node_ui_prop_root_self_body] {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//ss/editor/node/ui/prop/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_editor_node_ui_prop_root, {
            flex: {
                direction: 'row'
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/prop/root/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_find_replace extends $mol_icon {
        path() {
            return "M11,6C12.38,6 13.63,6.56 14.54,7.46L12,10H18V4L15.95,6.05C14.68,4.78 12.93,4 11,4C7.47,4 4.57,6.61 4.08,10H6.1C6.56,7.72 8.58,6 11,6M16.64,15.14C17.3,14.24 17.76,13.17 17.92,12H15.9C15.44,14.28 13.42,16 11,16C9.62,16 8.37,15.44 7.46,14.54L10,12H4V18L6.05,15.95C7.32,17.22 9.07,18 11,18C12.55,18 14,17.5 15.14,16.64L20,21.5L21.5,20L16.64,15.14Z";
        }
    }
    $.$mol_icon_find_replace = $mol_icon_find_replace;
})($ || ($ = {}));
//mol/icon/find/replace/-view.tree/replace.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $ss_editor_node_ui_class extends $ss_editor_node_ui_pop {
        data_node() {
            const obj = new this.$.$ss_editor_node_data();
            return obj;
        }
        tree() {
            const obj = new this.$.$mol_tree2_empty();
            return obj;
        }
        sub() {
            return [];
        }
        autocomplete() {
            return true;
        }
        class_list() {
            return [];
        }
        Anchor() {
            const obj = new this.$.$ss_editor_node_ui_class_self();
            obj.Block = () => this.Block();
            obj.valid = () => this.valid();
            return obj;
        }
        bubble_content() {
            return [
                this.Replace_class()
            ];
        }
        Block() {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        valid() {
            return true;
        }
        clear(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Replace_class_icon() {
            const obj = new this.$.$mol_icon_find_replace();
            return obj;
        }
        Replace_class() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.clear(next);
            obj.sub = () => [
                this.Replace_class_icon(),
                "Replace class"
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_class.prototype, "data_node", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_class.prototype, "tree", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_class.prototype, "Anchor", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_class.prototype, "Block", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_class.prototype, "clear", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_class.prototype, "Replace_class_icon", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_class.prototype, "Replace_class", null);
    $.$ss_editor_node_ui_class = $ss_editor_node_ui_class;
    class $ss_editor_node_ui_class_self extends $mol_view {
        sub() {
            return [
                this.Dollar(),
                this.Label()
            ];
        }
        attr() {
            return {
                ...super.attr(),
                valid: this.valid()
            };
        }
        Dollar() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => [
                "$"
            ];
            return obj;
        }
        Block() {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Block()
            ];
            return obj;
        }
        valid() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_class_self.prototype, "Dollar", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_class_self.prototype, "Block", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_class_self.prototype, "Label", null);
    $.$ss_editor_node_ui_class_self = $ss_editor_node_ui_class_self;
})($ || ($ = {}));
//ss/editor/node/ui/class/-view.tree/class.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_editor_node_ui_class extends $.$ss_editor_node_ui_class {
            valid() {
                return this.options_filtered().includes('$' + this.data_node().value());
            }
            autocomplete_showed() {
                return !this.valid();
            }
            select_dict() {
                return Object.fromEntries(this.class_list().map(cl => [cl, cl]));
            }
            event_select(class_name) {
                this.data_node().value(class_name.slice(1));
                this.Block().focus();
            }
            clear() {
                this.data_node().value('');
                this.Block().focus();
            }
        }
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_class.prototype, "valid", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_class.prototype, "autocomplete_showed", null);
        $$.$ss_editor_node_ui_class = $ss_editor_node_ui_class;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/class/class.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("ss/editor/node/ui/class/class.view.css", "[ss_editor_node_ui_class_self] {\n\tcolor: red;\n}\n\n[ss_editor_node_ui_class_self][valid=\"true\"] {\n\tcolor: var(--mol_theme_special);\n}\n");
})($ || ($ = {}));
//ss/editor/node/ui/class/-css/class.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_editor_node_ui_class, {
            Children: {
                gap: $mol_gap.space,
            },
            Replace_class: {
                color: $mol_theme.special,
            },
            Bubble_pane: {
                color: $mol_theme.special,
            },
            Autocomplete: {
                Option_row: {
                    color: $mol_theme.special,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/class/class.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_editor_node_ui_class_base extends $ss_editor_node_ui_class {
        sub() {
            return [
                this.Self_body(),
                this.Props()
            ];
        }
        root_props() {
            return [];
        }
        Props() {
            const obj = new this.$.$mol_view();
            obj.sub = (next) => this.root_props();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_class_base.prototype, "Props", null);
    $.$ss_editor_node_ui_class_base = $ss_editor_node_ui_class_base;
})($ || ($ = {}));
//ss/editor/node/ui/class/base/-view.tree/base.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_editor_node_ui_class_base, {
            Anchor: {
                fontWeight: 'bold',
            },
            Replace_class: {
                color: $mol_theme.special,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/class/base/base.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_playlist_plus extends $mol_icon {
        path() {
            return "M2,16H10V14H2M18,14V10H16V14H12V16H16V20H18V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z";
        }
    }
    $.$mol_icon_playlist_plus = $mol_icon_playlist_plus;
})($ || ($ = {}));
//mol/icon/playlist/plus/-view.tree/plus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $ss_editor_node_ui_object extends $ss_editor_node_ui_pop {
        tree() {
            const obj = new this.$.$mol_tree2_empty();
            return obj;
        }
        library_tree() {
            const obj = new this.$.$mol_tree2_empty();
            return obj;
        }
        Block_fabric(id) {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        drop_node(id) {
            return null;
        }
        drop_parent_node(id) {
            return null;
        }
        replace(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        add_subprop(id) {
            return null;
        }
        add_sibling_object_above(id) {
            return null;
        }
        autocomplete() {
            return true;
        }
        props_by_type(id) {
            return [];
        }
        data_node() {
            const obj = new this.$.$ss_editor_node_data();
            obj.multiple = (next) => this.multiple(next);
            return obj;
        }
        Class_body() {
            return this.class_ui_node().Class_body();
        }
        class_children() {
            return this.class_ui_node().children();
        }
        class_ui_node() {
            const obj = new this.$.$ss_editor_node_ui();
            return obj;
        }
        sub() {
            return [
                this.Self_body(),
                this.Props()
            ];
        }
        Anchor() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Object_label(),
                this.Class_label()
            ];
            return obj;
        }
        bubble_content() {
            return [
                this.Props_select(),
                this.Multiple(),
                this.Replace(),
                this.Drop()
            ];
        }
        autocomplete_footer() {
            return [
                this.Drop()
            ];
        }
        Props() {
            const obj = new this.$.$mol_view();
            obj.sub = (next) => this.class_children();
            return obj;
        }
        Label_block() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Block()
            ];
            return obj;
        }
        Icon_multiple() {
            const obj = new this.$.$mol_icon_key_variant();
            return obj;
        }
        icons() {
            return [
                this.Icon_multiple()
            ];
        }
        Icons() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => this.icons();
            return obj;
        }
        object_label() {
            return [
                this.Label_block(),
                this.Icons()
            ];
        }
        Object_label() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.object_label();
            return obj;
        }
        Class_label() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Class_body()
            ];
            return obj;
        }
        add_new_subprop(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Props_select_icon() {
            const obj = new this.$.$mol_icon_playlist_plus();
            return obj;
        }
        Props_select() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.add_new_subprop(next);
            obj.sub = () => [
                this.Props_select_icon(),
                "Override property"
            ];
            return obj;
        }
        multiple(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Multiple() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => "Multiple";
            obj.checked = (next) => this.multiple(next);
            return obj;
        }
        clear(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Replace_icon() {
            const obj = new this.$.$mol_icon_find_replace();
            return obj;
        }
        Replace() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => "Replace";
            obj.click = (next) => this.clear(next);
            obj.sub = () => [
                this.Replace_icon(),
                "Replace"
            ];
            return obj;
        }
        drop(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Drop_icon() {
            const obj = new this.$.$mol_icon_trash_can_outline();
            return obj;
        }
        Drop() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.drop(next);
            obj.sub = () => [
                this.Drop_icon(),
                "Drop"
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "tree", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "library_tree", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_ui_object.prototype, "Block_fabric", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_ui_object.prototype, "replace", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "data_node", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "class_ui_node", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "Anchor", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "Props", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "Label_block", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "Icon_multiple", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "Icons", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "Object_label", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "Class_label", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "add_new_subprop", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "Props_select_icon", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "Props_select", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "multiple", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "Multiple", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "clear", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "Replace_icon", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "Replace", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "drop", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "Drop_icon", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_object.prototype, "Drop", null);
    $.$ss_editor_node_ui_object = $ss_editor_node_ui_object;
})($ || ($ = {}));
//ss/editor/node/ui/object/-view.tree/object.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_editor_node_ui_object extends $.$ss_editor_node_ui_object {
            multiple(next) {
                if (next === undefined)
                    return this.data_node().multiple();
                return this.data_node().multiple(next);
            }
            icons() {
                return [
                    ...this.multiple() ? [this.Icon_multiple()] : [],
                ];
            }
            class_ui_node() {
                return this.children()[0];
            }
            object_label() {
                return [
                    this.Label_block(),
                    ...this.icons().length > 0 ? [this.Icons()] : []
                ];
            }
            type_tree() {
                return this.tree()?.kids?.[0];
            }
            clear() {
                this.data_node().value('');
            }
            select_value(next) {
                return this.data_node().value();
            }
            select_dict() {
                const dict = {};
                this.props_by_type('object').forEach(data => {
                    if (!data.value())
                        return;
                    dict[data.id()] = data.value();
                });
                return dict;
            }
            event_select(selected_data_id) {
                this.replace(this.id(), selected_data_id);
            }
            class_tree() {
                const class_name = this.type_tree().type;
                const class_tree = this.library_tree().select(class_name, null);
                const sup = class_tree.kids[0];
                return this.$.$mol_tree2.struct(class_name, [sup]);
            }
            class_tree_string() {
                return this.class_tree().toString();
            }
            drop() {
                this.drop_parent_node(this.id());
            }
            add_sibling_above() {
                this.add_sibling_object_above(this.id());
            }
            add_new_subprop() {
                this.add_subprop(this.id());
            }
        }
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_object.prototype, "multiple", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_object.prototype, "icons", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_object.prototype, "class_ui_node", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_object.prototype, "object_label", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_object.prototype, "type_tree", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_object.prototype, "select_dict", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_object.prototype, "class_tree", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_object.prototype, "class_tree_string", null);
        __decorate([
            $mol_action
        ], $ss_editor_node_ui_object.prototype, "drop", null);
        __decorate([
            $mol_action
        ], $ss_editor_node_ui_object.prototype, "add_sibling_above", null);
        __decorate([
            $mol_action
        ], $ss_editor_node_ui_object.prototype, "add_new_subprop", null);
        $$.$ss_editor_node_ui_object = $ss_editor_node_ui_object;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/object/object.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("ss/editor/node/ui/object/object.view.css", "[ss_editor_node_ui_object][hovered=\"true\"] {\n\tbackground-color: var(--mol_theme_card);\n}\n\n[ss_editor_node_ui_object_props] {\n\tborder-left: solid 1px;\n\tborder-left-color: transparent;\n}\n\n[ss_editor_node_ui_object_props] {\n\tflex-direction: column;\n}\n\n/* [ss_editor_node_ui_object]:hover > [ss_editor_node_ui_object_props] {\n\tborder-left-color: hsla( var(--mol_theme_hue), 50%, calc( 50% - 10% * var(--mol_theme_luma) ), .5 );\n} */\n");
})($ || ($ = {}));
//ss/editor/node/ui/object/-css/object.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_editor_node_ui_object, {
            gap: '.25rem',
            flex: {
                direction: 'column',
            },
            Props: {
                gap: '.25rem',
                padding: {
                    left: '1.5rem',
                },
            },
            Anchor: {
                gap: $mol_gap.block,
            },
            Self_body: {
                align: {
                    self: 'flex-start',
                },
            },
            Object_label: {
                color: $mol_theme.control,
            },
            Drop: {
                color: $mol_theme.shade,
                flex: {
                    grow: 1
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/object/object.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_editor_node_ui_component extends $ss_editor_node_ui_object {
        add_rootprop(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        bubble_content() {
            return [
                this.Props_select()
            ];
        }
        Anchor() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Component_label(),
                this.Class_label()
            ];
            return obj;
        }
        add_new_rootprop(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Props_select_icon() {
            const obj = new this.$.$mol_icon_playlist_plus();
            return obj;
        }
        Props_select() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.add_new_rootprop(next);
            obj.sub = () => [
                this.Props_select_icon(),
                "Override property"
            ];
            return obj;
        }
        Dollar() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => [
                "$"
            ];
            return obj;
        }
        Component_label() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Dollar(),
                this.Object_label()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_component.prototype, "add_rootprop", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_component.prototype, "Anchor", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_component.prototype, "add_new_rootprop", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_component.prototype, "Props_select_icon", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_component.prototype, "Props_select", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_component.prototype, "Dollar", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_component.prototype, "Component_label", null);
    $.$ss_editor_node_ui_component = $ss_editor_node_ui_component;
})($ || ($ = {}));
//ss/editor/node/ui/component/-view.tree/component.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_editor_node_ui_component extends $.$ss_editor_node_ui_component {
            Class_body() {
                return this.children()[0]?.Class_base_body();
            }
            class_children() {
                return super.class_children().map(child => {
                    if (child.type() != 'object')
                        child.type_force('prop_root');
                    return child;
                });
            }
            add_new_rootprop() {
                this.add_rootprop(this.id());
            }
        }
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_component.prototype, "Class_body", null);
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui_component.prototype, "class_children", null);
        __decorate([
            $mol_action
        ], $ss_editor_node_ui_component.prototype, "add_new_rootprop", null);
        $$.$ss_editor_node_ui_component = $ss_editor_node_ui_component;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/component/component.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_editor_node_ui_component, {
            Dollar: {
                color: $mol_theme.control,
            },
            Component_label: {
                fontWeight: 'bold',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/component/component.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_editor_node_ui extends $mol_ghost {
        id() {
            return "";
        }
        data_id() {
            return "";
        }
        type() {
            return this.data_node().type();
        }
        data_node() {
            const obj = new this.$.$ss_editor_node_data();
            return obj;
        }
        data_node_parent() {
            const obj = new this.$.$ss_editor_node_data();
            return obj;
        }
        library_tree() {
            const obj = new this.$.$mol_tree2_empty();
            return obj;
        }
        Block() {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        Block_fabric(id) {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        children() {
            return [];
        }
        Sub() {
            return this.Root();
        }
        type_force(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        variants() {
            return {
                locale: this.Locale(),
                root: this.Root(),
                value: this.Value(),
                string: this.String(),
                bool: this.Bool(),
                null: this.Null(),
                left: this.Left(),
                right: this.Right(),
                bi: this.Bi(),
                default: this.Default(),
                list: this.List(),
                dict: this.Dict(),
                key: this.Key(),
                prop: this.Prop(),
                prop_root: this.Prop_root(),
                prop_sub: this.Subprop(),
                class: this.Class(),
                class_base: this.Class_base(),
                component: this.Component(),
                object: this.Object()
            };
        }
        Locale() {
            const obj = new this.$.$ss_editor_node_ui_locale();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            return obj;
        }
        Root() {
            const obj = new this.$.$ss_editor_node_ui_root();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            return obj;
        }
        Value() {
            const obj = new this.$.$ss_editor_node_ui_value();
            obj.Block = () => this.Block();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            return obj;
        }
        String() {
            const obj = new this.$.$ss_editor_node_ui_string();
            obj.Block = () => this.Block();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            return obj;
        }
        Bool() {
            const obj = new this.$.$ss_editor_node_ui_bool();
            obj.Block = () => this.Block();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            return obj;
        }
        Null() {
            const obj = new this.$.$ss_editor_node_ui_null();
            obj.Block = () => this.Block();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            return obj;
        }
        Left() {
            const obj = new this.$.$ss_editor_node_ui_left();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            return obj;
        }
        Right() {
            const obj = new this.$.$ss_editor_node_ui_right();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            return obj;
        }
        Bi() {
            const obj = new this.$.$ss_editor_node_ui_bi();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            return obj;
        }
        Default() {
            const obj = new this.$.$ss_editor_node_ui_default();
            obj.Block = () => this.Block();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            return obj;
        }
        List_body() {
            return this.List().Self_body();
        }
        List_children() {
            return this.List().Children();
        }
        List() {
            const obj = new this.$.$ss_editor_node_ui_list();
            obj.Block = () => this.Block();
            obj.data_node = () => this.data_node();
            obj.children = () => this.children();
            obj.Block_fabric = (id) => this.Block_fabric(id);
            obj.id = () => this.id();
            return obj;
        }
        Dict_body() {
            return this.Dict().Self_body();
        }
        Dict_children() {
            return this.Dict().Children();
        }
        Dict() {
            const obj = new this.$.$ss_editor_node_ui_dict();
            obj.Block = () => this.Block();
            obj.data_node = () => this.data_node();
            obj.children = () => this.children();
            return obj;
        }
        Key() {
            const obj = new this.$.$ss_editor_node_ui_key();
            obj.Block = () => this.Block();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            return obj;
        }
        replace_prop(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        add_object_in_list(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        unbind_prop(id) {
            return null;
        }
        Prop() {
            const obj = new this.$.$ss_editor_node_ui_prop();
            obj.Block = () => this.Block();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            obj.replace = (id, next) => this.replace_prop(id);
            obj.add_object_in_list = (id, next) => this.add_object_in_list(id, next);
            obj.id = () => this.id();
            obj.unbind_prop = (id) => this.unbind_prop(id);
            return obj;
        }
        props_of(id) {
            return [];
        }
        set_subprop_tree(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Prop_root() {
            const obj = new this.$.$ss_editor_node_ui_prop_root();
            obj.Block = () => this.Block();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            obj.props_of = (id) => this.props_of(id);
            obj.data_node_parent = () => this.data_node_parent();
            obj.drop_node = (id) => this.drop_node(id);
            obj.set_subprop_tree = (id, next) => this.set_subprop_tree(id, next);
            obj.add_object_in_list = (id, next) => this.add_object_in_list(id, next);
            obj.id = () => this.id();
            return obj;
        }
        Subprop() {
            const obj = new this.$.$ss_editor_node_ui_prop_sub();
            obj.Block = () => this.Block();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            obj.props_of = (id) => this.props_of(id);
            obj.data_node_parent = () => this.data_node_parent();
            obj.drop_node = (id) => this.drop_node(id);
            obj.set_subprop_tree = (id, next) => this.set_subprop_tree(id, next);
            obj.add_object_in_list = (id, next) => this.add_object_in_list(id, next);
            obj.id = () => this.id();
            return obj;
        }
        class_list() {
            return [];
        }
        Class_body() {
            return this.Class().Self_body();
        }
        valid_class() {
            return this.Class().valid();
        }
        Class() {
            const obj = new this.$.$ss_editor_node_ui_class();
            obj.Block = () => this.Block();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            obj.class_list = () => this.class_list();
            return obj;
        }
        Class_base_body() {
            return this.Class_base().Self_body();
        }
        Class_base() {
            const obj = new this.$.$ss_editor_node_ui_class_base();
            obj.Block = () => this.Block();
            obj.children = () => this.children();
            obj.data_node = () => this.data_node();
            obj.class_list = () => this.class_list();
            return obj;
        }
        drop_node(id) {
            return null;
        }
        drop_parent_node(id) {
            return null;
        }
        add_sibling_object_above(id) {
            return null;
        }
        add_rootprop(id) {
            return null;
        }
        Component() {
            const obj = new this.$.$ss_editor_node_ui_component();
            obj.Block = () => this.Block();
            obj.children = () => this.children();
            obj.library_tree = () => this.library_tree();
            obj.data_node = () => this.data_node();
            obj.Block_fabric = (id) => this.Block_fabric(id);
            obj.drop_node = (id) => this.drop_node(id);
            obj.drop_parent_node = (id) => this.drop_parent_node(id);
            obj.add_sibling_object_above = (id) => this.add_sibling_object_above(id);
            obj.add_rootprop = (id) => this.add_rootprop(id);
            obj.id = () => this.id();
            return obj;
        }
        props_by_type(id) {
            return [];
        }
        add_subprop(id) {
            return null;
        }
        Object() {
            const obj = new this.$.$ss_editor_node_ui_object();
            obj.Block = () => this.Block();
            obj.children = () => this.children();
            obj.library_tree = () => this.library_tree();
            obj.data_node = () => this.data_node();
            obj.Block_fabric = (id) => this.Block_fabric(id);
            obj.drop_node = (id) => this.drop_node(id);
            obj.drop_parent_node = (id) => this.drop_parent_node(id);
            obj.add_sibling_object_above = (id) => this.add_sibling_object_above(id);
            obj.replace = (id, next) => this.replace_prop(id, next);
            obj.props_by_type = (id) => this.props_by_type(id);
            obj.add_subprop = (id) => this.add_subprop(id);
            obj.id = () => this.id();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "data_node", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "data_node_parent", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "library_tree", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Block", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_ui.prototype, "Block_fabric", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "type_force", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Locale", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Root", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Value", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "String", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Bool", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Null", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Left", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Right", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Bi", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Default", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "List", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Dict", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Key", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_ui.prototype, "replace_prop", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_ui.prototype, "add_object_in_list", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Prop", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_ui.prototype, "set_subprop_tree", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Prop_root", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Subprop", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Class", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Class_base", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Component", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui.prototype, "Object", null);
    $.$ss_editor_node_ui = $ss_editor_node_ui;
    class $ss_editor_node_ui_root extends $ss_editor_node_ui_default {
        sub() {
            return [
                this.Children()
            ];
        }
    }
    $.$ss_editor_node_ui_root = $ss_editor_node_ui_root;
    class $ss_editor_node_ui_locale extends $ss_editor_node_ui_default {
        sub() {
            return [
                this.Children()
            ];
        }
    }
    $.$ss_editor_node_ui_locale = $ss_editor_node_ui_locale;
    class $ss_editor_node_ui_dict extends $ss_editor_node_ui_default {
        sub() {
            return [
                this.Self_body()
            ];
        }
        Children() {
            const obj = new this.$.$mol_list();
            obj.rows = (next) => this.children();
            return obj;
        }
        Self_body() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => [
                ": dict"
            ];
            return obj;
        }
        children() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_dict.prototype, "Children", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_dict.prototype, "Self_body", null);
    $.$ss_editor_node_ui_dict = $ss_editor_node_ui_dict;
    class $ss_editor_node_ui_value extends $ss_editor_node_ui_default {
    }
    $.$ss_editor_node_ui_value = $ss_editor_node_ui_value;
    class $ss_editor_node_ui_key extends $ss_editor_node_ui_default {
        sub() {
            return [
                this.Self_body(),
                this.Delimiter(),
                this.Children()
            ];
        }
        Block() {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        Self_body() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Block()
            ];
            return obj;
        }
        Delimiter() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                ":"
            ];
            return obj;
        }
        children() {
            return [];
        }
        Children() {
            const obj = new this.$.$mol_list();
            obj.rows = (next) => this.children();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_key.prototype, "Block", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_key.prototype, "Self_body", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_key.prototype, "Delimiter", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_key.prototype, "Children", null);
    $.$ss_editor_node_ui_key = $ss_editor_node_ui_key;
    class $ss_editor_node_ui_null extends $ss_editor_node_ui_value {
        sub() {
            return [
                this.Self_body(),
                this.Noeditable()
            ];
        }
        Block() {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        Self_body() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Block()
            ];
            return obj;
        }
        Noeditable() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => [
                ": any"
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_null.prototype, "Block", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_null.prototype, "Self_body", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_null.prototype, "Noeditable", null);
    $.$ss_editor_node_ui_null = $ss_editor_node_ui_null;
    class $ss_editor_node_ui_bool extends $ss_editor_node_ui_value {
        sub() {
            return [
                this.Self_body(),
                this.Noeditable()
            ];
        }
        Block() {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        Self_body() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Block()
            ];
            return obj;
        }
        Noeditable() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => [
                ": boolean"
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_bool.prototype, "Block", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_bool.prototype, "Self_body", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_bool.prototype, "Noeditable", null);
    $.$ss_editor_node_ui_bool = $ss_editor_node_ui_bool;
    class $ss_editor_node_ui_string extends $ss_editor_node_ui_value {
        sub() {
            return [
                this.Self_body(),
                this.Noeditable()
            ];
        }
        Block() {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        Self_body() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Block()
            ];
            return obj;
        }
        Noeditable() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => [
                ": string"
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_string.prototype, "Block", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_string.prototype, "Self_body", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_string.prototype, "Noeditable", null);
    $.$ss_editor_node_ui_string = $ss_editor_node_ui_string;
    class $ss_editor_node_ui_left extends $ss_editor_node_ui_default {
        value(next) {
            return this.data_node().value(next);
        }
        data_node() {
            const obj = new this.$.$ss_editor_node_data();
            return obj;
        }
        sub() {
            return [
                this.Self_body(),
                this.Children()
            ];
        }
        Self_body() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => [
                "⟵"
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_left.prototype, "data_node", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_left.prototype, "Self_body", null);
    $.$ss_editor_node_ui_left = $ss_editor_node_ui_left;
    class $ss_editor_node_ui_left_slot extends $ss_editor_node_ui_left {
        sub() {
            return [
                this.Self_body(),
                this.Label()
            ];
        }
        Self_body() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => [
                "⟵"
            ];
            return obj;
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                "New component..."
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_left_slot.prototype, "Self_body", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_left_slot.prototype, "Label", null);
    $.$ss_editor_node_ui_left_slot = $ss_editor_node_ui_left_slot;
    class $ss_editor_node_ui_right extends $ss_editor_node_ui_default {
        value(next) {
            return this.data_node().value(next);
        }
        data_node() {
            const obj = new this.$.$ss_editor_node_data();
            return obj;
        }
        sub() {
            return [
                this.Self_body(),
                this.Children()
            ];
        }
        Self_body() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => [
                "⟶"
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_right.prototype, "data_node", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_right.prototype, "Self_body", null);
    $.$ss_editor_node_ui_right = $ss_editor_node_ui_right;
    class $ss_editor_node_ui_bi extends $ss_editor_node_ui_default {
        value(next) {
            return this.data_node().value(next);
        }
        data_node() {
            const obj = new this.$.$ss_editor_node_data();
            return obj;
        }
        sub() {
            return [
                this.Self_body(),
                this.Children()
            ];
        }
        Self_body() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => [
                "⟷"
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_bi.prototype, "data_node", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_bi.prototype, "Self_body", null);
    $.$ss_editor_node_ui_bi = $ss_editor_node_ui_bi;
})($ || ($ = {}));
//ss/editor/node/ui/-view.tree/ui.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $ss_editor_node_ui_id_build(data_id, parent_ui_id = null) {
            return [parent_ui_id, data_id];
        }
        $$.$ss_editor_node_ui_id_build = $ss_editor_node_ui_id_build;
        class $ss_editor_node_ui extends $.$ss_editor_node_ui {
            Sub() {
                return this.variants()[this.type_force() || this.type()];
            }
        }
        __decorate([
            $mol_mem
        ], $ss_editor_node_ui.prototype, "Sub", null);
        $$.$ss_editor_node_ui = $ss_editor_node_ui;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/ui.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_editor_node_ui_root, {
            padding: $mol_gap.block,
        });
        $mol_style_define($ss_editor_node_ui_dict, {
            color: $mol_theme.shade,
            Self_body: {
                padding: {
                    left: $mol_gap.block,
                    right: $mol_gap.block,
                },
            },
        });
        $mol_style_define($ss_editor_node_ui_left, {
            Self_body: {
                color: $mol_theme.shade,
                opacity: 0.6,
            },
        });
        $mol_style_define($ss_editor_node_ui_right, {
            Self_body: {
                color: $mol_theme.shade,
                opacity: 0.6,
            },
        });
        $mol_style_define($ss_editor_node_ui_bi, {
            Self_body: {
                color: $mol_theme.shade,
                opacity: 0.6,
            },
        });
        $mol_style_define($ss_editor_node_ui_value, {
            padding: {
                left: $mol_gap.space,
            },
            Self_body: {
                color: $mol_theme.shade,
                background: {
                    color: $mol_theme.back,
                },
                padding: {
                    left: $mol_gap.space,
                    right: $mol_gap.space,
                },
                border: {
                    radius: $mol_gap.space,
                },
            },
        });
        $mol_style_define($ss_editor_node_ui_key, {
            color: $mol_theme.shade,
            Self_body: {
                align: {
                    self: 'flex-start',
                },
            },
        });
        $mol_style_define($ss_editor_node_ui_dict, {
            Children: {
                flex: {
                    basis: '100%'
                },
                padding: {
                    left: $mol_gap.block,
                },
                border: {
                    left: {
                        width: '1px',
                        style: 'solid',
                        color: 'rgba(255, 255, 255, 0.2)',
                    }
                },
            },
        });
        $mol_style_define($ss_editor_node_ui_bool, {
            Noeditable: {
                display: 'none',
                opacity: 0,
            },
        });
        $mol_style_define($ss_editor_node_ui_null, {
            Noeditable: {
                display: 'none',
                opacity: 0,
            },
        });
        $mol_style_define($ss_editor_node_ui_string, {
            Noeditable: {
                display: 'none',
                opacity: 0,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/ui.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $mol_view {
        dom_name() {
            return "article";
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        tabindex() {
            return -1;
        }
        Logo() {
            return null;
        }
        title_content() {
            return [
                this.Logo(),
                this.title()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => this.title_content();
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.dom_name = () => "header";
            obj.sub = () => this.head();
            return obj;
        }
        body() {
            return [];
        }
        body_scroll_top(next) {
            return this.Body().scroll_top(next);
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "footer";
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//mol/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
                padding: $mol_gap.block,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form_field extends $mol_labeler {
        bids() {
            return [];
        }
        label() {
            return [
                this.name(),
                this.Bid()
            ];
        }
        content() {
            return [
                this.control()
            ];
        }
        name() {
            return "";
        }
        bid() {
            return "";
        }
        Bid() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.bid()
            ];
            return obj;
        }
        control() {
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//mol/form/field/-view.tree/field.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form_field extends $.$mol_form_field {
            bid() {
                return this.bids().filter(Boolean)[0] ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form_field.prototype, "bid", null);
        $$.$mol_form_field = $mol_form_field;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/field/field.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/field/field.view.css", "[mol_form_field] {\n\talign-items: stretch;\n}\n\n[mol_form_field_bid] {\n\tcolor: var(--mol_theme_focus);\n\tdisplay: inline-block;\n\ttext-shadow: 0 0;\n}\n\n[mol_form_field_content] {\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/form/field/-css/field.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//mol/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: var(--mol_gap_block);\n\tgap: var(--mol_gap_block);\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/row/-css/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form extends $mol_list {
        submit_allowed() {
            return true;
        }
        submit_blocked() {
            return false;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        rows() {
            return [
                this.Body(),
                this.Foot()
            ];
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        form_fields() {
            return [];
        }
        body() {
            return this.form_fields();
        }
        Body() {
            const obj = new this.$.$mol_list();
            obj.sub = () => this.body();
            return obj;
        }
        buttons() {
            return [];
        }
        foot() {
            return this.buttons();
        }
        Foot() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Foot", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//mol/form/-view.tree/form.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            form_fields() {
                return [...this.view_find(view => view instanceof $mol_form_field)]
                    .map(path => path[path.length - 1]);
            }
            submit_allowed() {
                return this.form_fields().every(field => !field.bid());
            }
            submit_blocked() {
                return !this.submit_allowed();
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "form_fields", null);
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "submit_allowed", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/form.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/form.view.css", "[mol_form] {\r\n\tgap: var(--mol_gap_block);\r\n}\r\n\r\n[mol_form_body] {\r\n\tgap: var(--mol_gap_block);\r\n}");
})($ || ($ = {}));
//mol/form/-css/form.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_major extends $mol_button_typed {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
//mol/button/major/-view.tree/major.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major][disabled] {\n\topacity: .5;\n\tfilter: grayscale();\n}\n");
})($ || ($ = {}));
//mol/button/major/-css/major.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_blocks_contenteditable extends $mol_view {
        Block(id) {
            return this.Blocks().Block(id);
        }
        blocks_beforeinput(next) {
            return this.Blocks().beforeinput(next);
        }
        blocks_keydown(next) {
            return this.Blocks().keydown(next);
        }
        blocks_input(next) {
            return this.Blocks().input(next);
        }
        blocks_dragenter(next) {
            return this.Blocks().dragenter(next);
        }
        blocks_drop(next) {
            return this.Blocks().drop(next);
        }
        blocks_drag(next) {
            return this.Blocks().drag(next);
        }
        blocks_dragleave(next) {
            return this.Blocks().dragleave(next);
        }
        blocks_paste(next) {
            return this.Blocks().paste(next);
        }
        blocks_cut(next) {
            return this.Blocks().cut(next);
        }
        Blocks() {
            const obj = new this.$.$ss_blocks();
            return obj;
        }
        sub() {
            return [
                this.Body()
            ];
        }
        field() {
            return {
                ...super.field(),
                contentEditable: true
            };
        }
        event() {
            return {
                ...super.event(),
                beforeinput: (next) => this.blocks_beforeinput(next),
                keydown: (next) => this.blocks_keydown(next),
                input: (next) => this.blocks_input(next),
                dragenter: (next) => this.blocks_dragenter(next),
                drop: (next) => this.blocks_drop(next),
                drag: (next) => this.blocks_drag(next),
                dragleave: (next) => this.blocks_dragleave(next),
                paste: (next) => this.blocks_paste(next),
                cut: (next) => this.blocks_cut(next)
            };
        }
        Body() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_blocks_contenteditable.prototype, "Blocks", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_contenteditable.prototype, "Body", null);
    $.$ss_blocks_contenteditable = $ss_blocks_contenteditable;
})($ || ($ = {}));
//ss/blocks/contenteditable/-view.tree/contenteditable.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $ss_editor_node_ui_list extends $ss_editor_node_ui_default {
        Block_fabric(id) {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        sub() {
            return [
                this.Self_body()
            ];
        }
        Self_body() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => [
                ": list"
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $ss_editor_node_ui_list.prototype, "Block_fabric", null);
    __decorate([
        $mol_mem
    ], $ss_editor_node_ui_list.prototype, "Self_body", null);
    $.$ss_editor_node_ui_list = $ss_editor_node_ui_list;
})($ || ($ = {}));
//ss/editor/node/ui/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("ss/editor/node/ui/list/list.view.css", "[ss_editor_node_ui_list]:hover > [ss_editor_node_ui_list_noeditable_body]{\n\tbackground-color: var(--mol_theme_card);\n}\n\n[ss_editor_node_ui_list]:hover > [ss_editor_node_ui_list_children_and_slots] > [ss_editor_node_ui_left_slot]{\n\topacity: 0.4;\n\tcolor: var(--mol_theme_control);\n}\n");
})($ || ($ = {}));
//ss/editor/node/ui/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_editor_node_ui_list, {
            color: $mol_theme.shade,
            Self_body: {
                opacity: .5,
                padding: {
                    right: $mol_gap.block,
                },
            },
            Children: {
                border: {
                    left: {
                        width: '1px',
                        style: 'solid',
                        color: 'rgba(255, 255, 255, 0.2)',
                    }
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/node/ui/list/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_editor extends $mol_scroll {
        title() {
            return "$ss_editor";
        }
        sub() {
            return [
                this.Contenteditable()
            ];
        }
        lib() {
            const obj = new this.$.$mol_tree2_empty();
            return obj;
        }
        prop_ids(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        props_by_type(id) {
            return [];
        }
        prop_norm_tree(id, next) {
            if (next !== undefined)
                return next;
            return [];
        }
        Ui_node(id) {
            const obj = new this.$.$ss_editor_node_ui();
            obj.id = () => this.id(id);
            obj.data_node = () => this.data_node_by_ui_id(id);
            obj.data_node_parent = () => this.data_node_parent_by_ui_id(id);
            obj.children = (next) => this.ui_node_children(id);
            obj.library_tree = () => this.library_tree();
            obj.Block = () => this.Ui_node_block(id);
            obj.Block_fabric = (id) => this.Block_fabric(id);
            obj.drop_node = (id) => this.drop_node(id);
            obj.unbind_prop = (id) => this.unbind_prop(id);
            obj.drop_parent_node = (id) => this.drop_parent_node(id);
            obj.add_sibling_object_above = (id) => this.add_sibling_object_above(id);
            obj.props_by_type = (id) => this.props_by_type(id);
            obj.replace_prop = (id, next) => this.replace_prop(id, next);
            obj.set_subprop_tree = (id, next) => this.set_subprop_tree(id, next);
            obj.add_subprop = (id) => this.add_subprop(id);
            obj.add_rootprop = (id) => this.add_rootprop(id);
            obj.add_object_in_list = (id, next) => this.add_object_in_list(id, next);
            obj.class_list = () => this.class_list();
            obj.props_of = (id) => this.props_of(id);
            return obj;
        }
        Data_node(id) {
            const obj = new this.$.$ss_editor_node_data();
            obj.id = () => this.id(id);
            obj.tree = (next) => this.data_tree(id);
            obj.value = (next) => this.data_value(id, next);
            obj.type = (next) => this.data_type(id, next);
            obj.child_ids = (next) => this.data_child_ids(id, next);
            obj.child_nodes = (next) => this.data_child_nodes(id, next);
            obj.changeable = (next) => this.data_changeable(id, next);
            obj.multiple = (next) => this.data_multiple(id, next);
            obj.data_tree = (id, next) => this.data_tree(id, next);
            obj.data_value = (id, next) => this.data_value(id, next);
            obj.data_type = (id, next) => this.data_type(id, next);
            obj.data_child_ids = (id, next) => this.data_child_ids(id, next);
            obj.data_child_nodes = (id, next) => this.data_child_nodes(id, next);
            obj.data_changeable = (id, next) => this.data_changeable(id, next);
            obj.data_multiple = (id, next) => this.data_multiple(id, next);
            return obj;
        }
        initial_tree_string() {
            return "$ss_editor_example $mol_page\n\ttools /\n\t\t<= Button_tools $mol_button_minor\n\t\t\ttitle \\Toolbar Button\n\tbody /\n\t\t<= Login $mol_form\n\t\t\tform_fields /\n\t\t\t\t<= Name_field $mol_form_field\n\t\t\t\t\tname <= name_label @ \\User name\n\t\t\t\t\tbid <= name_bid \\\n\t\t\t\t\tcontrol <= Name_control $mol_string\n\t\t\t\t\t\tvalue? <=> name? \\\n\t\t\t\t<= pass_field $mol_form_field\n\t\t\t\t\tname <= pass_label @ \\Pass word\n\t\t\t\t\tbid <= pass_bid \\\n\t\t\t\t\tcontrol <= Pass_control $mol_string\n\t\t\t\t\t\tvalue? <=> pass? \\\n\t\t\t\t\t\ttype \\password\n\t\t\tbuttons /\n\t\t\t\t<= Login_submit $mol_button_major\n\t\t\t\t\ttitle <= login_submit_label @ \\Submit\n\t\t\t\t\tevent_click? <=> event_submit? null\n\tfoot /\n\t\t<= Button_foot $mol_button_minor\n\t\t\ttitle \\Footer Button\n";
        }
        Ui_root_node(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Block(id) {
            return this.Contenteditable().Block(id);
        }
        Contenteditable() {
            const obj = new this.$.$ss_blocks_contenteditable();
            obj.Body = () => this.Ui_root_node();
            return obj;
        }
        id(id) {
            return "";
        }
        data_node_by_ui_id(id) {
            const obj = new this.$.$ss_editor_node_data();
            return obj;
        }
        data_node_parent_by_ui_id(id) {
            const obj = new this.$.$ss_editor_node_data();
            return obj;
        }
        ui_node_children(id, next) {
            if (next !== undefined)
                return next;
            return [];
        }
        library_tree() {
            const obj = new this.$.$mol_tree2_empty();
            return obj;
        }
        Ui_node_block(id) {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        Block_fabric(id) {
            const obj = new this.$.$ss_blocks_block();
            return obj;
        }
        drop_node(id) {
            return null;
        }
        unbind_prop(id) {
            return null;
        }
        drop_parent_node(id) {
            return null;
        }
        add_sibling_object_above(id) {
            return null;
        }
        replace_prop(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        set_subprop_tree(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        add_subprop(id) {
            return null;
        }
        add_rootprop(id) {
            return null;
        }
        add_object_in_list(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        class_list() {
            return [];
        }
        props_of(id) {
            return [];
        }
        data_tree(id, next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_tree2_empty();
            return obj;
        }
        data_value(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        data_type(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        data_child_ids(id, next) {
            if (next !== undefined)
                return next;
            return [];
        }
        data_child_nodes(id, next) {
            if (next !== undefined)
                return next;
            return [];
        }
        data_changeable(id, next) {
            if (next !== undefined)
                return next;
            return false;
        }
        data_multiple(id, next) {
            if (next !== undefined)
                return next;
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_editor.prototype, "lib", null);
    __decorate([
        $mol_mem
    ], $ss_editor.prototype, "prop_ids", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "prop_norm_tree", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "Ui_node", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "Data_node", null);
    __decorate([
        $mol_mem
    ], $ss_editor.prototype, "Ui_root_node", null);
    __decorate([
        $mol_mem
    ], $ss_editor.prototype, "Contenteditable", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "data_node_by_ui_id", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "data_node_parent_by_ui_id", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "ui_node_children", null);
    __decorate([
        $mol_mem
    ], $ss_editor.prototype, "library_tree", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "Ui_node_block", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "Block_fabric", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "replace_prop", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "set_subprop_tree", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "add_object_in_list", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "data_tree", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "data_value", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "data_type", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "data_child_ids", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "data_child_nodes", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "data_changeable", null);
    __decorate([
        $mol_mem_key
    ], $ss_editor.prototype, "data_multiple", null);
    $.$ss_editor = $ss_editor;
})($ || ($ = {}));
//ss/editor/-view.tree/editor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_editor extends $.$ss_editor {
            auto() {
                const tree = $$.$mol_tree2_from_string(this.initial_tree_string());
                this.init(tree);
            }
            add_data(tree, id, type) {
                if (['prop', 'object'].includes(type || ''))
                    return this.add_prop_data(tree, type);
                const val = tree.type?.replace('$', '') || tree.value;
                const data_id = id || $mol_guid() + ':' + val;
                this.data_value(data_id, val);
                this.data_tree(data_id, tree);
                this.data_type(data_id, type);
                return data_id;
            }
            prop_sign(type) {
                const normal = type.replace(/!\w+/, '*');
                const sign = [...normal.matchAll($mol_view_tree2_prop_signature)][0]?.groups ?? {
                    name: '',
                    key: '',
                    next: '',
                };
                return { name: sign.name, changeable: Boolean(sign.next), multiple: Boolean(sign.key) };
            }
            prop_name(type) {
                return this.prop_sign(type).name;
            }
            prop_ids(next) {
                $mol_wire_solid();
                return super.prop_ids(next);
            }
            root_props() {
                const root = this.Ui_root_node().data_node();
                const component = this.Data_node(root.child_ids()[0]);
                const base_class = this.Data_node(component.child_ids()[0]);
                const root_props = base_class.child_ids().map(id => this.Data_node(id));
                return root_props;
            }
            props_by_type(type) {
                const props = [];
                this.prop_ids().forEach(id => {
                    if (this.data_type(id) == type)
                        props.push(this.Data_node(id));
                });
                return props;
            }
            add_prop_data(tree, type) {
                const sign = this.prop_sign(tree.type);
                const id = sign.name;
                const val = sign.name;
                this.data_value(id, val);
                this.data_tree(id, tree);
                this.data_type(id, type);
                this.data_changeable(id, sign.changeable);
                this.data_multiple(id, sign.multiple);
                this.prop_ids([...this.prop_ids(), id]);
                return sign.name;
            }
            add_prop_sub_data(tree, id) {
                const sign = this.prop_sign(tree.type);
                const val = sign.name;
                const data_id = id || $mol_guid() + ':' + val;
                this.data_value(data_id, val);
                this.data_tree(data_id, tree);
                this.data_type(data_id, 'prop_sub');
                this.data_changeable(data_id, sign.changeable);
                this.data_multiple(data_id, sign.multiple);
                return data_id;
            }
            parse_prop_tree(parent_id, tree, parent_type) {
                const val = tree.type || tree.value;
                const parent_val = this.data_value(parent_id);
                if (parent_val == '=>') {
                    const id = this.prop_name(val);
                    this.add_data(tree, id, 'prop');
                    return id;
                }
                else if (parent_val == '<=' || parent_val == '<=>') {
                    const id = this.prop_name(val);
                    const data = this.data_value(id);
                    if (!data)
                        this.add_data(tree, id, 'prop');
                    return id;
                }
                let id = $mol_guid() + ':' + val;
                let data_type = 'default';
                if (parent_type == 'class')
                    data_type = 'prop_sub';
                if (parent_type == 'prop')
                    data_type = 'value';
                if (parent_type == 'prop_sub')
                    data_type = 'value';
                if (parent_type == 'value')
                    data_type = 'value';
                if (parent_type == 'list')
                    data_type = 'value';
                if (val == 'null')
                    data_type = 'null';
                if (parent_type == 'dict')
                    data_type = 'key';
                if (val == '*')
                    data_type = 'dict';
                if (val?.[0] == '/')
                    data_type = 'list';
                if (val == '<=')
                    data_type = 'left';
                if (val == '=>')
                    data_type = 'right';
                if (val == '<=>')
                    data_type = 'bi';
                if (val == '@')
                    data_type = 'locale';
                if (val == 'false')
                    data_type = 'bool';
                if (val == 'true')
                    data_type = 'bool';
                if (val[0] == '$')
                    data_type = 'class';
                if (tree.value)
                    data_type = 'string';
                if (data_type == 'prop_sub')
                    id = this.add_prop_sub_data(tree);
                else
                    this.add_data(tree, id, data_type);
                this.data_child_ids(id, tree.kids.map(t => this.parse_prop_tree(id, t, data_type)));
                return id;
            }
            add_prop_from_tree(tree) {
                const id = this.prop_name(tree.type);
                const prop_type = tree.kids[0];
                const is_object = prop_type.type?.[0] == '$';
                const data_type = is_object ? 'object' : 'prop';
                this.add_data(tree, id, data_type);
                const subprop_data_id = this.parse_prop_tree(id, prop_type, data_type);
                this.data_child_ids(id, [subprop_data_id]);
            }
            add_norm_subprop(obj_name, subprop_tree) {
                const id = obj_name;
                const class_data_id = this.data_child_ids(id)[0];
                this.data_child_ids(class_data_id, [
                    this.parse_prop_tree(class_data_id, subprop_tree, 'class'),
                    ...this.data_child_ids(class_data_id)
                ]);
            }
            data_id_to_prop_name() {
            }
            prop_name_to_data_id() {
            }
            init(tree) {
                const props = this.$.$mol_view_tree2_normalize(tree).kids[0].kids[0].kids;
                const component_tree = tree.kids[0];
                const component_name = tree.kids[0].type;
                const baseclass_tree = tree.kids[0].kids[0];
                const baseclass_name = tree.kids[0].kids[0].type;
                const root_props = tree.kids[0].kids[0].kids;
                const root_id = 'root_id';
                this.data_value(root_id, 'root');
                this.data_type(root_id, 'root');
                const component_id = this.add_data(component_tree, undefined, 'component');
                this.data_child_ids(root_id, [component_id]);
                const baseclass_id = this.add_data(baseclass_tree, undefined, 'class_base');
                this.data_child_ids(component_id, [baseclass_id]);
                props.forEach(tree => this.add_prop_from_tree(tree));
                const root_props_ids = root_props.map(tree => this.prop_name(tree.type))
                    .filter(id => id && id !== '-');
                this.data_child_ids(baseclass_id, root_props_ids);
                root_props_ids.forEach(id => {
                    if (this.data_type(id) !== 'object') {
                        this.data_type(id, 'prop');
                    }
                });
                const ui_root = this.Ui_node($ss_editor_node_ui_id_build(root_id));
                this.Ui_root_node(ui_root);
            }
            Ui_node_id_by_pos(pos, next) {
                if (next !== undefined)
                    return next;
                return null;
            }
            data_id_from_ui_id(ui_id) {
                return ui_id[1];
            }
            data_tree_from_ui_id(ui_id) {
                const data_id = this.data_id_from_ui_id(ui_id);
                return this.data_tree(data_id);
            }
            data_child_nodes(data_id) {
                return this.data_child_ids(data_id).map(id => this.Data_node(id));
            }
            data_node_by_ui_id(ui_id) {
                const data_id = this.data_id_from_ui_id(ui_id);
                return this.Data_node(data_id);
            }
            data_node_parent_by_ui_id(ui_id) {
                const parent_data_id = ui_id[0]?.[1];
                return this.Data_node(parent_data_id);
            }
            ui_node_type(ui_id) {
                const data_id = this.data_id_from_ui_id(ui_id);
                return this.data_type(data_id) || 'default';
            }
            id(id) {
                return id;
            }
            Ui_node_block(ui_id) {
                const block = this.Block(ui_id);
                const data_id = this.data_id_from_ui_id(ui_id);
                block.value_changed = next => this.data_value(data_id, next);
                block.update_value(this.data_value(data_id));
                block.placeholder = () => this.data_type(data_id);
                return block;
            }
            Block_fabric(id) {
                const block = this.Block(id);
                return block;
            }
            ui_node_children(ui_id, next) {
                if (next !== undefined)
                    return next;
                return this.data_child_ids(ui_id[1]).map((data_id, index) => {
                    const child = this.Ui_node($ss_editor_node_ui_id_build(data_id, ui_id));
                    return child;
                });
            }
            drop_node(ui_id) {
                const data_id = this.data_id_from_ui_id(ui_id);
                const parent_data_id = ui_id[0]?.[1];
                if (parent_data_id) {
                    this.data_child_ids(parent_data_id, [...this.data_child_ids(parent_data_id).filter(id => id !== data_id)]);
                }
            }
            replace_prop(from_prop_ui_id, to_prop_data_id) {
                const parent_data_id = from_prop_ui_id[0]?.[1];
                if (parent_data_id) {
                    this.data_child_ids(parent_data_id, [to_prop_data_id]);
                }
            }
            drop_parent_node(ui_id) {
                const parent_data_id = ui_id[0]?.[1];
                const grand_parent_data_id = ui_id[0]?.[0]?.[1];
                if (grand_parent_data_id) {
                    this.data_child_ids(grand_parent_data_id, [...this.data_child_ids(grand_parent_data_id).filter(id => id !== parent_data_id)]);
                }
            }
            unbind_prop(ui_id) {
                const grand_parent_data_id = ui_id[0]?.[0]?.[1];
                const subprop = this.Data_node(grand_parent_data_id);
                subprop.binded(false);
            }
            add_sibling_object_above(ui_id) {
                const parent_data_id = ui_id[0]?.[1];
                const grand_parent_data_id = ui_id[0]?.[0]?.[1];
                if (grand_parent_data_id) {
                    const tree = this.$.$mol_tree2_from_string('Noname $mol_view sub /\n').kids[0];
                    const bind_id = $mol_guid() + ':<=';
                    this.data_value(bind_id, '<=');
                    this.data_type(bind_id, 'left');
                    const object_id = 'Noname';
                    this.add_prop_from_tree(tree);
                    this.data_child_ids(bind_id, [object_id]);
                    const subprop = this.$.$mol_tree2_from_string('dom_name <= dom \\div\n').kids[0];
                    const prop2 = this.$.$mol_tree2_from_string('dom \\div\n').kids[0];
                    this.add_prop_from_tree(prop2);
                    this.add_norm_subprop('Noname', subprop);
                    const new_child_ids = [...this.data_child_ids(grand_parent_data_id)];
                    const pos = new_child_ids.findIndex(id => id == parent_data_id);
                    new_child_ids.splice(pos, 0, bind_id);
                    this.data_child_ids(grand_parent_data_id, new_child_ids);
                }
            }
            add_object_in_list(list_ui_id, pos) {
                const list_id = this.data_id_from_ui_id(list_ui_id);
                const tree = this.$.$mol_tree2_from_string('Noname $mol_view sub /\n').kids[0];
                const bind_id = $mol_guid() + ':<=';
                this.data_value(bind_id, '<=');
                this.data_type(bind_id, 'left');
                const object_id = $mol_guid();
                this.data_value(object_id, '');
                this.data_type(object_id, 'object');
                this.prop_ids([...this.prop_ids(), object_id]);
                const class_id = $mol_guid();
                this.data_value(class_id, '');
                this.data_type(class_id, 'class');
                this.data_child_ids(object_id, [class_id]);
                this.data_child_ids(bind_id, [object_id]);
                const new_child_ids = [...this.data_child_ids(list_id)];
                new_child_ids.splice(pos, 0, bind_id);
                this.data_child_ids(list_id, new_child_ids);
            }
            add_subprop(ui_id) {
                const data_id = this.data_id_from_ui_id(ui_id);
                const class_id = this.Data_node(data_id).child_ids()[0];
                const new_data_id = $mol_guid() + ':test';
                this.data_value(new_data_id, '');
                this.data_type(new_data_id, 'prop_sub');
                this.data_child_ids(class_id, [new_data_id, ...this.data_child_ids(class_id)]);
                const class_ui_id = $ss_editor_node_ui_id_build(class_id, ui_id);
                const new_data_ui_id = $ss_editor_node_ui_id_build(new_data_id, class_ui_id);
                this.Block(new_data_ui_id).focus();
            }
            add_rootprop(ui_id) {
                const data_id = this.data_id_from_ui_id(ui_id);
                const class_id = this.Data_node(data_id).child_ids()[0];
                const new_data_id = $mol_guid() + ':test';
                this.data_value(new_data_id, '');
                this.data_type(new_data_id, 'prop');
                this.data_child_ids(class_id, [new_data_id, ...this.data_child_ids(class_id)]);
                const class_ui_id = $ss_editor_node_ui_id_build(class_id, ui_id);
                const new_data_ui_id = $ss_editor_node_ui_id_build(new_data_id, class_ui_id);
                this.Block(new_data_ui_id).focus();
            }
            set_subprop_tree(subprop_ui_id, subprop_tree) {
                const data_id = this.data_id_from_ui_id(subprop_ui_id);
                this.add_prop_sub_data(subprop_tree, data_id);
                const truncated = subprop_tree.kids[0].clone([]);
                if (truncated.type[0] == '$') {
                    const new_object_prop_tree = this.$.$mol_tree2_from_string(`${this.data_value(data_id)} ${truncated.type}\n`).kids[0];
                    this.add_prop_from_tree(new_object_prop_tree);
                    const class_tree_string = truncated.type[0] == '$' ? `<= ${this.data_value(data_id)}\n` : null;
                    const class_tree = class_tree_string ? this.$.$mol_tree2_from_string(class_tree_string).kids[0] : null;
                    const kid_id = this.parse_prop_tree(data_id, class_tree ? class_tree : truncated, 'prop_sub');
                    this.data_child_ids(data_id, [kid_id]);
                }
                else {
                    const kid_id = this.parse_prop_tree(data_id, truncated, 'prop_sub');
                    this.data_child_ids(data_id, [kid_id]);
                }
            }
            click(next) {
                const data_to_tree = (id) => {
                    const data = this.Data_node(id);
                    const tree = $mol_tree2_empty.data(this.data_value(id), data.child_ids().map(id => data_to_tree(id)));
                    return tree;
                };
            }
            library_tree() {
                const uri = new URL('web.view.tree', 'https://mol.hyoo.ru').toString();
                const str = this.$.$mol_fetch.text(uri);
                const predef = '$mol_view $mol_object\n\tdom_name \\\n\tstyle *\n\tevent *\n\tfield *\n\tattr *\n\tsub /\n\ttitle \\\n';
                const tree = this.$.$mol_tree2_from_string(predef + str);
                return tree;
            }
            library() {
                const norm = this.$.$mol_view_tree2_normalize(this.library_tree());
                return norm;
            }
            class_list() {
                return this.library().kids.map(cl => cl.type);
            }
            inherit_chain_trees(cl) {
                const lib = this.library();
                const collect = (cl) => {
                    const class_tree = lib.select(cl, null);
                    const sup = class_tree.kids[0];
                    if (!sup)
                        return;
                    const tree = this.$.$mol_tree2.struct(cl, [sup]);
                    chain.push(tree);
                    collect(sup.type);
                };
                const chain = [];
                collect(cl);
                return chain;
            }
            inherit_chain_names(cl) {
                const names = this.inherit_chain_trees(cl).map(tree => tree.type);
                return names;
            }
            props_map(base) {
                const props = new Map();
                const add = (class_name, prop_tree) => {
                    const name = this.$.$mol_view_tree2_prop_split(prop_tree).name.text();
                    const prop_defs = props.get(name) ?? [];
                    props.set(name, prop_defs);
                    prop_defs.push({
                        in_class: class_name,
                        tree: prop_tree,
                    });
                };
                this.inherit_chain_trees(base).forEach(tree => {
                    const class_name = tree.type;
                    const props = tree.kids[0].kids;
                    for (const prop_tree of props)
                        add(class_name, prop_tree);
                });
                return props;
            }
            props_of(base) {
                const prop_trees = [];
                this.props_map(base).forEach(defs => {
                    prop_trees.push(defs.at(0).tree);
                });
                return prop_trees;
            }
        }
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "add_data", null);
        __decorate([
            $mol_mem
        ], $ss_editor.prototype, "root_props", null);
        __decorate([
            $mol_mem_key
        ], $ss_editor.prototype, "props_by_type", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "add_prop_data", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "add_prop_sub_data", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "parse_prop_tree", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "add_prop_from_tree", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "add_norm_subprop", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "init", null);
        __decorate([
            $mol_mem_key
        ], $ss_editor.prototype, "Ui_node_id_by_pos", null);
        __decorate([
            $mol_mem_key
        ], $ss_editor.prototype, "data_tree_from_ui_id", null);
        __decorate([
            $mol_mem_key
        ], $ss_editor.prototype, "data_child_nodes", null);
        __decorate([
            $mol_mem_key
        ], $ss_editor.prototype, "data_node_by_ui_id", null);
        __decorate([
            $mol_mem_key
        ], $ss_editor.prototype, "data_node_parent_by_ui_id", null);
        __decorate([
            $mol_mem_key
        ], $ss_editor.prototype, "Ui_node_block", null);
        __decorate([
            $mol_mem_key
        ], $ss_editor.prototype, "Block_fabric", null);
        __decorate([
            $mol_mem_key
        ], $ss_editor.prototype, "ui_node_children", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "drop_node", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "replace_prop", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "drop_parent_node", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "unbind_prop", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "add_sibling_object_above", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "add_object_in_list", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "add_subprop", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "add_rootprop", null);
        __decorate([
            $mol_action
        ], $ss_editor.prototype, "set_subprop_tree", null);
        __decorate([
            $mol_mem
        ], $ss_editor.prototype, "library_tree", null);
        __decorate([
            $mol_mem
        ], $ss_editor.prototype, "library", null);
        __decorate([
            $mol_mem
        ], $ss_editor.prototype, "class_list", null);
        __decorate([
            $mol_mem_key
        ], $ss_editor.prototype, "inherit_chain_trees", null);
        __decorate([
            $mol_mem_key
        ], $ss_editor.prototype, "inherit_chain_names", null);
        __decorate([
            $mol_mem_key
        ], $ss_editor.prototype, "props_map", null);
        __decorate([
            $mol_mem_key
        ], $ss_editor.prototype, "props_of", null);
        $$.$ss_editor = $ss_editor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/editor.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_editor, {
            Contenteditable: {
                outline: 'none',
            },
            flex: {
                grow: 0,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/editor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_linkpad_link_undef extends $ss_linkpad_link_default {
        icon() {
            return "❔";
        }
        insert_view() {
            return [
                this.Insert_row()
            ];
        }
        name_focused(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Label() {
            const obj = new this.$.$mol_pop_over();
            obj.showed = (next) => this.name_focused();
            obj.align = () => this.test();
            obj.Anchor = () => this.Anchor();
            obj.bubble_content = () => [
                this.Autocomplete_bubble_content()
            ];
            return obj;
        }
        Link_id() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                "?"
            ];
            return obj;
        }
        autocomplete() {
            return false;
        }
        Bubble_pane() {
            return this.Autocomplete().Bubble_pane();
        }
        options_filtered() {
            return this.Autocomplete().options_filtered();
        }
        Autocomplete() {
            const obj = new this.$.$mol_select();
            obj.no_options_message = () => "Not found";
            obj.event_select = (id, next) => this.event_select(id, next);
            obj.dictionary = () => this.select_dict();
            obj.filter_pattern = () => this.filter_pattern();
            return obj;
        }
        insert(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Insert() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => "New";
            obj.minimal_height = () => 0;
            obj.minimal_width = () => 0;
            obj.click = (next) => this.insert(next);
            return obj;
        }
        Insert_button() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                this.Insert()
            ];
            return obj;
        }
        Insert_label() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                "[Enter]"
            ];
            return obj;
        }
        Insert_row() {
            const obj = new this.$.$ss_blocks_noedit();
            obj.sub = () => [
                this.Insert_button(),
                this.Insert_label()
            ];
            return obj;
        }
        test() {
            return "bottom_right";
        }
        Anchor() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Name(),
                this.Link_id()
            ];
            return obj;
        }
        Autocomplete_bubble_content() {
            const obj = new this.$.$ss_editor_noedit();
            obj.sub = () => [
                this.Bubble_pane()
            ];
            return obj;
        }
        event_select(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        select_dict() {
            return {};
        }
        filter_pattern() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_undef.prototype, "name_focused", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_undef.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_undef.prototype, "Link_id", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_undef.prototype, "Autocomplete", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_undef.prototype, "insert", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_undef.prototype, "Insert", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_undef.prototype, "Insert_button", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_undef.prototype, "Insert_label", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_undef.prototype, "Insert_row", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_undef.prototype, "Anchor", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_undef.prototype, "Autocomplete_bubble_content", null);
    __decorate([
        $mol_mem_key
    ], $ss_linkpad_link_undef.prototype, "event_select", null);
    $.$ss_linkpad_link_undef = $ss_linkpad_link_undef;
})($ || ($ = {}));
//ss/linkpad/link/undef/-view.tree/undef.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_linkpad_link_undef extends $.$ss_linkpad_link_undef {
            color() {
                return `hsl(${this.data().hue()} 0% 60%)`;
            }
            semitransporent() {
                return `hsl(${this.data().hue()} 0% 60% / 20%)`;
            }
            insert_view() {
                return this.valid() ? super.insert_view() : [];
            }
            type_and_name() {
                return [];
            }
            Name_block() {
                const block_id = [this.ui_id(), 'name'];
                const block = this.Block(block_id);
                block.value_changed = next => this.data().name(next);
                block.update_value(this.data().name());
                block.focused = next => this.name_focused(next);
                block.keydown_enter = () => {
                    if (this.data().name() == this.options_filtered()[0]) {
                        return true;
                    }
                    this.event_select(this.options_filtered()[0]);
                    block.focus();
                    return true;
                };
                return block;
            }
            insert() {
                const sel_id = this.select_links().find(item => {
                    return item.key == this.data().name();
                })?.id;
                if (!sel_id)
                    return;
                const sel_data = this.Link_data(sel_id);
                let new_ui_id = this.ui_id();
                if (sel_data.name()) {
                    new_ui_id = this.replace({
                        ui_id: this.ui_id(),
                        new_type_id: sel_id,
                    });
                }
                else if (this.is_node()) {
                    new_ui_id = this.replace({
                        ui_id: this.ui_id(),
                        new_to: $ss_linkpad_link_ui_id_build(sel_id, this.ui_id()[0])
                    });
                }
                else {
                    new_ui_id = this.replace({
                        ui_id: this.ui_id(),
                        new_id: sel_id,
                    });
                }
                const value_block_id = [new_ui_id, 'value'];
                const value_block = this.Block(value_block_id);
                value_block.focus();
            }
            filter_pattern() {
                return this.data().name();
            }
            valid() {
                return this.options_filtered().includes(this.data().name());
            }
            autocomplete_showed() {
                return !this.valid();
            }
            select_value(next) {
                return this.data().name();
            }
            select_links() {
                const links = [];
                this.all_link_ids().forEach(id => {
                    const data = this.Link_data(id);
                    if (!data)
                        return;
                    if (data.undef())
                        return;
                    if (!(data.name() || data.val()))
                        return;
                    const type = this.Link_data(data.type_id());
                    const key = data.name() ? data.name() : `${type.name()} ${data.val()}`;
                    links.push({ id, key });
                });
                return links;
            }
            select_dict() {
                const dict = Object.fromEntries(this.select_links().map(item => [item.key, item.key]));
                return dict;
            }
            event_select(selected) {
                this.data().name(selected);
            }
        }
        __decorate([
            $mol_action
        ], $ss_linkpad_link_undef.prototype, "insert", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad_link_undef.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad_link_undef.prototype, "valid", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad_link_undef.prototype, "autocomplete_showed", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad_link_undef.prototype, "select_links", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad_link_undef.prototype, "select_dict", null);
        $$.$ss_linkpad_link_undef = $ss_linkpad_link_undef;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/linkpad/link/undef/undef.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("ss/linkpad/link/undef/undef.view.css", "[ss_linkpad_link_undef_circle] {\n\topacity: .4;\n}\n");
})($ || ($ = {}));
//ss/linkpad/link/undef/-css/undef.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_linkpad_link_undef, {
            Insert_row: {
                position: 'absolute',
                width: '100%',
                justifyContent: 'center',
                gap: $mol_gap.space,
                pointerEvents: 'none',
            },
            Autocomplete_bubble_content: {
                flex: {
                    shrink: 1,
                },
            },
            Anchor: {
                width: 'fit-content',
                gap: $mol_gap.block,
                flex: {
                    shrink: 1,
                    grow: 1,
                },
                alignItems: 'flex-start',
            },
            Label: {
                position: 'relative',
                justifyContent: 'space-between',
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/linkpad/link/undef/undef.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_linkpad_link_page extends $ss_linkpad_link_default {
        value_and_id() {
            return [
                this.Value(),
                this.Link_id()
            ];
        }
        sub() {
            return [
                this.Page()
            ];
        }
        Page() {
            const obj = new this.$.$mol_page();
            obj.head = () => [
                ...this.from_view(),
                ...this.self_view()
            ];
            obj.body = () => [
                ...this.links_view()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_linkpad_link_page.prototype, "Page", null);
    $.$ss_linkpad_link_page = $ss_linkpad_link_page;
})($ || ($ = {}));
//ss/linkpad/link/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("ss/linkpad/link/page/page.view.css", "[ss_linkpad_link_page_page_head] {\n\talign-items: center;\n}\n\n[ss_linkpad_link_page_page_body] {\n\tpadding-top: 0;\n}\n\n[ss_linkpad_link_page_page] {\n\tflex-grow: 1;\n}\n\n[ss_linkpad_link_page_line_bottom] {\n\tdisplay: block;\n\tmargin-bottom: -1.25rem;\n}\n");
})($ || ($ = {}));
//ss/linkpad/link/page/-css/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_linkpad_link extends $mol_ghost {
        Sub() {
            return this.Root();
        }
        ui_type() {
            return "default";
        }
        Link_data(id) {
            return null;
        }
        variants() {
            return {
                default: this.Default(),
                type_link: this.Type_link(),
                undef: this.Undef(),
                page: this.Page()
            };
        }
        Root() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        add_new_link(id) {
            return null;
        }
        replace(id) {
            return null;
        }
        replace_to_link(id) {
            return null;
        }
        hide_contain(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        ui_id() {
            return "";
        }
        all_link_ids(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        data() {
            return null;
        }
        Block(id) {
            return null;
        }
        to_link(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        links() {
            return [];
        }
        Default_name_block() {
            return this.Default().Name_block();
        }
        Default() {
            const obj = new this.$.$ss_linkpad_link_default();
            obj.Link_data = (id) => this.Link_data(id);
            obj.add_new_link = (id) => this.add_new_link(id);
            obj.replace = (id) => this.replace(id);
            obj.replace_to_link = (id) => this.replace_to_link(id);
            obj.hide_contain = (next) => this.hide_contain(next);
            obj.ui_id = () => this.ui_id();
            obj.all_link_ids = (next) => this.all_link_ids();
            obj.data = () => this.data();
            obj.Block = (id) => this.Block(id);
            obj.to_link = () => this.to_link();
            obj.links = () => this.links();
            return obj;
        }
        Type_name_block() {
            return this.Type_link().Name_block();
        }
        Type_link() {
            const obj = new this.$.$ss_linkpad_link_type();
            obj.Link_data = (id) => this.Link_data(id);
            obj.add_new_link = (id) => this.add_new_link(id);
            obj.replace = (id) => this.replace(id);
            obj.replace_to_link = (id) => this.replace_to_link(id);
            obj.hide_contain = (next) => this.hide_contain(next);
            obj.ui_id = () => this.ui_id();
            obj.all_link_ids = (next) => this.all_link_ids();
            obj.data = () => this.data();
            obj.Block = (id) => this.Block(id);
            obj.to_link = () => this.to_link();
            obj.links = () => this.links();
            return obj;
        }
        Undef_name_block() {
            return this.Undef().Name_block();
        }
        Undef() {
            const obj = new this.$.$ss_linkpad_link_undef();
            obj.Link_data = (id) => this.Link_data(id);
            obj.add_new_link = (id) => this.add_new_link(id);
            obj.replace = (id) => this.replace(id);
            obj.replace_to_link = (id) => this.replace_to_link(id);
            obj.hide_contain = (next) => this.hide_contain(next);
            obj.ui_id = () => this.ui_id();
            obj.all_link_ids = (next) => this.all_link_ids();
            obj.data = () => this.data();
            obj.Block = (id) => this.Block(id);
            obj.to_link = () => this.to_link();
            obj.links = () => this.links();
            return obj;
        }
        Page_name_block() {
            return this.Page().Name_block();
        }
        Page() {
            const obj = new this.$.$ss_linkpad_link_page();
            obj.Link_data = (id) => this.Link_data(id);
            obj.add_new_link = (id) => this.add_new_link(id);
            obj.replace = (id) => this.replace(id);
            obj.replace_to_link = (id) => this.replace_to_link(id);
            obj.hide_contain = (next) => this.hide_contain(next);
            obj.ui_id = () => this.ui_id();
            obj.all_link_ids = (next) => this.all_link_ids();
            obj.data = () => this.data();
            obj.Block = (id) => this.Block(id);
            obj.to_link = () => this.to_link();
            obj.links = () => this.links();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_linkpad_link.prototype, "Root", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link.prototype, "hide_contain", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link.prototype, "all_link_ids", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link.prototype, "to_link", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link.prototype, "Default", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link.prototype, "Type_link", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link.prototype, "Undef", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_link.prototype, "Page", null);
    $.$ss_linkpad_link = $ss_linkpad_link;
})($ || ($ = {}));
//ss/linkpad/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $ss_linkpad_link_ui_id_build(link_id, parent_ui_id = null) {
            return [parent_ui_id, link_id];
        }
        $$.$ss_linkpad_link_ui_id_build = $ss_linkpad_link_ui_id_build;
        function $ss_linkpad_link_id_from_ui(ui_id) {
            return ui_id[1];
        }
        $$.$ss_linkpad_link_id_from_ui = $ss_linkpad_link_id_from_ui;
        function $ss_linkpad_link_id_parent_from_ui(ui_id) {
            return ui_id[0]?.[1];
        }
        $$.$ss_linkpad_link_id_parent_from_ui = $ss_linkpad_link_id_parent_from_ui;
        class $ss_linkpad_link extends $.$ss_linkpad_link {
            type_data() {
                return this.Link_data(this.data().type_id());
            }
            ui_type() {
                let type = 'default';
                if (this.type_data()?.name() == 'Type')
                    type = 'type_link';
                if (this.data().undef())
                    type = 'undef';
                return type;
            }
            Sub() {
                return this.variants()[this.ui_type()];
            }
        }
        __decorate([
            $mol_mem
        ], $ss_linkpad_link.prototype, "ui_type", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad_link.prototype, "Sub", null);
        $$.$ss_linkpad_link = $ss_linkpad_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/linkpad/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_pencil extends $mol_icon {
        path() {
            return "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";
        }
    }
    $.$mol_icon_pencil = $mol_icon_pencil;
})($ || ($ = {}));
//mol/icon/pencil/-view.tree/pencil.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cursor_move extends $mol_icon {
        path() {
            return "M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z";
        }
    }
    $.$mol_icon_cursor_move = $mol_icon_cursor_move;
})($ || ($ = {}));
//mol/icon/cursor/move/-view.tree/move.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $ss_linkpad extends $mol_book2 {
        color_gen() {
            const obj = new this.$.$ss_linkpad_color_generator();
            return obj;
        }
        raw_gql_path(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        right_link_id(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        pages() {
            return [
                this.Contenteditable_user(),
                this.Contenteditable_package()
            ];
        }
        Bubble() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Tools()
            ];
            return obj;
        }
        all_link_ids(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        Link_data(id) {
            return null;
        }
        Link(id) {
            const obj = new this.$.$ss_linkpad_link();
            obj.Link_data = (id) => this.Link_data(id);
            obj.add_new_link = (id) => this.add_new_link(id);
            obj.replace = (id) => this.replace(id);
            obj.replace_to_link = (id) => this.replace_to_link(id);
            obj.hide_contain = (next) => this.hide_contain(next);
            obj.ui_id = () => this.ui_id(id);
            obj.all_link_ids = (next) => this.all_link_ids();
            obj.data = () => this.link_data_by_ui_id(id);
            obj.Block = (id) => this.Block(id);
            obj.to_link = () => this.to_link(id);
            obj.links = () => this.link_links(id);
            return obj;
        }
        link_links_id(id, next) {
            if (next !== undefined)
                return next;
            return [];
        }
        Root_user_link(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Block(id) {
            return this.Contenteditable_user().Block(id);
        }
        Blocks() {
            return this.Contenteditable_user().Blocks();
        }
        Contenteditable_user() {
            const obj = new this.$.$ss_blocks_contenteditable();
            obj.Body = () => this.Root_user_link();
            return obj;
        }
        Root_package_link(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Contenteditable_package() {
            const obj = new this.$.$ss_blocks_contenteditable();
            obj.Body = () => this.Root_package_link();
            obj.Blocks = () => this.Blocks();
            return obj;
        }
        Trash_icon() {
            const obj = new this.$.$mol_icon_trash_can_outline();
            return obj;
        }
        Trash() {
            const obj = new this.$.$mol_button_minor();
            obj.sub = () => [
                this.Trash_icon()
            ];
            return obj;
        }
        Edit_icon() {
            const obj = new this.$.$mol_icon_pencil();
            return obj;
        }
        Edit() {
            const obj = new this.$.$mol_button_minor();
            obj.sub = () => [
                this.Edit_icon()
            ];
            return obj;
        }
        Move_icon() {
            const obj = new this.$.$mol_icon_cursor_move();
            return obj;
        }
        Move() {
            const obj = new this.$.$mol_button_minor();
            obj.sub = () => [
                this.Move_icon()
            ];
            return obj;
        }
        Tools_list() {
            const obj = new this.$.$mol_list();
            obj.sub = () => [
                this.Trash(),
                this.Edit(),
                this.Move()
            ];
            return obj;
        }
        Tools() {
            const obj = new this.$.$mol_pop_bubble();
            obj.content = () => [
                this.Tools_list()
            ];
            return obj;
        }
        add_new_link(id) {
            return null;
        }
        replace(id) {
            return null;
        }
        replace_to_link(id) {
            return null;
        }
        hide_contain(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        ui_id(id) {
            return "";
        }
        link_data_by_ui_id(id) {
            return null;
        }
        to_link(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        link_links(id) {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "color_gen", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "raw_gql_path", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "right_link_id", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "Bubble", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "all_link_ids", null);
    __decorate([
        $mol_mem_key
    ], $ss_linkpad.prototype, "Link", null);
    __decorate([
        $mol_mem_key
    ], $ss_linkpad.prototype, "link_links_id", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "Root_user_link", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "Contenteditable_user", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "Root_package_link", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "Contenteditable_package", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "Trash_icon", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "Trash", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "Edit_icon", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "Edit", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "Move_icon", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "Move", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "Tools_list", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad.prototype, "hide_contain", null);
    __decorate([
        $mol_mem_key
    ], $ss_linkpad.prototype, "to_link", null);
    $.$ss_linkpad = $ss_linkpad;
})($ || ($ = {}));
//ss/linkpad/-view.tree/linkpad.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $ss_linkpad_lib_deep {
        static deepBundle() {
            $mol_wire_solid();
            const { makeDeepClient, minilinks } = require('../ss/linkpad/lib/deep/main.bundle.js');
            return { makeDeepClient, minilinks };
        }
        static gql_path(next) {
            $mol_wire_solid();
            return next ?? '';
        }
        static deep() {
            $mol_wire_solid();
            if (!this.gql_path())
                $mol_fail('no path');
            const deep = $mol_wire_sync(this.deepBundle()).makeDeepClient(this.gql_path(), true);
            return deep;
        }
        static minilinks() {
            $mol_wire_solid();
            return $mol_wire_sync(this.deepBundle()).minilinks;
        }
    }
    __decorate([
        $mol_mem
    ], $ss_linkpad_lib_deep, "deepBundle", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_lib_deep, "gql_path", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_lib_deep, "deep", null);
    __decorate([
        $mol_mem
    ], $ss_linkpad_lib_deep, "minilinks", null);
    $.$ss_linkpad_lib_deep = $ss_linkpad_lib_deep;
})($ || ($ = {}));
//ss/linkpad/lib/deep/deep.ts
;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../ss/linkpad/lib/deep/" ) ] }; 
;
/*! For license information please see main.bundle.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,(function(){return function(){var e,t,n={7389:function(e){var t=1e3,n=60*t,r=60*n,i=24*r;function o(e,t,n,r){var i=t>=1.5*n;return Math.round(e/n)+" "+r+(i?"s":"")}e.exports=function(e,u){u=u||{};var a,s,c=typeof e;if("string"===c&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(o){var u=parseFloat(o[1]);switch((o[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*u;case"weeks":case"week":case"w":return 6048e5*u;case"days":case"day":case"d":return u*i;case"hours":case"hour":case"hrs":case"hr":case"h":return u*r;case"minutes":case"minute":case"mins":case"min":case"m":return u*n;case"seconds":case"second":case"secs":case"sec":case"s":return u*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}(e);if("number"===c&&isFinite(e))return u.long?(a=e,(s=Math.abs(a))>=i?o(a,s,i,"day"):s>=r?o(a,s,r,"hour"):s>=n?o(a,s,n,"minute"):s>=t?o(a,s,t,"second"):a+" ms"):function(e){var o=Math.abs(e);return o>=i?Math.round(e/i)+"d":o>=r?Math.round(e/r)+"h":o>=n?Math.round(e/n)+"m":o>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},1668:function(e,t,n){t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(r++,"%c"===e&&(i=r))})),t.splice(i,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e},t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(7258)(t);const{formatters:r}=e.exports;r.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},7258:function(e,t,n){e.exports=function(e){function t(e){let n,i,o,u=null;function a(...e){if(!a.enabled)return;const r=a,i=Number(new Date),o=i-(n||i);r.diff=o,r.prev=n,r.curr=i,n=i,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let u=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,i)=>{if("%%"===n)return"%";u++;const o=t.formatters[i];if("function"==typeof o){const t=e[u];n=o.call(r,t),e.splice(u,1),u--}return n})),t.formatArgs.call(r,e),(r.log||t.log).apply(r,e)}return a.namespace=e,a.useColors=t.useColors(),a.color=t.selectColor(e),a.extend=r,a.destroy=t.destroy,Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==u?u:(i!==t.namespaces&&(i=t.namespaces,o=t.enabled(e)),o),set:e=>{u=e}}),"function"==typeof t.init&&t.init(a),a}function r(e,n){const r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){const e=[...t.names.map(i),...t.skips.map(i).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),i=r.length;for(n=0;n<i;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(7389),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},5231:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.generateApolloClient=t.generateHeaders=void 0;const i=n(9978),o=n(2451),u=n(3079),a=n(1161),s=r(n(3300)),c=r(n(2520)),l=(0,r(n(9559)).default)("hasura:client");let f;"object"!=typeof window&&(f=n(2666));const p=(d=process.env.DEEP_FOUNDATION_HASURA_RELATIVE)?!!+d:void 0;var d;const h=(e=>e?!!+e:void 0)(process.env.NEXT_PUBLIC_DEEP_FOUNDATION_HASURA_RELATIVE),v="boolean"==typeof p?p:"boolean"==typeof h?h:void 0;function y(e){const t=Object.assign({},e.headers);return e.token&&(t.Authorization=`Bearer ${e.token}`),e.secret&&(t["x-hasura-admin-secret"]=e.secret),e.client&&(t["x-hasura-client"]=e.client),t}t.generateHeaders=y;const m="object"==typeof window?window.location.host:"";t.generateApolloClient=function(e,t){var n,r,p,d,h;l("generateApolloClient",e,t);const g="boolean"==typeof(null==e?void 0:e.relative)?e.relative:"boolean"==typeof v&&v,b=y(e),_=new i.HttpLink({uri:`${g?"":`http${e.ssl?"s":""}:/`}${c.default.normalize("/"+(e.path||""))}`,fetch:s.default,headers:b}),w=e.ws?new a.WebSocketLink({uri:`${g?m?`ws${e.ssl?"s":""}://${m}`:"":`ws${e.ssl?"s":""}:/`}${c.default.normalize("/"+(e.path||""))}`,options:{lazy:!0,reconnect:!0,connectionParams:()=>({headers:b})},webSocketImpl:f}):null,O=new u.ApolloLink(((e,t)=>(e.setContext({headers:b}),t(e)))),k=e.ws?(0,u.split)((({query:e})=>{const t=(0,o.getMainDefinition)(e);return"OperationDefinition"===(null==t?void 0:t.kind)&&"subscription"===(null==t?void 0:t.operation)}),w,_):_,T=new i.ApolloClient(Object.assign(Object.assign({ssrMode:!0,link:(0,u.concat)(O,k),connectToDevTools:!0,cache:new i.InMemoryCache(Object.assign(Object.assign({},null==t?void 0:t.InMemoryCache),{freezeResults:!1,resultCaching:!1})).restore(e.initialStore||{})},null==t?void 0:t.ApolloClient),{defaultOptions:Object.assign({watchQuery:Object.assign({fetchPolicy:"no-cache"},null===(r=null===(n=null==t?void 0:t.ApolloClient)||void 0===n?void 0:n.defaultOptions)||void 0===r?void 0:r.watchQuery),query:Object.assign({fetchPolicy:"no-cache"},null===(d=null===(p=null==t?void 0:t.ApolloClient)||void 0===p?void 0:p.defaultOptions)||void 0===d?void 0:d.query)},null===(h=null==t?void 0:t.ApolloClient)||void 0===h?void 0:h.defaultOptions)}));return T.jwt_token=e.token,T.path=e.path,T.ssl=e.ssl,T}},9559:function(e,t,n){t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(r++,"%c"===e&&(i=r))})),t.splice(i,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e},t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(1212)(t);const{formatters:r}=e.exports;r.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},1212:function(e,t,n){e.exports=function(e){function t(e){let n,i,o,u=null;function a(...e){if(!a.enabled)return;const r=a,i=Number(new Date),o=i-(n||i);r.diff=o,r.prev=n,r.curr=i,n=i,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let u=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,i)=>{if("%%"===n)return"%";u++;const o=t.formatters[i];if("function"==typeof o){const t=e[u];n=o.call(r,t),e.splice(u,1),u--}return n})),t.formatArgs.call(r,e),(r.log||t.log).apply(r,e)}return a.namespace=e,a.useColors=t.useColors(),a.color=t.selectColor(e),a.extend=r,a.destroy=t.destroy,Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==u?u:(i!==t.namespaces&&(i=t.namespaces,o=t.enabled(e)),o),set:e=>{u=e}}),"function"==typeof t.init&&t.init(a),a}function r(e,n){const r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){const e=[...t.names.map(i),...t.skips.map(i).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),i=r.length;for(n=0;n<i;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(2526),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},2526:function(e){var t=1e3,n=60*t,r=60*n,i=24*r;function o(e,t,n,r){var i=t>=1.5*n;return Math.round(e/n)+" "+r+(i?"s":"")}e.exports=function(e,u){u=u||{};var a,s,c=typeof e;if("string"===c&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(o){var u=parseFloat(o[1]);switch((o[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*u;case"weeks":case"week":case"w":return 6048e5*u;case"days":case"day":case"d":return u*i;case"hours":case"hour":case"hrs":case"hr":case"h":return u*r;case"minutes":case"minute":case"mins":case"min":case"m":return u*n;case"seconds":case"second":case"secs":case"sec":case"s":return u*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}(e);if("number"===c&&isFinite(e))return u.long?(a=e,(s=Math.abs(a))>=i?o(a,s,i,"day"):s>=r?o(a,s,r,"hour"):s>=n?o(a,s,n,"minute"):s>=t?o(a,s,t,"second"):a+" ms"):function(e){var o=Math.abs(e);return o>=i?Math.round(e/i)+"d":o>=r?Math.round(e/r)+"h":o>=n?Math.round(e/n)+"m":o>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},2666:function(e){"use strict";e.exports=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}},5152:function(e,t,n){"use strict";t.M0=void 0;const r=n(7294);t.M0=(0,r.createContext)(null)},9210:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useCookiesStore=t.CookiesStoreProviderCore=t.CookiesStoreProvider=t.CookiesStoreContext=void 0;const a=o(n(7294)),s=n(3456),c=u(n(9585)),l=u(n(5029)),f=n(3157),p=l.default("store:cookie");t.CookiesStoreContext=a.createContext(f.defaultContext),t.CookiesStoreProvider=({context:e=t.CookiesStoreContext,children:n,defaultCookies:r,options:i={}})=>{const[o]=a.useState((()=>r&&new c.default(r)));return a.default.createElement(s.CookiesProvider,{cookies:o},a.default.createElement(t.CookiesStoreProviderCore,{options:i,context:e,defaultCookies:r},n))},t.CookiesStoreProviderCore=({context:e=t.CookiesStoreContext,children:n,defaultCookies:r={},options:i={}})=>{const[o]=a.useState((()=>function(e,t){var n;const o=a.useMemo((()=>t),[]),[u,c,l]=s.useCookies([e]),f=a.useRef();f.current=null==u?void 0:u[e];const[d]=a.useState((()=>t=>{const n="function"==typeof t?t(f.current):t;return p("setValue",{key:e,defaultValue:o,value:n,options:i}),c(e,{value:n},i)})),[h]=a.useState((()=>()=>(p("unsetValue",{key:e,defaultValue:o,options:i}),l(e,i))));let v;try{v=r&&r[e]&&"string"==typeof r[e]?JSON.parse(r[e]).value:r[e]}catch(t){p("setStore:error",{error:t,key:e,defaultValue:o,defaultCookie:r[e]})}return[(null==u?void 0:u[e])&&(null===(n=null==u?void 0:u[e])||void 0===n?void 0:n.value)||r&&v||o,d,h]}));return a.default.createElement(e.Provider,{value:{useStore:o}},n)},t.useCookiesStore=function(e,n,r=t.CookiesStoreContext){return f.useStore(e,n,r)}},1596:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useLocalStore=t.LocalStoreProvider=t.LocalContext=void 0;const a=o(n(7294)),s=n(7187),c=n(6486),l=u(n(5029)),f=n(3157),p=l.default("store:local"),d=new s.EventEmitter;t.LocalContext=a.createContext(f.defaultContext);const h=e=>void 0===e||c.isNull(e)?"":JSON.stringify(e);t.LocalStoreProvider=({context:e=t.LocalContext,children:n})=>{const[r]=a.useState((()=>function(e,t){const n=a.useMemo((()=>t),[]),[r,i]=a.useState("undefined"==typeof localStorage?h(n):localStorage.hasOwnProperty(e)?localStorage.getItem(e):h(n)),o=a.useRef();o.current=r,a.useEffect((()=>{const t=localStorage.hasOwnProperty(e);if(p("init",{key:e,defaultValue:n,hasOwnProperty:t}),!t){const t=h(n);localStorage.setItem(e,t),i(t)}const r=t=>{const r=localStorage.getItem(e);void 0===r||c.isNull(r)?i(h(n)):i(t)};return d.on(e,r),()=>{d.off(e,r)}}),[]);const[u]=a.useState((()=>t=>{p("setValue",{key:e,defaultValue:n,value:t});const r="function"==typeof t?t(o.current):t,u=h(r);localStorage.setItem(e,u),i(u),d.emit(e,u)})),[s]=a.useState((()=>()=>{p("unsetValue",{key:e,defaultValue:n}),localStorage.removeItem(e),d.emit(e,n)}));return[a.useMemo((()=>{try{return JSON.parse(r)}catch(e){return}}),[r]),u,s]}));return a.default.createElement(e.Provider,{value:{useStore:r}},n)},t.useLocalStore=function(e,n,r=t.LocalContext){return f.useStore(e,n,r)}},5029:function(e,t,n){t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(r++,"%c"===e&&(i=r))})),t.splice(i,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e},t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(3176)(t);const{formatters:r}=e.exports;r.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},3176:function(e,t,n){e.exports=function(e){function t(e){let n,i,o,u=null;function a(...e){if(!a.enabled)return;const r=a,i=Number(new Date),o=i-(n||i);r.diff=o,r.prev=n,r.curr=i,n=i,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let u=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,i)=>{if("%%"===n)return"%";u++;const o=t.formatters[i];if("function"==typeof o){const t=e[u];n=o.call(r,t),e.splice(u,1),u--}return n})),t.formatArgs.call(r,e),(r.log||t.log).apply(r,e)}return a.namespace=e,a.useColors=t.useColors(),a.color=t.selectColor(e),a.extend=r,a.destroy=t.destroy,Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==u?u:(i!==t.namespaces&&(i=t.namespaces,o=t.enabled(e)),o),set:e=>{u=e}}),"function"==typeof t.init&&t.init(a),a}function r(e,n){const r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){const e=[...t.names.map(i),...t.skips.map(i).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),i=r.length;for(n=0;n<i;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(8394),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},8394:function(e){var t=1e3,n=60*t,r=60*n,i=24*r;function o(e,t,n,r){var i=t>=1.5*n;return Math.round(e/n)+" "+r+(i?"s":"")}e.exports=function(e,u){u=u||{};var a,s,c=typeof e;if("string"===c&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(o){var u=parseFloat(o[1]);switch((o[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*u;case"weeks":case"week":case"w":return 6048e5*u;case"days":case"day":case"d":return u*i;case"hours":case"hour":case"hrs":case"hr":case"h":return u*r;case"minutes":case"minute":case"mins":case"min":case"m":return u*n;case"seconds":case"second":case"secs":case"sec":case"s":return u*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}(e);if("number"===c&&isFinite(e))return u.long?(a=e,(s=Math.abs(a))>=i?o(a,s,i,"day"):s>=r?o(a,s,r,"hour"):s>=n?o(a,s,n,"minute"):s>=t?o(a,s,t,"second"):a+" ms"):function(e){var o=Math.abs(e);return o>=i?Math.round(e/i)+"d":o>=r?Math.round(e/r)+"h":o>=n?Math.round(e/n)+"m":o>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},3157:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStore=t.StoreContext=t.defaultContext=void 0;const r=n(7294);t.defaultContext={useStore:(e,t)=>[t,e=>{},()=>{}]},t.StoreContext=r.createContext(t.defaultContext),t.useStore=function(e,n,i=t.StoreContext){const{useStore:o}=r.useContext(i);return o(e,n)}},1161:function(e,t,n){"use strict";n.r(t),n.d(t,{WebSocketLink:function(){return u}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)},i=n(3079),o=n(5313),u=function(e){function t(t){var n=e.call(this)||this;return t instanceof o.SubscriptionClient?n.subscriptionClient=t:n.subscriptionClient=new o.SubscriptionClient(t.uri,t.options,t.webSocketImpl),n}return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.request=function(e){return this.subscriptionClient.request(e)},t}(i.ApolloLink)},3079:function(e,t,n){"use strict";n.r(t),n.d(t,{ApolloLink:function(){return q},Observable:function(){return i},concat:function(){return L},createOperation:function(){return N},empty:function(){return R},execute:function(){return V},from:function(){return F},fromError:function(){return A},fromPromise:function(){return j},getOperationName:function(){return S},makePromise:function(){return I},split:function(){return M},toPromise:function(){return x}});var r=n(9329),i=n.n(r)(),o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},o(e,t)};function u(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a,s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)},c="Invariant Violation",l=Object.setPrototypeOf,f=void 0===l?function(e,t){return e.__proto__=t,e}:l,p=function(e){function t(n){void 0===n&&(n=c);var r=e.call(this,"number"==typeof n?c+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=c,f(r,t.prototype),r}return u(t,e),t}(Error);function d(e,t){if(!e)throw new p(t)}function h(e){return function(){return console[e].apply(console,arguments)}}(a=d||(d={})).warn=h("warn"),a.error=h("error");var v={env:{}};if("object"==typeof process)v=process;else try{Function("stub","process = stub")(v)}catch(e){}var y=function(e,t){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},y(e,t)},m="Invariant Violation",g=Object.setPrototypeOf,b=void 0===g?function(e,t){return e.__proto__=t,e}:g,_=function(e){function t(n){void 0===n&&(n=m);var r=e.call(this,"number"==typeof n?"Invariant Violation: "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=m,b(r,t.prototype),r}return function(e,t){function n(){this.constructor=e}y(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error);function w(e,t){if(!e)throw new _(t)}function O(e){return function(){return console[e].apply(console,arguments)}}!function(e){e.warn=O("warn"),e.error=O("error")}(w||(w={}));var k={env:{}};if("object"==typeof process)k=process;else try{Function("stub","process = stub")(k)}catch(e){}n(5035);var T,E=Object.prototype;function S(e){return e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&e.name})).map((function(e){return e.name.value}))[0]||null}function C(e){return e.request.length<=1}function x(e){var t=!1;return new Promise((function(n,r){e.subscribe({next:function(e){t||(t=!0,n(e))},error:r})}))}E.toString,E.hasOwnProperty,new Map,"function"==typeof WeakMap&&"object"==typeof navigator&&navigator.product,Object.prototype.toString,Object.prototype.hasOwnProperty,Object.create({}),u((function(e,t){var n=T.call(this,e)||this;return n.link=t,n}),T=Error);var I=x;function j(e){return new i((function(t){e.then((function(e){t.next(e),t.complete()})).catch(t.error.bind(t))}))}function A(e){return new i((function(t){t.error(e)}))}function N(e,t){var n=s({},e);return Object.defineProperty(t,"setContext",{enumerable:!1,value:function(e){n=s({},n,"function"==typeof e?e(n):e)}}),Object.defineProperty(t,"getContext",{enumerable:!1,value:function(){return s({},n)}}),Object.defineProperty(t,"toKey",{enumerable:!1,value:function(){return function(e){var t=e.query,n=e.variables,r=e.operationName;return JSON.stringify([r,t,n])}(t)}}),t}function D(e,t){return t?t(e):i.of()}function P(e){return"function"==typeof e?new q(e):e}function R(){return new q((function(){return i.of()}))}function F(e){return 0===e.length?R():e.map(P).reduce((function(e,t){return e.concat(t)}))}function M(e,t,n){var r=P(t),o=P(n||new q(D));return C(r)&&C(o)?new q((function(t){return e(t)?r.request(t)||i.of():o.request(t)||i.of()})):new q((function(t,n){return e(t)?r.request(t,n)||i.of():o.request(t,n)||i.of()}))}var L=function(e,t){var n=P(e);if(C(n))return n;var r=P(t);return C(r)?new q((function(e){return n.request(e,(function(e){return r.request(e)||i.of()}))||i.of()})):new q((function(e,t){return n.request(e,(function(e){return r.request(e,t)||i.of()}))||i.of()}))},q=function(){function e(e){e&&(this.request=e)}return e.prototype.split=function(t,n,r){return this.concat(M(t,n,r||new e(D)))},e.prototype.concat=function(e){return L(this,e)},e.prototype.request=function(e,t){throw new p(1)},e.empty=R,e.from=F,e.split=M,e.execute=V,e}();function V(e,t){return e.request(N(t.context,function(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName="string"!=typeof t.query?S(t.query):""),t}(function(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];if(t.indexOf(i)<0)throw new p(2)}return e}(t))))||i.of()}},9892:function(e,t,n){e=n.nmd(e),function(t){"use strict";var n,r="function"==typeof(n=t.atob)?n:"function"==typeof Buffer?function(e){return new Buffer(e,"base64").toString("binary")}:"object"==typeof t.base64js?function(e){var n=t.base64js.b64ToByteArray(e);return Array.prototype.map.call(n,(function(e){return String.fromCharCode(e)})).join("")}:function(){throw new Error("You're probably in an old browser or an iOS webworker. It might help to include beatgammit's base64-js.")};t.atob=r,e&&e.exports&&(e.exports=r)}(window)},3010:function(e){function t(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}e.exports=t,t.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=0==(1&Math.floor(10*t))?e-n:e+n}return 0|Math.min(e,this.max)},t.prototype.reset=function(){this.attempts=0},t.prototype.setMin=function(e){this.ms=e},t.prototype.setMax=function(e){this.max=e},t.prototype.setJitter=function(e){this.jitter=e}},7187:function(e){"use strict";var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(n,r){function i(n){e.removeListener(t,o),r(n)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}v(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&v(e,"error",t,{once:!0})}(e,i)}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var u=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function s(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function c(e,t,n,r){var i,o,u,c;if(a(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),u=o[t]),void 0===u)u=o[t]=n,++e._eventsCount;else if("function"==typeof u?u=o[t]=r?[n,u]:[u,n]:r?u.unshift(n):u.push(n),(i=s(e))>0&&u.length>i&&!u.warned){u.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+u.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=u.length,c=l,console&&console.warn&&console.warn(c)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=l.bind(r);return i.listener=n,r.wrapFn=i,i}function p(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):h(i,i.length)}function d(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function h(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function v(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){r.once&&e.removeEventListener(t,i),n(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");u=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return s(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var u;if(t.length>0&&(u=t[0]),u instanceof Error)throw u;var a=new Error("Unhandled error."+(u?" ("+u.message+")":""));throw a.context=u,a}var s=o[e];if(void 0===s)return!1;if("function"==typeof s)r(s,this,t);else{var c=s.length,l=h(s,c);for(n=0;n<c;++n)r(l[n],this,t)}return!0},o.prototype.addListener=function(e,t){return c(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return c(this,e,t,!0)},o.prototype.once=function(e,t){return a(t),this.on(e,f(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,f(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,i,o,u;if(a(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){u=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,u||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return p(this,e,!0)},o.prototype.rawListeners=function(e){return p(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},o.prototype.listenerCount=d,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},5035:function(e){"use strict";e.exports=function(e,t){t||(t={}),"function"==typeof t&&(t={cmp:t});var n,r="boolean"==typeof t.cycles&&t.cycles,i=t.cmp&&(n=t.cmp,function(e){return function(t,r){var i={key:t,value:e[t]},o={key:r,value:e[r]};return n(i,o)}}),o=[];return function e(t){if(t&&t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON()),void 0!==t){if("number"==typeof t)return isFinite(t)?""+t:"null";if("object"!=typeof t)return JSON.stringify(t);var n,u;if(Array.isArray(t)){for(u="[",n=0;n<t.length;n++)n&&(u+=","),u+=e(t[n])||"null";return u+"]"}if(null===t)return"null";if(-1!==o.indexOf(t)){if(r)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var a=o.push(t)-1,s=Object.keys(t).sort(i&&i(t));for(u="",n=0;n<s.length;n++){var c=s[n],l=e(t[c]);l&&(u&&(u+=","),u+=JSON.stringify(c)+":"+l)}return o.splice(a,1),"{"+u+"}"}}(e)}},9430:function(e,t,n){"use strict";n.d(t,{ZP:function(){return fe},J9:function(){return ie},_t:function(){return ne},wO:function(){return re},Ps:function(){return ee},HW:function(){return te}});var r=n(655);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}"function"==typeof Symbol&&null!=Symbol.iterator&&Symbol.iterator,"function"==typeof Symbol&&null!=Symbol.asyncIterator&&Symbol.asyncIterator;var o="function"==typeof Symbol&&null!=Symbol.toStringTag?Symbol.toStringTag:"@@toStringTag";function u(e,t){for(var n,r=/\r\n|[\n\r]/g,i=1,o=t+1;(n=r.exec(e.body))&&n.index<t;)i+=1,o=t+1-(n.index+n[0].length);return{line:i,column:o}}function a(e){return s(e.source,u(e.source,e.start))}function s(e,t){var n=e.locationOffset.column-1,r=l(n)+e.body,i=t.line-1,o=e.locationOffset.line-1,u=t.line+o,a=1===t.line?n:0,s=t.column+a,f="".concat(e.name,":").concat(u,":").concat(s,"\n"),p=r.split(/\r\n|[\n\r]/g),d=p[i];if(d.length>120){for(var h=Math.floor(s/80),v=s%80,y=[],m=0;m<d.length;m+=80)y.push(d.slice(m,m+80));return f+c([["".concat(u),y[0]]].concat(y.slice(1,h+1).map((function(e){return["",e]})),[[" ",l(v-1)+"^"],["",y[h+1]]]))}return f+c([["".concat(u-1),p[i-1]],["".concat(u),d],["",l(s-1)+"^"],["".concat(u+1),p[i+1]]])}function c(e){var t=e.filter((function(e){return e[0],void 0!==e[1]})),n=Math.max.apply(Math,t.map((function(e){return e[0].length})));return t.map((function(e){var t,r=e[0],i=e[1];return l(n-(t=r).length)+t+(i?" | "+i:" |")})).join("\n")}function l(e){return Array(e+1).join(" ")}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){var t="function"==typeof Map?new Map:void 0;return m=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return g(e,arguments,w(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),_(r,e)},m(e)}function g(e,t,n){return g=b()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&_(i,n.prototype),i},g.apply(null,arguments)}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(f,e);var t,n,r,c,l=(t=f,n=b(),function(){var e,r=w(t);if(n){var i=w(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return v(this,e)});function f(e,t,n,r,o,a,s){var c,h,m,g;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(g=l.call(this,e)).name="GraphQLError",g.originalError=null!=a?a:void 0,g.nodes=k(Array.isArray(t)?t:t?[t]:void 0);for(var b=[],_=0,w=null!==(O=g.nodes)&&void 0!==O?O:[];_<w.length;_++){var O,T=w[_].loc;null!=T&&b.push(T)}b=k(b),g.source=null!=n?n:null===(c=b)||void 0===c?void 0:c[0].source,g.positions=null!=r?r:null===(h=b)||void 0===h?void 0:h.map((function(e){return e.start})),g.locations=r&&n?r.map((function(e){return u(n,e)})):null===(m=b)||void 0===m?void 0:m.map((function(e){return u(e.source,e.start)})),g.path=null!=o?o:void 0;var E,S=null==a?void 0:a.extensions;return null==s&&"object"==i(E=S)&&null!==E?g.extensions=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},S):g.extensions=null!=s?s:{},Object.defineProperties(y(g),{message:{enumerable:!0},locations:{enumerable:null!=g.locations},path:{enumerable:null!=g.path},extensions:{enumerable:null!=g.extensions&&Object.keys(g.extensions).length>0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=a&&a.stack?(Object.defineProperty(y(g),"stack",{value:a.stack,writable:!0,configurable:!0}),v(g)):(Error.captureStackTrace?Error.captureStackTrace(y(g),f):Object.defineProperty(y(g),"stack",{value:Error().stack,writable:!0,configurable:!0}),g)}return r=f,(c=[{key:"toString",value:function(){return function(e){var t=e.message;if(e.nodes)for(var n=0,r=e.nodes;n<r.length;n++){var i=r[n];i.loc&&(t+="\n\n"+a(i.loc))}else if(e.source&&e.locations)for(var o=0,u=e.locations;o<u.length;o++){var c=u[o];t+="\n\n"+s(e.source,c)}return t}(this)}},{key:o,get:function(){return"Object"}}])&&h(r.prototype,c),f}(m(Error));function k(e){return void 0===e||0===e.length?void 0:e}function T(e,t,n){return new O("Syntax Error: ".concat(n),void 0,e,[t])}var E=n(7359),S=n(5217),C=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),x=n(5821);function I(e,t){if(!Boolean(e))throw new Error(t)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GraphQL request",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{line:1,column:1};"string"==typeof e||I(0,"Body must be a string. Received: ".concat((0,x.Z)(e),".")),this.body=e,this.name=t,this.locationOffset=n,this.locationOffset.line>0||I(0,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||I(0,"column in locationOffset is 1-indexed and must be positive.")}var t,n;return t=e,(n=[{key:o,get:function(){return"Source"}}])&&j(t.prototype,n),e}(),N=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),D=n(7392),P=function(){function e(e){var t=new S.WU(C.SOF,0,0,0,0,null);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}var t=e.prototype;return t.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},t.lookahead=function(){var e=this.token;if(e.kind!==C.EOF)do{var t;e=null!==(t=e.next)&&void 0!==t?t:e.next=F(this,e)}while(e.kind===C.COMMENT);return e},e}();function R(e){return isNaN(e)?C.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function F(e,t){for(var n=e.source,r=n.body,i=r.length,o=t.end;o<i;){var u=r.charCodeAt(o),a=e.line,s=1+o-e.lineStart;switch(u){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++e.line,e.lineStart=o;continue;case 13:10===r.charCodeAt(o+1)?o+=2:++o,++e.line,e.lineStart=o;continue;case 33:return new S.WU(C.BANG,o,o+1,a,s,t);case 35:return L(n,o,a,s,t);case 36:return new S.WU(C.DOLLAR,o,o+1,a,s,t);case 38:return new S.WU(C.AMP,o,o+1,a,s,t);case 40:return new S.WU(C.PAREN_L,o,o+1,a,s,t);case 41:return new S.WU(C.PAREN_R,o,o+1,a,s,t);case 46:if(46===r.charCodeAt(o+1)&&46===r.charCodeAt(o+2))return new S.WU(C.SPREAD,o,o+3,a,s,t);break;case 58:return new S.WU(C.COLON,o,o+1,a,s,t);case 61:return new S.WU(C.EQUALS,o,o+1,a,s,t);case 64:return new S.WU(C.AT,o,o+1,a,s,t);case 91:return new S.WU(C.BRACKET_L,o,o+1,a,s,t);case 93:return new S.WU(C.BRACKET_R,o,o+1,a,s,t);case 123:return new S.WU(C.BRACE_L,o,o+1,a,s,t);case 124:return new S.WU(C.PIPE,o,o+1,a,s,t);case 125:return new S.WU(C.BRACE_R,o,o+1,a,s,t);case 34:return 34===r.charCodeAt(o+1)&&34===r.charCodeAt(o+2)?U(n,o,a,s,t,e):Q(n,o,a,s,t);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return q(n,o,u,a,s,t);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return $(n,o,a,s,t)}throw T(n,o,M(u))}var c=e.line,l=1+o-e.lineStart;return new S.WU(C.EOF,i,i,c,l,t)}function M(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(R(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(R(e),".")}function L(e,t,n,r,i){var o,u=e.body,a=t;do{o=u.charCodeAt(++a)}while(!isNaN(o)&&(o>31||9===o));return new S.WU(C.COMMENT,t,a,n,r,i,u.slice(t+1,a))}function q(e,t,n,r,i,o){var u=e.body,a=n,s=t,c=!1;if(45===a&&(a=u.charCodeAt(++s)),48===a){if((a=u.charCodeAt(++s))>=48&&a<=57)throw T(e,s,"Invalid number, unexpected digit after 0: ".concat(R(a),"."))}else s=V(e,s,a),a=u.charCodeAt(s);if(46===a&&(c=!0,a=u.charCodeAt(++s),s=V(e,s,a),a=u.charCodeAt(s)),69!==a&&101!==a||(c=!0,43!==(a=u.charCodeAt(++s))&&45!==a||(a=u.charCodeAt(++s)),s=V(e,s,a),a=u.charCodeAt(s)),46===a||function(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(a))throw T(e,s,"Invalid number, expected digit but got: ".concat(R(a),"."));return new S.WU(c?C.FLOAT:C.INT,t,s,r,i,o,u.slice(t,s))}function V(e,t,n){var r=e.body,i=t,o=n;if(o>=48&&o<=57){do{o=r.charCodeAt(++i)}while(o>=48&&o<=57);return i}throw T(e,i,"Invalid number, expected digit but got: ".concat(R(o),"."))}function Q(e,t,n,r,i){for(var o,u,a,s,c=e.body,l=t+1,f=l,p=0,d="";l<c.length&&!isNaN(p=c.charCodeAt(l))&&10!==p&&13!==p;){if(34===p)return d+=c.slice(f,l),new S.WU(C.STRING,t,l+1,n,r,i,d);if(p<32&&9!==p)throw T(e,l,"Invalid character within String: ".concat(R(p),"."));if(++l,92===p){switch(d+=c.slice(f,l-1),p=c.charCodeAt(l)){case 34:d+='"';break;case 47:d+="/";break;case 92:d+="\\";break;case 98:d+="\b";break;case 102:d+="\f";break;case 110:d+="\n";break;case 114:d+="\r";break;case 116:d+="\t";break;case 117:var h=(o=c.charCodeAt(l+1),u=c.charCodeAt(l+2),a=c.charCodeAt(l+3),s=c.charCodeAt(l+4),B(o)<<12|B(u)<<8|B(a)<<4|B(s));if(h<0){var v=c.slice(l+1,l+5);throw T(e,l,"Invalid character escape sequence: \\u".concat(v,"."))}d+=String.fromCharCode(h),l+=4;break;default:throw T(e,l,"Invalid character escape sequence: \\".concat(String.fromCharCode(p),"."))}f=++l}}throw T(e,l,"Unterminated string.")}function U(e,t,n,r,i,o){for(var u=e.body,a=t+3,s=a,c=0,l="";a<u.length&&!isNaN(c=u.charCodeAt(a));){if(34===c&&34===u.charCodeAt(a+1)&&34===u.charCodeAt(a+2))return l+=u.slice(s,a),new S.WU(C.BLOCK_STRING,t,a+3,n,r,i,(0,D.W7)(l));if(c<32&&9!==c&&10!==c&&13!==c)throw T(e,a,"Invalid character within String: ".concat(R(c),"."));10===c?(++a,++o.line,o.lineStart=a):13===c?(10===u.charCodeAt(a+1)?a+=2:++a,++o.line,o.lineStart=a):92===c&&34===u.charCodeAt(a+1)&&34===u.charCodeAt(a+2)&&34===u.charCodeAt(a+3)?(l+=u.slice(s,a)+'"""',s=a+=4):++a}throw T(e,a,"Unterminated string.")}function B(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function $(e,t,n,r,i){for(var o=e.body,u=o.length,a=t+1,s=0;a!==u&&!isNaN(s=o.charCodeAt(a))&&(95===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122);)++a;return new S.WU(C.NAME,t,a,n,r,i,o.slice(t,a))}var z=function(){function e(e,t){var n=function(e){return e instanceof A}(e)?e:new A(e);this._lexer=new P(n),this._options=t}var t=e.prototype;return t.parseName=function(){var e=this.expectToken(C.NAME);return{kind:E.h.NAME,value:e.value,loc:this.loc(e)}},t.parseDocument=function(){var e=this._lexer.token;return{kind:E.h.DOCUMENT,definitions:this.many(C.SOF,this.parseDefinition,C.EOF),loc:this.loc(e)}},t.parseDefinition=function(){if(this.peek(C.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(C.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},t.parseOperationDefinition=function(){var e=this._lexer.token;if(this.peek(C.BRACE_L))return{kind:E.h.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(e)};var t,n=this.parseOperationType();return this.peek(C.NAME)&&(t=this.parseName()),{kind:E.h.OPERATION_DEFINITION,operation:n,name:t,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseOperationType=function(){var e=this.expectToken(C.NAME);switch(e.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(e)},t.parseVariableDefinitions=function(){return this.optionalMany(C.PAREN_L,this.parseVariableDefinition,C.PAREN_R)},t.parseVariableDefinition=function(){var e=this._lexer.token;return{kind:E.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(C.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(C.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(e)}},t.parseVariable=function(){var e=this._lexer.token;return this.expectToken(C.DOLLAR),{kind:E.h.VARIABLE,name:this.parseName(),loc:this.loc(e)}},t.parseSelectionSet=function(){var e=this._lexer.token;return{kind:E.h.SELECTION_SET,selections:this.many(C.BRACE_L,this.parseSelection,C.BRACE_R),loc:this.loc(e)}},t.parseSelection=function(){return this.peek(C.SPREAD)?this.parseFragment():this.parseField()},t.parseField=function(){var e,t,n=this._lexer.token,r=this.parseName();return this.expectOptionalToken(C.COLON)?(e=r,t=this.parseName()):t=r,{kind:E.h.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(C.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(n)}},t.parseArguments=function(e){var t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(C.PAREN_L,t,C.PAREN_R)},t.parseArgument=function(){var e=this._lexer.token,t=this.parseName();return this.expectToken(C.COLON),{kind:E.h.ARGUMENT,name:t,value:this.parseValueLiteral(!1),loc:this.loc(e)}},t.parseConstArgument=function(){var e=this._lexer.token;return{kind:E.h.ARGUMENT,name:this.parseName(),value:(this.expectToken(C.COLON),this.parseValueLiteral(!0)),loc:this.loc(e)}},t.parseFragment=function(){var e=this._lexer.token;this.expectToken(C.SPREAD);var t=this.expectOptionalKeyword("on");return!t&&this.peek(C.NAME)?{kind:E.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(e)}:{kind:E.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseFragmentDefinition=function(){var e,t=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(e=this._options)||void 0===e?void 0:e.experimentalFragmentVariables)?{kind:E.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}:{kind:E.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}},t.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},t.parseValueLiteral=function(e){var t=this._lexer.token;switch(t.kind){case C.BRACKET_L:return this.parseList(e);case C.BRACE_L:return this.parseObject(e);case C.INT:return this._lexer.advance(),{kind:E.h.INT,value:t.value,loc:this.loc(t)};case C.FLOAT:return this._lexer.advance(),{kind:E.h.FLOAT,value:t.value,loc:this.loc(t)};case C.STRING:case C.BLOCK_STRING:return this.parseStringLiteral();case C.NAME:switch(this._lexer.advance(),t.value){case"true":return{kind:E.h.BOOLEAN,value:!0,loc:this.loc(t)};case"false":return{kind:E.h.BOOLEAN,value:!1,loc:this.loc(t)};case"null":return{kind:E.h.NULL,loc:this.loc(t)};default:return{kind:E.h.ENUM,value:t.value,loc:this.loc(t)}}case C.DOLLAR:if(!e)return this.parseVariable()}throw this.unexpected()},t.parseStringLiteral=function(){var e=this._lexer.token;return this._lexer.advance(),{kind:E.h.STRING,value:e.value,block:e.kind===C.BLOCK_STRING,loc:this.loc(e)}},t.parseList=function(e){var t=this,n=this._lexer.token;return{kind:E.h.LIST,values:this.any(C.BRACKET_L,(function(){return t.parseValueLiteral(e)}),C.BRACKET_R),loc:this.loc(n)}},t.parseObject=function(e){var t=this,n=this._lexer.token;return{kind:E.h.OBJECT,fields:this.any(C.BRACE_L,(function(){return t.parseObjectField(e)}),C.BRACE_R),loc:this.loc(n)}},t.parseObjectField=function(e){var t=this._lexer.token,n=this.parseName();return this.expectToken(C.COLON),{kind:E.h.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e),loc:this.loc(t)}},t.parseDirectives=function(e){for(var t=[];this.peek(C.AT);)t.push(this.parseDirective(e));return t},t.parseDirective=function(e){var t=this._lexer.token;return this.expectToken(C.AT),{kind:E.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e),loc:this.loc(t)}},t.parseTypeReference=function(){var e,t=this._lexer.token;return this.expectOptionalToken(C.BRACKET_L)?(e=this.parseTypeReference(),this.expectToken(C.BRACKET_R),e={kind:E.h.LIST_TYPE,type:e,loc:this.loc(t)}):e=this.parseNamedType(),this.expectOptionalToken(C.BANG)?{kind:E.h.NON_NULL_TYPE,type:e,loc:this.loc(t)}:e},t.parseNamedType=function(){var e=this._lexer.token;return{kind:E.h.NAMED_TYPE,name:this.parseName(),loc:this.loc(e)}},t.parseTypeSystemDefinition=function(){var e=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(e.kind===C.NAME)switch(e.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(e)},t.peekDescription=function(){return this.peek(C.STRING)||this.peek(C.BLOCK_STRING)},t.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},t.parseSchemaDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");var n=this.parseDirectives(!0),r=this.many(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);return{kind:E.h.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:r,loc:this.loc(e)}},t.parseOperationTypeDefinition=function(){var e=this._lexer.token,t=this.parseOperationType();this.expectToken(C.COLON);var n=this.parseNamedType();return{kind:E.h.OPERATION_TYPE_DEFINITION,operation:t,type:n,loc:this.loc(e)}},t.parseScalarTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");var n=this.parseName(),r=this.parseDirectives(!0);return{kind:E.h.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:r,loc:this.loc(e)}},t.parseObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");var n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),o=this.parseFieldsDefinition();return{kind:E.h.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:r,directives:i,fields:o,loc:this.loc(e)}},t.parseImplementsInterfaces=function(){var e;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLImplementsInterfaces)){var t=[];this.expectOptionalToken(C.AMP);do{t.push(this.parseNamedType())}while(this.expectOptionalToken(C.AMP)||this.peek(C.NAME));return t}return this.delimitedMany(C.AMP,this.parseNamedType)},t.parseFieldsDefinition=function(){var e;return!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLEmptyFields)&&this.peek(C.BRACE_L)&&this._lexer.lookahead().kind===C.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(C.BRACE_L,this.parseFieldDefinition,C.BRACE_R)},t.parseFieldDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),r=this.parseArgumentDefs();this.expectToken(C.COLON);var i=this.parseTypeReference(),o=this.parseDirectives(!0);return{kind:E.h.FIELD_DEFINITION,description:t,name:n,arguments:r,type:i,directives:o,loc:this.loc(e)}},t.parseArgumentDefs=function(){return this.optionalMany(C.PAREN_L,this.parseInputValueDef,C.PAREN_R)},t.parseInputValueDef=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(C.COLON);var r,i=this.parseTypeReference();this.expectOptionalToken(C.EQUALS)&&(r=this.parseValueLiteral(!0));var o=this.parseDirectives(!0);return{kind:E.h.INPUT_VALUE_DEFINITION,description:t,name:n,type:i,defaultValue:r,directives:o,loc:this.loc(e)}},t.parseInterfaceTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");var n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),o=this.parseFieldsDefinition();return{kind:E.h.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:r,directives:i,fields:o,loc:this.loc(e)}},t.parseUnionTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");var n=this.parseName(),r=this.parseDirectives(!0),i=this.parseUnionMemberTypes();return{kind:E.h.UNION_TYPE_DEFINITION,description:t,name:n,directives:r,types:i,loc:this.loc(e)}},t.parseUnionMemberTypes=function(){return this.expectOptionalToken(C.EQUALS)?this.delimitedMany(C.PIPE,this.parseNamedType):[]},t.parseEnumTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");var n=this.parseName(),r=this.parseDirectives(!0),i=this.parseEnumValuesDefinition();return{kind:E.h.ENUM_TYPE_DEFINITION,description:t,name:n,directives:r,values:i,loc:this.loc(e)}},t.parseEnumValuesDefinition=function(){return this.optionalMany(C.BRACE_L,this.parseEnumValueDefinition,C.BRACE_R)},t.parseEnumValueDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),r=this.parseDirectives(!0);return{kind:E.h.ENUM_VALUE_DEFINITION,description:t,name:n,directives:r,loc:this.loc(e)}},t.parseInputObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");var n=this.parseName(),r=this.parseDirectives(!0),i=this.parseInputFieldsDefinition();return{kind:E.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:r,fields:i,loc:this.loc(e)}},t.parseInputFieldsDefinition=function(){return this.optionalMany(C.BRACE_L,this.parseInputValueDef,C.BRACE_R)},t.parseTypeSystemExtension=function(){var e=this._lexer.lookahead();if(e.kind===C.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)},t.parseSchemaExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var t=this.parseDirectives(!0),n=this.optionalMany(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return{kind:E.h.SCHEMA_EXTENSION,directives:t,operationTypes:n,loc:this.loc(e)}},t.parseScalarTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var t=this.parseName(),n=this.parseDirectives(!0);if(0===n.length)throw this.unexpected();return{kind:E.h.SCALAR_TYPE_EXTENSION,name:t,directives:n,loc:this.loc(e)}},t.parseObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var t=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),i=this.parseFieldsDefinition();if(0===n.length&&0===r.length&&0===i.length)throw this.unexpected();return{kind:E.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:r,fields:i,loc:this.loc(e)}},t.parseInterfaceTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var t=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),i=this.parseFieldsDefinition();if(0===n.length&&0===r.length&&0===i.length)throw this.unexpected();return{kind:E.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:r,fields:i,loc:this.loc(e)}},t.parseUnionTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var t=this.parseName(),n=this.parseDirectives(!0),r=this.parseUnionMemberTypes();if(0===n.length&&0===r.length)throw this.unexpected();return{kind:E.h.UNION_TYPE_EXTENSION,name:t,directives:n,types:r,loc:this.loc(e)}},t.parseEnumTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var t=this.parseName(),n=this.parseDirectives(!0),r=this.parseEnumValuesDefinition();if(0===n.length&&0===r.length)throw this.unexpected();return{kind:E.h.ENUM_TYPE_EXTENSION,name:t,directives:n,values:r,loc:this.loc(e)}},t.parseInputObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var t=this.parseName(),n=this.parseDirectives(!0),r=this.parseInputFieldsDefinition();if(0===n.length&&0===r.length)throw this.unexpected();return{kind:E.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:r,loc:this.loc(e)}},t.parseDirectiveDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(C.AT);var n=this.parseName(),r=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var o=this.parseDirectiveLocations();return{kind:E.h.DIRECTIVE_DEFINITION,description:t,name:n,arguments:r,repeatable:i,locations:o,loc:this.loc(e)}},t.parseDirectiveLocations=function(){return this.delimitedMany(C.PIPE,this.parseDirectiveLocation)},t.parseDirectiveLocation=function(){var e=this._lexer.token,t=this.parseName();if(void 0!==N[t.value])return t;throw this.unexpected(e)},t.loc=function(e){var t;if(!0!==(null===(t=this._options)||void 0===t?void 0:t.noLocation))return new S.Ye(e,this._lexer.lastToken,this._lexer.source)},t.peek=function(e){return this._lexer.token.kind===e},t.expectToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw T(this._lexer.source,t.start,"Expected ".concat(W(e),", found ").concat(G(t),"."))},t.expectOptionalToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t},t.expectKeyword=function(e){var t=this._lexer.token;if(t.kind!==C.NAME||t.value!==e)throw T(this._lexer.source,t.start,'Expected "'.concat(e,'", found ').concat(G(t),"."));this._lexer.advance()},t.expectOptionalKeyword=function(e){var t=this._lexer.token;return t.kind===C.NAME&&t.value===e&&(this._lexer.advance(),!0)},t.unexpected=function(e){var t=null!=e?e:this._lexer.token;return T(this._lexer.source,t.start,"Unexpected ".concat(G(t),"."))},t.any=function(e,t,n){this.expectToken(e);for(var r=[];!this.expectOptionalToken(n);)r.push(t.call(this));return r},t.optionalMany=function(e,t,n){if(this.expectOptionalToken(e)){var r=[];do{r.push(t.call(this))}while(!this.expectOptionalToken(n));return r}return[]},t.many=function(e,t,n){this.expectToken(e);var r=[];do{r.push(t.call(this))}while(!this.expectOptionalToken(n));return r},t.delimitedMany=function(e,t){this.expectOptionalToken(e);var n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n},e}();function G(e){var t=e.value;return W(e.kind)+(null!=t?' "'.concat(t,'"'):"")}function W(e){return function(e){return e===C.BANG||e===C.DOLLAR||e===C.AMP||e===C.PAREN_L||e===C.PAREN_R||e===C.SPREAD||e===C.COLON||e===C.EQUALS||e===C.AT||e===C.BRACKET_L||e===C.BRACKET_R||e===C.BRACE_L||e===C.PIPE||e===C.BRACE_R}(e)?'"'.concat(e,'"'):e}var J=new Map,H=new Map,K=!0,Y=!1;function Z(e){return e.replace(/[\s,]+/g," ").trim()}function X(e){var t=Z(e);if(!J.has(t)){var n=function(e,t){return new z(e,t).parseDocument()}(e,{experimentalFragmentVariables:Y,allowLegacyFragmentVariables:Y});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");J.set(t,function(e){var t=new Set(e.definitions);t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(n){var r=e[n];r&&"object"==typeof r&&t.add(r)}))}));var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}(function(e){var t=new Set,n=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var r=e.name.value,i=Z((u=e.loc).source.body.substring(u.start,u.end)),o=H.get(r);o&&!o.has(i)?K&&console.warn("Warning: fragment with name "+r+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):o||H.set(r,o=new Set),o.add(i),t.has(i)||(t.add(i),n.push(e))}else n.push(e);var u})),(0,r.pi)((0,r.pi)({},e),{definitions:n})}(n)))}return J.get(t)}function ee(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"==typeof e&&(e=[e]);var r=e[0];return t.forEach((function(t,n){t&&"Document"===t.kind?r+=t.loc.source.body:r+=t,r+=e[n+1]})),X(r)}function te(){J.clear(),H.clear()}function ne(){K=!1}function re(){Y=!0}function ie(){Y=!1}var oe,ue=ee,ae=te,se=ne,ce=re,le=ie;(oe=ee||(ee={})).gql=ue,oe.resetCaches=ae,oe.disableFragmentWarnings=se,oe.enableExperimentalFragmentVariables=ce,oe.disableExperimentalFragmentVariables=le,ee.default=ee;var fe=ee},972:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prototype.toJSON;"function"==typeof t||(0,r.default)(0),e.prototype.inspect=t,i.default&&(e.prototype[i.default]=t)};var r=o(n(7706)),i=o(n(8554));function o(e){return e&&e.__esModule?e:{default:e}}},8002:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return u(e,[])};var r,i=(r=n(8554))&&r.__esModule?r:{default:r};function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function u(e,t){switch(o(e)){case"string":return JSON.stringify(e);case"function":return e.name?"[function ".concat(e.name,"]"):"[function]";case"object":return null===e?"null":function(e,t){if(-1!==t.indexOf(e))return"[Circular]";var n=[].concat(t,[e]),r=function(e){var t=e[String(i.default)];return"function"==typeof t?t:"function"==typeof e.inspect?e.inspect:void 0}(e);if(void 0!==r){var o=r.call(e);if(o!==e)return"string"==typeof o?o:u(o,n)}else if(Array.isArray(e))return function(e,t){if(0===e.length)return"[]";if(t.length>2)return"[Array]";for(var n=Math.min(10,e.length),r=e.length-n,i=[],o=0;o<n;++o)i.push(u(e[o],t));return 1===r?i.push("... 1 more item"):r>1&&i.push("... ".concat(r," more items")),"["+i.join(", ")+"]"}(e,n);return function(e,t){var n=Object.keys(e);return 0===n.length?"{}":t.length>2?"["+function(e){var t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===t&&"function"==typeof e.constructor){var n=e.constructor.name;if("string"==typeof n&&""!==n)return n}return t}(e)+"]":"{ "+n.map((function(n){return n+": "+u(e[n],t)})).join(", ")+" }"}(e,n)}(e,t);default:return String(e)}}},7706:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}},8554:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):void 0;t.default=n},1807:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isNode=function(e){return null!=e&&"string"==typeof e.kind},t.Token=t.Location=void 0;var r,i=(r=n(972))&&r.__esModule?r:{default:r},o=function(){function e(e,t,n){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=n}return e.prototype.toJSON=function(){return{start:this.start,end:this.end}},e}();t.Location=o,(0,i.default)(o);var u=function(){function e(e,t,n,r,i,o,u){this.kind=e,this.start=t,this.end=n,this.line=r,this.column=i,this.value=u,this.prev=o,this.next=null}return e.prototype.toJSON=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}},e}();t.Token=u,(0,i.default)(u)},849:function(e,t){"use strict";function n(e){for(var t=0;t<e.length;++t)if(" "!==e[t]&&"\t"!==e[t])return!1;return!0}function r(e){for(var t,n=!0,r=!0,i=0,o=null,u=0;u<e.length;++u)switch(e.charCodeAt(u)){case 13:10===e.charCodeAt(u+1)&&++u;case 10:n=!1,r=!0,i=0;break;case 9:case 32:++i;break;default:r&&!n&&(null===o||i<o)&&(o=i),r=!1}return null!==(t=o)&&void 0!==t?t:0}Object.defineProperty(t,"__esModule",{value:!0}),t.dedentBlockStringValue=function(e){var t=e.split(/\r\n|[\n\r]/g),i=r(e);if(0!==i)for(var o=1;o<t.length;o++)t[o]=t[o].slice(i);for(var u=0;u<t.length&&n(t[u]);)++u;for(var a=t.length;a>u&&n(t[a-1]);)--a;return t.slice(u,a).join("\n")},t.getBlockStringIndentation=r,t.printBlockString=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=-1===e.indexOf("\n"),i=" "===e[0]||"\t"===e[0],o='"'===e[e.length-1],u="\\"===e[e.length-1],a=!r||o||u||n,s="";return!a||r&&i||(s+="\n"+t),s+=t?e.replace(/\n/g,"\n"+t):e,a&&(s+="\n"),'"""'+s.replace(/"""/g,'\\"""')+'"""'}},2828:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Kind=void 0;var n=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"});t.Kind=n},3033:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.print=function(e){return(0,r.visit)(e,{leave:o})};var r=n(285),i=n(849),o={Name:function(e){return e.value},Variable:function(e){return"$"+e.name},Document:function(e){return a(e.definitions,"\n\n")+"\n"},OperationDefinition:function(e){var t=e.operation,n=e.name,r=c("(",a(e.variableDefinitions,", "),")"),i=a(e.directives," "),o=e.selectionSet;return n||i||r||"query"!==t?a([t,a([n,r]),i,o]," "):o},VariableDefinition:function(e){var t=e.variable,n=e.type,r=e.defaultValue,i=e.directives;return t+": "+n+c(" = ",r)+c(" ",a(i," "))},SelectionSet:function(e){return s(e.selections)},Field:function(e){var t=e.alias,n=e.name,r=e.arguments,i=e.directives,o=e.selectionSet,u=c("",t,": ")+n,s=u+c("(",a(r,", "),")");return s.length>80&&(s=u+c("(\n",l(a(r,"\n")),"\n)")),a([s,a(i," "),o]," ")},Argument:function(e){return e.name+": "+e.value},FragmentSpread:function(e){return"..."+e.name+c(" ",a(e.directives," "))},InlineFragment:function(e){var t=e.typeCondition,n=e.directives,r=e.selectionSet;return a(["...",c("on ",t),a(n," "),r]," ")},FragmentDefinition:function(e){var t=e.name,n=e.typeCondition,r=e.variableDefinitions,i=e.directives,o=e.selectionSet;return"fragment ".concat(t).concat(c("(",a(r,", "),")")," ")+"on ".concat(n," ").concat(c("",a(i," ")," "))+o},IntValue:function(e){return e.value},FloatValue:function(e){return e.value},StringValue:function(e,t){var n=e.value;return e.block?(0,i.printBlockString)(n,"description"===t?"":"  "):JSON.stringify(n)},BooleanValue:function(e){return e.value?"true":"false"},NullValue:function(){return"null"},EnumValue:function(e){return e.value},ListValue:function(e){return"["+a(e.values,", ")+"]"},ObjectValue:function(e){return"{"+a(e.fields,", ")+"}"},ObjectField:function(e){return e.name+": "+e.value},Directive:function(e){return"@"+e.name+c("(",a(e.arguments,", "),")")},NamedType:function(e){return e.name},ListType:function(e){return"["+e.type+"]"},NonNullType:function(e){return e.type+"!"},SchemaDefinition:u((function(e){var t=e.directives,n=e.operationTypes;return a(["schema",a(t," "),s(n)]," ")})),OperationTypeDefinition:function(e){return e.operation+": "+e.type},ScalarTypeDefinition:u((function(e){return a(["scalar",e.name,a(e.directives," ")]," ")})),ObjectTypeDefinition:u((function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return a(["type",t,c("implements ",a(n," & ")),a(r," "),s(i)]," ")})),FieldDefinition:u((function(e){var t=e.name,n=e.arguments,r=e.type,i=e.directives;return t+(p(n)?c("(\n",l(a(n,"\n")),"\n)"):c("(",a(n,", "),")"))+": "+r+c(" ",a(i," "))})),InputValueDefinition:u((function(e){var t=e.name,n=e.type,r=e.defaultValue,i=e.directives;return a([t+": "+n,c("= ",r),a(i," ")]," ")})),InterfaceTypeDefinition:u((function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return a(["interface",t,c("implements ",a(n," & ")),a(r," "),s(i)]," ")})),UnionTypeDefinition:u((function(e){var t=e.name,n=e.directives,r=e.types;return a(["union",t,a(n," "),r&&0!==r.length?"= "+a(r," | "):""]," ")})),EnumTypeDefinition:u((function(e){var t=e.name,n=e.directives,r=e.values;return a(["enum",t,a(n," "),s(r)]," ")})),EnumValueDefinition:u((function(e){return a([e.name,a(e.directives," ")]," ")})),InputObjectTypeDefinition:u((function(e){var t=e.name,n=e.directives,r=e.fields;return a(["input",t,a(n," "),s(r)]," ")})),DirectiveDefinition:u((function(e){var t=e.name,n=e.arguments,r=e.repeatable,i=e.locations;return"directive @"+t+(p(n)?c("(\n",l(a(n,"\n")),"\n)"):c("(",a(n,", "),")"))+(r?" repeatable":"")+" on "+a(i," | ")})),SchemaExtension:function(e){var t=e.directives,n=e.operationTypes;return a(["extend schema",a(t," "),s(n)]," ")},ScalarTypeExtension:function(e){return a(["extend scalar",e.name,a(e.directives," ")]," ")},ObjectTypeExtension:function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return a(["extend type",t,c("implements ",a(n," & ")),a(r," "),s(i)]," ")},InterfaceTypeExtension:function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return a(["extend interface",t,c("implements ",a(n," & ")),a(r," "),s(i)]," ")},UnionTypeExtension:function(e){var t=e.name,n=e.directives,r=e.types;return a(["extend union",t,a(n," "),r&&0!==r.length?"= "+a(r," | "):""]," ")},EnumTypeExtension:function(e){var t=e.name,n=e.directives,r=e.values;return a(["extend enum",t,a(n," "),s(r)]," ")},InputObjectTypeExtension:function(e){var t=e.name,n=e.directives,r=e.fields;return a(["extend input",t,a(n," "),s(r)]," ")}};function u(e){return function(t){return a([t.description,e(t)],"\n")}}function a(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!==(t=null==e?void 0:e.filter((function(e){return e})).join(n))&&void 0!==t?t:""}function s(e){return c("{\n",l(a(e,"\n")),"\n}")}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return null!=t&&""!==t?e+t+n:""}function l(e){return c("  ",e.replace(/\n/g,"\n  "))}function f(e){return-1!==e.indexOf("\n")}function p(e){return null!=e&&e.some(f)}},285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.visit=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u,r=void 0,c=Array.isArray(e),l=[e],f=-1,p=[],d=void 0,h=void 0,v=void 0,y=[],m=[],g=e;do{var b=++f===l.length,_=b&&0!==p.length;if(b){if(h=0===m.length?void 0:y[y.length-1],d=v,v=m.pop(),_){if(c)d=d.slice();else{for(var w={},O=0,k=Object.keys(d);O<k.length;O++){var T=k[O];w[T]=d[T]}d=w}for(var E=0,S=0;S<p.length;S++){var C=p[S][0],x=p[S][1];c&&(C-=E),c&&null===x?(d.splice(C,1),E++):d[C]=x}}f=r.index,l=r.keys,p=r.edits,c=r.inArray,r=r.prev}else{if(h=v?c?f:l[f]:void 0,null==(d=v?v[h]:g))continue;v&&y.push(h)}var I,j=void 0;if(!Array.isArray(d)){if(!(0,o.isNode)(d))throw new Error("Invalid AST Node: ".concat((0,i.default)(d),"."));var A=s(t,d.kind,b);if(A){if((j=A.call(t,d,h,v,y,m))===a)break;if(!1===j){if(!b){y.pop();continue}}else if(void 0!==j&&(p.push([h,j]),!b)){if(!(0,o.isNode)(j)){y.pop();continue}d=j}}}void 0===j&&_&&p.push([h,d]),b?y.pop():(r={inArray:c,index:f,keys:l,edits:p,prev:r},l=(c=Array.isArray(d))?d:null!==(I=n[d.kind])&&void 0!==I?I:[],f=-1,p=[],v&&m.push(v),v=d)}while(void 0!==r);return 0!==p.length&&(g=p[p.length-1][1]),g},t.visitInParallel=function(e){var t=new Array(e.length);return{enter:function(n){for(var r=0;r<e.length;r++)if(null==t[r]){var i=s(e[r],n.kind,!1);if(i){var o=i.apply(e[r],arguments);if(!1===o)t[r]=n;else if(o===a)t[r]=a;else if(void 0!==o)return o}}},leave:function(n){for(var r=0;r<e.length;r++)if(null==t[r]){var i=s(e[r],n.kind,!0);if(i){var o=i.apply(e[r],arguments);if(o===a)t[r]=a;else if(void 0!==o&&!1!==o)return o}}else t[r]===n&&(t[r]=null)}}},t.getVisitFn=s,t.BREAK=t.QueryDocumentKeys=void 0;var r,i=(r=n(8002))&&r.__esModule?r:{default:r},o=n(1807),u={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]};t.QueryDocumentKeys=u;var a=Object.freeze({});function s(e,t,n){var r=e[t];if(r){if(!n&&"function"==typeof r)return r;var i=n?r.leave:r.enter;if("function"==typeof i)return i}else{var o=n?e.leave:e.enter;if(o){if("function"==typeof o)return o;var u=o[t];if("function"==typeof u)return u}}}t.BREAK=a},9535:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperationAST=function(e,t){for(var n=null,i=0,o=e.definitions;i<o.length;i++){var u,a=o[i];if(a.kind===r.Kind.OPERATION_DEFINITION)if(null==t){if(n)return null;n=a}else if((null===(u=a.name)||void 0===u?void 0:u.value)===t)return a}return n};var r=n(2828)},8679:function(e,t,n){"use strict";var r=n(9864),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function s(e){return r.isMemo(e)?u:a[e.$$typeof]||i}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=u;var c=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(h){var i=d(n);i&&i!==h&&e(t,i,r)}var u=l(n);f&&(u=u.concat(f(n)));for(var a=s(t),v=s(n),y=0;y<u.length;++y){var m=u[y];if(!(o[m]||r&&r[m]||v&&v[m]||a&&a[m])){var g=p(n,m);try{c(t,m,g)}catch(e){}}}}return t}},8552:function(e,t,n){var r=n(852)(n(5639),"DataView");e.exports=r},1989:function(e,t,n){var r=n(1789),i=n(401),o=n(7667),u=n(1327),a=n(1866);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=i,s.prototype.get=o,s.prototype.has=u,s.prototype.set=a,e.exports=s},8407:function(e,t,n){var r=n(7040),i=n(4125),o=n(2117),u=n(7518),a=n(4705);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=i,s.prototype.get=o,s.prototype.has=u,s.prototype.set=a,e.exports=s},7071:function(e,t,n){var r=n(852)(n(5639),"Map");e.exports=r},3369:function(e,t,n){var r=n(4785),i=n(1285),o=n(6e3),u=n(9916),a=n(5265);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=i,s.prototype.get=o,s.prototype.has=u,s.prototype.set=a,e.exports=s},3818:function(e,t,n){var r=n(852)(n(5639),"Promise");e.exports=r},8525:function(e,t,n){var r=n(852)(n(5639),"Set");e.exports=r},8668:function(e,t,n){var r=n(3369),i=n(619),o=n(2385);function u(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t])}u.prototype.add=u.prototype.push=i,u.prototype.has=o,e.exports=u},6384:function(e,t,n){var r=n(8407),i=n(7465),o=n(3779),u=n(7599),a=n(4758),s=n(4309);function c(e){var t=this.__data__=new r(e);this.size=t.size}c.prototype.clear=i,c.prototype.delete=o,c.prototype.get=u,c.prototype.has=a,c.prototype.set=s,e.exports=c},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},1149:function(e,t,n){var r=n(5639).Uint8Array;e.exports=r},577:function(e,t,n){var r=n(852)(n(5639),"WeakMap");e.exports=r},4963:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var u=e[n];t(u,n,e)&&(o[i++]=u)}return o}},4636:function(e,t,n){var r=n(2545),i=n(5694),o=n(1469),u=n(4144),a=n(5776),s=n(6719),c=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=o(e),l=!n&&i(e),f=!n&&!l&&u(e),p=!n&&!l&&!f&&s(e),d=n||l||f||p,h=d?r(e.length,String):[],v=h.length;for(var y in e)!t&&!c.call(e,y)||d&&("length"==y||f&&("offset"==y||"parent"==y)||p&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||a(y,v))||h.push(y);return h}},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}},2488:function(e){e.exports=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}},2908:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}},8470:function(e,t,n){var r=n(7813);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},7786:function(e,t,n){var r=n(1811),i=n(327);e.exports=function(e,t){for(var n=0,o=(t=r(t,e)).length;null!=e&&n<o;)e=e[i(t[n++])];return n&&n==o?e:void 0}},8866:function(e,t,n){var r=n(2488),i=n(1469);e.exports=function(e,t,n){var o=t(e);return i(e)?o:r(o,n(e))}},4239:function(e,t,n){var r=n(2705),i=n(9607),o=n(2333),u=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":u&&u in Object(e)?i(e):o(e)}},13:function(e){e.exports=function(e,t){return null!=e&&t in Object(e)}},9454:function(e,t,n){var r=n(4239),i=n(7005);e.exports=function(e){return i(e)&&"[object Arguments]"==r(e)}},939:function(e,t,n){var r=n(2492),i=n(7005);e.exports=function e(t,n,o,u,a){return t===n||(null==t||null==n||!i(t)&&!i(n)?t!=t&&n!=n:r(t,n,o,u,e,a))}},2492:function(e,t,n){var r=n(6384),i=n(7114),o=n(8351),u=n(6096),a=n(4160),s=n(1469),c=n(4144),l=n(6719),f="[object Arguments]",p="[object Array]",d="[object Object]",h=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,v,y,m){var g=s(e),b=s(t),_=g?p:a(e),w=b?p:a(t),O=(_=_==f?d:_)==d,k=(w=w==f?d:w)==d,T=_==w;if(T&&c(e)){if(!c(t))return!1;g=!0,O=!1}if(T&&!O)return m||(m=new r),g||l(e)?i(e,t,n,v,y,m):o(e,t,_,n,v,y,m);if(!(1&n)){var E=O&&h.call(e,"__wrapped__"),S=k&&h.call(t,"__wrapped__");if(E||S){var C=E?e.value():e,x=S?t.value():t;return m||(m=new r),y(C,x,n,v,m)}}return!!T&&(m||(m=new r),u(e,t,n,v,y,m))}},2958:function(e,t,n){var r=n(6384),i=n(939);e.exports=function(e,t,n,o){var u=n.length,a=u,s=!o;if(null==e)return!a;for(e=Object(e);u--;){var c=n[u];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++u<a;){var l=(c=n[u])[0],f=e[l],p=c[1];if(s&&c[2]){if(void 0===f&&!(l in e))return!1}else{var d=new r;if(o)var h=o(f,p,l,e,t,d);if(!(void 0===h?i(p,f,3,o,d):h))return!1}}return!0}},8458:function(e,t,n){var r=n(3560),i=n(5346),o=n(3218),u=n(346),a=/^\[object .+?Constructor\]$/,s=Function.prototype,c=Object.prototype,l=s.toString,f=c.hasOwnProperty,p=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!o(e)||i(e))&&(r(e)?p:a).test(u(e))}},8749:function(e,t,n){var r=n(4239),i=n(1780),o=n(7005),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,e.exports=function(e){return o(e)&&i(e.length)&&!!u[r(e)]}},7206:function(e,t,n){var r=n(1573),i=n(6432),o=n(6557),u=n(1469),a=n(9601);e.exports=function(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?u(e)?i(e[0],e[1]):r(e):a(e)}},280:function(e,t,n){var r=n(5726),i=n(6916),o=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return i(e);var t=[];for(var n in Object(e))o.call(e,n)&&"constructor"!=n&&t.push(n);return t}},1573:function(e,t,n){var r=n(2958),i=n(1499),o=n(2634);e.exports=function(e){var t=i(e);return 1==t.length&&t[0][2]?o(t[0][0],t[0][1]):function(n){return n===e||r(n,e,t)}}},6432:function(e,t,n){var r=n(939),i=n(7361),o=n(9095),u=n(5403),a=n(9162),s=n(2634),c=n(327);e.exports=function(e,t){return u(e)&&a(t)?s(c(e),t):function(n){var u=i(n,e);return void 0===u&&u===t?o(n,e):r(t,u,3)}}},371:function(e){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},9152:function(e,t,n){var r=n(7786);e.exports=function(e){return function(t){return r(t,e)}}},5742:function(e,t,n){var r=n(7406),i=n(5776),o=Array.prototype.splice;e.exports=function(e,t){for(var n=e?t.length:0,u=n-1;n--;){var a=t[n];if(n==u||a!==s){var s=a;i(a)?o.call(e,a,1):r(e,a)}}return e}},4259:function(e){e.exports=function(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(i);++r<i;)o[r]=e[r+t];return o}},2545:function(e){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},531:function(e,t,n){var r=n(2705),i=n(9932),o=n(1469),u=n(3448),a=r?r.prototype:void 0,s=a?a.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return i(t,e)+"";if(u(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},1717:function(e){e.exports=function(e){return function(t){return e(t)}}},7406:function(e,t,n){var r=n(1811),i=n(928),o=n(292),u=n(327);e.exports=function(e,t){return t=r(t,e),null==(e=o(e,t))||delete e[u(i(t))]}},4757:function(e){e.exports=function(e,t){return e.has(t)}},1811:function(e,t,n){var r=n(1469),i=n(5403),o=n(5514),u=n(9833);e.exports=function(e,t){return r(e)?e:i(e,t)?[e]:o(u(e))}},4429:function(e,t,n){var r=n(5639)["__core-js_shared__"];e.exports=r},7114:function(e,t,n){var r=n(8668),i=n(2908),o=n(4757);e.exports=function(e,t,n,u,a,s){var c=1&n,l=e.length,f=t.length;if(l!=f&&!(c&&f>l))return!1;var p=s.get(e),d=s.get(t);if(p&&d)return p==t&&d==e;var h=-1,v=!0,y=2&n?new r:void 0;for(s.set(e,t),s.set(t,e);++h<l;){var m=e[h],g=t[h];if(u)var b=c?u(g,m,h,t,e,s):u(m,g,h,e,t,s);if(void 0!==b){if(b)continue;v=!1;break}if(y){if(!i(t,(function(e,t){if(!o(y,t)&&(m===e||a(m,e,n,u,s)))return y.push(t)}))){v=!1;break}}else if(m!==g&&!a(m,g,n,u,s)){v=!1;break}}return s.delete(e),s.delete(t),v}},8351:function(e,t,n){var r=n(2705),i=n(1149),o=n(7813),u=n(7114),a=n(8776),s=n(1814),c=r?r.prototype:void 0,l=c?c.valueOf:void 0;e.exports=function(e,t,n,r,c,f,p){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!f(new i(e),new i(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return o(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var d=a;case"[object Set]":var h=1&r;if(d||(d=s),e.size!=t.size&&!h)return!1;var v=p.get(e);if(v)return v==t;r|=2,p.set(e,t);var y=u(d(e),d(t),r,c,f,p);return p.delete(e),y;case"[object Symbol]":if(l)return l.call(e)==l.call(t)}return!1}},6096:function(e,t,n){var r=n(8234),i=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,o,u,a){var s=1&n,c=r(e),l=c.length;if(l!=r(t).length&&!s)return!1;for(var f=l;f--;){var p=c[f];if(!(s?p in t:i.call(t,p)))return!1}var d=a.get(e),h=a.get(t);if(d&&h)return d==t&&h==e;var v=!0;a.set(e,t),a.set(t,e);for(var y=s;++f<l;){var m=e[p=c[f]],g=t[p];if(o)var b=s?o(g,m,p,t,e,a):o(m,g,p,e,t,a);if(!(void 0===b?m===g||u(m,g,n,o,a):b)){v=!1;break}y||(y="constructor"==p)}if(v&&!y){var _=e.constructor,w=t.constructor;_==w||!("constructor"in e)||!("constructor"in t)||"function"==typeof _&&_ instanceof _&&"function"==typeof w&&w instanceof w||(v=!1)}return a.delete(e),a.delete(t),v}},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},8234:function(e,t,n){var r=n(8866),i=n(9551),o=n(3674);e.exports=function(e){return r(e,o,i)}},5050:function(e,t,n){var r=n(7019);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},1499:function(e,t,n){var r=n(9162),i=n(3674);e.exports=function(e){for(var t=i(e),n=t.length;n--;){var o=t[n],u=e[o];t[n]=[o,u,r(u)]}return t}},852:function(e,t,n){var r=n(8458),i=n(7801);e.exports=function(e,t){var n=i(e,t);return r(n)?n:void 0}},9607:function(e,t,n){var r=n(2705),i=Object.prototype,o=i.hasOwnProperty,u=i.toString,a=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var i=u.call(e);return r&&(t?e[a]=n:delete e[a]),i}},9551:function(e,t,n){var r=n(4963),i=n(479),o=Object.prototype.propertyIsEnumerable,u=Object.getOwnPropertySymbols,a=u?function(e){return null==e?[]:(e=Object(e),r(u(e),(function(t){return o.call(e,t)})))}:i;e.exports=a},4160:function(e,t,n){var r=n(8552),i=n(7071),o=n(3818),u=n(8525),a=n(577),s=n(4239),c=n(346),l="[object Map]",f="[object Promise]",p="[object Set]",d="[object WeakMap]",h="[object DataView]",v=c(r),y=c(i),m=c(o),g=c(u),b=c(a),_=s;(r&&_(new r(new ArrayBuffer(1)))!=h||i&&_(new i)!=l||o&&_(o.resolve())!=f||u&&_(new u)!=p||a&&_(new a)!=d)&&(_=function(e){var t=s(e),n="[object Object]"==t?e.constructor:void 0,r=n?c(n):"";if(r)switch(r){case v:return h;case y:return l;case m:return f;case g:return p;case b:return d}return t}),e.exports=_},7801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},222:function(e,t,n){var r=n(1811),i=n(5694),o=n(1469),u=n(5776),a=n(1780),s=n(327);e.exports=function(e,t,n){for(var c=-1,l=(t=r(t,e)).length,f=!1;++c<l;){var p=s(t[c]);if(!(f=null!=e&&n(e,p)))break;e=e[p]}return f||++c!=l?f:!!(l=null==e?0:e.length)&&a(l)&&u(p,l)&&(o(e)||i(e))}},1789:function(e,t,n){var r=n(4536);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},7667:function(e,t,n){var r=n(4536),i=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return i.call(t,e)?t[e]:void 0}},1327:function(e,t,n){var r=n(4536),i=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:i.call(t,e)}},1866:function(e,t,n){var r=n(4536);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},5776:function(e){var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,n){var r=typeof e;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&t.test(e))&&e>-1&&e%1==0&&e<n}},5403:function(e,t,n){var r=n(1469),i=n(3448),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!i(e))||u.test(e)||!o.test(e)||null!=t&&e in Object(t)}},7019:function(e){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},5346:function(e,t,n){var r,i=n(4429),o=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!o&&o in e}},5726:function(e){var t=Object.prototype;e.exports=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||t)}},9162:function(e,t,n){var r=n(3218);e.exports=function(e){return e==e&&!r(e)}},7040:function(e){e.exports=function(){this.__data__=[],this.size=0}},4125:function(e,t,n){var r=n(8470),i=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0||(n==t.length-1?t.pop():i.call(t,n,1),--this.size,0))}},2117:function(e,t,n){var r=n(8470);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},7518:function(e,t,n){var r=n(8470);e.exports=function(e){return r(this.__data__,e)>-1}},4705:function(e,t,n){var r=n(8470);e.exports=function(e,t){var n=this.__data__,i=r(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}},4785:function(e,t,n){var r=n(1989),i=n(8407),o=n(7071);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||i),string:new r}}},1285:function(e,t,n){var r=n(5050);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},6e3:function(e,t,n){var r=n(5050);e.exports=function(e){return r(this,e).get(e)}},9916:function(e,t,n){var r=n(5050);e.exports=function(e){return r(this,e).has(e)}},5265:function(e,t,n){var r=n(5050);e.exports=function(e,t){var n=r(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}},8776:function(e){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}},2634:function(e){e.exports=function(e,t){return function(n){return null!=n&&n[e]===t&&(void 0!==t||e in Object(n))}}},4523:function(e,t,n){var r=n(8306);e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},4536:function(e,t,n){var r=n(852)(Object,"create");e.exports=r},6916:function(e,t,n){var r=n(5569)(Object.keys,Object);e.exports=r},1167:function(e,t,n){e=n.nmd(e);var r=n(1957),i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,u=o&&o.exports===i&&r.process,a=function(){try{return o&&o.require&&o.require("util").types||u&&u.binding&&u.binding("util")}catch(e){}}();e.exports=a},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5569:function(e){e.exports=function(e,t){return function(n){return e(t(n))}}},292:function(e,t,n){var r=n(7786),i=n(4259);e.exports=function(e,t){return t.length<2?e:r(e,i(t,0,-1))}},5639:function(e,t,n){var r=n(1957),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},619:function(e){e.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},2385:function(e){e.exports=function(e){return this.__data__.has(e)}},1814:function(e){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}},7465:function(e,t,n){var r=n(8407);e.exports=function(){this.__data__=new r,this.size=0}},3779:function(e){e.exports=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}},7599:function(e){e.exports=function(e){return this.__data__.get(e)}},4758:function(e){e.exports=function(e){return this.__data__.has(e)}},4309:function(e,t,n){var r=n(8407),i=n(7071),o=n(3369);e.exports=function(e,t){var n=this.__data__;if(n instanceof r){var u=n.__data__;if(!i||u.length<199)return u.push([e,t]),this.size=++n.size,this;n=this.__data__=new o(u)}return n.set(e,t),this.size=n.size,this}},5514:function(e,t,n){var r=n(4523),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,u=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,(function(e,n,r,i){t.push(r?i.replace(o,"$1"):n||e)})),t}));e.exports=u},327:function(e,t,n){var r=n(3448);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},7813:function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},7361:function(e,t,n){var r=n(7786);e.exports=function(e,t,n){var i=null==e?void 0:r(e,t);return void 0===i?n:i}},9095:function(e,t,n){var r=n(13),i=n(222);e.exports=function(e,t){return null!=e&&i(e,t,r)}},6557:function(e){e.exports=function(e){return e}},5694:function(e,t,n){var r=n(9454),i=n(7005),o=Object.prototype,u=o.hasOwnProperty,a=o.propertyIsEnumerable,s=r(function(){return arguments}())?r:function(e){return i(e)&&u.call(e,"callee")&&!a.call(e,"callee")};e.exports=s},1469:function(e){var t=Array.isArray;e.exports=t},8612:function(e,t,n){var r=n(3560),i=n(1780);e.exports=function(e){return null!=e&&i(e.length)&&!r(e)}},4144:function(e,t,n){e=n.nmd(e);var r=n(5639),i=n(5062),o=t&&!t.nodeType&&t,u=o&&e&&!e.nodeType&&e,a=u&&u.exports===o?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||i;e.exports=s},8446:function(e,t,n){var r=n(939);e.exports=function(e,t){return r(e,t)}},3560:function(e,t,n){var r=n(4239),i=n(3218);e.exports=function(e){if(!i(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},1780:function(e){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),i=n(7005);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==r(e)}},6719:function(e,t,n){var r=n(8749),i=n(1717),o=n(1167),u=o&&o.isTypedArray,a=u?i(u):r;e.exports=a},3674:function(e,t,n){var r=n(4636),i=n(280),o=n(8612);e.exports=function(e){return o(e)?r(e):i(e)}},928:function(e){e.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},6486:function(e,t,n){var r;e=n.nmd(e),function(){var i,o="Expected a function",u="__lodash_hash_undefined__",a="__lodash_placeholder__",s=32,c=128,l=1/0,f=9007199254740991,p=NaN,d=4294967295,h=[["ary",c],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",s],["partialRight",64],["rearg",256]],v="[object Arguments]",y="[object Array]",m="[object Boolean]",g="[object Date]",b="[object Error]",_="[object Function]",w="[object GeneratorFunction]",O="[object Map]",k="[object Number]",T="[object Object]",E="[object Promise]",S="[object RegExp]",C="[object Set]",x="[object String]",I="[object Symbol]",j="[object WeakMap]",A="[object ArrayBuffer]",N="[object DataView]",D="[object Float32Array]",P="[object Float64Array]",R="[object Int8Array]",F="[object Int16Array]",M="[object Int32Array]",L="[object Uint8Array]",q="[object Uint8ClampedArray]",V="[object Uint16Array]",Q="[object Uint32Array]",U=/\b__p \+= '';/g,B=/\b(__p \+=) '' \+/g,$=/(__e\(.*?\)|\b__t\)) \+\n'';/g,z=/&(?:amp|lt|gt|quot|#39);/g,G=/[&<>"']/g,W=RegExp(z.source),J=RegExp(G.source),H=/<%-([\s\S]+?)%>/g,K=/<%([\s\S]+?)%>/g,Y=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/,ee=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/[\\^$.*+?()[\]{}|]/g,ne=RegExp(te.source),re=/^\s+/,ie=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ue=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ce=/[()=,{}\[\]\/\s]/,le=/\\(\\)?/g,fe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,pe=/\w*$/,de=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,ve=/^\[object .+?Constructor\]$/,ye=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,ge=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,be=/($^)/,_e=/['\n\r\u2028\u2029\\]/g,we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Oe="a-z\\xdf-\\xf6\\xf8-\\xff",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",Te="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ee="["+Te+"]",Se="["+we+"]",Ce="\\d+",xe="["+Oe+"]",Ie="[^\\ud800-\\udfff"+Te+Ce+"\\u2700-\\u27bf"+Oe+ke+"]",je="\\ud83c[\\udffb-\\udfff]",Ae="[^\\ud800-\\udfff]",Ne="(?:\\ud83c[\\udde6-\\uddff]){2}",De="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+ke+"]",Re="(?:"+xe+"|"+Ie+")",Fe="(?:"+Pe+"|"+Ie+")",Me="(?:['’](?:d|ll|m|re|s|t|ve))?",Le="(?:['’](?:D|LL|M|RE|S|T|VE))?",qe="(?:"+Se+"|"+je+")?",Ve="[\\ufe0e\\ufe0f]?",Qe=Ve+qe+"(?:\\u200d(?:"+[Ae,Ne,De].join("|")+")"+Ve+qe+")*",Ue="(?:"+["[\\u2700-\\u27bf]",Ne,De].join("|")+")"+Qe,Be="(?:"+[Ae+Se+"?",Se,Ne,De,"[\\ud800-\\udfff]"].join("|")+")",$e=RegExp("['’]","g"),ze=RegExp(Se,"g"),Ge=RegExp(je+"(?="+je+")|"+Be+Qe,"g"),We=RegExp([Pe+"?"+xe+"+"+Me+"(?="+[Ee,Pe,"$"].join("|")+")",Fe+"+"+Le+"(?="+[Ee,Pe+Re,"$"].join("|")+")",Pe+"?"+Re+"+"+Me,Pe+"+"+Le,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ce,Ue].join("|"),"g"),Je=RegExp("[\\u200d\\ud800-\\udfff"+we+"\\ufe0e\\ufe0f]"),He=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ke=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ye=-1,Ze={};Ze[D]=Ze[P]=Ze[R]=Ze[F]=Ze[M]=Ze[L]=Ze[q]=Ze[V]=Ze[Q]=!0,Ze[v]=Ze[y]=Ze[A]=Ze[m]=Ze[N]=Ze[g]=Ze[b]=Ze[_]=Ze[O]=Ze[k]=Ze[T]=Ze[S]=Ze[C]=Ze[x]=Ze[j]=!1;var Xe={};Xe[v]=Xe[y]=Xe[A]=Xe[N]=Xe[m]=Xe[g]=Xe[D]=Xe[P]=Xe[R]=Xe[F]=Xe[M]=Xe[O]=Xe[k]=Xe[T]=Xe[S]=Xe[C]=Xe[x]=Xe[I]=Xe[L]=Xe[q]=Xe[V]=Xe[Q]=!0,Xe[b]=Xe[_]=Xe[j]=!1;var et={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},tt=parseFloat,nt=parseInt,rt="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,it="object"==typeof self&&self&&self.Object===Object&&self,ot=rt||it||Function("return this")(),ut=t&&!t.nodeType&&t,at=ut&&e&&!e.nodeType&&e,st=at&&at.exports===ut,ct=st&&rt.process,lt=function(){try{return at&&at.require&&at.require("util").types||ct&&ct.binding&&ct.binding("util")}catch(e){}}(),ft=lt&&lt.isArrayBuffer,pt=lt&&lt.isDate,dt=lt&&lt.isMap,ht=lt&&lt.isRegExp,vt=lt&&lt.isSet,yt=lt&&lt.isTypedArray;function mt(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function gt(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var u=e[i];t(r,u,n(u),e)}return r}function bt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function _t(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function wt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function Ot(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var u=e[n];t(u,n,e)&&(o[i++]=u)}return o}function kt(e,t){return!(null==e||!e.length)&&Dt(e,t,0)>-1}function Tt(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function Et(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function St(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function Ct(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}function xt(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function It(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var jt=Mt("length");function At(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function Nt(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Dt(e,t,n){return t==t?function(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):Nt(e,Rt,n)}function Pt(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1}function Rt(e){return e!=e}function Ft(e,t){var n=null==e?0:e.length;return n?Vt(e,t)/n:p}function Mt(e){return function(t){return null==t?i:t[e]}}function Lt(e){return function(t){return null==e?i:e[t]}}function qt(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n}function Vt(e,t){for(var n,r=-1,o=e.length;++r<o;){var u=t(e[r]);u!==i&&(n=n===i?u:n+u)}return n}function Qt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Ut(e){return e?e.slice(0,an(e)+1).replace(re,""):e}function Bt(e){return function(t){return e(t)}}function $t(e,t){return Et(t,(function(t){return e[t]}))}function zt(e,t){return e.has(t)}function Gt(e,t){for(var n=-1,r=e.length;++n<r&&Dt(t,e[n],0)>-1;);return n}function Wt(e,t){for(var n=e.length;n--&&Dt(t,e[n],0)>-1;);return n}function Jt(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}var Ht=Lt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Kt=Lt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function Yt(e){return"\\"+et[e]}function Zt(e){return Je.test(e)}function Xt(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function en(e,t){return function(n){return e(t(n))}}function tn(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var u=e[n];u!==t&&u!==a||(e[n]=a,o[i++]=n)}return o}function nn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function rn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function on(e){return Zt(e)?function(e){for(var t=Ge.lastIndex=0;Ge.test(e);)++t;return t}(e):jt(e)}function un(e){return Zt(e)?function(e){return e.match(Ge)||[]}(e):function(e){return e.split("")}(e)}function an(e){for(var t=e.length;t--&&ie.test(e.charAt(t)););return t}var sn=Lt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),cn=function e(t){var n,r=(t=null==t?ot:cn.defaults(ot.Object(),t,cn.pick(ot,Ke))).Array,ie=t.Date,we=t.Error,Oe=t.Function,ke=t.Math,Te=t.Object,Ee=t.RegExp,Se=t.String,Ce=t.TypeError,xe=r.prototype,Ie=Oe.prototype,je=Te.prototype,Ae=t["__core-js_shared__"],Ne=Ie.toString,De=je.hasOwnProperty,Pe=0,Re=(n=/[^.]+$/.exec(Ae&&Ae.keys&&Ae.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",Fe=je.toString,Me=Ne.call(Te),Le=ot._,qe=Ee("^"+Ne.call(De).replace(te,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ve=st?t.Buffer:i,Qe=t.Symbol,Ue=t.Uint8Array,Be=Ve?Ve.allocUnsafe:i,Ge=en(Te.getPrototypeOf,Te),Je=Te.create,et=je.propertyIsEnumerable,rt=xe.splice,it=Qe?Qe.isConcatSpreadable:i,ut=Qe?Qe.iterator:i,at=Qe?Qe.toStringTag:i,ct=function(){try{var e=co(Te,"defineProperty");return e({},"",{}),e}catch(e){}}(),lt=t.clearTimeout!==ot.clearTimeout&&t.clearTimeout,jt=ie&&ie.now!==ot.Date.now&&ie.now,Lt=t.setTimeout!==ot.setTimeout&&t.setTimeout,ln=ke.ceil,fn=ke.floor,pn=Te.getOwnPropertySymbols,dn=Ve?Ve.isBuffer:i,hn=t.isFinite,vn=xe.join,yn=en(Te.keys,Te),mn=ke.max,gn=ke.min,bn=ie.now,_n=t.parseInt,wn=ke.random,On=xe.reverse,kn=co(t,"DataView"),Tn=co(t,"Map"),En=co(t,"Promise"),Sn=co(t,"Set"),Cn=co(t,"WeakMap"),xn=co(Te,"create"),In=Cn&&new Cn,jn={},An=qo(kn),Nn=qo(Tn),Dn=qo(En),Pn=qo(Sn),Rn=qo(Cn),Fn=Qe?Qe.prototype:i,Mn=Fn?Fn.valueOf:i,Ln=Fn?Fn.toString:i;function qn(e){if(na(e)&&!zu(e)&&!(e instanceof Bn)){if(e instanceof Un)return e;if(De.call(e,"__wrapped__"))return Vo(e)}return new Un(e)}var Vn=function(){function e(){}return function(t){if(!ta(t))return{};if(Je)return Je(t);e.prototype=t;var n=new e;return e.prototype=i,n}}();function Qn(){}function Un(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=i}function Bn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=d,this.__views__=[]}function $n(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function zn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Gn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Wn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Gn;++t<n;)this.add(e[t])}function Jn(e){var t=this.__data__=new zn(e);this.size=t.size}function Hn(e,t){var n=zu(e),r=!n&&$u(e),i=!n&&!r&&Hu(e),o=!n&&!r&&!i&&la(e),u=n||r||i||o,a=u?Qt(e.length,Se):[],s=a.length;for(var c in e)!t&&!De.call(e,c)||u&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||mo(c,s))||a.push(c);return a}function Kn(e){var t=e.length;return t?e[Gr(0,t-1)]:i}function Yn(e,t){return Po(Ci(e),ur(t,0,e.length))}function Zn(e){return Po(Ci(e))}function Xn(e,t,n){(n!==i&&!Qu(e[t],n)||n===i&&!(t in e))&&ir(e,t,n)}function er(e,t,n){var r=e[t];De.call(e,t)&&Qu(r,n)&&(n!==i||t in e)||ir(e,t,n)}function tr(e,t){for(var n=e.length;n--;)if(Qu(e[n][0],t))return n;return-1}function nr(e,t,n,r){return fr(e,(function(e,i,o){t(r,e,n(e),o)})),r}function rr(e,t){return e&&xi(t,Na(t),e)}function ir(e,t,n){"__proto__"==t&&ct?ct(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function or(e,t){for(var n=-1,o=t.length,u=r(o),a=null==e;++n<o;)u[n]=a?i:Ca(e,t[n]);return u}function ur(e,t,n){return e==e&&(n!==i&&(e=e<=n?e:n),t!==i&&(e=e>=t?e:t)),e}function ar(e,t,n,r,o,u){var a,s=1&t,c=2&t,l=4&t;if(n&&(a=o?n(e,r,o,u):n(e)),a!==i)return a;if(!ta(e))return e;var f=zu(e);if(f){if(a=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&De.call(e,"index")&&(n.index=e.index,n.input=e.input),n}(e),!s)return Ci(e,a)}else{var p=po(e),d=p==_||p==w;if(Hu(e))return wi(e,s);if(p==T||p==v||d&&!o){if(a=c||d?{}:vo(e),!s)return c?function(e,t){return xi(e,fo(e),t)}(e,function(e,t){return e&&xi(t,Da(t),e)}(a,e)):function(e,t){return xi(e,lo(e),t)}(e,rr(a,e))}else{if(!Xe[p])return o?e:{};a=function(e,t,n){var r,i=e.constructor;switch(t){case A:return Oi(e);case m:case g:return new i(+e);case N:return function(e,t){var n=t?Oi(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case D:case P:case R:case F:case M:case L:case q:case V:case Q:return ki(e,n);case O:return new i;case k:case x:return new i(e);case S:return function(e){var t=new e.constructor(e.source,pe.exec(e));return t.lastIndex=e.lastIndex,t}(e);case C:return new i;case I:return r=e,Mn?Te(Mn.call(r)):{}}}(e,p,s)}}u||(u=new Jn);var h=u.get(e);if(h)return h;u.set(e,a),aa(e)?e.forEach((function(r){a.add(ar(r,t,n,r,e,u))})):ra(e)&&e.forEach((function(r,i){a.set(i,ar(r,t,n,i,e,u))}));var y=f?i:(l?c?no:to:c?Da:Na)(e);return bt(y||e,(function(r,i){y&&(r=e[i=r]),er(a,i,ar(r,t,n,i,e,u))})),a}function sr(e,t,n){var r=n.length;if(null==e)return!r;for(e=Te(e);r--;){var o=n[r],u=t[o],a=e[o];if(a===i&&!(o in e)||!u(a))return!1}return!0}function cr(e,t,n){if("function"!=typeof e)throw new Ce(o);return jo((function(){e.apply(i,n)}),t)}function lr(e,t,n,r){var i=-1,o=kt,u=!0,a=e.length,s=[],c=t.length;if(!a)return s;n&&(t=Et(t,Bt(n))),r?(o=Tt,u=!1):t.length>=200&&(o=zt,u=!1,t=new Wn(t));e:for(;++i<a;){var l=e[i],f=null==n?l:n(l);if(l=r||0!==l?l:0,u&&f==f){for(var p=c;p--;)if(t[p]===f)continue e;s.push(l)}else o(t,f,r)||s.push(l)}return s}qn.templateSettings={escape:H,evaluate:K,interpolate:Y,variable:"",imports:{_:qn}},qn.prototype=Qn.prototype,qn.prototype.constructor=qn,Un.prototype=Vn(Qn.prototype),Un.prototype.constructor=Un,Bn.prototype=Vn(Qn.prototype),Bn.prototype.constructor=Bn,$n.prototype.clear=function(){this.__data__=xn?xn(null):{},this.size=0},$n.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},$n.prototype.get=function(e){var t=this.__data__;if(xn){var n=t[e];return n===u?i:n}return De.call(t,e)?t[e]:i},$n.prototype.has=function(e){var t=this.__data__;return xn?t[e]!==i:De.call(t,e)},$n.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=xn&&t===i?u:t,this},zn.prototype.clear=function(){this.__data__=[],this.size=0},zn.prototype.delete=function(e){var t=this.__data__,n=tr(t,e);return!(n<0||(n==t.length-1?t.pop():rt.call(t,n,1),--this.size,0))},zn.prototype.get=function(e){var t=this.__data__,n=tr(t,e);return n<0?i:t[n][1]},zn.prototype.has=function(e){return tr(this.__data__,e)>-1},zn.prototype.set=function(e,t){var n=this.__data__,r=tr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Gn.prototype.clear=function(){this.size=0,this.__data__={hash:new $n,map:new(Tn||zn),string:new $n}},Gn.prototype.delete=function(e){var t=ao(this,e).delete(e);return this.size-=t?1:0,t},Gn.prototype.get=function(e){return ao(this,e).get(e)},Gn.prototype.has=function(e){return ao(this,e).has(e)},Gn.prototype.set=function(e,t){var n=ao(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Wn.prototype.add=Wn.prototype.push=function(e){return this.__data__.set(e,u),this},Wn.prototype.has=function(e){return this.__data__.has(e)},Jn.prototype.clear=function(){this.__data__=new zn,this.size=0},Jn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Jn.prototype.get=function(e){return this.__data__.get(e)},Jn.prototype.has=function(e){return this.__data__.has(e)},Jn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof zn){var r=n.__data__;if(!Tn||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Gn(r)}return n.set(e,t),this.size=n.size,this};var fr=Ai(br),pr=Ai(_r,!0);function dr(e,t){var n=!0;return fr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function hr(e,t,n){for(var r=-1,o=e.length;++r<o;){var u=e[r],a=t(u);if(null!=a&&(s===i?a==a&&!ca(a):n(a,s)))var s=a,c=u}return c}function vr(e,t){var n=[];return fr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function yr(e,t,n,r,i){var o=-1,u=e.length;for(n||(n=yo),i||(i=[]);++o<u;){var a=e[o];t>0&&n(a)?t>1?yr(a,t-1,n,r,i):St(i,a):r||(i[i.length]=a)}return i}var mr=Ni(),gr=Ni(!0);function br(e,t){return e&&mr(e,t,Na)}function _r(e,t){return e&&gr(e,t,Na)}function wr(e,t){return Ot(t,(function(t){return Zu(e[t])}))}function Or(e,t){for(var n=0,r=(t=mi(t,e)).length;null!=e&&n<r;)e=e[Lo(t[n++])];return n&&n==r?e:i}function kr(e,t,n){var r=t(e);return zu(e)?r:St(r,n(e))}function Tr(e){return null==e?e===i?"[object Undefined]":"[object Null]":at&&at in Te(e)?function(e){var t=De.call(e,at),n=e[at];try{e[at]=i;var r=!0}catch(e){}var o=Fe.call(e);return r&&(t?e[at]=n:delete e[at]),o}(e):function(e){return Fe.call(e)}(e)}function Er(e,t){return e>t}function Sr(e,t){return null!=e&&De.call(e,t)}function Cr(e,t){return null!=e&&t in Te(e)}function xr(e,t,n){for(var o=n?Tt:kt,u=e[0].length,a=e.length,s=a,c=r(a),l=1/0,f=[];s--;){var p=e[s];s&&t&&(p=Et(p,Bt(t))),l=gn(p.length,l),c[s]=!n&&(t||u>=120&&p.length>=120)?new Wn(s&&p):i}p=e[0];var d=-1,h=c[0];e:for(;++d<u&&f.length<l;){var v=p[d],y=t?t(v):v;if(v=n||0!==v?v:0,!(h?zt(h,y):o(f,y,n))){for(s=a;--s;){var m=c[s];if(!(m?zt(m,y):o(e[s],y,n)))continue e}h&&h.push(y),f.push(v)}}return f}function Ir(e,t,n){var r=null==(e=So(e,t=mi(t,e)))?e:e[Lo(Yo(t))];return null==r?i:mt(r,e,n)}function jr(e){return na(e)&&Tr(e)==v}function Ar(e,t,n,r,o){return e===t||(null==e||null==t||!na(e)&&!na(t)?e!=e&&t!=t:function(e,t,n,r,o,u){var a=zu(e),s=zu(t),c=a?y:po(e),l=s?y:po(t),f=(c=c==v?T:c)==T,p=(l=l==v?T:l)==T,d=c==l;if(d&&Hu(e)){if(!Hu(t))return!1;a=!0,f=!1}if(d&&!f)return u||(u=new Jn),a||la(e)?Xi(e,t,n,r,o,u):function(e,t,n,r,i,o,u){switch(n){case N:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case A:return!(e.byteLength!=t.byteLength||!o(new Ue(e),new Ue(t)));case m:case g:case k:return Qu(+e,+t);case b:return e.name==t.name&&e.message==t.message;case S:case x:return e==t+"";case O:var a=Xt;case C:var s=1&r;if(a||(a=nn),e.size!=t.size&&!s)return!1;var c=u.get(e);if(c)return c==t;r|=2,u.set(e,t);var l=Xi(a(e),a(t),r,i,o,u);return u.delete(e),l;case I:if(Mn)return Mn.call(e)==Mn.call(t)}return!1}(e,t,c,n,r,o,u);if(!(1&n)){var h=f&&De.call(e,"__wrapped__"),_=p&&De.call(t,"__wrapped__");if(h||_){var w=h?e.value():e,E=_?t.value():t;return u||(u=new Jn),o(w,E,n,r,u)}}return!!d&&(u||(u=new Jn),function(e,t,n,r,o,u){var a=1&n,s=to(e),c=s.length;if(c!=to(t).length&&!a)return!1;for(var l=c;l--;){var f=s[l];if(!(a?f in t:De.call(t,f)))return!1}var p=u.get(e),d=u.get(t);if(p&&d)return p==t&&d==e;var h=!0;u.set(e,t),u.set(t,e);for(var v=a;++l<c;){var y=e[f=s[l]],m=t[f];if(r)var g=a?r(m,y,f,t,e,u):r(y,m,f,e,t,u);if(!(g===i?y===m||o(y,m,n,r,u):g)){h=!1;break}v||(v="constructor"==f)}if(h&&!v){var b=e.constructor,_=t.constructor;b==_||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof _&&_ instanceof _||(h=!1)}return u.delete(e),u.delete(t),h}(e,t,n,r,o,u))}(e,t,n,r,Ar,o))}function Nr(e,t,n,r){var o=n.length,u=o,a=!r;if(null==e)return!u;for(e=Te(e);o--;){var s=n[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<u;){var c=(s=n[o])[0],l=e[c],f=s[1];if(a&&s[2]){if(l===i&&!(c in e))return!1}else{var p=new Jn;if(r)var d=r(l,f,c,e,t,p);if(!(d===i?Ar(f,l,3,r,p):d))return!1}}return!0}function Dr(e){return!(!ta(e)||(t=e,Re&&Re in t))&&(Zu(e)?qe:ve).test(qo(e));var t}function Pr(e){return"function"==typeof e?e:null==e?is:"object"==typeof e?zu(e)?qr(e[0],e[1]):Lr(e):ds(e)}function Rr(e){if(!Oo(e))return yn(e);var t=[];for(var n in Te(e))De.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Fr(e,t){return e<t}function Mr(e,t){var n=-1,i=Wu(e)?r(e.length):[];return fr(e,(function(e,r,o){i[++n]=t(e,r,o)})),i}function Lr(e){var t=so(e);return 1==t.length&&t[0][2]?To(t[0][0],t[0][1]):function(n){return n===e||Nr(n,e,t)}}function qr(e,t){return bo(e)&&ko(t)?To(Lo(e),t):function(n){var r=Ca(n,e);return r===i&&r===t?xa(n,e):Ar(t,r,3)}}function Vr(e,t,n,r,o){e!==t&&mr(t,(function(u,a){if(o||(o=new Jn),ta(u))!function(e,t,n,r,o,u,a){var s=xo(e,n),c=xo(t,n),l=a.get(c);if(l)Xn(e,n,l);else{var f=u?u(s,c,n+"",e,t,a):i,p=f===i;if(p){var d=zu(c),h=!d&&Hu(c),v=!d&&!h&&la(c);f=c,d||h||v?zu(s)?f=s:Ju(s)?f=Ci(s):h?(p=!1,f=wi(c,!0)):v?(p=!1,f=ki(c,!0)):f=[]:oa(c)||$u(c)?(f=s,$u(s)?f=ga(s):ta(s)&&!Zu(s)||(f=vo(c))):p=!1}p&&(a.set(c,f),o(f,c,r,u,a),a.delete(c)),Xn(e,n,f)}}(e,t,a,n,Vr,r,o);else{var s=r?r(xo(e,a),u,a+"",e,t,o):i;s===i&&(s=u),Xn(e,a,s)}}),Da)}function Qr(e,t){var n=e.length;if(n)return mo(t+=t<0?n:0,n)?e[t]:i}function Ur(e,t,n){t=t.length?Et(t,(function(e){return zu(e)?function(t){return Or(t,1===e.length?e[0]:e)}:e})):[is];var r=-1;t=Et(t,Bt(uo()));var i=Mr(e,(function(e,n,i){var o=Et(t,(function(t){return t(e)}));return{criteria:o,index:++r,value:e}}));return function(e,t){var r=e.length;for(e.sort((function(e,t){return function(e,t,n){for(var r=-1,i=e.criteria,o=t.criteria,u=i.length,a=n.length;++r<u;){var s=Ti(i[r],o[r]);if(s)return r>=a?s:s*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}));r--;)e[r]=e[r].value;return e}(i)}function Br(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var u=t[r],a=Or(e,u);n(a,u)&&Yr(o,mi(u,e),a)}return o}function $r(e,t,n,r){var i=r?Pt:Dt,o=-1,u=t.length,a=e;for(e===t&&(t=Ci(t)),n&&(a=Et(e,Bt(n)));++o<u;)for(var s=0,c=t[o],l=n?n(c):c;(s=i(a,l,s,r))>-1;)a!==e&&rt.call(a,s,1),rt.call(e,s,1);return e}function zr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;mo(i)?rt.call(e,i,1):ci(e,i)}}return e}function Gr(e,t){return e+fn(wn()*(t-e+1))}function Wr(e,t){var n="";if(!e||t<1||t>f)return n;do{t%2&&(n+=e),(t=fn(t/2))&&(e+=e)}while(t);return n}function Jr(e,t){return Ao(Eo(e,t,is),e+"")}function Hr(e){return Kn(Qa(e))}function Kr(e,t){var n=Qa(e);return Po(n,ur(t,0,n.length))}function Yr(e,t,n,r){if(!ta(e))return e;for(var o=-1,u=(t=mi(t,e)).length,a=u-1,s=e;null!=s&&++o<u;){var c=Lo(t[o]),l=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(o!=a){var f=s[c];(l=r?r(f,c,s):i)===i&&(l=ta(f)?f:mo(t[o+1])?[]:{})}er(s,c,l),s=s[c]}return e}var Zr=In?function(e,t){return In.set(e,t),e}:is,Xr=ct?function(e,t){return ct(e,"toString",{configurable:!0,enumerable:!1,value:ts(t),writable:!0})}:is;function ei(e){return Po(Qa(e))}function ti(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var u=r(o);++i<o;)u[i]=e[i+t];return u}function ni(e,t){var n;return fr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function ri(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var o=r+i>>>1,u=e[o];null!==u&&!ca(u)&&(n?u<=t:u<t)?r=o+1:i=o}return i}return ii(e,t,is,n)}function ii(e,t,n,r){var o=0,u=null==e?0:e.length;if(0===u)return 0;for(var a=(t=n(t))!=t,s=null===t,c=ca(t),l=t===i;o<u;){var f=fn((o+u)/2),p=n(e[f]),d=p!==i,h=null===p,v=p==p,y=ca(p);if(a)var m=r||v;else m=l?v&&(r||d):s?v&&d&&(r||!h):c?v&&d&&!h&&(r||!y):!h&&!y&&(r?p<=t:p<t);m?o=f+1:u=f}return gn(u,4294967294)}function oi(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var u=e[n],a=t?t(u):u;if(!n||!Qu(a,s)){var s=a;o[i++]=0===u?0:u}}return o}function ui(e){return"number"==typeof e?e:ca(e)?p:+e}function ai(e){if("string"==typeof e)return e;if(zu(e))return Et(e,ai)+"";if(ca(e))return Ln?Ln.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function si(e,t,n){var r=-1,i=kt,o=e.length,u=!0,a=[],s=a;if(n)u=!1,i=Tt;else if(o>=200){var c=t?null:Wi(e);if(c)return nn(c);u=!1,i=zt,s=new Wn}else s=t?[]:a;e:for(;++r<o;){var l=e[r],f=t?t(l):l;if(l=n||0!==l?l:0,u&&f==f){for(var p=s.length;p--;)if(s[p]===f)continue e;t&&s.push(f),a.push(l)}else i(s,f,n)||(s!==a&&s.push(f),a.push(l))}return a}function ci(e,t){return null==(e=So(e,t=mi(t,e)))||delete e[Lo(Yo(t))]}function li(e,t,n,r){return Yr(e,t,n(Or(e,t)),r)}function fi(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?ti(e,r?0:o,r?o+1:i):ti(e,r?o+1:0,r?i:o)}function pi(e,t){var n=e;return n instanceof Bn&&(n=n.value()),Ct(t,(function(e,t){return t.func.apply(t.thisArg,St([e],t.args))}),n)}function di(e,t,n){var i=e.length;if(i<2)return i?si(e[0]):[];for(var o=-1,u=r(i);++o<i;)for(var a=e[o],s=-1;++s<i;)s!=o&&(u[o]=lr(u[o]||a,e[s],t,n));return si(yr(u,1),t,n)}function hi(e,t,n){for(var r=-1,o=e.length,u=t.length,a={};++r<o;){var s=r<u?t[r]:i;n(a,e[r],s)}return a}function vi(e){return Ju(e)?e:[]}function yi(e){return"function"==typeof e?e:is}function mi(e,t){return zu(e)?e:bo(e,t)?[e]:Mo(ba(e))}var gi=Jr;function bi(e,t,n){var r=e.length;return n=n===i?r:n,!t&&n>=r?e:ti(e,t,n)}var _i=lt||function(e){return ot.clearTimeout(e)};function wi(e,t){if(t)return e.slice();var n=e.length,r=Be?Be(n):new e.constructor(n);return e.copy(r),r}function Oi(e){var t=new e.constructor(e.byteLength);return new Ue(t).set(new Ue(e)),t}function ki(e,t){var n=t?Oi(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ti(e,t){if(e!==t){var n=e!==i,r=null===e,o=e==e,u=ca(e),a=t!==i,s=null===t,c=t==t,l=ca(t);if(!s&&!l&&!u&&e>t||u&&a&&c&&!s&&!l||r&&a&&c||!n&&c||!o)return 1;if(!r&&!u&&!l&&e<t||l&&n&&o&&!r&&!u||s&&n&&o||!a&&o||!c)return-1}return 0}function Ei(e,t,n,i){for(var o=-1,u=e.length,a=n.length,s=-1,c=t.length,l=mn(u-a,0),f=r(c+l),p=!i;++s<c;)f[s]=t[s];for(;++o<a;)(p||o<u)&&(f[n[o]]=e[o]);for(;l--;)f[s++]=e[o++];return f}function Si(e,t,n,i){for(var o=-1,u=e.length,a=-1,s=n.length,c=-1,l=t.length,f=mn(u-s,0),p=r(f+l),d=!i;++o<f;)p[o]=e[o];for(var h=o;++c<l;)p[h+c]=t[c];for(;++a<s;)(d||o<u)&&(p[h+n[a]]=e[o++]);return p}function Ci(e,t){var n=-1,i=e.length;for(t||(t=r(i));++n<i;)t[n]=e[n];return t}function xi(e,t,n,r){var o=!n;n||(n={});for(var u=-1,a=t.length;++u<a;){var s=t[u],c=r?r(n[s],e[s],s,n,e):i;c===i&&(c=e[s]),o?ir(n,s,c):er(n,s,c)}return n}function Ii(e,t){return function(n,r){var i=zu(n)?gt:nr,o=t?t():{};return i(n,e,uo(r,2),o)}}function ji(e){return Jr((function(t,n){var r=-1,o=n.length,u=o>1?n[o-1]:i,a=o>2?n[2]:i;for(u=e.length>3&&"function"==typeof u?(o--,u):i,a&&go(n[0],n[1],a)&&(u=o<3?i:u,o=1),t=Te(t);++r<o;){var s=n[r];s&&e(t,s,r,u)}return t}))}function Ai(e,t){return function(n,r){if(null==n)return n;if(!Wu(n))return e(n,r);for(var i=n.length,o=t?i:-1,u=Te(n);(t?o--:++o<i)&&!1!==r(u[o],o,u););return n}}function Ni(e){return function(t,n,r){for(var i=-1,o=Te(t),u=r(t),a=u.length;a--;){var s=u[e?a:++i];if(!1===n(o[s],s,o))break}return t}}function Di(e){return function(t){var n=Zt(t=ba(t))?un(t):i,r=n?n[0]:t.charAt(0),o=n?bi(n,1).join(""):t.slice(1);return r[e]()+o}}function Pi(e){return function(t){return Ct(Za($a(t).replace($e,"")),e,"")}}function Ri(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=Vn(e.prototype),r=e.apply(n,t);return ta(r)?r:n}}function Fi(e){return function(t,n,r){var o=Te(t);if(!Wu(t)){var u=uo(n,3);t=Na(t),n=function(e){return u(o[e],e,o)}}var a=e(t,n,r);return a>-1?o[u?t[a]:a]:i}}function Mi(e){return eo((function(t){var n=t.length,r=n,u=Un.prototype.thru;for(e&&t.reverse();r--;){var a=t[r];if("function"!=typeof a)throw new Ce(o);if(u&&!s&&"wrapper"==io(a))var s=new Un([],!0)}for(r=s?r:n;++r<n;){var c=io(a=t[r]),l="wrapper"==c?ro(a):i;s=l&&_o(l[0])&&424==l[1]&&!l[4].length&&1==l[9]?s[io(l[0])].apply(s,l[3]):1==a.length&&_o(a)?s[c]():s.thru(a)}return function(){var e=arguments,r=e[0];if(s&&1==e.length&&zu(r))return s.plant(r).value();for(var i=0,o=n?t[i].apply(this,e):r;++i<n;)o=t[i].call(this,o);return o}}))}function Li(e,t,n,o,u,a,s,l,f,p){var d=t&c,h=1&t,v=2&t,y=24&t,m=512&t,g=v?i:Ri(e);return function i(){for(var c=arguments.length,b=r(c),_=c;_--;)b[_]=arguments[_];if(y)var w=oo(i),O=Jt(b,w);if(o&&(b=Ei(b,o,u,y)),a&&(b=Si(b,a,s,y)),c-=O,y&&c<p){var k=tn(b,w);return zi(e,t,Li,i.placeholder,n,b,k,l,f,p-c)}var T=h?n:this,E=v?T[e]:e;return c=b.length,l?b=Co(b,l):m&&c>1&&b.reverse(),d&&f<c&&(b.length=f),this&&this!==ot&&this instanceof i&&(E=g||Ri(E)),E.apply(T,b)}}function qi(e,t){return function(n,r){return function(e,t,n,r){return br(e,(function(e,i,o){t(r,n(e),i,o)})),r}(n,e,t(r),{})}}function Vi(e,t){return function(n,r){var o;if(n===i&&r===i)return t;if(n!==i&&(o=n),r!==i){if(o===i)return r;"string"==typeof n||"string"==typeof r?(n=ai(n),r=ai(r)):(n=ui(n),r=ui(r)),o=e(n,r)}return o}}function Qi(e){return eo((function(t){return t=Et(t,Bt(uo())),Jr((function(n){var r=this;return e(t,(function(e){return mt(e,r,n)}))}))}))}function Ui(e,t){var n=(t=t===i?" ":ai(t)).length;if(n<2)return n?Wr(t,e):t;var r=Wr(t,ln(e/on(t)));return Zt(t)?bi(un(r),0,e).join(""):r.slice(0,e)}function Bi(e){return function(t,n,o){return o&&"number"!=typeof o&&go(t,n,o)&&(n=o=i),t=ha(t),n===i?(n=t,t=0):n=ha(n),function(e,t,n,i){for(var o=-1,u=mn(ln((t-e)/(n||1)),0),a=r(u);u--;)a[i?u:++o]=e,e+=n;return a}(t,n,o=o===i?t<n?1:-1:ha(o),e)}}function $i(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=ma(t),n=ma(n)),e(t,n)}}function zi(e,t,n,r,o,u,a,c,l,f){var p=8&t;t|=p?s:64,4&(t&=~(p?64:s))||(t&=-4);var d=[e,t,o,p?u:i,p?a:i,p?i:u,p?i:a,c,l,f],h=n.apply(i,d);return _o(e)&&Io(h,d),h.placeholder=r,No(h,e,t)}function Gi(e){var t=ke[e];return function(e,n){if(e=ma(e),(n=null==n?0:gn(va(n),292))&&hn(e)){var r=(ba(e)+"e").split("e");return+((r=(ba(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Wi=Sn&&1/nn(new Sn([,-0]))[1]==l?function(e){return new Sn(e)}:cs;function Ji(e){return function(t){var n=po(t);return n==O?Xt(t):n==C?rn(t):function(e,t){return Et(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Hi(e,t,n,u,l,f,p,d){var h=2&t;if(!h&&"function"!=typeof e)throw new Ce(o);var v=u?u.length:0;if(v||(t&=-97,u=l=i),p=p===i?p:mn(va(p),0),d=d===i?d:va(d),v-=l?l.length:0,64&t){var y=u,m=l;u=l=i}var g=h?i:ro(e),b=[e,t,n,u,l,y,m,f,p,d];if(g&&function(e,t){var n=e[1],r=t[1],i=n|r,o=i<131,u=r==c&&8==n||r==c&&256==n&&e[7].length<=t[8]||384==r&&t[7].length<=t[8]&&8==n;if(!o&&!u)return e;1&r&&(e[2]=t[2],i|=1&n?0:4);var s=t[3];if(s){var l=e[3];e[3]=l?Ei(l,s,t[4]):s,e[4]=l?tn(e[3],a):t[4]}(s=t[5])&&(l=e[5],e[5]=l?Si(l,s,t[6]):s,e[6]=l?tn(e[5],a):t[6]),(s=t[7])&&(e[7]=s),r&c&&(e[8]=null==e[8]?t[8]:gn(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(b,g),e=b[0],t=b[1],n=b[2],u=b[3],l=b[4],!(d=b[9]=b[9]===i?h?0:e.length:mn(b[9]-v,0))&&24&t&&(t&=-25),t&&1!=t)_=8==t||16==t?function(e,t,n){var o=Ri(e);return function u(){for(var a=arguments.length,s=r(a),c=a,l=oo(u);c--;)s[c]=arguments[c];var f=a<3&&s[0]!==l&&s[a-1]!==l?[]:tn(s,l);return(a-=f.length)<n?zi(e,t,Li,u.placeholder,i,s,f,i,i,n-a):mt(this&&this!==ot&&this instanceof u?o:e,this,s)}}(e,t,d):t!=s&&33!=t||l.length?Li.apply(i,b):function(e,t,n,i){var o=1&t,u=Ri(e);return function t(){for(var a=-1,s=arguments.length,c=-1,l=i.length,f=r(l+s),p=this&&this!==ot&&this instanceof t?u:e;++c<l;)f[c]=i[c];for(;s--;)f[c++]=arguments[++a];return mt(p,o?n:this,f)}}(e,t,n,u);else var _=function(e,t,n){var r=1&t,i=Ri(e);return function t(){return(this&&this!==ot&&this instanceof t?i:e).apply(r?n:this,arguments)}}(e,t,n);return No((g?Zr:Io)(_,b),e,t)}function Ki(e,t,n,r){return e===i||Qu(e,je[n])&&!De.call(r,n)?t:e}function Yi(e,t,n,r,o,u){return ta(e)&&ta(t)&&(u.set(t,e),Vr(e,t,i,Yi,u),u.delete(t)),e}function Zi(e){return oa(e)?i:e}function Xi(e,t,n,r,o,u){var a=1&n,s=e.length,c=t.length;if(s!=c&&!(a&&c>s))return!1;var l=u.get(e),f=u.get(t);if(l&&f)return l==t&&f==e;var p=-1,d=!0,h=2&n?new Wn:i;for(u.set(e,t),u.set(t,e);++p<s;){var v=e[p],y=t[p];if(r)var m=a?r(y,v,p,t,e,u):r(v,y,p,e,t,u);if(m!==i){if(m)continue;d=!1;break}if(h){if(!It(t,(function(e,t){if(!zt(h,t)&&(v===e||o(v,e,n,r,u)))return h.push(t)}))){d=!1;break}}else if(v!==y&&!o(v,y,n,r,u)){d=!1;break}}return u.delete(e),u.delete(t),d}function eo(e){return Ao(Eo(e,i,Go),e+"")}function to(e){return kr(e,Na,lo)}function no(e){return kr(e,Da,fo)}var ro=In?function(e){return In.get(e)}:cs;function io(e){for(var t=e.name+"",n=jn[t],r=De.call(jn,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}function oo(e){return(De.call(qn,"placeholder")?qn:e).placeholder}function uo(){var e=qn.iteratee||os;return e=e===os?Pr:e,arguments.length?e(arguments[0],arguments[1]):e}function ao(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function so(e){for(var t=Na(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,ko(i)]}return t}function co(e,t){var n=function(e,t){return null==e?i:e[t]}(e,t);return Dr(n)?n:i}var lo=pn?function(e){return null==e?[]:(e=Te(e),Ot(pn(e),(function(t){return et.call(e,t)})))}:ys,fo=pn?function(e){for(var t=[];e;)St(t,lo(e)),e=Ge(e);return t}:ys,po=Tr;function ho(e,t,n){for(var r=-1,i=(t=mi(t,e)).length,o=!1;++r<i;){var u=Lo(t[r]);if(!(o=null!=e&&n(e,u)))break;e=e[u]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&ea(i)&&mo(u,i)&&(zu(e)||$u(e))}function vo(e){return"function"!=typeof e.constructor||Oo(e)?{}:Vn(Ge(e))}function yo(e){return zu(e)||$u(e)||!!(it&&e&&e[it])}function mo(e,t){var n=typeof e;return!!(t=null==t?f:t)&&("number"==n||"symbol"!=n&&me.test(e))&&e>-1&&e%1==0&&e<t}function go(e,t,n){if(!ta(n))return!1;var r=typeof t;return!!("number"==r?Wu(n)&&mo(t,n.length):"string"==r&&t in n)&&Qu(n[t],e)}function bo(e,t){if(zu(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ca(e))||X.test(e)||!Z.test(e)||null!=t&&e in Te(t)}function _o(e){var t=io(e),n=qn[t];if("function"!=typeof n||!(t in Bn.prototype))return!1;if(e===n)return!0;var r=ro(n);return!!r&&e===r[0]}(kn&&po(new kn(new ArrayBuffer(1)))!=N||Tn&&po(new Tn)!=O||En&&po(En.resolve())!=E||Sn&&po(new Sn)!=C||Cn&&po(new Cn)!=j)&&(po=function(e){var t=Tr(e),n=t==T?e.constructor:i,r=n?qo(n):"";if(r)switch(r){case An:return N;case Nn:return O;case Dn:return E;case Pn:return C;case Rn:return j}return t});var wo=Ae?Zu:ms;function Oo(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||je)}function ko(e){return e==e&&!ta(e)}function To(e,t){return function(n){return null!=n&&n[e]===t&&(t!==i||e in Te(n))}}function Eo(e,t,n){return t=mn(t===i?e.length-1:t,0),function(){for(var i=arguments,o=-1,u=mn(i.length-t,0),a=r(u);++o<u;)a[o]=i[t+o];o=-1;for(var s=r(t+1);++o<t;)s[o]=i[o];return s[t]=n(a),mt(e,this,s)}}function So(e,t){return t.length<2?e:Or(e,ti(t,0,-1))}function Co(e,t){for(var n=e.length,r=gn(t.length,n),o=Ci(e);r--;){var u=t[r];e[r]=mo(u,n)?o[u]:i}return e}function xo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Io=Do(Zr),jo=Lt||function(e,t){return ot.setTimeout(e,t)},Ao=Do(Xr);function No(e,t,n){var r=t+"";return Ao(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return bt(h,(function(n){var r="_."+n[0];t&n[1]&&!kt(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(ue);return t?t[1].split(ae):[]}(r),n)))}function Do(e){var t=0,n=0;return function(){var r=bn(),o=16-(r-n);if(n=r,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(i,arguments)}}function Po(e,t){var n=-1,r=e.length,o=r-1;for(t=t===i?r:t;++n<t;){var u=Gr(n,o),a=e[u];e[u]=e[n],e[n]=a}return e.length=t,e}var Ro,Fo,Mo=(Ro=Ru((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ee,(function(e,n,r,i){t.push(r?i.replace(le,"$1"):n||e)})),t}),(function(e){return 500===Fo.size&&Fo.clear(),e})),Fo=Ro.cache,Ro);function Lo(e){if("string"==typeof e||ca(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function qo(e){if(null!=e){try{return Ne.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Vo(e){if(e instanceof Bn)return e.clone();var t=new Un(e.__wrapped__,e.__chain__);return t.__actions__=Ci(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Qo=Jr((function(e,t){return Ju(e)?lr(e,yr(t,1,Ju,!0)):[]})),Uo=Jr((function(e,t){var n=Yo(t);return Ju(n)&&(n=i),Ju(e)?lr(e,yr(t,1,Ju,!0),uo(n,2)):[]})),Bo=Jr((function(e,t){var n=Yo(t);return Ju(n)&&(n=i),Ju(e)?lr(e,yr(t,1,Ju,!0),i,n):[]}));function $o(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:va(n);return i<0&&(i=mn(r+i,0)),Nt(e,uo(t,3),i)}function zo(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=r-1;return n!==i&&(o=va(n),o=n<0?mn(r+o,0):gn(o,r-1)),Nt(e,uo(t,3),o,!0)}function Go(e){return null!=e&&e.length?yr(e,1):[]}function Wo(e){return e&&e.length?e[0]:i}var Jo=Jr((function(e){var t=Et(e,vi);return t.length&&t[0]===e[0]?xr(t):[]})),Ho=Jr((function(e){var t=Yo(e),n=Et(e,vi);return t===Yo(n)?t=i:n.pop(),n.length&&n[0]===e[0]?xr(n,uo(t,2)):[]})),Ko=Jr((function(e){var t=Yo(e),n=Et(e,vi);return(t="function"==typeof t?t:i)&&n.pop(),n.length&&n[0]===e[0]?xr(n,i,t):[]}));function Yo(e){var t=null==e?0:e.length;return t?e[t-1]:i}var Zo=Jr(Xo);function Xo(e,t){return e&&e.length&&t&&t.length?$r(e,t):e}var eu=eo((function(e,t){var n=null==e?0:e.length,r=or(e,t);return zr(e,Et(t,(function(e){return mo(e,n)?+e:e})).sort(Ti)),r}));function tu(e){return null==e?e:On.call(e)}var nu=Jr((function(e){return si(yr(e,1,Ju,!0))})),ru=Jr((function(e){var t=Yo(e);return Ju(t)&&(t=i),si(yr(e,1,Ju,!0),uo(t,2))})),iu=Jr((function(e){var t=Yo(e);return t="function"==typeof t?t:i,si(yr(e,1,Ju,!0),i,t)}));function ou(e){if(!e||!e.length)return[];var t=0;return e=Ot(e,(function(e){if(Ju(e))return t=mn(e.length,t),!0})),Qt(t,(function(t){return Et(e,Mt(t))}))}function uu(e,t){if(!e||!e.length)return[];var n=ou(e);return null==t?n:Et(n,(function(e){return mt(t,i,e)}))}var au=Jr((function(e,t){return Ju(e)?lr(e,t):[]})),su=Jr((function(e){return di(Ot(e,Ju))})),cu=Jr((function(e){var t=Yo(e);return Ju(t)&&(t=i),di(Ot(e,Ju),uo(t,2))})),lu=Jr((function(e){var t=Yo(e);return t="function"==typeof t?t:i,di(Ot(e,Ju),i,t)})),fu=Jr(ou),pu=Jr((function(e){var t=e.length,n=t>1?e[t-1]:i;return n="function"==typeof n?(e.pop(),n):i,uu(e,n)}));function du(e){var t=qn(e);return t.__chain__=!0,t}function hu(e,t){return t(e)}var vu=eo((function(e){var t=e.length,n=t?e[0]:0,r=this.__wrapped__,o=function(t){return or(t,e)};return!(t>1||this.__actions__.length)&&r instanceof Bn&&mo(n)?((r=r.slice(n,+n+(t?1:0))).__actions__.push({func:hu,args:[o],thisArg:i}),new Un(r,this.__chain__).thru((function(e){return t&&!e.length&&e.push(i),e}))):this.thru(o)})),yu=Ii((function(e,t,n){De.call(e,n)?++e[n]:ir(e,n,1)})),mu=Fi($o),gu=Fi(zo);function bu(e,t){return(zu(e)?bt:fr)(e,uo(t,3))}function _u(e,t){return(zu(e)?_t:pr)(e,uo(t,3))}var wu=Ii((function(e,t,n){De.call(e,n)?e[n].push(t):ir(e,n,[t])})),Ou=Jr((function(e,t,n){var i=-1,o="function"==typeof t,u=Wu(e)?r(e.length):[];return fr(e,(function(e){u[++i]=o?mt(t,e,n):Ir(e,t,n)})),u})),ku=Ii((function(e,t,n){ir(e,n,t)}));function Tu(e,t){return(zu(e)?Et:Mr)(e,uo(t,3))}var Eu=Ii((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]})),Su=Jr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&go(e,t[0],t[1])?t=[]:n>2&&go(t[0],t[1],t[2])&&(t=[t[0]]),Ur(e,yr(t,1),[])})),Cu=jt||function(){return ot.Date.now()};function xu(e,t,n){return t=n?i:t,t=e&&null==t?e.length:t,Hi(e,c,i,i,i,i,t)}function Iu(e,t){var n;if("function"!=typeof t)throw new Ce(o);return e=va(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=i),n}}var ju=Jr((function(e,t,n){var r=1;if(n.length){var i=tn(n,oo(ju));r|=s}return Hi(e,r,t,n,i)})),Au=Jr((function(e,t,n){var r=3;if(n.length){var i=tn(n,oo(Au));r|=s}return Hi(t,r,e,n,i)}));function Nu(e,t,n){var r,u,a,s,c,l,f=0,p=!1,d=!1,h=!0;if("function"!=typeof e)throw new Ce(o);function v(t){var n=r,o=u;return r=u=i,f=t,s=e.apply(o,n)}function y(e){return f=e,c=jo(g,t),p?v(e):s}function m(e){var n=e-l;return l===i||n>=t||n<0||d&&e-f>=a}function g(){var e=Cu();if(m(e))return b(e);c=jo(g,function(e){var n=t-(e-l);return d?gn(n,a-(e-f)):n}(e))}function b(e){return c=i,h&&r?v(e):(r=u=i,s)}function _(){var e=Cu(),n=m(e);if(r=arguments,u=this,l=e,n){if(c===i)return y(l);if(d)return _i(c),c=jo(g,t),v(l)}return c===i&&(c=jo(g,t)),s}return t=ma(t)||0,ta(n)&&(p=!!n.leading,a=(d="maxWait"in n)?mn(ma(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h),_.cancel=function(){c!==i&&_i(c),f=0,r=l=u=c=i},_.flush=function(){return c===i?s:b(Cu())},_}var Du=Jr((function(e,t){return cr(e,1,t)})),Pu=Jr((function(e,t,n){return cr(e,ma(t)||0,n)}));function Ru(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Ce(o);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var u=e.apply(this,r);return n.cache=o.set(i,u)||o,u};return n.cache=new(Ru.Cache||Gn),n}function Fu(e){if("function"!=typeof e)throw new Ce(o);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ru.Cache=Gn;var Mu=gi((function(e,t){var n=(t=1==t.length&&zu(t[0])?Et(t[0],Bt(uo())):Et(yr(t,1),Bt(uo()))).length;return Jr((function(r){for(var i=-1,o=gn(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return mt(e,this,r)}))})),Lu=Jr((function(e,t){var n=tn(t,oo(Lu));return Hi(e,s,i,t,n)})),qu=Jr((function(e,t){var n=tn(t,oo(qu));return Hi(e,64,i,t,n)})),Vu=eo((function(e,t){return Hi(e,256,i,i,i,t)}));function Qu(e,t){return e===t||e!=e&&t!=t}var Uu=$i(Er),Bu=$i((function(e,t){return e>=t})),$u=jr(function(){return arguments}())?jr:function(e){return na(e)&&De.call(e,"callee")&&!et.call(e,"callee")},zu=r.isArray,Gu=ft?Bt(ft):function(e){return na(e)&&Tr(e)==A};function Wu(e){return null!=e&&ea(e.length)&&!Zu(e)}function Ju(e){return na(e)&&Wu(e)}var Hu=dn||ms,Ku=pt?Bt(pt):function(e){return na(e)&&Tr(e)==g};function Yu(e){if(!na(e))return!1;var t=Tr(e);return t==b||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!oa(e)}function Zu(e){if(!ta(e))return!1;var t=Tr(e);return t==_||t==w||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Xu(e){return"number"==typeof e&&e==va(e)}function ea(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=f}function ta(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function na(e){return null!=e&&"object"==typeof e}var ra=dt?Bt(dt):function(e){return na(e)&&po(e)==O};function ia(e){return"number"==typeof e||na(e)&&Tr(e)==k}function oa(e){if(!na(e)||Tr(e)!=T)return!1;var t=Ge(e);if(null===t)return!0;var n=De.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Ne.call(n)==Me}var ua=ht?Bt(ht):function(e){return na(e)&&Tr(e)==S},aa=vt?Bt(vt):function(e){return na(e)&&po(e)==C};function sa(e){return"string"==typeof e||!zu(e)&&na(e)&&Tr(e)==x}function ca(e){return"symbol"==typeof e||na(e)&&Tr(e)==I}var la=yt?Bt(yt):function(e){return na(e)&&ea(e.length)&&!!Ze[Tr(e)]},fa=$i(Fr),pa=$i((function(e,t){return e<=t}));function da(e){if(!e)return[];if(Wu(e))return sa(e)?un(e):Ci(e);if(ut&&e[ut])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[ut]());var t=po(e);return(t==O?Xt:t==C?nn:Qa)(e)}function ha(e){return e?(e=ma(e))===l||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function va(e){var t=ha(e),n=t%1;return t==t?n?t-n:t:0}function ya(e){return e?ur(va(e),0,d):0}function ma(e){if("number"==typeof e)return e;if(ca(e))return p;if(ta(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ta(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ut(e);var n=he.test(e);return n||ye.test(e)?nt(e.slice(2),n?2:8):de.test(e)?p:+e}function ga(e){return xi(e,Da(e))}function ba(e){return null==e?"":ai(e)}var _a=ji((function(e,t){if(Oo(t)||Wu(t))xi(t,Na(t),e);else for(var n in t)De.call(t,n)&&er(e,n,t[n])})),wa=ji((function(e,t){xi(t,Da(t),e)})),Oa=ji((function(e,t,n,r){xi(t,Da(t),e,r)})),ka=ji((function(e,t,n,r){xi(t,Na(t),e,r)})),Ta=eo(or),Ea=Jr((function(e,t){e=Te(e);var n=-1,r=t.length,o=r>2?t[2]:i;for(o&&go(t[0],t[1],o)&&(r=1);++n<r;)for(var u=t[n],a=Da(u),s=-1,c=a.length;++s<c;){var l=a[s],f=e[l];(f===i||Qu(f,je[l])&&!De.call(e,l))&&(e[l]=u[l])}return e})),Sa=Jr((function(e){return e.push(i,Yi),mt(Ra,i,e)}));function Ca(e,t,n){var r=null==e?i:Or(e,t);return r===i?n:r}function xa(e,t){return null!=e&&ho(e,t,Cr)}var Ia=qi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Fe.call(t)),e[t]=n}),ts(is)),ja=qi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Fe.call(t)),De.call(e,t)?e[t].push(n):e[t]=[n]}),uo),Aa=Jr(Ir);function Na(e){return Wu(e)?Hn(e):Rr(e)}function Da(e){return Wu(e)?Hn(e,!0):function(e){if(!ta(e))return function(e){var t=[];if(null!=e)for(var n in Te(e))t.push(n);return t}(e);var t=Oo(e),n=[];for(var r in e)("constructor"!=r||!t&&De.call(e,r))&&n.push(r);return n}(e)}var Pa=ji((function(e,t,n){Vr(e,t,n)})),Ra=ji((function(e,t,n,r){Vr(e,t,n,r)})),Fa=eo((function(e,t){var n={};if(null==e)return n;var r=!1;t=Et(t,(function(t){return t=mi(t,e),r||(r=t.length>1),t})),xi(e,no(e),n),r&&(n=ar(n,7,Zi));for(var i=t.length;i--;)ci(n,t[i]);return n})),Ma=eo((function(e,t){return null==e?{}:function(e,t){return Br(e,t,(function(t,n){return xa(e,n)}))}(e,t)}));function La(e,t){if(null==e)return{};var n=Et(no(e),(function(e){return[e]}));return t=uo(t),Br(e,n,(function(e,n){return t(e,n[0])}))}var qa=Ji(Na),Va=Ji(Da);function Qa(e){return null==e?[]:$t(e,Na(e))}var Ua=Pi((function(e,t,n){return t=t.toLowerCase(),e+(n?Ba(t):t)}));function Ba(e){return Ya(ba(e).toLowerCase())}function $a(e){return(e=ba(e))&&e.replace(ge,Ht).replace(ze,"")}var za=Pi((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ga=Pi((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Wa=Di("toLowerCase"),Ja=Pi((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()})),Ha=Pi((function(e,t,n){return e+(n?" ":"")+Ya(t)})),Ka=Pi((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Ya=Di("toUpperCase");function Za(e,t,n){return e=ba(e),(t=n?i:t)===i?function(e){return He.test(e)}(e)?function(e){return e.match(We)||[]}(e):function(e){return e.match(se)||[]}(e):e.match(t)||[]}var Xa=Jr((function(e,t){try{return mt(e,i,t)}catch(e){return Yu(e)?e:new we(e)}})),es=eo((function(e,t){return bt(t,(function(t){t=Lo(t),ir(e,t,ju(e[t],e))})),e}));function ts(e){return function(){return e}}var ns=Mi(),rs=Mi(!0);function is(e){return e}function os(e){return Pr("function"==typeof e?e:ar(e,1))}var us=Jr((function(e,t){return function(n){return Ir(n,e,t)}})),as=Jr((function(e,t){return function(n){return Ir(e,n,t)}}));function ss(e,t,n){var r=Na(t),i=wr(t,r);null!=n||ta(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=wr(t,Na(t)));var o=!(ta(n)&&"chain"in n&&!n.chain),u=Zu(e);return bt(i,(function(n){var r=t[n];e[n]=r,u&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__),i=n.__actions__=Ci(this.__actions__);return i.push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,St([this.value()],arguments))})})),e}function cs(){}var ls=Qi(Et),fs=Qi(wt),ps=Qi(It);function ds(e){return bo(e)?Mt(Lo(e)):function(e){return function(t){return Or(t,e)}}(e)}var hs=Bi(),vs=Bi(!0);function ys(){return[]}function ms(){return!1}var gs,bs=Vi((function(e,t){return e+t}),0),_s=Gi("ceil"),ws=Vi((function(e,t){return e/t}),1),Os=Gi("floor"),ks=Vi((function(e,t){return e*t}),1),Ts=Gi("round"),Es=Vi((function(e,t){return e-t}),0);return qn.after=function(e,t){if("function"!=typeof t)throw new Ce(o);return e=va(e),function(){if(--e<1)return t.apply(this,arguments)}},qn.ary=xu,qn.assign=_a,qn.assignIn=wa,qn.assignInWith=Oa,qn.assignWith=ka,qn.at=Ta,qn.before=Iu,qn.bind=ju,qn.bindAll=es,qn.bindKey=Au,qn.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return zu(e)?e:[e]},qn.chain=du,qn.chunk=function(e,t,n){t=(n?go(e,t,n):t===i)?1:mn(va(t),0);var o=null==e?0:e.length;if(!o||t<1)return[];for(var u=0,a=0,s=r(ln(o/t));u<o;)s[a++]=ti(e,u,u+=t);return s},qn.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i},qn.concat=function(){var e=arguments.length;if(!e)return[];for(var t=r(e-1),n=arguments[0],i=e;i--;)t[i-1]=arguments[i];return St(zu(n)?Ci(n):[n],yr(t,1))},qn.cond=function(e){var t=null==e?0:e.length,n=uo();return e=t?Et(e,(function(e){if("function"!=typeof e[1])throw new Ce(o);return[n(e[0]),e[1]]})):[],Jr((function(n){for(var r=-1;++r<t;){var i=e[r];if(mt(i[0],this,n))return mt(i[1],this,n)}}))},qn.conforms=function(e){return function(e){var t=Na(e);return function(n){return sr(n,e,t)}}(ar(e,1))},qn.constant=ts,qn.countBy=yu,qn.create=function(e,t){var n=Vn(e);return null==t?n:rr(n,t)},qn.curry=function e(t,n,r){var o=Hi(t,8,i,i,i,i,i,n=r?i:n);return o.placeholder=e.placeholder,o},qn.curryRight=function e(t,n,r){var o=Hi(t,16,i,i,i,i,i,n=r?i:n);return o.placeholder=e.placeholder,o},qn.debounce=Nu,qn.defaults=Ea,qn.defaultsDeep=Sa,qn.defer=Du,qn.delay=Pu,qn.difference=Qo,qn.differenceBy=Uo,qn.differenceWith=Bo,qn.drop=function(e,t,n){var r=null==e?0:e.length;return r?ti(e,(t=n||t===i?1:va(t))<0?0:t,r):[]},qn.dropRight=function(e,t,n){var r=null==e?0:e.length;return r?ti(e,0,(t=r-(t=n||t===i?1:va(t)))<0?0:t):[]},qn.dropRightWhile=function(e,t){return e&&e.length?fi(e,uo(t,3),!0,!0):[]},qn.dropWhile=function(e,t){return e&&e.length?fi(e,uo(t,3),!0):[]},qn.fill=function(e,t,n,r){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&go(e,t,n)&&(n=0,r=o),function(e,t,n,r){var o=e.length;for((n=va(n))<0&&(n=-n>o?0:o+n),(r=r===i||r>o?o:va(r))<0&&(r+=o),r=n>r?0:ya(r);n<r;)e[n++]=t;return e}(e,t,n,r)):[]},qn.filter=function(e,t){return(zu(e)?Ot:vr)(e,uo(t,3))},qn.flatMap=function(e,t){return yr(Tu(e,t),1)},qn.flatMapDeep=function(e,t){return yr(Tu(e,t),l)},qn.flatMapDepth=function(e,t,n){return n=n===i?1:va(n),yr(Tu(e,t),n)},qn.flatten=Go,qn.flattenDeep=function(e){return null!=e&&e.length?yr(e,l):[]},qn.flattenDepth=function(e,t){return null!=e&&e.length?yr(e,t=t===i?1:va(t)):[]},qn.flip=function(e){return Hi(e,512)},qn.flow=ns,qn.flowRight=rs,qn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},qn.functions=function(e){return null==e?[]:wr(e,Na(e))},qn.functionsIn=function(e){return null==e?[]:wr(e,Da(e))},qn.groupBy=wu,qn.initial=function(e){return null!=e&&e.length?ti(e,0,-1):[]},qn.intersection=Jo,qn.intersectionBy=Ho,qn.intersectionWith=Ko,qn.invert=Ia,qn.invertBy=ja,qn.invokeMap=Ou,qn.iteratee=os,qn.keyBy=ku,qn.keys=Na,qn.keysIn=Da,qn.map=Tu,qn.mapKeys=function(e,t){var n={};return t=uo(t,3),br(e,(function(e,r,i){ir(n,t(e,r,i),e)})),n},qn.mapValues=function(e,t){var n={};return t=uo(t,3),br(e,(function(e,r,i){ir(n,r,t(e,r,i))})),n},qn.matches=function(e){return Lr(ar(e,1))},qn.matchesProperty=function(e,t){return qr(e,ar(t,1))},qn.memoize=Ru,qn.merge=Pa,qn.mergeWith=Ra,qn.method=us,qn.methodOf=as,qn.mixin=ss,qn.negate=Fu,qn.nthArg=function(e){return e=va(e),Jr((function(t){return Qr(t,e)}))},qn.omit=Fa,qn.omitBy=function(e,t){return La(e,Fu(uo(t)))},qn.once=function(e){return Iu(2,e)},qn.orderBy=function(e,t,n,r){return null==e?[]:(zu(t)||(t=null==t?[]:[t]),zu(n=r?i:n)||(n=null==n?[]:[n]),Ur(e,t,n))},qn.over=ls,qn.overArgs=Mu,qn.overEvery=fs,qn.overSome=ps,qn.partial=Lu,qn.partialRight=qu,qn.partition=Eu,qn.pick=Ma,qn.pickBy=La,qn.property=ds,qn.propertyOf=function(e){return function(t){return null==e?i:Or(e,t)}},qn.pull=Zo,qn.pullAll=Xo,qn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?$r(e,t,uo(n,2)):e},qn.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?$r(e,t,i,n):e},qn.pullAt=eu,qn.range=hs,qn.rangeRight=vs,qn.rearg=Vu,qn.reject=function(e,t){return(zu(e)?Ot:vr)(e,Fu(uo(t,3)))},qn.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;for(t=uo(t,3);++r<o;){var u=e[r];t(u,r,e)&&(n.push(u),i.push(r))}return zr(e,i),n},qn.rest=function(e,t){if("function"!=typeof e)throw new Ce(o);return Jr(e,t=t===i?t:va(t))},qn.reverse=tu,qn.sampleSize=function(e,t,n){return t=(n?go(e,t,n):t===i)?1:va(t),(zu(e)?Yn:Kr)(e,t)},qn.set=function(e,t,n){return null==e?e:Yr(e,t,n)},qn.setWith=function(e,t,n,r){return r="function"==typeof r?r:i,null==e?e:Yr(e,t,n,r)},qn.shuffle=function(e){return(zu(e)?Zn:ei)(e)},qn.slice=function(e,t,n){var r=null==e?0:e.length;return r?(n&&"number"!=typeof n&&go(e,t,n)?(t=0,n=r):(t=null==t?0:va(t),n=n===i?r:va(n)),ti(e,t,n)):[]},qn.sortBy=Su,qn.sortedUniq=function(e){return e&&e.length?oi(e):[]},qn.sortedUniqBy=function(e,t){return e&&e.length?oi(e,uo(t,2)):[]},qn.split=function(e,t,n){return n&&"number"!=typeof n&&go(e,t,n)&&(t=n=i),(n=n===i?d:n>>>0)?(e=ba(e))&&("string"==typeof t||null!=t&&!ua(t))&&!(t=ai(t))&&Zt(e)?bi(un(e),0,n):e.split(t,n):[]},qn.spread=function(e,t){if("function"!=typeof e)throw new Ce(o);return t=null==t?0:mn(va(t),0),Jr((function(n){var r=n[t],i=bi(n,0,t);return r&&St(i,r),mt(e,this,i)}))},qn.tail=function(e){var t=null==e?0:e.length;return t?ti(e,1,t):[]},qn.take=function(e,t,n){return e&&e.length?ti(e,0,(t=n||t===i?1:va(t))<0?0:t):[]},qn.takeRight=function(e,t,n){var r=null==e?0:e.length;return r?ti(e,(t=r-(t=n||t===i?1:va(t)))<0?0:t,r):[]},qn.takeRightWhile=function(e,t){return e&&e.length?fi(e,uo(t,3),!1,!0):[]},qn.takeWhile=function(e,t){return e&&e.length?fi(e,uo(t,3)):[]},qn.tap=function(e,t){return t(e),e},qn.throttle=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new Ce(o);return ta(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Nu(e,t,{leading:r,maxWait:t,trailing:i})},qn.thru=hu,qn.toArray=da,qn.toPairs=qa,qn.toPairsIn=Va,qn.toPath=function(e){return zu(e)?Et(e,Lo):ca(e)?[e]:Ci(Mo(ba(e)))},qn.toPlainObject=ga,qn.transform=function(e,t,n){var r=zu(e),i=r||Hu(e)||la(e);if(t=uo(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:ta(e)&&Zu(o)?Vn(Ge(e)):{}}return(i?bt:br)(e,(function(e,r,i){return t(n,e,r,i)})),n},qn.unary=function(e){return xu(e,1)},qn.union=nu,qn.unionBy=ru,qn.unionWith=iu,qn.uniq=function(e){return e&&e.length?si(e):[]},qn.uniqBy=function(e,t){return e&&e.length?si(e,uo(t,2)):[]},qn.uniqWith=function(e,t){return t="function"==typeof t?t:i,e&&e.length?si(e,i,t):[]},qn.unset=function(e,t){return null==e||ci(e,t)},qn.unzip=ou,qn.unzipWith=uu,qn.update=function(e,t,n){return null==e?e:li(e,t,yi(n))},qn.updateWith=function(e,t,n,r){return r="function"==typeof r?r:i,null==e?e:li(e,t,yi(n),r)},qn.values=Qa,qn.valuesIn=function(e){return null==e?[]:$t(e,Da(e))},qn.without=au,qn.words=Za,qn.wrap=function(e,t){return Lu(yi(t),e)},qn.xor=su,qn.xorBy=cu,qn.xorWith=lu,qn.zip=fu,qn.zipObject=function(e,t){return hi(e||[],t||[],er)},qn.zipObjectDeep=function(e,t){return hi(e||[],t||[],Yr)},qn.zipWith=pu,qn.entries=qa,qn.entriesIn=Va,qn.extend=wa,qn.extendWith=Oa,ss(qn,qn),qn.add=bs,qn.attempt=Xa,qn.camelCase=Ua,qn.capitalize=Ba,qn.ceil=_s,qn.clamp=function(e,t,n){return n===i&&(n=t,t=i),n!==i&&(n=(n=ma(n))==n?n:0),t!==i&&(t=(t=ma(t))==t?t:0),ur(ma(e),t,n)},qn.clone=function(e){return ar(e,4)},qn.cloneDeep=function(e){return ar(e,5)},qn.cloneDeepWith=function(e,t){return ar(e,5,t="function"==typeof t?t:i)},qn.cloneWith=function(e,t){return ar(e,4,t="function"==typeof t?t:i)},qn.conformsTo=function(e,t){return null==t||sr(e,t,Na(t))},qn.deburr=$a,qn.defaultTo=function(e,t){return null==e||e!=e?t:e},qn.divide=ws,qn.endsWith=function(e,t,n){e=ba(e),t=ai(t);var r=e.length,o=n=n===i?r:ur(va(n),0,r);return(n-=t.length)>=0&&e.slice(n,o)==t},qn.eq=Qu,qn.escape=function(e){return(e=ba(e))&&J.test(e)?e.replace(G,Kt):e},qn.escapeRegExp=function(e){return(e=ba(e))&&ne.test(e)?e.replace(te,"\\$&"):e},qn.every=function(e,t,n){var r=zu(e)?wt:dr;return n&&go(e,t,n)&&(t=i),r(e,uo(t,3))},qn.find=mu,qn.findIndex=$o,qn.findKey=function(e,t){return At(e,uo(t,3),br)},qn.findLast=gu,qn.findLastIndex=zo,qn.findLastKey=function(e,t){return At(e,uo(t,3),_r)},qn.floor=Os,qn.forEach=bu,qn.forEachRight=_u,qn.forIn=function(e,t){return null==e?e:mr(e,uo(t,3),Da)},qn.forInRight=function(e,t){return null==e?e:gr(e,uo(t,3),Da)},qn.forOwn=function(e,t){return e&&br(e,uo(t,3))},qn.forOwnRight=function(e,t){return e&&_r(e,uo(t,3))},qn.get=Ca,qn.gt=Uu,qn.gte=Bu,qn.has=function(e,t){return null!=e&&ho(e,t,Sr)},qn.hasIn=xa,qn.head=Wo,qn.identity=is,qn.includes=function(e,t,n,r){e=Wu(e)?e:Qa(e),n=n&&!r?va(n):0;var i=e.length;return n<0&&(n=mn(i+n,0)),sa(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Dt(e,t,n)>-1},qn.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:va(n);return i<0&&(i=mn(r+i,0)),Dt(e,t,i)},qn.inRange=function(e,t,n){return t=ha(t),n===i?(n=t,t=0):n=ha(n),function(e,t,n){return e>=gn(t,n)&&e<mn(t,n)}(e=ma(e),t,n)},qn.invoke=Aa,qn.isArguments=$u,qn.isArray=zu,qn.isArrayBuffer=Gu,qn.isArrayLike=Wu,qn.isArrayLikeObject=Ju,qn.isBoolean=function(e){return!0===e||!1===e||na(e)&&Tr(e)==m},qn.isBuffer=Hu,qn.isDate=Ku,qn.isElement=function(e){return na(e)&&1===e.nodeType&&!oa(e)},qn.isEmpty=function(e){if(null==e)return!0;if(Wu(e)&&(zu(e)||"string"==typeof e||"function"==typeof e.splice||Hu(e)||la(e)||$u(e)))return!e.length;var t=po(e);if(t==O||t==C)return!e.size;if(Oo(e))return!Rr(e).length;for(var n in e)if(De.call(e,n))return!1;return!0},qn.isEqual=function(e,t){return Ar(e,t)},qn.isEqualWith=function(e,t,n){var r=(n="function"==typeof n?n:i)?n(e,t):i;return r===i?Ar(e,t,i,n):!!r},qn.isError=Yu,qn.isFinite=function(e){return"number"==typeof e&&hn(e)},qn.isFunction=Zu,qn.isInteger=Xu,qn.isLength=ea,qn.isMap=ra,qn.isMatch=function(e,t){return e===t||Nr(e,t,so(t))},qn.isMatchWith=function(e,t,n){return n="function"==typeof n?n:i,Nr(e,t,so(t),n)},qn.isNaN=function(e){return ia(e)&&e!=+e},qn.isNative=function(e){if(wo(e))throw new we("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Dr(e)},qn.isNil=function(e){return null==e},qn.isNull=function(e){return null===e},qn.isNumber=ia,qn.isObject=ta,qn.isObjectLike=na,qn.isPlainObject=oa,qn.isRegExp=ua,qn.isSafeInteger=function(e){return Xu(e)&&e>=-9007199254740991&&e<=f},qn.isSet=aa,qn.isString=sa,qn.isSymbol=ca,qn.isTypedArray=la,qn.isUndefined=function(e){return e===i},qn.isWeakMap=function(e){return na(e)&&po(e)==j},qn.isWeakSet=function(e){return na(e)&&"[object WeakSet]"==Tr(e)},qn.join=function(e,t){return null==e?"":vn.call(e,t)},qn.kebabCase=za,qn.last=Yo,qn.lastIndexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=r;return n!==i&&(o=(o=va(n))<0?mn(r+o,0):gn(o,r-1)),t==t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(e,t,o):Nt(e,Rt,o,!0)},qn.lowerCase=Ga,qn.lowerFirst=Wa,qn.lt=fa,qn.lte=pa,qn.max=function(e){return e&&e.length?hr(e,is,Er):i},qn.maxBy=function(e,t){return e&&e.length?hr(e,uo(t,2),Er):i},qn.mean=function(e){return Ft(e,is)},qn.meanBy=function(e,t){return Ft(e,uo(t,2))},qn.min=function(e){return e&&e.length?hr(e,is,Fr):i},qn.minBy=function(e,t){return e&&e.length?hr(e,uo(t,2),Fr):i},qn.stubArray=ys,qn.stubFalse=ms,qn.stubObject=function(){return{}},qn.stubString=function(){return""},qn.stubTrue=function(){return!0},qn.multiply=ks,qn.nth=function(e,t){return e&&e.length?Qr(e,va(t)):i},qn.noConflict=function(){return ot._===this&&(ot._=Le),this},qn.noop=cs,qn.now=Cu,qn.pad=function(e,t,n){e=ba(e);var r=(t=va(t))?on(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Ui(fn(i),n)+e+Ui(ln(i),n)},qn.padEnd=function(e,t,n){e=ba(e);var r=(t=va(t))?on(e):0;return t&&r<t?e+Ui(t-r,n):e},qn.padStart=function(e,t,n){e=ba(e);var r=(t=va(t))?on(e):0;return t&&r<t?Ui(t-r,n)+e:e},qn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),_n(ba(e).replace(re,""),t||0)},qn.random=function(e,t,n){if(n&&"boolean"!=typeof n&&go(e,t,n)&&(t=n=i),n===i&&("boolean"==typeof t?(n=t,t=i):"boolean"==typeof e&&(n=e,e=i)),e===i&&t===i?(e=0,t=1):(e=ha(e),t===i?(t=e,e=0):t=ha(t)),e>t){var r=e;e=t,t=r}if(n||e%1||t%1){var o=wn();return gn(e+o*(t-e+tt("1e-"+((o+"").length-1))),t)}return Gr(e,t)},qn.reduce=function(e,t,n){var r=zu(e)?Ct:qt,i=arguments.length<3;return r(e,uo(t,4),n,i,fr)},qn.reduceRight=function(e,t,n){var r=zu(e)?xt:qt,i=arguments.length<3;return r(e,uo(t,4),n,i,pr)},qn.repeat=function(e,t,n){return t=(n?go(e,t,n):t===i)?1:va(t),Wr(ba(e),t)},qn.replace=function(){var e=arguments,t=ba(e[0]);return e.length<3?t:t.replace(e[1],e[2])},qn.result=function(e,t,n){var r=-1,o=(t=mi(t,e)).length;for(o||(o=1,e=i);++r<o;){var u=null==e?i:e[Lo(t[r])];u===i&&(r=o,u=n),e=Zu(u)?u.call(e):u}return e},qn.round=Ts,qn.runInContext=e,qn.sample=function(e){return(zu(e)?Kn:Hr)(e)},qn.size=function(e){if(null==e)return 0;if(Wu(e))return sa(e)?on(e):e.length;var t=po(e);return t==O||t==C?e.size:Rr(e).length},qn.snakeCase=Ja,qn.some=function(e,t,n){var r=zu(e)?It:ni;return n&&go(e,t,n)&&(t=i),r(e,uo(t,3))},qn.sortedIndex=function(e,t){return ri(e,t)},qn.sortedIndexBy=function(e,t,n){return ii(e,t,uo(n,2))},qn.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=ri(e,t);if(r<n&&Qu(e[r],t))return r}return-1},qn.sortedLastIndex=function(e,t){return ri(e,t,!0)},qn.sortedLastIndexBy=function(e,t,n){return ii(e,t,uo(n,2),!0)},qn.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var n=ri(e,t,!0)-1;if(Qu(e[n],t))return n}return-1},qn.startCase=Ha,qn.startsWith=function(e,t,n){return e=ba(e),n=null==n?0:ur(va(n),0,e.length),t=ai(t),e.slice(n,n+t.length)==t},qn.subtract=Es,qn.sum=function(e){return e&&e.length?Vt(e,is):0},qn.sumBy=function(e,t){return e&&e.length?Vt(e,uo(t,2)):0},qn.template=function(e,t,n){var r=qn.templateSettings;n&&go(e,t,n)&&(t=i),e=ba(e),t=Oa({},t,r,Ki);var o,u,a=Oa({},t.imports,r.imports,Ki),s=Na(a),c=$t(a,s),l=0,f=t.interpolate||be,p="__p += '",d=Ee((t.escape||be).source+"|"+f.source+"|"+(f===Y?fe:be).source+"|"+(t.evaluate||be).source+"|$","g"),h="//# sourceURL="+(De.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ye+"]")+"\n";e.replace(d,(function(t,n,r,i,a,s){return r||(r=i),p+=e.slice(l,s).replace(_e,Yt),n&&(o=!0,p+="' +\n__e("+n+") +\n'"),a&&(u=!0,p+="';\n"+a+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),l=s+t.length,t})),p+="';\n";var v=De.call(t,"variable")&&t.variable;if(v){if(ce.test(v))throw new we("Invalid `variable` option passed into `_.template`")}else p="with (obj) {\n"+p+"\n}\n";p=(u?p.replace(U,""):p).replace(B,"$1").replace($,"$1;"),p="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(u?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var y=Xa((function(){return Oe(s,h+"return "+p).apply(i,c)}));if(y.source=p,Yu(y))throw y;return y},qn.times=function(e,t){if((e=va(e))<1||e>f)return[];var n=d,r=gn(e,d);t=uo(t),e-=d;for(var i=Qt(r,t);++n<e;)t(n);return i},qn.toFinite=ha,qn.toInteger=va,qn.toLength=ya,qn.toLower=function(e){return ba(e).toLowerCase()},qn.toNumber=ma,qn.toSafeInteger=function(e){return e?ur(va(e),-9007199254740991,f):0===e?e:0},qn.toString=ba,qn.toUpper=function(e){return ba(e).toUpperCase()},qn.trim=function(e,t,n){if((e=ba(e))&&(n||t===i))return Ut(e);if(!e||!(t=ai(t)))return e;var r=un(e),o=un(t);return bi(r,Gt(r,o),Wt(r,o)+1).join("")},qn.trimEnd=function(e,t,n){if((e=ba(e))&&(n||t===i))return e.slice(0,an(e)+1);if(!e||!(t=ai(t)))return e;var r=un(e);return bi(r,0,Wt(r,un(t))+1).join("")},qn.trimStart=function(e,t,n){if((e=ba(e))&&(n||t===i))return e.replace(re,"");if(!e||!(t=ai(t)))return e;var r=un(e);return bi(r,Gt(r,un(t))).join("")},qn.truncate=function(e,t){var n=30,r="...";if(ta(t)){var o="separator"in t?t.separator:o;n="length"in t?va(t.length):n,r="omission"in t?ai(t.omission):r}var u=(e=ba(e)).length;if(Zt(e)){var a=un(e);u=a.length}if(n>=u)return e;var s=n-on(r);if(s<1)return r;var c=a?bi(a,0,s).join(""):e.slice(0,s);if(o===i)return c+r;if(a&&(s+=c.length-s),ua(o)){if(e.slice(s).search(o)){var l,f=c;for(o.global||(o=Ee(o.source,ba(pe.exec(o))+"g")),o.lastIndex=0;l=o.exec(f);)var p=l.index;c=c.slice(0,p===i?s:p)}}else if(e.indexOf(ai(o),s)!=s){var d=c.lastIndexOf(o);d>-1&&(c=c.slice(0,d))}return c+r},qn.unescape=function(e){return(e=ba(e))&&W.test(e)?e.replace(z,sn):e},qn.uniqueId=function(e){var t=++Pe;return ba(e)+t},qn.upperCase=Ka,qn.upperFirst=Ya,qn.each=bu,qn.eachRight=_u,qn.first=Wo,ss(qn,(gs={},br(qn,(function(e,t){De.call(qn.prototype,t)||(gs[t]=e)})),gs),{chain:!1}),qn.VERSION="4.17.21",bt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){qn[e].placeholder=qn})),bt(["drop","take"],(function(e,t){Bn.prototype[e]=function(n){n=n===i?1:mn(va(n),0);var r=this.__filtered__&&!t?new Bn(this):this.clone();return r.__filtered__?r.__takeCount__=gn(n,r.__takeCount__):r.__views__.push({size:gn(n,d),type:e+(r.__dir__<0?"Right":"")}),r},Bn.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),bt(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Bn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:uo(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),bt(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Bn.prototype[e]=function(){return this[n](1).value()[0]}})),bt(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Bn.prototype[e]=function(){return this.__filtered__?new Bn(this):this[n](1)}})),Bn.prototype.compact=function(){return this.filter(is)},Bn.prototype.find=function(e){return this.filter(e).head()},Bn.prototype.findLast=function(e){return this.reverse().find(e)},Bn.prototype.invokeMap=Jr((function(e,t){return"function"==typeof e?new Bn(this):this.map((function(n){return Ir(n,e,t)}))})),Bn.prototype.reject=function(e){return this.filter(Fu(uo(e)))},Bn.prototype.slice=function(e,t){e=va(e);var n=this;return n.__filtered__&&(e>0||t<0)?new Bn(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==i&&(n=(t=va(t))<0?n.dropRight(-t):n.take(t-e)),n)},Bn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Bn.prototype.toArray=function(){return this.take(d)},br(Bn.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),r=/^(?:head|last)$/.test(t),o=qn[r?"take"+("last"==t?"Right":""):t],u=r||/^find/.test(t);o&&(qn.prototype[t]=function(){var t=this.__wrapped__,a=r?[1]:arguments,s=t instanceof Bn,c=a[0],l=s||zu(t),f=function(e){var t=o.apply(qn,St([e],a));return r&&p?t[0]:t};l&&n&&"function"==typeof c&&1!=c.length&&(s=l=!1);var p=this.__chain__,d=!!this.__actions__.length,h=u&&!p,v=s&&!d;if(!u&&l){t=v?t:new Bn(this);var y=e.apply(t,a);return y.__actions__.push({func:hu,args:[f],thisArg:i}),new Un(y,p)}return h&&v?e.apply(this,a):(y=this.thru(f),h?r?y.value()[0]:y.value():y)})})),bt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=xe[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);qn.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(zu(i)?i:[],e)}return this[n]((function(n){return t.apply(zu(n)?n:[],e)}))}})),br(Bn.prototype,(function(e,t){var n=qn[t];if(n){var r=n.name+"";De.call(jn,r)||(jn[r]=[]),jn[r].push({name:t,func:n})}})),jn[Li(i,2).name]=[{name:"wrapper",func:i}],Bn.prototype.clone=function(){var e=new Bn(this.__wrapped__);return e.__actions__=Ci(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ci(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ci(this.__views__),e},Bn.prototype.reverse=function(){if(this.__filtered__){var e=new Bn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Bn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=zu(e),r=t<0,i=n?e.length:0,o=function(e,t,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],u=o.size;switch(o.type){case"drop":e+=u;break;case"dropRight":t-=u;break;case"take":t=gn(t,e+u);break;case"takeRight":e=mn(e,t-u)}}return{start:e,end:t}}(0,i,this.__views__),u=o.start,a=o.end,s=a-u,c=r?a:u-1,l=this.__iteratees__,f=l.length,p=0,d=gn(s,this.__takeCount__);if(!n||!r&&i==s&&d==s)return pi(e,this.__actions__);var h=[];e:for(;s--&&p<d;){for(var v=-1,y=e[c+=t];++v<f;){var m=l[v],g=m.iteratee,b=m.type,_=g(y);if(2==b)y=_;else if(!_){if(1==b)continue e;break e}}h[p++]=y}return h},qn.prototype.at=vu,qn.prototype.chain=function(){return du(this)},qn.prototype.commit=function(){return new Un(this.value(),this.__chain__)},qn.prototype.next=function(){this.__values__===i&&(this.__values__=da(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?i:this.__values__[this.__index__++]}},qn.prototype.plant=function(e){for(var t,n=this;n instanceof Qn;){var r=Vo(n);r.__index__=0,r.__values__=i,t?o.__wrapped__=r:t=r;var o=r;n=n.__wrapped__}return o.__wrapped__=e,t},qn.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Bn){var t=e;return this.__actions__.length&&(t=new Bn(this)),(t=t.reverse()).__actions__.push({func:hu,args:[tu],thisArg:i}),new Un(t,this.__chain__)}return this.thru(tu)},qn.prototype.toJSON=qn.prototype.valueOf=qn.prototype.value=function(){return pi(this.__wrapped__,this.__actions__)},qn.prototype.first=qn.prototype.head,ut&&(qn.prototype[ut]=function(){return this}),qn}();ot._=cn,(r=function(){return cn}.call(t,n,t,e))===i||(e.exports=r)}.call(this)},8306:function(e,t,n){var r=n(3369);function i(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var u=e.apply(this,r);return n.cache=o.set(i,u)||o,u};return n.cache=new(i.Cache||r),n}i.Cache=r,e.exports=i},9601:function(e,t,n){var r=n(371),i=n(9152),o=n(5403),u=n(327);e.exports=function(e){return o(e)?r(u(e)):i(e)}},2729:function(e,t,n){var r=n(7206),i=n(5742);e.exports=function(e,t){var n=[];if(!e||!e.length)return n;var o=-1,u=[],a=e.length;for(t=r(t,3);++o<a;){var s=e[o];t(s,o,e)&&(n.push(s),u.push(o))}return i(e,u),n}},479:function(e){e.exports=function(){return[]}},5062:function(e){e.exports=function(){return!1}},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}},3300:function(e,t,n){"use strict";var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,r.fetch&&(t.default=r.fetch.bind(r)),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response},2520:function(e,t,n){"use strict";var r="win32"===process.platform,i=n(9539);function o(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r];i&&"."!==i&&(".."===i?n.length&&".."!==n[n.length-1]?n.pop():t&&n.push(".."):n.push(i))}return n}function u(e){for(var t=e.length-1,n=0;n<=t&&!e[n];n++);for(var r=t;r>=0&&!e[r];r--);return 0===n&&r===t?e:n>r?[]:e.slice(n,r+1)}var a=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,s=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,c={};function l(e){var t=a.exec(e),n=(t[1]||"")+(t[2]||""),r=t[3]||"",i=s.exec(r);return[n,i[1],i[2],i[3]]}function f(e){var t=a.exec(e),n=t[1]||"",r=!!n&&":"!==n[1];return{device:n,isUnc:r,isAbsolute:r||!!t[2],tail:t[3]}}function p(e){return"\\\\"+e.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}c.resolve=function(){for(var e="",t="",n=!1,r=arguments.length-1;r>=-1;r--){var u;if(r>=0?u=arguments[r]:e?(u=process.env["="+e])&&u.substr(0,3).toLowerCase()===e.toLowerCase()+"\\"||(u=e+"\\"):u=process.cwd(),!i.isString(u))throw new TypeError("Arguments to path.resolve must be strings");if(u){var a=f(u),s=a.device,c=a.isUnc,l=a.isAbsolute,d=a.tail;if((!s||!e||s.toLowerCase()===e.toLowerCase())&&(e||(e=s),n||(t=d+"\\"+t,n=l),e&&n))break}}return c&&(e=p(e)),e+(n?"\\":"")+(t=o(t.split(/[\\\/]+/),!n).join("\\"))||"."},c.normalize=function(e){var t=f(e),n=t.device,r=t.isUnc,i=t.isAbsolute,u=t.tail,a=/[\\\/]$/.test(u);return(u=o(u.split(/[\\\/]+/),!i).join("\\"))||i||(u="."),u&&a&&(u+="\\"),r&&(n=p(n)),n+(i?"\\":"")+u},c.isAbsolute=function(e){return f(e).isAbsolute},c.join=function(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&e.push(n)}var r=e.join("\\");return/^[\\\/]{2}[^\\\/]/.test(e[0])||(r=r.replace(/^[\\\/]{2,}/,"\\")),c.normalize(r)},c.relative=function(e,t){e=c.resolve(e),t=c.resolve(t);for(var n=e.toLowerCase(),r=t.toLowerCase(),i=u(t.split("\\")),o=u(n.split("\\")),a=u(r.split("\\")),s=Math.min(o.length,a.length),l=s,f=0;f<s;f++)if(o[f]!==a[f]){l=f;break}if(0==l)return t;var p=[];for(f=l;f<o.length;f++)p.push("..");return(p=p.concat(i.slice(l))).join("\\")},c._makeLong=function(e){if(!i.isString(e))return e;if(!e)return"";var t=c.resolve(e);return/^[a-zA-Z]\:\\/.test(t)?"\\\\?\\"+t:/^\\\\[^?.]/.test(t)?"\\\\?\\UNC\\"+t.substring(2):e},c.dirname=function(e){var t=l(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},c.basename=function(e,t){var n=l(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},c.extname=function(e){return l(e)[3]},c.format=function(e){if(!i.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!i.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var n=e.dir,r=e.base||"";return n?n[n.length-1]===c.sep?n+r:n+c.sep+r:r},c.parse=function(e){if(!i.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=l(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},c.sep="\\",c.delimiter=";";var d=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,h={};function v(e){return d.exec(e).slice(1)}h.resolve=function(){for(var e="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var r=n>=0?arguments[n]:process.cwd();if(!i.isString(r))throw new TypeError("Arguments to path.resolve must be strings");r&&(e=r+"/"+e,t="/"===r[0])}return(t?"/":"")+(e=o(e.split("/"),!t).join("/"))||"."},h.normalize=function(e){var t=h.isAbsolute(e),n=e&&"/"===e[e.length-1];return(e=o(e.split("/"),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e},h.isAbsolute=function(e){return"/"===e.charAt(0)},h.join=function(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(e+=e?"/"+n:n)}return h.normalize(e)},h.relative=function(e,t){e=h.resolve(e).substr(1),t=h.resolve(t).substr(1);for(var n=u(e.split("/")),r=u(t.split("/")),i=Math.min(n.length,r.length),o=i,a=0;a<i;a++)if(n[a]!==r[a]){o=a;break}var s=[];for(a=o;a<n.length;a++)s.push("..");return(s=s.concat(r.slice(o))).join("/")},h._makeLong=function(e){return e},h.dirname=function(e){var t=v(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},h.basename=function(e,t){var n=v(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},h.extname=function(e){return v(e)[3]},h.format=function(e){if(!i.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!i.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);return(e.dir?e.dir+h.sep:"")+(e.base||"")},h.parse=function(e){if(!i.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=v(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return t[1]=t[1]||"",t[2]=t[2]||"",t[3]=t[3]||"",{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},h.sep="/",h.delimiter=":",e.exports=r?c:h,e.exports.posix=h,e.exports.win32=c},5501:function(e,t,n){"use strict";var r=n(9585);t.Z=r.default},5163:function(e,t,n){"use strict";n.d(t,{$6:function(){return a},zt:function(){return u}});var r=n(7294),i=n(5501),o=r.createContext(new i.Z),u=o.Provider,a=o.Consumer;t.ZP=o},4410:function(e,t,n){"use strict";var r,i=n(7294),o=n(9585),u=n(5163),a=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(t){var n=e.call(this,t)||this;return t.cookies?n.cookies=t.cookies:n.cookies=new o.default,n}return a(t,e),t.prototype.render=function(){return i.createElement(u.zt,{value:this.cookies},this.props.children)},t}(i.Component);t.Z=s},3456:function(e,t,n){"use strict";n.r(t),n.d(t,{Cookies:function(){return r.Z},CookiesProvider:function(){return i.Z},useCookies:function(){return u.Z},withCookies:function(){return o.Z}});var r=n(5501),i=n(4410),o=n(7060),u=n(6645),a=n(1259),s={};for(var c in a)["default","Cookies","CookiesProvider","withCookies","useCookies"].indexOf(c)<0&&(s[c]=function(e){return a[e]}.bind(0,c));n.d(t,s)},1259:function(){},6645:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),i=n(5163);function o(e){var t=(0,r.useContext)(i.ZP);if(!t)throw new Error("Missing <CookiesProvider>");var n=t.getAll(),o=(0,r.useState)(n),u=o[0],a=o[1],s=(0,r.useRef)(u);return"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement&&(0,r.useLayoutEffect)((function(){function n(){var n=t.getAll();(function(e,t,n){if(!e)return!0;for(var r=0,i=e;r<i.length;r++){var o=i[r];if(t[o]!==n[o])return!0}return!1})(e||null,n,s.current)&&a(n),s.current=n}return t.addChangeListener(n),function(){t.removeChangeListener(n)}}),[t]),[u,(0,r.useMemo)((function(){return t.set.bind(t)}),[t]),(0,r.useMemo)((function(){return t.remove.bind(t)}),[t])]}},7060:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r,i=n(7294),o=n(8679),u=n.n(o),a=n(5163),s=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},c.apply(this,arguments)};function l(e){var t=e.displayName||e.name,n=function(n){function r(){var e=null!==n&&n.apply(this,arguments)||this;return e.onChange=function(){e.forceUpdate()},e}return s(r,n),r.prototype.listen=function(){this.props.cookies.addChangeListener(this.onChange)},r.prototype.unlisten=function(e){(e||this.props.cookies).removeChangeListener(this.onChange)},r.prototype.componentDidMount=function(){this.listen()},r.prototype.componentDidUpdate=function(e){e.cookies!==this.props.cookies&&(this.unlisten(e.cookies),this.listen())},r.prototype.componentWillUnmount=function(){this.unlisten()},r.prototype.render=function(){var t=this.props,n=t.forwardedRef,r=t.cookies,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(t,["forwardedRef","cookies"]),u=r.getAll();return i.createElement(e,c({},o,{ref:n,cookies:r,allCookies:u}))},r.displayName="withCookies("+t+")",r.WrappedComponent=e,r}(i.Component),r=i.forwardRef((function(e,t){return i.createElement(a.$6,null,(function(r){return i.createElement(n,c({cookies:r},e,{forwardedRef:t}))}))}));return r.displayName=n.displayName,r.WrappedComponent=n.WrappedComponent,u()(r,e)}},9921:function(e,t){"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,u=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,_=n?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case f:case o:case a:case u:case d:return e;default:switch(e=e&&e.$$typeof){case c:case p:case y:case v:case s:return e;default:return t}}case i:return t}}}function O(e){return w(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=c,t.ContextProvider=s,t.Element=r,t.ForwardRef=p,t.Fragment=o,t.Lazy=y,t.Memo=v,t.Portal=i,t.Profiler=a,t.StrictMode=u,t.Suspense=d,t.isAsyncMode=function(e){return O(e)||w(e)===l},t.isConcurrentMode=O,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===v},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===u},t.isSuspense=function(e){return w(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===a||e===u||e===d||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===v||e.$$typeof===s||e.$$typeof===c||e.$$typeof===p||e.$$typeof===g||e.$$typeof===b||e.$$typeof===_||e.$$typeof===m)},t.typeOf=w},9864:function(e,t,n){"use strict";e.exports=n(9921)},2408:function(e,t){"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator,h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,y={};function m(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function g(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var _=b.prototype=new g;_.constructor=b,v(_,m.prototype),_.isPureReactComponent=!0;var w=Array.isArray,O=Object.prototype.hasOwnProperty,k={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var i,o={},u=null,a=null;if(null!=t)for(i in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)O.call(t,i)&&!T.hasOwnProperty(i)&&(o[i]=t[i]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===o[i]&&(o[i]=s[i]);return{$$typeof:n,type:e,key:u,ref:a,props:o,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,i,o,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return u=u(s=e),e=""===o?"."+x(s,0):o,w(u)?(i="",null!=e&&(i=e.replace(C,"$&/")+"/"),I(u,t,i,"",(function(e){return e}))):null!=u&&(S(u)&&(u=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,i+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(C,"$&/")+"/")+e)),t.push(u)),1;if(s=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var l=o+x(a=e[c],c);s+=I(a,t,i,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)s+=I(a=a.value,t,i,l=o+x(a,c++),u);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function j(e,t,n){if(null==e)return e;var r=[],i=0;return I(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},D={transition:null},P={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:D,ReactCurrentOwner:k};t.Children={map:j,forEach:function(e,t,n){j(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return j(e,(function(){t++})),t},toArray:function(e){return j(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=i,t.Profiler=u,t.PureComponent=b,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=v({},e.props),o=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)O.call(t,c)&&!T.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){s=Array(c);for(var l=0;l<c;l++)s[l]=arguments[l+2];i.children=s}return{$$typeof:n,type:e.type,key:o,ref:u,props:i,_owner:a}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.2.0"},7294:function(e,t,n){"use strict";e.exports=n(2408)},5313:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!((i=(i=u.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},u=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],u=0,a=o.length;u<a;u++,i++)r[i]=o[u];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.SubscriptionClient=void 0;var a=void 0!==n.g?n.g:"undefined"!=typeof window?window:{},s=a.WebSocket||a.MozWebSocket,c=n(3010),l=n(796),f=n(9277),p=n(5905),d=n(3033),h=n(9535),v=n(1322),y=n(2892),m=n(2639),g=n(4957),b=function(){function e(e,t,n,r){var i=t||{},o=i.connectionCallback,u=void 0===o?void 0:o,a=i.connectionParams,f=void 0===a?{}:a,p=i.minTimeout,d=void 0===p?m.MIN_WS_TIMEOUT:p,h=i.timeout,v=void 0===h?m.WS_TIMEOUT:h,g=i.reconnect,b=void 0!==g&&g,_=i.reconnectionAttempts,w=void 0===_?1/0:_,O=i.lazy,k=void 0!==O&&O,T=i.inactivityTimeout,E=void 0===T?0:T,S=i.wsOptionArguments,C=void 0===S?[]:S;if(this.wsImpl=n||s,!this.wsImpl)throw new Error("Unable to find native implementation, or alternative implementation for WebSocket!");this.wsProtocols=r||y.GRAPHQL_WS,this.connectionCallback=u,this.url=e,this.operations={},this.nextOperationId=0,this.minWsTimeout=d,this.wsTimeout=v,this.unsentMessagesQueue=[],this.reconnect=b,this.reconnecting=!1,this.reconnectionAttempts=w,this.lazy=!!k,this.inactivityTimeout=E,this.closedByUser=!1,this.backoff=new c({jitter:.5}),this.eventEmitter=new l.EventEmitter,this.middlewares=[],this.client=null,this.maxConnectTimeGenerator=this.createMaxConnectTimeGenerator(),this.connectionParams=this.getConnectionParams(f),this.wsOptionArguments=C,this.lazy||this.connect()}return Object.defineProperty(e.prototype,"status",{get:function(){return null===this.client?this.wsImpl.CLOSED:this.client.readyState},enumerable:!1,configurable:!0}),e.prototype.close=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0),this.clearInactivityTimeout(),null!==this.client&&(this.closedByUser=t,e&&(this.clearCheckConnectionInterval(),this.clearMaxConnectTimeout(),this.clearTryReconnectTimeout(),this.unsubscribeAll(),this.sendMessage(void 0,g.default.GQL_CONNECTION_TERMINATE,null)),this.client.close(),this.client.onopen=null,this.client.onclose=null,this.client.onerror=null,this.client.onmessage=null,this.client=null,this.eventEmitter.emit("disconnected"),e||this.tryReconnect())},e.prototype.request=function(e){var t,n,r=this.getObserver.bind(this),i=this.executeOperation.bind(this),o=this.unsubscribe.bind(this);return this.clearInactivityTimeout(),(t={})[v.default]=function(){return this},t.subscribe=function(t,u,a){var s=r(t,u,a);return n=i(e,(function(e,t){null===e&&null===t?s.complete&&s.complete():e?s.error&&s.error(e[0]):s.next&&s.next(t)})),{unsubscribe:function(){n&&(o(n),n=null)}}},t},e.prototype.on=function(e,t,n){var r=this.eventEmitter.on(e,t,n);return function(){r.off(e,t,n)}},e.prototype.onConnected=function(e,t){return this.on("connected",e,t)},e.prototype.onConnecting=function(e,t){return this.on("connecting",e,t)},e.prototype.onDisconnected=function(e,t){return this.on("disconnected",e,t)},e.prototype.onReconnected=function(e,t){return this.on("reconnected",e,t)},e.prototype.onReconnecting=function(e,t){return this.on("reconnecting",e,t)},e.prototype.onError=function(e,t){return this.on("error",e,t)},e.prototype.unsubscribeAll=function(){var e=this;Object.keys(this.operations).forEach((function(t){e.unsubscribe(t)}))},e.prototype.applyMiddlewares=function(e){var t=this;return new Promise((function(n,r){var i,o,a;i=u(t.middlewares),o=t,(a=function(t){if(t)r(t);else if(i.length>0){var u=i.shift();u&&u.applyMiddleware.apply(o,[e,a])}else n(e)})()}))},e.prototype.use=function(e){var t=this;return e.map((function(e){if("function"!=typeof e.applyMiddleware)throw new Error("Middleware must implement the applyMiddleware function.");t.middlewares.push(e)})),this},e.prototype.getConnectionParams=function(e){return function(){return new Promise((function(t,n){if("function"==typeof e)try{return t(e.call(null))}catch(e){return n(e)}t(e)}))}},e.prototype.executeOperation=function(e,t){var n=this;null===this.client&&this.connect();var r=this.generateOperationId();return this.operations[r]={options:e,handler:t},this.applyMiddlewares(e).then((function(e){n.checkOperationOptions(e,t),n.operations[r]&&(n.operations[r]={options:e,handler:t},n.sendMessage(r,g.default.GQL_START,e))})).catch((function(e){n.unsubscribe(r),t(n.formatErrors(e))})),r},e.prototype.getObserver=function(e,t,n){return"function"==typeof e?{next:function(t){return e(t)},error:function(e){return t&&t(e)},complete:function(){return n&&n()}}:e},e.prototype.createMaxConnectTimeGenerator=function(){var e=this.minWsTimeout,t=this.wsTimeout;return new c({min:e,max:t,factor:1.2})},e.prototype.clearCheckConnectionInterval=function(){this.checkConnectionIntervalId&&(clearInterval(this.checkConnectionIntervalId),this.checkConnectionIntervalId=null)},e.prototype.clearMaxConnectTimeout=function(){this.maxConnectTimeoutId&&(clearTimeout(this.maxConnectTimeoutId),this.maxConnectTimeoutId=null)},e.prototype.clearTryReconnectTimeout=function(){this.tryReconnectTimeoutId&&(clearTimeout(this.tryReconnectTimeoutId),this.tryReconnectTimeoutId=null)},e.prototype.clearInactivityTimeout=function(){this.inactivityTimeoutId&&(clearTimeout(this.inactivityTimeoutId),this.inactivityTimeoutId=null)},e.prototype.setInactivityTimeout=function(){var e=this;this.inactivityTimeout>0&&0===Object.keys(this.operations).length&&(this.inactivityTimeoutId=setTimeout((function(){0===Object.keys(e.operations).length&&e.close()}),this.inactivityTimeout))},e.prototype.checkOperationOptions=function(e,t){var n=e.query,r=e.variables,i=e.operationName;if(!n)throw new Error("Must provide a query.");if(!t)throw new Error("Must provide an handler.");if(!f.default(n)&&!h.getOperationAST(n,i)||i&&!f.default(i)||r&&!p.default(r))throw new Error("Incorrect option types. query must be a string or a document,`operationName` must be a string, and `variables` must be an object.")},e.prototype.buildMessage=function(e,t,n){return{id:e,type:t,payload:n&&n.query?r(r({},n),{query:"string"==typeof n.query?n.query:d.print(n.query)}):n}},e.prototype.formatErrors=function(e){return Array.isArray(e)?e:e&&e.errors?this.formatErrors(e.errors):e&&e.message?[e]:[{name:"FormatedError",message:"Unknown error",originalError:e}]},e.prototype.sendMessage=function(e,t,n){this.sendMessageRaw(this.buildMessage(e,t,n))},e.prototype.sendMessageRaw=function(e){switch(this.status){case this.wsImpl.OPEN:var t=JSON.stringify(e);try{JSON.parse(t)}catch(t){this.eventEmitter.emit("error",new Error("Message must be JSON-serializable. Got: "+e))}this.client.send(t);break;case this.wsImpl.CONNECTING:this.unsentMessagesQueue.push(e);break;default:this.reconnecting||this.eventEmitter.emit("error",new Error("A message was not sent because socket is not connected, is closing or is already closed. Message was: "+JSON.stringify(e)))}},e.prototype.generateOperationId=function(){return String(++this.nextOperationId)},e.prototype.tryReconnect=function(){var e=this;if(this.reconnect&&!(this.backoff.attempts>=this.reconnectionAttempts)){this.reconnecting||(Object.keys(this.operations).forEach((function(t){e.unsentMessagesQueue.push(e.buildMessage(t,g.default.GQL_START,e.operations[t].options))})),this.reconnecting=!0),this.clearTryReconnectTimeout();var t=this.backoff.duration();this.tryReconnectTimeoutId=setTimeout((function(){e.connect()}),t)}},e.prototype.flushUnsentMessagesQueue=function(){var e=this;this.unsentMessagesQueue.forEach((function(t){e.sendMessageRaw(t)})),this.unsentMessagesQueue=[]},e.prototype.checkConnection=function(){this.wasKeepAliveReceived?this.wasKeepAliveReceived=!1:this.reconnecting||this.close(!1,!0)},e.prototype.checkMaxConnectTimeout=function(){var e=this;this.clearMaxConnectTimeout(),this.maxConnectTimeoutId=setTimeout((function(){e.status!==e.wsImpl.OPEN&&(e.reconnecting=!0,e.close(!1,!0))}),this.maxConnectTimeGenerator.duration())},e.prototype.connect=function(){var e,t=this;this.client=new((e=this.wsImpl).bind.apply(e,u([void 0,this.url,this.wsProtocols],this.wsOptionArguments))),this.checkMaxConnectTimeout(),this.client.onopen=function(){return i(t,void 0,void 0,(function(){var e,t;return o(this,(function(n){switch(n.label){case 0:if(this.status!==this.wsImpl.OPEN)return[3,4];this.clearMaxConnectTimeout(),this.closedByUser=!1,this.eventEmitter.emit(this.reconnecting?"reconnecting":"connecting"),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.connectionParams()];case 2:return e=n.sent(),this.sendMessage(void 0,g.default.GQL_CONNECTION_INIT,e),this.flushUnsentMessagesQueue(),[3,4];case 3:return t=n.sent(),this.sendMessage(void 0,g.default.GQL_CONNECTION_ERROR,t),this.flushUnsentMessagesQueue(),[3,4];case 4:return[2]}}))}))},this.client.onclose=function(){t.closedByUser||t.close(!1,!1)},this.client.onerror=function(e){t.eventEmitter.emit("error",e)},this.client.onmessage=function(e){var n=e.data;t.processReceivedData(n)}},e.prototype.processReceivedData=function(e){var t,n;try{n=(t=JSON.parse(e)).id}catch(t){throw new Error("Message must be JSON-parseable. Got: "+e)}if(-1===[g.default.GQL_DATA,g.default.GQL_COMPLETE,g.default.GQL_ERROR].indexOf(t.type)||this.operations[n])switch(t.type){case g.default.GQL_CONNECTION_ERROR:this.connectionCallback&&this.connectionCallback(t.payload);break;case g.default.GQL_CONNECTION_ACK:this.eventEmitter.emit(this.reconnecting?"reconnected":"connected",t.payload),this.reconnecting=!1,this.backoff.reset(),this.maxConnectTimeGenerator.reset(),this.connectionCallback&&this.connectionCallback();break;case g.default.GQL_COMPLETE:var i=this.operations[n].handler;delete this.operations[n],i.call(this,null,null);break;case g.default.GQL_ERROR:this.operations[n].handler(this.formatErrors(t.payload),null),delete this.operations[n];break;case g.default.GQL_DATA:var o=t.payload.errors?r(r({},t.payload),{errors:this.formatErrors(t.payload.errors)}):t.payload;this.operations[n].handler(null,o);break;case g.default.GQL_CONNECTION_KEEP_ALIVE:var u=void 0===this.wasKeepAliveReceived;this.wasKeepAliveReceived=!0,u&&this.checkConnection(),this.checkConnectionIntervalId&&(clearInterval(this.checkConnectionIntervalId),this.checkConnection()),this.checkConnectionIntervalId=setInterval(this.checkConnection.bind(this),this.wsTimeout);break;default:throw new Error("Invalid message type!")}else this.unsubscribe(n)},e.prototype.unsubscribe=function(e){this.operations[e]&&(delete this.operations[e],this.setInactivityTimeout(),this.sendMessage(e,g.default.GQL_STOP,void 0))},e}();t.SubscriptionClient=b},2639:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WS_TIMEOUT=t.MIN_WS_TIMEOUT=void 0,t.MIN_WS_TIMEOUT=1e3,t.WS_TIMEOUT=3e4},4957:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){throw new Error("Static Class")}return e.GQL_CONNECTION_INIT="connection_init",e.GQL_CONNECTION_ACK="connection_ack",e.GQL_CONNECTION_ERROR="connection_error",e.GQL_CONNECTION_KEEP_ALIVE="ka",e.GQL_CONNECTION_TERMINATE="connection_terminate",e.GQL_START="start",e.GQL_DATA="data",e.GQL_ERROR="error",e.GQL_COMPLETE="complete",e.GQL_STOP="stop",e.SUBSCRIPTION_START="subscription_start",e.SUBSCRIPTION_DATA="subscription_data",e.SUBSCRIPTION_SUCCESS="subscription_success",e.SUBSCRIPTION_FAIL="subscription_fail",e.SUBSCRIPTION_END="subscription_end",e.INIT="init",e.INIT_SUCCESS="init_success",e.INIT_FAIL="init_fail",e.KEEP_ALIVE="keepalive",e}();t.default=n},2892:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GRAPHQL_SUBSCRIPTIONS=t.GRAPHQL_WS=void 0,t.GRAPHQL_WS="graphql-ws",t.GRAPHQL_SUBSCRIPTIONS="graphql-subscriptions"},5905:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return null!==e&&"object"==typeof e}},9277:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"string"==typeof e}},796:function(e){"use strict";var t=Object.prototype.hasOwnProperty,n="~";function r(){}function i(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,r,o,u){if("function"!=typeof r)throw new TypeError("The listener must be a function");var a=new i(r,o||e,u),s=n?n+t:t;return e._events[s]?e._events[s].fn?e._events[s]=[e._events[s],a]:e._events[s].push(a):(e._events[s]=a,e._eventsCount++),e}function u(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function a(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),a.prototype.eventNames=function(){var e,r,i=[];if(0===this._eventsCount)return i;for(r in e=this._events)t.call(e,r)&&i.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},a.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,o=r.length,u=new Array(o);i<o;i++)u[i]=r[i].fn;return u},a.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},a.prototype.emit=function(e,t,r,i,o,u){var a=n?n+e:e;if(!this._events[a])return!1;var s,c,l=this._events[a],f=arguments.length;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),f){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,r),!0;case 4:return l.fn.call(l.context,t,r,i),!0;case 5:return l.fn.call(l.context,t,r,i,o),!0;case 6:return l.fn.call(l.context,t,r,i,o,u),!0}for(c=1,s=new Array(f-1);c<f;c++)s[c-1]=arguments[c];l.fn.apply(l.context,s)}else{var p,d=l.length;for(c=0;c<d;c++)switch(l[c].once&&this.removeListener(e,l[c].fn,void 0,!0),f){case 1:l[c].fn.call(l[c].context);break;case 2:l[c].fn.call(l[c].context,t);break;case 3:l[c].fn.call(l[c].context,t,r);break;case 4:l[c].fn.call(l[c].context,t,r,i);break;default:if(!s)for(p=1,s=new Array(f-1);p<f;p++)s[p-1]=arguments[p];l[c].fn.apply(l[c].context,s)}}return!0},a.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},a.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},a.prototype.removeListener=function(e,t,r,i){var o=n?n+e:e;if(!this._events[o])return this;if(!t)return u(this,o),this;var a=this._events[o];if(a.fn)a.fn!==t||i&&!a.once||r&&a.context!==r||u(this,o);else{for(var s=0,c=[],l=a.length;s<l;s++)(a[s].fn!==t||i&&!a[s].once||r&&a[s].context!==r)&&c.push(a[s]);c.length?this._events[o]=1===c.length?c[0]:c:u(this,o)}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&u(this,t)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a},1322:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}}),e=n.hmd(e);var r=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:e)},655:function(e,t,n){"use strict";n.d(t,{Jh:function(){return s},ZT:function(){return i},_T:function(){return u},ev:function(){return c},mG:function(){return a},pi:function(){return o}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function a(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}s((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!((i=(i=u.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function c(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create},9585:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(8087);function i(e,t){void 0===t&&(t={});var n=function(e){return e&&"j"===e[0]&&":"===e[1]?e.substr(2):e}(e);if(function(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(n,t.doNotParse))try{return JSON.parse(n)}catch(e){}return e}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},u=function(){function e(e,t){var n=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"==typeof e?r.Q(e,t):"object"==typeof e&&null!==e?e:{}}(e,t),new Promise((function(){n.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=r.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,n){return void 0===t&&(t={}),this._updateBrowserValues(n),i(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var n={};for(var r in this.cookies)n[r]=i(this.cookies[r],e);return n},e.prototype.set=function(e,t,n){var i;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=o(o({},this.cookies),((i={})[e]=t,i)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=r.q(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=o(o({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=o({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=r.q(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}()},8087:function(e,t){"use strict";t.Q=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var r={},i=t||{},u=e.split(";"),a=i.decode||n,s=0;s<u.length;s++){var c=u[s],l=c.indexOf("=");if(!(l<0)){var f=c.substring(0,l).trim();if(null==r[f]){var p=c.substring(l+1,c.length).trim();'"'===p[0]&&(p=p.slice(1,-1)),r[f]=o(p,a)}}}return r},t.q=function(e,t,n){var o=n||{},u=o.encode||r;if("function"!=typeof u)throw new TypeError("option encode is invalid");if(!i.test(e))throw new TypeError("argument name is invalid");var a=u(t);if(a&&!i.test(a))throw new TypeError("argument val is invalid");var s=e+"="+a;if(null!=o.maxAge){var c=o.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(c)}if(o.domain){if(!i.test(o.domain))throw new TypeError("option domain is invalid");s+="; Domain="+o.domain}if(o.path){if(!i.test(o.path))throw new TypeError("option path is invalid");s+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");s+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(s+="; HttpOnly"),o.secure&&(s+="; Secure"),o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s};var n=decodeURIComponent,r=encodeURIComponent,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function o(e,t){try{return t(e)}catch(t){return e}}},1496:function(e){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},384:function(e){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},9539:function(e,t,n){var r=/%[sdj%]/g;t.format=function(e){if(!y(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(u(arguments[n]));return t.join(" ")}n=1;for(var i=arguments,o=i.length,a=String(e).replace(r,(function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(i[n++]);case"%d":return Number(i[n++]);case"%j":try{return JSON.stringify(i[n++])}catch(e){return"[Circular]"}default:return e}})),s=i[n];n<o;s=i[++n])h(s)||!b(s)?a+=" "+s:a+=" "+u(s);return a},t.deprecate=function(e,r){if(m(n.g.process))return function(){return t.deprecate(e,r).apply(this,arguments)};if(!0===process.noDeprecation)return e;var i=!1;return function(){if(!i){if(process.throwDeprecation)throw new Error(r);process.traceDeprecation?console.trace(r):console.error(r),i=!0}return e.apply(this,arguments)}};var i,o={};function u(e,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&t._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),c(r,e,r.depth)}function a(e,t){var n=u.styles[t];return n?"["+u.colors[n][0]+"m"+e+"["+u.colors[n][1]+"m":e}function s(e,t){return e}function c(e,n,r){if(e.customInspect&&n&&O(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return y(i)||(i=c(e,i,r)),i}var o=function(e,t){if(m(t))return e.stylize("undefined","undefined");if(y(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return v(t)?e.stylize(""+t,"number"):d(t)?e.stylize(""+t,"boolean"):h(t)?e.stylize("null","null"):void 0}(e,n);if(o)return o;var u=Object.keys(n),a=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(n)),w(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return l(n);if(0===u.length){if(O(n)){var s=n.name?": "+n.name:"";return e.stylize("[Function"+s+"]","special")}if(g(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(_(n))return e.stylize(Date.prototype.toString.call(n),"date");if(w(n))return l(n)}var b,k="",T=!1,E=["{","}"];return p(n)&&(T=!0,E=["[","]"]),O(n)&&(k=" [Function"+(n.name?": "+n.name:"")+"]"),g(n)&&(k=" "+RegExp.prototype.toString.call(n)),_(n)&&(k=" "+Date.prototype.toUTCString.call(n)),w(n)&&(k=" "+l(n)),0!==u.length||T&&0!=n.length?r<0?g(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),b=T?function(e,t,n,r,i){for(var o=[],u=0,a=t.length;u<a;++u)C(t,String(u))?o.push(f(e,t,n,r,String(u),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(f(e,t,n,r,i,!0))})),o}(e,n,r,a,u):u.map((function(t){return f(e,n,r,a,t,T)})),e.seen.pop(),function(e,t,n){return e.reduce((function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}(b,k,E)):E[0]+k+E[1]}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,i,o){var u,a,s;if((s=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?a=s.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):s.set&&(a=e.stylize("[Setter]","special")),C(r,i)||(u="["+i+"]"),a||(e.seen.indexOf(s.value)<0?(a=h(n)?c(e,s.value,null):c(e,s.value,n-1)).indexOf("\n")>-1&&(a=o?a.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+a.split("\n").map((function(e){return"   "+e})).join("\n")):a=e.stylize("[Circular]","special")),m(u)){if(o&&i.match(/^\d+$/))return a;(u=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+a}function p(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function h(e){return null===e}function v(e){return"number"==typeof e}function y(e){return"string"==typeof e}function m(e){return void 0===e}function g(e){return b(e)&&"[object RegExp]"===k(e)}function b(e){return"object"==typeof e&&null!==e}function _(e){return b(e)&&"[object Date]"===k(e)}function w(e){return b(e)&&("[object Error]"===k(e)||e instanceof Error)}function O(e){return"function"==typeof e}function k(e){return Object.prototype.toString.call(e)}function T(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(m(i)&&(i=process.env.NODE_DEBUG||""),e=e.toUpperCase(),!o[e])if(new RegExp("\\b"+e+"\\b","i").test(i)){var n=process.pid;o[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else o[e]=function(){};return o[e]},t.inspect=u,u.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=d,t.isNull=h,t.isNullOrUndefined=function(e){return null==e},t.isNumber=v,t.isString=y,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=m,t.isRegExp=g,t.isObject=b,t.isDate=_,t.isError=w,t.isFunction=O,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(384);var E=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function S(){var e=new Date,t=[T(e.getHours()),T(e.getMinutes()),T(e.getSeconds())].join(":");return[e.getDate(),E[e.getMonth()],t].join(" ")}function C(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",S(),t.format.apply(t,arguments))},t.inherits=n(1496),t._extend=function(e,t){if(!t||!b(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}},9329:function(e,t,n){e.exports=n(516).Observable},516:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}t.Observable=void 0;var o=function(){return"function"==typeof Symbol},u=function(e){return o()&&Boolean(Symbol[e])},a=function(e){return u(e)?Symbol[e]:"@@"+e};o()&&!u("observable")&&(Symbol.observable=Symbol("observable"));var s=a("iterator"),c=a("observable"),l=a("species");function f(e,t){var n=e[t];if(null!=n){if("function"!=typeof n)throw new TypeError(n+" is not a function");return n}}function p(e){var t=e.constructor;return void 0!==t&&null===(t=t[l])&&(t=void 0),void 0!==t?t:O}function d(e){return e instanceof O}function h(e){h.log?h.log(e):setTimeout((function(){throw e}))}function v(e){Promise.resolve().then((function(){try{e()}catch(e){h(e)}}))}function y(e){var t=e._cleanup;if(void 0!==t&&(e._cleanup=void 0,t))try{if("function"==typeof t)t();else{var n=f(t,"unsubscribe");n&&n.call(t)}}catch(e){h(e)}}function m(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function g(e,t,n){e._state="running";var r=e._observer;try{var i=f(r,t);switch(t){case"next":i&&i.call(r,n);break;case"error":if(m(e),!i)throw n;i.call(r,n);break;case"complete":m(e),i&&i.call(r)}}catch(e){h(e)}"closed"===e._state?y(e):"running"===e._state&&(e._state="ready")}function b(e,t,n){if("closed"!==e._state){if("buffering"!==e._state)return"ready"!==e._state?(e._state="buffering",e._queue=[{type:t,value:n}],void v((function(){return function(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(g(e,t[n].type,t[n].value),"closed"!==e._state);++n);}}(e)}))):void g(e,t,n);e._queue.push({type:t,value:n})}}var _=function(){function e(t,r){n(this,e),this._cleanup=void 0,this._observer=t,this._queue=void 0,this._state="initializing";var i=new w(this);try{this._cleanup=r.call(void 0,i)}catch(e){i.error(e)}"initializing"===this._state&&(this._state="ready")}return i(e,[{key:"unsubscribe",value:function(){"closed"!==this._state&&(m(this),y(this))}},{key:"closed",get:function(){return"closed"===this._state}}]),e}(),w=function(){function e(t){n(this,e),this._subscription=t}return i(e,[{key:"next",value:function(e){b(this._subscription,"next",e)}},{key:"error",value:function(e){b(this._subscription,"error",e)}},{key:"complete",value:function(){b(this._subscription,"complete")}},{key:"closed",get:function(){return"closed"===this._subscription._state}}]),e}(),O=function(){function e(t){if(n(this,e),!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if("function"!=typeof t)throw new TypeError("Observable initializer must be a function");this._subscriber=t}return i(e,[{key:"subscribe",value:function(e){return"object"==typeof e&&null!==e||(e={next:e,error:arguments[1],complete:arguments[2]}),new _(e,this._subscriber)}},{key:"forEach",value:function(e){var t=this;return new Promise((function(n,r){if("function"==typeof e)var i=t.subscribe({next:function(t){try{e(t,o)}catch(e){r(e),i.unsubscribe()}},error:r,complete:n});else r(new TypeError(e+" is not a function"));function o(){i.unsubscribe(),n()}}))}},{key:"map",value:function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");return new(p(this))((function(n){return t.subscribe({next:function(t){try{t=e(t)}catch(e){return n.error(e)}n.next(t)},error:function(e){n.error(e)},complete:function(){n.complete()}})}))}},{key:"filter",value:function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");return new(p(this))((function(n){return t.subscribe({next:function(t){try{if(!e(t))return}catch(e){return n.error(e)}n.next(t)},error:function(e){n.error(e)},complete:function(){n.complete()}})}))}},{key:"reduce",value:function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");var n=p(this),r=arguments.length>1,i=!1,o=arguments[1],u=o;return new n((function(n){return t.subscribe({next:function(t){var o=!i;if(i=!0,!o||r)try{u=e(u,t)}catch(e){return n.error(e)}else u=t},error:function(e){n.error(e)},complete:function(){if(!i&&!r)return n.error(new TypeError("Cannot reduce an empty sequence"));n.next(u),n.complete()}})}))}},{key:"concat",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=p(this);return new i((function(t){var r,o=0;return function e(u){r=u.subscribe({next:function(e){t.next(e)},error:function(e){t.error(e)},complete:function(){o===n.length?(r=void 0,t.complete()):e(i.from(n[o++]))}})}(e),function(){r&&(r.unsubscribe(),r=void 0)}}))}},{key:"flatMap",value:function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");var n=p(this);return new n((function(r){var i=[],o=t.subscribe({next:function(t){if(e)try{t=e(t)}catch(e){return r.error(e)}var o=n.from(t).subscribe({next:function(e){r.next(e)},error:function(e){r.error(e)},complete:function(){var e=i.indexOf(o);e>=0&&i.splice(e,1),u()}});i.push(o)},error:function(e){r.error(e)},complete:function(){u()}});function u(){o.closed&&0===i.length&&r.complete()}return function(){i.forEach((function(e){return e.unsubscribe()})),o.unsubscribe()}}))}},{key:c,value:function(){return this}}],[{key:"from",value:function(t){var n="function"==typeof this?this:e;if(null==t)throw new TypeError(t+" is not an object");var r=f(t,c);if(r){var i=r.call(t);if(Object(i)!==i)throw new TypeError(i+" is not an object");return d(i)&&i.constructor===n?i:new n((function(e){return i.subscribe(e)}))}if(u("iterator")&&(r=f(t,s)))return new n((function(e){v((function(){if(!e.closed){var n=!0,i=!1,o=void 0;try{for(var u,a=r.call(t)[Symbol.iterator]();!(n=(u=a.next()).done);n=!0){var s=u.value;if(e.next(s),e.closed)return}}catch(e){i=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}e.complete()}}))}));if(Array.isArray(t))return new n((function(e){v((function(){if(!e.closed){for(var n=0;n<t.length;++n)if(e.next(t[n]),e.closed)return;e.complete()}}))}));throw new TypeError(t+" is not observable")}},{key:"of",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="function"==typeof this?this:e;return new i((function(e){v((function(){if(!e.closed){for(var t=0;t<n.length;++t)if(e.next(n[t]),e.closed)return;e.complete()}}))}))}},{key:l,get:function(){return this}}]),e}();t.Observable=O,o()&&Object.defineProperty(O,Symbol("extensions"),{value:{symbol:c,hostReportError:h},configurable:!0})},1644:function(e,t,n){"use strict";var r;function i(e){return!!e&&e<7}function o(e){return 7===e||8===e}n.d(t,{Ie:function(){return r},Jp:function(){return o},Oj:function(){return i}}),function(e){e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error"}(r||(r={}))},990:function(e,t,n){"use strict";n.d(t,{MS:function(){return a},YG:function(){return o},cA:function(){return s},ls:function(){return u}});var r=n(655),i=(n(6961),n(3154)),o=Symbol();function u(e){return!!e.extensions&&Array.isArray(e.extensions[o])}function a(e){return e.hasOwnProperty("graphQLErrors")}var s=function(e){function t(n){var o,u,a=n.graphQLErrors,s=n.protocolErrors,c=n.clientErrors,l=n.networkError,f=n.errorMessage,p=n.extraInfo,d=e.call(this,f)||this;return d.name="ApolloError",d.graphQLErrors=a||[],d.protocolErrors=s||[],d.clientErrors=c||[],d.networkError=l||null,d.message=f||(o=d,u=(0,r.ev)((0,r.ev)((0,r.ev)([],o.graphQLErrors,!0),o.clientErrors,!0),o.protocolErrors,!0),o.networkError&&u.push(o.networkError),u.map((function(e){return(0,i.s)(e)&&e.message||"Error message not found."})).join("\n")),d.extraInfo=p,d.__proto__=t.prototype,d}return(0,r.ZT)(t,e),t}(Error)},9978:function(e,t,n){"use strict";n.r(t),n.d(t,{ApolloCache:function(){return Ot},ApolloClient:function(){return wt},ApolloConsumer:function(){return Mn},ApolloError:function(){return w.cA},ApolloLink:function(){return l},ApolloProvider:function(){return Fn},Cache:function(){return yt},DocumentTransform:function(){return K.A},DocumentType:function(){return Un.n_},HttpLink:function(){return U},InMemoryCache:function(){return kn},MissingFieldError:function(){return kt},NetworkStatus:function(){return ne.Ie},Observable:function(){return o.y},ObservableQuery:function(){return he},SuspenseCache:function(){return cr},checkFetcher:function(){return C},concat:function(){return Cn},createHttpLink:function(){return Q},createSignalIfSupported:function(){return xn},defaultDataIdFromObject:function(){return Ct},defaultPrinter:function(){return j},disableExperimentalFragmentVariables:function(){return Nn.J9},disableFragmentWarnings:function(){return Nn._t},empty:function(){return Tn},enableExperimentalFragmentVariables:function(){return Nn.wO},execute:function(){return f},fallbackHttpConfig:function(){return I},from:function(){return En},fromError:function(){return R},fromPromise:function(){return jn},getApolloContext:function(){return Rn.K},gql:function(){return Nn.Ps},isApolloError:function(){return w.MS},isNetworkRequestSettled:function(){return ne.Jp},isReference:function(){return X.Yk},makeReference:function(){return X.kQ},makeVar:function(){return st},mergeOptions:function(){return bt.J},operationName:function(){return Un.mw},parseAndCheckHttpResponse:function(){return S},parser:function(){return Un.E2},resetApolloContext:function(){return Rn.Z},resetCaches:function(){return Nn.HW},rewriteURIForGET:function(){return P},selectHttpOptionsAndBody:function(){return A},selectHttpOptionsAndBodyInternal:function(){return N},selectURI:function(){return v},serializeFetchParameter:function(){return h},setLogVerbosity:function(){return An.U6},skipToken:function(){return rr},split:function(){return Sn},throwServerError:function(){return _},toPromise:function(){return In},useApolloClient:function(){return Ln.x},useBackgroundQuery:function(){return ar},useFragment:function(){return Wn},useLazyQuery:function(){return Qn},useMutation:function(){return Bn},useQuery:function(){return qn.a},useReactiveVar:function(){return zn},useReadQuery:function(){return sr},useSubscription:function(){return $n.m},useSuspenseQuery:function(){return ir}});var r=n(655),i=n(6961),o=n(8216),u=n(6765);function a(e,t){return t?t(e):o.y.of()}function s(e){return"function"==typeof e?new l(e):e}function c(e){return e.request.length<=1}var l=function(){function e(e){e&&(this.request=e)}return e.empty=function(){return new e((function(){return o.y.of()}))},e.from=function(t){return 0===t.length?e.empty():t.map(s).reduce((function(e,t){return e.concat(t)}))},e.split=function(t,n,r){var i=s(n),u=s(r||new e(a));return c(i)&&c(u)?new e((function(e){return t(e)?i.request(e)||o.y.of():u.request(e)||o.y.of()})):new e((function(e,n){return t(e)?i.request(e,n)||o.y.of():u.request(e,n)||o.y.of()}))},e.execute=function(e,t){return e.request(function(e,t){var n=(0,r.pi)({},e);return Object.defineProperty(t,"setContext",{enumerable:!1,value:function(e){n="function"==typeof e?(0,r.pi)((0,r.pi)({},n),e(n)):(0,r.pi)((0,r.pi)({},n),e)}}),Object.defineProperty(t,"getContext",{enumerable:!1,value:function(){return(0,r.pi)({},n)}}),t}(t.context,function(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName="string"!=typeof t.query?(0,u.rY)(t.query)||void 0:""),t}(function(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];if(t.indexOf(o)<0)throw(0,i._K)(41,o)}return e}(t))))||o.y.of()},e.concat=function(t,n){var r=s(t);if(c(r))return!1!==globalThis.__DEV__&&i.kG.warn(33,r),r;var u=s(n);return c(u)?new e((function(e){return r.request(e,(function(e){return u.request(e)||o.y.of()}))||o.y.of()})):new e((function(e,t){return r.request(e,(function(e){return u.request(e,t)||o.y.of()}))||o.y.of()}))},e.prototype.split=function(t,n,r){return this.concat(e.split(t,n,r||new e(a)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(e,t){throw(0,i._K)(34)},e.prototype.onError=function(e,t){if(t&&t.error)return t.error(e),!1;throw e},e.prototype.setOnError=function(e){return this.onError=e,this},e}(),f=l.execute,p=n(9379),d=n(9065),h=function(e,t){var n;try{n=JSON.stringify(e)}catch(e){var r=(0,i._K)(37,t,e.message);throw r.parseError=e,r}return n},v=function(e,t){return e.getContext().uri||("function"==typeof t?t(e):t||"/graphql")},y=n(3613),m=n(320);function g(e){var t={next:function(){return e.read()}};return m.DN&&(t[Symbol.asyncIterator]=function(){return this}),t}function b(e){var t,n,r=e;if((0,y.Ss)(e)&&(r=e.body),(0,y.sV)(r))return n=r[Symbol.asyncIterator](),(t={next:function(){return n.next()}})[Symbol.asyncIterator]=function(){return this},t;if((0,y.Os)(r))return g(r.getReader());if((0,y.Qe)(r))return g(r.stream().getReader());if((0,y.Lj)(r))return function(e){var t=!1,n={next:function(){return t?Promise.resolve({value:void 0,done:!0}):(t=!0,new Promise((function(t,n){e.then((function(e){t({value:e,done:!1})})).catch(n)})))}};return m.DN&&(n[Symbol.asyncIterator]=function(){return this}),n}(r.arrayBuffer());if((0,y.QV)(r))return function(e){var t=null,n=null,r=!1,i=[],o=[];function u(e){if(!n){if(o.length){var t=o.shift();if(Array.isArray(t)&&t[0])return t[0]({value:e,done:!1})}i.push(e)}}function a(e){n=e,o.slice().forEach((function(t){t[1](e)})),!t||t()}function s(){r=!0,o.slice().forEach((function(e){e[0]({value:void 0,done:!0})})),!t||t()}t=function(){t=null,e.removeListener("data",u),e.removeListener("error",a),e.removeListener("end",s),e.removeListener("finish",s),e.removeListener("close",s)},e.on("data",u),e.on("error",a),e.on("end",s),e.on("finish",s),e.on("close",s);var c={next:function(){return new Promise((function(e,t){return n?t(n):i.length?e({value:i.shift(),done:!1}):r?e({value:void 0,done:!0}):void o.push([e,t])}))}};return m.DN&&(c[Symbol.asyncIterator]=function(){return this}),c}(r);throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")}var _=function(e,t,n){var r=new Error(n);throw r.name="ServerError",r.response=e,r.statusCode=e.status,r.result=t,r},w=n(990),O=n(7280),k=Object.prototype.hasOwnProperty;function T(e){var t={};return e.split("\n").forEach((function(e){var n=e.indexOf(":");if(n>-1){var r=e.slice(0,n).trim().toLowerCase(),i=e.slice(n+1).trim();t[r]=i}})),t}function E(e,t){e.status>=300&&_(e,function(){try{return JSON.parse(t)}catch(e){return t}}(),"Response not successful: Received status code ".concat(e.status));try{return JSON.parse(t)}catch(r){var n=r;throw n.name="ServerParseError",n.response=e,n.statusCode=e.status,n.bodyText=t,n}}function S(e){return function(t){return t.text().then((function(e){return E(t,e)})).then((function(n){return t.status>=300&&_(t,n,"Response not successful: Received status code ".concat(t.status)),Array.isArray(n)||k.call(n,"data")||k.call(n,"errors")||_(t,n,"Server response was missing for query '".concat(Array.isArray(e)?e.map((function(e){return e.operationName})):e.operationName,"'.")),n}))}}var C=function(e){if(!e&&"undefined"==typeof fetch)throw(0,i._K)(35)},x=n(768),I={http:{includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},headers:{accept:"*/*","content-type":"application/json"},options:{method:"POST"}},j=function(e,t){return t(e)};function A(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];return n.unshift(t),N.apply(void 0,(0,r.ev)([e,j],n,!1))}function N(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var o={},u={};n.forEach((function(e){o=(0,r.pi)((0,r.pi)((0,r.pi)({},o),e.options),{headers:(0,r.pi)((0,r.pi)({},o.headers),e.headers)}),e.credentials&&(o.credentials=e.credentials),u=(0,r.pi)((0,r.pi)({},u),e.http)})),o.headers&&(o.headers=D(o.headers,u.preserveHeaderCase));var a=e.operationName,s=e.extensions,c=e.variables,l=e.query,f={operationName:a,variables:c};return u.includeExtensions&&(f.extensions=s),u.includeQuery&&(f.query=t(l,x.S)),{options:o,body:f}}function D(e,t){if(!t){var n=Object.create(null);return Object.keys(Object(e)).forEach((function(t){n[t.toLowerCase()]=e[t]})),n}var r=Object.create(null);Object.keys(Object(e)).forEach((function(t){r[t.toLowerCase()]={originalName:t,value:e[t]}}));var i=Object.create(null);return Object.keys(r).forEach((function(e){i[r[e].originalName]=r[e].value})),i}function P(e,t){var n=[],r=function(e,t){n.push("".concat(e,"=").concat(encodeURIComponent(t)))};if("query"in t&&r("query",t.query),t.operationName&&r("operationName",t.operationName),t.variables){var i=void 0;try{i=h(t.variables,"Variables map")}catch(e){return{parseError:e}}r("variables",i)}if(t.extensions){var o=void 0;try{o=h(t.extensions,"Extensions map")}catch(e){return{parseError:e}}r("extensions",o)}var u="",a=e,s=e.indexOf("#");-1!==s&&(u=e.substr(s),a=e.substr(0,s));var c=-1===a.indexOf("?")?"?":"&";return{newURI:a+c+n.join("&")+u}}function R(e){return new o.y((function(t){t.error(e)}))}var F,M,L=n(7304),q=n(6487),V=(0,i.wY)((function(){return fetch})),Q=function(e){void 0===e&&(e={});var t=e.uri,n=void 0===t?"/graphql":t,a=e.fetch,s=e.print,c=void 0===s?j:s,f=e.includeExtensions,p=e.preserveHeaderCase,y=e.useGETForQueries,m=e.includeUnusedVariables,g=void 0!==m&&m,_=(0,r._T)(e,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"]);!1!==globalThis.__DEV__&&C(a||V);var k={http:{includeExtensions:f,preserveHeaderCase:p},options:_.fetchOptions,credentials:_.credentials,headers:_.headers};return new l((function(e){var t=v(e,n),s=e.getContext(),l={};if(s.clientAwareness){var f=s.clientAwareness,p=f.name,m=f.version;p&&(l["apollographql-client-name"]=p),m&&(l["apollographql-client-version"]=m)}var _=(0,r.pi)((0,r.pi)({},l),s.headers),C={http:s.http,options:s.fetchOptions,credentials:s.credentials,headers:_};if((0,d.FS)(["client"],e.query)){var x=(0,q.ob)(e.query);if(!x)return R(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));e.query=x}var j,A,D,F,M,Q=N(e,c,I,k,C),U=Q.options,B=Q.body;B.variables&&!g&&(B.variables=(j=B.variables,A=e.query,D=(0,r.pi)({},j),F=new Set(Object.keys(j)),(0,L.Vn)(A,{Variable:function(e,t,n){n&&"VariableDefinition"!==n.kind&&F.delete(e.name.value)}}),F.forEach((function(e){delete D[e]})),D)),U.signal||"undefined"==typeof AbortController||(M=new AbortController,U.signal=M.signal);var $,z="OperationDefinition"===($=(0,u.p$)(e.query)).kind&&"subscription"===$.operation,G=(0,d.FS)(["defer"],e.query);if(y&&!e.query.definitions.some((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation}))&&(U.method="GET"),G||z){U.headers=U.headers||{};var W="multipart/mixed;";z&&G&&!1!==globalThis.__DEV__&&i.kG.warn(36),z?W+="boundary=graphql;subscriptionSpec=1.0,application/json":G&&(W+="deferSpec=20220824,application/json"),U.headers.accept=W}if("GET"===U.method){var J=P(t,B),H=J.newURI,K=J.parseError;if(K)return R(K);t=H}else try{U.body=h(B,"Payload")}catch(K){return R(K)}return new o.y((function(n){var o=a||(0,i.wY)((function(){return fetch}))||V,u=n.next.bind(n);return o(t,U).then((function(t){var n;e.setContext({response:t});var i=null===(n=t.headers)||void 0===n?void 0:n.get("content-type");return null!==i&&/^multipart\/mixed/i.test(i)?function(e,t){var n;return(0,r.mG)(this,void 0,void 0,(function(){var i,o,u,a,s,c,l,f,p,d,h,v,y,m,g,_,k,S,C,x,I,j,A;return(0,r.Jh)(this,(function(N){switch(N.label){case 0:if(void 0===TextDecoder)throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");i=new TextDecoder("utf-8"),o=null===(n=e.headers)||void 0===n?void 0:n.get("content-type"),u="boundary=",a=(null==o?void 0:o.includes(u))?null==o?void 0:o.substring((null==o?void 0:o.indexOf(u))+u.length).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",s="\r\n--".concat(a),c="",l=b(e),f=!0,N.label=1;case 1:return f?[4,l.next()]:[3,3];case 2:for(p=N.sent(),d=p.value,h=p.done,v="string"==typeof d?d:i.decode(d),y=c.length-s.length+1,f=!h,m=(c+=v).indexOf(s,y);m>-1;){if(g=void 0,j=[c.slice(0,m),c.slice(m+s.length)],c=j[1],_=(g=j[0]).indexOf("\r\n\r\n"),k=T(g.slice(0,_)),(S=k["content-type"])&&-1===S.toLowerCase().indexOf("application/json"))throw new Error("Unsupported patch content type: application/json is required.");if(C=g.slice(_))if(x=E(e,C),Object.keys(x).length>1||"data"in x||"incremental"in x||"errors"in x||"payload"in x)(0,O.yU)(x)?(I={},"payload"in x&&(I=(0,r.pi)({},x.payload)),"errors"in x&&(I=(0,r.pi)((0,r.pi)({},I),{extensions:(0,r.pi)((0,r.pi)({},"extensions"in I?I.extensions:null),(A={},A[w.YG]=x.errors,A))})),t(I)):t(x);else if(1===Object.keys(x).length&&"hasNext"in x&&!x.hasNext)return[2];m=c.indexOf(s)}return[3,1];case 3:return[2]}}))}))}(t,u):S(e)(t).then(u)})).then((function(){M=void 0,n.complete()})).catch((function(e){M=void 0,function(e,t){e.result&&e.result.errors&&e.result.data&&t.next(e.result),t.error(e)}(e,n)})),function(){M&&M.abort()}}))}))},U=function(e){function t(t){void 0===t&&(t={});var n=e.call(this,Q(t).request)||this;return n.options=t,n}return(0,r.ZT)(t,e),t}(l),B=n(20),$=n(5028),z=n(3154),G=n(1436),W=function(){function e(){this.known=new(m.sy?WeakSet:Set),this.pool=new $.B(m.mr),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return e.prototype.isKnown=function(e){return(0,z.s)(e)&&this.known.has(e)},e.prototype.pass=function(e){if((0,z.s)(e)){var t=function(e){return(0,z.s)(e)?(0,G.k)(e)?e.slice(0):(0,r.pi)({__proto__:Object.getPrototypeOf(e)},e):e}(e);return this.passes.set(t,e),t}return e},e.prototype.admit=function(e){var t=this;if((0,z.s)(e)){var n=this.passes.get(e);if(n)return n;switch(Object.getPrototypeOf(e)){case Array.prototype:if(this.known.has(e))return e;var r=e.map(this.admit,this);return(a=this.pool.lookupArray(r)).array||(this.known.add(a.array=r),!1!==globalThis.__DEV__&&Object.freeze(r)),a.array;case null:case Object.prototype:if(this.known.has(e))return e;var i=Object.getPrototypeOf(e),o=[i],u=this.sortedKeys(e);o.push(u.json);var a,s=o.length;if(u.sorted.forEach((function(n){o.push(t.admit(e[n]))})),!(a=this.pool.lookupArray(o)).object){var c=a.object=Object.create(i);this.known.add(c),u.sorted.forEach((function(e,t){c[e]=o[s+t]})),!1!==globalThis.__DEV__&&Object.freeze(c)}return a.object}}return e},e.prototype.sortedKeys=function(e){var t=Object.keys(e),n=this.pool.lookupArray(t);if(!n.keys){t.sort();var r=JSON.stringify(t);(n.keys=this.keysByJSON.get(r))||this.keysByJSON.set(r,n.keys={sorted:t,json:r})}return n.keys},e}(),J=Object.assign((function(e){if((0,z.s)(e)){void 0===F&&H();var t=F.admit(e),n=M.get(t);return void 0===n&&M.set(t,n=JSON.stringify(t)),n}return JSON.stringify(e)}),{reset:H});function H(){F=new W,M=new(m.mr?WeakMap:Map)}var K=n(8056),Y=n(6951),Z=n(9383),X=n(1761),ee=n(897),te=n(5687),ne=n(1644),re=n(3712),ie=n(9487),oe=n(8263),ue=n(6403),ae=n(3361);function se(e,t,n,i){var o=t.data,a=(0,r._T)(t,["data"]),s=n.data,c=(0,r._T)(n,["data"]);return(0,B.Z)(a,c)&&ce((0,u.p$)(e).selectionSet,o,s,{fragmentMap:(0,ae.F)((0,u.kU)(e)),variables:i})}function ce(e,t,n,r){if(t===n)return!0;var i=new Set;return e.selections.every((function(e){if(i.has(e))return!0;if(i.add(e),!(0,d.LZ)(e,r.variables))return!0;if(le(e))return!0;if((0,X.My)(e)){var o=(0,X.u2)(e),u=t&&t[o],a=n&&n[o],s=e.selectionSet;if(!s)return(0,B.Z)(u,a);var c=Array.isArray(u),l=Array.isArray(a);if(c!==l)return!1;if(c&&l){var f=u.length;if(a.length!==f)return!1;for(var p=0;p<f;++p)if(!ce(s,u[p],a[p],r))return!1;return!0}return ce(s,u,a,r)}var h=(0,ae.hi)(e,r.fragmentMap);return h?!!le(h)||ce(h.selectionSet,t,n,r):void 0}))}function le(e){return!!e.directives&&e.directives.some(fe)}function fe(e){return"nonreactive"===e.name.value}var pe=Object.assign,de=Object.hasOwnProperty,he=function(e){function t(t){var n=t.queryManager,i=t.queryInfo,o=t.options,a=e.call(this,(function(e){try{var t=e._subscription._observer;t&&!t.error&&(t.error=ye)}catch(e){}var n=!a.observers.size;a.observers.add(e);var r=a.last;return r&&r.error?e.error&&e.error(r.error):r&&r.result&&e.next&&e.next(r.result),n&&a.reobserve().catch((function(){})),function(){a.observers.delete(e)&&!a.observers.size&&a.tearDownQuery()}}))||this;a.observers=new Set,a.subscriptions=new Set,a.queryInfo=i,a.queryManager=n,a.waitForOwnResult=ge(o.fetchPolicy),a.isTornDown=!1;var s=n.defaultOptions.watchQuery,c=(void 0===s?{}:s).fetchPolicy,l=void 0===c?"cache-first":c,f=o.fetchPolicy,p=void 0===f?l:f,d=o.initialFetchPolicy,h=void 0===d?"standby"===p?l:p:d;a.options=(0,r.pi)((0,r.pi)({},o),{initialFetchPolicy:h,fetchPolicy:p}),a.queryId=i.queryId||n.generateQueryId();var v=(0,u.$H)(a.query);return a.queryName=v&&v.name&&v.name.value,a}return(0,r.ZT)(t,e),Object.defineProperty(t.prototype,"query",{get:function(){return this.lastQuery||this.options.query},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),t.prototype.result=function(){var e=this;return new Promise((function(t,n){var r={next:function(n){t(n),e.observers.delete(r),e.observers.size||e.queryManager.removeQuery(e.queryId),setTimeout((function(){i.unsubscribe()}),0)},error:n},i=e.subscribe(r)}))},t.prototype.getCurrentResult=function(e){void 0===e&&(e=!0);var t=this.getLastResult(!0),n=this.queryInfo.networkStatus||t&&t.networkStatus||ne.Ie.ready,i=(0,r.pi)((0,r.pi)({},t),{loading:(0,ne.Oj)(n),networkStatus:n}),o=this.options.fetchPolicy,u=void 0===o?"cache-first":o;if(ge(u)||this.queryManager.getDocumentInfo(this.query).hasForcedResolvers);else if(this.waitForOwnResult)this.queryInfo.updateWatch();else{var a=this.queryInfo.getDiff();(a.complete||this.options.returnPartialData)&&(i.data=a.result),(0,B.D)(i.data,{})&&(i.data=void 0),a.complete?(delete i.partial,!a.complete||i.networkStatus!==ne.Ie.loading||"cache-first"!==u&&"cache-only"!==u||(i.networkStatus=ne.Ie.ready,i.loading=!1)):i.partial=!0,!1===globalThis.__DEV__||a.complete||this.options.partialRefetch||i.loading||i.data||i.error||me(a.missing)}return e&&this.updateLastResult(i),i},t.prototype.isDifferentFromLastResult=function(e,t){return!this.last||(this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective?!se(this.query,this.last.result,e,this.variables):!(0,B.D)(this.last.result,e))||t&&!(0,B.D)(this.last.variables,t)},t.prototype.getLast=function(e,t){var n=this.last;if(n&&n[e]&&(!t||(0,B.D)(n.variables,this.variables)))return n[e]},t.prototype.getLastResult=function(e){return this.getLast("result",e)},t.prototype.getLastError=function(e){return this.getLast("error",e)},t.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},t.prototype.refetch=function(e){var t,n={pollInterval:0},o=this.options.fetchPolicy;if(n.fetchPolicy="cache-and-network"===o?o:"no-cache"===o?"no-cache":"network-only",!1!==globalThis.__DEV__&&e&&de.call(e,"variables")){var a=(0,u.iW)(this.query),s=a.variableDefinitions;s&&s.some((function(e){return"variables"===e.variable.name.value}))||!1!==globalThis.__DEV__&&i.kG.warn(18,e,(null===(t=a.name)||void 0===t?void 0:t.value)||a)}return e&&!(0,B.D)(this.options.variables,e)&&(n.variables=this.options.variables=(0,r.pi)((0,r.pi)({},this.options.variables),e)),this.queryInfo.resetLastWrite(),this.reobserve(n,ne.Ie.refetch)},t.prototype.fetchMore=function(e){var t=this,n=(0,r.pi)((0,r.pi)({},e.query?e:(0,r.pi)((0,r.pi)((0,r.pi)((0,r.pi)({},this.options),{query:this.options.query}),e),{variables:(0,r.pi)((0,r.pi)({},this.options.variables),e.variables)})),{fetchPolicy:"no-cache"});n.query=this.transformDocument(n.query);var i=this.queryManager.generateQueryId();this.lastQuery=e.query?this.transformDocument(this.options.query):n.query;var o=this.queryInfo,u=o.networkStatus;o.networkStatus=ne.Ie.fetchMore,n.notifyOnNetworkStatusChange&&this.observe();var a=new Set;return this.queryManager.fetchQuery(i,n,ne.Ie.fetchMore).then((function(r){return t.queryManager.removeQuery(i),o.networkStatus===ne.Ie.fetchMore&&(o.networkStatus=u),t.queryManager.cache.batch({update:function(i){var o=e.updateQuery;o?i.updateQuery({query:t.query,variables:t.variables,returnPartialData:!0,optimistic:!1},(function(e){return o(e,{fetchMoreResult:r.data,variables:n.variables})})):i.writeQuery({query:n.query,variables:n.variables,data:r.data})},onWatchUpdated:function(e){a.add(e.query)}}),r})).finally((function(){a.has(t.query)||ve(t)}))},t.prototype.subscribeToMore=function(e){var t=this,n=this.queryManager.startGraphQLSubscription({query:e.document,variables:e.variables,context:e.context}).subscribe({next:function(n){var r=e.updateQuery;r&&t.updateQuery((function(e,t){var i=t.variables;return r(e,{subscriptionData:n,variables:i})}))},error:function(t){e.onError?e.onError(t):!1!==globalThis.__DEV__&&i.kG.error(19,t)}});return this.subscriptions.add(n),function(){t.subscriptions.delete(n)&&n.unsubscribe()}},t.prototype.setOptions=function(e){return this.reobserve(e)},t.prototype.silentSetOptions=function(e){var t=(0,re.o)(this.options,e||{});pe(this.options,t)},t.prototype.setVariables=function(e){return(0,B.D)(this.variables,e)?this.observers.size?this.result():Promise.resolve():(this.options.variables=e,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:e},ne.Ie.setVariables):Promise.resolve())},t.prototype.updateQuery=function(e){var t=this.queryManager,n=e(t.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}).result,{variables:this.variables});n&&(t.cache.writeQuery({query:this.options.query,data:n,variables:this.variables}),t.broadcastQueries())},t.prototype.startPolling=function(e){this.options.pollInterval=e,this.updatePolling()},t.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},t.prototype.applyNextFetchPolicy=function(e,t){if(t.nextFetchPolicy){var n=t.fetchPolicy,r=void 0===n?"cache-first":n,i=t.initialFetchPolicy,o=void 0===i?r:i;"standby"===r||("function"==typeof t.nextFetchPolicy?t.fetchPolicy=t.nextFetchPolicy(r,{reason:e,options:t,observable:this,initialFetchPolicy:o}):t.fetchPolicy="variables-changed"===e?o:t.nextFetchPolicy)}return t.fetchPolicy},t.prototype.fetch=function(e,t){return this.queryManager.setObservableQuery(this),this.queryManager.fetchConcastWithInfo(this.queryId,e,t)},t.prototype.updatePolling=function(){var e=this;if(!this.queryManager.ssrMode){var t=this.pollingInfo,n=this.options.pollInterval;if(n){if(!t||t.interval!==n){(0,i.kG)(n,20),(t||(this.pollingInfo={})).interval=n;var r=function(){e.pollingInfo&&((0,ne.Oj)(e.queryInfo.networkStatus)?o():e.reobserve({fetchPolicy:"no-cache"===e.options.initialFetchPolicy?"no-cache":"network-only"},ne.Ie.poll).then(o,o))},o=function(){var t=e.pollingInfo;t&&(clearTimeout(t.timeout),t.timeout=setTimeout(r,t.interval))};o()}}else t&&(clearTimeout(t.timeout),delete this.pollingInfo)}},t.prototype.updateLastResult=function(e,t){void 0===t&&(t=this.variables);var n=this.getLastError();return n&&this.last&&!(0,B.D)(t,this.last.variables)&&(n=void 0),this.last=(0,r.pi)({result:this.queryManager.assumeImmutableResults?e:(0,ie.X)(e),variables:t},n?{error:n}:null)},t.prototype.reobserveAsConcast=function(e,t){var n=this;this.isTornDown=!1;var i=t===ne.Ie.refetch||t===ne.Ie.fetchMore||t===ne.Ie.poll,o=this.options.variables,u=this.options.fetchPolicy,a=(0,re.o)(this.options,e||{}),s=i?a:pe(this.options,a),c=this.transformDocument(s.query);this.lastQuery=c,i||(this.updatePolling(),e&&e.variables&&!(0,B.D)(e.variables,o)&&"standby"!==s.fetchPolicy&&s.fetchPolicy===u&&(this.applyNextFetchPolicy("variables-changed",s),void 0===t&&(t=ne.Ie.setVariables)));var l=c===s.query?s:(0,r.pi)((0,r.pi)({},s),{query:c});this.waitForOwnResult&&(this.waitForOwnResult=ge(l.fetchPolicy));var f=function(){n.concast===h&&(n.waitForOwnResult=!1)},p=l.variables&&(0,r.pi)({},l.variables),d=this.fetch(l,t),h=d.concast,v=d.fromLink,y={next:function(e){f(),n.reportResult(e,p)},error:function(e){f(),n.reportError(e,p)}};return i||!v&&this.concast||(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=h,this.observer=y),h.addObserver(y),h},t.prototype.reobserve=function(e,t){return this.reobserveAsConcast(e,t).promise},t.prototype.observe=function(){this.reportResult(this.getCurrentResult(!1),this.variables)},t.prototype.reportResult=function(e,t){var n=this.getLastError(),r=this.isDifferentFromLastResult(e,t);(n||!e.partial||this.options.returnPartialData)&&this.updateLastResult(e,t),(n||r)&&(0,oe.p)(this.observers,"next",e)},t.prototype.reportError=function(e,t){var n=(0,r.pi)((0,r.pi)({},this.getLastResult()),{error:e,errors:e.graphQLErrors,networkStatus:ne.Ie.error,loading:!1});this.updateLastResult(n,t),(0,oe.p)(this.observers,"error",this.last.error=e)},t.prototype.hasObservers=function(){return this.observers.size>0},t.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach((function(e){return e.unsubscribe()})),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},t.prototype.transformDocument=function(e){return this.queryManager.transform(e)},t}(o.y);function ve(e){var t=e.options,n=t.fetchPolicy,r=t.nextFetchPolicy;return"cache-and-network"===n||"network-only"===n?e.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(){return this.nextFetchPolicy=r,"function"==typeof r?r.apply(this,arguments):n}}):e.reobserve()}function ye(e){!1!==globalThis.__DEV__&&i.kG.error(21,e.message,e.stack)}function me(e){!1!==globalThis.__DEV__&&e&&!1!==globalThis.__DEV__&&i.kG.debug(22,e)}function ge(e){return"network-only"===e||"no-cache"===e||"standby"===e}(0,ue.D)(he);var be=n(7359);function _e(e){return e.kind===be.h.FIELD||e.kind===be.h.FRAGMENT_SPREAD||e.kind===be.h.INLINE_FRAGMENT}var we=n(182);function Oe(){}class ke{constructor(e=1/0,t=Oe){this.max=e,this.dispose=t,this.map=new Map,this.newest=null,this.oldest=null}has(e){return this.map.has(e)}get(e){const t=this.getNode(e);return t&&t.value}getNode(e){const t=this.map.get(e);if(t&&t!==this.newest){const{older:e,newer:n}=t;n&&(n.older=e),e&&(e.newer=n),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=n)}return t}set(e,t){let n=this.getNode(e);return n?n.value=t:(n={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.map.set(e,n),n.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(e){const t=this.map.get(e);return!!t&&(t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.map.delete(e),this.dispose(t.value,e),!0)}}let Te=null;const Ee={};let Se=1;function Ce(e){try{return e()}catch(e){}}const xe="@wry/context:Slot",Ie=Ce((()=>globalThis))||Ce((()=>global))||Object.create(null),je=Ie[xe]||Array[xe]||function(e){try{Object.defineProperty(Ie,xe,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(class{constructor(){this.id=["slot",Se++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let e=Te;e;e=e.parent)if(this.id in e.slots){const t=e.slots[this.id];if(t===Ee)break;return e!==Te&&(Te.slots[this.id]=t),!0}return Te&&(Te.slots[this.id]=Ee),!1}getValue(){if(this.hasValue())return Te.slots[this.id]}withValue(e,t,n,r){const i={__proto__:null,[this.id]:e},o=Te;Te={parent:o,slots:i};try{return t.apply(r,n)}finally{Te=o}}static bind(e){const t=Te;return function(){const n=Te;try{return Te=t,e.apply(this,arguments)}finally{Te=n}}}static noContext(e,t,n){if(!Te)return e.apply(n,t);{const r=Te;try{return Te=null,e.apply(n,t)}finally{Te=r}}}}),{bind:Ae,noContext:Ne}=je,De=new je,{hasOwnProperty:Pe}=Object.prototype,Re=Array.from||function(e){const t=[];return e.forEach((e=>t.push(e))),t};function Fe(e){const{unsubscribe:t}=e;"function"==typeof t&&(e.unsubscribe=void 0,t())}const Me=[];function Le(e,t){if(!e)throw new Error(t||"assertion failure")}function qe(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}class Ve{constructor(e){this.fn=e,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++Ve.count}peek(){if(1===this.value.length&&!Be(this))return Qe(this),this.value[0]}recompute(e){return Le(!this.recomputing,"already recomputing"),Qe(this),Be(this)?function(e,t){return Ke(e),De.withValue(e,Ue,[e,t]),function(e,t){if("function"==typeof e.subscribe)try{Fe(e),e.unsubscribe=e.subscribe.apply(null,t)}catch(t){return e.setDirty(),!1}return!0}(e,t)&&function(e){e.dirty=!1,Be(e)||ze(e)}(e),qe(e.value)}(this,e):qe(this.value)}setDirty(){this.dirty||(this.dirty=!0,this.value.length=0,$e(this),Fe(this))}dispose(){this.setDirty(),Ke(this),Ge(this,((e,t)=>{e.setDirty(),Ye(e,this)}))}forget(){this.dispose()}dependOn(e){e.add(this),this.deps||(this.deps=Me.pop()||new Set),this.deps.add(e)}forgetDeps(){this.deps&&(Re(this.deps).forEach((e=>e.delete(this))),this.deps.clear(),Me.push(this.deps),this.deps=null)}}function Qe(e){const t=De.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),Be(e)?We(t,e):Je(t,e),t}function Ue(e,t){e.recomputing=!0,e.value.length=0;try{e.value[0]=e.fn.apply(null,t)}catch(t){e.value[1]=t}e.recomputing=!1}function Be(e){return e.dirty||!(!e.dirtyChildren||!e.dirtyChildren.size)}function $e(e){Ge(e,We)}function ze(e){Ge(e,Je)}function Ge(e,t){const n=e.parents.size;if(n){const r=Re(e.parents);for(let i=0;i<n;++i)t(r[i],e)}}function We(e,t){Le(e.childValues.has(t)),Le(Be(t));const n=!Be(e);if(e.dirtyChildren){if(e.dirtyChildren.has(t))return}else e.dirtyChildren=Me.pop()||new Set;e.dirtyChildren.add(t),n&&$e(e)}function Je(e,t){Le(e.childValues.has(t)),Le(!Be(t));const n=e.childValues.get(t);0===n.length?e.childValues.set(t,t.value.slice(0)):function(e,t){const n=e.length;return n>0&&n===t.length&&e[n-1]===t[n-1]}(n,t.value)||e.setDirty(),He(e,t),Be(e)||ze(e)}function He(e,t){const n=e.dirtyChildren;n&&(n.delete(t),0===n.size&&(Me.length<100&&Me.push(n),e.dirtyChildren=null))}function Ke(e){e.childValues.size>0&&e.childValues.forEach(((t,n)=>{Ye(e,n)})),e.forgetDeps(),Le(null===e.dirtyChildren)}function Ye(e,t){t.parents.delete(e),e.childValues.delete(t),He(e,t)}Ve.count=0;const Ze={setDirty:!0,dispose:!0,forget:!0};function Xe(e){const t=new Map,n=e&&e.subscribe;function r(e){const r=De.getValue();if(r){let i=t.get(e);i||t.set(e,i=new Set),r.dependOn(i),"function"==typeof n&&(Fe(i),i.unsubscribe=n(e))}}return r.dirty=function(e,n){const r=t.get(e);if(r){const i=n&&Pe.call(Ze,n)?n:"setDirty";Re(r).forEach((e=>e[i]())),t.delete(e),Fe(r)}},r}let et;function tt(...e){return(et||(et=new $.B("function"==typeof WeakMap))).lookupArray(e)}const nt=new Set;function rt(e,{max:t=Math.pow(2,16),makeCacheKey:n=tt,keyArgs:r,subscribe:i}=Object.create(null)){const o=new ke(t,(e=>e.dispose())),u=function(){const t=n.apply(null,r?r.apply(null,arguments):arguments);if(void 0===t)return e.apply(null,arguments);let u=o.get(t);u||(o.set(t,u=new Ve(e)),u.subscribe=i,u.forget=()=>o.delete(t));const a=u.recompute(Array.prototype.slice.call(arguments));return o.set(t,u),nt.add(o),De.hasValue()||(nt.forEach((e=>e.clean())),nt.clear()),a};function a(e){const t=o.get(e);t&&t.setDirty()}function s(e){const t=o.get(e);if(t)return t.peek()}function c(e){return o.delete(e)}return Object.defineProperty(u,"size",{get:()=>o.map.size,configurable:!1,enumerable:!1}),Object.freeze(u.options={max:t,makeCacheKey:n,keyArgs:r,subscribe:i}),u.dirtyKey=a,u.dirty=function(){a(n.apply(null,arguments))},u.peekKey=s,u.peek=function(){return s(n.apply(null,arguments))},u.forgetKey=c,u.forget=function(){return c(n.apply(null,arguments))},u.makeCacheKey=n,u.getKey=r?function(){return n.apply(null,r.apply(null,arguments))}:n,Object.freeze(u)}var it=new je,ot=new WeakMap;function ut(e){var t=ot.get(e);return t||ot.set(e,t={vars:new Set,dep:Xe()}),t}function at(e){ut(e).vars.forEach((function(t){return t.forgetCache(e)}))}function st(e){var t=new Set,n=new Set,r=function(o){if(arguments.length>0){if(e!==o){e=o,t.forEach((function(e){ut(e).dep.dirty(r),ct(e)}));var u=Array.from(n);n.clear(),u.forEach((function(t){return t(e)}))}}else{var a=it.getValue();a&&(i(a),ut(a).dep(r))}return e};r.onNextChange=function(e){return n.add(e),function(){n.delete(e)}};var i=r.attachCache=function(e){return t.add(e),ut(e).vars.add(r),r};return r.forgetCache=function(e){return t.delete(e)},r}function ct(e){e.broadcastWatches&&e.broadcastWatches()}var lt=function(){function e(e){var t=e.cache,n=e.client,r=e.resolvers,i=e.fragmentMatcher;this.selectionsToResolveCache=new WeakMap,this.cache=t,n&&(this.client=n),r&&this.addResolvers(r),i&&this.setFragmentMatcher(i)}return e.prototype.addResolvers=function(e){var t=this;this.resolvers=this.resolvers||{},Array.isArray(e)?e.forEach((function(e){t.resolvers=(0,we.Ee)(t.resolvers,e)})):this.resolvers=(0,we.Ee)(this.resolvers,e)},e.prototype.setResolvers=function(e){this.resolvers={},this.addResolvers(e)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(e){var t=e.document,n=e.remoteResult,i=e.context,o=e.variables,u=e.onlyRunForcedResolvers,a=void 0!==u&&u;return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){return t?[2,this.resolveDocument(t,n.data,i,o,this.fragmentMatcher,a).then((function(e){return(0,r.pi)((0,r.pi)({},n),{data:e.result})}))]:[2,n]}))}))},e.prototype.setFragmentMatcher=function(e){this.fragmentMatcher=e},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(e){return(0,d.FS)(["client"],e)&&this.resolvers?e:null},e.prototype.serverQuery=function(e){return(0,q.ob)(e)},e.prototype.prepareContext=function(e){var t=this.cache;return(0,r.pi)((0,r.pi)({},e),{cache:t,getCacheKey:function(e){return t.identify(e)}})},e.prototype.addExportedVariables=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(i){return e?[2,this.resolveDocument(e,this.buildRootValueFromCache(e,t)||{},this.prepareContext(n),t).then((function(e){return(0,r.pi)((0,r.pi)({},t),e.exportedVariables)}))]:[2,(0,r.pi)({},t)]}))}))},e.prototype.shouldForceResolvers=function(e){var t=!1;return(0,L.Vn)(e,{Directive:{enter:function(e){if("client"===e.name.value&&e.arguments&&(t=e.arguments.some((function(e){return"always"===e.name.value&&"BooleanValue"===e.value.kind&&!0===e.value.value}))))return L.$_}}}),t},e.prototype.buildRootValueFromCache=function(e,t){return this.cache.diff({query:(0,q.aL)(e),variables:t,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(e,t,n,i,o,a){return void 0===n&&(n={}),void 0===i&&(i={}),void 0===o&&(o=function(){return!0}),void 0===a&&(a=!1),(0,r.mG)(this,void 0,void 0,(function(){var s,c,l,f,p,d,h,v,y,m;return(0,r.Jh)(this,(function(g){return s=(0,u.p$)(e),c=(0,u.kU)(e),l=(0,ae.F)(c),f=this.collectSelectionsToResolve(s,l),p=s.operation,d=p?p.charAt(0).toUpperCase()+p.slice(1):"Query",v=(h=this).cache,y=h.client,m={fragmentMap:l,context:(0,r.pi)((0,r.pi)({},n),{cache:v,client:y}),variables:i,fragmentMatcher:o,defaultOperationType:d,exportedVariables:{},selectionsToResolve:f,onlyRunForcedResolvers:a},[2,this.resolveSelectionSet(s.selectionSet,!1,t,m).then((function(e){return{result:e,exportedVariables:m.exportedVariables}}))]}))}))},e.prototype.resolveSelectionSet=function(e,t,n,o){return(0,r.mG)(this,void 0,void 0,(function(){var u,a,s,c,l,f=this;return(0,r.Jh)(this,(function(p){return u=o.fragmentMap,a=o.context,s=o.variables,c=[n],l=function(e){return(0,r.mG)(f,void 0,void 0,(function(){var l,f;return(0,r.Jh)(this,(function(r){return(t||o.selectionsToResolve.has(e))&&(0,d.LZ)(e,s)?(0,X.My)(e)?[2,this.resolveField(e,t,n,o).then((function(t){var n;void 0!==t&&c.push(((n={})[(0,X.u2)(e)]=t,n))}))]:((0,X.Ao)(e)?l=e:(l=u[e.name.value],(0,i.kG)(l,16,e.name.value)),l&&l.typeCondition&&(f=l.typeCondition.name.value,o.fragmentMatcher(n,f,a))?[2,this.resolveSelectionSet(l.selectionSet,t,n,o).then((function(e){c.push(e)}))]:[2]):[2]}))}))},[2,Promise.all(e.selections.map(l)).then((function(){return(0,we.bw)(c)}))]}))}))},e.prototype.resolveField=function(e,t,n,i){return(0,r.mG)(this,void 0,void 0,(function(){var o,u,a,s,c,l,f,p,d,h=this;return(0,r.Jh)(this,(function(r){return n?(o=i.variables,u=e.name.value,a=(0,X.u2)(e),s=u!==a,c=n[a]||n[u],l=Promise.resolve(c),i.onlyRunForcedResolvers&&!this.shouldForceResolvers(e)||(f=n.__typename||i.defaultOperationType,(p=this.resolvers&&this.resolvers[f])&&(d=p[s?u:a])&&(l=Promise.resolve(it.withValue(this.cache,d,[n,(0,X.NC)(e,o),i.context,{field:e,fragmentMap:i.fragmentMap}])))),[2,l.then((function(n){var r,o;if(void 0===n&&(n=c),e.directives&&e.directives.forEach((function(e){"export"===e.name.value&&e.arguments&&e.arguments.forEach((function(e){"as"===e.name.value&&"StringValue"===e.value.kind&&(i.exportedVariables[e.value.value]=n)}))})),!e.selectionSet)return n;if(null==n)return n;var u=null!==(o=null===(r=e.directives)||void 0===r?void 0:r.some((function(e){return"client"===e.name.value})))&&void 0!==o&&o;return Array.isArray(n)?h.resolveSubSelectedArray(e,t||u,n,i):e.selectionSet?h.resolveSelectionSet(e.selectionSet,t||u,n,i):void 0}))]):[2,null]}))}))},e.prototype.resolveSubSelectedArray=function(e,t,n,r){var i=this;return Promise.all(n.map((function(n){return null===n?null:Array.isArray(n)?i.resolveSubSelectedArray(e,t,n,r):e.selectionSet?i.resolveSelectionSet(e.selectionSet,t,n,r):void 0})))},e.prototype.collectSelectionsToResolve=function(e,t){var n=function(e){return!Array.isArray(e)},r=this.selectionsToResolveCache;return function e(o){if(!r.has(o)){var u=new Set;r.set(o,u),(0,L.Vn)(o,{Directive:function(e,t,r,i,o){"client"===e.name.value&&o.forEach((function(e){n(e)&&_e(e)&&u.add(e)}))},FragmentSpread:function(r,o,a,s,c){var l=t[r.name.value];(0,i.kG)(l,17,r.name.value);var f=e(l);f.size>0&&(c.forEach((function(e){n(e)&&_e(e)&&u.add(e)})),u.add(r),f.forEach((function(e){u.add(e)})))}})}return r.get(o)}(e)},e}(),ft=new(m.mr?WeakMap:Map);function pt(e,t){var n=e[t];"function"==typeof n&&(e[t]=function(){return ft.set(e,(ft.get(e)+1)%1e15),n.apply(this,arguments)})}function dt(e){e.notifyTimeout&&(clearTimeout(e.notifyTimeout),e.notifyTimeout=void 0)}var ht=function(){function e(e,t){void 0===t&&(t=e.generateQueryId()),this.queryId=t,this.listeners=new Set,this.document=null,this.lastRequestId=1,this.subscriptions=new Set,this.stopped=!1,this.dirty=!1,this.observableQuery=null;var n=this.cache=e.cache;ft.has(n)||(ft.set(n,0),pt(n,"evict"),pt(n,"modify"),pt(n,"reset"))}return e.prototype.init=function(e){var t=e.networkStatus||ne.Ie.loading;return this.variables&&this.networkStatus!==ne.Ie.loading&&!(0,B.D)(this.variables,e.variables)&&(t=ne.Ie.setVariables),(0,B.D)(e.variables,this.variables)||(this.lastDiff=void 0),Object.assign(this,{document:e.document,variables:e.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:t}),e.observableQuery&&this.setObservableQuery(e.observableQuery),e.lastRequestId&&(this.lastRequestId=e.lastRequestId),this},e.prototype.reset=function(){dt(this),this.dirty=!1},e.prototype.getDiff=function(e){void 0===e&&(e=this.variables);var t=this.getDiffOptions(e);if(this.lastDiff&&(0,B.D)(t,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables=e);var n=this.observableQuery;if(n&&"no-cache"===n.options.fetchPolicy)return{complete:!1};var r=this.cache.diff(t);return this.updateLastDiff(r,t),r},e.prototype.updateLastDiff=function(e,t){this.lastDiff=e?{diff:e,options:t||this.getDiffOptions()}:void 0},e.prototype.getDiffOptions=function(e){var t;return void 0===e&&(e=this.variables),{query:this.document,variables:e,returnPartialData:!0,optimistic:!0,canonizeResults:null===(t=this.observableQuery)||void 0===t?void 0:t.options.canonizeResults}},e.prototype.setDiff=function(e){var t=this,n=this.lastDiff&&this.lastDiff.diff;this.updateLastDiff(e),this.dirty||(0,B.D)(n&&n.result,e&&e.result)||(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout((function(){return t.notify()}),0)))},e.prototype.setObservableQuery=function(e){var t=this;e!==this.observableQuery&&(this.oqListener&&this.listeners.delete(this.oqListener),this.observableQuery=e,e?(e.queryInfo=this,this.listeners.add(this.oqListener=function(){t.getDiff().fromOptimisticTransaction?e.observe():ve(e)})):delete this.oqListener)},e.prototype.notify=function(){var e=this;dt(this),this.shouldNotify()&&this.listeners.forEach((function(t){return t(e)})),this.dirty=!1},e.prototype.shouldNotify=function(){if(!this.dirty||!this.listeners.size)return!1;if((0,ne.Oj)(this.networkStatus)&&this.observableQuery){var e=this.observableQuery.options.fetchPolicy;if("cache-only"!==e&&"cache-and-network"!==e)return!1}return!0},e.prototype.stop=function(){if(!this.stopped){this.stopped=!0,this.reset(),this.cancel(),this.cancel=e.prototype.cancel,this.subscriptions.forEach((function(e){return e.unsubscribe()}));var t=this.observableQuery;t&&t.stopPolling()}},e.prototype.cancel=function(){},e.prototype.updateWatch=function(e){var t=this;void 0===e&&(e=this.variables);var n=this.observableQuery;if(!n||"no-cache"!==n.options.fetchPolicy){var i=(0,r.pi)((0,r.pi)({},this.getDiffOptions(e)),{watcher:this,callback:function(e){return t.setDiff(e)}});this.lastWatch&&(0,B.D)(i,this.lastWatch)||(this.cancel(),this.cancel=this.cache.watch(this.lastWatch=i))}},e.prototype.resetLastWrite=function(){this.lastWrite=void 0},e.prototype.shouldWrite=function(e,t){var n=this.lastWrite;return!(n&&n.dmCount===ft.get(this.cache)&&(0,B.D)(t,n.variables)&&(0,B.D)(e.data,n.result.data))},e.prototype.markResult=function(e,t,n,r){var i=this,o=new we.w0,u=(0,G.O)(e.errors)?e.errors.slice(0):[];if(this.reset(),"incremental"in e&&(0,G.O)(e.incremental)){var a=(0,O.mT)(this.getDiff().result,e);e.data=a}else if("hasNext"in e&&e.hasNext){var s=this.getDiff();e.data=o.merge(s.result,e.data)}this.graphQLErrors=u,"no-cache"===n.fetchPolicy?this.updateLastDiff({result:e.data,complete:!0},this.getDiffOptions(n.variables)):0!==r&&(vt(e,n.errorPolicy)?this.cache.performTransaction((function(o){if(i.shouldWrite(e,n.variables))o.writeQuery({query:t,data:e.data,variables:n.variables,overwrite:1===r}),i.lastWrite={result:e,variables:n.variables,dmCount:ft.get(i.cache)};else if(i.lastDiff&&i.lastDiff.diff.complete)return void(e.data=i.lastDiff.diff.result);var u=i.getDiffOptions(n.variables),a=o.diff(u);i.stopped||i.updateWatch(n.variables),i.updateLastDiff(a,u),a.complete&&(e.data=a.result)})):this.lastWrite=void 0)},e.prototype.markReady=function(){return this.networkError=null,this.networkStatus=ne.Ie.ready},e.prototype.markError=function(e){return this.networkStatus=ne.Ie.error,this.lastWrite=void 0,this.reset(),e.graphQLErrors&&(this.graphQLErrors=e.graphQLErrors),e.networkError&&(this.networkError=e.networkError),e},e}();function vt(e,t){void 0===t&&(t="none");var n="ignore"===t||"all"===t,r=!(0,Z.d)(e);return!r&&n&&e.data&&(r=!0),r}var yt,mt=Object.prototype.hasOwnProperty,gt=function(){function e(e){var t=e.cache,n=e.link,r=e.defaultOptions,i=e.documentTransform,o=e.queryDeduplication,u=void 0!==o&&o,a=e.onBroadcast,s=e.ssrMode,c=void 0!==s&&s,l=e.clientAwareness,f=void 0===l?{}:l,p=e.localState,d=e.assumeImmutableResults,h=void 0===d?!!t.assumeImmutableResults:d,v=this;this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new(m.mr?WeakMap:Map),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new Map;var y=new K.A((function(e){return v.cache.transformDocument(e)}),{cache:!1});this.cache=t,this.link=n,this.defaultOptions=r||Object.create(null),this.queryDeduplication=u,this.clientAwareness=f,this.localState=p||new lt({cache:t}),this.ssrMode=c,this.assumeImmutableResults=h,this.documentTransform=i?y.concat(i).concat(y):y,(this.onBroadcast=a)&&(this.mutationStore=Object.create(null))}return e.prototype.stop=function(){var e=this;this.queries.forEach((function(t,n){e.stopQueryNoBroadcast(n)})),this.cancelPendingFetches((0,i._K)(23))},e.prototype.cancelPendingFetches=function(e){this.fetchCancelFns.forEach((function(t){return t(e)})),this.fetchCancelFns.clear()},e.prototype.mutate=function(e){var t,n,o=e.mutation,u=e.variables,a=e.optimisticResponse,s=e.updateQueries,c=e.refetchQueries,l=void 0===c?[]:c,f=e.awaitRefetchQueries,p=void 0!==f&&f,d=e.update,h=e.onQueryUpdated,v=e.fetchPolicy,y=void 0===v?(null===(t=this.defaultOptions.mutate)||void 0===t?void 0:t.fetchPolicy)||"network-only":v,m=e.errorPolicy,g=void 0===m?(null===(n=this.defaultOptions.mutate)||void 0===n?void 0:n.errorPolicy)||"none":m,b=e.keepRootFields,_=e.context;return(0,r.mG)(this,void 0,void 0,(function(){var e,t,n,c;return(0,r.Jh)(this,(function(f){switch(f.label){case 0:return(0,i.kG)(o,24),(0,i.kG)("network-only"===y||"no-cache"===y,25),e=this.generateMutationId(),o=this.cache.transformForLink(this.transform(o)),t=this.getDocumentInfo(o).hasClientExports,u=this.getVariables(o,u),t?[4,this.localState.addExportedVariables(o,u,_)]:[3,2];case 1:u=f.sent(),f.label=2;case 2:return n=this.mutationStore&&(this.mutationStore[e]={mutation:o,variables:u,loading:!0,error:null}),a&&this.markMutationOptimistic(a,{mutationId:e,document:o,variables:u,fetchPolicy:y,errorPolicy:g,context:_,updateQueries:s,update:d,keepRootFields:b}),this.broadcastQueries(),c=this,[2,new Promise((function(t,i){return(0,Y.s)(c.getObservableFromLink(o,(0,r.pi)((0,r.pi)({},_),{optimisticResponse:a}),u,!1),(function(t){if((0,Z.d)(t)&&"none"===g)throw new w.cA({graphQLErrors:(0,Z.K)(t)});n&&(n.loading=!1,n.error=null);var i=(0,r.pi)({},t);return"function"==typeof l&&(l=l(i)),"ignore"===g&&(0,Z.d)(i)&&delete i.errors,c.markMutationResult({mutationId:e,result:i,document:o,variables:u,fetchPolicy:y,errorPolicy:g,context:_,update:d,updateQueries:s,awaitRefetchQueries:p,refetchQueries:l,removeOptimistic:a?e:void 0,onQueryUpdated:h,keepRootFields:b})})).subscribe({next:function(e){c.broadcastQueries(),"hasNext"in e&&!1!==e.hasNext||t(e)},error:function(t){n&&(n.loading=!1,n.error=t),a&&c.cache.removeOptimistic(e),c.broadcastQueries(),i(t instanceof w.cA?t:new w.cA({networkError:t}))}})}))]}}))}))},e.prototype.markMutationResult=function(e,t){var n=this;void 0===t&&(t=this.cache);var i=e.result,o=[],a="no-cache"===e.fetchPolicy;if(!a&&vt(i,e.errorPolicy)){if((0,O.GG)(i)||o.push({result:i.data,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}),(0,O.GG)(i)&&(0,G.O)(i.incremental)){var s=t.diff({id:"ROOT_MUTATION",query:this.getDocumentInfo(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0}),c=void 0;s.result&&(c=(0,O.mT)(s.result,i)),void 0!==c&&(i.data=c,o.push({result:c,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}))}var l=e.updateQueries;l&&this.queries.forEach((function(e,r){var a=e.observableQuery,s=a&&a.queryName;if(s&&mt.call(l,s)){var c=l[s],f=n.queries.get(r),p=f.document,d=f.variables,h=t.diff({query:p,variables:d,returnPartialData:!0,optimistic:!1}),v=h.result;if(h.complete&&v){var y=c(v,{mutationResult:i,queryName:p&&(0,u.rY)(p)||void 0,queryVariables:d});y&&o.push({result:y,dataId:"ROOT_QUERY",query:p,variables:d})}}}))}if(o.length>0||e.refetchQueries||e.update||e.onQueryUpdated||e.removeOptimistic){var f=[];if(this.refetchQueries({updateCache:function(t){a||o.forEach((function(e){return t.write(e)}));var u=e.update,s=!(0,O.M0)(i)||(0,O.GG)(i)&&!i.hasNext;if(u){if(!a){var c=t.diff({id:"ROOT_MUTATION",query:n.getDocumentInfo(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0});c.complete&&("incremental"in(i=(0,r.pi)((0,r.pi)({},i),{data:c.result}))&&delete i.incremental,"hasNext"in i&&delete i.hasNext)}s&&u(t,i,{context:e.context,variables:e.variables})}a||e.keepRootFields||!s||t.modify({id:"ROOT_MUTATION",fields:function(e,t){var n=t.fieldName,r=t.DELETE;return"__typename"===n?e:r}})},include:e.refetchQueries,optimistic:!1,removeOptimistic:e.removeOptimistic,onQueryUpdated:e.onQueryUpdated||null}).forEach((function(e){return f.push(e)})),e.awaitRefetchQueries||e.onQueryUpdated)return Promise.all(f).then((function(){return i}))}return Promise.resolve(i)},e.prototype.markMutationOptimistic=function(e,t){var n=this,o="function"==typeof e?e(t.variables):e;return this.cache.recordOptimisticTransaction((function(e){try{n.markMutationResult((0,r.pi)((0,r.pi)({},t),{result:{data:o}}),e)}catch(e){!1!==globalThis.__DEV__&&i.kG.error(e)}}),t.mutationId)},e.prototype.fetchQuery=function(e,t,n){return this.fetchConcastWithInfo(e,t,n).concast.promise},e.prototype.getQueryStore=function(){var e=Object.create(null);return this.queries.forEach((function(t,n){e[n]={variables:t.variables,networkStatus:t.networkStatus,networkError:t.networkError,graphQLErrors:t.graphQLErrors}})),e},e.prototype.resetErrors=function(e){var t=this.queries.get(e);t&&(t.networkError=void 0,t.graphQLErrors=[])},e.prototype.transform=function(e){return this.documentTransform.transformDocument(e)},e.prototype.getDocumentInfo=function(e){var t=this.transformCache;if(!t.has(e)){var n={hasClientExports:(0,d.mj)(e),hasForcedResolvers:this.localState.shouldForceResolvers(e),hasNonreactiveDirective:(0,d.FS)(["nonreactive"],e),clientQuery:this.localState.clientQuery(e),serverQuery:(0,q.bi)([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"}],e),defaultVars:(0,u.O4)((0,u.$H)(e)),asQuery:(0,r.pi)((0,r.pi)({},e),{definitions:e.definitions.map((function(e){return"OperationDefinition"===e.kind&&"query"!==e.operation?(0,r.pi)((0,r.pi)({},e),{operation:"query"}):e}))})};t.set(e,n)}return t.get(e)},e.prototype.getVariables=function(e,t){return(0,r.pi)((0,r.pi)({},this.getDocumentInfo(e).defaultVars),t)},e.prototype.watchQuery=function(e){var t=this.transform(e.query);void 0===(e=(0,r.pi)((0,r.pi)({},e),{variables:this.getVariables(t,e.variables)})).notifyOnNetworkStatusChange&&(e.notifyOnNetworkStatusChange=!1);var n=new ht(this),i=new he({queryManager:this,queryInfo:n,options:e});return i.lastQuery=t,this.queries.set(i.queryId,n),n.init({document:t,observableQuery:i,variables:i.variables}),i},e.prototype.query=function(e,t){var n=this;return void 0===t&&(t=this.generateQueryId()),(0,i.kG)(e.query,26),(0,i.kG)("Document"===e.query.kind,27),(0,i.kG)(!e.returnPartialData,28),(0,i.kG)(!e.pollInterval,29),this.fetchQuery(t,(0,r.pi)((0,r.pi)({},e),{query:this.transform(e.query)})).finally((function(){return n.stopQuery(t)}))},e.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},e.prototype.generateRequestId=function(){return this.requestIdCounter++},e.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},e.prototype.stopQueryInStore=function(e){this.stopQueryInStoreNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(e){var t=this.queries.get(e);t&&t.stop()},e.prototype.clearStore=function(e){return void 0===e&&(e={discardWatches:!0}),this.cancelPendingFetches((0,i._K)(30)),this.queries.forEach((function(e){e.observableQuery?e.networkStatus=ne.Ie.loading:e.stop()})),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(e)},e.prototype.getObservableQueries=function(e){var t=this;void 0===e&&(e="active");var n=new Map,o=new Map,u=new Set;return Array.isArray(e)&&e.forEach((function(e){"string"==typeof e?o.set(e,!1):(0,X.JW)(e)?o.set(t.transform(e),!1):(0,z.s)(e)&&e.query&&u.add(e)})),this.queries.forEach((function(t,r){var i=t.observableQuery,u=t.document;if(i){if("all"===e)return void n.set(r,i);var a=i.queryName;if("standby"===i.options.fetchPolicy||"active"===e&&!i.hasObservers())return;("active"===e||a&&o.has(a)||u&&o.has(u))&&(n.set(r,i),a&&o.set(a,!0),u&&o.set(u,!0))}})),u.size&&u.forEach((function(e){var o=(0,ee.X)("legacyOneTimeQuery"),u=t.getQuery(o).init({document:e.query,variables:e.variables}),a=new he({queryManager:t,queryInfo:u,options:(0,r.pi)((0,r.pi)({},e),{fetchPolicy:"network-only"})});(0,i.kG)(a.queryId===o),u.setObservableQuery(a),n.set(o,a)})),!1!==globalThis.__DEV__&&o.size&&o.forEach((function(e,t){e||!1!==globalThis.__DEV__&&i.kG.warn("string"==typeof t?31:32,t)})),n},e.prototype.reFetchObservableQueries=function(e){var t=this;void 0===e&&(e=!1);var n=[];return this.getObservableQueries(e?"all":"active").forEach((function(r,i){var o=r.options.fetchPolicy;r.resetLastResults(),(e||"standby"!==o&&"cache-only"!==o)&&n.push(r.refetch()),t.getQuery(i).setDiff(null)})),this.broadcastQueries(),Promise.all(n)},e.prototype.setObservableQuery=function(e){this.getQuery(e.queryId).setObservableQuery(e)},e.prototype.startGraphQLSubscription=function(e){var t=this,n=e.query,r=e.fetchPolicy,i=e.errorPolicy,u=e.variables,a=e.context,s=void 0===a?{}:a;n=this.transform(n),u=this.getVariables(n,u);var c=function(e){return t.getObservableFromLink(n,s,e).map((function(o){"no-cache"!==r&&(vt(o,i)&&t.cache.write({query:n,result:o.data,dataId:"ROOT_SUBSCRIPTION",variables:e}),t.broadcastQueries());var u=(0,Z.d)(o),a=(0,w.ls)(o);if(u||a){var s={};throw u&&(s.graphQLErrors=o.errors),a&&(s.protocolErrors=o.extensions[w.YG]),new w.cA(s)}return o}))};if(this.getDocumentInfo(n).hasClientExports){var l=this.localState.addExportedVariables(n,u,s).then(c);return new o.y((function(e){var t=null;return l.then((function(n){return t=n.subscribe(e)}),e.error),function(){return t&&t.unsubscribe()}}))}return c(u)},e.prototype.stopQuery=function(e){this.stopQueryNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(e){this.stopQueryInStoreNoBroadcast(e),this.removeQuery(e)},e.prototype.removeQuery=function(e){this.fetchCancelFns.delete(e),this.queries.has(e)&&(this.getQuery(e).stop(),this.queries.delete(e))},e.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach((function(e){return e.notify()}))},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(e,t,n,i){var a,s,c=this;void 0===i&&(i=null!==(a=null==t?void 0:t.queryDeduplication)&&void 0!==a?a:this.queryDeduplication);var l=this.getDocumentInfo(e),p=l.serverQuery,d=l.clientQuery;if(p){var h=this.inFlightLinkObservables,v=this.link,y={query:p,variables:n,operationName:(0,u.rY)(p)||void 0,context:this.prepareContext((0,r.pi)((0,r.pi)({},t),{forceFetch:!i}))};if(t=y.context,i){var m=(0,x.S)(p),g=h.get(m)||new Map;h.set(m,g);var b=J(n);if(!(s=g.get(b))){var _=new te.X([f(v,y)]);g.set(b,s=_),_.beforeNext((function(){g.delete(b)&&g.size<1&&h.delete(m)}))}}else s=new te.X([f(v,y)])}else s=new te.X([o.y.of({data:{}})]),t=this.prepareContext(t);return d&&(s=(0,Y.s)(s,(function(e){return c.localState.runResolvers({document:d,remoteResult:e,context:t,variables:n})}))),s},e.prototype.getResultsFromLink=function(e,t,n){var r=e.lastRequestId=this.generateRequestId(),i=this.cache.transformForLink(n.query);return(0,Y.s)(this.getObservableFromLink(i,n.context,n.variables),(function(o){var u=(0,Z.K)(o),a=u.length>0;if(r>=e.lastRequestId){if(a&&"none"===n.errorPolicy)throw e.markError(new w.cA({graphQLErrors:u}));e.markResult(o,i,n,t),e.markReady()}var s={data:o.data,loading:!1,networkStatus:ne.Ie.ready};return a&&"ignore"!==n.errorPolicy&&(s.errors=u,s.networkStatus=ne.Ie.error),s}),(function(t){var n=(0,w.MS)(t)?t:new w.cA({networkError:t});throw r>=e.lastRequestId&&e.markError(n),n}))},e.prototype.fetchConcastWithInfo=function(e,t,n){var r=this;void 0===n&&(n=ne.Ie.loading);var i,o,u=t.query,a=this.getVariables(u,t.variables),s=this.getQuery(e),c=this.defaultOptions.watchQuery,l=t.fetchPolicy,f=void 0===l?c&&c.fetchPolicy||"cache-first":l,p=t.errorPolicy,d=void 0===p?c&&c.errorPolicy||"none":p,h=t.returnPartialData,v=void 0!==h&&h,y=t.notifyOnNetworkStatusChange,m=void 0!==y&&y,g=t.context,b=void 0===g?{}:g,_=Object.assign({},t,{query:u,variables:a,fetchPolicy:f,errorPolicy:d,returnPartialData:v,notifyOnNetworkStatusChange:m,context:b}),w=function(e){_.variables=e;var i=r.fetchQueryByPolicy(s,_,n);return"standby"!==_.fetchPolicy&&i.sources.length>0&&s.observableQuery&&s.observableQuery.applyNextFetchPolicy("after-fetch",t),i},O=function(){return r.fetchCancelFns.delete(e)};if(this.fetchCancelFns.set(e,(function(e){O(),setTimeout((function(){return i.cancel(e)}))})),this.getDocumentInfo(_.query).hasClientExports)i=new te.X(this.localState.addExportedVariables(_.query,_.variables,_.context).then(w).then((function(e){return e.sources}))),o=!0;else{var k=w(_.variables);o=k.fromLink,i=new te.X(k.sources)}return i.promise.then(O,O),{concast:i,fromLink:o}},e.prototype.refetchQueries=function(e){var t=this,n=e.updateCache,r=e.include,i=e.optimistic,o=void 0!==i&&i,u=e.removeOptimistic,a=void 0===u?o?(0,ee.X)("refetchQueries"):void 0:u,s=e.onQueryUpdated,c=new Map;r&&this.getObservableQueries(r).forEach((function(e,n){c.set(n,{oq:e,lastDiff:t.getQuery(n).getDiff()})}));var l=new Map;return n&&this.cache.batch({update:n,optimistic:o&&a||!1,removeOptimistic:a,onWatchUpdated:function(e,t,n){var r=e.watcher instanceof ht&&e.watcher.observableQuery;if(r){if(s){c.delete(r.queryId);var i=s(r,t,n);return!0===i&&(i=r.refetch()),!1!==i&&l.set(r,i),i}null!==s&&c.set(r.queryId,{oq:r,lastDiff:n,diff:t})}}}),c.size&&c.forEach((function(e,n){var r,i=e.oq,o=e.lastDiff,u=e.diff;if(s){if(!u){var a=i.queryInfo;a.reset(),u=a.getDiff()}r=s(i,u,o)}s&&!0!==r||(r=i.refetch()),!1!==r&&l.set(i,r),n.indexOf("legacyOneTimeQuery")>=0&&t.stopQueryNoBroadcast(n)})),a&&this.cache.removeOptimistic(a),l},e.prototype.fetchQueryByPolicy=function(e,t,n){var i=this,u=t.query,a=t.variables,s=t.fetchPolicy,c=t.refetchWritePolicy,l=t.errorPolicy,f=t.returnPartialData,p=t.context,d=t.notifyOnNetworkStatusChange,h=e.networkStatus;e.init({document:u,variables:a,networkStatus:n});var v=function(){return e.getDiff(a)},y=function(t,n){void 0===n&&(n=e.networkStatus||ne.Ie.loading);var s=t.result;!1===globalThis.__DEV__||f||(0,B.D)(s,{})||me(t.missing);var c=function(e){return o.y.of((0,r.pi)({data:e,loading:(0,ne.Oj)(n),networkStatus:n},t.complete?null:{partial:!0}))};return s&&i.getDocumentInfo(u).hasForcedResolvers?i.localState.runResolvers({document:u,remoteResult:{data:s},context:p,variables:a,onlyRunForcedResolvers:!0}).then((function(e){return c(e.data||void 0)})):"none"===l&&n===ne.Ie.refetch&&Array.isArray(t.missing)?c(void 0):c(s)},m="no-cache"===s?0:n===ne.Ie.refetch&&"merge"!==c?1:2,g=function(){return i.getResultsFromLink(e,m,{query:u,variables:a,context:p,fetchPolicy:s,errorPolicy:l})},b=d&&"number"==typeof h&&h!==n&&(0,ne.Oj)(n);switch(s){default:case"cache-first":return(_=v()).complete?{fromLink:!1,sources:[y(_,e.markReady())]}:f||b?{fromLink:!0,sources:[y(_),g()]}:{fromLink:!0,sources:[g()]};case"cache-and-network":var _;return(_=v()).complete||f||b?{fromLink:!0,sources:[y(_),g()]}:{fromLink:!0,sources:[g()]};case"cache-only":return{fromLink:!1,sources:[y(v(),e.markReady())]};case"network-only":return b?{fromLink:!0,sources:[y(v()),g()]}:{fromLink:!0,sources:[g()]};case"no-cache":return b?{fromLink:!0,sources:[y(e.getDiff()),g()]}:{fromLink:!0,sources:[g()]};case"standby":return{fromLink:!1,sources:[]}}},e.prototype.getQuery=function(e){return e&&!this.queries.has(e)&&this.queries.set(e,new ht(this,e)),this.queries.get(e)},e.prototype.prepareContext=function(e){void 0===e&&(e={});var t=this.localState.prepareContext(e);return(0,r.pi)((0,r.pi)({},t),{clientAwareness:this.clientAwareness})},e}(),bt=n(4012),_t=!1,wt=function(){function e(e){var t=this;if(this.resetStoreCallbacks=[],this.clearStoreCallbacks=[],!e.cache)throw(0,i._K)(13);var n=e.uri,r=e.credentials,o=e.headers,u=e.cache,a=e.documentTransform,s=e.ssrMode,c=void 0!==s&&s,f=e.ssrForceFetchDelay,d=void 0===f?0:f,h=e.connectToDevTools,v=void 0===h?"object"==typeof window&&!window.__APOLLO_CLIENT__&&!1!==globalThis.__DEV__:h,y=e.queryDeduplication,m=void 0===y||y,g=e.defaultOptions,b=e.assumeImmutableResults,_=void 0===b?u.assumeImmutableResults:b,w=e.resolvers,O=e.typeDefs,k=e.fragmentMatcher,T=e.name,E=e.version,S=e.link;if(S||(S=n?new U({uri:n,credentials:r,headers:o}):l.empty()),this.link=S,this.cache=u,this.disableNetworkFetches=c||d>0,this.queryDeduplication=m,this.defaultOptions=g||Object.create(null),this.typeDefs=O,d&&setTimeout((function(){return t.disableNetworkFetches=!1}),d),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),v&&"object"==typeof window&&(window.__APOLLO_CLIENT__=this),!_t&&v&&!1!==globalThis.__DEV__&&(_t=!0,"undefined"!=typeof window&&window.document&&window.top===window.self&&!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)){var C=window.navigator,x=C&&C.userAgent,I=void 0;"string"==typeof x&&(x.indexOf("Chrome/")>-1?I="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":x.indexOf("Firefox/")>-1&&(I="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),I&&!1!==globalThis.__DEV__&&i.kG.log("Download the Apollo DevTools for a better development experience: %s",I)}this.version=p.i,this.localState=new lt({cache:u,client:this,resolvers:w,fragmentMatcher:k}),this.queryManager=new gt({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,documentTransform:a,queryDeduplication:m,ssrMode:c,clientAwareness:{name:T,version:E},localState:this.localState,assumeImmutableResults:_,onBroadcast:v?function(){t.devToolsHookCb&&t.devToolsHookCb({action:{},state:{queries:t.queryManager.getQueryStore(),mutations:t.queryManager.mutationStore||{}},dataWithOptimisticResults:t.cache.extract(!0)})}:void 0})}return Object.defineProperty(e.prototype,"documentTransform",{get:function(){return this.queryManager.documentTransform},enumerable:!1,configurable:!0}),e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(e){return this.defaultOptions.watchQuery&&(e=(0,bt.J)(this.defaultOptions.watchQuery,e)),!this.disableNetworkFetches||"network-only"!==e.fetchPolicy&&"cache-and-network"!==e.fetchPolicy||(e=(0,r.pi)((0,r.pi)({},e),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(e)},e.prototype.query=function(e){return this.defaultOptions.query&&(e=(0,bt.J)(this.defaultOptions.query,e)),(0,i.kG)("cache-and-network"!==e.fetchPolicy,14),this.disableNetworkFetches&&"network-only"===e.fetchPolicy&&(e=(0,r.pi)((0,r.pi)({},e),{fetchPolicy:"cache-first"})),this.queryManager.query(e)},e.prototype.mutate=function(e){return this.defaultOptions.mutate&&(e=(0,bt.J)(this.defaultOptions.mutate,e)),this.queryManager.mutate(e)},e.prototype.subscribe=function(e){return this.queryManager.startGraphQLSubscription(e)},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!1),this.cache.readQuery(e,t)},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!1),this.cache.readFragment(e,t)},e.prototype.writeQuery=function(e){var t=this.cache.writeQuery(e);return!1!==e.broadcast&&this.queryManager.broadcastQueries(),t},e.prototype.writeFragment=function(e){var t=this.cache.writeFragment(e);return!1!==e.broadcast&&this.queryManager.broadcastQueries(),t},e.prototype.__actionHookForDevTools=function(e){this.devToolsHookCb=e},e.prototype.__requestRaw=function(e){return f(this.link,e)},e.prototype.resetStore=function(){var e=this;return Promise.resolve().then((function(){return e.queryManager.clearStore({discardWatches:!1})})).then((function(){return Promise.all(e.resetStoreCallbacks.map((function(e){return e()})))})).then((function(){return e.reFetchObservableQueries()}))},e.prototype.clearStore=function(){var e=this;return Promise.resolve().then((function(){return e.queryManager.clearStore({discardWatches:!0})})).then((function(){return Promise.all(e.clearStoreCallbacks.map((function(e){return e()})))}))},e.prototype.onResetStore=function(e){var t=this;return this.resetStoreCallbacks.push(e),function(){t.resetStoreCallbacks=t.resetStoreCallbacks.filter((function(t){return t!==e}))}},e.prototype.onClearStore=function(e){var t=this;return this.clearStoreCallbacks.push(e),function(){t.clearStoreCallbacks=t.clearStoreCallbacks.filter((function(t){return t!==e}))}},e.prototype.reFetchObservableQueries=function(e){return this.queryManager.reFetchObservableQueries(e)},e.prototype.refetchQueries=function(e){var t=this.queryManager.refetchQueries(e),n=[],r=[];t.forEach((function(e,t){n.push(t),r.push(e)}));var o=Promise.all(r);return o.queries=n,o.results=r,o.catch((function(e){!1!==globalThis.__DEV__&&i.kG.debug(15,e)})),o},e.prototype.getObservableQueries=function(e){return void 0===e&&(e="active"),this.queryManager.getObservableQueries(e)},e.prototype.extract=function(e){return this.cache.extract(e)},e.prototype.restore=function(e){return this.cache.restore(e)},e.prototype.addResolvers=function(e){this.localState.addResolvers(e)},e.prototype.setResolvers=function(e){this.localState.setResolvers(e)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(e){this.localState.setFragmentMatcher(e)},e.prototype.setLink=function(e){this.link=this.queryManager.link=e},e}();yt||(yt={});var Ot=function(){function e(){this.assumeImmutableResults=!1,this.getFragmentDoc=rt(ae.Yk)}return e.prototype.batch=function(e){var t,n=this,r="string"==typeof e.optimistic?e.optimistic:!1===e.optimistic?null:void 0;return this.performTransaction((function(){return t=e.update(n)}),r),t},e.prototype.recordOptimisticTransaction=function(e,t){this.performTransaction(e,t)},e.prototype.transformDocument=function(e){return e},e.prototype.transformForLink=function(e){return e},e.prototype.identify=function(e){},e.prototype.gc=function(){return[]},e.prototype.modify=function(e){return!1},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!!e.optimistic),this.read((0,r.pi)((0,r.pi)({},e),{rootId:e.id||"ROOT_QUERY",optimistic:t}))},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!!e.optimistic),this.read((0,r.pi)((0,r.pi)({},e),{query:this.getFragmentDoc(e.fragment,e.fragmentName),rootId:e.id,optimistic:t}))},e.prototype.writeQuery=function(e){var t=e.id,n=e.data,i=(0,r._T)(e,["id","data"]);return this.write(Object.assign(i,{dataId:t||"ROOT_QUERY",result:n}))},e.prototype.writeFragment=function(e){var t=e.id,n=e.data,i=e.fragment,o=e.fragmentName,u=(0,r._T)(e,["id","data","fragment","fragmentName"]);return this.write(Object.assign(u,{query:this.getFragmentDoc(i,o),dataId:t,result:n}))},e.prototype.updateQuery=function(e,t){return this.batch({update:function(n){var i=n.readQuery(e),o=t(i);return null==o?i:(n.writeQuery((0,r.pi)((0,r.pi)({},e),{data:o})),o)}})},e.prototype.updateFragment=function(e,t){return this.batch({update:function(n){var i=n.readFragment(e),o=t(i);return null==o?i:(n.writeFragment((0,r.pi)((0,r.pi)({},e),{data:o})),o)}})},e}(),kt=function(e){function t(n,r,i,o){var u,a=e.call(this,n)||this;if(a.message=n,a.path=r,a.query=i,a.variables=o,Array.isArray(a.path)){a.missing=a.message;for(var s=a.path.length-1;s>=0;--s)a.missing=((u={})[a.path[s]]=a.missing,u)}else a.missing=a.path;return a.__proto__=t.prototype,a}return(0,r.ZT)(t,e),t}(Error),Tt=n(8702),Et=Object.prototype.hasOwnProperty;function St(e){return null==e}function Ct(e,t){var n=e.__typename,r=e.id,i=e._id;if("string"==typeof n&&(t&&(t.keyObject=St(r)?St(i)?void 0:{_id:i}:{id:r}),St(r)&&!St(i)&&(r=i),!St(r)))return"".concat(n,":").concat("number"==typeof r||"string"==typeof r?r:JSON.stringify(r))}var xt={dataIdFromObject:Ct,addTypename:!0,resultCaching:!0,canonizeResults:!1};function It(e){var t=e.canonizeResults;return void 0===t?xt.canonizeResults:t}var jt=/^[_a-z][_0-9a-z]*/i;function At(e){var t=e.match(jt);return t?t[0]:e}function Nt(e,t,n){return!!(0,z.s)(t)&&((0,G.k)(t)?t.every((function(t){return Nt(e,t,n)})):e.selections.every((function(e){if((0,X.My)(e)&&(0,d.LZ)(e,n)){var r=(0,X.u2)(e);return Et.call(t,r)&&(!e.selectionSet||Nt(e.selectionSet,t[r],n))}return!0})))}function Dt(e){return(0,z.s)(e)&&!(0,X.Yk)(e)&&!(0,G.k)(e)}function Pt(e,t){var n=(0,ae.F)((0,u.kU)(e));return{fragmentMap:n,lookupFragment:function(e){var r=n[e];return!r&&t&&(r=t.lookup(e)),r||null}}}var Rt=Object.create(null),Ft=function(){return Rt},Mt=Object.create(null),Lt=function(){function e(e,t){var n=this;this.policies=e,this.group=t,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(e,t){return(0,Tt.J)((0,X.Yk)(e)?n.get(e.__ref,t):e&&e[t])},this.canRead=function(e){return(0,X.Yk)(e)?n.has(e.__ref):"object"==typeof e},this.toReference=function(e,t){if("string"==typeof e)return(0,X.kQ)(e);if((0,X.Yk)(e))return e;var r=n.policies.identify(e)[0];if(r){var i=(0,X.kQ)(r);return t&&n.merge(r,e),i}}}return e.prototype.toObject=function(){return(0,r.pi)({},this.data)},e.prototype.has=function(e){return void 0!==this.lookup(e,!0)},e.prototype.get=function(e,t){if(this.group.depend(e,t),Et.call(this.data,e)){var n=this.data[e];if(n&&Et.call(n,t))return n[t]}return"__typename"===t&&Et.call(this.policies.rootTypenamesById,e)?this.policies.rootTypenamesById[e]:this instanceof Ut?this.parent.get(e,t):void 0},e.prototype.lookup=function(e,t){return t&&this.group.depend(e,"__exists"),Et.call(this.data,e)?this.data[e]:this instanceof Ut?this.parent.lookup(e,t):this.policies.rootTypenamesById[e]?Object.create(null):void 0},e.prototype.merge=function(e,t){var n,r=this;(0,X.Yk)(e)&&(e=e.__ref),(0,X.Yk)(t)&&(t=t.__ref);var o="string"==typeof e?this.lookup(n=e):e,u="string"==typeof t?this.lookup(n=t):t;if(u){(0,i.kG)("string"==typeof n,1);var a=new we.w0($t).merge(o,u);if(this.data[n]=a,a!==o&&(delete this.refs[n],this.group.caching)){var s=Object.create(null);o||(s.__exists=1),Object.keys(u).forEach((function(e){if(!o||o[e]!==a[e]){s[e]=1;var t=At(e);t===e||r.policies.hasKeyArgs(a.__typename,t)||(s[t]=1),void 0!==a[e]||r instanceof Ut||delete a[e]}})),!s.__typename||o&&o.__typename||this.policies.rootTypenamesById[n]!==a.__typename||delete s.__typename,Object.keys(s).forEach((function(e){return r.group.dirty(n,e)}))}}},e.prototype.modify=function(e,t){var n=this,i=this.lookup(e);if(i){var o=Object.create(null),u=!1,a=!0,s={DELETE:Rt,INVALIDATE:Mt,isReference:X.Yk,toReference:this.toReference,canRead:this.canRead,readField:function(t,r){return n.policies.readField("string"==typeof t?{fieldName:t,from:r||(0,X.kQ)(e)}:t,{store:n})}};if(Object.keys(i).forEach((function(c){var l=At(c),f=i[c];if(void 0!==f){var p="function"==typeof t?t:t[c]||t[l];if(p){var d=p===Ft?Rt:p((0,Tt.J)(f),(0,r.pi)((0,r.pi)({},s),{fieldName:l,storeFieldName:c,storage:n.getStorage(e,c)}));d===Mt?n.group.dirty(e,c):(d===Rt&&(d=void 0),d!==f&&(o[c]=d,u=!0,f=d))}void 0!==f&&(a=!1)}})),u)return this.merge(e,o),a&&(this instanceof Ut?this.data[e]=void 0:delete this.data[e],this.group.dirty(e,"__exists")),!0}return!1},e.prototype.delete=function(e,t,n){var r,i=this.lookup(e);if(i){var o=this.getFieldValue(i,"__typename"),u=t&&n?this.policies.getStoreFieldName({typename:o,fieldName:t,args:n}):t;return this.modify(e,u?((r={})[u]=Ft,r):Ft)}return!1},e.prototype.evict=function(e,t){var n=!1;return e.id&&(Et.call(this.data,e.id)&&(n=this.delete(e.id,e.fieldName,e.args)),this instanceof Ut&&this!==t&&(n=this.parent.evict(e,t)||n),(e.fieldName||n)&&this.group.dirty(e.id,e.fieldName||"__exists")),n},e.prototype.clear=function(){this.replace(null)},e.prototype.extract=function(){var e=this,t=this.toObject(),n=[];return this.getRootIdSet().forEach((function(t){Et.call(e.policies.rootTypenamesById,t)||n.push(t)})),n.length&&(t.__META={extraRootIds:n.sort()}),t},e.prototype.replace=function(e){var t=this;if(Object.keys(this.data).forEach((function(n){e&&Et.call(e,n)||t.delete(n)})),e){var n=e.__META,i=(0,r._T)(e,["__META"]);Object.keys(i).forEach((function(e){t.merge(e,i[e])})),n&&n.extraRootIds.forEach(this.retain,this)}},e.prototype.retain=function(e){return this.rootIds[e]=(this.rootIds[e]||0)+1},e.prototype.release=function(e){if(this.rootIds[e]>0){var t=--this.rootIds[e];return t||delete this.rootIds[e],t}return 0},e.prototype.getRootIdSet=function(e){return void 0===e&&(e=new Set),Object.keys(this.rootIds).forEach(e.add,e),this instanceof Ut?this.parent.getRootIdSet(e):Object.keys(this.policies.rootTypenamesById).forEach(e.add,e),e},e.prototype.gc=function(){var e=this,t=this.getRootIdSet(),n=this.toObject();t.forEach((function(r){Et.call(n,r)&&(Object.keys(e.findChildRefIds(r)).forEach(t.add,t),delete n[r])}));var r=Object.keys(n);if(r.length){for(var i=this;i instanceof Ut;)i=i.parent;r.forEach((function(e){return i.delete(e)}))}return r},e.prototype.findChildRefIds=function(e){if(!Et.call(this.refs,e)){var t=this.refs[e]=Object.create(null),n=this.data[e];if(!n)return t;var r=new Set([n]);r.forEach((function(e){(0,X.Yk)(e)&&(t[e.__ref]=!0),(0,z.s)(e)&&Object.keys(e).forEach((function(t){var n=e[t];(0,z.s)(n)&&r.add(n)}))}))}return this.refs[e]},e.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},e}(),qt=function(){function e(e,t){void 0===t&&(t=null),this.caching=e,this.parent=t,this.d=null,this.resetCaching()}return e.prototype.resetCaching=function(){this.d=this.caching?Xe():null,this.keyMaker=new $.B(m.mr)},e.prototype.depend=function(e,t){if(this.d){this.d(Vt(e,t));var n=At(t);n!==t&&this.d(Vt(e,n)),this.parent&&this.parent.depend(e,t)}},e.prototype.dirty=function(e,t){this.d&&this.d.dirty(Vt(e,t),"__exists"===t?"forget":"setDirty")},e}();function Vt(e,t){return t+"#"+e}function Qt(e,t){zt(e)&&e.group.depend(t,"__exists")}!function(e){var t=function(e){function t(t){var n=t.policies,r=t.resultCaching,i=void 0===r||r,o=t.seed,u=e.call(this,n,new qt(i))||this;return u.stump=new Bt(u),u.storageTrie=new $.B(m.mr),o&&u.replace(o),u}return(0,r.ZT)(t,e),t.prototype.addLayer=function(e,t){return this.stump.addLayer(e,t)},t.prototype.removeLayer=function(){return this},t.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},t}(e);e.Root=t}(Lt||(Lt={}));var Ut=function(e){function t(t,n,r,i){var o=e.call(this,n.policies,i)||this;return o.id=t,o.parent=n,o.replay=r,o.group=i,r(o),o}return(0,r.ZT)(t,e),t.prototype.addLayer=function(e,n){return new t(e,this,n,this.group)},t.prototype.removeLayer=function(e){var t=this,n=this.parent.removeLayer(e);return e===this.id?(this.group.caching&&Object.keys(this.data).forEach((function(e){var r=t.data[e],i=n.lookup(e);i?r?r!==i&&Object.keys(r).forEach((function(n){(0,B.D)(r[n],i[n])||t.group.dirty(e,n)})):(t.group.dirty(e,"__exists"),Object.keys(i).forEach((function(n){t.group.dirty(e,n)}))):t.delete(e)})),n):n===this.parent?this:n.addLayer(this.id,this.replay)},t.prototype.toObject=function(){return(0,r.pi)((0,r.pi)({},this.parent.toObject()),this.data)},t.prototype.findChildRefIds=function(t){var n=this.parent.findChildRefIds(t);return Et.call(this.data,t)?(0,r.pi)((0,r.pi)({},n),e.prototype.findChildRefIds.call(this,t)):n},t.prototype.getStorage=function(){for(var e=this.parent;e.parent;)e=e.parent;return e.getStorage.apply(e,arguments)},t}(Lt),Bt=function(e){function t(t){return e.call(this,"EntityStore.Stump",t,(function(){}),new qt(t.group.caching,t.group))||this}return(0,r.ZT)(t,e),t.prototype.removeLayer=function(){return this},t.prototype.merge=function(){return this.parent.merge.apply(this.parent,arguments)},t}(Ut);function $t(e,t,n){var r=e[n],i=t[n];return(0,B.D)(r,i)?r:i}function zt(e){return!!(e instanceof Lt&&e.group.caching)}function Gt(e){return[e.selectionSet,e.objectOrReference,e.context,e.context.canonizeResults]}var Wt=function(){function e(e){var t=this;this.knownResults=new(m.mr?WeakMap:Map),this.config=(0,re.o)(e,{addTypename:!1!==e.addTypename,canonizeResults:It(e)}),this.canon=e.canon||new W,this.executeSelectionSet=rt((function(e){var n,i=e.context.canonizeResults,o=Gt(e);o[3]=!i;var u=(n=t.executeSelectionSet).peek.apply(n,o);return u?i?(0,r.pi)((0,r.pi)({},u),{result:t.canon.admit(u.result)}):u:(Qt(e.context.store,e.enclosingRef.__ref),t.execSelectionSetImpl(e))}),{max:this.config.resultCacheMaxSize,keyArgs:Gt,makeCacheKey:function(e,t,n,r){if(zt(n.store))return n.store.makeCacheKey(e,(0,X.Yk)(t)?t.__ref:t,n.varString,r)}}),this.executeSubSelectedArray=rt((function(e){return Qt(e.context.store,e.enclosingRef.__ref),t.execSubSelectedArrayImpl(e)}),{max:this.config.resultCacheMaxSize,makeCacheKey:function(e){var t=e.field,n=e.array,r=e.context;if(zt(r.store))return r.store.makeCacheKey(t,n,r.varString)}})}return e.prototype.resetCanon=function(){this.canon=new W},e.prototype.diffQueryAgainstStore=function(e){var t=e.store,n=e.query,i=e.rootId,o=void 0===i?"ROOT_QUERY":i,a=e.variables,s=e.returnPartialData,c=void 0===s||s,l=e.canonizeResults,f=void 0===l?this.config.canonizeResults:l,p=this.config.cache.policies;a=(0,r.pi)((0,r.pi)({},(0,u.O4)((0,u.iW)(n))),a);var d,h=(0,X.kQ)(o),v=this.executeSelectionSet({selectionSet:(0,u.p$)(n).selectionSet,objectOrReference:h,enclosingRef:h,context:(0,r.pi)({store:t,query:n,policies:p,variables:a,varString:J(a),canonizeResults:f},Pt(n,this.config.fragments))});if(v.missing&&(d=[new kt(Jt(v.missing),v.missing,n,a)],!c))throw d[0];return{result:v.result,complete:!d,missing:d}},e.prototype.isFresh=function(e,t,n,r){if(zt(r.store)&&this.knownResults.get(e)===n){var i=this.executeSelectionSet.peek(n,t,r,this.canon.isKnown(e));if(i&&e===i.result)return!0}return!1},e.prototype.execSelectionSetImpl=function(e){var t=this,n=e.selectionSet,r=e.objectOrReference,o=e.enclosingRef,u=e.context;if((0,X.Yk)(r)&&!u.policies.rootTypenamesById[r.__ref]&&!u.store.has(r.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(r.__ref," object")};var a,s=u.variables,c=u.policies,l=u.store.getFieldValue(r,"__typename"),f=[],p=new we.w0;function h(e,t){var n;return e.missing&&(a=p.merge(a,((n={})[t]=e.missing,n))),e.result}this.config.addTypename&&"string"==typeof l&&!c.rootIdsByTypename[l]&&f.push({__typename:l});var v=new Set(n.selections);v.forEach((function(e){var n,y;if((0,d.LZ)(e,s))if((0,X.My)(e)){var m=c.readField({fieldName:e.name.value,field:e,variables:u.variables,from:r},u),g=(0,X.u2)(e);void 0===m?q.Gw.added(e)||(a=p.merge(a,((n={})[g]="Can't find field '".concat(e.name.value,"' on ").concat((0,X.Yk)(r)?r.__ref+" object":"object "+JSON.stringify(r,null,2)),n))):(0,G.k)(m)?m=h(t.executeSubSelectedArray({field:e,array:m,enclosingRef:o,context:u}),g):e.selectionSet?null!=m&&(m=h(t.executeSelectionSet({selectionSet:e.selectionSet,objectOrReference:m,enclosingRef:(0,X.Yk)(m)?m:o,context:u}),g)):u.canonizeResults&&(m=t.canon.pass(m)),void 0!==m&&f.push(((y={})[g]=m,y))}else{var b=(0,ae.hi)(e,u.lookupFragment);if(!b&&e.kind===be.h.FRAGMENT_SPREAD)throw(0,i._K)(7,e.name.value);b&&c.fragmentMatches(b,l)&&b.selectionSet.selections.forEach(v.add,v)}}));var y={result:(0,we.bw)(f),missing:a},m=u.canonizeResults?this.canon.admit(y):(0,Tt.J)(y);return m.result&&this.knownResults.set(m.result,n),m},e.prototype.execSubSelectedArrayImpl=function(e){var t,n=this,r=e.field,o=e.array,u=e.enclosingRef,a=e.context,s=new we.w0;function c(e,n){var r;return e.missing&&(t=s.merge(t,((r={})[n]=e.missing,r))),e.result}return r.selectionSet&&(o=o.filter(a.store.canRead)),o=o.map((function(e,t){return null===e?null:(0,G.k)(e)?c(n.executeSubSelectedArray({field:r,array:e,enclosingRef:u,context:a}),t):r.selectionSet?c(n.executeSelectionSet({selectionSet:r.selectionSet,objectOrReference:e,enclosingRef:(0,X.Yk)(e)?e:u,context:a}),t):(!1!==globalThis.__DEV__&&function(e,t,n){if(!t.selectionSet){var r=new Set([n]);r.forEach((function(n){(0,z.s)(n)&&((0,i.kG)(!(0,X.Yk)(n),8,function(e,t){return(0,X.Yk)(t)?e.get(t.__ref,"__typename"):t&&t.__typename}(e,n),t.name.value),Object.values(n).forEach(r.add,r))}))}}(a.store,r,e),e)})),{result:a.canonizeResults?this.canon.admit(o):o,missing:t}},e}();function Jt(e){try{JSON.stringify(e,(function(e,t){if("string"==typeof t)throw t;return t}))}catch(e){return e}}var Ht=n(3887),Kt=Object.create(null);function Yt(e){var t=JSON.stringify(e);return Kt[t]||(Kt[t]=Object.create(null))}function Zt(e){var t=Yt(e);return t.keyFieldsFn||(t.keyFieldsFn=function(t,n){var r=function(e,t){return n.readField(t,e)},o=n.keyObject=en(e,(function(e){var o=rn(n.storeObject,e,r);return void 0===o&&t!==n.storeObject&&Et.call(t,e[0])&&(o=rn(t,e,nn)),(0,i.kG)(void 0!==o,2,e.join("."),t),o}));return"".concat(n.typename,":").concat(JSON.stringify(o))})}function Xt(e){var t=Yt(e);return t.keyArgsFn||(t.keyArgsFn=function(t,n){var r=n.field,i=n.variables,o=n.fieldName,u=en(e,(function(e){var n=e[0],o=n.charAt(0);if("@"!==o)if("$"!==o){if(t)return rn(t,e)}else{var u=n.slice(1);if(i&&Et.call(i,u)){var a=e.slice(0);return a[0]=u,rn(i,a)}}else if(r&&(0,G.O)(r.directives)){var s=n.slice(1),c=r.directives.find((function(e){return e.name.value===s})),l=c&&(0,X.NC)(c,i);return l&&rn(l,e.slice(1))}})),a=JSON.stringify(u);return(t||"{}"!==a)&&(o+=":"+a),o})}function en(e,t){var n=new we.w0;return tn(e).reduce((function(e,r){var i,o=t(r);if(void 0!==o){for(var u=r.length-1;u>=0;--u)(i={})[r[u]]=o,o=i;e=n.merge(e,o)}return e}),Object.create(null))}function tn(e){var t=Yt(e);if(!t.paths){var n=t.paths=[],r=[];e.forEach((function(t,i){(0,G.k)(t)?(tn(t).forEach((function(e){return n.push(r.concat(e))})),r.length=0):(r.push(t),(0,G.k)(e[i+1])||(n.push(r.slice(0)),r.length=0))}))}return t.paths}function nn(e,t){return e[t]}function rn(e,t,n){return n=n||nn,on(t.reduce((function e(t,r){return(0,G.k)(t)?t.map((function(t){return e(t,r)})):t&&n(t,r)}),e))}function on(e){return(0,z.s)(e)?(0,G.k)(e)?e.map(on):en(Object.keys(e).sort(),(function(t){return rn(e,t)})):e}function un(e){return void 0!==e.args?e.args:e.field?(0,X.NC)(e.field,e.variables):null}X.PT.setStringify(J);var an=function(){},sn=function(e,t){return t.fieldName},cn=function(e,t,n){return(0,n.mergeObjects)(e,t)},ln=function(e,t){return t},fn=function(){function e(e){this.config=e,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=(0,r.pi)({dataIdFromObject:Ct},e),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),e.possibleTypes&&this.addPossibleTypes(e.possibleTypes),e.typePolicies&&this.addTypePolicies(e.typePolicies)}return e.prototype.identify=function(e,t){var n,i=this,o=t&&(t.typename||(null===(n=t.storeObject)||void 0===n?void 0:n.__typename))||e.__typename;if(o===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];for(var u,a=t&&t.storeObject||e,s=(0,r.pi)((0,r.pi)({},t),{typename:o,storeObject:a,readField:t&&t.readField||function(){var e=dn(arguments,a);return i.readField(e,{store:i.cache.data,variables:e.variables})}}),c=o&&this.getTypePolicy(o),l=c&&c.keyFn||this.config.dataIdFromObject;l;){var f=l((0,r.pi)((0,r.pi)({},e),a),s);if(!(0,G.k)(f)){u=f;break}l=Zt(f)}return u=u?String(u):void 0,s.keyObject?[u,s.keyObject]:[u]},e.prototype.addTypePolicies=function(e){var t=this;Object.keys(e).forEach((function(n){var i=e[n],o=i.queryType,u=i.mutationType,a=i.subscriptionType,s=(0,r._T)(i,["queryType","mutationType","subscriptionType"]);o&&t.setRootTypename("Query",n),u&&t.setRootTypename("Mutation",n),a&&t.setRootTypename("Subscription",n),Et.call(t.toBeAdded,n)?t.toBeAdded[n].push(s):t.toBeAdded[n]=[s]}))},e.prototype.updateTypePolicy=function(e,t){var n=this,r=this.getTypePolicy(e),i=t.keyFields,o=t.fields;function u(e,t){e.merge="function"==typeof t?t:!0===t?cn:!1===t?ln:e.merge}u(r,t.merge),r.keyFn=!1===i?an:(0,G.k)(i)?Zt(i):"function"==typeof i?i:r.keyFn,o&&Object.keys(o).forEach((function(t){var r=n.getFieldPolicy(e,t,!0),i=o[t];if("function"==typeof i)r.read=i;else{var a=i.keyArgs,s=i.read,c=i.merge;r.keyFn=!1===a?sn:(0,G.k)(a)?Xt(a):"function"==typeof a?a:r.keyFn,"function"==typeof s&&(r.read=s),u(r,c)}r.read&&r.merge&&(r.keyFn=r.keyFn||sn)}))},e.prototype.setRootTypename=function(e,t){void 0===t&&(t=e);var n="ROOT_"+e.toUpperCase(),r=this.rootTypenamesById[n];t!==r&&((0,i.kG)(!r||r===e,3,e),r&&delete this.rootIdsByTypename[r],this.rootIdsByTypename[t]=n,this.rootTypenamesById[n]=t)},e.prototype.addPossibleTypes=function(e){var t=this;this.usingPossibleTypes=!0,Object.keys(e).forEach((function(n){t.getSupertypeSet(n,!0),e[n].forEach((function(e){t.getSupertypeSet(e,!0).add(n);var r=e.match(jt);r&&r[0]===e||t.fuzzySubtypes.set(e,new RegExp(e))}))}))},e.prototype.getTypePolicy=function(e){var t=this;if(!Et.call(this.typePolicies,e)){var n=this.typePolicies[e]=Object.create(null);n.fields=Object.create(null);var i=this.supertypeMap.get(e);!i&&this.fuzzySubtypes.size&&(i=this.getSupertypeSet(e,!0),this.fuzzySubtypes.forEach((function(n,r){if(n.test(e)){var o=t.supertypeMap.get(r);o&&o.forEach((function(e){return i.add(e)}))}}))),i&&i.size&&i.forEach((function(e){var i=t.getTypePolicy(e),o=i.fields,u=(0,r._T)(i,["fields"]);Object.assign(n,u),Object.assign(n.fields,o)}))}var o=this.toBeAdded[e];return o&&o.length&&o.splice(0).forEach((function(n){t.updateTypePolicy(e,n)})),this.typePolicies[e]},e.prototype.getFieldPolicy=function(e,t,n){if(e){var r=this.getTypePolicy(e).fields;return r[t]||n&&(r[t]=Object.create(null))}},e.prototype.getSupertypeSet=function(e,t){var n=this.supertypeMap.get(e);return!n&&t&&this.supertypeMap.set(e,n=new Set),n},e.prototype.fragmentMatches=function(e,t,n,r){var o=this;if(!e.typeCondition)return!0;if(!t)return!1;var u=e.typeCondition.name.value;if(t===u)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(u))for(var a=this.getSupertypeSet(t,!0),s=[a],c=function(e){var t=o.getSupertypeSet(e,!1);t&&t.size&&s.indexOf(t)<0&&s.push(t)},l=!(!n||!this.fuzzySubtypes.size),f=!1,p=0;p<s.length;++p){var d=s[p];if(d.has(u))return a.has(u)||(f&&!1!==globalThis.__DEV__&&i.kG.warn(4,t,u),a.add(u)),!0;d.forEach(c),l&&p===s.length-1&&Nt(e.selectionSet,n,r)&&(l=!1,f=!0,this.fuzzySubtypes.forEach((function(e,n){var r=t.match(e);r&&r[0]===t&&c(n)})))}return!1},e.prototype.hasKeyArgs=function(e,t){var n=this.getFieldPolicy(e,t,!1);return!(!n||!n.keyFn)},e.prototype.getStoreFieldName=function(e){var t,n=e.typename,r=e.fieldName,i=this.getFieldPolicy(n,r,!1),o=i&&i.keyFn;if(o&&n)for(var u={typename:n,fieldName:r,field:e.field||null,variables:e.variables},a=un(e);o;){var s=o(a,u);if(!(0,G.k)(s)){t=s||r;break}o=Xt(s)}return void 0===t&&(t=e.field?(0,X.vf)(e.field,e.variables):(0,X.PT)(r,un(e))),!1===t?r:r===At(t)?t:r+":"+t},e.prototype.readField=function(e,t){var n=e.from;if(n&&(e.field||e.fieldName)){if(void 0===e.typename){var r=t.store.getFieldValue(n,"__typename");r&&(e.typename=r)}var i=this.getStoreFieldName(e),o=At(i),u=t.store.getFieldValue(n,i),a=this.getFieldPolicy(e.typename,o,!1),s=a&&a.read;if(s){var c=pn(this,n,e,t,t.store.getStorage((0,X.Yk)(n)?n.__ref:n,i));return it.withValue(this.cache,s,[u,c])}return u}},e.prototype.getReadFunction=function(e,t){var n=this.getFieldPolicy(e,t,!1);return n&&n.read},e.prototype.getMergeFunction=function(e,t,n){var r=this.getFieldPolicy(e,t,!1),i=r&&r.merge;return!i&&n&&(i=(r=this.getTypePolicy(n))&&r.merge),i},e.prototype.runMergeFunction=function(e,t,n,r,i){var o=n.field,u=n.typename,a=n.merge;return a===cn?hn(r.store)(e,t):a===ln?t:(r.overwrite&&(e=void 0),a(e,t,pn(this,void 0,{typename:u,fieldName:o.name.value,field:o,variables:r.variables},r,i||Object.create(null))))},e}();function pn(e,t,n,r,i){var o=e.getStoreFieldName(n),u=At(o),a=n.variables||r.variables,s=r.store,c=s.toReference,l=s.canRead;return{args:un(n),field:n.field||null,fieldName:u,storeFieldName:o,variables:a,isReference:X.Yk,toReference:c,storage:i,cache:e.cache,canRead:l,readField:function(){return e.readField(dn(arguments,t,a),r)},mergeObjects:hn(r.store)}}function dn(e,t,n){var o,u=e[0],a=e[1],s=e.length;return"string"==typeof u?o={fieldName:u,from:s>1?a:t}:(o=(0,r.pi)({},u),Et.call(o,"from")||(o.from=t)),!1!==globalThis.__DEV__&&void 0===o.from&&!1!==globalThis.__DEV__&&i.kG.warn(5,(0,Ht.v)(Array.from(e))),void 0===o.variables&&(o.variables=n),o}function hn(e){return function(t,n){if((0,G.k)(t)||(0,G.k)(n))throw(0,i._K)(6);if((0,z.s)(t)&&(0,z.s)(n)){var o=e.getFieldValue(t,"__typename"),u=e.getFieldValue(n,"__typename");if(o&&u&&o!==u)return n;if((0,X.Yk)(t)&&Dt(n))return e.merge(t.__ref,n),t;if(Dt(t)&&(0,X.Yk)(n))return e.merge(t,n.__ref),n;if(Dt(t)&&Dt(n))return(0,r.pi)((0,r.pi)({},t),n)}return n}}function vn(e,t,n){var i="".concat(t).concat(n),o=e.flavors.get(i);return o||e.flavors.set(i,o=e.clientOnly===t&&e.deferred===n?e:(0,r.pi)((0,r.pi)({},e),{clientOnly:t,deferred:n})),o}var yn=function(){function e(e,t,n){this.cache=e,this.reader=t,this.fragments=n}return e.prototype.writeToStore=function(e,t){var n=this,o=t.query,a=t.result,s=t.dataId,c=t.variables,l=t.overwrite,f=(0,u.$H)(o),p=new we.w0;c=(0,r.pi)((0,r.pi)({},(0,u.O4)(f)),c);var d=(0,r.pi)((0,r.pi)({store:e,written:Object.create(null),merge:function(e,t){return p.merge(e,t)},variables:c,varString:J(c)},Pt(o,this.fragments)),{overwrite:!!l,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),h=this.processSelectionSet({result:a||Object.create(null),dataId:s,selectionSet:f.selectionSet,mergeTree:{map:new Map},context:d});if(!(0,X.Yk)(h))throw(0,i._K)(9,a);return d.incomingById.forEach((function(t,r){var o=t.storeObject,u=t.mergeTree,a=t.fieldNodeSet,s=(0,X.kQ)(r);if(u&&u.map.size){var c=n.applyMerges(u,s,o,d);if((0,X.Yk)(c))return;o=c}if(!1!==globalThis.__DEV__&&!d.overwrite){var l=Object.create(null);a.forEach((function(e){e.selectionSet&&(l[e.name.value]=!0)})),Object.keys(o).forEach((function(e){(function(e){return!0===l[At(e)]})(e)&&!function(e){var t=u&&u.map.get(e);return Boolean(t&&t.info&&t.info.merge)}(e)&&function(e,t,n,r){var o=function(e){var t=r.getFieldValue(e,n);return"object"==typeof t&&t},u=o(e);if(u){var a=o(t);if(a&&!(0,X.Yk)(u)&&!(0,B.D)(u,a)&&!Object.keys(u).every((function(e){return void 0!==r.getFieldValue(a,e)}))){var s=r.getFieldValue(e,"__typename")||r.getFieldValue(t,"__typename"),c=At(n),l="".concat(s,".").concat(c);if(!On.has(l)){On.add(l);var f=[];(0,G.k)(u)||(0,G.k)(a)||[u,a].forEach((function(e){var t=r.getFieldValue(e,"__typename");"string"!=typeof t||f.includes(t)||f.push(t)})),!1!==globalThis.__DEV__&&i.kG.warn(12,c,s,f.length?"either ensure all objects of type "+f.join(" and ")+" have an ID or a custom merge function, or ":"",l,u,a)}}}}(s,o,e,d.store)}))}e.merge(r,o)})),e.retain(h.__ref),h},e.prototype.processSelectionSet=function(e){var t=this,n=e.dataId,o=e.result,u=e.selectionSet,a=e.context,s=e.mergeTree,c=this.cache.policies,l=Object.create(null),f=n&&c.rootTypenamesById[n]||(0,X.qw)(o,u,a.fragmentMap)||n&&a.store.get(n,"__typename");"string"==typeof f&&(l.__typename=f);var p=function(){var e=dn(arguments,l,a.variables);if((0,X.Yk)(e.from)){var t=a.incomingById.get(e.from.__ref);if(t){var n=c.readField((0,r.pi)((0,r.pi)({},e),{from:t.storeObject}),a);if(void 0!==n)return n}}return c.readField(e,a)},d=new Set;this.flattenFields(u,o,a,f).forEach((function(e,n){var r,u=(0,X.u2)(n),a=o[u];if(d.add(n),void 0!==a){var h=c.getStoreFieldName({typename:f,fieldName:n.name.value,field:n,variables:e.variables}),v=gn(s,h),y=t.processFieldValue(a,n,n.selectionSet?vn(e,!1,!1):e,v),m=void 0;n.selectionSet&&((0,X.Yk)(y)||Dt(y))&&(m=p("__typename",y));var g=c.getMergeFunction(f,n.name.value,m);g?v.info={field:n,typename:f,merge:g}:wn(s,h),l=e.merge(l,((r={})[h]=y,r))}else!1===globalThis.__DEV__||e.clientOnly||e.deferred||q.Gw.added(n)||c.getReadFunction(f,n.name.value)||!1!==globalThis.__DEV__&&i.kG.error(10,(0,X.u2)(n),o)}));try{var h=c.identify(o,{typename:f,selectionSet:u,fragmentMap:a.fragmentMap,storeObject:l,readField:p}),v=h[0],y=h[1];n=n||v,y&&(l=a.merge(l,y))}catch(e){if(!n)throw e}if("string"==typeof n){var m=(0,X.kQ)(n),g=a.written[n]||(a.written[n]=[]);if(g.indexOf(u)>=0)return m;if(g.push(u),this.reader&&this.reader.isFresh(o,m,u,a))return m;var b=a.incomingById.get(n);return b?(b.storeObject=a.merge(b.storeObject,l),b.mergeTree=bn(b.mergeTree,s),d.forEach((function(e){return b.fieldNodeSet.add(e)}))):a.incomingById.set(n,{storeObject:l,mergeTree:_n(s)?void 0:s,fieldNodeSet:d}),m}return l},e.prototype.processFieldValue=function(e,t,n,r){var i=this;return t.selectionSet&&null!==e?(0,G.k)(e)?e.map((function(e,o){var u=i.processFieldValue(e,t,n,gn(r,o));return wn(r,o),u})):this.processSelectionSet({result:e,selectionSet:t.selectionSet,context:n,mergeTree:r}):!1!==globalThis.__DEV__?(0,ie.X)(e):e},e.prototype.flattenFields=function(e,t,n,r){void 0===r&&(r=(0,X.qw)(t,e,n.fragmentMap));var o=new Map,u=this.cache.policies,a=new $.B(!1);return function e(s,c){var l=a.lookup(s,c.clientOnly,c.deferred);l.visited||(l.visited=!0,s.selections.forEach((function(a){if((0,d.LZ)(a,n.variables)){var s=c.clientOnly,l=c.deferred;if(s&&l||!(0,G.O)(a.directives)||a.directives.forEach((function(e){var t=e.name.value;if("client"===t&&(s=!0),"defer"===t){var r=(0,X.NC)(e,n.variables);r&&!1===r.if||(l=!0)}})),(0,X.My)(a)){var f=o.get(a);f&&(s=s&&f.clientOnly,l=l&&f.deferred),o.set(a,vn(n,s,l))}else{var p=(0,ae.hi)(a,n.lookupFragment);if(!p&&a.kind===be.h.FRAGMENT_SPREAD)throw(0,i._K)(11,a.name.value);p&&u.fragmentMatches(p,r,t,n.variables)&&e(p.selectionSet,vn(n,s,l))}}})))}(e,n),o},e.prototype.applyMerges=function(e,t,n,o,u){var a,s=this;if(e.map.size&&!(0,X.Yk)(n)){var c,l=(0,G.k)(n)||!(0,X.Yk)(t)&&!Dt(t)?void 0:t,f=n;l&&!u&&(u=[(0,X.Yk)(l)?l.__ref:l]);var p=function(e,t){return(0,G.k)(e)?"number"==typeof t?e[t]:void 0:o.store.getFieldValue(e,String(t))};e.map.forEach((function(e,t){var n=p(l,t),r=p(f,t);if(void 0!==r){u&&u.push(t);var a=s.applyMerges(e,n,r,o,u);a!==r&&(c=c||new Map).set(t,a),u&&(0,i.kG)(u.pop()===t)}})),c&&(n=(0,G.k)(f)?f.slice(0):(0,r.pi)({},f),c.forEach((function(e,t){n[t]=e})))}return e.info?this.cache.policies.runMergeFunction(t,n,e.info,o,u&&(a=o.store).getStorage.apply(a,u)):n},e}(),mn=[];function gn(e,t){var n=e.map;return n.has(t)||n.set(t,mn.pop()||{map:new Map}),n.get(t)}function bn(e,t){if(e===t||!t||_n(t))return e;if(!e||_n(e))return t;var n=e.info&&t.info?(0,r.pi)((0,r.pi)({},e.info),t.info):e.info||t.info,i=e.map.size&&t.map.size,o={info:n,map:i?new Map:e.map.size?e.map:t.map};if(i){var u=new Set(t.map.keys());e.map.forEach((function(e,n){o.map.set(n,bn(e,t.map.get(n))),u.delete(n)})),u.forEach((function(n){o.map.set(n,bn(t.map.get(n),e.map.get(n)))}))}return o}function _n(e){return!e||!(e.info||e.map.size)}function wn(e,t){var n=e.map,r=n.get(t);r&&_n(r)&&(mn.push(r),n.delete(t))}var On=new Set,kn=function(e){function t(t){void 0===t&&(t={});var n=e.call(this)||this;return n.watches=new Set,n.addTypenameTransform=new K.A(q.Gw),n.assumeImmutableResults=!0,n.makeVar=st,n.txCount=0,n.config=function(e){return(0,re.o)(xt,e)}(t),n.addTypename=!!n.config.addTypename,n.policies=new fn({cache:n,dataIdFromObject:n.config.dataIdFromObject,possibleTypes:n.config.possibleTypes,typePolicies:n.config.typePolicies}),n.init(),n}return(0,r.ZT)(t,e),t.prototype.init=function(){var e=this.data=new Lt.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=e.stump,this.resetResultCache()},t.prototype.resetResultCache=function(e){var t=this,n=this.storeReader,r=this.config.fragments;this.storeWriter=new yn(this,this.storeReader=new Wt({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:It(this.config),canon:e?void 0:n&&n.canon,fragments:r}),r),this.maybeBroadcastWatch=rt((function(e,n){return t.broadcastWatch(e,n)}),{max:this.config.resultCacheMaxSize,makeCacheKey:function(e){var n=e.optimistic?t.optimisticData:t.data;if(zt(n)){var r=e.optimistic,i=e.id,o=e.variables;return n.makeCacheKey(e.query,e.callback,J({optimistic:r,id:i,variables:o}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach((function(e){return e.resetCaching()}))},t.prototype.restore=function(e){return this.init(),e&&this.data.replace(e),this},t.prototype.extract=function(e){return void 0===e&&(e=!1),(e?this.optimisticData:this.data).extract()},t.prototype.read=function(e){var t=e.returnPartialData,n=void 0!==t&&t;try{return this.storeReader.diffQueryAgainstStore((0,r.pi)((0,r.pi)({},e),{store:e.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:n})).result||null}catch(e){if(e instanceof kt)return null;throw e}},t.prototype.write=function(e){try{return++this.txCount,this.storeWriter.writeToStore(this.data,e)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.modify=function(e){if(Et.call(e,"id")&&!e.id)return!1;var t=e.optimistic?this.optimisticData:this.data;try{return++this.txCount,t.modify(e.id||"ROOT_QUERY",e.fields)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.diff=function(e){return this.storeReader.diffQueryAgainstStore((0,r.pi)((0,r.pi)({},e),{store:e.optimistic?this.optimisticData:this.data,rootId:e.id||"ROOT_QUERY",config:this.config}))},t.prototype.watch=function(e){var t,n=this;return this.watches.size||ut(t=this).vars.forEach((function(e){return e.attachCache(t)})),this.watches.add(e),e.immediate&&this.maybeBroadcastWatch(e),function(){n.watches.delete(e)&&!n.watches.size&&at(n),n.maybeBroadcastWatch.forget(e)}},t.prototype.gc=function(e){J.reset();var t=this.optimisticData.gc();return e&&!this.txCount&&(e.resetResultCache?this.resetResultCache(e.resetResultIdentities):e.resetResultIdentities&&this.storeReader.resetCanon()),t},t.prototype.retain=function(e,t){return(t?this.optimisticData:this.data).retain(e)},t.prototype.release=function(e,t){return(t?this.optimisticData:this.data).release(e)},t.prototype.identify=function(e){if((0,X.Yk)(e))return e.__ref;try{return this.policies.identify(e)[0]}catch(e){!1!==globalThis.__DEV__&&i.kG.warn(e)}},t.prototype.evict=function(e){if(!e.id){if(Et.call(e,"id"))return!1;e=(0,r.pi)((0,r.pi)({},e),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(e,this.data)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.reset=function(e){var t=this;return this.init(),J.reset(),e&&e.discardWatches?(this.watches.forEach((function(e){return t.maybeBroadcastWatch.forget(e)})),this.watches.clear(),at(this)):this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(e){var t=this.optimisticData.removeLayer(e);t!==this.optimisticData&&(this.optimisticData=t,this.broadcastWatches())},t.prototype.batch=function(e){var t,n=this,i=e.update,o=e.optimistic,u=void 0===o||o,a=e.removeOptimistic,s=e.onWatchUpdated,c=function(e){var r=n,o=r.data,u=r.optimisticData;++n.txCount,e&&(n.data=n.optimisticData=e);try{return t=i(n)}finally{--n.txCount,n.data=o,n.optimisticData=u}},l=new Set;return s&&!this.txCount&&this.broadcastWatches((0,r.pi)((0,r.pi)({},e),{onWatchUpdated:function(e){return l.add(e),!1}})),"string"==typeof u?this.optimisticData=this.optimisticData.addLayer(u,c):!1===u?c(this.data):c(),"string"==typeof a&&(this.optimisticData=this.optimisticData.removeLayer(a)),s&&l.size?(this.broadcastWatches((0,r.pi)((0,r.pi)({},e),{onWatchUpdated:function(e,t){var n=s.call(this,e,t);return!1!==n&&l.delete(e),n}})),l.size&&l.forEach((function(e){return n.maybeBroadcastWatch.dirty(e)}))):this.broadcastWatches(e),t},t.prototype.performTransaction=function(e,t){return this.batch({update:e,optimistic:t||null!==t})},t.prototype.transformDocument=function(e){return this.addTypenameToDocument(this.addFragmentsToDocument(e))},t.prototype.broadcastWatches=function(e){var t=this;this.txCount||this.watches.forEach((function(n){return t.maybeBroadcastWatch(n,e)}))},t.prototype.addFragmentsToDocument=function(e){var t=this.config.fragments;return t?t.transform(e):e},t.prototype.addTypenameToDocument=function(e){return this.addTypename?this.addTypenameTransform.transformDocument(e):e},t.prototype.broadcastWatch=function(e,t){var n=e.lastDiff,r=this.diff(e);t&&(e.optimistic&&"string"==typeof t.optimistic&&(r.fromOptimisticTransaction=!0),t.onWatchUpdated&&!1===t.onWatchUpdated.call(this,e,r,n))||n&&(0,B.D)(n.result,r.result)||e.callback(e.lastDiff=r,n)},t}(Ot),Tn=l.empty,En=l.from,Sn=l.split,Cn=l.concat,xn=function(){if("undefined"==typeof AbortController)return{controller:!1,signal:!1};var e=new AbortController;return{controller:e,signal:e.signal}};function In(e){var t=!1;return new Promise((function(n,r){e.subscribe({next:function(e){t?!1!==globalThis.__DEV__&&i.kG.warn(40):(t=!0,n(e))},error:r})}))}function jn(e){return new o.y((function(t){e.then((function(e){t.next(e),t.complete()})).catch(t.error.bind(t))}))}var An=n(6128),Nn=n(9430);(0,An.U6)(!1!==globalThis.__DEV__?"log":"silent");var Dn=n(7294),Pn=n.t(Dn,2),Rn=n(5317),Fn=function(e){var t=e.client,n=e.children,o=(0,Rn.K)(),u=Dn.useContext(o),a=Dn.useMemo((function(){return(0,r.pi)((0,r.pi)({},u),{client:t||u.client})}),[u,t]);return(0,i.kG)(a.client,44),Dn.createElement(o.Provider,{value:a},n)},Mn=function(e){var t=(0,Rn.K)();return Dn.createElement(t.Consumer,null,(function(t){return(0,i.kG)(t&&t.client,42),e.children(t.client)}))},Ln=n(6252),qn=n(1641),Vn=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function Qn(e,t){var n,i=Dn.useRef(),o=Dn.useRef(),u=Dn.useRef(),a=(0,bt.J)(t,i.current||{}),s=null!==(n=null==a?void 0:a.query)&&void 0!==n?n:e;o.current=a,u.current=s;var c=(0,qn.A)((0,Ln.x)(t&&t.client),s),l=c.useQuery((0,r.pi)((0,r.pi)({},a),{skip:!i.current})),f=l.observable.options.initialFetchPolicy||c.getDefaultFetchPolicy(),p=Object.assign(l,{called:!!i.current}),d=Dn.useMemo((function(){for(var e={},t=function(t){var n=p[t];e[t]=function(){return i.current||(i.current=Object.create(null),c.forceUpdateState()),n.apply(this,arguments)}},n=0,r=Vn;n<r.length;n++)t(r[n]);return e}),[]);Object.assign(p,d);var h=Dn.useCallback((function(e){i.current=e?(0,r.pi)((0,r.pi)({},e),{fetchPolicy:e.fetchPolicy||f}):{fetchPolicy:f};var t=(0,bt.J)(o.current,(0,r.pi)({query:u.current},i.current)),n=c.executeQuery((0,r.pi)((0,r.pi)({},t),{skip:!1})).then((function(e){return Object.assign(e,d)}));return n.catch((function(){})),n}),[]);return[h,p]}var Un=n(4692);function Bn(e,t){var n=(0,Ln.x)(null==t?void 0:t.client);(0,Un.Vp)(e,Un.n_.Mutation);var i=Dn.useState({called:!1,loading:!1,client:n}),o=i[0],u=i[1],a=Dn.useRef({result:o,mutationId:0,isMounted:!0,client:n,mutation:e,options:t});Object.assign(a.current,{client:n,options:t,mutation:e});var s=Dn.useCallback((function(e){void 0===e&&(e={});var t=a.current,n=t.options,i=t.mutation,o=(0,r.pi)((0,r.pi)({},n),{mutation:i}),s=e.client||a.current.client;a.current.result.loading||o.ignoreResults||!a.current.isMounted||u(a.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:s});var c=++a.current.mutationId,l=(0,bt.J)(o,e);return s.mutate(l).then((function(t){var n,r,i=t.data,o=t.errors,f=o&&o.length>0?new w.cA({graphQLErrors:o}):void 0,p=e.onError||(null===(n=a.current.options)||void 0===n?void 0:n.onError);if(f&&p&&p(f,l),c===a.current.mutationId&&!l.ignoreResults){var d={called:!0,loading:!1,data:i,error:f,client:s};a.current.isMounted&&!(0,B.D)(a.current.result,d)&&u(a.current.result=d)}var h=e.onCompleted||(null===(r=a.current.options)||void 0===r?void 0:r.onCompleted);return f||null==h||h(t.data,l),t})).catch((function(t){var n;if(c===a.current.mutationId&&a.current.isMounted){var r={loading:!1,error:t,data:void 0,called:!0,client:s};(0,B.D)(a.current.result,r)||u(a.current.result=r)}var i=e.onError||(null===(n=a.current.options)||void 0===n?void 0:n.onError);if(i)return i(t,l),{data:void 0,errors:t};throw t}))}),[]),c=Dn.useCallback((function(){a.current.isMounted&&u({called:!1,loading:!1,client:n})}),[]);return Dn.useEffect((function(){return a.current.isMounted=!0,function(){a.current.isMounted=!1}}),[]),[s,(0,r.pi)({reset:c},o)]}var $n=n(5436);function zn(e){var t=e(),n=Dn.useState(t)[1];return Dn.useEffect((function(){var r=e();if(t===r)return e.onNextChange(n);n(r)}),[t]),t}var Gn=n(9564);function Wn(e){var t=(0,Ln.x)().cache,n=e.fragment,i=e.fragmentName,o=e.from,u=e.optimistic,a=void 0===u||u,s=(0,r._T)(e,["fragment","fragmentName","from","optimistic"]),c=(0,r.pi)((0,r.pi)({},s),{returnPartialData:!0,id:"string"==typeof o?o:t.identify(o),query:t.getFragmentDoc(n,i),optimistic:a}),l=Dn.useRef(),f=t.diff(c),p=function(){var e=Jn(f);return l.current&&(0,B.D)(l.current.data,e.data)?l.current:l.current=e};return(0,Gn.$)((function(e){var n=0,i=t.watch((0,r.pi)((0,r.pi)({},c),{immediate:!0,callback:function(t){(0,B.D)(t,f)||(l.current=Jn(f=t),n=setTimeout(e))}}));return function(){i(),clearTimeout(n)}}),p,p)}function Jn(e){var t={data:e.result,complete:!!e.complete};return e.missing&&(t.missing=(0,we.bw)(e.missing.map((function(e){return e.missing})))),t}var Hn=n(1704),Kn=Pn.use||function(e){var t=(0,Hn.Bd)(e);switch(t.status){case"pending":throw t;case"rejected":throw t.reason;case"fulfilled":return t.value}},Yn=Symbol(),Zn=["canonizeResults","context","errorPolicy","fetchPolicy","refetchWritePolicy","returnPartialData"],Xn=function(){function e(e,t){var n,r=this;this.listeners=new Set,this.status="loading",this.references=0,this.handleNext=this.handleNext.bind(this),this.handleError=this.handleError.bind(this),this.dispose=this.dispose.bind(this),this.observable=e,this.result=e.getCurrentResult(!1),this.key=t.key,t.onDispose&&(this.onDispose=t.onDispose),(0,ne.Jp)(this.result.networkStatus)||this.result.data&&(!this.result.partial||this.watchQueryOptions.returnPartialData)?(this.promise=(0,Hn.OP)(this.result),this.status="idle"):this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t})),this.subscription=e.filter((function(e){var t=e.data;return!(0,B.D)(t,{})})).subscribe({next:this.handleNext,error:this.handleError}),this.autoDisposeTimeoutId=setTimeout(this.dispose,null!==(n=t.autoDisposeTimeoutMs)&&void 0!==n?n:3e4)}return Object.defineProperty(e.prototype,"watchQueryOptions",{get:function(){return this.observable.options},enumerable:!1,configurable:!0}),e.prototype.retain=function(){var e=this;this.references++,clearTimeout(this.autoDisposeTimeoutId);var t=!1;return function(){t||(t=!0,e.references--,setTimeout((function(){e.references||e.dispose()})))}},e.prototype.didChangeOptions=function(e){var t=this;return Zn.some((function(n){return!(0,B.D)(t.watchQueryOptions[n],e[n])}))},e.prototype.applyOptions=function(e){var t=this.watchQueryOptions,n=t.fetchPolicy,i=t.canonizeResults;return"standby"===n&&n!==e.fetchPolicy?this.initiateFetch(this.observable.reobserve(e)):(this.observable.silentSetOptions(e),i!==e.canonizeResults&&(this.result=(0,r.pi)((0,r.pi)({},this.result),this.observable.getCurrentResult()),this.promise=(0,Hn.OP)(this.result))),this.promise},e.prototype.listen=function(e){var t=this;return this.listeners.add(e),function(){t.listeners.delete(e)}},e.prototype.refetch=function(e){return this.initiateFetch(this.observable.refetch(e))},e.prototype.fetchMore=function(e){return this.initiateFetch(this.observable.fetchMore(e))},e.prototype.dispose=function(){this.subscription.unsubscribe(),this.onDispose()},e.prototype.onDispose=function(){},e.prototype.handleNext=function(e){var t;switch(this.status){case"loading":void 0===e.data&&(e.data=this.result.data),this.status="idle",this.result=e,null===(t=this.resolve)||void 0===t||t.call(this,e);break;case"idle":if(e.data===this.result.data)return;void 0===e.data&&(e.data=this.result.data),this.result=e,this.promise=(0,Hn.OP)(e),this.deliver(this.promise)}},e.prototype.handleError=function(e){var t;switch(this.status){case"loading":this.status="idle",null===(t=this.reject)||void 0===t||t.call(this,e);break;case"idle":this.promise=(0,Hn.Ld)(e),this.deliver(this.promise)}},e.prototype.deliver=function(e){this.listeners.forEach((function(t){return t(e)}))},e.prototype.initiateFetch=function(e){var t=this;return this.status="loading",this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n})),this.promise.catch((function(){})),e.then((function(e){var n;"loading"===t.status&&(t.status="idle",t.result=e,null===(n=t.resolve)||void 0===n||n.call(t,e))})).catch((function(){})),e},e}(),er=function(){function e(e){void 0===e&&(e=Object.create(null)),this.queryRefs=new $.B(m.mr),this.options=e}return e.prototype.getQueryRef=function(e,t){var n=this.queryRefs.lookupArray(e);return n.current||(n.current=new Xn(t(),{key:e,autoDisposeTimeoutMs:this.options.autoDisposeTimeoutMs,onDispose:function(){delete n.current}})),n.current},e}(),tr=Symbol.for("apollo.suspenseCache");function nr(e){var t;return e[tr]||(e[tr]=new er(null===(t=e.defaultOptions.react)||void 0===t?void 0:t.suspense)),e[tr]}var rr=Symbol.for("apollo.skipToken");function ir(e,t){void 0===t&&(t=Object.create(null));var n=(0,Ln.x)(t.client),i=nr(n),o=ur({client:n,query:e,options:t}),u=o.fetchPolicy,a=o.variables,s=t.queryKey,c=void 0===s?[]:s,l=(0,r.ev)([e,J(a)],[].concat(c),!0),f=i.getQueryRef(l,(function(){return n.watchQuery(o)})),p=Dn.useState((function(){return new Map([[f.key,f.promise]])})),d=p[0],h=p[1],v=d.get(f.key);f.didChangeOptions(o)&&(v=f.applyOptions(o),d.set(f.key,v)),v||(v=f.promise,d.set(f.key,v)),Dn.useEffect((function(){var e=f.retain(),t=f.listen((function(e){h((function(t){return new Map(t).set(f.key,e)}))}));return function(){t(),e()}}),[f]);var y=Dn.useMemo((function(){var e=or(f.result);return{loading:!1,data:f.result.data,networkStatus:e?ne.Ie.error:ne.Ie.ready,error:e}}),[f.result]),m="standby"===u?y:Kn(v),g=Dn.useCallback((function(e){var t=f.fetchMore(e);return h((function(e){return new Map(e).set(f.key,f.promise)})),t}),[f]),b=Dn.useCallback((function(e){var t=f.refetch(e);return h((function(e){return new Map(e).set(f.key,f.promise)})),t}),[f]),_=Dn.useCallback((function(e){return f.observable.subscribeToMore(e)}),[f]);return Dn.useMemo((function(){return{client:n,data:m.data,error:or(m),networkStatus:m.networkStatus,fetchMore:g,refetch:b,subscribeToMore:_}}),[n,g,b,m,_])}function or(e){return(0,G.O)(e.errors)?new w.cA({graphQLErrors:e.errors}):e.error}function ur(e){var t,n,o,u=e.client,a=e.query,s=e.options;return t=function(){var e;if(s===rr)return{query:a,fetchPolicy:"standby"};var t=s.fetchPolicy||(null===(e=u.defaultOptions.watchQuery)||void 0===e?void 0:e.fetchPolicy)||"cache-first",n=(0,r.pi)((0,r.pi)({},s),{fetchPolicy:t,query:a,notifyOnNetworkStatusChange:!1,nextFetchPolicy:void 0});return!1!==globalThis.__DEV__&&function(e){var t=e.query,n=e.fetchPolicy,r=e.returnPartialData;(0,Un.Vp)(t,Un.n_.Query),function(e){void 0===e&&(e="cache-first"),(0,i.kG)(["cache-first","network-only","no-cache","cache-and-network"].includes(e),54,e)}(n),function(e,t){"no-cache"===e&&t&&!1!==globalThis.__DEV__&&i.kG.warn(55)}(n,r)}(n),s.skip&&(n.fetchPolicy="standby"),n},n=[u,s,a],(o=Dn.useRef()).current&&(0,B.D)(o.current.deps,n)||(o.current={value:t(),deps:n}),o.current.value}function ar(e,t){void 0===t&&(t=Object.create(null));var n=(0,Ln.x)(t.client),i=nr(n),o=ur({client:n,query:e,options:t}),u=o.fetchPolicy,a=o.variables,s=t.queryKey,c=void 0===s?[]:s,l=Dn.useRef("standby"!==u);l.current||(l.current="standby"!==u);var f=(0,r.ev)([e,J(a)],[].concat(c),!0),p=i.getQueryRef(f,(function(){return n.watchQuery(o)})),d=Dn.useState((function(){return new Map([[p.key,p.promise]])})),h=d[0],v=d[1];if(p.didChangeOptions(o)){var y=p.applyOptions(o);h.set(p.key,y)}Dn.useEffect((function(){return p.retain()}),[p]);var m=Dn.useCallback((function(e){var t=p.fetchMore(e);return v((function(e){return new Map(e).set(p.key,p.promise)})),t}),[p]),g=Dn.useCallback((function(e){var t=p.refetch(e);return v((function(e){return new Map(e).set(p.key,p.promise)})),t}),[p]);p.promiseCache=h;var b=Dn.useMemo((function(){return function(e){var t;return(t={})[Yn]=e,t}(p)}),[p]);return[l.current?b:void 0,{fetchMore:m,refetch:g}]}function sr(e){var t=function(e){return e[Yn]}(e);(0,i.kG)(t.promiseCache,49);var n=t.promiseCache,r=t.key;n.has(r)||n.set(r,t.promise);var o=(0,Gn.$)(Dn.useCallback((function(e){return t.listen((function(n){t.promiseCache.set(t.key,n),e()}))}),[t]),(function(){return n.get(r)}),(function(){return n.get(r)})),u=Kn(o);return Dn.useMemo((function(){return{data:u.data,networkStatus:u.networkStatus,error:or(u)}}),[u])}var cr=function(e){function t(){throw e.call(this),new Error("It is no longer necessary to create a `SuspenseCache` instance and pass it into the `ApolloProvider`.\nPlease remove this code from your application. \n\nThis export will be removed with the final 3.8 release.")}return(0,r.ZT)(t,e),t}(er)},5317:function(e,t,n){"use strict";n.d(t,{K:function(){return a},Z:function(){return s}});var r=n(7294),i=n(320),o=n(6961),u=i.aS?Symbol.for("__APOLLO_CONTEXT__"):"__APOLLO_CONTEXT__";function a(){(0,o.kG)(!0,43);var e=r.createContext[u];return e||(Object.defineProperty(r.createContext,u,{value:e=r.createContext({}),enumerable:!1,writable:!1,configurable:!0}),e.displayName="ApolloContext"),e}var s=a},6252:function(e,t,n){"use strict";n.d(t,{x:function(){return u}});var r=n(6961),i=n(7294),o=n(5317);function u(e){var t=i.useContext((0,o.K)()),n=e||t.client;return(0,r.kG)(!!n,47),n}},1641:function(e,t,n){"use strict";n.d(t,{A:function(){return _},a:function(){return b}});var r=n(655),i=n(6961),o=n(7294),u=n(9564),a=n(20),s=n(4012),c=n(5317),l=n(990),f=n(1644),p=n(4692),d=n(6252),h=n(8702),v=n(320),y=n(3712),m=n(1436),g=Object.prototype.hasOwnProperty;function b(e,t){return void 0===t&&(t=Object.create(null)),_((0,d.x)(t.client),e).useQuery(t)}function _(e,t){var n=o.useRef();n.current&&e===n.current.client&&t===n.current.query||(n.current=new w(e,t,n.current));var r=n.current;return r.forceUpdateState=o.useReducer((function(e){return e+1}),0)[1],r}var w=function(){function e(e,t,n){var r=this;this.client=e,this.query=t,this.forceUpdate=function(){return r.forceUpdateState()},this.ssrDisabledResult=(0,h.J)({loading:!0,data:void 0,error:void 0,networkStatus:f.Ie.loading}),this.skipStandbyResult=(0,h.J)({loading:!1,data:void 0,error:void 0,networkStatus:f.Ie.ready}),this.toQueryResultCache=new(v.mr?WeakMap:Map),(0,p.Vp)(t,p.n_.Query);var i=n&&n.result,o=i&&i.data;o&&(this.previousData=o)}return e.prototype.forceUpdateState=function(){!1!==globalThis.__DEV__&&i.kG.warn(48)},e.prototype.executeQuery=function(e){var t,n=this;e.query&&Object.assign(this,{query:e.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=e);var r=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=(null===(t=this.result)||void 0===t?void 0:t.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise((function(e){var t;r.subscribe({next:function(e){t=e},error:function(){e(n.toQueryResult(n.observable.getCurrentResult()))},complete:function(){e(n.toQueryResult(t))}})}))},e.prototype.useQuery=function(e){var t=this;this.renderPromises=o.useContext((0,c.K)()).renderPromises,this.useOptions(e);var n=this.useObservableQuery(),r=(0,u.$)(o.useCallback((function(e){if(t.renderPromises)return function(){};t.forceUpdate=e;var r=function(){var e=t.result,r=n.getCurrentResult();e&&e.loading===r.loading&&e.networkStatus===r.networkStatus&&(0,a.D)(e.data,r.data)||t.setResult(r)},i=function(e){var u=n.last;o.unsubscribe();try{n.resetLastResults(),o=n.subscribe(r,i)}finally{n.last=u}if(!g.call(e,"graphQLErrors"))throw e;var s=t.result;(!s||s&&s.loading||!(0,a.D)(e,s.error))&&t.setResult({data:s&&s.data,error:e,loading:!1,networkStatus:f.Ie.error})},o=n.subscribe(r,i);return function(){setTimeout((function(){return o.unsubscribe()})),t.forceUpdate=function(){return t.forceUpdateState()}}}),[n,this.renderPromises,this.client.disableNetworkFetches]),(function(){return t.getCurrentResult()}),(function(){return t.getCurrentResult()}));return this.unsafeHandlePartialRefetch(r),this.toQueryResult(r)},e.prototype.useOptions=function(t){var n,r=this.createWatchQueryOptions(this.queryHookOptions=t),i=this.watchQueryOptions;(0,a.D)(r,i)||(this.watchQueryOptions=r,i&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(n=this.result)||void 0===n?void 0:n.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||e.prototype.onCompleted,this.onError=t.onError||e.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},e.prototype.getObsQueryOptions=function(){var e=[],t=this.client.defaultOptions.watchQuery;return t&&e.push(t),this.queryHookOptions.defaultOptions&&e.push(this.queryHookOptions.defaultOptions),e.push((0,y.o)(this.observable&&this.observable.options,this.watchQueryOptions)),e.reduce(s.J)},e.prototype.createWatchQueryOptions=function(e){var t;void 0===e&&(e={});var n=e.skip,i=(e.ssr,e.onCompleted,e.onError,e.defaultOptions,(0,r._T)(e,["skip","ssr","onCompleted","onError","defaultOptions"])),o=Object.assign(i,{query:this.query});if(!this.renderPromises||"network-only"!==o.fetchPolicy&&"cache-and-network"!==o.fetchPolicy||(o.fetchPolicy="cache-first"),o.variables||(o.variables={}),n){var u=o.fetchPolicy,a=void 0===u?this.getDefaultFetchPolicy():u,s=o.initialFetchPolicy,c=void 0===s?a:s;Object.assign(o,{initialFetchPolicy:c,fetchPolicy:"standby"})}else o.fetchPolicy||(o.fetchPolicy=(null===(t=this.observable)||void 0===t?void 0:t.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return o},e.prototype.getDefaultFetchPolicy=function(){var e,t;return(null===(e=this.queryHookOptions.defaultOptions)||void 0===e?void 0:e.fetchPolicy)||(null===(t=this.client.defaultOptions.watchQuery)||void 0===t?void 0:t.fetchPolicy)||"cache-first"},e.prototype.onCompleted=function(e){},e.prototype.onError=function(e){},e.prototype.useObservableQuery=function(){var e=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=o.useMemo((function(){return{refetch:e.refetch.bind(e),reobserve:e.reobserve.bind(e),fetchMore:e.fetchMore.bind(e),updateQuery:e.updateQuery.bind(e),startPolling:e.startPolling.bind(e),stopPolling:e.stopPolling.bind(e),subscribeToMore:e.subscribeToMore.bind(e)}}),[e]);var t=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&t&&(this.renderPromises.registerSSRObservable(e),e.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(e)),e},e.prototype.setResult=function(e){var t=this.result;t&&t.data&&(this.previousData=t.data),this.result=e,this.forceUpdate(),this.handleErrorOrCompleted(e,t)},e.prototype.handleErrorOrCompleted=function(e,t){var n=this;if(!e.loading){var r=this.toApolloError(e);Promise.resolve().then((function(){r?n.onError(r):e.data&&(null==t?void 0:t.networkStatus)!==e.networkStatus&&e.networkStatus===f.Ie.ready&&n.onCompleted(e.data)})).catch((function(e){!1!==globalThis.__DEV__&&i.kG.warn(e)}))}},e.prototype.toApolloError=function(e){return(0,m.O)(e.errors)?new l.cA({graphQLErrors:e.errors}):e.error},e.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},e.prototype.toQueryResult=function(e){var t=this.toQueryResultCache.get(e);if(t)return t;var n=e.data,i=(e.partial,(0,r._T)(e,["data","partial"]));return this.toQueryResultCache.set(e,t=(0,r.pi)((0,r.pi)((0,r.pi)({data:n},i),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!t.error&&(0,m.O)(e.errors)&&(t.error=new l.cA({graphQLErrors:e.errors})),t},e.prototype.unsafeHandlePartialRefetch=function(e){!e.partial||!this.queryHookOptions.partialRefetch||e.loading||e.data&&0!==Object.keys(e.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(e,{loading:!0,networkStatus:f.Ie.refetch}),this.observable.refetch())},e}()},5436:function(e,t,n){"use strict";n.d(t,{m:function(){return s}});var r=n(6961),i=n(7294),o=n(20),u=n(4692),a=n(6252);function s(e,t){var n=i.useRef(!1),s=(0,a.x)(null==t?void 0:t.client);(0,u.Vp)(e,u.n_.Subscription);var c=i.useState({loading:!(null==t?void 0:t.skip),error:void 0,data:void 0,variables:null==t?void 0:t.variables}),l=c[0],f=c[1];n.current||(n.current=!0,(null==t?void 0:t.onSubscriptionData)&&!1!==globalThis.__DEV__&&r.kG.warn(t.onData?50:51),(null==t?void 0:t.onSubscriptionComplete)&&!1!==globalThis.__DEV__&&r.kG.warn(t.onComplete?52:53));var p=i.useState((function(){return(null==t?void 0:t.skip)?null:s.subscribe({query:e,variables:null==t?void 0:t.variables,fetchPolicy:null==t?void 0:t.fetchPolicy,context:null==t?void 0:t.context})})),d=p[0],h=p[1],v=i.useRef(!1);i.useEffect((function(){return function(){v.current=!0}}),[]);var y=i.useRef({client:s,subscription:e,options:t});return i.useEffect((function(){var n,r,i,u,a=null==t?void 0:t.shouldResubscribe;"function"==typeof a&&(a=!!a(t)),(null==t?void 0:t.skip)?(!(null==t?void 0:t.skip)!=!(null===(n=y.current.options)||void 0===n?void 0:n.skip)||v.current)&&(f({loading:!1,data:void 0,error:void 0,variables:null==t?void 0:t.variables}),h(null),v.current=!1):(!1===a||s===y.current.client&&e===y.current.subscription&&(null==t?void 0:t.fetchPolicy)===(null===(r=y.current.options)||void 0===r?void 0:r.fetchPolicy)&&!(null==t?void 0:t.skip)==!(null===(i=y.current.options)||void 0===i?void 0:i.skip)&&(0,o.D)(null==t?void 0:t.variables,null===(u=y.current.options)||void 0===u?void 0:u.variables))&&!v.current||(f({loading:!0,data:void 0,error:void 0,variables:null==t?void 0:t.variables}),h(s.subscribe({query:e,variables:null==t?void 0:t.variables,fetchPolicy:null==t?void 0:t.fetchPolicy,context:null==t?void 0:t.context})),v.current=!1),Object.assign(y.current,{client:s,subscription:e,options:t})}),[s,e,t,v.current]),i.useEffect((function(){if(d){var e=!1,n=d.subscribe({next:function(n){var r,i;if(!e){var o={loading:!1,data:n.data,error:void 0,variables:null==t?void 0:t.variables};f(o),(null===(r=y.current.options)||void 0===r?void 0:r.onData)?y.current.options.onData({client:s,data:o}):(null===(i=y.current.options)||void 0===i?void 0:i.onSubscriptionData)&&y.current.options.onSubscriptionData({client:s,subscriptionData:o})}},error:function(n){var r,i;e||(f({loading:!1,data:void 0,error:n,variables:null==t?void 0:t.variables}),null===(i=null===(r=y.current.options)||void 0===r?void 0:r.onError)||void 0===i||i.call(r,n))},complete:function(){var t,n;e||((null===(t=y.current.options)||void 0===t?void 0:t.onComplete)?y.current.options.onComplete():(null===(n=y.current.options)||void 0===n?void 0:n.onSubscriptionComplete)&&y.current.options.onSubscriptionComplete())}});return function(){e=!0,setTimeout((function(){n.unsubscribe()}))}}}),[d]),l}},9564:function(e,t,n){"use strict";var r;n.d(t,{$:function(){return s}});var i=n(6961),o=n(7294),u=n(320),a=!1,s=(r||(r=n.t(o,2))).useSyncExternalStore||function(e,t,n){var r=t();!1===globalThis.__DEV__||a||r===t()||(a=!0,!1!==globalThis.__DEV__&&i.kG.error(56));var s=o.useState({inst:{value:r,getSnapshot:t}}),l=s[0].inst,f=s[1];return u.JC?o.useLayoutEffect((function(){Object.assign(l,{value:r,getSnapshot:t}),c(l)&&f({inst:l})}),[e,r,t]):Object.assign(l,{value:r,getSnapshot:t}),o.useEffect((function(){return c(l)&&f({inst:l}),e((function(){c(l)&&f({inst:l})}))}),[e]),r};function c(e){var t=e.value,n=e.getSnapshot;try{return t!==n()}catch(e){return!0}}},4692:function(e,t,n){"use strict";n.d(t,{E2:function(){return a},Vp:function(){return s},mw:function(){return u},n_:function(){return r}});var r,i=n(6961);!function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"}(r||(r={}));var o=new Map;function u(e){var t;switch(e){case r.Query:t="Query";break;case r.Mutation:t="Mutation";break;case r.Subscription:t="Subscription"}return t}function a(e){var t,n,u=o.get(e);if(u)return u;(0,i.kG)(!!e&&!!e.kind,57,e);for(var a=[],s=[],c=[],l=[],f=0,p=e.definitions;f<p.length;f++){var d=p[f];if("FragmentDefinition"!==d.kind){if("OperationDefinition"===d.kind)switch(d.operation){case"query":s.push(d);break;case"mutation":c.push(d);break;case"subscription":l.push(d)}}else a.push(d)}(0,i.kG)(!a.length||s.length||c.length||l.length,58),(0,i.kG)(s.length+c.length+l.length<=1,59,e,s.length,l.length,c.length),n=s.length?r.Query:r.Mutation,s.length||c.length||(n=r.Subscription);var h=s.length?s:c.length?c:l;(0,i.kG)(1===h.length,60,e,h.length);var v=h[0];t=v.variableDefinitions||[];var y={name:v.name&&"Name"===v.name.kind?v.name.value:"data",type:n,variables:t};return o.set(e,y),y}function s(e,t){var n=a(e),r=u(t),o=u(n.type);(0,i.kG)(n.type===t,61,r,r,o)}},1436:function(e,t,n){"use strict";n.d(t,{O:function(){return i},k:function(){return r}});var r=Array.isArray;function i(e){return Array.isArray(e)&&e.length>0}},320:function(e,t,n){"use strict";n.d(t,{DN:function(){return a},JC:function(){return l},Nq:function(){return s},aS:function(){return u},mr:function(){return i},sy:function(){return o}});var r=n(6961),i="function"==typeof WeakMap&&"ReactNative"!==(0,r.wY)((function(){return navigator.product})),o="function"==typeof WeakSet,u="function"==typeof Symbol&&"function"==typeof Symbol.for,a=u&&Symbol.asyncIterator,s="function"==typeof(0,r.wY)((function(){return window.document.createElement})),c=(0,r.wY)((function(){return navigator.userAgent.indexOf("jsdom")>=0}))||!1,l=s&&!c},9487:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var r=Object.prototype.toString;function i(e){return o(e)}function o(e,t){switch(r.call(e)){case"[object Array]":if((t=t||new Map).has(e))return t.get(e);var n=e.slice(0);return t.set(e,n),n.forEach((function(e,r){n[r]=o(e,t)})),n;case"[object Object]":if((t=t||new Map).has(e))return t.get(e);var i=Object.create(Object.getPrototypeOf(e));return t.set(e,i),Object.keys(e).forEach((function(n){i[n]=o(e[n],t)})),i;default:return e}}},3712:function(e,t,n){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Object.create(null);return e.forEach((function(e){e&&Object.keys(e).forEach((function(t){var r=e[t];void 0!==r&&(n[t]=r)}))})),n}n.d(t,{o:function(){return r}})},9383:function(e,t,n){"use strict";n.d(t,{K:function(){return u},d:function(){return o}});var r=n(1436),i=n(7280);function o(e){var t=u(e);return(0,r.O)(t)}function u(e){var t=(0,r.O)(e.errors)?e.errors.slice(0):[];return(0,i.GG)(e)&&(0,r.O)(e.incremental)&&e.incremental.forEach((function(e){e.errors&&t.push.apply(t,e.errors)})),t}},7280:function(e,t,n){"use strict";n.d(t,{GG:function(){return u},M0:function(){return s},mT:function(){return l},x3:function(){return a},yU:function(){return c}});var r=n(3154),i=n(1436),o=n(182);function u(e){return"incremental"in e}function a(e){return"hasNext"in e&&"data"in e}function s(e){return u(e)||a(e)}function c(e){return(0,r.s)(e)&&"payload"in e}function l(e,t){var n=e,r=new o.w0;return u(t)&&(0,i.O)(t.incremental)&&t.incremental.forEach((function(e){for(var t=e.data,i=e.path,o=i.length-1;o>=0;--o){var u=i[o],a=isNaN(+u)?{}:[];a[u]=t,t=a}n=r.merge(n,t)})),n}},897:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var r=new Map;function i(e){var t=r.get(e)||1;return r.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}},8702:function(e,t,n){"use strict";n.d(t,{J:function(){return i}});var r=n(3154);function i(e){return!1!==globalThis.__DEV__&&(t=e,(n=new Set([t])).forEach((function(e){(0,r.s)(e)&&function(e){if(!1!==globalThis.__DEV__&&!Object.isFrozen(e))try{Object.freeze(e)}catch(e){if(e instanceof TypeError)return null;throw e}return e}(e)===e&&Object.getOwnPropertyNames(e).forEach((function(t){(0,r.s)(e[t])&&n.add(e[t])}))}))),e;var t,n}},182:function(e,t,n){"use strict";n.d(t,{Ee:function(){return u},bw:function(){return a},w0:function(){return c}});var r=n(655),i=n(3154),o=Object.prototype.hasOwnProperty;function u(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a(e)}function a(e){var t=e[0]||{},n=e.length;if(n>1)for(var r=new c,i=1;i<n;++i)t=r.merge(t,e[i]);return t}var s=function(e,t,n){return this.merge(e[n],t[n])},c=function(){function e(e){void 0===e&&(e=s),this.reconciler=e,this.isObject=i.s,this.pastCopies=new Set}return e.prototype.merge=function(e,t){for(var n=this,u=[],a=2;a<arguments.length;a++)u[a-2]=arguments[a];return(0,i.s)(t)&&(0,i.s)(e)?(Object.keys(t).forEach((function(i){if(o.call(e,i)){var a=e[i];if(t[i]!==a){var s=n.reconciler.apply(n,(0,r.ev)([e,t,i],u,!1));s!==a&&((e=n.shallowCopyForMerge(e))[i]=s)}}else(e=n.shallowCopyForMerge(e))[i]=t[i]})),e):t},e.prototype.shallowCopyForMerge=function(e){return(0,i.s)(e)&&(this.pastCopies.has(e)||(e=Array.isArray(e)?e.slice(0):(0,r.pi)({__proto__:Object.getPrototypeOf(e)},e),this.pastCopies.add(e))),e},e}()},4012:function(e,t,n){"use strict";n.d(t,{J:function(){return o}});var r=n(655),i=n(3712);function o(e,t){return(0,i.o)(e,t,t.variables&&{variables:(0,i.o)((0,r.pi)((0,r.pi)({},e&&e.variables),t.variables))})}},3154:function(e,t,n){"use strict";function r(e){return null!==e&&"object"==typeof e}function i(e){return null!==e&&"object"==typeof e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}n.d(t,{P:function(){return i},s:function(){return r}})},3613:function(e,t,n){"use strict";n.d(t,{Lj:function(){return s},Os:function(){return o},QV:function(){return c},Qe:function(){return a},Ss:function(){return i},sV:function(){return u}});var r=n(320);function i(e){return!!e.body}function o(e){return!!e.getReader}function u(e){return!(!r.DN||!e[Symbol.asyncIterator])}function a(e){return!!e.stream}function s(e){return!!e.arrayBuffer}function c(e){return!!e.pipe}},3887:function(e,t,n){"use strict";n.d(t,{v:function(){return i}});var r=n(897);function i(e,t){void 0===t&&(t=0);var n=(0,r.X)("stringifyForDisplay");return JSON.stringify(e,(function(e,t){return void 0===t?n:t}),t).split(JSON.stringify(n)).join("<undefined>")}},6961:function(e,t,n){"use strict";n.d(t,{Rk:function(){return h},kG:function(){return l},wY:function(){return u},_K:function(){return f}});var r=n(655),i=n(6128),o=n(9379);function u(e){try{return e()}catch(e){}}var a=u((function(){return globalThis}))||u((function(){return window}))||u((function(){return self}))||u((function(){return global}))||u((function(){return u.constructor("return this")()})),s=n(3887);function c(e){return function(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];e.apply(void 0,(0,r.ev)(["number"==typeof t?d(t):t],n,!1))}}var l=Object.assign((function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];e||(0,i.kG)(e,d(t,n))}),{debug:c(i.kG.debug),log:c(i.kG.log),warn:c(i.kG.warn),error:c(i.kG.error)});function f(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new i.ej(d(e,t))}var p=Symbol.for("ApolloErrorMessageHandler_"+o.i);function d(e,t){if(void 0===t&&(t=[]),e){var n=t.map((function(e){return"string"==typeof e?e:(0,s.v)(e,2).slice(0,1e3)}));return a[p]&&a[p](e,n)||"An error occured! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:o.i,message:e,args:n})))}}var h=!1!==globalThis.__DEV__},8056:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var r=n(5028),i=n(320),o=n(6765),u=n(6961);function a(e){return e}var s=function(){function e(e,t){void 0===t&&(t=Object.create(null)),this.resultCache=i.sy?new WeakSet:new Set,this.transform=e,t.getCacheKey&&(this.getCacheKey=t.getCacheKey),!1!==t.cache&&(this.stableCacheKeys=new r.B(i.mr,(function(e){return{key:e}})))}return e.prototype.getCacheKey=function(e){return[e]},e.identity=function(){return new e(a,{cache:!1})},e.split=function(t,n,r){return void 0===r&&(r=e.identity()),new e((function(e){return(t(e)?n:r).transformDocument(e)}),{cache:!1})},e.prototype.transformDocument=function(e){if(this.resultCache.has(e))return e;var t=this.getStableCacheEntry(e);if(t&&t.value)return t.value;(0,o.A$)(e);var n=this.transform(e);return this.resultCache.add(n),t&&(t.value=n),n},e.prototype.concat=function(t){var n=this;return new e((function(e){return t.transformDocument(n.transformDocument(e))}),{cache:!1})},e.prototype.getStableCacheEntry=function(e){if(this.stableCacheKeys){var t=this.getCacheKey(e);return t?((0,u.kG)(Array.isArray(t),63),this.stableCacheKeys.lookupArray(t)):void 0}},e}()},9065:function(e,t,n){"use strict";n.d(t,{FS:function(){return c},IX:function(){return f},LZ:function(){return o},On:function(){return a},iX:function(){return u},mj:function(){return l},qb:function(){return s}});var r=n(6961),i=n(7304);function o(e,t){var n=e.directives;return!n||!n.length||f(n).every((function(e){var n=e.directive,i=e.ifArgument,o=!1;return"Variable"===i.value.kind?(o=t&&t[i.value.name.value],(0,r.kG)(void 0!==o,64,n.name.value)):o=i.value.value,"skip"===n.name.value?!o:o}))}function u(e){var t=[];return(0,i.Vn)(e,{Directive:function(e){t.push(e.name.value)}}),t}var a=function(e,t){return c(e,t,!1)},s=function(e,t){return c(e,t,!0)};function c(e,t,n){var r=new Set(e),o=r.size;return(0,i.Vn)(t,{Directive:function(e){if(r.delete(e.name.value)&&(!n||!r.size))return i.$_}}),n?!r.size:r.size<o}function l(e){return e&&c(["client","export"],e,!0)}function f(e){var t=[];return e&&e.length&&e.forEach((function(e){if("skip"===(n=e.name.value)||"include"===n){var n,i=e.arguments,o=e.name.value;(0,r.kG)(i&&1===i.length,65,o);var u=i[0];(0,r.kG)(u.name&&"if"===u.name.value,66,o);var a=u.value;(0,r.kG)(a&&("Variable"===a.kind||"BooleanValue"===a.kind),67,o),t.push({directive:e,ifArgument:u})}})),t}},3361:function(e,t,n){"use strict";n.d(t,{F:function(){return u},Yk:function(){return o},hi:function(){return a}});var r=n(655),i=n(6961);function o(e,t){var n=t,o=[];return e.definitions.forEach((function(e){if("OperationDefinition"===e.kind)throw(0,i._K)(68,e.operation,e.name?" named '".concat(e.name.value,"'"):"");"FragmentDefinition"===e.kind&&o.push(e)})),void 0===n&&((0,i.kG)(1===o.length,69,o.length),n=o[0].name.value),(0,r.pi)((0,r.pi)({},e),{definitions:(0,r.ev)([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:n}}]}}],e.definitions,!0)})}function u(e){void 0===e&&(e=[]);var t={};return e.forEach((function(e){t[e.name.value]=e})),t}function a(e,t){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":var n=e.name.value;if("function"==typeof t)return t(n);var r=t&&t[n];return(0,i.kG)(r,70,n),r||null;default:return null}}},6765:function(e,t,n){"use strict";n.d(t,{$H:function(){return u},A$:function(){return o},O4:function(){return p},iW:function(){return c},kU:function(){return s},p$:function(){return f},pD:function(){return l},rY:function(){return a}});var r=n(6961),i=n(1761);function o(e){(0,r.kG)(e&&"Document"===e.kind,71);var t=e.definitions.filter((function(e){return"FragmentDefinition"!==e.kind})).map((function(e){if("OperationDefinition"!==e.kind)throw(0,r._K)(72,e.kind);return e}));return(0,r.kG)(t.length<=1,73,t.length),e}function u(e){return o(e),e.definitions.filter((function(e){return"OperationDefinition"===e.kind}))[0]}function a(e){return e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&!!e.name})).map((function(e){return e.name.value}))[0]||null}function s(e){return e.definitions.filter((function(e){return"FragmentDefinition"===e.kind}))}function c(e){var t=u(e);return(0,r.kG)(t&&"query"===t.operation,74),t}function l(e){(0,r.kG)("Document"===e.kind,75),(0,r.kG)(e.definitions.length<=1,76);var t=e.definitions[0];return(0,r.kG)("FragmentDefinition"===t.kind,77),t}function f(e){var t;o(e);for(var n=0,i=e.definitions;n<i.length;n++){var u=i[n];if("OperationDefinition"===u.kind){var a=u.operation;if("query"===a||"mutation"===a||"subscription"===a)return u}"FragmentDefinition"!==u.kind||t||(t=u)}if(t)return t;throw(0,r._K)(78)}function p(e){var t=Object.create(null),n=e&&e.variableDefinitions;return n&&n.length&&n.forEach((function(e){e.defaultValue&&(0,i.vb)(t,e.variable.name,e.defaultValue)})),t}},768:function(e,t,n){"use strict";n.d(t,{S:function(){return h}});var r=n(7304),i=n(7392),o={Name:function(e){return e.value},Variable:function(e){return"$"+e.name},Document:function(e){return a(e.definitions,"\n\n")+"\n"},OperationDefinition:function(e){var t=e.operation,n=e.name,r=c("(",a(e.variableDefinitions,", "),")"),i=a(e.directives," "),o=e.selectionSet;return n||i||r||"query"!==t?a([t,a([n,r]),i,o]," "):o},VariableDefinition:function(e){var t=e.variable,n=e.type,r=e.defaultValue,i=e.directives;return t+": "+n+c(" = ",r)+c(" ",a(i," "))},SelectionSet:function(e){return s(e.selections)},Field:function(e){var t=e.alias,n=e.name,r=e.arguments,i=e.directives,o=e.selectionSet,u=c("",t,": ")+n,s=u+c("(",a(r,", "),")");return s.length>80&&(s=u+c("(\n",l(a(r,"\n")),"\n)")),a([s,a(i," "),o]," ")},Argument:function(e){return e.name+": "+e.value},FragmentSpread:function(e){return"..."+e.name+c(" ",a(e.directives," "))},InlineFragment:function(e){var t=e.typeCondition,n=e.directives,r=e.selectionSet;return a(["...",c("on ",t),a(n," "),r]," ")},FragmentDefinition:function(e){var t=e.name,n=e.typeCondition,r=e.variableDefinitions,i=e.directives,o=e.selectionSet;return"fragment ".concat(t).concat(c("(",a(r,", "),")")," ")+"on ".concat(n," ").concat(c("",a(i," ")," "))+o},IntValue:function(e){return e.value},FloatValue:function(e){return e.value},StringValue:function(e,t){var n=e.value;return e.block?(0,i.LZ)(n,"description"===t?"":"  "):JSON.stringify(n)},BooleanValue:function(e){return e.value?"true":"false"},NullValue:function(){return"null"},EnumValue:function(e){return e.value},ListValue:function(e){return"["+a(e.values,", ")+"]"},ObjectValue:function(e){return"{"+a(e.fields,", ")+"}"},ObjectField:function(e){return e.name+": "+e.value},Directive:function(e){return"@"+e.name+c("(",a(e.arguments,", "),")")},NamedType:function(e){return e.name},ListType:function(e){return"["+e.type+"]"},NonNullType:function(e){return e.type+"!"},SchemaDefinition:u((function(e){var t=e.directives,n=e.operationTypes;return a(["schema",a(t," "),s(n)]," ")})),OperationTypeDefinition:function(e){return e.operation+": "+e.type},ScalarTypeDefinition:u((function(e){return a(["scalar",e.name,a(e.directives," ")]," ")})),ObjectTypeDefinition:u((function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return a(["type",t,c("implements ",a(n," & ")),a(r," "),s(i)]," ")})),FieldDefinition:u((function(e){var t=e.name,n=e.arguments,r=e.type,i=e.directives;return t+(p(n)?c("(\n",l(a(n,"\n")),"\n)"):c("(",a(n,", "),")"))+": "+r+c(" ",a(i," "))})),InputValueDefinition:u((function(e){var t=e.name,n=e.type,r=e.defaultValue,i=e.directives;return a([t+": "+n,c("= ",r),a(i," ")]," ")})),InterfaceTypeDefinition:u((function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return a(["interface",t,c("implements ",a(n," & ")),a(r," "),s(i)]," ")})),UnionTypeDefinition:u((function(e){var t=e.name,n=e.directives,r=e.types;return a(["union",t,a(n," "),r&&0!==r.length?"= "+a(r," | "):""]," ")})),EnumTypeDefinition:u((function(e){var t=e.name,n=e.directives,r=e.values;return a(["enum",t,a(n," "),s(r)]," ")})),EnumValueDefinition:u((function(e){return a([e.name,a(e.directives," ")]," ")})),InputObjectTypeDefinition:u((function(e){var t=e.name,n=e.directives,r=e.fields;return a(["input",t,a(n," "),s(r)]," ")})),DirectiveDefinition:u((function(e){var t=e.name,n=e.arguments,r=e.repeatable,i=e.locations;return"directive @"+t+(p(n)?c("(\n",l(a(n,"\n")),"\n)"):c("(",a(n,", "),")"))+(r?" repeatable":"")+" on "+a(i," | ")})),SchemaExtension:function(e){var t=e.directives,n=e.operationTypes;return a(["extend schema",a(t," "),s(n)]," ")},ScalarTypeExtension:function(e){return a(["extend scalar",e.name,a(e.directives," ")]," ")},ObjectTypeExtension:function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return a(["extend type",t,c("implements ",a(n," & ")),a(r," "),s(i)]," ")},InterfaceTypeExtension:function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return a(["extend interface",t,c("implements ",a(n," & ")),a(r," "),s(i)]," ")},UnionTypeExtension:function(e){var t=e.name,n=e.directives,r=e.types;return a(["extend union",t,a(n," "),r&&0!==r.length?"= "+a(r," | "):""]," ")},EnumTypeExtension:function(e){var t=e.name,n=e.directives,r=e.values;return a(["extend enum",t,a(n," "),s(r)]," ")},InputObjectTypeExtension:function(e){var t=e.name,n=e.directives,r=e.fields;return a(["extend input",t,a(n," "),s(r)]," ")}};function u(e){return function(t){return a([t.description,e(t)],"\n")}}function a(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!==(t=null==e?void 0:e.filter((function(e){return e})).join(n))&&void 0!==t?t:""}function s(e){return c("{\n",l(a(e,"\n")),"\n}")}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return null!=t&&""!==t?e+t+n:""}function l(e){return c("  ",e.replace(/\n/g,"\n  "))}function f(e){return-1!==e.indexOf("\n")}function p(e){return null!=e&&e.some(f)}var d=n(320).mr?new WeakMap:void 0,h=function(e){var t;return(t=null==d?void 0:d.get(e))||(t=function(e){return(0,r.Vn)(e,{leave:o})}(e),null==d||d.set(e,t)),t}},1761:function(e,t,n){"use strict";n.d(t,{Ao:function(){return b},JW:function(){return s},My:function(){return g},NC:function(){return v},PT:function(){return p},Yk:function(){return a},kQ:function(){return u},qw:function(){return m},u2:function(){return y},vb:function(){return c},vf:function(){return l}});var r=n(6961),i=n(3154),o=n(3361);function u(e){return{__ref:String(e)}}function a(e){return Boolean(e&&"object"==typeof e&&"string"==typeof e.__ref)}function s(e){return(0,i.s)(e)&&"Document"===e.kind&&Array.isArray(e.definitions)}function c(e,t,n,i){if(function(e){return"IntValue"===e.kind}(n)||function(e){return"FloatValue"===e.kind}(n))e[t.value]=Number(n.value);else if(function(e){return"BooleanValue"===e.kind}(n)||function(e){return"StringValue"===e.kind}(n))e[t.value]=n.value;else if(function(e){return"ObjectValue"===e.kind}(n)){var o={};n.fields.map((function(e){return c(o,e.name,e.value,i)})),e[t.value]=o}else if(function(e){return"Variable"===e.kind}(n)){var u=(i||{})[n.name.value];e[t.value]=u}else if(function(e){return"ListValue"===e.kind}(n))e[t.value]=n.values.map((function(e){var n={};return c(n,t,e,i),n[t.value]}));else if(function(e){return"EnumValue"===e.kind}(n))e[t.value]=n.value;else{if(!function(e){return"NullValue"===e.kind}(n))throw(0,r._K)(79,t.value,n.kind);e[t.value]=null}}function l(e,t){var n=null;e.directives&&(n={},e.directives.forEach((function(e){n[e.name.value]={},e.arguments&&e.arguments.forEach((function(r){var i=r.name,o=r.value;return c(n[e.name.value],i,o,t)}))})));var r=null;return e.arguments&&e.arguments.length&&(r={},e.arguments.forEach((function(e){var n=e.name,i=e.value;return c(r,n,i,t)}))),p(e.name.value,r,n)}var f=["connection","include","skip","client","rest","export","nonreactive"],p=Object.assign((function(e,t,n){if(t&&n&&n.connection&&n.connection.key){if(n.connection.filter&&n.connection.filter.length>0){var r=n.connection.filter?n.connection.filter:[];r.sort();var i={};return r.forEach((function(e){i[e]=t[e]})),"".concat(n.connection.key,"(").concat(d(i),")")}return n.connection.key}var o=e;if(t){var u=d(t);o+="(".concat(u,")")}return n&&Object.keys(n).forEach((function(e){-1===f.indexOf(e)&&(n[e]&&Object.keys(n[e]).length?o+="@".concat(e,"(").concat(d(n[e]),")"):o+="@".concat(e))})),o}),{setStringify:function(e){var t=d;return d=e,t}}),d=function(e){return JSON.stringify(e,h)};function h(e,t){return(0,i.s)(t)&&!Array.isArray(t)&&(t=Object.keys(t).sort().reduce((function(e,n){return e[n]=t[n],e}),{})),t}function v(e,t){if(e.arguments&&e.arguments.length){var n={};return e.arguments.forEach((function(e){var r=e.name,i=e.value;return c(n,r,i,t)})),n}return null}function y(e){return e.alias?e.alias.value:e.name.value}function m(e,t,n){for(var r,i=0,u=t.selections;i<u.length;i++)if(g(c=u[i])){if("__typename"===c.name.value)return e[y(c)]}else r?r.push(c):r=[c];if("string"==typeof e.__typename)return e.__typename;if(r)for(var a=0,s=r;a<s.length;a++){var c=s[a],l=m(e,(0,o.hi)(c,n).selectionSet,n);if("string"==typeof l)return l}}function g(e){return"Field"===e.kind}function b(e){return"InlineFragment"===e.kind}},6487:function(e,t,n){"use strict";n.d(t,{Fo:function(){return g},Gw:function(){return y},RR:function(){return _},Vw:function(){return b},aL:function(){return w},bi:function(){return v},ob:function(){return O}});var r=n(655),i=n(6961),o=n(7359),u=n(7304),a=n(6765),s=n(1761),c=n(3361),l=n(1436),f={kind:o.h.FIELD,name:{kind:o.h.NAME,value:"__typename"}};function p(e,t){return!e||e.selectionSet.selections.every((function(e){return e.kind===o.h.FRAGMENT_SPREAD&&p(t[e.name.value],t)}))}function d(e){return p((0,a.$H)(e)||(0,a.pD)(e),(0,c.F)((0,a.kU)(e)))?null:e}function h(e){var t=new Map;return function(n){void 0===n&&(n=e);var r=t.get(n);return r||t.set(n,r={variables:new Set,fragmentSpreads:new Set}),r}}function v(e,t){(0,a.A$)(t);for(var n=h(""),s=h(""),c=function(e){for(var t=0,r=void 0;t<e.length&&(r=e[t]);++t)if(!(0,l.k)(r)){if(r.kind===o.h.OPERATION_DEFINITION)return n(r.name&&r.name.value);if(r.kind===o.h.FRAGMENT_DEFINITION)return s(r.name.value)}return!1!==globalThis.__DEV__&&i.kG.error(80),null},f=0,p=t.definitions.length-1;p>=0;--p)t.definitions[p].kind===o.h.OPERATION_DEFINITION&&++f;var v,y,m,g=(v=e,y=new Map,m=new Map,v.forEach((function(e){e&&(e.name?y.set(e.name,e):e.test&&m.set(e.test,e))})),function(e){var t=y.get(e.name.value);return!t&&m.size&&m.forEach((function(n,r){r(e)&&(t=n)})),t}),b=function(e){return(0,l.O)(e)&&e.map(g).some((function(e){return e&&e.remove}))},_=new Map,w=!1,O={enter:function(e){if(b(e.directives))return w=!0,null}},k=(0,u.Vn)(t,{Field:O,InlineFragment:O,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(e,t,n,r,i){var o=c(i);o&&o.variables.add(e.name.value)}},FragmentSpread:{enter:function(e,t,n,r,i){if(b(e.directives))return w=!0,null;var o=c(i);o&&o.fragmentSpreads.add(e.name.value)}},FragmentDefinition:{enter:function(e,t,n,r){_.set(JSON.stringify(r),e)},leave:function(e,t,n,r){return e===_.get(JSON.stringify(r))?e:f>0&&e.selectionSet.selections.every((function(e){return e.kind===o.h.FIELD&&"__typename"===e.name.value}))?(s(e.name.value).removed=!0,w=!0,null):void 0}},Directive:{leave:function(e){if(g(e))return w=!0,null}}});if(!w)return t;var T=function(e){return e.transitiveVars||(e.transitiveVars=new Set(e.variables),e.removed||e.fragmentSpreads.forEach((function(t){T(s(t)).transitiveVars.forEach((function(t){e.transitiveVars.add(t)}))}))),e},E=new Set;k.definitions.forEach((function(e){e.kind===o.h.OPERATION_DEFINITION?T(n(e.name&&e.name.value)).fragmentSpreads.forEach((function(e){E.add(e)})):e.kind!==o.h.FRAGMENT_DEFINITION||0!==f||s(e.name.value).removed||E.add(e.name.value)})),E.forEach((function(e){T(s(e)).fragmentSpreads.forEach((function(e){E.add(e)}))}));var S={enter:function(e){if(t=e.name.value,!E.has(t)||s(t).removed)return null;var t}};return d((0,u.Vn)(k,{FragmentSpread:S,FragmentDefinition:S,OperationDefinition:{leave:function(e){if(e.variableDefinitions){var t=T(n(e.name&&e.name.value)).transitiveVars;if(t.size<e.variableDefinitions.length)return(0,r.pi)((0,r.pi)({},e),{variableDefinitions:e.variableDefinitions.filter((function(e){return t.has(e.variable.name.value)}))})}}}}))}var y=Object.assign((function(e){return(0,u.Vn)(e,{SelectionSet:{enter:function(e,t,n){if(!n||n.kind!==o.h.OPERATION_DEFINITION){var i=e.selections;if(i&&!i.some((function(e){return(0,s.My)(e)&&("__typename"===e.name.value||0===e.name.value.lastIndexOf("__",0))}))){var u=n;if(!((0,s.My)(u)&&u.directives&&u.directives.some((function(e){return"export"===e.name.value}))))return(0,r.pi)((0,r.pi)({},e),{selections:(0,r.ev)((0,r.ev)([],i,!0),[f],!1)})}}}}})}),{added:function(e){return e===f}}),m={test:function(e){var t="connection"===e.name.value;return t&&(e.arguments&&e.arguments.some((function(e){return"key"===e.name.value}))||!1!==globalThis.__DEV__&&i.kG.warn(81)),t}};function g(e){return v([m],(0,a.A$)(e))}function b(e,t){var n=function(e){return function(t){return e.some((function(e){return t.value&&t.value.kind===o.h.VARIABLE&&t.value.name&&(e.name===t.value.name.value||e.test&&e.test(t))}))}}(e);return d((0,u.Vn)(t,{OperationDefinition:{enter:function(t){return(0,r.pi)((0,r.pi)({},t),{variableDefinitions:t.variableDefinitions?t.variableDefinitions.filter((function(t){return!e.some((function(e){return e.name===t.variable.name.value}))})):[]})}},Field:{enter:function(t){if(e.some((function(e){return e.remove}))){var r=0;if(t.arguments&&t.arguments.forEach((function(e){n(e)&&(r+=1)})),1===r)return null}}},Argument:{enter:function(e){if(n(e))return null}}}))}function _(e,t){function n(t){if(e.some((function(e){return e.name===t.name.value})))return null}return d((0,u.Vn)(t,{FragmentSpread:{enter:n},FragmentDefinition:{enter:n}}))}function w(e){return"query"===(0,a.p$)(e).operation?e:(0,u.Vn)(e,{OperationDefinition:{enter:function(e){return(0,r.pi)((0,r.pi)({},e),{operation:"query"})}}})}function O(e){return(0,a.A$)(e),v([{test:function(e){return"client"===e.name.value},remove:!0}],e)}},2451:function(e,t,n){"use strict";n.r(t),n.d(t,{Concast:function(){return x.X},DEV:function(){return r.Rk},DeepMerger:function(){return y.w0},DocumentTransform:function(){return o.A},Observable:function(){return O.y},addTypenameToDocument:function(){return l.Gw},argumentsObjectFromField:function(){return c.NC},asyncMap:function(){return C.s},buildQueryFromSelectionSet:function(){return l.aL},canUseAsyncIteratorSymbol:function(){return D.DN},canUseDOM:function(){return D.Nq},canUseLayoutEffect:function(){return D.JC},canUseSymbol:function(){return D.aS},canUseWeakMap:function(){return D.mr},canUseWeakSet:function(){return D.sy},checkDocument:function(){return a.A$},cloneDeep:function(){return T.X},compact:function(){return P.o},concatPagination:function(){return m},createFragmentMap:function(){return u.F},createFulfilledPromise:function(){return k.OP},createRejectedPromise:function(){return k.Ld},fixObservableSubclass:function(){return I.D},getDefaultValues:function(){return a.O4},getDirectiveNames:function(){return i.iX},getFragmentDefinition:function(){return a.pD},getFragmentDefinitions:function(){return a.kU},getFragmentFromSelection:function(){return u.hi},getFragmentQueryDocument:function(){return u.Yk},getGraphQLErrorsFromResult:function(){return N.K},getInclusionDirectives:function(){return i.IX},getMainDefinition:function(){return a.p$},getOperationDefinition:function(){return a.$H},getOperationName:function(){return a.rY},getQueryDefinition:function(){return a.iW},getStoreKeyName:function(){return c.PT},getTypenameFromResult:function(){return c.qw},graphQLResultHasError:function(){return N.d},hasAllDirectives:function(){return i.qb},hasAnyDirectives:function(){return i.On},hasClientExports:function(){return i.mj},hasDirectives:function(){return i.FS},isApolloPayloadResult:function(){return q.yU},isArray:function(){return j.k},isAsyncIterableIterator:function(){return L.sV},isBlob:function(){return L.Lj},isDocumentNode:function(){return c.JW},isExecutionPatchIncrementalResult:function(){return q.GG},isExecutionPatchInitialResult:function(){return q.x3},isExecutionPatchResult:function(){return q.M0},isField:function(){return c.My},isInlineFragment:function(){return c.Ao},isMutationOperation:function(){return p},isNodeReadableStream:function(){return L.QV},isNodeResponse:function(){return L.Ss},isNonEmptyArray:function(){return j.O},isNonNullObject:function(){return A.s},isPlainObject:function(){return A.P},isQueryOperation:function(){return d},isReadableStream:function(){return L.Os},isReference:function(){return c.Yk},isStatefulPromise:function(){return k.j7},isStreamableBlob:function(){return L.Qe},isSubscriptionOperation:function(){return h},iterateObserversSafely:function(){return S.p},makeReference:function(){return c.kQ},makeUniqueId:function(){return R.X},maybe:function(){return r.wY},maybeDeepFreeze:function(){return E.J},mergeDeep:function(){return y.Ee},mergeDeepArray:function(){return y.bw},mergeIncrementalData:function(){return q.mT},mergeOptions:function(){return M.J},offsetLimitPagination:function(){return g},omitDeep:function(){return V},print:function(){return s.S},relayStylePagination:function(){return b},removeArgumentsFromDocument:function(){return l.Vw},removeClientSetsFromDocument:function(){return l.ob},removeConnectionDirectiveFromDocument:function(){return l.Fo},removeDirectivesFromDocument:function(){return l.bi},removeFragmentSpreadFromDocument:function(){return l.RR},resultKeyNameFromField:function(){return c.u2},shouldInclude:function(){return i.LZ},storeKeyNameFromField:function(){return c.vf},stringifyForDisplay:function(){return F.v},stripTypename:function(){return U},valueToObjectRepresentation:function(){return c.vb},wrapPromiseWithState:function(){return k.Bd}});var r=n(6961),i=n(9065),o=n(8056),u=n(3361),a=n(6765),s=n(768),c=n(1761),l=n(6487);function f(e,t){var n;return(null===(n=(0,a.$H)(e))||void 0===n?void 0:n.operation)===t}function p(e){return f(e,"mutation")}function d(e){return f(e,"query")}function h(e){return f(e,"subscription")}var v=n(655),y=n(182);function m(e){return void 0===e&&(e=!1),{keyArgs:e,merge:function(e,t){return e?(0,v.ev)((0,v.ev)([],e,!0),t,!0):t}}}function g(e){return void 0===e&&(e=!1),{keyArgs:e,merge:function(e,t,n){var r=n.args,i=e?e.slice(0):[];if(t)if(r)for(var o=r.offset,u=void 0===o?0:o,a=0;a<t.length;++a)i[u+a]=t[a];else i.push.apply(i,t);return i}}}function b(e){return void 0===e&&(e=!1),{keyArgs:e,read:function(e,t){var n=t.canRead,r=t.readField;if(!e)return e;var i=[],o="",u="";e.edges.forEach((function(e){n(r("node",e))&&(i.push(e),e.cursor&&(o=o||e.cursor||"",u=e.cursor||u))})),i.length>1&&o===u&&(o="");var a=e.pageInfo||{},s=a.startCursor,c=a.endCursor;return(0,v.pi)((0,v.pi)({},_(e)),{edges:i,pageInfo:(0,v.pi)((0,v.pi)({},e.pageInfo),{startCursor:s||o,endCursor:c||u})})},merge:function(e,t,n){var r=n.args,i=n.isReference,o=n.readField;if(e||(e={edges:[],pageInfo:{hasPreviousPage:!1,hasNextPage:!0,startCursor:"",endCursor:""}}),!t)return e;var u=t.edges?t.edges.map((function(e){return i(e=(0,v.pi)({},e))&&(e.cursor=o("cursor",e)),e})):[];if(t.pageInfo){var a=t.pageInfo,s=a.startCursor,c=a.endCursor,l=u[0],f=u[u.length-1];l&&s&&(l.cursor=s),f&&c&&(f.cursor=c);var p=l&&l.cursor;p&&!s&&(t=(0,y.Ee)(t,{pageInfo:{startCursor:p}}));var d=f&&f.cursor;d&&!c&&(t=(0,y.Ee)(t,{pageInfo:{endCursor:d}}))}var h=e.edges,m=[];if(r&&r.after)(g=h.findIndex((function(e){return e.cursor===r.after})))>=0&&(h=h.slice(0,g+1));else if(r&&r.before){var g;m=(g=h.findIndex((function(e){return e.cursor===r.before})))<0?h:h.slice(g),h=[]}else t.edges&&(h=[]);var b=(0,v.ev)((0,v.ev)((0,v.ev)([],h,!0),u,!0),m,!0),w=(0,v.pi)((0,v.pi)({},t.pageInfo),e.pageInfo);if(t.pageInfo){var O=t.pageInfo,k=O.hasPreviousPage,T=O.hasNextPage,E=(s=O.startCursor,c=O.endCursor,(0,v._T)(O,["hasPreviousPage","hasNextPage","startCursor","endCursor"]));Object.assign(w,E),h.length||(void 0!==k&&(w.hasPreviousPage=k),void 0!==s&&(w.startCursor=s)),m.length||(void 0!==T&&(w.hasNextPage=T),void 0!==c&&(w.endCursor=c))}return(0,v.pi)((0,v.pi)((0,v.pi)({},_(e)),_(t)),{edges:b,pageInfo:w})}}}var _=function(e){return(0,v._T)(e,w)},w=["edges","pageInfo"],O=n(8216),k=n(1704),T=n(9487),E=n(8702),S=n(8263),C=n(6951),x=n(5687),I=n(6403),j=n(1436),A=n(3154),N=n(9383),D=n(320),P=n(3712),R=n(897),F=n(3887),M=n(4012),L=n(3613),q=n(7280);function V(e,t){return Q(e,t)}function Q(e,t,n){if(void 0===n&&(n=new Map),n.has(e))return n.get(e);var r=!1;if(Array.isArray(e)){var i=[];if(n.set(e,i),e.forEach((function(e,o){var u=Q(e,t,n);r||(r=u!==e),i[o]=u})),r)return i}else if((0,A.P)(e)){var o=Object.create(Object.getPrototypeOf(e));if(n.set(e,o),Object.keys(e).forEach((function(i){if(i!==t){var u=Q(e[i],t,n);r||(r=u!==e[i]),o[i]=u}else r=!0})),r)return o}return e}function U(e){return V(e,"__typename")}},5687:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(655),i=n(8216),o=n(8263),u=n(6403);function a(e){return e&&"function"==typeof e.then}var s=function(e){function t(t){var n=e.call(this,(function(e){return n.addObserver(e),function(){return n.removeObserver(e)}}))||this;return n.observers=new Set,n.promise=new Promise((function(e,t){n.resolve=e,n.reject=t})),n.handlers={next:function(e){null!==n.sub&&(n.latest=["next",e],n.notify("next",e),(0,o.p)(n.observers,"next",e))},error:function(e){var t=n.sub;null!==t&&(t&&setTimeout((function(){return t.unsubscribe()})),n.sub=null,n.latest=["error",e],n.reject(e),n.notify("error",e),(0,o.p)(n.observers,"error",e))},complete:function(){var e=n,t=e.sub,r=e.sources;if(null!==t){var i=(void 0===r?[]:r).shift();i?a(i)?i.then((function(e){return n.sub=e.subscribe(n.handlers)})):n.sub=i.subscribe(n.handlers):(t&&setTimeout((function(){return t.unsubscribe()})),n.sub=null,n.latest&&"next"===n.latest[0]?n.resolve(n.latest[1]):n.resolve(),n.notify("complete"),(0,o.p)(n.observers,"complete"))}}},n.nextResultListeners=new Set,n.cancel=function(e){n.reject(e),n.sources=[],n.handlers.complete()},n.promise.catch((function(e){})),"function"==typeof t&&(t=[new i.y(t)]),a(t)?t.then((function(e){return n.start(e)}),n.handlers.error):n.start(t),n}return(0,r.ZT)(t,e),t.prototype.start=function(e){void 0===this.sub&&(this.sources=Array.from(e),this.handlers.complete())},t.prototype.deliverLastMessage=function(e){if(this.latest){var t=this.latest[0],n=e[t];n&&n.call(e,this.latest[1]),null===this.sub&&"next"===t&&e.complete&&e.complete()}},t.prototype.addObserver=function(e){this.observers.has(e)||(this.deliverLastMessage(e),this.observers.add(e))},t.prototype.removeObserver=function(e){this.observers.delete(e)&&this.observers.size<1&&this.handlers.complete()},t.prototype.notify=function(e,t){var n=this.nextResultListeners;n.size&&(this.nextResultListeners=new Set,n.forEach((function(n){return n(e,t)})))},t.prototype.beforeNext=function(e){var t=!1;this.nextResultListeners.add((function(n,r){t||(t=!0,e(n,r))}))},t}(i.y);(0,u.D)(s)},6951:function(e,t,n){"use strict";n.d(t,{s:function(){return i}});var r=n(8216);function i(e,t,n){return new r.y((function(r){var i=r.next,o=r.error,u=r.complete,a=0,s=!1,c={then:function(e){return new Promise((function(t){return t(e())}))}};function l(e,t){return e?function(t){++a;var n=function(){return e(t)};c=c.then(n,n).then((function(e){--a,i&&i.call(r,e),s&&f.complete()}),(function(e){throw--a,e})).catch((function(e){o&&o.call(r,e)}))}:function(e){return t&&t.call(r,e)}}var f={next:l(t,i),error:l(n,o),complete:function(){s=!0,a||u&&u.call(r)}},p=e.subscribe(f);return function(){return p.unsubscribe()}}))}},8263:function(e,t,n){"use strict";function r(e,t,n){var r=[];e.forEach((function(e){return e[t]&&r.push(e)})),r.forEach((function(e){return e[t](n)}))}n.d(t,{p:function(){return r}})},6403:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var r=n(8216),i=n(320);function o(e){function t(t){Object.defineProperty(e,t,{value:r.y})}return i.aS&&Symbol.species&&t(Symbol.species),t("@@species"),e}},1704:function(e,t,n){"use strict";function r(e){var t=Promise.resolve(e);return t.status="fulfilled",t.value=e,t}function i(e){var t=Promise.reject(e);return t.catch((function(){})),t.status="rejected",t.reason=e,t}function o(e){return"status"in e}function u(e){if(o(e))return e;var t=e;return t.status="pending",t.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})),e}n.d(t,{Bd:function(){return u},Ld:function(){return i},OP:function(){return r},j7:function(){return o}})},9379:function(e,t,n){"use strict";n.d(t,{i:function(){return r}});var r="3.8.0"},20:function(e,t,n){"use strict";n.d(t,{D:function(){return a}});const{toString:r,hasOwnProperty:i}=Object.prototype,o=Function.prototype.toString,u=new Map;function a(e,t){try{return s(e,t)}finally{u.clear()}}function s(e,t){if(e===t)return!0;const n=r.call(e);if(n!==r.call(t))return!1;switch(n){case"[object Array]":if(e.length!==t.length)return!1;case"[object Object]":{if(p(e,t))return!0;const n=c(e),r=c(t),o=n.length;if(o!==r.length)return!1;for(let e=0;e<o;++e)if(!i.call(t,n[e]))return!1;for(let r=0;r<o;++r){const i=n[r];if(!s(e[i],t[i]))return!1}return!0}case"[object Error]":return e.name===t.name&&e.message===t.message;case"[object Number]":if(e!=e)return t!=t;case"[object Boolean]":case"[object Date]":return+e==+t;case"[object RegExp]":case"[object String]":return e==`${t}`;case"[object Map]":case"[object Set]":{if(e.size!==t.size)return!1;if(p(e,t))return!0;const r=e.entries(),i="[object Map]"===n;for(;;){const e=r.next();if(e.done)break;const[n,o]=e.value;if(!t.has(n))return!1;if(i&&!s(o,t.get(n)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":e=new Uint8Array(e),t=new Uint8Array(t);case"[object DataView]":{let n=e.byteLength;if(n===t.byteLength)for(;n--&&e[n]===t[n];);return-1===n}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{const n=o.call(e);return n===o.call(t)&&!function(e,t){const n=e.length-t.length;return n>=0&&e.indexOf(t,n)===n}(n,f)}}return!1}function c(e){return Object.keys(e).filter(l,e)}function l(e){return void 0!==this[e]}t.Z=a;const f="{ [native code] }";function p(e,t){let n=u.get(e);if(n){if(n.has(t))return!0}else u.set(e,n=new Set);return n.add(t),!1}},5028:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});const r=()=>Object.create(null),{forEach:i,slice:o}=Array.prototype,{hasOwnProperty:u}=Object.prototype;class a{constructor(e=!0,t=r){this.weakness=e,this.makeData=t}lookup(...e){return this.lookupArray(e)}lookupArray(e){let t=this;return i.call(e,(e=>t=t.getChildTrie(e))),u.call(t,"data")?t.data:t.data=this.makeData(o.call(e))}peek(...e){return this.peekArray(e)}peekArray(e){let t=this;for(let n=0,r=e.length;t&&n<r;++n){const r=this.weakness&&s(e[n])?t.weak:t.strong;t=r&&r.get(e[n])}return t&&t.data}getChildTrie(e){const t=this.weakness&&s(e)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map);let n=t.get(e);return n||t.set(e,n=new a(this.weakness,this.makeData)),n}}function s(e){switch(typeof e){case"object":if(null===e)break;case"function":return!0}return!1}},5821:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5695);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e){return u(e,[])}function u(e,t){switch(i(e)){case"string":return JSON.stringify(e);case"function":return e.name?"[function ".concat(e.name,"]"):"[function]";case"object":return null===e?"null":function(e,t){if(-1!==t.indexOf(e))return"[Circular]";var n=[].concat(t,[e]),i=function(e){var t=e[String(r.Z)];return"function"==typeof t?t:"function"==typeof e.inspect?e.inspect:void 0}(e);if(void 0!==i){var o=i.call(e);if(o!==e)return"string"==typeof o?o:u(o,n)}else if(Array.isArray(e))return function(e,t){if(0===e.length)return"[]";if(t.length>2)return"[Array]";for(var n=Math.min(10,e.length),r=e.length-n,i=[],o=0;o<n;++o)i.push(u(e[o],t));return 1===r?i.push("... 1 more item"):r>1&&i.push("... ".concat(r," more items")),"["+i.join(", ")+"]"}(e,n);return function(e,t){var n=Object.keys(e);return 0===n.length?"{}":t.length>2?"["+function(e){var t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===t&&"function"==typeof e.constructor){var n=e.constructor.name;if("string"==typeof n&&""!==n)return n}return t}(e)+"]":"{ "+n.map((function(n){return n+": "+u(e[n],t)})).join(", ")+" }"}(e,n)}(e,t);default:return String(e)}}},5695:function(e,t){"use strict";var n="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):void 0;t.Z=n},5217:function(e,t,n){"use strict";n.d(t,{Ye:function(){return o},WU:function(){return u},UG:function(){return a}});var r=n(5695);function i(e){var t=e.prototype.toJSON;"function"==typeof t||function(e,t){if(!Boolean(0))throw new Error("Unexpected invariant triggered.")}(),e.prototype.inspect=t,r.Z&&(e.prototype[r.Z]=t)}var o=function(){function e(e,t,n){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=n}return e.prototype.toJSON=function(){return{start:this.start,end:this.end}},e}();i(o);var u=function(){function e(e,t,n,r,i,o,u){this.kind=e,this.start=t,this.end=n,this.line=r,this.column=i,this.value=u,this.prev=o,this.next=null}return e.prototype.toJSON=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}},e}();function a(e){return null!=e&&"string"==typeof e.kind}i(u)},7392:function(e,t,n){"use strict";function r(e){var t=e.split(/\r\n|[\n\r]/g),n=function(e){for(var t,n=!0,r=!0,i=0,o=null,u=0;u<e.length;++u)switch(e.charCodeAt(u)){case 13:10===e.charCodeAt(u+1)&&++u;case 10:n=!1,r=!0,i=0;break;case 9:case 32:++i;break;default:r&&!n&&(null===o||i<o)&&(o=i),r=!1}return null!==(t=o)&&void 0!==t?t:0}(e);if(0!==n)for(var r=1;r<t.length;r++)t[r]=t[r].slice(n);for(var o=0;o<t.length&&i(t[o]);)++o;for(var u=t.length;u>o&&i(t[u-1]);)--u;return t.slice(o,u).join("\n")}function i(e){for(var t=0;t<e.length;++t)if(" "!==e[t]&&"\t"!==e[t])return!1;return!0}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=-1===e.indexOf("\n"),i=" "===e[0]||"\t"===e[0],o='"'===e[e.length-1],u="\\"===e[e.length-1],a=!r||o||u||n,s="";return!a||r&&i||(s+="\n"+t),s+=t?e.replace(/\n/g,"\n"+t):e,a&&(s+="\n"),'"""'+s.replace(/"""/g,'\\"""')+'"""'}n.d(t,{LZ:function(){return o},W7:function(){return r}})},7359:function(e,t,n){"use strict";n.d(t,{h:function(){return r}});var r=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"})},7304:function(e,t,n){"use strict";n.d(t,{$_:function(){return u},Vn:function(){return a}});var r=n(5821),i=n(5217),o={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},u=Object.freeze({});function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,a=void 0,c=Array.isArray(e),l=[e],f=-1,p=[],d=void 0,h=void 0,v=void 0,y=[],m=[],g=e;do{var b=++f===l.length,_=b&&0!==p.length;if(b){if(h=0===m.length?void 0:y[y.length-1],d=v,v=m.pop(),_){if(c)d=d.slice();else{for(var w={},O=0,k=Object.keys(d);O<k.length;O++){var T=k[O];w[T]=d[T]}d=w}for(var E=0,S=0;S<p.length;S++){var C=p[S][0],x=p[S][1];c&&(C-=E),c&&null===x?(d.splice(C,1),E++):d[C]=x}}f=a.index,l=a.keys,p=a.edits,c=a.inArray,a=a.prev}else{if(h=v?c?f:l[f]:void 0,null==(d=v?v[h]:g))continue;v&&y.push(h)}var I,j=void 0;if(!Array.isArray(d)){if(!(0,i.UG)(d))throw new Error("Invalid AST Node: ".concat((0,r.Z)(d),"."));var A=s(t,d.kind,b);if(A){if((j=A.call(t,d,h,v,y,m))===u)break;if(!1===j){if(!b){y.pop();continue}}else if(void 0!==j&&(p.push([h,j]),!b)){if(!(0,i.UG)(j)){y.pop();continue}d=j}}}void 0===j&&_&&p.push([h,d]),b?y.pop():(a={inArray:c,index:f,keys:l,edits:p,prev:a},l=(c=Array.isArray(d))?d:null!==(I=n[d.kind])&&void 0!==I?I:[],f=-1,p=[],v&&m.push(v),v=d)}while(void 0!==a);return 0!==p.length&&(g=p[p.length-1][1]),g}function s(e,t,n){var r=e[t];if(r){if(!n&&"function"==typeof r)return r;var i=n?r.leave:r.enter;if("function"==typeof i)return i}else{var o=n?e.leave:e.enter;if(o){if("function"==typeof o)return o;var u=o[t];if("function"==typeof u)return u}}}},6128:function(e,t,n){"use strict";n.d(t,{U6:function(){return p},ej:function(){return a},kG:function(){return s}});var r=n(655),i="Invariant Violation",o=Object.setPrototypeOf,u=void 0===o?function(e,t){return e.__proto__=t,e}:o,a=function(e){function t(n){void 0===n&&(n=i);var r=e.call(this,"number"==typeof n?i+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=i,u(r,t.prototype),r}return(0,r.ZT)(t,e),t}(Error);function s(e,t){if(!e)throw new a(t)}var c=["debug","log","warn","error","silent"],l=c.indexOf("log");function f(e){return function(){if(c.indexOf(e)>=l){var t=console[e]||console.log;return t.apply(console,arguments)}}}function p(e){var t=c[l];return l=Math.max(0,c.indexOf(e)),t}!function(e){e.debug=f("debug"),e.log=f("log"),e.warn=f("warn"),e.error=f("error")}(s||(s={}))},8216:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{y:function(){return k}});var u=function(){return"function"==typeof Symbol},a=function(e){return u()&&Boolean(Symbol[e])},s=function(e){return a(e)?Symbol[e]:"@@"+e};u()&&!a("observable")&&(Symbol.observable=Symbol("observable"));var c=s("iterator"),l=s("observable"),f=s("species");function p(e,t){var n=e[t];if(null!=n){if("function"!=typeof n)throw new TypeError(n+" is not a function");return n}}function d(e){var t=e.constructor;return void 0!==t&&null===(t=t[f])&&(t=void 0),void 0!==t?t:k}function h(e){return e instanceof k}function v(e){v.log?v.log(e):setTimeout((function(){throw e}))}function y(e){Promise.resolve().then((function(){try{e()}catch(e){v(e)}}))}function m(e){var t=e._cleanup;if(void 0!==t&&(e._cleanup=void 0,t))try{if("function"==typeof t)t();else{var n=p(t,"unsubscribe");n&&n.call(t)}}catch(e){v(e)}}function g(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function b(e,t,n){e._state="running";var r=e._observer;try{var i=p(r,t);switch(t){case"next":i&&i.call(r,n);break;case"error":if(g(e),!i)throw n;i.call(r,n);break;case"complete":g(e),i&&i.call(r)}}catch(e){v(e)}"closed"===e._state?m(e):"running"===e._state&&(e._state="ready")}function _(e,t,n){if("closed"!==e._state){if("buffering"!==e._state)return"ready"!==e._state?(e._state="buffering",e._queue=[{type:t,value:n}],void y((function(){return function(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(b(e,t[n].type,t[n].value),"closed"!==e._state);++n);}}(e)}))):void b(e,t,n);e._queue.push({type:t,value:n})}}var w=function(){function e(e,t){this._cleanup=void 0,this._observer=e,this._queue=void 0,this._state="initializing";var n=new O(this);try{this._cleanup=t.call(void 0,n)}catch(e){n.error(e)}"initializing"===this._state&&(this._state="ready")}return e.prototype.unsubscribe=function(){"closed"!==this._state&&(g(this),m(this))},o(e,[{key:"closed",get:function(){return"closed"===this._state}}]),e}(),O=function(){function e(e){this._subscription=e}var t=e.prototype;return t.next=function(e){_(this._subscription,"next",e)},t.error=function(e){_(this._subscription,"error",e)},t.complete=function(){_(this._subscription,"complete")},o(e,[{key:"closed",get:function(){return"closed"===this._subscription._state}}]),e}(),k=function(){function e(t){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if("function"!=typeof t)throw new TypeError("Observable initializer must be a function");this._subscriber=t}var t=e.prototype;return t.subscribe=function(e){return"object"==typeof e&&null!==e||(e={next:e,error:arguments[1],complete:arguments[2]}),new w(e,this._subscriber)},t.forEach=function(e){var t=this;return new Promise((function(n,r){if("function"==typeof e)var i=t.subscribe({next:function(t){try{e(t,o)}catch(e){r(e),i.unsubscribe()}},error:r,complete:n});else r(new TypeError(e+" is not a function"));function o(){i.unsubscribe(),n()}}))},t.map=function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");return new(d(this))((function(n){return t.subscribe({next:function(t){try{t=e(t)}catch(e){return n.error(e)}n.next(t)},error:function(e){n.error(e)},complete:function(){n.complete()}})}))},t.filter=function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");return new(d(this))((function(n){return t.subscribe({next:function(t){try{if(!e(t))return}catch(e){return n.error(e)}n.next(t)},error:function(e){n.error(e)},complete:function(){n.complete()}})}))},t.reduce=function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");var n=d(this),r=arguments.length>1,i=!1,o=arguments[1],u=o;return new n((function(n){return t.subscribe({next:function(t){var o=!i;if(i=!0,!o||r)try{u=e(u,t)}catch(e){return n.error(e)}else u=t},error:function(e){n.error(e)},complete:function(){if(!i&&!r)return n.error(new TypeError("Cannot reduce an empty sequence"));n.next(u),n.complete()}})}))},t.concat=function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=d(this);return new i((function(t){var r,o=0;return function e(u){r=u.subscribe({next:function(e){t.next(e)},error:function(e){t.error(e)},complete:function(){o===n.length?(r=void 0,t.complete()):e(i.from(n[o++]))}})}(e),function(){r&&(r.unsubscribe(),r=void 0)}}))},t.flatMap=function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");var n=d(this);return new n((function(r){var i=[],o=t.subscribe({next:function(t){if(e)try{t=e(t)}catch(e){return r.error(e)}var o=n.from(t).subscribe({next:function(e){r.next(e)},error:function(e){r.error(e)},complete:function(){var e=i.indexOf(o);e>=0&&i.splice(e,1),u()}});i.push(o)},error:function(e){r.error(e)},complete:function(){u()}});function u(){o.closed&&0===i.length&&r.complete()}return function(){i.forEach((function(e){return e.unsubscribe()})),o.unsubscribe()}}))},t[l]=function(){return this},e.from=function(t){var n="function"==typeof this?this:e;if(null==t)throw new TypeError(t+" is not an object");var i=p(t,l);if(i){var o=i.call(t);if(Object(o)!==o)throw new TypeError(o+" is not an object");return h(o)&&o.constructor===n?o:new n((function(e){return o.subscribe(e)}))}if(a("iterator")&&(i=p(t,c)))return new n((function(e){y((function(){if(!e.closed){for(var n,o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(i.call(t));!(n=o()).done;){var u=n.value;if(e.next(u),e.closed)return}e.complete()}}))}));if(Array.isArray(t))return new n((function(e){y((function(){if(!e.closed){for(var n=0;n<t.length;++n)if(e.next(t[n]),e.closed)return;e.complete()}}))}));throw new TypeError(t+" is not observable")},e.of=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="function"==typeof this?this:e;return new i((function(e){y((function(){if(!e.closed){for(var t=0;t<n.length;++t)if(e.next(n[t]),e.closed)return;e.complete()}}))}))},o(e,null,[{key:f,get:function(){return this}}]),e}();u()&&Object.defineProperty(k,Symbol("extensions"),{value:{symbol:l,hostReportError:v},configurable:!0})}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);i.r(o);var u={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){u[e]=function(){return n[e]}}));return u.default=function(){return n},i.d(o,u),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e};var o={};return function(){"use strict";i.d(o,{default:function(){return Se}});var e=i(5231),t=i(9892),n=i(9430),r=i(6252),u=i(1641),a=i(5436),s=i(1596),c=i(7294),l=i(1668);const f=l("deeplinks:gql:mutation"),p=f.extend("log"),d=f.extend("error"),h=l.disable();l.enable(`${h?`${h},`:""}${d.namespace}`);const v=({tableName:e,operation:t,queryName:n=`${t}_${e}`,returning:r="id",variables:i})=>{p("generateMutationOptions",{tableName:e,operation:t,queryName:n,returning:r,variables:i});const o="insert"===t?["objects","on_conflict"]:"update"===t?["_inc","_set","where"]:"delete"===t?["where"]:[],u=(e=>({distinct_on:`[${e}_select_column!]`,limit:"Int",offset:"Int",order_by:`[${e}_order_by!]`,where:`${e}_bool_exp!`,objects:`[${e}_insert_input!]!`,object:`${e}_insert_input!`,_inc:`${e}_inc_input`,_set:`${e}_set_input`,on_conflict:`${e}_on_conflict`}))(e);return(a,s)=>{p("generateMutationBuilder",{tableName:e,operation:t,queryName:n,returning:r,variables:i,alias:a,index:s});const c=[],l=[];for(let e=0;e<o.length;e++){const t=o[e];i[t]&&(c.push(`$${t+s}: ${u[t]}`),l.push(`${t}: $${t}${s}`))}const f=`${a}${"number"==typeof s?s:""}`,d=`returning { ${r} }`,h={};for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e)){const t=i[e];h[e+s]=t}const v={tableName:e,operation:t,queryName:n,returning:r,variables:i,resultReturning:d,fields:o,fieldTypes:u,index:s,defs:c,args:l,alias:a,resultAlias:f,resultVariables:h};return p("generateMutationResult",v),v}},y=(e,t,n)=>v(Object.assign({tableName:e,operation:"insert",variables:t},n)),m=(e,t,n)=>v(Object.assign({tableName:e,operation:"update",variables:t},n)),g=(e,t,n)=>v(Object.assign({tableName:e,operation:"delete",variables:t},n)),b=l("deeplinks:gql:query"),_=b.extend("log"),w=b.extend("error"),O=l.disable();l.enable(`${O?`${O},`:""}${w.namespace}`);const k=({tableName:e,operation:t="query",queryName:n=`${e}`,returning:r="id",variables:i})=>{_("generateQuery",{tableName:e,operation:t,queryName:n,returning:r,variables:i});const o=["distinct_on","limit","offset","order_by","where"],u=(e=>({distinct_on:`[${e}_select_column!]`,limit:"Int",offset:"Int",order_by:`[${e}_order_by!]`,where:`${e}_bool_exp!`}))(e);return(a,s)=>{_("generateQueryBuilder",{tableName:e,operation:t,queryName:n,returning:r,variables:i,alias:a,index:s});const c=[],l=[];for(let e=0;e<o.length;e++){const t=o[e];c.push(`$${t+s}: ${u[t]}`),l.push(`${t}: $${t}${s}`)}const f=`${a}${"number"==typeof s?s:""}`,p={};for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e)){const t=i[e];p[e+s]=t}const d={tableName:e,operation:t,queryName:n,returning:r,variables:i,resultReturning:r,fields:o,fieldTypes:u,index:s,defs:c,args:l,alias:a,resultAlias:f,resultVariables:p};return _("generateQueryResult",d),d}},T=({queries:e=[],operation:t="query",name:r="QUERY",alias:i="q"})=>{_("generateQuery",{name:r,alias:i,queries:e});const o=e.map(((e,t)=>"function"==typeof e?e(i,t):e)),u=`${t} ${r} (${o.map((e=>e.defs.join(","))).join(",")}) { ${o.map((e=>`${e.resultAlias}: ${e.queryName}(${e.args.join(",")}) { ${e.resultReturning} }`)).join("")} }`,a=n.ZP`${u}`,s={};for(let e=0;e<o.length;e++){const t=o[e];for(const e in t.resultVariables)if(Object.prototype.hasOwnProperty.call(t.resultVariables,e)){const n=t.resultVariables[e];s[e]=n}}const c={query:a,variables:s,queryString:u};return _("generateQueryResult",JSON.stringify({query:u,variables:s},null,2)),c};const E=l("deeplinks:gql:serial"),S=E.extend("log"),C=E.extend("error"),x=l.disable();l.enable(`${x?`${x},`:""}${C.namespace}`);const I=e=>{var{actions:t=[],name:r="SERIAL",alias:i="m"}=e,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["actions","name","alias"]);S("generateSerial",{name:r,alias:i,actions:t});const u=t.map(((e,t)=>"function"==typeof e?e(i,t):e)),a=`mutation ${r} (${u.map((e=>e.defs.join(","))).join(",")}) { ${u.map((e=>`${e.resultAlias}: ${e.queryName}(${e.args.join(",")}) { ${e.resultReturning} }`)).join("")} }`,s=n.ZP`${a}`,c={};for(let e=0;e<u.length;e++){const t=u[e];for(const e in t.resultVariables)if(Object.prototype.hasOwnProperty.call(t.resultVariables,e)){const n=t.resultVariables[e];c[e]=n}}const l=Object.assign({mutation:s,variables:c,mutationString:a},o);return S("generateSerialResult",JSON.stringify({mutation:a,variables:c},null,2)),l};var j=i(2729),A=i(8446),N=i(7187);const D=(e,t,n="links")=>{var r,i,o,u,a,s,c,l;const f=Object.keys(e);if("links"===n)for(const c in f){const l=f[c];if("_and"===l){for(const r in e[l])if(!D(e[l][r],t,n))return!1}else{if("_or"===l){let r=!1;for(const i in e[l])if(D(e[l][i],t,n)){r=!0;break}return r}if("_not"===l){if(D(e[l],t,n))return!1}else if(null===(i=null===(r=null==ce?void 0:ce[n])||void 0===r?void 0:r.fields)||void 0===i?void 0:i[l]){if(!P(e,t,l,n))return!1}else if("links"===(null===(u=null===(o=null==ce?void 0:ce[n])||void 0===o?void 0:o.relations)||void 0===u?void 0:u[l])){if("object"==typeof e[l])if("number"==typeof e[l].length){if(!e[l].length)return!1;let r=!1;for(const i in null==t?void 0:t[l]){const o=null==t?void 0:t[l][i];if(D(e[l],o,n)){r=!0;break}}if(!r)return!1}else if(Array.isArray(null==t?void 0:t[l])){let r=!1;for(const i in null==t?void 0:t[l])if(D(e[l],null==t?void 0:t[l][i],n)){r=!0;break}if(!r)return!1}else if(!D(e[l],null==t?void 0:t[l],n))return!1}else{if("value"!==(null===(s=null===(a=null==ce?void 0:ce[n])||void 0===a?void 0:a.relations)||void 0===s?void 0:s[l]))return!1;if(!(null==t?void 0:t[l])||!D(e[l],null==t?void 0:t[l],"value"))return!1}}}else{if("value"!==n)return!1;for(const r in f){const i=f[r];if(!(null===(l=null===(c=null==ce?void 0:ce[n])||void 0===c?void 0:c.fields)||void 0===l?void 0:l[i]))return!1;if(!P(e,t,i,n))return!1}}return!0},P=(e,t,n,r="links")=>{var i,o,u,a,s,c,l,f,p,d,h,v,y,m,g,b;const _=null==e?void 0:e[n];if(void 0===_)throw new Error(`${n} === undefined`);return"object"==typeof(null==t?void 0:t[n])&&Array.isArray(null==t?void 0:t[n])?!(_.hasOwnProperty("_eq")&&!(null==t?void 0:t[n].includes(_._eq)))&&(!_.hasOwnProperty("_neq")||!(null==t?void 0:t[n].includes(_._neq)))&&void 0:!(void 0===(null==t?void 0:t[n])||_.hasOwnProperty("_eq")&&(null==t?void 0:t[n])!==_._eq||_.hasOwnProperty("_neq")&&(null==t?void 0:t[n])===_._neq||_.hasOwnProperty("_gt")&&!((null==t?void 0:t[n])>_._gt)||_.hasOwnProperty("_gte")&&!((null==t?void 0:t[n])>=_._gte)||_.hasOwnProperty("_lt")&&!((null==t?void 0:t[n])<_._lt)||_.hasOwnProperty("_lte")&&!((null==t?void 0:t[n])<=_._lte)||_.hasOwnProperty("_is_null")&&null===(null==t?void 0:t[n])===_._is_null||_.hasOwnProperty("_in")&&!(null===(i=null==_?void 0:_._in)||void 0===i?void 0:i.includes(null==t?void 0:t[n]))||_.hasOwnProperty("_nin")&&(null===(o=null==_?void 0:_._nin)||void 0===o?void 0:o.includes(null==t?void 0:t[n]))||!(!_.hasOwnProperty("_ilike")||(null===(u=null==t?void 0:t[n])||void 0===u?void 0:u.toLowerCase)&&(null===(s=null===(a=null==t?void 0:t[n])||void 0===a?void 0:a.toLowerCase())||void 0===s?void 0:s.includes(null===(c=null==_?void 0:_._ilike)||void 0===c?void 0:c.toLowerCase())))||!(!_.hasOwnProperty("_nilike")||(null===(l=null==t?void 0:t[n])||void 0===l?void 0:l.toLowerCase)&&(null===(p=null===(f=null==t?void 0:t[n])||void 0===f?void 0:f.toLowerCase())||void 0===p?void 0:p.includes(null===(d=null==_?void 0:_._nilike)||void 0===d?void 0:d.toLowerCase())))||_.hasOwnProperty("_like")&&!(null===(h=null==t?void 0:t[n])||void 0===h?void 0:h.includes(null==_?void 0:_._like))||_.hasOwnProperty("_nlike")&&!(null===(v=null==t?void 0:t[n])||void 0===v?void 0:v.includes(null==_?void 0:_._nlike))||!(!_.hasOwnProperty("_iregex")||(null===(y=null==t?void 0:t[n])||void 0===y?void 0:y.toLowerCase)&&(null===(m=null==t?void 0:t[n])||void 0===m?void 0:m.toLowerCase().match(null==_?void 0:_._iregex)))||_.hasOwnProperty("_regex")&&!(null==t?void 0:t[n].match(null==_?void 0:_._regex))||!(!_.hasOwnProperty("_niregex")||(null===(g=null==t?void 0:t[n])||void 0===g?void 0:g.toLowerCase)&&(null===(b=null==t?void 0:t[n])||void 0===b?void 0:b.toLowerCase().match(null==_?void 0:_._niregex)))||_.hasOwnProperty("_nregex")&&!(null==t?void 0:t[n].match(null==_?void 0:_._nregex)))},R=l("deeplinks:minilinks"),F=R.extend("log"),M=R.extend("error"),L=l.disable();l.enable(`${L?`${L},`:""}${M.namespace}`);const q={id:"id",type_id:"type_id",type:"type",typed:"typed",from_id:"from_id",from:"from",out:"out",to_id:"to_id",to:"to",in:"in",inByType:"inByType",outByType:"outByType",equal:(e,t)=>e.type_id==t.type_id&&e.from_id==t.from_id&&e.to_id==t.to_id&&A(e.value,t.value),Link:class{constructor(e){this._applies=[],Object.assign(this,e),e.value&&("string"!=typeof e.value.value||this.string||(this.string=e.value),"number"!=typeof e.value.value||this.number||(this.number=e.value),"object"!=typeof e.value.value||this.object||(this.object=e.value))}toPlain(){return{id:this.id,type_id:this.type_id,from_id:this.from_id,to_id:this.to_id,value:this.value}}is(e){return((e,t)=>{if("number"==typeof e)return t.id===e;{const n=de(e);return D(n,t,"links")}})(e,this)}}};class V{query(e){return((e,t)=>{if("number"==typeof e)return[t.byId[e]];{const n=de(e),r=((e,t)=>t.links.filter((t=>D(e,t,"links"))))(n.where,t);return n.limit?r.slice(n.offset||0,(n.offset||0)+n.limit):r}})(e,this)}add(e){var t,n,r,i,o,u,a;F("add",e,this);const{byId:s,byFrom:c,byTo:l,byType:f,links:p,options:d}=this,h=[],v=[],y=[];for(let a=0;a<e.length;a++)if(s[e[a][d.id]]&&v.push(new Error(`${e[a][d.id]} can't add because already exists in collection`)),s[e[a][d.id]])d.handler&&d.handler(s[e[a][d.id]],this);else{const h=new this.options.Link(Object.assign(Object.assign({ml:this,_applies:[]},e[a]),{[d.typed]:[],[d.in]:[],[d.out]:[],[d.inByType]:{},[d.outByType]:{}}));if(s[h[d.id]]=h,h[d.from_id]&&(c[h[d.from_id]]?c[h[d.from_id]].push(h):c[h[d.from_id]]=[h]),h[d.to_id]&&(l[h[d.to_id]]?l[h[d.to_id]].push(h):l[h[d.to_id]]=[h]),h[d.type_id]&&(f[h[d.type_id]]?f[h[d.type_id]].push(h):f[h[d.type_id]]=[h]),null===(t=f[h[d.id]])||void 0===t?void 0:t.length)for(let e=0;e<(null===(n=f[h[d.id]])||void 0===n?void 0:n.length);e++){const t=f[h[d.id]][e];t.type=h,h[d.typed].push(t)}if(null===(r=c[h[d.id]])||void 0===r?void 0:r.length)for(let e=0;e<(null===(i=c[h[d.id]])||void 0===i?void 0:i.length);e++){const t=c[h[d.id]][e];t[d.from]=h,h[d.out].push(t),h[d.outByType][t[d.type_id]]=h[d.outByType][t[d.type_id]]||[],h[d.outByType][t[d.type_id]].push(t)}if(null===(o=l[h[d.id]])||void 0===o?void 0:o.length)for(let e=0;e<(null===(u=l[h[d.id]])||void 0===u?void 0:u.length);e++){const t=l[h[d.id]][e];t[d.to]=h,h[d.in].push(t),h[d.inByType][t[d.type_id]]=h[d.inByType][t[d.type_id]]||[],h[d.inByType][t[d.type_id]].push(t)}p.push(h),y.push(h)}for(let e=0;e<y.length;e++){const t=y[e],n=s[t[d.type_id]],r=s[t[d.from_id]],i=s[t[d.to_id]];n?(t[d.type]=n,n[d.typed].find((e=>e.id===t.id))||n[d.typed].push(t)):t[d.type_id]&&h.push(new Error(`${t[d.id]} link.type_id ${t[d.type_id]} not founded`)),r?(t[d.from]=r,r[d.out].find((e=>e.id===t.id))||r[d.out].push(t),r[d.outByType][t[d.type_id]]=r[d.outByType][t[d.type_id]]||[],(null===(a=null==r?void 0:r[d.outByType])||void 0===a?void 0:a[t[d.type_id]].find((e=>e.id===t.id)))||r[d.outByType][t[d.type_id]].push(t)):t[d.from_id]&&h.push(new Error(`${t[d.id]} link.from_id ${t[d.from_id]} not founded`)),i?(t[d.to]=i,i[d.in].find((e=>e.id===t.id))||i[d.in].push(t),i[d.inByType][t[d.type_id]]=i[d.inByType][t[d.type_id]]||[],i[d.inByType][t[d.type_id]].find((e=>e.id===t.id))||i[d.inByType][t[d.type_id]].push(t)):t[d.to_id]&&h.push(new Error(`${t[d.id]} link.to_id ${t[d.to_id]} not founded`)),d.handler&&d.handler(t,this)}for(let e=0;e<y.length;e++){const t=y[e];this._updating||this.emitter.emit("added",void 0,t)}return{anomalies:h,errors:v}}remove(e){var t,n,r,i,o,u,a,s,c,l,f,p;F("remove",e,this);const{byId:d,byFrom:h,byTo:v,byType:y,types:m,links:g,options:b}=this,_=[],w=[],O={};for(let t=0;t<e.length;t++){const n=e[t],r=d[n];F("remove old l:",t,"id:",n,"link:",r),r&&(w.push(r),O[n]=r)}for(let m=0;m<e.length;m++){const g=e[m],O=w[m];O||_.push(new Error(`${g} can't delete because not exists in collection`)),j(null===(t=null==O?void 0:O[b.to])||void 0===t?void 0:t[b.in],(e=>e.id===g)),j(null===(n=null==O?void 0:O[b.from])||void 0===n?void 0:n[b.out],(e=>e.id===g)),j((null==h?void 0:h[null==O?void 0:O[b.from_id]])||[],(e=>e.id===g)),j((null==v?void 0:v[null==O?void 0:O[b.to_id]])||[],(e=>e.id===g)),j((null==y?void 0:y[null==O?void 0:O[b.type_id]])||[],(e=>e.id===g)),j((null===(i=null===(r=null==O?void 0:O[b.from])||void 0===r?void 0:r.outByType)||void 0===i?void 0:i[O.type_id])||[],(e=>e.id===g)),j((null===(u=null===(o=null==O?void 0:O[b.to])||void 0===o?void 0:o.inByType)||void 0===u?void 0:u[O.type_id])||[],(e=>e.id===g));for(let e=0;e<(null===(a=null==h?void 0:h[g])||void 0===a?void 0:a.length);e++)(null===(s=null==h?void 0:h[g])||void 0===s?void 0:s[e])[b.from]=void 0;for(let e=0;e<(null===(c=null==v?void 0:v[g])||void 0===c?void 0:c.length);e++)(null===(l=null==v?void 0:v[g])||void 0===l?void 0:l[e])[b.to]=void 0;for(let e=0;e<(null===(f=null==y?void 0:y[g])||void 0===f?void 0:f.length);e++)(null===(p=null==y?void 0:y[g])||void 0===p?void 0:p[e])[b.type]=void 0;null==d||delete d[g]}j(g,(t=>e.includes(t[b.id])));for(let e=0;e<w.length;e++){const t=w[e];F("emit removed link",t,"_updating",this._updating),this._updating||this.emitter.emit("removed",t)}return{anomalies:[],errors:_}}apply(e,t=""){F("apply",e,this);const{byId:n,byFrom:r,byTo:i,byType:o,types:u,links:a,options:s}=this,c=[],l=[],f={},p=[],d={};for(let r=0;r<e.length;r++){const i=e[r],o=n[i.id];o?(~o._applies.indexOf(t)?i._applies=o._applies:(i._applies=o._applies=[...o._applies,t],this.emitter.emit("apply",o,i)),s.equal(o,i)||(l.push(i),f[i.id]=o)):(i._applies=[t],this.emitter.emit("apply",o,i),c.push(i)),d[i.id]=i}for(let e=0;e<a.length;e++){const n=a[e];if(!d[n.id]){const e=n._applies.indexOf(t);~e&&(1===n._applies.length?p.push(n):(n._applies.splice(e,1),this.emitter.emit("apply",n,n)))}}const h=this.remove(p.map((e=>e[s.id]))),v=this.add(c);this._updating=!0;const y=this.remove(l.map((e=>e[s.id]))),m=this.add(l);for(let e=0;e<l.length;e++){const t=l[e];this.emitter.emit("updated",f[t.id],n[t.id])}return this._updating=!1,{errors:[...h.errors,...v.errors,...y.errors,...m.errors],anomalies:[...h.anomalies,...v.anomalies,...y.anomalies,...m.anomalies]}}constructor(e,t){this.useMinilinksQuery=G,this.useMinilinksFilter=B,this.useMinilinksApply=z,this.useMinilinksSubscription=W,this.useMinilinksHandle=$,this.types={},this.byId={},this.byFrom={},this.byTo={},this.byType={},this.links=[],this._updating=!1;const n=e||q;this.types=this.byType=(null==t?void 0:t.types)||{},this.byId=(null==t?void 0:t.byId)||{},this.byFrom=(null==t?void 0:t.byFrom)||{},this.byTo=(null==t?void 0:t.byTo)||{},this.links=(null==t?void 0:t.links)||[],this.options=n,this.emitter=new N}}const Q=(U=q,function(e=[],t={}){const n=new V(U,t);return n.add(e),n});var U;function B(e,t,n,r){const[i,o]=(0,c.useState)();return(0,c.useEffect)((()=>{const i=(r,i)=>{t(i,r,i)&&o(n(i,e,r,i))};e.emitter.on("added",i);const u=(r,i)=>{t(i,r,i)&&o(n(i,e,r,i))};e.emitter.on("updated",u);const a=(r,i)=>{t(r,r,i)&&o(n(r,e,r,i))};e.emitter.on("removed",a);const s=(r,i)=>{t(i,r,i)&&o(n(i,e,r,i))};let c;return r&&(c=setTimeout((()=>{n(void 0,e)}),r)),e.emitter.on("apply",s),()=>{clearTimeout(c),e.emitter.removeListener("added",i),e.emitter.removeListener("updated",u),e.emitter.removeListener("removed",a),e.emitter.removeListener("apply",s)}}),[]),(0,c.useEffect)((()=>{o(n(void 0,e,void 0,void 0))}),[t,n]),i}function $(e,t){(0,c.useEffect)((()=>{const n=(e,n)=>{t("added",e,n)};e.emitter.on("added",n);const r=(e,n)=>{t("updated",e,n)};e.emitter.on("updated",r);const i=(e,n)=>{t("removed",e,n)};e.emitter.on("removed",i);const o=(e,n)=>{t("apply",e,n)};return e.emitter.on("apply",o),()=>{e.emitter.removeListener("added",n),e.emitter.removeListener("updated",r),e.emitter.removeListener("removed",i),e.emitter.removeListener("apply",o)}}),[])}function z(e,t,n){const[r]=(0,c.useState)(t);(0,c.useEffect)((()=>()=>{e.apply([],r)}),[]),e.apply(n,r)}function G(e,t){return(0,c.useMemo)((()=>e.query(t)),[e,t])}function W(e,t){const[n,r]=(0,c.useState)(0);return(0,c.useEffect)((()=>{const e=setInterval((()=>{r(n===Number.MAX_SAFE_INTEGER?0:n+1)}),1e3);return()=>clearInterval(e)}),[]),e.query(t)}const J=l("deeplinks:promise"),H=J.extend("log"),K=J.extend("error"),Y=l.disable();l.enable(`${Y?`${Y},`:""}${K.namespace}`);const Z=e=>new Promise((t=>setTimeout((()=>t(null)),e)));i(5152);var X=i(9210);const ee=n.Ps`mutation RESERVE($count: Int!) {
  reserve(count: $count) {
    ids
  }
}`;var te=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}s((r=r.apply(e,t||[])).next())}))},ne=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};const re=l("deeplinks:client"),ie=re.extend("log"),oe=re.extend("error"),ue=l.disable();l.enable(`${ue?`${ue},`:""}${oe.namespace}`);const ae={};[{id:"Type",type:"Type",from:"Any",to:"Any"},{id:"Package",type:"Type"},{id:"Contain",type:"Type",from:"Any",to:"Any"},{id:"Value",type:"Type",from:"Any",to:"Type"},{id:"String",type:"Type"},{id:"Number",type:"Type"},{id:"Object",type:"Type"},{id:"Any",type:"Type"},{id:"Promise",type:"Type"},{id:"Then",type:"Type",from:"Any",to:"Promise"},{id:"Resolved",type:"Type",from:"Promise",to:"Any"},{id:"Rejected",type:"Type",from:"Promise",to:"Any"},{id:"typeValue",type:"Value",from:"Type",to:"String"},{id:"packageValue",type:"Value",from:"Package",to:"String"},{id:"Type"},{id:"Package"},{id:"Contain"},{id:"Value"},{id:"Any"},{id:"Promise"},{id:"Then"},{id:"Resolved"},{id:"Rejected"},{id:"Selector",type:"Type"},{id:"SelectorInclude",type:"Type",from:"Selector",to:"Any"},{id:"Rule",type:"Type"},{id:"RuleSubject",type:"Type",from:"Rule",to:"Selector"},{id:"RuleObject",type:"Type",from:"Rule",to:"Selector"},{id:"RuleAction",type:"Type",from:"Rule",to:"Selector"},{id:"containValue",type:"Value",from:"Contain",to:"String"},{id:"User",type:"Type"},{id:"Operation",type:"Type"},{id:"operationValue",type:"Value",from:"Operation",to:"String"},{id:"AllowInsert",type:"Operation"},{id:"AllowUpdate",type:"Operation"},{id:"AllowDelete",type:"Operation"},{id:"AllowSelect",type:"Operation"},{id:"File",type:"Type"},{id:"SyncTextFile",type:"File"},{id:"syncTextFileValue",type:"Value",from:"SyncTextFile",to:"String"},{id:"ExecutionProvider",type:"Type"},{id:"JSExecutionProvider",type:"ExecutionProvider"},{id:"TreeInclude",type:"Type",from:"Type",to:"Any"},{id:"Handler",type:"Type",from:"Supports",to:"Any"},{id:"Tree",type:"Type"},{id:"TreeIncludeDown",type:"TreeInclude",from:"Tree",to:"Any"},{id:"TreeIncludeUp",type:"TreeInclude",from:"Tree",to:"Any"},{id:"TreeIncludeNode",type:"TreeInclude",from:"Tree",to:"Any"},{id:"containTree",type:"Tree"},{id:"containTreeContain",type:"TreeIncludeDown",from:"containTree",to:"Contain"},{id:"containTreeAny",type:"TreeIncludeNode",from:"containTree",to:"Any"},{id:"PackageNamespace",type:"Type"},{id:"packageNamespaceValue",type:"Value",from:"PackageNamespace",to:"String"},{id:"PackageActive",type:"Type",from:"PackageNamespace",to:"Package"},{id:"PackageVersion",type:"Type",from:"PackageNamespace",to:"Package"},{id:"packageVersionValue",type:"Value",from:"PackageVersion",to:"String"},{id:"HandleOperation",type:"Type",from:"Type",to:"Type"},{id:"HandleInsert",type:"HandleOperation",from:"Any",to:"Handler"},{id:"HandleUpdate",type:"HandleOperation",from:"Any",to:"Handler"},{id:"HandleDelete",type:"HandleOperation",from:"Any",to:"Handler"},{id:"PromiseResult",type:"Type"},{id:"promiseResultValueRelationTable",type:"Value",from:"PromiseResult",to:"Object"},{id:"PromiseReason",type:"Type",from:"Any",to:"Any"},{id:"Focus",type:"Type",from:"Any",to:"Any"},{id:"focusValue",type:"Value",from:"Focus",to:"Object"},{id:"AsyncFile",type:"File"},{id:"Query",type:"Type"},{id:"queryValue",type:"Value",from:"Query",to:"Object"},{id:"Fixed",type:"Type"},{id:"fixedValue",type:"Value",from:"Fixed",to:"Object"},{id:"Space",type:"Type"},{id:"spaceValue",type:"Value",from:"Space",to:"String"},{id:"AllowLogin",type:"Operation"},{id:"guests",type:"Any"},{id:"Join",type:"Type",from:"Any",to:"Any"},{id:"joinTree",type:"Tree"},{id:"joinTreeJoin",type:"TreeIncludeUp",from:"joinTree",to:"Join"},{id:"joinTreeAny",type:"TreeIncludeNode",from:"joinTree",to:"Any"},{id:"SelectorTree",type:"Type",from:"Any",to:"Tree"},{id:"AllowAdmin",type:"Operation"},{id:"SelectorExclude",type:"Type",from:"Selector",to:"Any"},{id:"SelectorFilter",type:"Type",from:"Selector",to:"Query"},{id:"HandleSchedule",type:"HandleOperation",from:"Any",to:"Handler"},{id:"Schedule",type:"Type"},{id:"scheduleValue",type:"Value",from:"Schedule",to:"String"},{id:"Router",type:"Type",value:{value:"Router"}},{id:"IsolationProvider",type:"Type"},{id:"DockerIsolationProvider",type:"IsolationProvider"},{id:"dockerIsolationProviderValue",type:"Value",from:"DockerIsolationProvider",to:"String"},{id:"JSDockerIsolationProvider",type:"DockerIsolationProvider",value:{value:"deepf/js-docker-isolation-provider:main"}},{id:"Supports",type:"Type",from:"Any",to:"Any"},{id:"dockerSupportsJs",type:"Supports",from:"JSDockerIsolationProvider",to:"JSExecutionProvider"},{id:"PackageInstall",type:"Type",from:"Any",to:"PackageQuery"},{id:"PackagePublish",type:"Type",from:"Package",to:"PackageQuery"},{id:"packageInstallCode",type:"SyncTextFile",value:{value:"\nasync ({ deep, require, gql, data: { newLink } }) => {\n  const { data: [pq] } = await deep.select({ id: newLink.to_id });\n  const { data: { packager_install: imported }, error } = await deep.apolloClient.query({\n    query: gql`query PACKAGE_INSTALL($address: String!) {\n      packager_install(input: { address: $address }) {\n        ids\n        packageId\n        errors\n      }\n    }`,\n    variables: {\n      address: pq?.value?.value,\n    },\n  });\n  if (error) throw error;\n  if (imported?.errors?.length) throw imported.errors;\n  await deep.insert({\n    type_id: await deep.id('@deep-foundation/core', 'Contain'),\n    from_id: newLink.from_id,\n    to_id: imported.packageId,\n  });\n  return imported;\n}\n    "}},{id:"packageInstallCodeHandler",type:"Handler",from:"dockerSupportsJs",to:"packageInstallCode"},{id:"packageInstallCodeHandleInsert",type:"HandleInsert",from:"PackageInstall",to:"packageInstallCodeHandler"},{id:"packagePublishCode",type:"SyncTextFile",value:{value:"\nasync ({ deep, require, gql, data: { newLink } }) => {\n  const { data: [pq] } = await deep.select({ id: newLink.to_id });\n  const { data: { packager_publish: exported }, error } = await deep.apolloClient.query({\n    query: gql`query PACKAGE_PUBLISH($address: String!, $id: Int) {\n      packager_publish(input: { address: $address, id: $id }) {\n        address\n        errors\n      }\n    }`,\n    variables: {\n      address: pq?.value?.value,\n      id: newLink.from_id,\n    },\n  });\n  if (error) throw error;\n  if (exported?.errors?.length) throw exported.errors;\n  return exported;\n}\n    "}},{id:"packagePublishCodeHandler",type:"Handler",from:"dockerSupportsJs",to:"packagePublishCode"},{id:"packagePublishCodeHandleInsert",type:"HandleInsert",from:"PackagePublish",to:"packagePublishCodeHandler"},{id:"Active",type:"Type",from:"Any",to:"Any"},{id:"AllowPackageInstall",type:"Operation"},{id:"AllowPackagePublish",type:"Operation"},{id:"PromiseOut",type:"Type",from:"Promise",to:"Any"},{id:"promiseOutValue",type:"Value",from:"PromiseOut",to:"String"},{id:"PackageQuery",type:"Type"},{id:"packageQueryValue",type:"Value",from:"PackageQuery",to:"String"},{id:"Port",type:"Type",value:{value:"Port"}},{id:"portValue",type:"Value",from:"Port",to:"Number"},{id:"HandlePort",type:"HandleOperation",from:"Port",to:"Any"},{id:"PackageInstalled",type:"Type",from:"Package",to:"PackageQuery"},{id:"PackagePublished",type:"Type",from:"Package",to:"PackageQuery"},{id:"Route",type:"Type"},{id:"RouterListening",type:"Type",from:"Router",to:"Port"},{id:"RouterStringUse",type:"Type",from:"Route",to:"Router"},{id:"routerStringUseValue",type:"Value",from:"RouterStringUse",to:"String"},{id:"HandleRoute",type:"HandleOperation",from:"Route",to:"Handler"},{id:"routeTree",type:"Tree"},{id:"routeTreePort",type:"TreeIncludeNode",from:"routeTree",to:"Port"},{id:"routeTreeRouter",type:"TreeIncludeNode",from:"routeTree",to:"Router"},{id:"routeTreeRoute",type:"TreeIncludeNode",from:"routeTree",to:"Route"},{id:"routeTreeHandler",type:"TreeIncludeNode",from:"routeTree",to:"Handler"},{id:"routeTreeRouterListening",type:"TreeIncludeUp",from:"routeTree",to:"RouterListening"},{id:"routeTreeRouterStringUse",type:"TreeIncludeUp",from:"routeTree",to:"RouterStringUse"},{id:"routeTreeHandleRoute",type:"TreeIncludeDown",from:"routeTree",to:"HandleRoute"},{id:"TreeIncludeIn",type:"TreeInclude",from:"Tree",to:"Any"},{id:"TreeIncludeOut",type:"TreeInclude",from:"Tree",to:"Any"},{id:"TreeIncludeFromCurrent",type:"TreeInclude",from:"Tree",to:"Any"},{id:"TreeIncludeToCurrent",type:"TreeInclude",from:"Tree",to:"Any"},{id:"TreeIncludeCurrentFrom",type:"TreeInclude",from:"Tree",to:"Any"},{id:"TreeIncludeCurrentTo",type:"TreeInclude",from:"Tree",to:"Any"},{id:"TreeIncludeFromCurrentTo",type:"TreeInclude",from:"Tree",to:"Any"},{id:"TreeIncludeToCurrentFrom",type:"TreeInclude",from:"Tree",to:"Any"},{id:"AllowInsertType",type:"Operation"},{id:"AllowUpdateType",type:"Operation"},{id:"AllowDeleteType",type:"Operation"},{id:"AllowSelectType",type:"Operation"},{id:"ruleTree",type:"Tree"},{id:"ruleTreeRule",type:"TreeIncludeNode",from:"ruleTree",to:"Rule"},{id:"ruleTreeRuleAction",type:"TreeIncludeDown",from:"ruleTree",to:"RuleAction"},{id:"ruleTreeRuleObject",type:"TreeIncludeDown",from:"ruleTree",to:"RuleObject"},{id:"ruleTreeRuleSubject",type:"TreeIncludeDown",from:"ruleTree",to:"RuleSubject"},{id:"ruleTreeRuleSelector",type:"TreeIncludeNode",from:"ruleTree",to:"Selector"},{id:"ruleTreeRuleQuery",type:"TreeIncludeNode",from:"ruleTree",to:"Query"},{id:"ruleTreeRuleSelectorInclude",type:"TreeIncludeDown",from:"ruleTree",to:"SelectorInclude"},{id:"ruleTreeRuleSelectorExclude",type:"TreeIncludeDown",from:"ruleTree",to:"SelectorExclude"},{id:"ruleTreeRuleSelectorFilter",type:"TreeIncludeDown",from:"ruleTree",to:"SelectorFilter"},{id:"Plv8IsolationProvider",type:"IsolationProvider"},{id:"JSminiExecutionProvider",type:"ExecutionProvider"},{id:"plv8SupportsJs",type:"Supports",from:"Plv8IsolationProvider",to:"JSminiExecutionProvider"},{id:"Authorization",type:"Type",from:"Any",to:"Any"},{id:"GeneratedFrom",type:"Type",from:"Any",to:"Any"},{id:"ClientJSIsolationProvider",type:"IsolationProvider"},{id:"clientSupportsJs",type:"Supports",from:"ClientJSIsolationProvider",to:"JSExecutionProvider"},{id:"Symbol",type:"Type",from:"Any",to:"Any"},{id:"symbolValue",type:"Value",from:"Symbol",to:"String"},{id:"containTreeSymbol",type:"TreeIncludeToCurrent",from:"containTree",to:"Symbol"},{id:"containTreeThen",type:"TreeIncludeFromCurrentTo",from:"containTree",to:"Then"},{id:"containTreeResolved",type:"TreeIncludeFromCurrentTo",from:"containTree",to:"Resolved"},{id:"containTreeRejected",type:"TreeIncludeFromCurrentTo",from:"containTree",to:"Rejected"},{id:"handlersTree",type:"Tree"},{id:"handlersTreeHandler",type:"TreeIncludeUp",from:"handlersTree",to:"Handler"},{id:"handlersTreeSupports",type:"TreeIncludeOut",from:"handlersTree",to:"Supports"},{id:"handlersTreeHandleOperation",type:"TreeIncludeUp",from:"handlersTree",to:"HandleOperation"},{id:"HandleClient",type:"HandleOperation",from:"Any",to:"Handler"},{id:"HandlingError",type:"Type"},{id:"handlingErrorValue",type:"Value",from:"HandlingError",to:"Object"},{id:"HandlingErrorReason",type:"Type",from:"HandlingError",to:"Any"},{id:"HandlingErrorLink",type:"Type",from:"HandlingError",to:"Any"},{id:"GqlEndpoint",type:"Type"},{id:"MainGqlEndpoint",type:"GqlEndpoint"},{id:"HandleGql",type:"Type",from:"GqlEndpoint",to:"HandleRoute"},{id:"SupportsCompatable",type:"Type",from:"Supports",to:"HandleOperation"},{id:"plv8JSSupportsCompatableHandleInsert",type:"SupportsCompatable",from:"plv8SupportsJs",to:"HandleInsert"},{id:"plv8JSSupportsCompatableHandleUpdate",type:"SupportsCompatable",from:"plv8SupportsJs",to:"HandleUpdate"},{id:"plv8JSSupportsCompatableHandleDelete",type:"SupportsCompatable",from:"plv8SupportsJs",to:"HandleDelete"},{id:"dockerJSSupportsCompatableHandleInsert",type:"SupportsCompatable",from:"dockerSupportsJs",to:"HandleInsert"},{id:"dockerJSSupportsCompatableHandleUpdate",type:"SupportsCompatable",from:"dockerSupportsJs",to:"HandleUpdate"},{id:"dockerJSSupportsCompatableHandleDelete",type:"SupportsCompatable",from:"dockerSupportsJs",to:"HandleDelete"},{id:"dockerJSSupportsCompatableHandleSchedule",type:"SupportsCompatable",from:"dockerSupportsJs",to:"HandleSchedule"},{id:"dockerJSSupportsCompatableHandlePort",type:"SupportsCompatable",from:"dockerSupportsJs",to:"HandlePort"},{id:"dockerJSSupportsCompatableHandleRoute",type:"SupportsCompatable",from:"dockerSupportsJs",to:"HandleRoute"},{id:"clientJSSupportsCompatableHandleClient",type:"SupportsCompatable",from:"clientSupportsJs",to:"HandleClient"},{id:"promiseTree",type:"Tree"},{id:"promiseTreeAny",type:"TreeIncludeNode",from:"promiseTree",to:"Any"},{id:"promiseTreeThen",type:"TreeIncludeDown",from:"promiseTree",to:"Then"},{id:"promiseTreePromise",type:"TreeIncludeNode",from:"promiseTree",to:"Promise"},{id:"promiseTreeResolved",type:"TreeIncludeDown",from:"promiseTree",to:"Resolved"},{id:"promiseTreeRejected",type:"TreeIncludeDown",from:"promiseTree",to:"Rejected"},{id:"promiseTreePromiseResult",type:"TreeIncludeNode",from:"promiseTree",to:"PromiseResult"},{id:"MigrationsEnd",type:"Type"},{id:"typesTree",type:"Tree"}].filter((e=>!!e.type)).forEach(((e,t)=>{ae[e.id]=t+1}));const se={"@deep-foundation/core":ae},ce={links:{fields:{id:"number",from_id:"number",to_id:"number",type_id:"number"},relations:{from:"links",to:"links",type:"links",in:"links",out:"links",typed:"links",selected:"selector",selectors:"selector",value:"value",string:"value",number:"value",object:"value",can_rule:"can",can_action:"can",can_object:"can",can_subject:"can",down:"tree",up:"tree",tree:"tree",root:"tree"}},selector:{fields:{item_id:"number",selector_id:"number",query_id:"number",selector_include_id:"number"},relations:{item:"links",selector:"links",query:"links"}},can:{fields:{rule_id:"number",action_id:"number",object_id:"number",subject_id:"number"},relations:{rule:"links",action:"links",object:"links",subject:"links"}},tree:{fields:{id:"number",link_id:"number",tree_id:"number",root_id:"number",parent_id:"number",depth:"number",position_id:"string"},relations:{link:"links",tree:"links",root:"links",parent:"links",by_link:"tree",by_tree:"tree",by_root:"tree",by_parent:"tree",by_position:"tree"}},value:{fields:{id:"number",link_id:"number",value:"value"},relations:{link:"links"}}},le={_and:!0,_not:!0,_or:!0},fe=(e,...t)=>{var n,r;let i="string"==typeof e?{type_id:null===(n=null==se?void 0:se["@deep-foundation/core"])||void 0===n?void 0:n.Package,value:e}:{id:e};for(let e=0;e<t.length;e++){const n=t[e];"boolean"!=typeof n&&(i={in:{type_id:null===(r=null==se?void 0:se["@deep-foundation/core"])||void 0===r?void 0:r.Contain,value:n,from:i}})}return i},pe=(e,t="links")=>{var n,r,i,o;if("[object Array]"===Object.prototype.toString.call(e))return e.map((e=>pe(e,t)));if("object"==typeof e){const u=Object.keys(e),a={};for(let s=0;s<u.length;s++){const c=u[s],l=typeof e[c];if(void 0===e[c])throw new Error(`${c} === undefined`);let f=!1;const p=!!~["type_id","from_id","to_id"].indexOf(c);if("links"===t?"string"===l||"number"===l?f="value"===c||c===l?a[l]={value:{_eq:e[c]}}:a[c]={_eq:e[c]}:le[c]||"[object Array]"!==Object.prototype.toString.call(e[c])||(f=a[c]=pe(fe(...e[c]))):"tree"===t?"string"===l||"number"===l?f=a[c]={_eq:e[c]}:le[c]||"[object Array]"!==Object.prototype.toString.call(e[c])||(f=a[c]=pe(fe(...e[c]))):"value"===t&&("string"!==l&&"number"!==l||(f=a[c]={_eq:e[c]})),"object"===l&&e[c].hasOwnProperty("_type_of")&&("links"===t&&(p||"id"===c)||"selector"===t&&"item_id"===c||"can"===t&&~["rule_id","action_id","subject_id","object_id"].indexOf(c)||"tree"===t&&~["link_id","tree_id","root_id","parent_id"].indexOf(c)||"value"===t&&"link_id"===c)){const t=f={_by_item:{path_item_id:{_eq:e[c]._type_of},group_id:{_eq:0}}};"id"===c?a._and=a._and?[...a._and,t]:[t]:a[c.slice(0,-3)]=t}else if("object"===l&&e[c].hasOwnProperty("_id")&&("links"===t&&(p||"id"===c)||"selector"===t&&"item_id"===c||"can"===t&&~["rule_id","action_id","subject_id","object_id"].indexOf(c)||"tree"===t&&~["link_id","tree_id","root_id","parent_id"].indexOf(c)||"value"===t&&"link_id"===c)&&"[object Array]"===Object.prototype.toString.call(e[c]._id)&&e[c]._id.length>=1){const t=f=pe(fe(e[c]._id[0],...e[c]._id.slice(1)),"links");"id"===c?a._and=a._and?[...a._and,t]:[t]:a[c.slice(0,-3)]=t}if(!f){const u=le[c]?pe(e[c],t):(null===(r=null===(n=null==ce?void 0:ce[t])||void 0===n?void 0:n.relations)||void 0===r?void 0:r[c])?pe(e[c],null===(o=null===(i=null==ce?void 0:ce[t])||void 0===i?void 0:i.relations)||void 0===o?void 0:o[c]):e[c];"_and"===c?a._and?a._and.push(...u):a._and=u:a[c]=u}}return a}if(void 0===e)throw new Error("undefined in query");return e},de=(e,t="links")=>{const{limit:n,order_by:r,offset:i,distinct_on:o}=e,u=ne(e,["limit","order_by","offset","distinct_on"]),a={where:"object"==typeof e?"[object Array]"===Object.prototype.toString.call(e)?{id:{_in:e}}:pe(u,t):{id:{_eq:e}}};return n&&(a.limit=n),r&&(a.order_by=r),i&&(a.offset=i),o&&(a.distinct_on=o),a};function he(e){var n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(t(n).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));const i=JSON.parse(r)["https://hasura.io/jwt/claims"]||{},{"x-hasura-allowed-roles":o,"x-hasura-default-role":u,"x-hasura-user-id":a}=i,s=ne(i,["x-hasura-allowed-roles","x-hasura-default-role","x-hasura-user-id"]);return Object.assign({userId:+a,role:u,roles:o},s)}function ve(e){var t,n,r;for(var i in e)if(e.hasOwnProperty(i))if("object"==typeof e[i]&&null!==e[i]){if("object"==typeof e[i]&&"object"===i&&void 0===(null===(n=null===(t=e[i])||void 0===t?void 0:t.data)||void 0===n?void 0:n.value)){e[i]={data:{value:e[i]}};continue}"object"!=typeof e[i]||"to"!==i&&"from"!==i&&"in"!==i&&"out"!==i||void 0!==(null===(r=e[i])||void 0===r?void 0:r.data)||(e[i]={data:e[i]}),ve(e[i])}else("string"===i&&"string"==typeof e[i]||"number"===i&&"number"==typeof e[i])&&(e[i]={data:{value:e[i]}})}class ye{_silent(e={}){return"boolean"==typeof e.silent?e.silent:this.silent}constructor(t){var n,r,i;if(this.useDeepSubscription=Ee,this.useDeepQuery=Te,this.useMinilinksQuery=e=>G(this.minilinks,e),this.useMinilinksSubscription=e=>W(this.minilinks,e),this.useDeep=ke,this.DeepProvider=Oe,this.DeepContext=_e,this.serializeQuery=de,this.serializeWhere=pe,this.deep=t.deep,this.apolloClient||(this.apolloClient=t.apolloClient),!this.deep&&!t.apolloClient)throw new Error("options.apolloClient or options.deep is required");if(this.deep&&!this.apolloClient&&!t.apolloClient&&t.token&&(this.apolloClient=(0,e.generateApolloClient)({path:null===(n=this.deep.apolloClient)||void 0===n?void 0:n.path,ssl:null===(r=this.deep.apolloClient)||void 0===r?void 0:r.ssl,token:t.token})),!this.apolloClient)throw new Error("apolloClient is invalid");this.client=this.apolloClient,this.minilinks=t.minilinks||new V,this.table=t.table||"links",this.linkId=t.linkId,this.token=t.token,this.handleAuth=(null==t?void 0:t.handleAuth)||(null===(i=null==t?void 0:t.deep)||void 0===i?void 0:i.handleAuth),this.linksSelectReturning=t.linksSelectReturning||t.selectReturning||"id type_id from_id to_id value",this.selectReturning=t.selectReturning||this.linksSelectReturning,this.valuesSelectReturning=t.valuesSelectReturning||"id link_id value",this.selectorsSelectReturning=t.selectorsSelectReturning||"item_id selector_id",this.filesSelectReturning=t.filesSelectReturning||"id link_id name mimeType",this.insertReturning=t.insertReturning||"id",this.updateReturning=t.updateReturning||"id",this.deleteReturning=t.deleteReturning||"id",this.defaultSelectName=t.defaultSelectName||"SELECT",this.defaultInsertName=t.defaultInsertName||"INSERT",this.defaultUpdateName=t.defaultUpdateName||"UPDATE",this.defaultDeleteName=t.defaultDeleteName||"DELETE",this.silent=t.silent||!1}stringify(e){if("string"==typeof e){let t;try{t=JSON.parse(e)}catch(e){}return t?JSON.stringify(t,null,2):e.toString()}return"object"==typeof e?JSON.stringify(e,null,2):e}select(e,t){var n,r,i;return te(this,void 0,void 0,(function*(){if(!e)return{error:{message:"!exp"},data:void 0,loading:!1,networkStatus:void 0};const o=de(e,(null==t?void 0:t.table)||"links"),u=(null==t?void 0:t.table)||this.table,a=null!==(n=null==t?void 0:t.returning)&&void 0!==n?n:"links"===u?this.linksSelectReturning:["strings","numbers","objects"].includes(u)?this.valuesSelectReturning:"selectors"===u?this.selectorsSelectReturning:"files"===u?this.filesSelectReturning:"id",s=null==t?void 0:t.variables,c=(null==t?void 0:t.name)||this.defaultSelectName;try{const e=yield this.apolloClient.query(T({queries:[k({tableName:u,returning:a,variables:Object.assign(Object.assign({},s),o)})],name:c}));return Object.assign(Object.assign({},e),{data:null===(i=null===(r=e)||void 0===r?void 0:r.data)||void 0===i?void 0:i.q0})}catch(e){throw new Error(`DeepClient Select Error: ${e.message}`,{cause:e})}}))}insert(e,t){var n,r,i,o,u,a,s,c,l,f;return te(this,void 0,void 0,(function*(){const p="[object Array]"===Object.prototype.toString.call(e)?e:[e];ve(p);const d=(null==t?void 0:t.table)||this.table,h=(null==t?void 0:t.returning)||this.insertReturning,v=null==t?void 0:t.variables,m=(null==t?void 0:t.name)||this.defaultInsertName;let g={};try{g=yield this.apolloClient.mutate(I({actions:[y(d,Object.assign(Object.assign({},v),{objects:p}),{tableName:d,operation:"insert",returning:h})],name:m}))}catch(e){const c=null===(o=null===(i=null===(r=null===(n=null==e?void 0:e.graphQLErrors)||void 0===n?void 0:n[0])||void 0===r?void 0:r.extensions)||void 0===i?void 0:i.internal)||void 0===o?void 0:o.error;if((null==c?void 0:c.message)&&(e.message=c.message),!this._silent(t))throw new Error(`DeepClient Insert Error: ${e.message}`,{cause:e});return Object.assign(Object.assign({},g),{data:null===(s=null===(a=null===(u=g)||void 0===u?void 0:u.data)||void 0===a?void 0:a.m0)||void 0===s?void 0:s.returning,error:e})}return Object.assign(Object.assign({},g),{data:null===(f=null===(l=null===(c=g)||void 0===c?void 0:c.data)||void 0===l?void 0:l.m0)||void 0===f?void 0:f.returning})}))}update(e,t,n){var r,i,o,u,a,s,c,l,f,p;return te(this,void 0,void 0,(function*(){const d=de(e,(null==n?void 0:n.table)!==this.table&&(null==n?void 0:n.table)?"value":"links"),h=(null==n?void 0:n.table)||this.table,v=(null==n?void 0:n.returning)||this.updateReturning,y=null==n?void 0:n.variables,g=(null==n?void 0:n.name)||this.defaultUpdateName;let b;try{b=yield this.apolloClient.mutate(I({actions:[m(h,Object.assign(Object.assign(Object.assign({},y),d),{_set:t}),{tableName:h,operation:"update",returning:v})],name:g}))}catch(e){const t=null===(u=null===(o=null===(i=null===(r=null==e?void 0:e.graphQLErrors)||void 0===r?void 0:r[0])||void 0===i?void 0:i.extensions)||void 0===o?void 0:o.internal)||void 0===u?void 0:u.error;if((null==t?void 0:t.message)&&(e.message=t.message),!this._silent(n))throw new Error(`DeepClient Update Error: ${e.message}`,{cause:e});return Object.assign(Object.assign({},b),{data:null===(c=null===(s=null===(a=b)||void 0===a?void 0:a.data)||void 0===s?void 0:s.m0)||void 0===c?void 0:c.returning,error:e})}return Object.assign(Object.assign({},b),{data:null===(p=null===(f=null===(l=b)||void 0===l?void 0:l.data)||void 0===f?void 0:f.m0)||void 0===p?void 0:p.returning})}))}delete(e,t){var n,r,i,o,u,a,s,c,l,f;return te(this,void 0,void 0,(function*(){if(!e)throw new Error("!exp");const p=de(e,(null==t?void 0:t.table)!==this.table&&(null==t?void 0:t.table)?"value":"links"),d=(null==t?void 0:t.table)||this.table,h=(null==t?void 0:t.returning)||this.deleteReturning,v=null==t?void 0:t.variables,y=(null==t?void 0:t.name)||this.defaultDeleteName;let m;try{m=yield this.apolloClient.mutate(I({actions:[g(d,Object.assign(Object.assign(Object.assign({},v),p),{returning:h}),{tableName:d,operation:"delete",returning:h})],name:y}))}catch(e){const c=null===(o=null===(i=null===(r=null===(n=null==e?void 0:e.graphQLErrors)||void 0===n?void 0:n[0])||void 0===r?void 0:r.extensions)||void 0===i?void 0:i.internal)||void 0===o?void 0:o.error;if((null==c?void 0:c.message)&&(e.message=c.message),!this._silent(t))throw new Error(`DeepClient Delete Error: ${e.message}`,{cause:e});return Object.assign(Object.assign({},m),{data:null===(s=null===(a=null===(u=m)||void 0===u?void 0:u.data)||void 0===a?void 0:a.m0)||void 0===s?void 0:s.returning,error:e})}return Object.assign(Object.assign({},m),{data:null===(f=null===(l=null===(c=m)||void 0===c?void 0:c.data)||void 0===l?void 0:l.m0)||void 0===f?void 0:f.returning})}))}serial({name:e,operations:t,returning:n,silent:r}){var i,o,u,a,s,c,l,f,p;return te(this,void 0,void 0,(function*(){let d={};d=t.reduce(((e,t)=>(e[t.type]||(e[t.type]={}),e[t.type][t.table]||(e[t.type][t.table]=[]),e[t.type][t.table].push(t),e)),d);let h,v=[];Object.keys(d).map((e=>{const t=d[e];Object.keys(t).map((r=>{const i=t[r];if("insert"===e){const t=y(r,{objects:i.map((e=>Array.isArray(e.objects)?e.objects:[e.objects])).flat()},{tableName:r,operation:e,returning:n});v.push(t)}else if("update"===e){const t=i.map((t=>{const i=t.exp,o=t.value,u=de(i,r!==this.table&&r?"value":"links");return m(r,Object.assign(Object.assign({},u),{_set:o}),{tableName:r,operation:e,returning:n})}));v=[...v,...t]}else if("delete"===e){const t=i.map((t=>{const i=t.exp,o=de(i,r!==this.table&&r?"value":"links");return g(r,Object.assign({},o),{tableName:r,operation:e,returning:n})}));v=[...v,...t]}}))}));try{h=yield this.apolloClient.mutate(I({actions:v,name:null!=e?e:"Name"}))}catch(e){const t=null===(a=null===(u=null===(o=null===(i=null==e?void 0:e.graphQLErrors)||void 0===i?void 0:i[0])||void 0===o?void 0:o.extensions)||void 0===u?void 0:u.internal)||void 0===a?void 0:a.error;if((null==t?void 0:t.message)&&(e.message=t.message),!r)throw e;return Object.assign(Object.assign({},h),{data:null===(l=null===(c=null===(s=h)||void 0===s?void 0:s.data)||void 0===c?void 0:c.m0)||void 0===l?void 0:l.returning,error:e})}return Object.assign(Object.assign({},h),{data:(null===(f=h)||void 0===f?void 0:f.data)&&Object.values(null===(p=h)||void 0===p?void 0:p.data).flatMap((e=>e.returning))})}))}reserve(e){return function(e){var t,n,r,i,o;return n=this,r=void 0,o=function*(){const n=e.count,r=yield e.client.mutate({mutation:ee,variables:{count:n}});return null===(t=null==r?void 0:r.data)||void 0===t?void 0:t.reserve.ids},new((i=void 0)||(i=Promise))((function(e,t){function u(e){try{s(o.next(e))}catch(e){t(e)}}function a(e){try{s(o.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(u,a)}s((o=o.apply(n,r||[])).next())}))}({count:e,client:this.apolloClient})}await(e,t={results:!1}){return te(this,void 0,void 0,(function*(){return function(e){const t=e.id,n=e.timeout||1e3,r=e.client;return new Promise(((i,o)=>{return u=this,a=void 0,c=function*(){var u,a,s,c;if(H("promise",{id:t}),!t)return H("!id",{id:e.id}),o("options.id must be defined!");let l=null;try{for(;;){const f=yield r.query(T({queries:[k({tableName:"links",returning:"\n          id type { id value } from_id to_id\n          ",variables:{where:{_or:[{from_id:{_eq:t},type_id:{_eq:e.Then},to:{_not:{out:{type_id:{_in:[e.Resolved,e.Rejected]}}}}},{type_id:{_eq:e.Promise},in:{type_id:{_eq:e.Then},from_id:{_eq:t}}},{from:{type_id:{_eq:e.Promise},in:{type_id:{_eq:e.Then},from_id:{_eq:t}}},type_id:{_in:[e.Resolved,e.Rejected]}}]}}})],name:"PROMISE"}));H("result",JSON.stringify(f,null,2));try{if(null==f?void 0:f.errors)return H("error",null==f?void 0:f.errors),o(null==f?void 0:f.errors);if(null==f?void 0:f.data){const n=null===(u=f.data)||void 0===u?void 0:u.q0;if(H("data",JSON.stringify(n,null,2)),null===l){l={};for(let t=0;t<n.length;t++){const r=n[t];(null===(a=null==r?void 0:r.type)||void 0===a?void 0:a.id)===e.Then&&(l[null==r?void 0:r.to_id]=!0)}}let r={},o={};for(let t=0;t<n.length;t++){const i=n[t];(null===(s=null==i?void 0:i.type)||void 0===s?void 0:s.id)===e.Resolved?r[null==i?void 0:i.from_id]=!0:(null===(c=null==i?void 0:i.type)||void 0===c?void 0:c.id)===e.Rejected&&(o[null==i?void 0:i.from_id]=!0)}let p=Object.keys(l).length>0;if(H("analized",{thenExists:p}),!p)return H("!then"),i(!e.Results||[]);{let u=[],a=[];for(let e in l)u.push(!!r[e]),a.push(!!o[e]);const s=u.some((e=>e)),c=a.some((e=>e));H("analized",{thenResolved:s,thenRejected:c});const f=n.filter((n=>{var r,i,o,u;return(null==n?void 0:n.id)===t||(null===(r=null==n?void 0:n.type)||void 0===r?void 0:r.id)===e.Then||(null===(i=null==n?void 0:n.type)||void 0===i?void 0:i.id)===e.Promise&&l[null==n?void 0:n.id]||(null===(o=null==n?void 0:n.type)||void 0===o?void 0:o.id)===e.Resolved&&l[null==n?void 0:n.from_id]||(null===(u=null==n?void 0:n.type)||void 0===u?void 0:u.id)===e.Rejected&&l[null==n?void 0:n.from_id]}));if(H("filteredLinks",JSON.stringify(f,null,2)),s&&!c)return H("resolved"),i(!e.Results||f);if(c)return H("rejected"),i(!!e.Results&&f);H("waiting")}}}catch(t){return K("error",t),o(!!e.Results&&t)}yield Z(n)}}catch(t){return K("error",t),o(!!e.Results&&t)}},new((s=void 0)||(s=Promise))((function(e,t){function n(e){try{i(c.next(e))}catch(e){t(e)}}function r(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(n,r)}i((c=c.apply(u,a||[])).next())}));var u,a,s,c}))}({id:e,client:this.apolloClient,Then:yield this.id("@deep-foundation/core","Then"),Promise:yield this.id("@deep-foundation/core","Promise"),Resolved:yield this.id("@deep-foundation/core","Resolved"),Rejected:yield this.id("@deep-foundation/core","Rejected"),Results:t.results})}))}id(e,...t){var n,r,i,o,u,a,s;return te(this,void 0,void 0,(function*(){if("object"==typeof e)return null===(i=null===(r=null===(n=yield this.select(e))||void 0===n?void 0:n.data)||void 0===r?void 0:r[0])||void 0===i?void 0:i.id;if(null===(o=null==se?void 0:se[e])||void 0===o?void 0:o[t[0]])return se[e][t[0]];const c=yield this.select(fe(e,...t));if(c.error)throw c.error;const l=(null===(a=null===(u=null==c?void 0:c.data)||void 0===u?void 0:u[0])||void 0===a?void 0:a.id)|(null===(s=null==se?void 0:se[e])||void 0===s?void 0:s[null==t?void 0:t[0]])|0;if(!l&&!0!==t[t.length-1])throw new Error(`Id not found by [${JSON.stringify([e,...t])}]`);return l}))}idLocal(e,...t){var n;if(null===(n=null==se?void 0:se[e])||void 0===n?void 0:n[t[0]])return se[e][t[0]];const r=se["@deep-foundation/core"].Contain,i=this.minilinks.query({in:Object.assign(Object.assign({type_id:r,from:Object.assign(Object.assign({},"number"==typeof e&&{id:e}),"string"==typeof e&&{string:{value:{_eq:e}}})},"string"==typeof t[0]&&{string:{value:{_eq:t[0]}}}),"boolean"==typeof t[0]&&{})});if(i.length>0)return i[0].id;throw new Error(`Id not found by [${JSON.stringify([e,...t])}]`)}guest(e={}){var t;return te(this,void 0,void 0,(function*(){const n="boolean"!=typeof e.relogin||e.relogin,r=yield this.apolloClient.query({query:be}),{linkId:i,token:o,error:u}=(null===(t=null==r?void 0:r.data)||void 0===t?void 0:t.guest)||{};return!u&&o&&n&&(null==this?void 0:this.handleAuth)&&setTimeout((()=>null==this?void 0:this.handleAuth(+i,o)),0),{linkId:i,token:o,error:u||i&&o?u:"unexepted"}}))}jwt(e){var t;return te(this,void 0,void 0,(function*(){const n="boolean"==typeof e.relogin&&e.relogin;if(!(null==e?void 0:e.token)){if(null==e?void 0:e.linkId){const r=yield this.apolloClient.query({query:me,variables:{linkId:+e.linkId}}),{linkId:i,token:o,error:u}=(null===(t=null==r?void 0:r.data)||void 0===t?void 0:t.jwt)||{};return!u&&o&&n&&(null==this?void 0:this.handleAuth)&&setTimeout((()=>null==this?void 0:this.handleAuth(+i,o)),0),{linkId:i,token:o,error:u||(i?void 0:"unexepted")}}return{error:"linkId or token must be provided"}}try{const t=null==e?void 0:e.token,r=he(t),i=null==r?void 0:r.userId;return t&&n&&(null==this?void 0:this.handleAuth)&&setTimeout((()=>null==this?void 0:this.handleAuth(+i,t)),0),{linkId:i,token:t,error:i&&t?void 0:"unexepted"}}catch(e){return{error:e}}}))}whoami(){var e,t,n,r;return te(this,void 0,void 0,(function*(){const i=yield this.apolloClient.query({query:ge});return this.linkId=null===(t=null===(e=null==i?void 0:i.data)||void 0===e?void 0:e.jwt)||void 0===t?void 0:t.linkId,null===(r=null===(n=null==i?void 0:i.data)||void 0===n?void 0:n.jwt)||void 0===r?void 0:r.linkId}))}login(e){return te(this,void 0,void 0,(function*(){return yield this.jwt(Object.assign(Object.assign({},e),{relogin:!0}))}))}logout(){return te(this,void 0,void 0,(function*(){return(null==this?void 0:this.handleAuth)&&setTimeout((()=>null==this?void 0:this.handleAuth(0,"")),0),{linkId:0,token:""}}))}can(e,t,n,r=this.linkId){var i;return te(this,void 0,void 0,(function*(){const r={};e&&(r.object_id="number"==typeof e?{_eq:+e}:{_in:e}),t&&(r.subject_id="number"==typeof t?{_eq:+t}:{_in:t}),n&&(r.action_id="number"==typeof n?{_eq:+n}:{_in:n});const o=yield this.select(r,{table:"can",returning:"rule_id"});return!!(null===(i=null==o?void 0:o.data)||void 0===i?void 0:i.length)}))}name(e){var t;return te(this,void 0,void 0,(function*(){const n="number"==typeof e?e:e.id,{data:[r]}=yield this.select({type_id:{_id:["@deep-foundation/core","Contain"]},to_id:n});return null===(t=null==r?void 0:r.value)||void 0===t?void 0:t.value}))}nameLocal(e){var t,n,r;const i="number"==typeof e?e:null==e?void 0:e.id;if(i)return null===(r=null===(n=null===(t=this.minilinks.byType[this.idLocal("@deep-foundation/core","Contain")])||void 0===t?void 0:t.find((e=>(null==e?void 0:e.to_id)===i)))||void 0===n?void 0:n.value)||void 0===r?void 0:r.value}}const me=n.Ps`query JWT($linkId: Int) {
  jwt(input: {linkId: $linkId}) {
    linkId
    token
  }
}`,ge=n.Ps`query WHOISME {
  jwt(input: {}) {
    linkId
  }
}`,be=n.Ps`query GUEST {
  guest {
    linkId
    token
  }
}`,_e=(0,c.createContext)(void 0);function we(e){const t=(0,r.x)(),n=e||t,[i,o]=(0,s.useLocalStore)("use_auth_link_id",0),[u,a]=function(){const[e,t]=(0,s.useLocalStore)("dc-dg-token",""),[n,r]=(0,X.useCookiesStore)("dc-dg-token","");return[e||n,e=>{const n=t(e);return r(e),n}]}(),l=(0,c.useMemo)((()=>((null==n?void 0:n.jwt_token)||ie({token:u,apolloClient:n}),new ye({apolloClient:n,linkId:i,token:u,handleAuth:(e,t)=>{a(t),o(e)}}))),[n]);return l}function Oe({apolloClient:e,children:t}){const n=we(e);return c.createElement(_e.Provider,{value:n},t)}function ke(){return(0,c.useContext)(_e)}function Te(e,t){var n,r,i;const[o]=(0,c.useState)((null==t?void 0:t.mini)||Math.random().toString(36).slice(2,7));re("useDeepQuery",o,e,t);const a=ke(),s=(0,c.useMemo)((()=>{const n=de(e);return T({operation:"query",queries:[k(Object.assign(Object.assign({tableName:"links",returning:"\n          id type_id from_id to_id value\n          string { id value }\n          number { id value }\n          object { id value }\n        "},t),{variables:Object.assign(Object.assign({},n),null==t?void 0:t.variables)}))],name:(null==t?void 0:t.name)||"USE_DEEP_QUERY"})}),[e,t]),l=(0,u.a)(s.query,{variables:null==s?void 0:s.variables});z(a.minilinks,o,(null===(n=null==l?void 0:l.data)||void 0===n?void 0:n.q0)||[]);const f=a.useMinilinksSubscription({id:{_in:null===(i=null===(r=null==l?void 0:l.data)||void 0===r?void 0:r.q0)||void 0===i?void 0:i.map((e=>e.id))}});return Object.assign(Object.assign({},l),{data:f})}function Ee(e,t){var n,r,i;const[o]=(0,c.useState)((null==t?void 0:t.mini)||Math.random().toString(36).slice(2,7));re("useDeepSubscription",o,e,t);const u=ke(),s=(0,c.useMemo)((()=>{const n=de(e);return T({operation:"subscription",queries:[k(Object.assign(Object.assign({tableName:"links",returning:"\n          id type_id from_id to_id value\n          string { id value }\n          number { id value }\n          object { id value }\n        "},t),{variables:Object.assign(Object.assign({},n),null==t?void 0:t.variables)}))],name:(null==t?void 0:t.name)||"USE_DEEP_SUBSCRIPTION"})}),[e,t]),l=(0,a.m)(s.query,{variables:null==s?void 0:s.variables});z(u.minilinks,o,(null===(n=null==l?void 0:l.data)||void 0===n?void 0:n.q0)||[]);const f=W(u.minilinks,{id:{_in:null===(i=null===(r=null==l?void 0:l.data)||void 0===r?void 0:r.q0)||void 0===i?void 0:i.map((e=>e.id))}});return Object.assign(Object.assign({},l),{data:f})}var Se={makeDeepClient:function(t,n,r){return i=this,o=void 0,a=function*(){const i=(0,e.generateApolloClient)({path:t,ssl:n,token:r});if(r){const e=he(r),t=null==e?void 0:e.userId;return new ye({apolloClient:i,linkId:t,token:r})}const o=new ye({apolloClient:i}),u=yield o.guest(),a=new ye(Object.assign({deep:o},u)),s=yield a.login({linkId:yield a.id("deep","admin")});return new ye(Object.assign({deep:a},s))},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{s(a.next(e))}catch(e){t(e)}}function r(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof u?i:new u((function(e){e(i)}))).then(n,r)}s((a=a.apply(i,o||[])).next())}));var i,o,u,a},generateApolloClient:e.generateApolloClient,DeepClient:ye,parseJwt:he,minilinks:Q}}(),o.default}()}));
;

$node[ "../ss/linkpad/lib/deep/main.bundle" ] = $node[ "../ss/linkpad/lib/deep/main.bundle.js" ] = module.exports }.call( {} , {} )
;
"use strict";
var $;
(function ($) {
    function $mol_compare_text(item = (item) => String(item)) {
        return (a, b) => {
            const text_a = item(a).trim().toLowerCase();
            const text_b = item(b).trim().toLowerCase();
            const parts_a = text_a.split(/(\d+)/);
            const parts_b = text_b.split(/(\d+)/);
            const count = Math.max(parts_a.length, parts_b.length);
            for (let i = 0; i < count; ++i) {
                const part_a = parts_a[i] || '';
                const part_b = parts_b[i] || '';
                const diff = Number(part_a) - Number(part_b);
                if (diff)
                    return diff;
                if (part_a > part_b)
                    return 1;
                if (part_a < part_b)
                    return -1;
            }
            return parts_a.length - parts_b.length;
        };
    }
    $.$mol_compare_text = $mol_compare_text;
})($ || ($ = {}));
//mol/compare/text/text.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_linkpad extends $.$ss_linkpad {
            typeLinks = new Set();
            ui_id(id) {
                return id;
            }
            guid() {
                return $mol_guid();
            }
            undef_guid() {
                return $mol_guid();
            }
            Type_link_id() {
                return this.Type_link()?.value('id');
            }
            Type_link() {
                $mol_wire_solid();
                const Type_id = 'Type';
                const data = this.Link_data(Type_id, new $ss_linkpad_link_data({ id: Type_id, type_id: '0_0' }));
                data.name('Type');
                return data;
            }
            Contain_link() {
                $mol_wire_solid();
                const Type_id = this.Type_link_id();
                return this.add_DEV(Type_id, 'Contain', null, true);
            }
            Package_link() {
                $mol_wire_solid();
                const Type_id = this.Type_link_id();
                return this.add_DEV(Type_id, 'Package', null, true);
            }
            Admin_link() {
                $mol_wire_solid();
                const Type_id = this.Type_link_id();
                const TUser = this.add_DEV(Type_id, 'User', null, true);
                const User = this.add_DEV(TUser[1], 'admin', null, true);
                return User;
            }
            add_DEV(type_id, name_or_val, parent_ui_id, node) {
                const id = this.guid();
                const ui_id = $ss_linkpad_link_ui_id_build(id, parent_ui_id);
                if (node) {
                    const from_id = parent_ui_id ? $ss_linkpad_link_id_from_ui(parent_ui_id) : undefined;
                    this.to_link(parent_ui_id, this.Link(ui_id));
                    const data = this.Link_data(id, new $ss_linkpad_link_data({ id, type_id, from_id, hue: this.color_gen().get_next_hue() }));
                }
                else {
                    const data = this.Link_data(id, new $ss_linkpad_link_data({ id, type_id, hue: this.color_gen().get_next_hue() }));
                }
                if (type_id == this.Type_link_id()) {
                    this.Link_data(id)?.name(name_or_val);
                }
                else {
                    this.Link_data(id)?.val(name_or_val);
                }
                return ui_id;
            }
            add_undef(name_or_val, parent_ui_id, node) {
                const id = this.undef_guid();
                const ui_id = $ss_linkpad_link_ui_id_build(id, parent_ui_id);
                const type_id = this.Type_link_id();
                if (node) {
                    const from_id = parent_ui_id ? $ss_linkpad_link_id_from_ui(parent_ui_id) : undefined;
                    this.to_link(parent_ui_id, this.Link(ui_id));
                    const data = this.Link_data(id, new $ss_linkpad_link_data({ id, type_id, from_id, hue: this.color_gen().get_next_hue() }));
                }
                else {
                    const data = this.Link_data(id, new $ss_linkpad_link_data({ id, type_id, hue: this.color_gen().get_next_hue() }));
                }
                this.Link_data(id)?.name(name_or_val);
                return ui_id;
            }
            add_link(args) {
                const { from, link, pos } = args;
                const links = [...this.link_links_id(from)];
                if (pos === undefined) {
                    this.link_links_id(from, [...links, link[1]]);
                }
                else {
                    this.link_links_id(from, [...links.slice(0, pos), link[1], ...links.slice(pos)]);
                }
            }
            add_new_link(args) {
                const { from, pos, val } = args;
                const link = this.add_DEV(this.Type_link_id(), val || 'newlink', from);
                this.Link_data(link[1])?.undef(true);
                this.add_link({ from, link, pos });
                const to_link = this.add_DEV(this.Type_link_id(), '', link, true);
                this.Link_data(to_link[1])?.undef(true);
                return this.Link(link);
            }
            replace(args) {
                const { ui_id, new_id, new_to, new_type_id } = args;
                const parent_ui_id = ui_id[0];
                const old_id = ui_id[1];
                if (new_id) {
                    const links = [...this.link_links_id(parent_ui_id)];
                    const ind = links.findIndex(id => id == old_id);
                    links[ind] = new_id;
                    this.link_links_id(parent_ui_id, links);
                    return $ss_linkpad_link_ui_id_build(new_id, parent_ui_id);
                }
                else if (new_to) {
                    this.to_link(parent_ui_id, this.Link(new_to));
                    return new_to;
                }
                else if (new_type_id) {
                    const old_link = this.Link(ui_id);
                    const id = this.guid();
                    const data = this.Link_data(id, new $ss_linkpad_link_data({
                        id,
                        type_id: new_type_id,
                        from_id: old_link.data().from_id(),
                        hue: this.color_gen().get_next_hue()
                    }));
                    const new_ui_id = $ss_linkpad_link_ui_id_build(id, parent_ui_id);
                    const to_link = this.to_link(ui_id);
                    if (to_link) {
                        const to_link_id = to_link.ui_id()[1];
                        const new_to_link_ui_id = $ss_linkpad_link_ui_id_build(to_link_id, new_ui_id);
                        this.to_link(new_ui_id, this.Link(new_to_link_ui_id));
                    }
                    const links = [...this.link_links_id(parent_ui_id)];
                    const ind = links.findIndex(id => id == old_id);
                    if (ind != -1) {
                        links[ind] = id;
                        this.link_links_id(parent_ui_id, links);
                    }
                    else {
                        this.to_link(parent_ui_id, this.Link(new_ui_id));
                    }
                    if (new_type_id == '1006') {
                        const User = this.Admin_link();
                        const Contain = this.Contain_link();
                        const Package = this.Package_link();
                        const User_contain_pack = this.add_DEV(Contain[1], '', User);
                        const Pack = this.add_DEV(Package[1], '@deep-foundation/mathjs', User_contain_pack, true);
                        this.add_link({ from: User, link: User_contain_pack });
                    }
                    return new_ui_id;
                }
            }
            replace_to_link(args) {
                const { link, new_to } = args;
                this.to_link(link, this.Link(new_to));
            }
            gql_path() {
                const path = this.raw_gql_path()?.replace('https://', '');
                return path;
            }
            deep() {
                $ss_linkpad_lib_deep.gql_path(this.gql_path());
                return this.gql_path() ? $ss_linkpad_lib_deep.deep() : null;
            }
            minilinks(data) {
                $mol_wire_solid();
                return data ? $ss_linkpad_lib_deep.minilinks()(data) : null;
            }
            sync_deep() {
                return this.deep() ? $mol_wire_sync(this.deep()) : null;
            }
            ml() {
                const ml = this.minilinks(this.deep_data());
                return ml;
            }
            default_data() {
                const json = $mol_fetch.json('/ss/linkpad/data/default.json');
                return json;
            }
            deep_data() {
                if (!this.gql_path()) {
                    return this.default_data();
                }
                const sync_deep = this.sync_deep();
                const res = sync_deep.select({});
                return res.data;
            }
            nameL = (L) => {
                const containL = L.inByType[3];
                return containL?.find((L) => L.value)?.value.value || '';
            };
            addL = (L, parent_ui_id, node) => {
                const id = L.id.toString();
                const ui_id = $ss_linkpad_link_ui_id_build(id, parent_ui_id);
                if (!this.Link_data(L.type.id + ''))
                    this.Link_data(L.type.id + '', new $ss_linkpad_link_data({
                        id: L.type.id + '',
                        type_id: L.type.type_id + '',
                        hue: this.color_gen().get_next_hue(),
                        name: this.nameL(L.type),
                        val: L.type?.value?.value || '',
                    }));
                let from_id = undefined;
                if (parent_ui_id) {
                    if (node) {
                        from_id = $ss_linkpad_link_id_from_ui(parent_ui_id);
                        this.to_link(parent_ui_id, this.Link(ui_id));
                    }
                    else {
                        this.add_link({ from: parent_ui_id, link: ui_id });
                    }
                }
                if (!this.Link_data(id))
                    this.Link_data(id, new $ss_linkpad_link_data({
                        id,
                        type_id: L.type_id + '',
                        from_id,
                        hue: this.color_gen().get_next_hue(),
                        val: L?.value?.value || '',
                        name: this.nameL(L),
                    }));
                return ui_id;
            };
            sort_linksL = (A, B) => {
                const sort = $mol_compare_text();
                const aStr = this.nameL(A.type) + this.nameL(A.to.type);
                const bStr = this.nameL(B.type) + this.nameL(B.to.type);
                return sort(aStr, bStr);
            };
            add_outL = (L, from_ui_id, depth = 1, visited = new Set()) => {
                if (['Join', 'Focus', 'User', 'Package'].includes(this.nameL(L.type)))
                    return;
                if (visited.has(L.id + ''))
                    return;
                visited.add(L.id + '');
                const out = L.out;
                out.forEach((L) => {
                    const ui_id = this.addL(L, from_ui_id, false);
                    this.addL(L.to, ui_id, true);
                    if (['Join', 'Focus', 'User'].includes(this.nameL(L.type)))
                        return;
                    if (visited.has(L.id + ''))
                        return;
                    visited.add(L.id + '');
                    if (depth > 0)
                        this.add_outL(L, ui_id, --depth, visited);
                });
            };
            right_link_id(next) {
                return this.$.$mol_state_arg.value('right', next) || '';
            }
            Admin_page() {
                const ml = this.ml();
                const TypeL = ml.byId[1];
                this.addL(TypeL, null);
                const AdminL = ml.byId[380];
                const UserL = AdminL.type;
                this.addL(UserL, null);
                const Admin = this.addL(AdminL, null);
                AdminL.out.sort(this.sort_linksL).forEach((L) => {
                    const ui_id = this.addL(L, Admin, false);
                    this.addL(L.to, ui_id, true);
                });
                const AdminPage = this.Link(Admin);
                AdminPage.ui_type = () => 'page';
                return AdminPage;
            }
            Package_page(id) {
                const ml = this.ml();
                if (!id)
                    return null;
                const DeepcaseL = ml.byId[Number(id)];
                if (!DeepcaseL)
                    return null;
                const Deepcase = this.addL(DeepcaseL, null);
                const visited = new Set();
                DeepcaseL.out
                    .sort(this.sort_linksL).forEach((L) => {
                    const ui_id = this.addL(L, Deepcase, false);
                    const to_ui_id = this.addL(L.to, ui_id, true);
                    this.add_outL(L, ui_id, 4, visited);
                    this.add_outL(L.to, to_ui_id, 4, visited);
                });
                const PackagePage = this.Link(Deepcase);
                PackagePage.ui_type = () => 'page';
                return PackagePage;
            }
            Root_user_link() {
                return this.Admin_page();
            }
            Root_package_link() {
                return this.Package_page(this.right_link_id());
            }
            pages() {
                return this.right_link_id() ? super.pages() : [this.Contenteditable_user(), this.Placeholder()];
            }
            auto() {
            }
            all_link_ids(next) {
                $mol_wire_solid();
                return next ?? [];
            }
            upd_link_ids(id) {
                const ids = this.all_link_ids();
                this.all_link_ids([...ids, id]);
            }
            Link_data(link_id, next) {
                if (next !== undefined)
                    this.upd_link_ids(link_id);
                return next ?? null;
            }
            link_data_by_ui_id(ui_id) {
                const link_id = $ss_linkpad_link_id_from_ui(ui_id);
                return this.Link_data(link_id);
            }
            type_data_by_ui_id(ui_id) {
                const link_id = $ss_linkpad_link_id_from_ui(ui_id);
                const type_id = this.Link_data(link_id)?.type_id();
                return this.Link_data(type_id);
            }
            link_links(ui_id) {
                return this.link_links_id(ui_id)
                    .map((id, index) => {
                    const link = this.Link($ss_linkpad_link_ui_id_build(id, ui_id));
                    return link;
                });
            }
        }
        __decorate([
            $mol_mem
        ], $ss_linkpad.prototype, "Type_link", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad.prototype, "Contain_link", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad.prototype, "Package_link", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad.prototype, "Admin_link", null);
        __decorate([
            $mol_action
        ], $ss_linkpad.prototype, "add_DEV", null);
        __decorate([
            $mol_action
        ], $ss_linkpad.prototype, "add_undef", null);
        __decorate([
            $mol_action
        ], $ss_linkpad.prototype, "add_link", null);
        __decorate([
            $mol_action
        ], $ss_linkpad.prototype, "add_new_link", null);
        __decorate([
            $mol_action
        ], $ss_linkpad.prototype, "replace", null);
        __decorate([
            $mol_action
        ], $ss_linkpad.prototype, "replace_to_link", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad.prototype, "gql_path", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad.prototype, "deep", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad.prototype, "minilinks", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad.prototype, "sync_deep", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad.prototype, "ml", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad.prototype, "default_data", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad.prototype, "deep_data", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad.prototype, "right_link_id", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad.prototype, "Admin_page", null);
        __decorate([
            $mol_mem_key
        ], $ss_linkpad.prototype, "Package_page", null);
        __decorate([
            $mol_mem
        ], $ss_linkpad.prototype, "all_link_ids", null);
        __decorate([
            $mol_action
        ], $ss_linkpad.prototype, "upd_link_ids", null);
        __decorate([
            $mol_mem_key
        ], $ss_linkpad.prototype, "Link_data", null);
        __decorate([
            $mol_mem_key
        ], $ss_linkpad.prototype, "link_data_by_ui_id", null);
        __decorate([
            $mol_mem_key
        ], $ss_linkpad.prototype, "type_data_by_ui_id", null);
        __decorate([
            $mol_mem_key
        ], $ss_linkpad.prototype, "link_links", null);
        $$.$ss_linkpad = $ss_linkpad;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/linkpad/linkpad.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("ss/linkpad/linkpad.view.css", "[mol_labeler_content] {\n\tpadding: 0;\n}\n");
})($ || ($ = {}));
//ss/linkpad/-css/linkpad.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_linkpad, {
            Placeholder: {
                maxWidth: 'min(100%, 60rem)',
                flex: {
                    grow: 1,
                    basis: '35rem',
                },
            },
            Contenteditable_user: {
                maxWidth: 'min(100%, 60rem)',
                flex: {
                    grow: 1,
                    basis: '35rem',
                },
                outline: 'none',
            },
            Contenteditable_package: {
                maxWidth: 'min(100%, 60rem)',
                flex: {
                    grow: 1,
                    basis: '35rem',
                },
                outline: 'none',
            },
            flex: {
                grow: 0,
            },
            Tools: {
                top: '30%',
            },
            Bubble: {
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/linkpad/linkpad.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $ss_links extends $mol_book2 {
        title() {
            return "Links";
        }
        Placeholder() {
            return null;
        }
        submit_button() {
            return [
                this.Submit(),
                this.Demo()
            ];
        }
        editor_pages(id) {
            return this.Editor(id).pages();
        }
        Editor(id) {
            const obj = new this.$.$ss_linkpad();
            obj.hide_contain = (next) => this.hide_contain(next);
            obj.raw_gql_path = (next) => this.opened_path();
            return obj;
        }
        Hide_contain() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => "Collapse contain";
            obj.checked = (next) => this.hide_contain(next);
            return obj;
        }
        opened_editor_pages() {
            return [];
        }
        pages() {
            return [
                this.Menu(),
                ...this.opened_editor_pages()
            ];
        }
        submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => "Submit";
            obj.event_click = (next) => this.submit(next);
            return obj;
        }
        demo(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Demo() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => "Demo";
            obj.event_click = (next) => this.demo(next);
            return obj;
        }
        opened_path(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        hide_contain(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        raw_gql_path(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Gql_path() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.raw_gql_path(next);
            return obj;
        }
        Gql_path_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "GQL path";
            obj.Content = () => this.Gql_path();
            return obj;
        }
        Menu() {
            const obj = new this.$.$mol_page();
            obj.title = () => "Links";
            obj.body = () => [
                this.Gql_path_field()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $ss_links.prototype, "Editor", null);
    __decorate([
        $mol_mem
    ], $ss_links.prototype, "Hide_contain", null);
    __decorate([
        $mol_mem
    ], $ss_links.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $ss_links.prototype, "Submit", null);
    __decorate([
        $mol_mem
    ], $ss_links.prototype, "demo", null);
    __decorate([
        $mol_mem
    ], $ss_links.prototype, "Demo", null);
    __decorate([
        $mol_mem
    ], $ss_links.prototype, "opened_path", null);
    __decorate([
        $mol_mem
    ], $ss_links.prototype, "hide_contain", null);
    __decorate([
        $mol_mem
    ], $ss_links.prototype, "raw_gql_path", null);
    __decorate([
        $mol_mem
    ], $ss_links.prototype, "Gql_path", null);
    __decorate([
        $mol_mem
    ], $ss_links.prototype, "Gql_path_field", null);
    __decorate([
        $mol_mem
    ], $ss_links.prototype, "Menu", null);
    $.$ss_links = $ss_links;
})($ || ($ = {}));
//ss/links/-view.tree/links.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ss_links extends $.$ss_links {
            opened_editor_pages() {
                return this.editor_pages(this.opened_path());
            }
            raw_gql_path(next) {
                if (next === undefined)
                    return this.$.$mol_state_arg.value('path') || '';
                return this.$.$mol_state_arg.value('path', next) || '';
            }
            opened_path() {
                const path = this.$.$mol_state_arg.value('path');
                return path || '';
            }
        }
        $$.$ss_links = $ss_links;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/links/links.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($ss_links, {
            Submit: {
                margin: {
                    top: $mol_gap.block,
                    bottom: $mol_gap.block,
                }
            },
            Demo: {
                margin: {
                    top: $mol_gap.block,
                    bottom: $mol_gap.block,
                }
            },
            Menu: {
                flex: {
                    basis: '15rem',
                },
            },
            Gql_path: {
                flex: {
                    grow: 0,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/links/links.view.css.ts

//# sourceMappingURL=web.js.map
