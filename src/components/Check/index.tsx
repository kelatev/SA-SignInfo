import { useState, useEffect } from 'react';
import Card from "../Form/Card";
import Timeline from "../Timeline/Timeline";
import InfoSigner from "./InfoSigner";
import { useEndUserContext } from '../../EUSign/EndUserContext';
import { FileArchive, FileDashed, FilePlus } from "@phosphor-icons/react";
import useVerifyFiles from './useVerifyFiles';
import { IFile } from "../../utils/types";

function PanelCheck() {
    const { librarySW } = useEndUserContext();
    const [file, setFile] = useState<IFile | null>(null);
    const [fileError] = useState<string>();
    const [cert, setCert] = useState<IFile | null>(null);
    const { loading, error, errorCode, verifyResult, signedData } = useVerifyFiles({ library: librarySW, file, cert });

    useEffect(() => {
        setCert(null);
    }, [file]);

    return (
        <Card title='Перевірка підпису' className='bg-sand bgi-no-repeat bgi-position-x-end' backgroundImage='url("/media/wave-bg-blue.svg")'>
            <Timeline>
                {/*, pdf, xml, asics або asice*/}
                <Timeline.Item title='Підписаний файл' icon={<FileArchive />} description={'p7s'}>
                    <Timeline.FileSelect
                        onFileChange={setFile}
                        storagePrefix='check'
                        error={fileError}
                        accept='.p7s,.pdf,.xml,.asics,.asice'
                    />
                </Timeline.Item>
                {(loading || error) &&
                    <Timeline.Spinner
                        title='Перевірка файлу'
                        icon={<FileDashed />}
                        error={error}
                    />
                }
                {errorCode === 83 &&
                    <Timeline.Item title='Особистий сертифікат' icon={<FilePlus />} description={'*.p7b, *.cer'}>
                        <Timeline.FileSelect
                            onFileChange={setCert}
                            error={undefined}
                            accept='.p7b,.cer'
                        />
                    </Timeline.Item>}
                {signedData &&
                    <Timeline.FileData
                        title={'Дані окремим файлом'}
                        data={signedData}
                        fileName={file?.name.replace('.p7s', '')}
                    />}
                {verifyResult && <InfoSigner data={verifyResult} />}
            </Timeline>
        </Card>
    );
}

export default PanelCheck;
