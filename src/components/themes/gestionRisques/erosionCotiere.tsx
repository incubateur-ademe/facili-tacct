import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { MapErosionCotiere } from "@/components/maps/mapErosionCotiere";
import { EpciContoursMapper } from "@/lib/mapper/epci";
import { ErosionCotiereMapper } from "@/lib/mapper/erosionCotiere";
import { EpciContours, ErosionCotiere } from "@/lib/postgres/models";
import { CustomTooltip } from "@/lib/utils/CalculTooltip";
import { useSearchParams } from "next/navigation";
import styles from "./gestionRisques.module.scss";

const ErosionCotes = (props: { erosionCotiere: ErosionCotiere[], epciContours:EpciContours[] }) => {
  const { erosionCotiere, epciContours } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;
  const erosionCotiereMap = erosionCotiere.map(ErosionCotiereMapper);
  const epciContoursMap = epciContours.map(EpciContoursMapper);
  const title = <>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
    </div><br></br>
  </>
  return (
    <>
      {erosionCotiere ? (
        <div className={styles.container}>
          <div className="w-5/12">
            <div className={styles.explicationWrapper}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus sed lacus eget aliquam. Aenean est felis, commodo vel tincidunt eu, hendrerit sit amet neque. 
              </p>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?"/>
            </div>
            <div className="px-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus sed lacus eget aliquam. Aenean est felis, commodo vel tincidunt eu, hendrerit sit amet neque. Curabitur laoreet dui a urna accumsan, in elementum ligula porttitor. Vestibulum scelerisque aliquet nulla, id faucibus est eleifend at. Pellentesque sed pretium neque, a consequat turpis. Proin ante metus, fermentum non velit vel, aliquam ornare ipsum. Proin pellentesque vel ligula non auctor. Aenean elementum quis purus pulvinar pellentesque. Morbi sed cursus orci, id sagittis diam. Cras dui nulla, ornare pretium ligula at, eleifend aliquet justo. Cras in neque efficitur, aliquet massa et, rutrum dolor. Donec nec dui nunc. Vivamus non urna vel orci dignissim pellentesque luctus a velit. Vivamus pretium iaculis arcu at sodales. Suspendisse leo nulla, sodales ut urna a, dignissim bibendum mauris. Proin consequat velit risus, sed sagittis metus molestie sed.
              </p>
              <p>
                Phasellus vel nunc at purus porta mollis. Fusce molestie nisi sed felis aliquam, nec convallis augue vulputate. Mauris sagittis eros vitae mi mollis mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus eu dui sit amet urna elementum rhoncus non vel metus. Vivamus placerat dictum lacus a convallis. Nulla facilisi. Mauris iaculis imperdiet ligula, nec lacinia nunc ullamcorper ac.
              </p>
            </div>
          </div>
          <div className="w-7/12">
            <div className={styles.graphWrapper}>
              <div className={styles.catnatGraphTitleWrapper} style={{ padding: "1rem" }}>
                <h2>Érosion du littoral</h2>
              </div>
              <div className={styles.catnatGraphFiltersWrapper} style={{ padding: "0rem" }}>
                <MapErosionCotiere erosionCotiere={erosionCotiereMap} epciContours={epciContoursMap} />
              </div>     
              <p style={{ padding: "1em", margin: "0" }}>
                Source : <b style={{ color: "#0063CB" }}>CEREMA</b>
              </p>
            </div>              
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};

export default ErosionCotes;
