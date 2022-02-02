
export function fileSizeName(size: number): string {
    const sizes = ['b', 'kb', 'mb', 'gb', 'tb'];
    if (size === 0) return 'n/a';
    const i = parseInt(String(Math.floor(Math.log(size) / Math.log(1024))), 10)
    if (i === 0) return `${size} ${sizes[i]}`
    return `${(size / (1024 ** i)).toFixed(1)} ${sizes[i]}`
}
