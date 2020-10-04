import React, { useState } from 'react'
import SignOut from './SignOut'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';

const ChatRoom = props => {
    const messageRef = props.firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoUrl } = props.auth.currentUser;

        await messageRef.add(
            {
                text: formValue,
                createdAt: props.firebase.firestore.FieldValue.serviceTimeStamp,
                uid,
                photoUrl
            }
        )

        setFormValue('');
    }

    return (
        <>
            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} auth={props.auth} />)}
            </main>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
                <button type="submit" disabled={!formValue}>🕊️</button>
            </form>
            <SignOut userAuth={props.auth} />
        </>
    )
}

export default ChatRoom;