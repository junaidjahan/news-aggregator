import { render } from '@/__tests__/vitest';
import { NewsCard } from '..';


describe('NewsCard Component', () => {
  it('should render', () => {
    const { getByTestId } = render(<NewsCard />);

    expect(getByTestId('news-card')).toBeTruthy();
  });
});
