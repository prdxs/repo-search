import { IIssue } from '@/components/RepositoryPage/state/typings';

export const issues: Array<IIssue> = [
  {
    id: '0',
    title: "Bug: what's sky-lighter.appspot.com?",
    link: 'https://github.com/facebook/react/issues/19245',
    state: 'open',
  },
  {
    id: '1',
    title:
      "Bug: Cannot read property 'references' of undefined in eslint-plugin-react-hooks v4.0.5",
    link: 'https://github.com/facebook/react/issues/19243',
    state: 'closed',
  },
];
