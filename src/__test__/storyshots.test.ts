import initStoryshots, {
  Stories2SnapsConverter,
} from '@storybook/addon-storyshots';
import { act, create } from 'react-test-renderer';

const wait = () =>
  act(
    () =>
      new Promise(resolve => {
        setTimeout(resolve, 1000);
      }),
  );

const converter = new Stories2SnapsConverter();

const runTest = async (story: any, context: any) => {
  const filename = converter.getSnapshotFileName(context);

  if (!filename) {
    return;
  }

  const storyElement = story.render();
  let tree;
  act(() => {
    tree = create(storyElement);
  });
  if (!tree) return;

  await wait();
  expect(tree.toJSON()).toMatchSpecificSnapshot(filename);

  tree.unmount();
};

initStoryshots({
  asyncJest: true,
  test: ({ story, context, done }) => {
    runTest(story, context).then(done);
  },
});
