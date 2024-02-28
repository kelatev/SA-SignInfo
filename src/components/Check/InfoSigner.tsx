import React, { useContext, useEffect, useState } from "react";
import { EndUserCertificateInfoEx, EndUserTimeInfo } from "../../EUSign/types";
import TimelineItem from "../Timeline/TimelineItem";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import EUSignContext from "../../context/EUSign";
import { Cursor, User, Copy, Certificate } from "@phosphor-icons/react";
import { EUVerifyResult } from '../../hooks/withEUSignCommand';

interface Props {
    data: EUVerifyResult;
}

const RowDescription: React.FC<{ title: string; description: string }> = ({
    title,
    description,
}) => {
    return (
        <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 me-2 mb-3">
            <div className="fs-6 fw-bold text-gray-700">{description}<Copy className="ms-1 text-hover-primary cursor-pointer" onClick={() => navigator.clipboard.writeText(description)} /></div>
            <div className="fw-semibold text-gray-500">{title}</div>
        </div>
    );
};

function InfoSigner(props: Props) {
    const { euSign } = useContext(EUSignContext);

    const [show, setShow] = useState(false);
    const [json, setJson] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        let text = JSON.stringify(props.data);
        text = text.replace(/{/g, "{\n");
        text = text.replace(/}/g, "\n}");
        text = text.replace(/,/g, ",\n");
        setJson(text);
    }, [props.data]);

    return (
        <>
            {props.data.signsInfos.map((item0, index0) => item0.map((item, index) =>
                <div key={index0 + '_' + index}>
                    <TimelineItem
                        title={"Підписувач - " + item.signerInfo.subjCN}
                        icon={<User />}
                    >
                        <div className="d-flex flex-wrap">
                            {item.signerInfo.subjDRFOCode && item.signerInfo.subjDRFOCode !== item.signerInfo.subjEDRPOUCode && (
                                <RowDescription
                                    title={"РНОКПП"}
                                    description={item.signerInfo.subjDRFOCode}
                                />
                            )}
                            {item.signerInfo.subjOrg && (
                                <RowDescription
                                    title={"Організація (установа)"}
                                    description={item.signerInfo.subjOrg}
                                />
                            )}
                            {item.signerInfo.subjEDRPOUCode && (
                                <RowDescription
                                    title={"Код ЄДРПОУ"}
                                    description={item.signerInfo.subjEDRPOUCode}
                                />
                            )}
                        </div>
                    </TimelineItem>
                    <TimelineItem
                        title={"Підпис"}
                        icon={<Cursor />}
                    >
                        <div className="d-flex flex-wrap">
                            <RowDescription
                                title={
                                    "Час підпису (підтверджено кваліфікованою позначкою часу)"
                                }
                                description={item.signTimeInfo.time.toISOString()}
                            />
                            {/*<RowDescription title={'Тип носія особистого ключа'} description={''}/>*/}
                            <RowDescription
                                title={"Алгоритм підпису"}
                                description={item.signAlgo}
                            />
                            <RowDescription
                                title={"Категорія"}
                                description={item.signFormat}
                            />
                            <RowDescription
                                title={"Формат"}
                                description={item.signContainerType}
                            />
                            {/*<RowDescription title={'Тип підпису'} description={''}/>
            <RowDescription title={'Тип контейнера'} description={''}/>
            <RowDescription title={'Формат підпису'} description={''}/>
            <RowDescription title={'Сертифікат'} description={''}/>*/}
                            {/*
            keyUsageType
            subjType
            subjSubType*/}
                        </div>
                    </TimelineItem>
                    <TimelineItem
                        title={"Сертифікат"}
                        icon={<Certificate />}
                    >
                        <div className="d-flex flex-wrap">
                            <RowDescription
                                title={"Сертифікат виданий"}
                                description={item.signerInfo.issuer}
                            />
                            <RowDescription
                                title={"Серійний номер"}
                                description={item.signerInfo.serial}
                            />
                        </div>

                        <Button onClick={handleShow} variant="light" size="sm">
                            json
                        </Button>
                        <Modal show={show} onHide={handleClose} size="xl">
                            <Modal.Header closeButton>
                                <Modal.Title>Подписант</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <SyntaxHighlighter
                                    language="json"
                                    style={darcula}
                                    wrapLines={true}
                                    wrapLongLines={true}
                                >
                                    {json}
                                </SyntaxHighlighter>
                            </Modal.Body>
                        </Modal>
                    </TimelineItem>
                </div>
            ))}
        </>
    );
}

export default InfoSigner;
