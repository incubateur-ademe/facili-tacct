import { BoutonSecondaireClassic } from '@/design-system/base/Boutons';
import { Body, H2 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import styles from '../main.module.scss';

export const DiagnosticBloc = () => {
  return (
    <div className={styles.diagnosticContainer}>
      <NewContainer size="xl">
        <div className={styles.diagnosticWrapper}>
          <div className={styles.diagnosticText}>
            <H2 style={{ color: 'white' }}>Besoin d’être guidé pour évaluer votre diagnostic ?</H2>
            <Body style={{ color: 'white' }}>
              Votre territoire possède déjà un diagnostic de vulnérabilité
              climatique ? Exploitez-le ! Évitez de repartir de zéro et gagnez
              du temps et des ressources en évaluant d'abord le document existant.
            </Body>
            <BoutonSecondaireClassic
              size='lg'
              link="https://tally.so/r/3Nx98W"
              text="J'évalue mon diagnostic"
              rel="noopener noreferrer"
              style={{ marginTop: '2rem' }}
              posthogEventName='bouton_evaluer_diagnostic_home'
            />
          </div>
        </div>
      </NewContainer>
    </div>
  )
};
