import { CODE_KEYWORDS } from '../constants';
import type { CodeToken } from '../types';

const KEYWORD_PATTERN = new RegExp(`\\b(${CODE_KEYWORDS.join('|')})\\b`);

export function tokenizeCode(source: string) {
    return source
        .trimEnd()
        .split('\n')
        .map((line): CodeToken[] => {
            if (line.trimStart().startsWith('//')) return [{ type: 'comment', text: line }];

            return line
                .split(KEYWORD_PATTERN)
                .map((text, index): CodeToken => ({ type: index % 2 ? 'keyword' : 'plain', text }))
                .filter((token) => token.text !== '');
        });
}
