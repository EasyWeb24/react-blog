import {
  BlogPost,
  CategoriesDisplay,
  Container,
  MetaDataWrapper,
  RecentPostsDisplay,
} from './styles';
import { useQuery } from '@tanstack/react-query';
import { BlogPost as BlogPostType } from '../../../types';
import sanityClient from '../../../client';
import { Link, useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import Moment from 'react-moment';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Index: React.FC = () => {
  const { slug } = useParams();

  const {
    isPending: blogPostLoading,
    error: blogPostError,
    data: blogPostData,
  } = useQuery({
    queryKey: ['blogPostData'],
    queryFn: () =>
      sanityClient
        .fetch(
          `*[_type == "post" && slug.current == '${slug}']{mainImage {asset -> {url}}, title, body,author->, publishedAt, slug, categories[]->}`
        )
        .then((res) => res as BlogPostType[]),
  });

  const {
    isPending: categoriesLoading,
    error: categoriesError,
    data: categoriesData,
  } = useQuery({
    queryKey: ['categoriesData'],

    queryFn: () =>
      sanityClient
        .fetch(
          ` *[_type == 'post'] {
            categories[]->{
              title
            }
          }
          |> group(categories[]._id)
          |> project(category, count: count())`
        )
        .then((res) => res as [{ category: string; count: number }]),
  });

  const {
    isPending: recentPostsLoading,
    error: recentPostsError,
    data: recentPostsData,
  } = useQuery({
    queryKey: ['recentPostsData'],
    enabled: blogPostData && Object.keys(blogPostData).length > 0,

    queryFn: () =>
      sanityClient
        .fetch(
          `*[_type == "post" && slug.current == '${slug}'][0...2]{ title, publishedAt, slug} | order(publishedAt desc)`
        )
        .then((res) => res as BlogPostType[]),
  });

  console.log(categoriesError);

  if (blogPostLoading || recentPostsLoading || categoriesLoading)
    return (
      <Container>
        <div className="blog-post-wrapper">
          <BlogPost>
            <Skeleton height={'384px'} />
            <div className="blog-text-content-wrapper">
              <Skeleton height={'48px'} />
              <br />
              <Skeleton height={'64px'} />
              <br />
              <Skeleton count={10} />
            </div>
          </BlogPost>{' '}
          <RecentPostsDisplay>
            <div className="post-items-wrapper">
              <Skeleton height={'32px'} />
              <br />
              <Skeleton height={'32px'} count={3} />
            </div>
          </RecentPostsDisplay>
        </div>
      </Container>
    );

  if (blogPostError || recentPostsError || categoriesError)
    return <div>An error occurred while fetching the blog posts</div>;

  return (
    <Container>
      <div className="blog-post-wrapper">
        <BlogPost>
          {<img src={blogPostData[0].mainImage.asset.url} />}
          <div className="blog-text-content-wrapper">
            <MetaDataWrapper>
              <div className="meta-data-inner-wrapper">
                <span>
                  <i className="bi bi-person"></i>
                  {blogPostData[0].author.name}
                </span>
                <span>
                  <i className="bi bi-calendar"></i>{' '}
                  <Moment format="MMMM DD, YYYY">
                    {new Date(blogPostData[0].publishedAt)}
                  </Moment>
                </span>
                <span>
                  <i className="bi bi-tags"></i>{' '}
                  {blogPostData[0].categories[0].title}
                </span>
              </div>
            </MetaDataWrapper>
            <h3>{blogPostData[0].title}</h3>
            <PortableText value={blogPostData[0].body} />
          </div>
        </BlogPost>
        <div>
          <RecentPostsDisplay>
            <h3 className="heading">
              <span>Recent Posts</span>
            </h3>
            <div className="post-items-wrapper">
              {recentPostsData.map(({ title, slug }) => (
                <Link to={`/blog/${slug.current}`} className="post-item">
                  {title}
                </Link>
              ))}
            </div>
          </RecentPostsDisplay>
          <CategoriesDisplay>
            <h3 className="heading">
              <span>Categories</span>
            </h3>
            <div className="categories-wrapper">
              {categoriesData.map(({ category, count }) => (
                <Link to={`/blog/${category}`} className="category-item">
                  {count}
                </Link>
              ))}
            </div>
          </CategoriesDisplay>
        </div>
      </div>
    </Container>
  );
};

export default Index;
