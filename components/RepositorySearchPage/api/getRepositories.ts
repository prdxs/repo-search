import { SearchReposResponseData } from '@octokit/types';
import moment from 'moment';

import { ArrayElement } from '@/typings/utils';
import octokit from '@/utils/octokit';

import { IRepository } from '@/components/RepositorySearchPage/state/typings';

const mapDataItemsToRepos = (
  item: ArrayElement<SearchReposResponseData['items']>
): IRepository => ({
  id: item.node_id,
  name: item.name,
  stars: item.stargazers_count,
  link: item.html_url,
  forks: item.forks_count,
  issues: item.open_issues_count,
  lastUpdated: moment(item.updated_at).format('Do MMM YYYY HH:mm:ss'),
});

const getRepositories = async (q: string): Promise<Array<IRepository>> => {
  const { data: dataByUser } = await octokit.search.repos({ q: `user:${q}` });
  const { data: dataByKeyword } = await octokit.search.repos({ q });

  const byUserIds = dataByUser.items.map((item) => item.node_id);
  const reposByUser = dataByUser.items.map(mapDataItemsToRepos);
  const reposByKeyword = dataByKeyword.items
    .filter((item) => byUserIds.includes(item.node_id))
    .map(mapDataItemsToRepos);

  return [...reposByUser, ...reposByKeyword];
};

export default getRepositories;
