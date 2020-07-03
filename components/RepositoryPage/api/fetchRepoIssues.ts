import { IssuesListForRepoResponseData } from '@octokit/types';

import octokit from '@/utils/octokit';

import { IIssue } from '@/components/RepositoryPage/state/typings';
import { ArrayElement } from '@/typings/utils';

const mapDataItemToIssue = (
  item: ArrayElement<IssuesListForRepoResponseData>
): IIssue => ({
  id: item.node_id,
  title: item.title,
  link: item.html_url,
  state: item.state as 'open' | 'closed',
});

const fetchRepoIssues = async (
  owner: string,
  repo: string
): Promise<Array<IIssue>> => {
  const { data } = await octokit.issues.listForRepo({ owner, repo });
  return data.map(mapDataItemToIssue);
};

export default fetchRepoIssues;
