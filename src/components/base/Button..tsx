export function Button({ children, ...restProps }: any) {
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
}
