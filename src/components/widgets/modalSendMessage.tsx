import { RiSendPlaneFill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../../core/hooks/useRedux';
import { selectModal } from '../../core/features/modalSendComment/selectors';
import { selectEntities } from '../../core/entities/selectors';
import React, { useState } from 'react';
import { sendNewComment } from '../../core/entities/actions';
import styles from '../../../styles/components/modal.module.css';
import { setVisibility } from '../../core/features/modalSendComment/slices';
import { GetLang } from '../../../locales/config';
import { Button } from '../base/Button.';

export function ModalComponent() {
  const dispatch = useAppDispatch();

  const [inputSendMessage, setInputSendMessage] = useState('');
  const {
    me: { id: userId, name: nameUser },
    posts: { posts },
    users: { users }
  } = useAppSelector(selectEntities);
  const {
    modal: { isVisible, postId }
  } = useAppSelector(selectModal);

  function handleOpenSendComment() {
    dispatch(sendNewComment({ postId, userId, inputSendMessage }));
    dispatch(setVisibility(false));
    setInputSendMessage('');
  }

  function handleCloseModal() {
    dispatch(setVisibility(false));
    setInputSendMessage('');
  }

  const userIdPost = posts.byId[postId]?.userId;
  const userNamePost = users.byId[userIdPost]?.name;

  return (
    <div
      className={styles.container}
      style={{ display: isVisible === false ? 'none' : '' }}
    >
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <h3>
            <GetLang keyLang="response" /> {userNamePost}
          </h3>
          <Button onClick={() => handleCloseModal()}>
            <IoMdClose />
          </Button>
        </div>

        <div className={styles.modal__write}>
          <p>
            <GetLang keyLang="writeComment" />
          </p>

          <textarea
            value={inputSendMessage}
            onChange={(e: any) => setInputSendMessage(e.target.value)}
          />
        </div>

        <div className={styles.modal__footer}>
          <Button onClick={() => handleOpenSendComment()}>
            <GetLang keyLang="sendComment" />
            <RiSendPlaneFill />
          </Button>
        </div>
      </div>
    </div>
  );
}
