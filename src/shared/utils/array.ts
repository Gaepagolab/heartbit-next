export {};

declare global {
  interface Array<T> {
    apply<RETURN_TYPE extends any, ARGUMENTS extends any[]>(
      fn: (builder: Array<T>, ...arguments: ARGUMENTS) => RETURN_TYPE,
      ...arguments: ARGUMENTS
    ): ReturnType<typeof fn>;

    filterNotNull(): NonNullable<T>[];

    exists(): boolean;

    at<T>(index: number): T | undefined;
  }
  interface ArrayConstructor {
    build<T>(value: T | T[] | undefined): T[] | undefined;

    exists<T>(value: T | undefined): boolean;
  }
}

Array.prototype.apply = function <
  T,
  RETURN_TYPE extends any,
  ARGUMENTS extends any[]
>(
  fn: (builder: Array<T>, ...args: ARGUMENTS) => RETURN_TYPE,
  ...args: ARGUMENTS
): ReturnType<typeof fn> {
  return fn(this, ...args);
};

Array.prototype.filterNotNull = function <T>() {
  return this.filter((item: T) => item !== null) as NonNullable<T>[];
};

Array.prototype.exists = function () {
  return Array.isArray(this) && this.length > 0;
};

Array.prototype.at = function (index: number) {
  index = Math.trunc(index) || 0;
  if (index < 0) index += this.length;
  if (index < 0 || index >= this.length) return undefined;
  return this[index];
};

Array.build = function <T>(value: T | T[] | undefined): T[] | undefined {
  if (Array.isArray(value)) {
    return value;
  } else {
    return value ? [value] : undefined;
  }
};

Array.exists = function <T>(value: T | undefined): boolean {
  return Array.isArray(value) && value.length > 0;
};
