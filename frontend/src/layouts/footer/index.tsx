import {
  Container,
  FooterHeadingText,
  FooterInfoWrapper,
  FooterServiceList,
  RecentPostsWrapper,
  SectionTextHeading,
} from './styles';
import { Link } from 'react-router-dom';
import { BlogPost as BlogPostType } from '../../types';
import sanityClient from '../../client';
import { useQuery } from '@tanstack/react-query';
import Moment from 'react-moment';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const serviceList = [
  { name: 'Website Redesign', path: 'website-redesign' },
  { name: 'Responsive Web Design', path: 'responsive-web-design' },
  { name: 'Website Maintenance', path: 'website-maintenance' },
  { name: 'Domain hosting and Setup', path: 'domain-hosting-anf-setup' },
];

const Index: React.FC = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['footerRecentPosts'],

    queryFn: () =>
      sanityClient
        .fetch(
          `*[_type == "post"][0...1]{ title, publishedAt, slug, mainImage {asset -> {url}}} | order(publishedAt desc)`
        )
        .then((res) => res as BlogPostType[]),
  });

  if (error) return <div>An error occurred while fetching the blog posts</div>;

  return (
    <Container>
      <FooterInfoWrapper>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <SectionTextHeading>
                {' '}
                <i className="bi bi-code"></i>EasyWeb
              </SectionTextHeading>
              <div className="contact-info">
                <a href="mailto:info@easyweb.com.ng">info@easyweb.com.ng</a>

                <a href="tel:+23408128795195">08128795195</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div>
                <FooterHeadingText>
                  <span>Services</span>
                </FooterHeadingText>
                <FooterServiceList>
                  {serviceList.map((service) => (
                    <li key={service.name}>
                      <span className="d-flex align-items-center  justify-content-center ">
                        <i className="bi bi-gear"></i>
                      </span>{' '}
                      <Link to={`/services#${service.path}`}>
                        <span>{service.name}</span>
                      </Link>
                    </li>
                  ))}
                </FooterServiceList>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div>
                <FooterHeadingText>
                  <span>Recent Blog Posts</span>
                </FooterHeadingText>
                <RecentPostsWrapper>
                  {!isPending ? (
                    data.map(({ publishedAt, title, mainImage, slug }) => (
                      <div className="recent-post">
                        <img src={mainImage.asset.url} alt="" />
                        <div>
                          <Link
                            to={`/blog/${slug.current}`}
                            className="title-link"
                          >
                            {title}
                          </Link>
                          <span className="date">
                            <Moment format="MMMM DD, YYYY">
                              {publishedAt}
                            </Moment>
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="recent-post">
                      <Skeleton width={'96px'} height={'96px'} />
                      <div>
                        <Skeleton width={'128px'} height={'24px'} />
                        <Skeleton width={'96px'} height={'24px'} />
                      </div>
                    </div>
                  )}
                </RecentPostsWrapper>
              </div>
            </div>
          </div>
        </div>
      </FooterInfoWrapper>
    </Container>
  );
};

export default Index;
