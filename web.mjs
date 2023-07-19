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
    const { vary } = $mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        card: vary('--mol_theme_card'),
        current: vary('--mol_theme_current'),
        special: vary('--mol_theme_special'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
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
    const { vary } = $mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
        space: vary('--mol_gap_space'),
        blur: vary('--mol_gap_blur'),
    };
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
    class $ss_blocks_block extends $mol_view {
        minimal_height() {
            return 25;
        }
        sub() {
            return [
                this.value()
            ];
        }
        value_changed(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        attr() {
            return {
                ...super.attr(),
                "focus-state": this.focus_state()
            };
        }
        style() {
            return {
                ...super.style(),
                "--after": this.after_content()
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
        focus() {
            return null;
        }
        value(next) {
            if (next !== undefined)
                return next;
            return "default_block_value";
        }
        focus_state(next) {
            if (next !== undefined)
                return next;
            return "blurred";
        }
        after_content() {
            return "";
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
    ], $ss_blocks_block.prototype, "value_changed", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "on_ctrl_x", null);
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
    ], $ss_blocks_block.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $ss_blocks_block.prototype, "focus_state", null);
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
        class $ss_blocks_block extends $.$ss_blocks_block {
            sub() {
                const value = this.value();
                if (value && value != '\n') {
                    return [value];
                }
                return [];
            }
            after_content() {
                return `"${this.visible_placeholder()}"`;
            }
            visible_placeholder() {
                const placeholder = this.placeholder();
                return this.value() == '' ? placeholder : '';
            }
            focus_state(next) {
                if (next == 'focused') {
                    this.focused(true);
                }
                else {
                    this.focused(false);
                }
                return next || "blurred";
            }
            async focus() {
                this.focus_state('setting');
                const dom = this.dom_node();
                if (dom.parentElement) {
                    const selection = window.getSelection();
                    const range = document.createRange();
                    selection.removeAllRanges();
                    let focusEl = dom.lastChild;
                    if (!focusEl)
                        focusEl = dom;
                    if (focusEl?.nodeName == 'BR' && focusEl.previousSibling)
                        focusEl = focusEl.previousSibling;
                    range.setEnd(focusEl, focusEl.textContent?.length || 0);
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
            input(e) {
            }
            beforeinput(e) {
                const el = $ss_blocks_block_anchor_el();
                if (el.parentElement != focus_el().parentElement) {
                    e.preventDefault();
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
            }
            cut(e) {
            }
            mouseover() {
                this.hovered(true);
            }
            mouseout() {
                this.hovered(false);
            }
        }
        __decorate([
            $mol_mem
        ], $ss_blocks_block.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $ss_blocks_block.prototype, "after_content", null);
        __decorate([
            $mol_mem
        ], $ss_blocks_block.prototype, "visible_placeholder", null);
        __decorate([
            $mol_mem
        ], $ss_blocks_block.prototype, "focus_state", null);
        $$.$ss_blocks_block = $ss_blocks_block;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/blocks/block/block.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("ss/blocks/block/block.view.css", "[ss_blocks_block]::after {\n\tpointer-events: none;\n\tcontent: var(--after);\n\topacity: .3;\n}\n\n[ss_blocks_block][focus-state=\"focused\"] {\n\tbackground: rgba(255,255,255,0.1);\n}\n");
})($ || ($ = {}));
//ss/blocks/block/-css/block.view.css.ts
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
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
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
    const { vary } = $mol_style_func;
    $.$mol_layer = {
        hover: vary('--mol_layer_hover'),
        focus: vary('--mol_layer_focus'),
        speck: vary('--mol_layer_speck'),
        float: vary('--mol_layer_float'),
        popup: vary('--mol_layer_popup'),
    };
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
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
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
        if (!text.trim())
            return '';
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
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
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
            return "";
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
                this.Block(),
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
                return this.tail_ui_node_nullable()?.type() || '';
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
                    this.Block(),
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
    $mol_style_attach("ss/editor/node/ui/prop/prop.view.css", "[ss_editor_node_ui_prop] > [ss_editor_node_ui_prop_self_body] {\n\tcolor: var(--mol_theme_text);\n}\n");
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
            flex: {
                wrap: 'wrap',
            },
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
                wrap: 'wrap',
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
                this.Block(),
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
                    this.Block(),
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
                flex: {
                    basis: '100%'
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
                block.value = () => this.data_value(data_id);
                block.placeholder = () => this.data_type(data_id);
                block.input = () => {
                    this.data_value(data_id, block.dom_node().textContent);
                };
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
            padding: $mol_gap.block,
            background: {
                color: $mol_theme.card,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ss/editor/editor.view.css.ts

export default $
//# sourceMappingURL=web.js.map
