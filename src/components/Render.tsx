import { PluginRenderProps } from '@lobehub/chat-plugin-sdk/client';
import { ActionIcon, SpotlightCard } from '@lobehub/ui';
import { Grid3x3, List } from 'lucide-react';
import { memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { Result } from '../type';
import GridItem from './GridItem';
import ListItem from './ListItem';

const listRender = (item: any) => <ListItem {...item} />;
const gridRender = (item: any) => <GridItem {...item} />;

const Render = memo<PluginRenderProps<Result>>(({ content }) => {
  const [grid, setGrid] = useState(false);
  console.log(content);
  return (
    <Flexbox gap={6}>
      <Flexbox horizontal>
        <ActionIcon active={!grid} icon={List} onClick={() => setGrid(false)} />
        <ActionIcon active={grid} icon={Grid3x3} onClick={() => setGrid(true)} />
      </Flexbox>

      <SpotlightCard
        columns={grid ? '1fr 1fr 1fr' : '1fr'}
        gap={grid ? 8 : 6}
        items={content}
        renderItem={grid ? gridRender : listRender}
      />
    </Flexbox>
  );
});

export default Render;
