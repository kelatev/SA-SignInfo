import { useState } from 'react';
import Card from "../Form/Card";
import Timeline from "../Timeline/Timeline";
import TimelineFileSelect from "../Timeline/TimelineFileSelect";
import InfoSigner from "./InfoSigner";
import { useEUSignContext } from '../../context/EUSignContext';
import { FileArchive, FileDashed } from "@phosphor-icons/react";
import useVerifyFiles from '../../hooks/useVerifyFiles';

function PanelCheck() {
    const { librarySW } = useEUSignContext();
    const [file, setFile] = useState<File | null>(null);
    const { loading, error, verifyResult, signedData } = useVerifyFiles({ library: librarySW, file: file });

    return (
        <Card title='Перевірка підпису' backgroundColor='#CBF0F4' className='bgi-no-repeat bgi-position-x-end' backgroundImage='url("/wave-bg-blue.svg")'>
            <Timeline>
                <Timeline.Item title='Підписаний файл' icon={<FileArchive />} description={'p7s, pdf, xml, asics або asice'}>
                    <TimelineFileSelect
                        onFileChange={setFile}
                        storagePrefix='check'
                        error={error}
                        accept='.p7s,.pdf,.xml,.asics,.asice'
                    />
                </Timeline.Item>
                {loading &&
                    <Timeline.Spinner
                        title='Перевірка файлу'
                        icon={<FileDashed />}
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
