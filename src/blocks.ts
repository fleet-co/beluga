import Header from './components/Header';

export interface BlockData {
  title: string;
  Component: React.FC;
  type: string;
}

const blocks: BlockData[] = [
  {
    title: 'Hero header',
    Component: Header,
    type: "HERO"
  },
];

export default blocks;