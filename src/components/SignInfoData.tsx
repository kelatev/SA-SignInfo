import React, {useState} from 'react';
import IconCoding6 from "../media/icons/duotune/coding/cod006.svg";
import TimelineItem from "./TimelineItem";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface SignInfoDataProps {
    has: boolean
    data: string | undefined
}

function SignInfoData(props: SignInfoDataProps) {
    const [dataShow, setDataShow] = useState(false);

    const handleClose = () => setDataShow(false);
    const handleShow = () => setDataShow(true);

    return (
        <TimelineItem title='Подписанные данные' icon={IconCoding6}>
            {props.has ? (
                <>присутствуют
                    <Button onClick={handleShow} variant="light" size="sm" className="ms-2">просмотр</Button>
                    <Modal show={dataShow} onHide={handleClose} size="xl">
                        <Modal.Header closeButton>
                            <Modal.Title>Подписанные данные</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {props.data}
                        </Modal.Body>
                    </Modal>
                </>
            ) : (
                <>отсутствуют</>
            )}
        </TimelineItem>
    );
}

export default SignInfoData;
