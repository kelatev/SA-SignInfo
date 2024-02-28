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
