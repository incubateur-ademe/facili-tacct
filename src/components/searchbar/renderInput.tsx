import { cx } from "@codegouvfr/react-dsfr/tools/cx";

export const RenderInput = (props: SearchInputTagProps) => {
  const { 
    params, 
    className, 
    typeTerritoire, 
    setInputValue, 
    setSearchCode, 
    setSearchLibelle 
  } = props;
  return (
    <div ref={params.InputProps.ref}>
      <input
        {...params.inputProps}
        className={cx(params.inputProps.className, className)}
        placeholder={'Saisissez le nom de votre territoire'}
        disabled={!typeTerritoire}
        style={{ borderRadius: '4px 0 0 4px', padding: '0.5rem 3.5rem 0.5rem 1rem' }}
      />
      {params.InputProps.endAdornment && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setInputValue('');
            setSearchCode('');
            setSearchLibelle('');
          }}
        >
          {params.InputProps.endAdornment}
        </div>
      )}
    </div>
  );
}
