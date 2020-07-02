import { ReposGetResponseData } from '@octokit/types';
import moment from 'moment';

import octokit from '@/utils/octokit';

import { IRepository } from '@/components/RepositorySearchPage/state/typings';

const mapDataItemToRepo = (item: ReposGetResponseData): IRepository => ({
  id: item.node_id,
  name: item.name,
  stars: item.stargazers_count,
  link: item.html_url,
  forks: item.forks_count,
  issues: item.open_issues_count,
  lastUpdated: moment(item.updated_at).format('Do MMM YYYY HH:mm:ss'),
});

const getRepository = async (
  owner: string,
  repo: string
): Promise<IRepository> => {
  const { data } = await octokit.repos.get({ owner, repo });
  return mapDataItemToRepo(data);
};

export default getRepository;
