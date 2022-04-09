import { Button } from "../../../components/Button";
import { Page } from "../../../components/Page";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Text } from "../../../components/Text";

export type GameOnboardingProps = {
  title: string;
};

export const GameInfo = ({ title }: { title: string }) => {
  return (
    <>
      <PanelTitle>{title}</PanelTitle>
      <div className="set">
        <h4>Meedoen</h4>
        <Text tone="light">
          Alle spelers moeten eerst naar pedago.game gaan.
        </Text>
      </div>
      <div>
        <h4>Unieke code</h4>
        <p>
          Spelers kunnen meedoen met het spel door de code in te vullen die
          straks verschijnt.
        </p>
      </div>
      <div>
        <h4>Scherm delen</h4>
        <p>
          Het is handig om je scherm te delen, zodat spelers ten alle tijden
          zien of ze al meedoen, of wat de code is.
        </p>
      </div>
      <div>
        <h4>Spel starten</h4>
        <p>Wanneer je het spel start kun je niet meer terug.</p>
      </div>
      <div>
        <h4>‘Locken’</h4>
        <p>
          Er is een slotje naast de startknop die je kunt indrukken om te
          voorkomen dat er nog meer mensen mee gaan doen.
        </p>
      </div>
      <div>
        <h4>Spelers verwijderen</h4>
        <p>
          Spelers kunnen worden gekickt wanneer ze niet welkom zijn, door er op
          te klikken of tappen.
        </p>
      </div>
      <div>
        <h4>Instellingen aanpassen</h4>
        <p>
          De timer kan worden uitgeschakeld en de groepsnamen kunnen worden
          aangepast.
        </p>
      </div>
    </>
  );
};

export const GameOnboarding = ({ handleOk }: { handleOk: () => void }) => {
  return (
    <Page valign="center">
      <Panel>
        <GameInfo title="Voor we beginnen" />
        <Button onClick={handleOk}>Ik snap het</Button>
      </Panel>
    </Page>
  );
};
