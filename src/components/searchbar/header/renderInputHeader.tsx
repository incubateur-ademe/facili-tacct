import { cx } from "@codegouvfr/react-dsfr/tools/cx";

export const RenderInputHeader = (props: SearchInputTagHeaderProps) => {
  const {
    params,
    className,
    typeTerritoire,
    setInputValue,
    setSearchCode,
    setSearchLibelle,
  } = props;
  return (
    <div ref={params.InputProps.ref}>
      <input
        {...params.inputProps}
        className={cx(params.inputProps.className, className)}
        placeholder={'Sélectionnez votre territoire'}
        disabled={!typeTerritoire}
        style={{
          borderRadius: '60px', 
          padding: '0 3.5rem 0rem 0.75rem', 
          fontSize: '14px',
          fontFamily: 'Marianne',
          fontWeight: 400,
          color: '#000000',
        }}
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
