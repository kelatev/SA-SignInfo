import React, { useEffect, useState } from 'react';
import Card from "../Form/Card";
import Timeline from "../Timeline/Timeline";
import TimelineFileSelect from "../Timeline/TimelineFileSelect";
import InfoSigner from "./InfoSigner";
import TimelineFileData from "../Timeline/TimelineFileData";
import TimelineSpinner from "../Timeline/TimelineSpinner";
import { Buffer } from 'buffer';
import { useEUSignContext } from '../../context/EUSignContext';
import { FileArchive, FileDashed } from "@phosphor-icons/react";
import { EUVerifyResult } from '../../hooks/withEUSignCommand';

function PanelCheck() {
    const { isInitialized, commands } = useEUSignContext();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [file, setFile] = useState<File | null>();

    const [verifyResult, setVerifyResult] = useState<EUVerifyResult>();
    const [signedData, setSignedData] = useState<string>();

    useEffect(() => {
        setError(undefined);
        if (isInitialized) {
            if (file) {
                setLoading(true);
                commands.VerifyFiles([file])
                    .then((result) => {
                        setLoading(false);
                        setVerifyResult(result);
                        result.data && setSignedData(Buffer.from(result.data).toString('base64'));
                    }).catch((err) => {
                        setLoading(false);
                        setError(err.toString());
                    });
            } else {
                setVerifyResult(undefined);
                setSignedData(undefined);
            }
        }
    }, [isInitialized, file]);

    return (
        <Card title='Перевірка підпису' backgroundColor='#CBF0F4'>
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
                    <TimelineSpinner
                        title='Перевірка файлу'
                        icon={<FileDashed />}
                    />
                }
                {signedData &&
                    <TimelineFileData
                        title={'Дані окремим файлом'}
                        base64Data={signedData}
                        showAsAscii={true}
                        fileName={file?.name.replace('.p7s', '')}
                    />}
                {verifyResult && <InfoSigner data={verifyResult} />}
            </Timeline>
        </Card>
    );
}

export default PanelCheck;
