const defaultMessage = 'Something has gone wrong';

export const getMutateError = (response: any) => {
  /**
   * !Handle Https error
   */
  if (typeof response?.message === 'string') {
    return response?.message;
  }

  if (response?.message?.length) {
    return response?.message?.[0] ?? defaultMessage;
  }

  return defaultMessage;
};
