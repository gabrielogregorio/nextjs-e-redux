export const defineTheme = (styles: any, status: string) => {
  return status === 'rejected'
    ? styles.rejected
    : status === 'approved'
    ? styles.approved
    : '';
};
