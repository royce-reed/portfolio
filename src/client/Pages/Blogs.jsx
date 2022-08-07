import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../state/hooks';
import { selectPublishedPosts, fetchPublishedPosts } from '../state/features/blogSlice';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import ReactMarkdown from 'react-markdown';


const Blogs = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPublishedPosts);
  const state = useAppSelector(state => state.blog);
  // console.log(state);
  console.log(posts[0]);


  useEffect(() => {
    dispatch(fetchPublishedPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">

      {posts.map(post => (
        <Card key={post.id} className='blog-card'>
          <CardActionArea component={Link} to={`/blog/${post.id}`}>
            {/* <CardMedia
              component="img"
              alt={post.title}
              height="180"
              // paddingtop="56.25%"
              image={post?.cover_image}
              title={post.title}
            /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {post.title}
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p">
                <ReactMarkdown>
                  {post.body_markdown}
                </ReactMarkdown>
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Container>
  );
};

export default Blogs;
