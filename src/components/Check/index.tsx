import { useState } from 'react';
import Card from "../Form/Card";
import Timeline from "../Timeline/Timeline";
import InfoSigner from "./InfoSigner";
import { useEndUserContext } from '../../EUSign/EndUserContext';
import { FileArchive, FileDashed } from "@phosphor-icons/react";
import useVerifyFiles from './useVerifyFiles';

function PanelCheck() {
    const { librarySW } = useEndUserContext();
    const [file, setFile] = useState<File | null>(null);
    const [fileError] = useState<string>();
    const { loading, error, verifyResult, signedData } = useVerifyFiles({ library: librarySW, file: file });

    return (
        <Card title='Перевірка підпису' backgroundColor='#F6E5CA' className='bgi-no-repeat bgi-position-x-end' backgroundImage='url("/media/wave-bg-blue.svg")'>
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
