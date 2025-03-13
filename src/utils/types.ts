export interface IFile {
    content: Uint8Array,
    name: string,
    mime: string
    size: number
}

export function emptyIFile(name: string): IFile {
    return {
        content: new Uint8Array(),
        name,
        mime: 'null',
        size: 0
    }
}