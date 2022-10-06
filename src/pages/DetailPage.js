import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
    deleteNote,
    archiveNote,
    unarchiveNote,
    getNote,
} from '../utils/network-data';
import { toast } from 'react-toastify';
import LoadingComponent from '../components/LoadingComponent';
import DetailNote from '../components/DetailNote';

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    async function getDetailNote(id) {
        setIsLoading(true);
        const { data } = await getNote(id);
        console.log(data);
        setNote(data);
        setIsLoading(false);
    }

    async function onDeleteHandler(id) {
        await deleteNote(id)
            .then(() => {
                toast.success('Catatan berhasil di hapus', {});
                navigate('/');
            })
            .catch(() => {
                toast.error('Catatan gagal di hapus', {});
            });
    }

    async function onArchiveHandler(id) {
        await archiveNote(id)
            .then(() => {
                toast.success('Catatan berhasil di arsipkan', {});
                navigate('/');
            })
            .catch(() => {
                toast.error('Catatan gagal di arsipkan', {});
            });
    }

    async function onUnarchiveHandler(id) {
        await unarchiveNote(id)
            .then(() => {
                toast.success('Catatan berhasil di aktifkan', {});
                navigate('/');
            })
            .catch(() => {
                toast.error('Catatan gagal di aktifkan', {});
            });
    }

    useEffect(() => {
        getDetailNote(id);
    }, [id]);

    return (
        <>
            {isLoading ? (
                <LoadingComponent />
            ) : Object.keys(note).length === 0 ? (
                <p>Note is not found!</p>
            ) : (
                <DetailNote
                    note={note}
                    onDelete={onDeleteHandler}
                    onArchive={onArchiveHandler}
                    onUnarchive={onUnarchiveHandler}
                />
            )}
        </>
    );
}

export default DetailPage;
