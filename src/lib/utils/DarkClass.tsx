import { fr } from '@codegouvfr/react-dsfr';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';

export const DarkClass = () => {
  const { isDark } = useIsDark();
  return {
    backgroundColor: fr.colors.getHex({ isDark }).decisions.background.default
      .grey.active,
    // color: fr.colors.getHex({ isDark }).decisions.text.default.grey.default,
    '&:hover': {
      backgroundColor: fr.colors.getHex({ isDark }).decisions.background.alt
        .grey.hover
    }
  };
};
