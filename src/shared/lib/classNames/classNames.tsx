type Mods = Record<string, boolean | string>

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([classname, value]) => Boolean(value))
            .map(([classname]) => classname),
        ...additional.filter(Boolean),
    ].join(' ');
}
