const LANGUAGES = [
  { name: 'English', value: '0' },
  { name: 'Spanish', value: '' },
  { name: 'French', value: '' },
  { name: 'Chinese (Mandarin)', value: '' },
  { name: 'Hindi', value: '' },
  { name: 'Arabic', value: '' },
  { name: 'Russian', value: '' },
  { name: 'Japanese', value: '' },
  { name: 'German', value: '' },
  { name: 'Portuguese', value: '' },
  { name: 'Italian', value: '' },
  { name: 'Korean', value: '' },
  { name: 'Dutch', value: '' },
  { name: 'Turkish', value: '' },
  { name: 'Vietnamese', value: '' },
  { name: 'Thai', value: '' },
  { name: 'Swedish', value: '' },
  { name: 'Greek', value: '' },
  { name: 'Polish', value: '' },
  { name: 'Romanian', value: '' },
];

export const LANGUAGE_SELECT_OPTIONS = LANGUAGES.map((x) => ({
  label: x.name,
  value: x.name,
}));
