import { useRouter } from "next/router";

/** query key를 기반으로 value를 받아옵니다. 값이 존재하지 않을 경우 undefined를 반환합니다.
 *
 * @example
 * // https://zoomable.io?foo=1
 * const foo = useQueryParams("foo", Number) // number | undefined
 */
export function useQueryParams<T>(
  key: string,
  parser: (value: string) => T
): T | undefined;
export function useQueryParams(key: string): string | string[] | undefined;
export function useQueryParams<T>(key: string, parser?: (value: string) => T) {
  const { query } = useRouter();
  const value = query[key];

  if (value == null) return undefined;

  if (Array.isArray(value)) {
    return parser == null ? value : value.map((val) => parser(val));
  }

  return parser == null ? value : parser(value);
}
