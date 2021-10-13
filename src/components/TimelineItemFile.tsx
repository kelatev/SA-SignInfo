import React, {useState} from "react";
import IconFil004 from "../icons/duotune/files/fil004.svg";
import File, {FileInterface} from "./File";
import Alert from "./Alert";

interface TimelineItemFileInterface {
    onFileChange: (file: FileInterface | null) => void
    accept?: string
    hint?: string
    error?: string
}

const TimelineItemFile: React.FC<TimelineItemFileInterface> = ({onFileChange, accept, hint, error}) => {

    const [file, setFile] = useState<FileInterface>();

    function handleFileChange(file: FileInterface) {
        setFile(file);
        onFileChange(file);
    }

    function handleNewFile() {
        setFile(undefined);
        onFileChange(null);
    }

    return (
        <>
            {file ? (
                <div className="d-flex flex-stack border border-gray-600 rounded p-4 mb-5">
                    {/*begin::Wrapper*/}
                    <div className="d-flex align-items-center me-2">
                        {/*begin::Icon*/}
                        <img alt="" className="w-30px me-3" src={IconFil004}/>
                        {/*end::Icon*/}
                        {/*begin::Info*/}
                        <div className="d-flex flex-stack">
                            {/*begin::Info*/}
                            <div className="d-flex flex-column me-2">
                                {/*begin::Desc*/}
                                <span
                                    className="fs-7 text-inverse-white text-hover-success fw-bolder">{file.name}</span>
                                {/*end::Desc*/}
                                {/*begin::Number*/}
                                <div className="text-gray-400">{file.size}mb</div>
                                {/*end::Number*/}
                            </div>
                            {/*end::Info*/}
                        </div>
                        {/*begin::Info*/}
                    </div>
                    {/*end::Wrapper*/}
                    {/*-begin::Action*/}
                    <button className="btn btn-sm btn-light" onClick={handleNewFile}>Изменить файл</button>
                    {/*end::Action*/}
                </div>
            ) : (
                <>
                    <div>{hint}</div>
                    <File title='Выбрать файл' onChange={handleFileChange} accept={accept} />
                </>
            )}

            {error && <div className='mt-1'><Alert text={error}/></div>}
        </>
    );
};

export default TimelineItemFile;
