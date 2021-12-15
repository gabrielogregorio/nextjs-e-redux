import { useEffect } from 'react';
import { useAppDispatch } from '../core/hooks/useRedux';
import LayoutTheme from '../components/layouts/layoutTheme';
import {
  loadComments,
  loadMe,
  loadPosts,
  loadUsers
} from '../core/entities/actions';
import { PostComponent } from '../components/widgets/posts';
import { HeaderComponent } from '../components/layouts/header';
import { ModalComponent } from '../components/widgets/modalSendMessage';

const Posts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadComments());
    dispatch(loadMe());
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <LayoutTheme>
      <HeaderComponent />
      <ModalComponent />
      <PostComponent />
    </LayoutTheme>
  );
};

export default Posts;
