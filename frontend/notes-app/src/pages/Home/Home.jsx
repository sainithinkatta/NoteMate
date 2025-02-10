import Navbar from '../../components/Navbar/Navbar';
import NoteCard from '../../components/Cards/NoteCard';
import AddEditNotes from './AddEditNotes';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';

function Home() {
    const [openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: 'add',
        data: null,
    });

    function handleModalClose() {
        setOpenAddEditModal({
            isShown: false,
        });
    }

    return (
        <>
            <Navbar />

            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4 mt-8">
                    <NoteCard
                        title="Meeting on 7th April"
                        date="3rd April 2024"
                        content="Meeting on 7th April"
                        tags="#Meeting"
                        isPinned={true}
                        onEdit={() => {}}
                        onDelete={() => {}}
                        onPinNote={() => {}}
                    />
                </div>
            </div>

            <button
                className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
                onClick={() => {
                    setOpenAddEditModal({
                        isShown: true,
                        type: 'add',
                        data: null,
                    });
                }}
            >
                <span className="text-white">Add</span>
            </button>

            <Modal
                isOpen={openAddEditModal.isShown}
                onClose={handleModalClose}
                style={{
                    overlay: {
                        backgroundColor: 'rgdb(0,0,0,0,2',
                    },
                }}
                contentLabel=""
                className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
            >
                <AddEditNotes
                    noteData={openAddEditModal.data}
                    onClose={() => {
                        setOpenAddEditModal({
                            isShown: false,
                            type: 'add',
                            data: null,
                        });
                    }}
                />
            </Modal>
        </>
    );
}

export default Home;