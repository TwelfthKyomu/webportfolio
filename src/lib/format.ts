type PluralForms = {
    one: string;
    few: string;
    many: string;
};

const pluralRules = new Intl.PluralRules('ru');

export function toTwoDigits(value: number) {
    return String(value).padStart(2, '0');
}

export function pluralize(count: number, forms: PluralForms) {
    const rule = pluralRules.select(count);

    if (rule === 'one') return forms.one;
    if (rule === 'few') return forms.few;

    return forms.many;
}
