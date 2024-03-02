import { BlogItem, Container } from './styles';
import Moment from 'react-moment';
import { useQuery } from '@tanstack/react-query';
import sanityClient from '../../../client';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../../types';

const Index: React.FC = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      sanityClient
        .fetch(
          '*[_type == "post"]{mainImage {asset -> {url}}, title, description,author->, publishedAt, slug, categories[]->}'
        )
        .then((res) => res as BlogPost[]),
  });

  console.log(data);

  if (isPending) return <div>Blog Posts Loading</div>;

  if (error) return <div>An error occurred while fetching the blog posts</div>;

  return (
    <Container>
      {data.map(
        ({
          title,
          author,
          description,
          publishedAt,
          categories,
          mainImage,
          slug,
        }) => (
          <BlogItem>
            <img src={mainImage.asset.url} alt="Servers" />
            <div>
              <Link to={`/blog/${slug.current}`}>{title}</Link>
              <p>{description}</p>
              <div>
                <span>
                  <i className="bi bi-person"></i>
                  {author.name}
                </span>
                <span>
                  <i className="bi bi-calendar"></i>{' '}
                  <Moment format="MMMM Do YYYY">{new Date(publishedAt)}</Moment>
                </span>
                <span>
                  <i className="bi bi-tags"></i>
                  {categories[0].title}
                </span>
              </div>
            </div>
          </BlogItem>
        )
      )}
    </Container>
  );
};

export default Index;
