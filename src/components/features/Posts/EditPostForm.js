import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getPostById } from '../../../redux/postsRedux';
import { editPost } from '../../../redux/postsRedux';
import PostForm from './PostForm';

const EditPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector(state => getPostById(state, id));

    if (!id) return <Navigate to='/' />;

    const handleSubmit = (post) => {
        dispatch(editPost({ ...post, id }));
        navigate('/')
    }
    return <PostForm 
        action={handleSubmit} 
        actionText='Edit post'
        title={post.title}
        author={post.author}
        publishedDate={post.publishedDate}
        shortDescription ={post.shortDescription}
        mainContent ={post.mainContent}
    />;
};

export default EditPostForm;