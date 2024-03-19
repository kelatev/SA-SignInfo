import { EndUserError as EndUserErrorType } from "./eusign.types";

export class EndUserError implements EndUserErrorType {
    static ERROR_UNKNOWN = 65535;
    static ERROR_NOT_INITIALIZED = 1;
    static EU_ERROR_BAD_PARAMETER = 2;
    static ERROR_DOWNLOAD_FILE = 10;
    static EU_ERROR_WRITE_SETTINGS = 11;
    static ERROR_LIBRARY_COMUNICATION_FAILED = 4097;
    static ERROR_LIBRARY_VERSION_NOT_SUPPORTED = 4098;

    errorCode: number = 0;
    message: string = "";
    GetErrorCode(): number {
        return this.errorCode;
    }
    GetMessage(): string {
        return this.message;
    }
}
