import { render } from '@/__tests__/vitest';
import { NewsModel } from '@/typings';
import { NewsCard } from '..';

describe('NewsCard Component', () => {
    it('should render', () => {
        const { getByTestId } = render(<NewsCard news={{} as NewsModel} />);

        expect(getByTestId('news-card')).toBeDefined();
    });
});
