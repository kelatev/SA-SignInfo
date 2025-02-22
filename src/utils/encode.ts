import { Buffer } from "buffer";
import { decode } from "windows-1251";

export function blobToBase64(blob: Blob) {
    return new Promise<string>((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
    });
}

export function dataURLtoFile(dataurl: string, filename: string): File {
    const arr = dataurl.split(",");
    let mime = "application/octed-stream";
    if (arr) {
        mime =
            arr
                .at(0)
                ?.match(/:(.*?);/)
                ?.at(1) || mime;
    }
    const bstr = atob(arr[arr.length - 1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
}

export function Uint8toBase64(data: Uint8Array | undefined): string | undefined {
    return data && Buffer.from(data).toString("base64");
}

export function Uint8toAscii(data: Uint8Array | undefined): string | undefined {
    return data && Buffer.from(data).toString("ascii");
}

export function Uint8toUtf8(data: Uint8Array | undefined): string | undefined {
    return data && Buffer.from(data).toString("utf8");
}

export function Uint8toWin1251(data: Uint8Array | undefined): string | undefined {
    return data && decode(data);
}

export async function FileToUint8(file: File): Promise<Uint8Array> {
    return new Uint8Array(await file.arrayBuffer());
}

export function isBase64(data: string): boolean {
    if (data === "") {
        return false;
    }

    var regex = "(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?";
    var mimeRegex = "(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)";

    regex = mimeRegex + "?" + regex;

    return new RegExp("^" + regex + "$", "gi").test(data);
}
