import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BannerSobre = () => {
  const router = useRouter();
  const paths = router.asPath.split('/').filter(Boolean);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Link href="/" style={styles.link}>
          Home
        </Link>
        
        {paths.map((path, index) => {
          const route = `/${paths.slice(0, index + 1).join('/')}`;
          const isLast = index === paths.length - 1;
          const pathName = path
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          return (
            <React.Fragment key={route}>
              <span style={styles.separator}>›</span>
              {isLast ? (
                <span style={styles.currentPage}>{pathName}</span>
              ) : (
                <Link href={route} style={styles.link}>
                  {pathName}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    padding: '12px 0',
    borderBottom: '1px solid #e0e0e0',
    marginBottom: '30px'
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  link: {
    color: '#0095a4',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.2s',
    ':hover': {
      color: '#1D3D52',
      textDecoration: 'underline'
    }
  },
  currentPage: {
    color: '#1D3D52',
    fontSize: '14px',
    fontWeight: '500'
  },
  separator: {
    color: '#777',
    margin: '0 8px',
    fontSize: '14px'
  }
};

export default BannerSobre;