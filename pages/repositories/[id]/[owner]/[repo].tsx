import React from 'react';
import { useRouter } from 'next/router';

import RepositoryPage from '@/components/RepositoryPage';

const RepositoriesPage: React.FC = () => {
  const router = useRouter();
  const { id, owner, repo } = router.query;

  return (
    <RepositoryPage
      id={id as string}
      owner={owner as string}
      repo={repo as string}
    />
  );
};

export default RepositoriesPage;
