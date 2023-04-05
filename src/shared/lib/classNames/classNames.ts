interface ClassNamesMod {
  [key: string]: any
}

type ClassNamesArray = (string | ClassNamesMod | ClassNamesArray | undefined)[]

export function classNames(...args: ClassNamesArray): string {
  const result = args.map((arg): string => {
    const newArr: string[] = [];

    if (arg && typeof arg === 'object' && !Array.isArray(arg)) {
      Object.entries(arg).forEach(([key, value]) => {
        if (Boolean(value)) {
          newArr.push(key);
        }
      });
    }

    if (typeof arg === 'string') {
      newArr.push(arg);
    }

    if (Array.isArray(arg)) {
      newArr.push(classNames(...arg));
    }

    return newArr.join(' ');
  });

  return result.join(' ').trim();
}
