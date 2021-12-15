import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import { selectEntities } from '../../core/entities/selectors';
import { useAppDispatch, useAppSelector } from '../../core/hooks/useRedux';
import { addPostLike } from '../../core/entities/slices';
import {
  setDataModal,
  setVisibility
} from '../../core/features/modalSendComment/slices';
import styles from '../../../styles/components/posts.module.css';
import { GetLang } from '../../../locales/config';
import { Button } from '../base/Button.';

export function PostComponent() {
  const dispatch = useAppDispatch();
  const {
    posts: { posts },
    comments: { comments },
    users: { users },
    me: { id: userId }
  } = useAppSelector(selectEntities);

  function handleSendComment(postId) {
    dispatch(setDataModal({ postId, userId }));
    dispatch(setVisibility(true));
  }

  function handleSendLike(postId) {
    dispatch(addPostLike({ postId, userId }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {posts.allIds.map((postId) => {
          const post = posts.byId[postId];
          const user = users.byId[post?.userId];

          return (
            <div className={styles.post} key={post.id}>
              <div className={styles.post__header}>
                <h3>{user?.name}</h3>
              </div>

              <div className={styles.post__content}>
                <p>{post.body}</p>
              </div>

              <div className={styles.post__comments}>
                <h4>
                  <GetLang keyLang="comments" />
                </h4>

                {post.commentIds.map((commentId) => {
                  const comment = comments.byId[commentId];
                  const user = users.byId[comment?.userId];

                  return (
                    <div key={commentId} className={styles.post__comment}>
                      <h5>{user?.name}</h5>
                      <p>{comment?.msg}</p>
                    </div>
                  );
                })}
              </div>

              <div className={styles.post__actions}>
                <Button
                  className={styles.post__actions__like}
                  onClick={() => handleSendLike(postId)}
                >
                  {post.likes.includes(userId) ? (
                    <AiTwotoneLike />
                  ) : (
                    <AiOutlineLike />
                  )}
                  {post.likes.length}
                </Button>
                <Button
                  className={styles.post__actions__comment}
                  onClick={() => handleSendComment(postId)}
                >
                  <FaRegComments /> {post.commentIds.length}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
