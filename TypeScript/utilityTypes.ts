type _Exclude<T, U> = T extends U ? never : T;

type _Extract<T, U> = T extends U ? T : never;

type _NonNullable<T> = T extends null | undefined ? never : T;

type _Omit<T, K extends string | number | symbol> = {
    [P in Exclude<keyof T, K>]: T[P];
}

type _Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;


type _Partial<T> = {
    [K in keyof T]?: T[K] | undefined;
}

type _Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}

type _Readonly<T> = {
    readonly [K in keyof T]: T[K];
}

type _Record<K extends string | number | symbol, T> = {
    [P in K]: T;
}

type _Required<T> = {
    [K in keyof T]-?: T[K];
}
