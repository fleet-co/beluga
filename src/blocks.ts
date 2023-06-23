import Header from './components/Header';

export interface BlockData {
  title: string;
  component: React.FC;
}

const blocks: BlockData[] = [
  {
    title: 'Hero header',
    component: Header,
  },
];

export default blocks;